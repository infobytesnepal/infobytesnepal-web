import { getProducts } from "@/lib/data";
import { seoLandingPageList } from "@/lib/seo-landing-pages";
import { team } from "@/lib/team";
import { getSiteUrl } from "@/lib/utils";

export async function GET() {
  const siteUrl = getSiteUrl();
  const products = await getProducts();
  const lines = [
    "# InfoBytes Nepal",
    "",
    "Tagline: Complexities, now simplified.",
    "",
    "InfoBytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, graphic design, training, and business automation. We also build focused digital products that simplify field service, sales, lead tracking, and student talent workflows for growing teams.",
    "",
    "Location: Kaushaltar, Bhaktapur, Nepal",
    "Email: info@infobytesnepal.com",
    "Phone: +977-9843468715",
    "",
    "Public URLs:",
    `${siteUrl}/`,
    `${siteUrl}/products`,
    `${siteUrl}/services`,
    `${siteUrl}/about`,
    `${siteUrl}/faq`,
    `${siteUrl}/contact`,
    `${siteUrl}/privacy-policy`,
    "",
    "Products:",
    ...products.flatMap((product) => [
      `- ${product.name}: ${product.shortDescription}`,
      `  URL: ${siteUrl}/products/${product.slug}`,
    ]),
    "",
    "Team:",
    ...team.map((member) => `- ${member.name} (${member.role}): ${siteUrl}/team/${member.slug}`),
    "",
    "Service & location pages:",
    ...seoLandingPageList.map((page) => `- ${page.keyword}: ${siteUrl}${page.path}`),
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
