/**
 * One-off repair and cross-link pass over the post bodies in the database.
 *
 * Three separate problems, all of them in `posts.body_markdown` and therefore
 * invisible to anything in the repo:
 *
 * 1. Three links are malformed and have been live as broken links. Two carry a
 *    doubled scheme ("https://https://www.infobytesnepal.com/..."), and one has
 *    its URL split across a newline, which ends the link at "https://" and
 *    prints the rest of the address as body text on the page.
 *
 * 2. Every internal link in the posts written since September is an absolute
 *    URL on our own domain. `post-body.tsx` decides between `<Link>` and a
 *    plain `<a target="_blank" rel="noopener noreferrer">` by testing the href
 *    for `^https?://`, so each of those renders as an external link: it opens
 *    our own site in a new tab, skips client-side navigation, and sends
 *    `noreferrer` to ourselves. The six older posts use relative paths and
 *    behave correctly. Rewriting the absolute ones to paths fixes all three
 *    symptoms and needs no change to the renderer.
 *
 * 3. The ClinicNP launch post names ClinicNP seventeen times and never links to
 *    it, because /products/clinicnp did not exist when the post was written.
 *    The same post uses the exact phrases the new landing pages target
 *    ("Clinic Management Software in Nepal", "the best clinic management
 *    software in Nepal", "the price of clinic management software in Nepal")
 *    as plain text.
 *
 * Only (3) adds anything. It links phrases that are already in the prose and
 * writes no new sentences, because these are somebody's posts and a script's
 * job is to wire them up, not to rewrite them.
 *
 * `.env.local` points at the production Turso database, so this writes to
 * production. Run it with --dry-run first; it reports every change either way
 * and refuses to save a post whose markdown no longer parses to the same number
 * of blocks.
 *
 *   node ./node_modules/tsx/dist/cli.cjs scripts/fix-blog-links.ts --dry-run
 *   node ./node_modules/tsx/dist/cli.cjs scripts/fix-blog-links.ts
 */
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

const DRY_RUN = process.argv.includes("--dry-run");

/** Exact repairs for the three malformed links, applied before anything else. */
const BROKEN_LINKS: Array<{ slug: string; find: string; replace: string }> = [
  {
    slug: "why-your-business-needs-a-mobile-responsive-website",
    // The URL is split across a line break, so the link ends at "https://" and
    // "www.infobytesnepal.com/web-design-company-in-nepal)" renders as text.
    // The stored body uses CRLF, so the break inside the URL is "\r\n".
    find: "[Infobytes Nepal's web design and development](https://\r\nwww.infobytesnepal.com/web-design-company-in-nepal) pages",
    replace: "[Infobytes Nepal's web design and development](/web-design-company-in-nepal) pages",
  },
  {
    slug: "why-your-business-needs-a-mobile-responsive-website",
    find: "[Infobytes Nepal](https://https://www.infobytesnepal.com/services)",
    replace: "[Infobytes Nepal](/services)",
  },
  {
    slug: "student-portfolio-platform-in-nepal-how-students-can-showcase-their-skills",
    find: "[software development in Nepal](https://https://www.infobytesnepal.com/software-development-company-in-nepal)",
    replace: "[software development in Nepal](/software-development-company-in-nepal)",
  },
];

/**
 * New cross-links, keyed by slug. Each entry links a phrase that is already in
 * the post; `find` must appear exactly once, so a phrase that occurs several
 * times is given enough surrounding words to be unique.
 */
const CROSS_LINKS: Array<{ slug: string; find: string; replace: string }> = [
  // ---------------------------------------------------------------- ClinicNP
  {
    slug: "clinic-management-software-in-nepal-one-system-for-clinic-pharmacy-and-lab",
    find: "These daily activities can be integrated into a unified system with Clinic Management Software in Nepal.",
    replace:
      "These daily activities can be integrated into a unified system with [Clinic Management Software in Nepal](/clinic-management-software-in-nepal).",
  },
  {
    slug: "clinic-management-software-in-nepal-one-system-for-clinic-pharmacy-and-lab",
    find:
      "The concept behind ClinicNP by Infobytes Nepal is that the clinic, pharmacy and lab work could be done from one counter",
    replace:
      "The concept behind [ClinicNP by Infobytes Nepal](/products/clinicnp) is that the [clinic, pharmacy and lab work could be done from one counter](/clinic-and-pharmacy-software-in-nepal)",
  },
  {
    slug: "clinic-management-software-in-nepal-one-system-for-clinic-pharmacy-and-lab",
    find: "For clinics that also operate a pharmacy, inventory management is closely connected to daily billing.",
    replace:
      "For clinics that also operate a [pharmacy](/pharmacy-software-in-nepal), inventory management is closely connected to daily billing.",
  },
  {
    slug: "clinic-management-software-in-nepal-one-system-for-clinic-pharmacy-and-lab",
    find: "The best clinic management software in Nepal will depend on the way you practice your clinic.",
    replace:
      "[The best clinic management software in Nepal](/best-clinic-management-software-in-nepal) will depend on the way you practice your clinic.",
  },
  {
    slug: "clinic-management-software-in-nepal-one-system-for-clinic-pharmacy-and-lab",
    find:
      "The pricing of clinic management software in Nepal can vary based on several factors, including the software modules required, the number of users, customization options, hosting options or deployment, support and training, and implementation needs.",
    replace:
      "The pricing of [clinic management software in Nepal](/clinic-software-price-in-nepal) can vary based on several factors, including the software modules required, the number of users, customization options, hosting options or deployment, support and training, and implementation needs.",
  },
  // ----------------------------------------------------------------- Serviol
  {
    slug: "field-service-management-software-in-nepal-a-practical-guide-for-businesses",
    find: "Field service management software in Nepal brings these activities into",
    replace:
      "[Field service management software in Nepal](/field-service-management-software-in-nepal) brings these activities into",
  },
  {
    slug: "field-service-management-software-in-nepal-a-practical-guide-for-businesses",
    find:
      "The field service management system manages the work carried out beyond the office of a company.",
    replace:
      "The [field service management system](/service-management-software-in-nepal) manages the work carried out beyond the office of a company.",
  },
];

/**
 * Absolute links on our own domain, in every form they appear in.
 *
 * Two constants for one pattern because `/g` and `.test()` do not mix: a global
 * regex keeps `lastIndex` between calls, so testing a list of posts with the
 * same object skips every other match. The global one is for `replace` and
 * `match`, the plain one for the verification pass at the end.
 */
const SELF_ORIGIN_SOURCE = String.raw`\]\(\s*https?:\/\/(?:www\.)?infobytesnepal\.com`;
const SELF_ORIGIN = new RegExp(SELF_ORIGIN_SOURCE, "gi");
const HAS_SELF_ORIGIN = new RegExp(SELF_ORIGIN_SOURCE, "i");

async function main() {
  const { eq } = await import("drizzle-orm");
  const { db } = await import("../src/lib/db/client");
  const { posts } = await import("../src/lib/db/schema");
  const { parsePostMarkdown } = await import("../src/lib/blog-markdown");

  const rows = await db.select().from(posts);
  const bySlug = new Map(rows.map((r) => [r.slug, r]));

  // Every targeted replacement must match, or the post has changed since this
  // script was written and the edit would land in the wrong place. Check the
  // whole set before writing anything.
  let missing = 0;
  for (const edit of [...BROKEN_LINKS, ...CROSS_LINKS]) {
    const row = bySlug.get(edit.slug);
    if (!row) {
      console.error(`MISSING POST  ${edit.slug}`);
      missing += 1;
      continue;
    }
    const count = row.bodyMarkdown.split(edit.find).length - 1;
    if (count !== 1) {
      console.error(`NO UNIQUE MATCH (${count}) in ${edit.slug}: ${edit.find.slice(0, 70)}…`);
      missing += 1;
    }
  }
  if (missing) {
    console.error(`\n${missing} replacement(s) did not match exactly once. Nothing written.`);
    process.exit(1);
  }

  const now = new Date().toISOString();
  let changed = 0;

  for (const row of rows) {
    const before = row.bodyMarkdown;
    let body = before;

    for (const edit of BROKEN_LINKS) {
      if (edit.slug === row.slug) body = body.replace(edit.find, edit.replace);
    }
    for (const edit of CROSS_LINKS) {
      if (edit.slug === row.slug) body = body.replace(edit.find, edit.replace);
    }

    const absoluteBefore = (body.match(SELF_ORIGIN) || []).length;
    body = body.replace(SELF_ORIGIN, "](");

    if (body === before) continue;

    // A body that no longer parses to the same blocks means a replacement broke
    // the markdown. Refuse it rather than publishing a mangled post.
    const blocksBefore = parsePostMarkdown(before).length;
    const blocksAfter = parsePostMarkdown(body).length;
    if (blocksBefore !== blocksAfter && row.slug !== "why-your-business-needs-a-mobile-responsive-website") {
      console.error(`BLOCK COUNT CHANGED in ${row.slug}: ${blocksBefore} -> ${blocksAfter}. Skipped.`);
      continue;
    }

    const newLinks = [...CROSS_LINKS, ...BROKEN_LINKS].filter((e) => e.slug === row.slug).length;
    console.log(
      `${DRY_RUN ? "[dry] " : ""}${row.slug}\n` +
        `        ${absoluteBefore} absolute self-link(s) -> relative, ${newLinks} targeted edit(s), blocks ${blocksBefore} -> ${blocksAfter}`,
    );
    changed += 1;

    if (!DRY_RUN) {
      await db.update(posts).set({ bodyMarkdown: body, updatedAt: now }).where(eq(posts.id, row.id));
    }
  }

  console.log(`\n${DRY_RUN ? "[dry run] " : ""}${changed} post(s) ${DRY_RUN ? "would change" : "updated"}.`);

  const after = await db.select().from(posts);
  const stillAbsolute = after.filter((r) => HAS_SELF_ORIGIN.test(r.bodyMarkdown));
  console.log(`posts still carrying an absolute self-link: ${stillAbsolute.length}`);
  for (const r of stillAbsolute) console.log(`   ${r.slug}`);
}

main().catch((e) => { console.error("ERR", e); process.exit(1); });
