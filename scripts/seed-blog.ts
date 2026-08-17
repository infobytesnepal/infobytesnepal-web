import { loadEnvConfig } from "@next/env";
import { postSeeds } from "../src/lib/blog-seed";
import { blocksToMarkdown, estimateReadTime } from "../src/lib/blog-markdown";
import { posts } from "../src/lib/db/schema";

/**
 * Copies the six posts written in the repo into the `posts` table so they can
 * be edited in the CMS alongside anything written since.
 *
 * Safe to run more than once, and safe to run on a database somebody has been
 * writing in: it inserts on a free slug and does nothing at all on a taken one.
 * A post that has been edited in the CMS is therefore never overwritten by the
 * version in the repo, which is the opposite of how `npm run db:seed` behaves
 * and the reason this is a separate script rather than another step inside it.
 *
 *   npm run db:seed:blog
 */
loadEnvConfig(process.cwd());

async function main() {
  const { db } = await import("../src/lib/db/client");

  let inserted = 0;
  for (const seed of postSeeds) {
    const bodyMarkdown = blocksToMarkdown(seed.body);
    const now = new Date().toISOString();

    const result = await db
      .insert(posts)
      .values({
        id: crypto.randomUUID(),
        slug: seed.slug,
        title: seed.title,
        excerpt: seed.excerpt,
        coverImage: seed.coverImage,
        coverAlt: seed.coverAlt,
        category: seed.category,
        tags: seed.tags.join(", "),
        authorSlug: seed.authorSlug,
        bodyMarkdown,
        metaTitle: seed.metaTitle ?? null,
        metaDescription: seed.metaDescription ?? null,
        readTime: seed.readTime || estimateReadTime(bodyMarkdown),
        isPublished: true,
        publishedAt: seed.publishedAt,
        createdAt: now,
        updatedAt: seed.updatedAt ? `${seed.updatedAt}T00:00:00.000Z` : now,
      })
      .onConflictDoNothing({ target: posts.slug })
      .returning({ id: posts.id });

    if (result.length) {
      inserted += 1;
      console.log(`  added   ${seed.slug}`);
    } else {
      console.log(`  skipped ${seed.slug} (already in the database)`);
    }
  }

  const all = await db.select({ id: posts.id }).from(posts);
  console.log(`\n${inserted} post(s) added. ${all.length} post(s) in the database.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
