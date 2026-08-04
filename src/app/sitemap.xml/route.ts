import { getProducts } from "@/lib/data";
import { seoLandingPageList } from "@/lib/seo-landing-pages";
import { team } from "@/lib/team";
import { getCanonicalSiteUrl } from "@/lib/utils";

/**
 * Products are published and unpublished from the admin at runtime, so a
 * sitemap prerendered at build time goes stale the moment the catalogue
 * changes. Nidanyo was added after a deploy and was missing from the sitemap
 * until the next build. An hour is frequent enough for crawlers and still
 * costs one query per hour rather than one per crawl.
 */
export const revalidate = 3600;

/**
 * The date the site's written content was last reviewed end to end.
 *
 * Static routes use this instead of `new Date()`. Stamping every URL with
 * today's date on every request makes `lastmod` meaningless: Search Console
 * sees 50 pages that all claim to have changed an hour ago, concludes the
 * signal is unreliable, and starts ignoring it. Bump this by hand when page
 * copy actually changes.
 */
const CONTENT_LAST_UPDATED = "2026-08-04";

/**
 * Normalise any stored timestamp into the W3C date format sitemaps require.
 *
 * The products table defaults `updated_at` to SQLite's CURRENT_TIMESTAMP, which
 * produces "2026-06-11 21:01:35": a space separator, not the "T" of an ISO
 * string. Splitting that on "T" returns the whole string unchanged, so the raw
 * value was being written into <lastmod> and Search Console rejected the
 * sitemap with "An invalid date was found". Anything unparseable now falls back
 * to a known good date rather than poisoning the file.
 */
function toSitemapDate(value?: string | null): string {
  if (!value) return CONTENT_LAST_UPDATED;

  // Fast path: a leading YYYY-MM-DD covers both the SQLite and ISO formats.
  const leadingDate = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (leadingDate) {
    const [iso, year, month, day] = leadingDate;
    // Guard against values like 2026-13-45 that match the shape but are not real dates.
    const parsed = new Date(`${iso}T00:00:00Z`);
    if (
      !Number.isNaN(parsed.getTime()) &&
      parsed.getUTCFullYear() === Number(year) &&
      parsed.getUTCMonth() + 1 === Number(month) &&
      parsed.getUTCDate() === Number(day)
    ) {
      return iso;
    }
  }

  // Anything else (a locale string, an epoch as text) gets one honest attempt.
  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return CONTENT_LAST_UPDATED;
}

/** Escapes the five characters that are not legal as raw text in XML. */
function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

type SitemapEntry = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
  /** Always set. Required so an entry can never render `<lastmod>undefined</lastmod>`. */
  lastmod: string;
};

export async function GET() {
  const siteUrl = getCanonicalSiteUrl();
  const products = await getProducts();

  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0", lastmod: CONTENT_LAST_UPDATED },
    { path: "/products", changefreq: "weekly", priority: "0.9", lastmod: CONTENT_LAST_UPDATED },
    { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: CONTENT_LAST_UPDATED },
    ...seoLandingPageList.map((page) => ({
      path: page.path,
      changefreq: "monthly" as const,
      priority: "0.8",
      lastmod: CONTENT_LAST_UPDATED,
    })),
    ...products.map((product) => ({
      path: `/products/${product.slug}`,
      changefreq: "monthly" as const,
      priority: "0.8",
      lastmod: toSitemapDate(product.updatedAt),
    })),
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: CONTENT_LAST_UPDATED },
    ...team.map((member) => ({
      path: `/team/${member.slug}`,
      changefreq: "monthly" as const,
      priority: "0.6",
      lastmod: CONTENT_LAST_UPDATED,
    })),
    { path: "/faq", changefreq: "weekly", priority: "0.8", lastmod: CONTENT_LAST_UPDATED },
    { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: CONTENT_LAST_UPDATED },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", lastmod: CONTENT_LAST_UPDATED },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${escapeXml(`${siteUrl}${entry.path === "/" ? "" : entry.path}`)}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
