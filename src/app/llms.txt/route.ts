import { getProducts } from "@/lib/data";
import { getSiteUrl } from "@/lib/utils";

export async function GET() {
  const siteUrl = getSiteUrl();
  const products = await getProducts();
  const lines = [
    "# InfoBytes Nepal",
    "",
    "Tagline: Complexities, now simplified.",
    "",
    "InfoBytes Nepal builds focused digital products that simplify field service, sales, lead tracking, and student talent workflows for growing teams.",
    "",
    "Public URLs:",
    `${siteUrl}/`,
    `${siteUrl}/products`,
    `${siteUrl}/services`,
    `${siteUrl}/contact`,
    `${siteUrl}/about`,
    `${siteUrl}/privacy-policy`,
    "",
    "Products:",
    ...products.flatMap((product) => [
      `- ${product.name}: ${product.shortDescription}`,
      `  URL: ${siteUrl}/products/${product.slug}`,
    ]),
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
