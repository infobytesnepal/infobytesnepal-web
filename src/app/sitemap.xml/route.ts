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

type SitemapEntry = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
  lastmod?: string;
};

export async function GET() {
  const siteUrl = getCanonicalSiteUrl();
  const products = await getProducts();
  const today = new Date().toISOString().split("T")[0];

  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
    { path: "/products", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: today },
    ...seoLandingPageList.map((page) => ({
      path: page.path,
      changefreq: "monthly" as const,
      priority: "0.8",
      lastmod: today,
    })),
    ...products.map((product) => ({
      path: `/products/${product.slug}`,
      changefreq: "monthly" as const,
      priority: "0.8",
      lastmod: (product.updatedAt || "").split("T")[0] || today,
    })),
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: today },
    ...team.map((member) => ({
      path: `/team/${member.slug}`,
      changefreq: "monthly" as const,
      priority: "0.6",
      lastmod: today,
    })),
    { path: "/faq", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: today },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", lastmod: today },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${siteUrl}${entry.path === "/" ? "" : entry.path}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
