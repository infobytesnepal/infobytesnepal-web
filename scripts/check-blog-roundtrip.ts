import { postSeeds } from "../src/lib/blog-seed";
import { blocksToMarkdown, parsePostMarkdown } from "../src/lib/blog-markdown";

/**
 * Checks that the markdown authors write is a lossless representation of the
 * blocks the site renders.
 *
 * The six posts in `blog-seed.ts` were written directly as blocks, before the
 * blog moved into the CMS, so they are a corpus of every block type the site
 * supports that nobody wrote to make a parser look good. Rendering them to
 * markdown and parsing them back has to return the blocks unchanged — if it
 * does not, the seed script would silently degrade a published post on its way
 * into the database.
 *
 *   npm run check:blog
 */
let differences = 0;

for (const seed of postSeeds) {
  const reparsed = parsePostMarkdown(blocksToMarkdown(seed.body));
  const length = Math.max(seed.body.length, reparsed.length);

  for (let index = 0; index < length; index += 1) {
    const before = JSON.stringify(seed.body[index]);
    const after = JSON.stringify(reparsed[index]);
    if (before !== after) {
      differences += 1;
      console.log(`\n${seed.slug} — block ${index} changed`);
      console.log(`  written:  ${before}`);
      console.log(`  reparsed: ${after}`);
    }
  }
}

if (differences) {
  console.error(`\n${differences} block(s) did not survive the round trip.\n`);
  process.exit(1);
}

const blocks = postSeeds.reduce((total, seed) => total + seed.body.length, 0);
console.log(`\n${blocks} blocks across ${postSeeds.length} posts round trip unchanged.\n`);
