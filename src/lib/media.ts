import "server-only";

import { desc, eq, sql } from "drizzle-orm";
import { db } from "./db/client";
import { mediaAssets, pageContent, posts, products, seoSettings, siteSettings } from "./db/schema";
import { mediaPath, newId } from "./utils";

/**
 * Upload handling shared by the product, page-section, settings and blog forms.
 *
 * This lived inside `lib/actions/admin.ts` while it had one caller. It moved
 * here when the blog editor became the second: a `"use server"` module can only
 * export async functions, and every one it exports becomes a callable endpoint,
 * so exporting the helper from there would have published the upload routine as
 * an action of its own with no auth check in front of it.
 */

/** Ordinary CMS images: logos, OG images, section art. */
export const maxImageBytes = 1_500_000;

/**
 * Blog body and cover images, which are photographs rather than logos.
 *
 * Higher than the limit above because a 1.5MB ceiling rejects a normal photo
 * straight off a phone, and the blog is the one place a non-technical author is
 * expected to add images unaided. Still bounded: the bytes are base64 encoded
 * into a database row, which costs a third again on top of the file size. The
 * editor compresses in the browser first (`lib/image-prep.ts`), so in practice
 * uploads arrive far below this.
 */
export const maxBlogImageBytes = 3_000_000;

/**
 * Formats a browser can display and the image pipeline can serve.
 *
 * HEIC is the notable absence. It is what an iPhone saves by default, it passes
 * an `image/*` check, and it renders as a broken image in every desktop browser
 * except Safari — so it was accepted, stored, and then shown to nobody.
 */
const displayableTypes = new Set([
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/avif",
  "image/gif",
  "image/svg+xml",
]);

export function formFile(formData: FormData, key: string) {
  const value = formData.get(key);
  if (!value || typeof value === "string" || !("arrayBuffer" in value)) return null;
  const file = value as File;
  return file.size > 0 ? file : null;
}

export function formatBytes(bytes: number) {
  return `${(bytes / 1_000_000).toFixed(1)}MB`;
}

/** Encodes a file as a base64 data URI. The `media_assets.url` column holds
 * these: it is the byte store that `/api/media/<id>` reads from. */
export async function toDataUri(file: File) {
  const bytes = Buffer.from(await file.arrayBuffer());
  return `data:${file.type};base64,${bytes.toString("base64")}`;
}

/**
 * Why a file cannot be stored, or null if it can.
 *
 * Returns rather than throws. Every caller used to find out about a bad file by
 * catching an exception from inside the upload — or, in four of the five forms,
 * by not catching it, which in production replaced the whole admin page with
 * Next's generic "a server-side exception has occurred" screen. Checking first
 * also means a form is fully validated before anything is written, so a save
 * that is going to be rejected no longer leaves an orphaned 2 MB row behind.
 */
export function imageProblem(file: File | null, maxBytes = maxImageBytes): string | null {
  if (!file) return null;
  if (file.type === "image/heic" || file.type === "image/heif" || /\.hei[cf]$/i.test(file.name)) {
    return "HEIC photos (the iPhone default) cannot be shown in most browsers. Export it as JPEG or PNG first.";
  }
  if (!displayableTypes.has(file.type)) {
    return `"${file.name}" is not a supported image. Use PNG, JPEG, WebP, AVIF, GIF, or SVG.`;
  }
  if (file.size > maxBytes) {
    return `"${file.name}" is ${formatBytes(file.size)}. Images here must be ${formatBytes(maxBytes)} or smaller.`;
  }
  return null;
}

async function insertAsset(file: File, name: string, altText: string, createdAt?: string) {
  const id = newId();
  const now = new Date().toISOString();
  await db.insert(mediaAssets).values({
    id,
    name: name || file.name || "Uploaded image",
    url: await toDataUri(file),
    type: file.type,
    altText,
    // A replacement keeps its original's date, so it holds the same place in
    // the library instead of jumping to the top of a list sorted by date.
    createdAt: createdAt ?? now,
    updatedAt: now,
  });
  return { id, url: mediaPath(id, file.type) };
}

/**
 * Stores an upload and returns the URL to save on the referencing row, or
 * `fallbackUrl` when no file was chosen — which is how every form here says
 * "leave the existing image alone".
 *
 * The returned value is a `/api/media/<id>` path, not the data URI itself.
 * That distinction is the whole point: the bytes still live in the database,
 * but the row that points at them holds a short cacheable URL instead of 120 KB
 * of base64 that would otherwise be pasted into the HTML of every page showing
 * the image. See `scripts/optimize-stored-images.ts` for the measurements that
 * prompted the change, and for the backfill of rows written before it.
 *
 * Callers are expected to have run `imageProblem` first; this still refuses a
 * bad file rather than trusting that they did.
 */
export async function storeUploadedImage(
  file: File | null,
  fallbackUrl: string,
  name: string,
  altText = "",
  maxBytes = maxImageBytes,
) {
  if (!file) return fallbackUrl;
  const problem = imageProblem(file, maxBytes);
  if (problem) throw new Error(problem);
  return (await insertAsset(file, name, altText)).url;
}

/** The blog editor's upload. Same store, higher size ceiling for photographs. */
export async function storeBlogImage(file: File, name: string, altText = "") {
  const problem = imageProblem(file, maxBlogImageBytes);
  if (problem) throw new Error(problem);
  return insertAsset(file, name || file.name || "Blog image", altText);
}

// ---------------------------------------------------------------- usage

const mediaRef = /\/api\/media\/([0-9a-f-]{36})(?:\.[a-z0-9]+)?/gi;

/**
 * Every place each media asset is used, keyed by asset id.
 *
 * Nothing in the schema records this — the referencing columns are free text —
 * so it is recovered by scanning the handful of columns that can hold an image
 * path. It is cheap: those columns are short strings except `posts.body_markdown`,
 * and none of them are the base64 blobs.
 *
 * It exists because the Media tab deleted assets blind. Deleting one a live page
 * pointed at left a broken image on the site, and there was no way to see which
 * of the library's rows were in use and which were the leftovers of failed saves.
 */
export async function getMediaUsage(): Promise<Map<string, string[]>> {
  const usage = new Map<string, string[]>();
  const note = (text: string | null | undefined, where: string) => {
    for (const match of (text || "").matchAll(mediaRef)) {
      const id = match[1].toLowerCase();
      const list = usage.get(id) ?? [];
      if (!list.includes(where)) list.push(where);
      usage.set(id, list);
    }
  };

  const [productRows, postRows, settingRows, sectionRows, seoRows] = await Promise.all([
    db.select({ name: products.name, logoUrl: products.logoUrl, ogImage: products.ogImage }).from(products),
    db.select({ title: posts.title, coverImage: posts.coverImage, bodyMarkdown: posts.bodyMarkdown }).from(posts),
    db.select({ key: siteSettings.key, value: siteSettings.value }).from(siteSettings),
    db.select({ pageKey: pageContent.pageKey, sectionKey: pageContent.sectionKey, contentJson: pageContent.contentJson }).from(pageContent),
    db.select({ route: seoSettings.route, ogImage: seoSettings.ogImage }).from(seoSettings),
  ]);

  for (const row of productRows) {
    note(row.logoUrl, `Product "${row.name}" logo`);
    note(row.ogImage, `Product "${row.name}" share image`);
  }
  for (const row of postRows) {
    note(row.coverImage, `Post "${row.title}" cover`);
    note(row.bodyMarkdown, `Post "${row.title}" body`);
  }
  for (const row of settingRows) note(row.value, `Site settings: ${row.key}`);
  for (const row of sectionRows) note(row.contentJson, `Page section: ${row.pageKey} / ${row.sectionKey}`);
  for (const row of seoRows) note(row.ogImage, `SEO settings: ${row.route}`);

  return usage;
}

/**
 * The media library without the bytes.
 *
 * `select *` on this table returns every image as base64 — 61 MB across 80
 * rows by the time it was measured — and the Media tab then rendered each one
 * inline as an `<img src="data:…">`. The page came out at 123 MB of HTML and
 * took 46 seconds locally; on Vercel, whose functions cannot return more than
 * 4.5 MB, it could not load at all. This reads the metadata and the stored size
 * only, and the page shows thumbnails through `/api/media`, which the image
 * optimizer shrinks to a few kilobytes each.
 */
export async function getMediaLibrary() {
  return db
    .select({
      id: mediaAssets.id,
      name: mediaAssets.name,
      type: mediaAssets.type,
      altText: mediaAssets.altText,
      createdAt: mediaAssets.createdAt,
      updatedAt: mediaAssets.updatedAt,
      // base64 is 4/3 of the original, so this is the stored file size.
      bytes: sql<number>`cast(length(${mediaAssets.url}) * 3 / 4 as integer)`,
      // Replaced or renamed in the last ten minutes. Worked out here rather than
      // with Date.now() in the page, which React treats as an impure render.
      recentlyChanged: sql<number>`${mediaAssets.updatedAt} != ${mediaAssets.createdAt} and ${mediaAssets.updatedAt} > strftime('%Y-%m-%dT%H:%M:%fZ', 'now', '-10 minutes')`,
    })
    .from(mediaAssets)
    .orderBy(desc(mediaAssets.createdAt));
}

/**
 * Replaces an asset's image by storing it under a new id and repointing every
 * reference, then removing the old row.
 *
 * Not an in-place overwrite, which is what the Media tab used to do. The URL
 * `/api/media/<id>` is cached by the browser for a day, by the edge for a week,
 * and — once next/image has optimized it — by the image optimizer for 31 days
 * (`minimumCacheTTL` in next.config.ts). Overwriting the bytes behind an
 * unchanged URL therefore changed nothing anyone could see for up to a month,
 * which is indistinguishable from the replace not working. A new id is a new
 * URL, and a new URL is never stale.
 */
export async function replaceAsset(oldId: string, file: File, name: string, altText: string) {
  const [original] = await db
    .select({ createdAt: mediaAssets.createdAt })
    .from(mediaAssets)
    .where(eq(mediaAssets.id, oldId))
    .limit(1);
  const { id: newAssetId, url: newUrl } = await insertAsset(file, name, altText, original?.createdAt ?? undefined);
  const pattern = new RegExp(`/api/media/${oldId}(?:\\.[a-z0-9]+)?`, "gi");
  const swap = (text: string | null) => (text ? text.replace(pattern, newUrl) : text);
  const touched: string[] = [];
  const now = new Date().toISOString();

  for (const row of await db.select().from(products)) {
    const logoUrl = swap(row.logoUrl) ?? row.logoUrl;
    const ogImage = swap(row.ogImage);
    if (logoUrl !== row.logoUrl || ogImage !== row.ogImage) {
      await db.update(products).set({ logoUrl, ogImage, updatedAt: now }).where(eq(products.id, row.id));
      touched.push("products");
    }
  }
  for (const row of await db.select({ id: posts.id, coverImage: posts.coverImage, bodyMarkdown: posts.bodyMarkdown }).from(posts)) {
    const coverImage = swap(row.coverImage) ?? row.coverImage;
    const bodyMarkdown = swap(row.bodyMarkdown) ?? row.bodyMarkdown;
    if (coverImage !== row.coverImage || bodyMarkdown !== row.bodyMarkdown) {
      await db.update(posts).set({ coverImage, bodyMarkdown, updatedAt: now }).where(eq(posts.id, row.id));
      touched.push("posts");
    }
  }
  for (const row of await db.select().from(siteSettings)) {
    const value = swap(row.value) ?? row.value;
    if (value !== row.value) {
      await db.update(siteSettings).set({ value, updatedAt: now }).where(eq(siteSettings.id, row.id));
      touched.push("settings");
    }
  }
  for (const row of await db.select().from(pageContent)) {
    const contentJson = swap(row.contentJson) ?? row.contentJson;
    if (contentJson !== row.contentJson) {
      await db.update(pageContent).set({ contentJson, updatedAt: now }).where(eq(pageContent.id, row.id));
      touched.push("pages");
    }
  }
  for (const row of await db.select().from(seoSettings)) {
    const ogImage = swap(row.ogImage);
    if (ogImage !== row.ogImage) {
      await db.update(seoSettings).set({ ogImage, updatedAt: now }).where(eq(seoSettings.id, row.id));
      touched.push("seo");
    }
  }

  await db.delete(mediaAssets).where(eq(mediaAssets.id, oldId));
  return { id: newAssetId, url: newUrl, touched: [...new Set(touched)] };
}
