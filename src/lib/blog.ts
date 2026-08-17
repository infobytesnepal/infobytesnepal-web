/**
 * Blog content and its read adapter.
 *
 * Posts live in the `posts` table and are written in the CMS. Every read still
 * goes through the async functions at the bottom of this file, which is what
 * made moving the blog out of a typed module and into the database a change to
 * this file and nothing else: no page or component ever imported the post array
 * directly.
 *
 * Two things are still code rather than data, on purpose:
 *
 * - `categories`, because each one is a filter chip with a URL that is already
 *   indexed. Letting an editor invent a category would create an orphan filter.
 * - `authors`, because an author's byline card links to their `/team` page. An
 *   author with no team page would render a link to a 404.
 *
 * Adding either is a small code change plus a deploy, which is the right amount
 * of friction for something that changes once a year.
 */

import { cache } from "react";
import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "./db/client";
import { posts as postsTable, type PostRow } from "./db/schema";
import { postSeeds } from "./blog-seed";
import { estimateReadTime, parsePostMarkdown, type PostBlock } from "./blog-markdown";

export type { PostBlock };

export type Author = {
  slug: string;
  name: string;
  role: string;
  /** Falls back to initials when absent, so a missing portrait never breaks the layout. */
  image?: string;
  bio: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  category: Category;
  tags: string[];
  authorSlug: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  body: PostBlock[];
  /** Meta title and description. Falls back to title and excerpt when unset. */
  metaTitle?: string;
  metaDescription?: string;
};

export const categories = [
  "Web Development",
  "Software",
  "SEO",
  "Digital Marketing",
  "Business Automation",
] as const;

export type Category = (typeof categories)[number];

export const authors: Author[] = [
  {
    slug: "sugam-dahal",
    name: "Sugam Dahal",
    role: "Implementation and Deployment Lead",
    image: "/assets/about/sugam-dahal.webp",
    bio: "Sugam gets finished systems into offices that already have a way of doing things. He writes about migration, training, and the first month after go live.",
  },
  {
    slug: "kapil-aryal",
    name: "Kapil Aryal",
    role: "Mobile Application and PWA Specialist",
    image: "/assets/about/kapil-aryal.webp",
    bio: "Kapil builds the mobile and progressive web apps at Infobytes Nepal, with a focus on ordinary phones and unreliable connections.",
  },
  {
    slug: "bibek-neupane",
    name: "Bibek Neupane",
    role: "Operations Incharge for Europe",
    image: "/assets/about/bibek-neupane.webp",
    bio: "Bibek looks after client operations and delivery, and writes about scoping work so both sides know what they agreed to.",
  },
];

export const defaultCoverImage = "/assets/hero/infobytes-hero-fallback.webp";

/** Newest first. The order every listing uses. */
function byNewest(a: Post, b: Post) {
  return b.publishedAt.localeCompare(a.publishedAt);
}

function isCategory(value: string): value is Category {
  return (categories as readonly string[]).includes(value);
}

/**
 * A database row projected into the `Post` the site renders.
 *
 * The body is parsed here rather than at write time so the markdown in the
 * database stays the single source of truth: the editor reopens exactly what
 * was saved, and a fix to the parser reaches every existing post on the next
 * revalidation instead of only posts saved after the fix.
 */
function fromRow(row: PostRow): Post {
  const body = parsePostMarkdown(row.bodyMarkdown);
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    coverImage: row.coverImage || defaultCoverImage,
    coverAlt: row.coverAlt || row.title,
    category: isCategory(row.category) ? row.category : categories[0],
    tags: row.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    authorSlug: row.authorSlug,
    publishedAt: row.publishedAt,
    // Falls back to the publish date so a post never claims it was updated
    // before it existed, which is what an empty `updatedAt` would put in schema.
    updatedAt: (row.updatedAt || row.publishedAt).slice(0, 10),
    readTime: row.readTime || estimateReadTime(row.bodyMarkdown),
    body,
    metaTitle: row.metaTitle || undefined,
    metaDescription: row.metaDescription || undefined,
  };
}

function seededPosts(): Post[] {
  return postSeeds.map((seed) => ({ ...seed, tags: [...seed.tags], body: [...seed.body] }));
}

/**
 * Every published post, newest first.
 *
 * Deduplicated per render pass: the blog index, the schema block on it, and the
 * footer's recent-posts list all ask for this while rendering the same page.
 *
 * The fallbacks are the same contract `getProducts` has kept since the products
 * table was added. An unseeded or unreachable database serves the six posts
 * shipped in the repo rather than an empty blog, so a page that exists in the
 * sitemap never starts returning a 404 because a query failed.
 */
export const getPosts = cache(async (includeDrafts = false): Promise<Post[]> => {
  try {
    const rows = await db
      .select()
      .from(postsTable)
      .where(includeDrafts ? undefined : eq(postsTable.isPublished, true))
      .orderBy(desc(postsTable.publishedAt), asc(postsTable.title));
    if (!rows.length) return includeDrafts ? [] : seededPosts();
    return rows.map(fromRow).sort(byNewest);
  } catch {
    return includeDrafts ? [] : seededPosts();
  }
});

/** Whether the posts table holds anything at all. Decides whether a miss is a
 * genuine 404 or an unseeded database that should still serve the repo posts. */
const postsTableIsEmpty = cache(async () => {
  const [row] = await db.select({ id: postsTable.id }).from(postsTable).limit(1);
  return !row;
});

export async function getPost(slug: string, includeDrafts = false): Promise<Post | null> {
  try {
    const where = includeDrafts
      ? eq(postsTable.slug, slug)
      : and(eq(postsTable.slug, slug), eq(postsTable.isPublished, true));
    const [row] = await db.select().from(postsTable).where(where).limit(1);
    if (row) return fromRow(row);
    /*
      A miss only falls back to the seeds when the table is empty. Without that
      check, deleting or unpublishing one of the six original posts in the CMS
      would appear to work and then serve the repo's copy of it forever — the
      one failure mode a blanket fallback would quietly introduce.
    */
    if (!(await postsTableIsEmpty())) return null;
  } catch {
    // Fall through to the seed lookup: the database is unreachable, and a
    // cached page is better than a 404 on a URL that is in the sitemap.
  }
  return postSeeds.find((seed) => seed.slug === slug) ?? null;
}

/** The row behind a post, unparsed, for the admin editor. */
export async function getPostRowById(id: string): Promise<PostRow | null> {
  try {
    const [row] = await db.select().from(postsTable).where(eq(postsTable.id, id)).limit(1);
    return row ?? null;
  } catch {
    return null;
  }
}

/** Every post including drafts, for the admin list. */
export async function getAdminPosts(): Promise<PostRow[]> {
  try {
    return await db.select().from(postsTable).orderBy(desc(postsTable.publishedAt), desc(postsTable.createdAt));
  } catch {
    return [];
  }
}

export async function getPostSlugs(): Promise<string[]> {
  return (await getPosts()).map((post) => post.slug);
}

/** Posts in the same category first, topped up with the newest others. */
export async function getRelatedPosts(slug: string, limit = 3): Promise<Post[]> {
  const all = await getPosts();
  const current = all.find((post) => post.slug === slug);
  if (!current) return [];
  const others = all.filter((post) => post.slug !== slug).sort(byNewest);
  const sameCategory = others.filter((post) => post.category === current.category);
  const rest = others.filter((post) => post.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getAuthor(slug: string): Author | null {
  return authors.find((author) => author.slug === slug) ?? null;
}

/** Categories that actually have posts, with counts, for the filter row. */
export async function getCategoryCounts(): Promise<Array<{ name: Category; count: number }>> {
  const all = await getPosts();
  return categories
    .map((name) => ({ name, count: all.filter((post) => post.category === name).length }))
    .filter((entry) => entry.count > 0);
}

export function formatPostDate(value: string) {
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
