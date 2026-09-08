export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const canonicalSiteUrl = "https://www.infobytesnepal.com";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || canonicalSiteUrl;

  try {
    const url = new URL(configuredUrl);
    if (url.hostname === "infobytesnepal.com") {
      url.hostname = "www.infobytesnepal.com";
    }
    url.pathname = "";
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return canonicalSiteUrl;
  }
}

/**
 * The one host search engines should index.
 *
 * The site is served from both infobytesnepal.com and infobytes.com.np. If each
 * deployment canonicalised to its own hostname, the two would compete as
 * duplicates and split whatever authority the pages earn. Canonical tags, the
 * sitemap, and schema @ids therefore always point at the primary domain no
 * matter which host served the request, so the .com.np domain consolidates into
 * the .com rather than fragmenting it.
 *
 * Set SITE_CANONICAL_ORIGIN if the primary domain ever changes.
 */
export function getCanonicalSiteUrl() {
  const configured = process.env.SITE_CANONICAL_ORIGIN?.trim();
  if (!configured) return canonicalSiteUrl;
  try {
    const url = new URL(configured);
    url.pathname = "";
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return canonicalSiteUrl;
  }
}

export function stripWhatsAppNumber(value?: string | null) {
  return (value || "").replace(/\D/g, "");
}

export function jsonParse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function formString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function newId() {
  return crypto.randomUUID();
}

/**
 * File extension for a media path, derived from the stored MIME type.
 *
 * The extension is not decoration. `next/image` refuses to optimize SVG unless
 * `dangerouslyAllowSVG` is set — and the Next docs recommend not that flag but
 * letting the URL end in `.svg`, which makes the component skip optimization
 * for that one image by itself. Without it, an SVG logo stored in the CMS
 * returned a 400 from the optimizer and rendered as a broken image.
 *
 * Lives here rather than in `lib/media.ts` because the backfill script needs it
 * too, and that module is `server-only`.
 */
export function extensionForType(type: string) {
  const map: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/webp": "webp",
    "image/avif": "avif",
    "image/gif": "gif",
    "image/svg+xml": "svg",
    "image/x-icon": "ico",
  };
  return map[type.toLowerCase()] ?? "bin";
}

/** The public URL for a stored media asset. */
export function mediaPath(id: string, type: string) {
  return `/api/media/${id}.${extensionForType(type)}`;
}
