/**
 * One off repair: restores the admin uploaded tech logo images on
 * about.section2 from a recovered JSON snapshot.
 *
 * Context: those slots hold base64 data URIs uploaded through the admin media
 * panel. A copy sync merged the code defaults over them, and the code defaults
 * point at /assets/tech/*.svg files that are not in the repo. This puts the
 * real images back and leaves every text field alone.
 *
 * Usage:
 *   node ./node_modules/tsx/dist/cli.cjs scripts/restore-tech-logos.ts <snapshot.json>
 *   node ./node_modules/tsx/dist/cli.cjs scripts/restore-tech-logos.ts <snapshot.json> --apply
 */
import fs from "node:fs";
import { loadEnvConfig } from "@next/env";
import { and, eq } from "drizzle-orm";
import { pageContent } from "../src/lib/db/schema";

loadEnvConfig(process.cwd());
let db: (typeof import("../src/lib/db/client"))["db"];

const snapshotPath = process.argv[2];
const APPLY = process.argv.includes("--apply");

async function main() {
  if (!snapshotPath) throw new Error("Pass the path to the recovered snapshot JSON.");
  ({ db } = await import("../src/lib/db/client"));

  const snapshot: Record<string, string | null> = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));

  const [row] = await db
    .select()
    .from(pageContent)
    .where(and(eq(pageContent.pageKey, "about"), eq(pageContent.sectionKey, "section2")))
    .limit(1);

  if (!row) throw new Error("about.section2 row not found.");

  const current: Record<string, unknown> = JSON.parse(row.contentJson || "{}");
  const next = { ...current };
  let restored = 0;

  for (const [key, value] of Object.entries(snapshot)) {
    if (value === null) continue;
    if (current[key] === value) continue;
    next[key] = value;
    restored++;
    console.log(`${key}: restoring ${value.length} char upload (was ${JSON.stringify(current[key])})`);
  }

  console.log(`\n${restored} slot(s) to restore.`);

  if (!APPLY) {
    console.log("Dry run. Pass --apply to write.");
    return;
  }

  await db
    .update(pageContent)
    .set({ contentJson: JSON.stringify(next), updatedAt: new Date().toISOString() })
    .where(and(eq(pageContent.pageKey, "about"), eq(pageContent.sectionKey, "section2")));

  console.log("Restored.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
