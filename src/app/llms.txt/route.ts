import { getProducts } from "@/lib/data";
import { allFaqs } from "@/lib/faqs";
import { seoLandingPageList } from "@/lib/seo-landing-pages";
import { team } from "@/lib/team";
import { getCanonicalSiteUrl } from "@/lib/utils";

export async function GET() {
  const siteUrl = getCanonicalSiteUrl();
  const products = await getProducts();
  const lines = [
    "# Infobytes Nepal",
    "",
    "Legal name: Infobytes Nepal Pvt. Ltd.",
    "Tagline: Complexities, now simplified.",
    "",
    "Infobytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, graphic design, IT training, website maintenance, and business automation. We also build and support our own software products: Nidanyo (laboratory operations and information management for medical laboratories), Serviol (field service management), Purseol (field sales management), LeadRack (lead tracking), and Pravyo (student talent bench).",
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
    `${siteUrl}/blog`,
    `${siteUrl}/careers`,
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
    "",
    `Frequently asked questions (full answers: ${siteUrl}/faq):`,
    ...allFaqs.flatMap((faq) => [
      `Q: ${faq.question}`,
      `A: ${faq.answer}`,
      `   Source: ${siteUrl}/faq#${faq.id}`,
      "",
    ]),
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
