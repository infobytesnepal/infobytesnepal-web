import { loadEnvConfig } from "@next/env";
import { eq } from "drizzle-orm";
import { extensionForType } from "../src/lib/utils";

/**
 * Moves CMS images out of the HTML and behind the cacheable media route.
 *
 * The CMS has always stored uploads as base64 data URIs, because there is no
 * object storage on this project. That is a reasonable way to *store* them and
 * a very expensive way to *serve* them: the whole image is pasted into the HTML
 * of every page that shows it. Measured before this script was written, the
 * home page was a 2.3 MB document of which 2.0 MB — 90 percent — was 71 inlined
 * images, and the site logo alone put 246 KB into every single page on the site
 * because it renders twice, in the header and the footer.
 *
 * None of that can be cached, and none of it can go through the image
 * optimizer, so the same bytes are re-downloaded on every page view at full
 * size. On a mid range phone on Nepali mobile data that is the difference
 * between a fast site and a slow one.
 *
 * The fix is to keep storing the bytes in `media_assets` — that table is the
 * byte store and stays exactly as it is — but to change what the *referencing*
 * rows hold, from the data URI itself to `/api/media/<id>`. That path is a
 * same-origin URL, so the browser caches it and `next/image` can resize and
 * convert it to AVIF or WebP, neither of which was possible before.
 *
 * Safe to run repeatedly: a value that is already a path is skipped. Nothing is
 * deleted, and the original bytes remain in `media_assets`, so the change is
 * reversible.
 *
 *   npm run db:optimize-images            # report only, writes nothing
 *   npm run db:optimize-images -- --apply # perform the rewrite
 */
loadEnvConfig(process.cwd());

const apply = process.argv.includes("--apply");

function isDataUri(value: unknown): value is string {
  return typeof value === "string" && value.startsWith("data:");
}

/** A media path written before extensions were added, e.g. /api/media/<uuid>. */
function isExtensionlessMediaPath(value: unknown) {
  return typeof value === "string" && /^\/api\/media\/[0-9a-f-]{36}$/i.test(value);
}

function kb(bytes: number) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function main() {
  const { db } = await import("../src/lib/db/client");
  const { mediaAssets, pageContent, products, siteSettings } = await import("../src/lib/db/schema");

  const assets = await db.select().from(mediaAssets);
  /** Existing bytes are reused when the identical image is already stored. */
  const idByUrl = new Map(assets.map((asset) => [asset.url, asset.id]));

  let saved = 0;
  let rewritten = 0;
  let created = 0;

  const typeById = new Map(assets.map((asset) => [asset.id, asset.type]));

  /** Returns the /api/media path for a data URI, creating the asset if needed. */
  async function pathFor(dataUri: string, name: string, altText: string) {
    const type = dataUri.slice(5, dataUri.indexOf(";")) || "image/png";
    const existing = idByUrl.get(dataUri);
    if (existing) return `/api/media/${existing}.${extensionForType(typeById.get(existing) ?? type)}`;

    const id = crypto.randomUUID();
    if (apply) {
      const now = new Date().toISOString();
      await db.insert(mediaAssets).values({ id, name, url: dataUri, type, altText, createdAt: now, updatedAt: now });
    }
    idByUrl.set(dataUri, id);
    typeById.set(id, type);
    created += 1;
    return `/api/media/${id}.${extensionForType(type)}`;
  }

  /** Upgrades a path written before extensions existed. */
  function withExtension(path: string) {
    const id = path.split("/").pop()!;
    return `/api/media/${id}.${extensionForType(typeById.get(id) ?? "image/png")}`;
  }

  console.log(apply ? "\nApplying changes.\n" : "\nDry run. Nothing will be written. Pass --apply to perform it.\n");

  // ---- site settings -------------------------------------------------------
  for (const row of await db.select().from(siteSettings)) {
    if (isExtensionlessMediaPath(row.value)) {
      const upgraded = withExtension(String(row.value));
      console.log(`  site_settings.${row.key.padEnd(16)} extension -> ${upgraded}`);
      rewritten += 1;
      if (apply) {
        await db.update(siteSettings).set({ value: upgraded, updatedAt: new Date().toISOString() }).where(eq(siteSettings.id, row.id));
      }
      continue;
    }
    if (!isDataUri(row.value)) continue;
    const path = await pathFor(row.value, `Site ${row.key}`, "Infobytes Nepal");
    console.log(`  site_settings.${row.key.padEnd(16)} ${kb(row.value.length).padStart(8)} -> ${path}`);
    saved += row.value.length;
    rewritten += 1;
    if (apply) {
      await db
        .update(siteSettings)
        .set({ value: path, updatedAt: new Date().toISOString() })
        .where(eq(siteSettings.id, row.id));
    }
  }

  // ---- products ------------------------------------------------------------
  for (const product of await db.select().from(products)) {
    const patch: Record<string, string> = {};
    for (const field of ["logoUrl", "ogImage"] as const) {
      const value = product[field];
      if (isExtensionlessMediaPath(value)) {
        patch[field] = withExtension(String(value));
        console.log(`  products[${product.slug}].${field.padEnd(10)} extension -> ${patch[field]}`);
        rewritten += 1;
        continue;
      }
      if (!isDataUri(value)) continue;
      const path = await pathFor(value, `${product.name} ${field}`, product.name);
      console.log(`  products[${product.slug}].${field.padEnd(10)} ${kb(value.length).padStart(8)} -> ${path}`);
      patch[field] = path;
      saved += value.length;
      rewritten += 1;
    }
    if (apply && Object.keys(patch).length) {
      await db
        .update(products)
        .set({ ...patch, updatedAt: new Date().toISOString() })
        .where(eq(products.id, product.id));
    }
  }

  // ---- page sections -------------------------------------------------------
  for (const row of await db.select().from(pageContent)) {
    let content: Record<string, unknown>;
    try {
      content = JSON.parse(row.contentJson);
    } catch {
      console.log(`  page_content[${row.pageKey}/${row.sectionKey}] has malformed JSON, skipped`);
      continue;
    }

    let changed = false;
    for (const [key, value] of Object.entries(content)) {
      if (isExtensionlessMediaPath(value)) {
        content[key] = withExtension(String(value));
        console.log(`  page_content[${row.pageKey}/${row.sectionKey}].${key.padEnd(12)} extension -> ${content[key]}`);
        rewritten += 1;
        changed = true;
        continue;
      }
      if (!isDataUri(value)) continue;
      const path = await pathFor(value, `${row.pageKey} ${row.sectionKey} ${key}`, String(content.title ?? key));
      console.log(`  page_content[${row.pageKey}/${row.sectionKey}].${key.padEnd(12)} ${kb(value.length).padStart(8)} -> ${path}`);
      content[key] = path;
      saved += value.length;
      rewritten += 1;
      changed = true;
    }

    if (apply && changed) {
      await db
        .update(pageContent)
        .set({ contentJson: JSON.stringify(content), updatedAt: new Date().toISOString() })
        .where(eq(pageContent.id, row.id));
    }
  }

  console.log(
    `\n${rewritten} reference(s) rewritten, ${created} new media asset(s) registered.` +
      `\nRemoved roughly ${kb(saved)} of base64 from the HTML each time these pages render.\n`,
  );
  if (!apply) console.log("Re-run with --apply to make the change.\n");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
