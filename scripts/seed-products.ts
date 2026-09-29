/**
 * Targeted production seed: add products from the repo that the database is
 * missing, and leave everything else alone.
 *
 * `npm run db:seed` is a full reset: it upserts page content, site settings, SEO
 * rows, and the admin password from the repo defaults. Production holds
 * admin-edited content that does not exist in the repo (uploaded logos and tech
 * icons, custom hero and goals copy), so running the full seed would overwrite
 * it. This script never touches page content, settings, SEO rows, or users.
 *
 * Insert-only by default, and that default was chosen the hard way. The earlier
 * version also refreshed the marketing copy on products that already existed,
 * which is fine exactly once — during the launch it was written for — and a trap
 * afterwards. By the time ClinicNP was added, the live Nidanyo row had three
 * hyphens an editor had put in by hand ("month-end", "out-of-range",
 * "go-live"), and adding a sixth product would have quietly reverted all three.
 * A script whose job is "add the new product" must not also un-edit the old
 * ones, so refreshing copy now requires asking for it:
 *
 *   npm run db:seed:products                    insert missing products only
 *   npm run db:seed:products -- --dry-run       report, change nothing
 *   npm run db:seed:products -- --refresh-copy  also push repo copy over the DB
 *
 * `--refresh-copy` prints what it is about to overwrite before it does it, and
 * it still never touches logoUrl, isPublished, displayOrder, or SEO fields —
 * those are the admin's to own once a row exists.
 *
 * `.env.local` points at the production Turso database, so this writes to
 * production. Check before running it.
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

const DRY_RUN = process.argv.includes("--dry-run");
const REFRESH_COPY = process.argv.includes("--refresh-copy");

/** First line of a diff, so an overwrite is visible before it happens. */
function firstDifference(before: string, after: string) {
  for (let i = 0; i < Math.max(before.length, after.length); i += 1) {
    if (before[i] !== after[i]) {
      const from = Math.max(0, i - 40);
      return `at ${i}: db "…${before.slice(from, i + 40)}…" -> repo "…${after.slice(from, i + 40)}…"`;
    }
  }
  return "(no visible difference)";
}

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

    if (!REFRESH_COPY) {
      // Not a failure. The database being ahead of the repo is the normal state
      // for a row somebody has edited in the CMS, and the repo seed is only the
      // starting value. Say so and move on.
      console.log(`LEAVE  ${seed.slug} (db copy differs from the repo seed; pass --refresh-copy to overwrite)`);
      console.log(`         ${firstDifference(current.fullDescription, seed.fullDescription)}`);
      continue;
    }

    console.log(`UPDATE ${seed.slug} copy only (logo, order, publish state, SEO preserved)`);
    console.log(`         ${firstDifference(current.fullDescription, seed.fullDescription)}`);
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
