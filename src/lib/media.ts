import "server-only";

import { db } from "./db/client";
import { mediaAssets } from "./db/schema";
import { newId } from "./utils";

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
 * into a database row, which costs a third again on top of the file size.
 */
export const maxBlogImageBytes = 3_000_000;

export function formFile(formData: FormData, key: string) {
  const value = formData.get(key);
  if (!value || typeof value === "string" || !("arrayBuffer" in value)) return null;
  return value as File;
}

export function formatBytes(bytes: number) {
  return `${(bytes / 1_000_000).toFixed(1)}MB`;
}

/**
 * Stores an upload as a media asset and returns its URL, or `fallbackUrl` when
 * no file was chosen — which is how "leave the existing image alone" is
 * expressed by every form that calls this.
 */
export async function storeUploadedImage(
  file: File | null,
  fallbackUrl: string,
  name: string,
  altText = "",
  maxBytes = maxImageBytes,
) {
  if (!file || file.size === 0) return fallbackUrl;
  if (!file.type.startsWith("image/")) throw new Error("Only image uploads are supported.");
  if (file.size > maxBytes) throw new Error(`Image uploads must be ${formatBytes(maxBytes)} or smaller.`);

  const id = newId();
  const bytes = Buffer.from(await file.arrayBuffer());
  const url = `data:${file.type};base64,${bytes.toString("base64")}`;
  const now = new Date().toISOString();

  await db.insert(mediaAssets).values({
    id,
    name: name || file.name || "Uploaded image",
    url,
    type: file.type,
    altText,
    createdAt: now,
    updatedAt: now,
  });

  return url;
}

/**
 * The same store, but returning a `/api/media/<id>` path instead of the data
 * URI itself. Used by the blog editor: see the route handler for why a post
 * body must not carry the base64 inline.
 */
export async function storeBlogImage(file: File, name: string, altText = "") {
  if (!file.type.startsWith("image/")) throw new Error("Only image uploads are supported.");
  if (file.size > maxBlogImageBytes) {
    throw new Error(`Images must be ${formatBytes(maxBlogImageBytes)} or smaller. Compress it and try again.`);
  }

  const id = newId();
  const bytes = Buffer.from(await file.arrayBuffer());
  const now = new Date().toISOString();

  await db.insert(mediaAssets).values({
    id,
    name: name || file.name || "Blog image",
    url: `data:${file.type};base64,${bytes.toString("base64")}`,
    type: file.type,
    altText,
    createdAt: now,
    updatedAt: now,
  });

  return { id, url: `/api/media/${id}` };
}
