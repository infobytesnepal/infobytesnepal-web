import { getProducts } from "@/lib/data";
import { seoLandingPageList } from "@/lib/seo-landing-pages";
import { getSiteUrl } from "@/lib/utils";

export async function GET() {
  const siteUrl = getSiteUrl();
  const products = await getProducts();
  const routes = [
    "/",
    "/products",
    "/services",
    ...seoLandingPageList.map((page) => page.path),
    "/contact",
    "/about",
    "/privacy-policy",
    ...products.map((product) => `/products/${product.slug}`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map((route) => `  <url><loc>${siteUrl}${route === "/" ? "" : route}</loc></url>`)
    .join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8" } });
}
