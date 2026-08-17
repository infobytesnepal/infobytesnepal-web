"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq, ne, and } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { posts } from "@/lib/db/schema";
import { requireBlogAccess } from "@/lib/auth";
import { estimateReadTime } from "@/lib/blog-markdown";
import { formFile, storeBlogImage } from "@/lib/media";
import { formString, newId } from "@/lib/utils";
import { postSchema } from "@/lib/validation";

const adminBlog = "/admin-infobytesnepal/blog";

/**
 * Everything that renders a post, invalidated on publish.
 *
 * `revalidatePath("/blog/[slug]", "page")` rather than one literal path per
 * post: renaming a slug leaves the old URL cached under its old name, and a
 * category move changes which posts appear in the "related posts" strip at the
 * bottom of every *other* post. Both are cases where the page that went stale
 * is not the page that was edited.
 *
 * The rest are the places outside the blog that carry post data. The home page
 * lists the three newest posts, the sitemap lists every post URL, and the two
 * agent-facing renderings — `/api/v1/blog/[slug]`, which is `force-static`, and
 * the markdown an agent gets from `Accept: text/markdown` — are as much a
 * published copy of the post as the HTML page is. An agent reading a post that
 * was unpublished an hour ago is the same bug as a visitor seeing it.
 */
function revalidateBlog() {
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
  revalidatePath("/api/v1/blog/[slug]", "page");
  revalidatePath("/api/markdown/[[...path]]", "page");
}

/** "What a Website Costs" -> "what-a-website-costs" */
function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 140)
    .replace(/-+$/g, "");
}

function fail(message: string, id?: string) {
  const target = id ? `${adminBlog}/${id}` : `${adminBlog}/new`;
  redirect(`${target}?error=${encodeURIComponent(message)}`);
}

/**
 * Ensures the slug is free, appending -2, -3 and so on if it is not.
 *
 * A duplicate slug would otherwise hit the unique index and throw an unhandled
 * error in front of an author who has just spent an hour writing, with the
 * post unsaved. Silently disambiguating is the kinder failure, and the editor
 * shows the final slug on the next screen.
 */
async function uniqueSlug(desired: string, excludeId: string | null) {
  let candidate = desired;
  for (let attempt = 2; attempt < 50; attempt += 1) {
    const clash = await db
      .select({ id: posts.id })
      .from(posts)
      .where(excludeId ? and(eq(posts.slug, candidate), ne(posts.id, excludeId)) : eq(posts.slug, candidate))
      .limit(1);
    if (!clash.length) return candidate;
    candidate = `${desired.slice(0, 135)}-${attempt}`;
  }
  return `${desired.slice(0, 130)}-${Date.now().toString(36)}`;
}

export async function upsertPost(formData: FormData) {
  await requireBlogAccess();

  const id = formString(formData, "id") || null;
  const title = formString(formData, "title");
  const bodyMarkdown = (formData.get("bodyMarkdown") as string | null) ?? "";

  // A blank slug means "name it after the title", which is what an author who
  // has never thought about URLs should get by default.
  const requestedSlug = slugify(formString(formData, "slug") || title);

  /*
    The cover is stored like a body image — as a media asset served from
    /api/media/<id> — rather than as the data URI the other CMS forms keep.
    A cover appears on the blog index, on the home page strip, and on the post
    itself; as a data URI those are three copies of the same 300KB inside the
    HTML, uncacheable and unoptimizable. As a path it is one cached, resized
    request.
  */
  let coverImage = formString(formData, "coverImage");
  const coverFile = formFile(formData, "coverImageFile");
  if (coverFile && coverFile.size > 0) {
    try {
      const stored = await storeBlogImage(
        coverFile,
        `${title || "Post"} cover image`,
        formString(formData, "coverAlt"),
      );
      coverImage = stored.url;
    } catch (error) {
      fail(error instanceof Error ? error.message : "The cover image could not be saved.", id ?? undefined);
    }
  }

  const parsed = postSchema.safeParse({
    id: id ?? undefined,
    title,
    slug: requestedSlug,
    excerpt: formString(formData, "excerpt"),
    coverImage,
    coverAlt: formString(formData, "coverAlt"),
    category: formString(formData, "category"),
    tags: formString(formData, "tags"),
    authorSlug: formString(formData, "authorSlug"),
    bodyMarkdown,
    metaTitle: formString(formData, "metaTitle"),
    metaDescription: formString(formData, "metaDescription"),
    readTime: formString(formData, "readTime") || 0,
    isPublished: formData.get("isPublished") === "on",
    publishedAt: formString(formData, "publishedAt") || new Date().toISOString().slice(0, 10),
  });

  if (!parsed.success) {
    fail(parsed.error.issues[0]?.message || "Some fields need attention.", id ?? undefined);
    return;
  }

  const data = parsed.data;
  const slug = await uniqueSlug(data.slug, id);
  const now = new Date().toISOString();

  const payload = {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    coverAlt: data.coverAlt || data.title,
    category: data.category,
    tags: data.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
      .join(", "),
    authorSlug: data.authorSlug,
    bodyMarkdown: data.bodyMarkdown,
    metaTitle: data.metaTitle || null,
    metaDescription: data.metaDescription || null,
    // Zero means "work it out from the body", which is what an author who never
    // touches the field gets, and it stays right as they keep writing.
    readTime: data.readTime || estimateReadTime(data.bodyMarkdown),
    isPublished: data.isPublished,
    publishedAt: data.publishedAt,
    updatedAt: now,
  };

  let savedId = id;
  if (id) {
    await db.update(posts).set(payload).where(eq(posts.id, id));
  } else {
    savedId = newId();
    await db.insert(posts).values({ id: savedId, ...payload, createdAt: now });
  }

  revalidateBlog();
  redirect(`${adminBlog}/${savedId}?saved=1`);
}

export async function deletePost(formData: FormData) {
  await requireBlogAccess();
  const id = formString(formData, "id");
  if (id) await db.delete(posts).where(eq(posts.id, id));
  revalidateBlog();
  redirect(adminBlog);
}

/** Publish or unpublish from the list, without opening the post. */
export async function togglePostPublished(formData: FormData) {
  await requireBlogAccess();
  const id = formString(formData, "id");
  if (!id) return;
  const [row] = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  if (!row) return;
  await db
    .update(posts)
    .set({ isPublished: !row.isPublished, updatedAt: new Date().toISOString() })
    .where(eq(posts.id, id));
  revalidateBlog();
  revalidatePath(adminBlog);
}

/**
 * Uploads an image and returns the path to put in the body.
 *
 * Called straight from the editor component rather than through a `<form
 * action>`, because a nested form is not valid HTML and a top-level one would
 * submit — and so discard — everything the author has typed but not yet saved.
 * Invoking the action as a function leaves the page exactly as it was and hands
 * back a URL to splice into the textarea at the cursor.
 */
export async function uploadBlogImage(
  formData: FormData,
): Promise<{ ok: true; url: string } | { ok: false; error: string }> {
  await requireBlogAccess();
  const file = formFile(formData, "file");
  if (!file || file.size === 0) return { ok: false, error: "Choose an image first." };
  try {
    const { url } = await storeBlogImage(file, formString(formData, "name") || file.name, formString(formData, "altText"));
    return { ok: true, url };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "The image could not be saved." };
  }
}
