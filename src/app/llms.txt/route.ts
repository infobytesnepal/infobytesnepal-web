import { getProducts } from "@/lib/data";
import { allFaqs } from "@/lib/faqs";
import { seoLandingPageList } from "@/lib/seo-landing-pages";
import { team } from "@/lib/team";
import { getCanonicalSiteUrl } from "@/lib/utils";

/**
 * This handler reads the live product list but had no revalidate at all, so it
 * was prerendered once at build time and never refreshed: a product published
 * from the admin stayed missing from llms.txt until the next deploy, the same
 * gap that the sitemap already had a comment about. Product writes now
 * invalidate this path on demand, and a day bounds it if one is ever missed.
 */
export const revalidate = 86400;

export async function GET() {
  const siteUrl = getCanonicalSiteUrl();
  const products = await getProducts();
  // llms.txt is expected to be Markdown: one H1, and real links rather than
  // bare URLs. Lighthouse's "llms.txt does not follow recommendations" audit
  // fails with "File does not appear to contain any links" when the URLs are
  // printed as plain text, which is how this started out.
  const lines = [
    "# Infobytes Nepal",
    "",
    "> Nepal-based IT company building websites, custom software, and business automation, and supporting its own software products.",
    "",
    "Legal name: Infobytes Nepal Pvt. Ltd.",
    "Tagline: Complexities, now simplified.",
    "",
    "Infobytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, graphic design, IT training, website maintenance, and business automation. We also build and support our own software products: Nidanyo (laboratory operations and information management for medical laboratories), Serviol (field service management), Purseol (field sales management), LeadRack (lead tracking), and Pravyo (student talent bench).",
    "",
    "Location: Kaushaltar, Bhaktapur, Nepal",
    "Email: inquiryo@infobytesnepal.com",
    "Phone: +977-9843468715",
    "",
    "## Main pages",
    "",
    `- [Home](${siteUrl}/): IT company in Kathmandu Valley serving all of Nepal.`,
    `- [Products](${siteUrl}/products): Software products built and supported in Nepal.`,
    `- [Services](${siteUrl}/services): Web, software, marketing, design, and training services.`,
    `- [About](${siteUrl}/about): Who we are and how we work.`,
    `- [Blog](${siteUrl}/blog): Articles on cost, process, and technology choices in Nepal.`,
    `- [Careers](${siteUrl}/careers): Open roles and internships.`,
    `- [FAQ](${siteUrl}/faq): Common questions about pricing, timelines, and support.`,
    `- [Contact](${siteUrl}/contact): Start a project or request a quote.`,
    `- [Privacy policy](${siteUrl}/privacy-policy): How we handle personal data.`,
    "",
    "## Products",
    "",
    ...products.map(
      (product) => `- [${product.name}](${siteUrl}/products/${product.slug}): ${product.shortDescription}`,
    ),
    "",
    "## Team",
    "",
    ...team.map((member) => `- [${member.name}](${siteUrl}/team/${member.slug}): ${member.role}`),
    "",
    "## Service and location pages",
    "",
    ...seoLandingPageList.map((page) => `- [${page.keyword}](${siteUrl}${page.path})`),
    "",
    "## Frequently asked questions",
    "",
    `Full answers: [FAQ](${siteUrl}/faq)`,
    "",
    ...allFaqs.flatMap((faq) => [
      `### ${faq.question}`,
      "",
      faq.answer,
      "",
      `Source: [${faq.question}](${siteUrl}/faq#${faq.id})`,
      "",
    ]),
  ];
  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
