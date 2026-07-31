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
