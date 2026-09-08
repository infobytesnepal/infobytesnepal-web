import "server-only";

import { db } from "./db/client";
import { mediaAssets } from "./db/schema";
import { mediaPath, newId } from "./utils";

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


/** Encodes a file as a base64 data URI. The `media_assets.url` column holds
 * these: it is the byte store that `/api/media/<id>` reads from. */
export async function toDataUri(file: File) {
  const bytes = Buffer.from(await file.arrayBuffer());
  return `data:${file.type};base64,${bytes.toString("base64")}`;
}

function assertUsableImage(file: File, maxBytes: number) {
  if (!file.type.startsWith("image/")) throw new Error("Only image uploads are supported.");
  if (file.size > maxBytes) throw new Error(`Image uploads must be ${formatBytes(maxBytes)} or smaller.`);
}

/**
 * Stores an upload and returns the URL to save on the referencing row, or
 * `fallbackUrl` when no file was chosen — which is how every form here says
 * "leave the existing image alone".
 *
 * The returned value is a `/api/media/<id>` path, not the data URI itself.
 * That distinction is the whole point: the bytes still live in the database,
 * but the row that points at them holds a short cacheable URL instead of 120 KB
 * of base64 that would otherwise be pasted into the HTML of every page showing
 * the image. See `scripts/optimize-stored-images.ts` for the measurements that
 * prompted the change, and for the backfill of rows written before it.
 */
export async function storeUploadedImage(
  file: File | null,
  fallbackUrl: string,
  name: string,
  altText = "",
  maxBytes = maxImageBytes,
) {
  if (!file || file.size === 0) return fallbackUrl;
  assertUsableImage(file, maxBytes);

  const id = newId();
  const now = new Date().toISOString();
  await db.insert(mediaAssets).values({
    id,
    name: name || file.name || "Uploaded image",
    url: await toDataUri(file),
    type: file.type,
    altText,
    createdAt: now,
    updatedAt: now,
  });

  return mediaPath(id, file.type);
}

/** The blog editor's upload. Same store, higher size ceiling for photographs. */
export async function storeBlogImage(file: File, name: string, altText = "") {
  assertUsableImage(file, maxBlogImageBytes);

  const id = newId();
  const now = new Date().toISOString();
  await db.insert(mediaAssets).values({
    id,
    name: name || file.name || "Blog image",
    url: await toDataUri(file),
    type: file.type,
    altText,
    createdAt: now,
    updatedAt: now,
  });

  return { id, url: mediaPath(id, file.type) };
}
