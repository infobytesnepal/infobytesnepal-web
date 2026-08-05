import { API_VERSION, jsonResponse, siteUrl } from "@/lib/agent-api";
import { company } from "@/lib/company";

/**
 * The OpenAPI description of /api/v1, served rather than checked in as a static
 * file so `servers[0].url` follows the canonical origin instead of hardcoding a
 * hostname that would be wrong on the .com.np domain.
 *
 * `/.well-known/api-catalog` points here with the `service-desc` relation, and
 * /docs/api is the matching `service-doc`. Any endpoint added under /api/v1 has
 * to be added here too — an agent that trusts this document and then gets a 404
 * is worse off than one that had no document at all.
 */
const listOf = (itemRef: string) => ({
  type: "object",
  required: ["count", "items"],
  properties: {
    count: { type: "integer", description: "Number of items in this response." },
    items: { type: "array", items: { $ref: itemRef } },
  },
});

const slugParam = {
  name: "slug",
  in: "path",
  required: true,
  description: "URL slug, as returned in the matching list endpoint.",
  schema: { type: "string" },
};

const notFoundResponse = {
  description: "No record matches that slug.",
  content: {
    "application/problem+json": { schema: { $ref: "#/components/schemas/Problem" } },
  },
};

function jsonOk(description: string, schema: unknown) {
  return { description, content: { "application/json": { schema } } };
}

// A discovery document that only changes on deploy: generated once and served
// from the cache, so agent traffic costs no function invocations.
export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const spec = {
    openapi: "3.1.0",
    info: {
      title: "Infobytes Nepal Content API",
      version: API_VERSION,
      summary: "Read-only public access to everything published on infobytesnepal.com.",
      description: [
        "Every response is public information that also appears on an HTML page of the site.",
        "There is no authentication and no API key. Responses are cacheable and CORS is open,",
        "so browser-based agents can call this directly.",
        "",
        "An MCP server backed by the same data is available at /api/mcp.",
      ].join("\n"),
      contact: { name: company.name, email: company.email, url: siteUrl("/contact") },
      license: {
        name: "Content usage terms",
        url: siteUrl("/privacy-policy"),
      },
    },
    servers: [{ url: siteUrl("/api/v1"), description: "Production" }],
    externalDocs: { description: "Human-readable API documentation", url: siteUrl("/docs/api") },
    tags: [
      { name: "company", description: "Who Infobytes Nepal is and how to reach them." },
      { name: "catalog", description: "Products and services offered." },
      { name: "content", description: "Blog posts, FAQs, and landing pages." },
      { name: "people", description: "Team members and open roles." },
      { name: "operations", description: "Search and service health." },
    ],
    paths: {
      "/": {
        get: {
          tags: ["operations"],
          operationId: "getApiIndex",
          summary: "List every endpoint in this API.",
          responses: { "200": jsonOk("Endpoint index.", { type: "object" }) },
        },
      },
      "/company": {
        get: {
          tags: ["company"],
          operationId: "getCompany",
          summary: "Company profile, contact details, and machine-readable resource links.",
          responses: { "200": jsonOk("Company profile.", { $ref: "#/components/schemas/Company" }) },
        },
      },
      "/products": {
        get: {
          tags: ["catalog"],
          operationId: "listProducts",
          summary: "Software products built and supported by Infobytes Nepal.",
          responses: { "200": jsonOk("Product list.", listOf("#/components/schemas/ProductSummary")) },
        },
      },
      "/products/{slug}": {
        get: {
          tags: ["catalog"],
          operationId: "getProduct",
          summary: "Full description of one product.",
          parameters: [slugParam],
          responses: {
            "200": jsonOk("Product detail.", { $ref: "#/components/schemas/Product" }),
            "404": notFoundResponse,
          },
        },
      },
      "/services": {
        get: {
          tags: ["catalog"],
          operationId: "listServices",
          summary: "Services offered, with what each one includes.",
          responses: { "200": jsonOk("Service list.", listOf("#/components/schemas/Service")) },
        },
      },
      "/blog": {
        get: {
          tags: ["content"],
          operationId: "listPosts",
          summary: "Published blog posts, newest first.",
          parameters: [
            {
              name: "category",
              in: "query",
              required: false,
              description: "Filter to one category, e.g. \"SEO\".",
              schema: { type: "string" },
            },
            {
              name: "limit",
              in: "query",
              required: false,
              schema: { type: "integer", minimum: 1, maximum: 100, default: 50 },
            },
          ],
          responses: { "200": jsonOk("Post list.", listOf("#/components/schemas/PostSummary")) },
        },
      },
      "/blog/{slug}": {
        get: {
          tags: ["content"],
          operationId: "getPost",
          summary: "One blog post, with the full body as CommonMark.",
          parameters: [slugParam],
          responses: {
            "200": jsonOk("Post detail.", { $ref: "#/components/schemas/Post" }),
            "404": notFoundResponse,
          },
        },
      },
      "/jobs": {
        get: {
          tags: ["people"],
          operationId: "listJobs",
          summary: "Open roles and internships.",
          parameters: [
            {
              name: "open",
              in: "query",
              required: false,
              description: "Pass false to include roles that have since closed.",
              schema: { type: "boolean", default: true },
            },
          ],
          responses: { "200": jsonOk("Job list.", listOf("#/components/schemas/JobSummary")) },
        },
      },
      "/jobs/{slug}": {
        get: {
          tags: ["people"],
          operationId: "getJob",
          summary: "Full description of one role, including how to apply.",
          parameters: [slugParam],
          responses: {
            "200": jsonOk("Job detail.", { $ref: "#/components/schemas/Job" }),
            "404": notFoundResponse,
          },
        },
      },
      "/team": {
        get: {
          tags: ["people"],
          operationId: "listTeam",
          summary: "Team members and what each person works on.",
          responses: { "200": jsonOk("Team list.", listOf("#/components/schemas/TeamMember")) },
        },
      },
      "/faqs": {
        get: {
          tags: ["content"],
          operationId: "listFaqs",
          summary: "Frequently asked questions, including pricing and timeline ranges.",
          parameters: [
            {
              name: "topic",
              in: "query",
              required: false,
              description: "Filter to one topic group id, e.g. \"pricing\".",
              schema: { type: "string" },
            },
            {
              name: "limit",
              in: "query",
              required: false,
              schema: { type: "integer", minimum: 1, maximum: 500, default: 200 },
            },
          ],
          responses: { "200": jsonOk("FAQ list.", listOf("#/components/schemas/Faq")) },
        },
      },
      "/pages": {
        get: {
          tags: ["content"],
          operationId: "listPages",
          summary: "Service and location landing pages, with the topic each one covers.",
          responses: { "200": jsonOk("Page list.", listOf("#/components/schemas/LandingPage")) },
        },
      },
      "/search": {
        get: {
          tags: ["operations"],
          operationId: "search",
          summary: "Search products, services, posts, pages, FAQs, roles, and people at once.",
          parameters: [
            { name: "q", in: "query", required: true, schema: { type: "string" } },
            {
              name: "limit",
              in: "query",
              required: false,
              schema: { type: "integer", minimum: 1, maximum: 50, default: 10 },
            },
          ],
          responses: {
            "200": jsonOk("Search results.", listOf("#/components/schemas/SearchResult")),
            "400": {
              description: "The q parameter was missing or empty.",
              content: { "application/problem+json": { schema: { $ref: "#/components/schemas/Problem" } } },
            },
          },
        },
      },
      "/health": {
        get: {
          tags: ["operations"],
          operationId: "getHealth",
          summary: "Service health, including whether the product database is reachable.",
          responses: { "200": jsonOk("Health report.", { $ref: "#/components/schemas/Health" }) },
        },
      },
    },
    components: {
      schemas: {
        Problem: {
          type: "object",
          description: "RFC 9457 problem details.",
          properties: {
            type: { type: "string" },
            title: { type: "string" },
            status: { type: "integer" },
            detail: { type: "string" },
            instance: { type: "string" },
          },
        },
        Company: {
          type: "object",
          properties: {
            name: { type: "string" },
            legalName: { type: "string" },
            tagline: { type: "string" },
            description: { type: "string" },
            founded: { type: "string" },
            url: { type: "string", format: "uri" },
            contact: {
              type: "object",
              properties: {
                email: { type: "string", format: "email" },
                careersEmail: { type: "string", format: "email" },
                phone: { type: "string" },
                contactPage: { type: "string", format: "uri" },
              },
            },
            address: { type: "object" },
            areaServed: { type: "array", items: { type: "string" } },
            languages: { type: "array", items: { type: "string" } },
            resources: { type: "object", description: "Links to llms.txt, sitemap, OpenAPI, MCP, and skills." },
          },
        },
        ProductSummary: {
          type: "object",
          properties: {
            slug: { type: "string" },
            name: { type: "string" },
            shortDescription: { type: "string" },
            url: { type: "string", format: "uri" },
          },
        },
        Product: {
          allOf: [
            { $ref: "#/components/schemas/ProductSummary" },
            {
              type: "object",
              properties: {
                fullDescription: { type: "string" },
                logo: { type: ["string", "null"], format: "uri" },
              },
            },
          ],
        },
        Service: {
          type: "object",
          properties: {
            slug: { type: "string" },
            name: { type: "string" },
            summary: { type: "string" },
            description: { type: "string" },
            features: { type: "array", items: { type: "string" } },
            url: { type: "string", format: "uri" },
            relatedPages: { type: "array", items: { type: "object" } },
          },
        },
        PostSummary: {
          type: "object",
          properties: {
            slug: { type: "string" },
            title: { type: "string" },
            excerpt: { type: "string" },
            category: { type: "string" },
            tags: { type: "array", items: { type: "string" } },
            author: { type: "string" },
            publishedAt: { type: "string", format: "date" },
            updatedAt: { type: "string", format: "date" },
            readTimeMinutes: { type: "integer" },
            url: { type: "string", format: "uri" },
          },
        },
        Post: {
          allOf: [
            { $ref: "#/components/schemas/PostSummary" },
            {
              type: "object",
              properties: {
                authorRole: { type: ["string", "null"] },
                coverImage: { type: "string", format: "uri" },
                coverAlt: { type: "string" },
                contentMarkdown: { type: "string", description: "Full post body as CommonMark." },
              },
            },
          ],
        },
        JobSummary: {
          type: "object",
          properties: {
            slug: { type: "string" },
            title: { type: "string" },
            department: { type: "string" },
            employmentType: { type: "string" },
            workplace: { type: "string", enum: ["On site", "Hybrid", "Remote"] },
            location: { type: "string" },
            openings: { type: "integer" },
            compensation: { type: "string" },
            experience: { type: "string" },
            postedAt: { type: "string", format: "date" },
            isOpen: { type: "boolean" },
            summary: { type: "string" },
            url: { type: "string", format: "uri" },
          },
        },
        Job: {
          allOf: [
            { $ref: "#/components/schemas/JobSummary" },
            {
              type: "object",
              properties: {
                duration: { type: "string" },
                commitment: { type: "string" },
                startDate: { type: "string" },
                about: { type: "array", items: { type: "string" } },
                responsibilities: { type: "array", items: { type: "string" } },
                requirements: { type: "array", items: { type: "string" } },
                niceToHave: { type: "array", items: { type: "string" } },
                offer: { type: "array", items: { type: "string" } },
                applyBy: { type: "string", format: "email" },
              },
            },
          ],
        },
        TeamMember: {
          type: "object",
          properties: {
            slug: { type: "string" },
            name: { type: "string" },
            role: { type: "string" },
            summary: { type: "string" },
            location: { type: "string" },
            expertise: { type: "array", items: { type: "string" } },
            url: { type: "string", format: "uri" },
          },
        },
        Faq: {
          type: "object",
          properties: {
            id: { type: "string" },
            topic: { type: "string" },
            topicTitle: { type: "string" },
            question: { type: "string" },
            answer: { type: "string" },
            details: { type: "array", items: { type: "string" } },
            url: { type: "string", format: "uri" },
          },
        },
        LandingPage: {
          type: "object",
          properties: {
            slug: { type: "string" },
            keyword: { type: "string" },
            title: { type: "string" },
            summary: { type: "string" },
            url: { type: "string", format: "uri" },
          },
        },
        SearchResult: {
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["product", "service", "post", "job", "page", "faq", "person"],
            },
            title: { type: "string" },
            summary: { type: "string" },
            url: { type: "string", format: "uri" },
          },
        },
        Health: {
          type: "object",
          properties: {
            status: { type: "string" },
            apiVersion: { type: "string" },
            database: { type: "string", enum: ["ok", "fallback"] },
            checkedAt: { type: "string", format: "date-time" },
            responseTimeMs: { type: "integer" },
          },
        },
      },
    },
  };

  return jsonResponse(spec, { contentType: "application/openapi+json; charset=utf-8" });
}
