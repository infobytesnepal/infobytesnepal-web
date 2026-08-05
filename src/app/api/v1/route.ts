import { API_BASE, API_VERSION, apiUrl, jsonResponse, siteUrl } from "@/lib/agent-api";

/**
 * The API root. An agent that follows the `service-desc` link out of
 * /.well-known/api-catalog lands on the OpenAPI document, but one that simply
 * truncates a URL back to /api/v1 should still find its way rather than get a
 * 404, so this lists every endpoint by hand.
 */
// Compiled from TypeScript modules that only change on deploy, so this is
// generated once and served from the cache rather than re-run per request.
export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  return jsonResponse({
    name: "Infobytes Nepal Content API",
    version: API_VERSION,
    description:
      "Read-only public access to everything published on infobytesnepal.com: company profile, products, services, blog posts, open roles, team, and FAQs. No authentication, no rate limit beyond ordinary fair use.",
    basePath: API_BASE,
    documentation: siteUrl("/docs/api"),
    openapi: siteUrl("/api/openapi.json"),
    mcp: siteUrl("/api/mcp"),
    authentication: "none",
    endpoints: {
      company: apiUrl("/company"),
      products: apiUrl("/products"),
      product: apiUrl("/products/{slug}"),
      services: apiUrl("/services"),
      blog: apiUrl("/blog"),
      post: apiUrl("/blog/{slug}"),
      jobs: apiUrl("/jobs"),
      job: apiUrl("/jobs/{slug}"),
      team: apiUrl("/team"),
      faqs: apiUrl("/faqs"),
      pages: apiUrl("/pages"),
      search: apiUrl("/search?q={query}"),
      health: apiUrl("/health"),
    },
  });
}
