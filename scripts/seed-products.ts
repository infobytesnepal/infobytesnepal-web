/**
 * Targeted production seed.
 *
 * `npm run db:seed` is a full reset: it upserts page content, site settings, SEO
 * rows, and the admin password from the repo defaults. Production now holds
 * admin-edited content that does not exist in the repo (uploaded logos and tech
 * icons stored as base64 data URIs, custom hero and goals copy), so running the
 * full seed would overwrite it and point the About page tech logos at
 * /assets/tech/*.svg, which is not in the repo at all.
 *
 * This script does only what the Nidanyo launch needs:
 *   1. insert the Nidanyo product if it is missing
 *   2. refresh the marketing copy on existing products (the de-AI rewrite)
 * It never touches logoUrl, isPublished, displayOrder, page content, settings,
 * SEO rows, or admin users.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

const DRY_RUN = process.argv.includes("--dry-run");

async function main() {
  const { eq } = await import("drizzle-orm");
  const { db } = await import("../src/lib/db/client");
  const { products } = await import("../src/lib/db/schema");
  const { productSeeds, productSeoDefaults } = await import("../src/lib/content");

  const existing = await db.select().from(products);
  const bySlug = new Map(existing.map((r) => [r.slug, r]));
  const now = new Date().toISOString();

  for (const seed of productSeeds) {
    const current = bySlug.get(seed.slug);
    const seo = productSeoDefaults[seed.slug];

    if (!current) {
      console.log(`INSERT ${seed.slug}`);
      if (!DRY_RUN) {
        await db.insert(products).values({
          id: crypto.randomUUID(),
          name: seed.name,
          slug: seed.slug,
          logoUrl: seed.logoUrl,
          shortDescription: seed.shortDescription,
          fullDescription: seed.fullDescription,
          displayOrder: seed.displayOrder,
          isPublished: true,
          seoTitle: seo?.title || `${seed.name} | Infobytes Nepal`,
          seoDescription: seo?.description || seed.shortDescription,
          ogImage: "/assets/hero/infobytes-hero-fallback.webp",
        });
      }
      continue;
    }

    const copyChanged =
      current.shortDescription !== seed.shortDescription || current.fullDescription !== seed.fullDescription;
    if (!copyChanged) {
      console.log(`SKIP   ${seed.slug} (copy already current)`);
      continue;
    }

    console.log(`UPDATE ${seed.slug} copy only (logo, order, publish state preserved)`);
    if (!DRY_RUN) {
      await db
        .update(products)
        .set({
          shortDescription: seed.shortDescription,
          fullDescription: seed.fullDescription,
          updatedAt: now,
        })
        .where(eq(products.slug, seed.slug));
    }
  }

  const after = await db.select().from(products);
  console.log(`\n${DRY_RUN ? "[dry run] " : ""}products now: ${after.length}`);
  for (const r of after.sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0))) {
    const logo = r.logoUrl?.startsWith("data:") ? "uploaded data URI" : r.logoUrl;
    console.log(`   ${String(r.displayOrder).padEnd(2)} ${r.slug.padEnd(10)} pub=${r.isPublished} logo=${logo}`);
  }
}

main().catch((e) => { console.error("ERR", e); process.exit(1); });
