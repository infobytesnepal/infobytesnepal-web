/**
 * Syncs ONLY the page sections whose copy drives search rankings, from
 * src/lib/content.ts into the database.
 *
 * Why this exists instead of `npm run db:seed`:
 * the full seed upserts every section, including contact, privacy-policy, and
 * footer. If any of those were edited from the admin panel, the seed silently
 * reverts them to the code defaults. This script touches three sections and
 * leaves everything else exactly as it is.
 *
 * The home hero headline is the page H1 and carries the primary keyword, so it
 * is the single highest value string on the site.
 *
 * Usage:
 *   node ./node_modules/tsx/dist/cli.cjs scripts/sync-page-copy.ts          (dry run, shows the diff)
 *   node ./node_modules/tsx/dist/cli.cjs scripts/sync-page-copy.ts --apply  (writes)
 */
import { loadEnvConfig } from "@next/env";
import { and, eq } from "drizzle-orm";
import { pageContent } from "../src/lib/db/schema";
import { defaultPageContent } from "../src/lib/content";

// Env must be loaded before the db client module is evaluated, because that
// module reads TURSO_DATABASE_URL at import time and silently falls back to
// the local sqlite file when it is missing. Hence the deferred import in main().
loadEnvConfig(process.cwd());
let db: (typeof import("../src/lib/db/client"))["db"];

const APPLY = process.argv.includes("--apply");

const sections = [
  ["home", "hero", defaultPageContent.homeHero],
  ["about", "section1", defaultPageContent.aboutSection1],
  ["about", "section2", defaultPageContent.aboutSection2],
] as const;

function id() {
  return crypto.randomUUID();
}

/**
 * Fields that hold an image, video, or uploaded asset rather than copy.
 * These are never synced: the live value may be an admin upload that the code
 * default would destroy.
 */
function isMediaKey(key: string) {
  return (
    /^techLogo\d+$/.test(key) ||
    /(imageUrl|ImageUrl|VideoUrl|backgroundUrl|logoUrl|Url)$/.test(key)
  );
}

async function main() {
  ({ db } = await import("../src/lib/db/client"));

  const target = process.env.TURSO_DATABASE_URL ? "REMOTE (production Turso)" : "LOCAL (file:local.db)";
  console.log(`Target database: ${target}`);
  console.log(APPLY ? "APPLYING changes\n" : "DRY RUN, nothing will be written. Pass --apply to write.\n");

  for (const [pageKey, sectionKey, content] of sections) {
    const [row] = await db
      .select()
      .from(pageContent)
      .where(and(eq(pageContent.pageKey, pageKey), eq(pageContent.sectionKey, sectionKey)))
      .limit(1);

    let current: Record<string, unknown> = {};
    try {
      current = row?.contentJson ? JSON.parse(row.contentJson) : {};
    } catch {
      current = {};
    }

    console.log(`--- ${pageKey}.${sectionKey} ---`);
    for (const [key, nextValue] of Object.entries(content)) {
      if (isMediaKey(key)) continue;
      const currentValue = current[key];
      if (currentValue === nextValue) continue;
      console.log(`  ${key}`);
      console.log(`    before: ${JSON.stringify(currentValue ?? null)}`);
      console.log(`    after : ${JSON.stringify(nextValue)}`);
    }

    // Text only. Media fields are excluded because the admin panel stores
    // uploads as base64 data URIs in these same objects, and the code defaults
    // point at /assets/tech/*.svg paths that are not in the repo. Merging the
    // defaults over a real upload replaces a working image with a dead link.
    const merged: Record<string, unknown> = { ...current };
    for (const [key, value] of Object.entries(content)) {
      if (isMediaKey(key)) continue;
      merged[key] = value;
    }

    if (APPLY) {
      await db
        .insert(pageContent)
        .values({ id: id(), pageKey, sectionKey, contentJson: JSON.stringify(merged) })
        .onConflictDoUpdate({
          target: [pageContent.pageKey, pageContent.sectionKey],
          set: { contentJson: JSON.stringify(merged), updatedAt: new Date().toISOString() },
        });
      console.log("  written\n");
    } else {
      console.log("");
    }
  }

  console.log(APPLY ? "Done. Redeploy or wait for revalidation for the change to show." : "Dry run complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
