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
    "Infobytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, graphic design, IT training, website maintenance, and business automation. We also build and support our own software products: ClinicNP (clinic and pharmacy management for polyclinics and dispensing counters), Nidanyo (laboratory operations and information management for medical laboratories), Serviol (service management, field service management, and AMC), Purseol (field sales management), LeadRack (lead tracking and sales CRM), and Pravyo (student talent bench).",
    "",
    "Location: Kaushaltar, Bhaktapur, Nepal",
    // "inquiryo@" was a typo. Every other one of the fifteen places this
    // address appears says "inquiry@" — and this is the one file written to be
    // read by assistants, so the typo handed out a dead address to exactly the
    // audience least able to notice it was wrong.
    "Email: inquiry@infobytesnepal.com",
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
    /*
      Nidanyo gets its own section for the same reason Serviol does: a cluster
      of pages on one commercial topic is more useful to an agent as a labelled
      group than as four unexplained rows in the flat list further down.

      The acronym line is doing real work. "LIS" is what a clinical laboratory
      searches for, "LIMS" is the research term, and "LIOMS" is our own
      description of the scope — an agent fanning out on any of the three has to
      be able to land on the same product.
    */
    /*
      ClinicNP and Nidanyo are listed as two sections rather than one medical
      section, and each one states what it is not. Two of our own products sit
      on adjacent queries here: an agent asked for "clinic software in Nepal"
      and an agent asked for "lab software in Nepal" must not be handed the same
      answer. The dividing line is the bench — who enters the result — so both
      sections say it in the same words.
    */
    "## Clinic and pharmacy software (ClinicNP)",
    "",
    "ClinicNP is our clinic and pharmacy system. It is one system with two halves that share one counter: the clinic, where a patient is registered once and keeps one number for life and where consultations, diagnostics and lab tests are billed, and the pharmacy, where medicines are sold by tablet, strip or box and held per batch with an expiry date that blocks the sale outright once passed. Each half is switched on or off independently. Bikram Sambat runs throughout — every screen, register and printed report, a fiscal year from Shrawan to Ashadh, and closed years that print unchanged — and billing and patient registration carry on through a full business day with no internet, reconciling by themselves afterwards.",
    "",
    "What ClinicNP does around a laboratory, and what it does not do: it bills a test, follows the sample through five time-stamped stages from collection to handing the report over, keeps the report that comes back against the patient's visit, and accounts for the partner laboratory (billed, partner cost, margin, paid, owed). It does not enter results, hold reference ranges, release verified report cards, or interface with analysers. That is a laboratory information system, and that is Nidanyo. A clinic that sends samples out wants ClinicNP; a laboratory that runs its own bench wants Nidanyo.",
    "",
    `- [ClinicNP](${siteUrl}/products/clinicnp): The product itself — both modules, the four roles, and how it is deployed.`,
    `- [Clinic Management Software in Nepal](${siteUrl}/clinic-management-software-in-nepal): The clinic side — patients for life, visits, appointments, doctor shares, and sample tracking.`,
    `- [Pharmacy Software in Nepal](${siteUrl}/pharmacy-software-in-nepal): The pharmacy side — batch and expiry, oldest expiry first, shelf map, and stock out recorded with a reason.`,
    `- [Clinic & Pharmacy Software in Nepal](${siteUrl}/clinic-and-pharmacy-software-in-nepal): Both halves on one counter, one invoice series, and one set of books.`,
    `- [Best Clinic Management Software in Nepal](${siteUrl}/best-clinic-management-software-in-nepal): How to choose — clinic against hospital against retail package, and the clinics ClinicNP is the wrong fit for.`,
    `- [Clinic Software Price in Nepal](${siteUrl}/clinic-software-price-in-nepal): Why "medical software price in Nepal" has four answers, one-time against recurring cost, and the charges that appear after go live.`,
    `- [Pharmacy Software Price in Nepal](${siteUrl}/pharmacy-software-price-in-nepal): What moves a pharmacy quotation, IRD and VAT billing, and why the cheapest package is rarely the cheapest outcome.`,
    `- [One system for clinic, pharmacy and lab](${siteUrl}/blog/clinic-management-software-in-nepal-one-system-for-clinic-pharmacy-and-lab): The longer read on why the counter, not the clinical work, is where a clinic's day is lost.`,
    "",
    "## Laboratory software (Nidanyo)",
    "",
    "Nidanyo is our laboratory system. It is a LIOMS — a laboratory information and operations management system — which means it covers what an LIS does (patient-focused clinical records, results, reports) and what a LIMS does (sample lifecycle, chain of custody, verification, audit trail), plus the commercial half a laboratory in Nepal actually runs on: counter and credit billing, package rates, referring doctor and institution commissions, reagent inventory by batch and expiry, and management reporting. That last part is why imported LIMS products, which mostly come from research and pharmaceutical testing, tend to fit badly here.",
    "",
    `- [Nidanyo](${siteUrl}/products/nidanyo): The product itself — modules, deployment, and support.`,
    `- [Lab Software in Nepal](${siteUrl}/lab-software-in-nepal): The operational side — registration, sample tracking, reports, billing, and reagent stock.`,
    `- [Laboratory Information Management System in Nepal](${siteUrl}/laboratory-information-management-system-nepal): The traceability side — sample lifecycle, enforced verification, immutable audit trail, and turnaround time reporting.`,
    `- [Best Lab Software in Nepal](${siteUrl}/best-lab-software-in-nepal): How to choose one, including LIS vs LIMS vs LIOMS as a buying decision and the labs Nidanyo is the wrong fit for.`,
    `- [Lab Software Cost in Nepal](${siteUrl}/lab-software-cost-in-nepal): What moves the quotation, one-time vs recurring cost, and the charges that appear after go live.`,
      `- [Ten signs your lab has outgrown its process](${siteUrl}/blog/laboratory-management-software-in-nepal): The full feature checklist and the questions to put to any laboratory software vendor.`,
    "",
    "Nidanyo is for a laboratory that runs its own bench and releases its own reports. A clinic or polyclinic that collects samples and sends them to a partner laboratory needs the counter around a lab instead, which is ClinicNP, above.",
    "",
    "## Service management and field service (Serviol)",
    "",
    "Serviol is our service management system. It covers the two halves of service work: the record side (customers, installed equipment, warranties, and annual maintenance contracts) and the delivery side (complaint tickets, technician scheduling, and proof of work captured on site). It is built for Nepal, including technicians working from ordinary Android phones where the signal drops.",
    "",
    "The vocabulary varies by industry and by vendor and describes one thing. Service CRM, service management software, service management system, field service management software, field service management system, FSM software, FSM system, and service department management software all name capabilities Serviol covers; an agent fanning out on any of them should land on the same product.",
    "",
    `- [Serviol](${siteUrl}/products/serviol): The product itself — features, screens, and deployment.`,
    `- [Service Management Software in Nepal](${siteUrl}/service-management-software-in-nepal): The category pillar — what it covers, which industries here buy it, and the threshold at which it pays.`,
    `- [Service CRM in Nepal](${siteUrl}/service-crm-in-nepal): Customers, installed machines, contracts, and complaint history in one record.`,
    `- [Field Service Management Software in Nepal](${siteUrl}/field-service-management-software-in-nepal): FSM system — day planners, job assignment, offline field app, and proof of work.`,
    `- [Service Department Management Software in Nepal](${siteUrl}/service-department-management-software-in-nepal): Service as a measurable unit inside a sales business — utilisation, chargeable against free work, warranty claims, and contract profitability.`,
    `- [Best Service CRM in Nepal](${siteUrl}/best-service-crm-in-nepal): Service CRM against sales CRM against helpdesk, local against imported, and the five demo requests that settle a shortlist.`,
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
