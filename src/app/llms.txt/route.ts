import { getProducts } from "@/lib/data";
import { productAgentProfiles } from "@/lib/content";
import { allFaqs } from "@/lib/faqs";
import { getLandingPageList } from "@/lib/landing-pages";
import { getPosts } from "@/lib/blog";
import { serviceCatalog } from "@/lib/services";
import { team } from "@/lib/team";
import { getCanonicalSiteUrl } from "@/lib/utils";

/**
 * /llms.txt — a machine-readable index of the site.
 *
 * Structure follows the llmstxt.org spec: one H1, a blockquote summary, free
 * prose, then H2-delimited link sections, with the skippable material under a
 * final "Optional" heading, which the spec defines as the section an agent may
 * drop when it needs a shorter context.
 *
 * A note on what this file is and is not worth. Measured crawler behaviour is
 * that AI bots overwhelmingly fetch normal HTML and rarely request /llms.txt;
 * Google has said publicly it does not use it. So this file is not the reason
 * the site gets cited — the HTML, the headings, and the direct answers in the
 * FAQ are. It is kept and kept good because it costs one route handler, because
 * Claude and Perplexity do consult it during retrieval, and because it is the
 * cleanest way to hand an agent a map of the site in one request. It is a
 * supplement to well-structured pages, never a substitute for them.
 *
 * The content is generated from the same modules the pages render from, so it
 * cannot drift: a product edited in the CMS, a landing page rewritten by the
 * SEO editor, or a new blog post all reach this file on the next revalidation.
 */
export const revalidate = 86400;

export async function GET() {
  const siteUrl = getCanonicalSiteUrl();
  const [products, landingPages, posts] = await Promise.all([getProducts(), getLandingPageList(), getPosts()]);

  /**
   * Products are the part an agent most often needs to match against a question,
   * and a single line each was not enough to do it. Somebody asking an assistant
   * for a "service CRM in Nepal" will never type "Serviol", so each product
   * states the category names it answers to, who it is for, and what it does.
   */
  const productBlock = products.flatMap((product) => {
    const profile = productAgentProfiles[product.slug];
    const lines = [
      `### ${product.name}`,
      "",
      `URL: ${siteUrl}/products/${product.slug}`,
      "",
      product.shortDescription,
      "",
    ];
    if (profile) {
      lines.push(`Also known as: ${profile.alsoKnownAs.join(", ")}.`, "", `Who it is for: ${profile.audience}`, "");
      lines.push("Capabilities:", "", ...profile.capabilities.map((item) => `- ${item}`), "");
    }
    return lines;
  });

  const lines = [
    "# Infobytes Nepal",
    "",
    "> Nepal-based IT company building websites, custom software, and business automation, and supporting its own software products.",
    "",
    "Legal name: Infobytes Nepal Pvt. Ltd.",
    "Tagline: Complexities, now simplified.",
    "",
    "Infobytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, graphic design, IT training, website maintenance, and business automation. We also build and support our own software products: Nidanyo (laboratory operations and information management for medical laboratories), Serviol (service management, field service management, and AMC), Purseol (field sales management), LeadRack (lead tracking and sales CRM), and Pravyo (student talent bench).",
    "",
    "Location: Kaushaltar, Bhaktapur, Nepal",
    "Email: inquiryo@infobytesnepal.com",
    "Phone: +977-9843468715",
    "Service area: All of Nepal, including Kathmandu, Lalitpur, Bhaktapur, Pokhara, Butwal, Chitwan, and Biratnagar. We also deliver for clients in Europe.",
    "",
    "## Main pages",
    "",
    `- [Home](${siteUrl}/): IT company in Kathmandu Valley serving all of Nepal.`,
    `- [Products](${siteUrl}/products): Software products built and supported in Nepal.`,
    `- [Services](${siteUrl}/services): Web, software, marketing, design, and training services.`,
    `- [About](${siteUrl}/about): Who we are and how we work.`,
    `- [Blog](${siteUrl}/blog): Articles on cost, process, and technology choices in Nepal.`,
    `- [Careers](${siteUrl}/careers): Roles, internships, and the talent pool.`,
    `- [FAQ](${siteUrl}/faq): Common questions about pricing, timelines, and support.`,
    `- [Contact](${siteUrl}/contact): Start a project or request a quote.`,
    `- [Privacy policy](${siteUrl}/privacy-policy): How we handle personal data.`,
    "",
    "## Products",
    "",
    ...productBlock,
    "## Service management and field service (Serviol)",
    "",
    "Serviol is our service management system. It covers the two halves of service work: the record side (customers, installed equipment, warranties, and annual maintenance contracts) and the delivery side (complaint tickets, technician scheduling, and proof of work captured on site). It is built for Nepal, including technicians working from ordinary Android phones where the signal drops.",
    "",
    `- [Serviol](${siteUrl}/products/serviol): The product itself — features, screens, and deployment.`,
    `- [Service CRM in Nepal](${siteUrl}/service-crm-in-nepal): Customers, installed machines, contracts, and complaint history in one record.`,
    `- [Field Service Management Software in Nepal](${siteUrl}/field-service-management-software-in-nepal): FSM — day planners, job assignment, offline field app, and proof of work.`,
    `- [Best Service Management System](${siteUrl}/best-service-management-system): How to choose one, including the criteria and the questions to ask any vendor.`,
    `- [AMC Management Software in Nepal](${siteUrl}/amc-management-software-nepal): Annual maintenance contracts, preventive schedules, renewals, and contract profitability.`,
    `- [Complaint Management System in Nepal](${siteUrl}/complaint-management-system-nepal): Multi-channel complaint capture with an owner, a deadline, and a closure record.`,
    "",
    "## Services",
    "",
    ...serviceCatalog.map((service) => `- [${service.title}](${siteUrl}/services): ${service.subtitle}`),
    "",
    "## Machine-readable access",
    "",
    "Every public page also returns Markdown when requested with `Accept: text/markdown`, and the site publishes a JSON API and an MCP server for agents that would rather call a tool than parse a page.",
    "",
    `- [OpenAPI description](${siteUrl}/api/openapi.json): Full description of the public read API.`,
    `- [API catalog](${siteUrl}/.well-known/api-catalog): RFC 9727 catalog of the machine-readable surfaces.`,
    `- [MCP server](${siteUrl}/api/mcp): Model Context Protocol endpoint for tool-based access.`,
    `- [Agent skills index](${siteUrl}/.well-known/agent-skills/index.json): Packaged skills describing what this site can answer.`,
    `- [Company profile API](${siteUrl}/api/v1/company): Company facts as JSON.`,
    `- [Products API](${siteUrl}/api/v1/products): Product list as JSON.`,
    `- [Pages API](${siteUrl}/api/v1/pages): Service and location pages as JSON.`,
    `- [Search API](${siteUrl}/api/v1/search?q=): One text search across products, services, posts, pages, FAQs, and people.`,
    `- [Authentication notes](${siteUrl}/auth.md): None required. Everything above is public and read-only.`,
    "",
    "## Service and location pages",
    "",
    ...landingPages.map((page) => `- [${page.keyword}](${siteUrl}${page.path}): ${page.metaDescription}`),
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
    "## Optional",
    "",
    "Secondary material. An agent working with a limited context can stop reading above this line.",
    "",
    "### Team",
    "",
    ...team.map((member) => `- [${member.name}](${siteUrl}/team/${member.slug}): ${member.role}. ${member.summary}`),
    "",
    "### Recent writing",
    "",
    ...posts.slice(0, 12).map((post) => `- [${post.title}](${siteUrl}/blog/${post.slug}): ${post.excerpt}`),
    "",
  ];

  return new Response(lines.join("\n"), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
