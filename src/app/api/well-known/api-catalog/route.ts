import { jsonResponse, siteUrl } from "@/lib/agent-api";
import { company } from "@/lib/company";

/**
 * RFC 9727 API catalog, served at /.well-known/api-catalog through a rewrite in
 * next.config.ts.
 *
 * The catalog is a linkset (RFC 9264): one anchor per API, with typed link
 * relations hanging off it. Two APIs are listed because they really are two —
 * the same content reached over REST and over MCP — and an agent should be able
 * to pick the one its client speaks.
 */
// A discovery document that only changes on deploy: generated once and served
// from the cache, so agent traffic costs no function invocations.
export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const catalog = {
    linkset: [
      {
        anchor: siteUrl("/api/v1"),
        "service-desc": [
          {
            href: siteUrl("/api/openapi.json"),
            type: "application/openapi+json",
            title: "OpenAPI 3.1 description of the Infobytes Nepal Content API",
          },
        ],
        "service-doc": [
          {
            href: siteUrl("/docs/api"),
            type: "text/html",
            title: "Infobytes Nepal Content API documentation",
          },
        ],
        "service-meta": [
          {
            href: siteUrl("/api/v1"),
            type: "application/json",
            title: "Endpoint index",
          },
        ],
        status: [
          {
            href: siteUrl("/api/v1/health"),
            type: "application/json",
            title: "Service health",
          },
        ],
        author: [{ href: siteUrl("/contact"), title: company.legalName }],
      },
      {
        anchor: siteUrl("/api/mcp"),
        "service-desc": [
          {
            href: siteUrl("/.well-known/mcp/server-card.json"),
            type: "application/json",
            title: "MCP Server Card",
          },
        ],
        "service-doc": [
          {
            href: siteUrl("/docs/api"),
            type: "text/html",
            title: "How to connect an MCP client to Infobytes Nepal",
          },
        ],
        status: [{ href: siteUrl("/api/v1/health"), type: "application/json", title: "Service health" }],
        author: [{ href: siteUrl("/contact"), title: company.legalName }],
      },
    ],
  };

  return jsonResponse(catalog, { contentType: "application/linkset+json; charset=utf-8" });
}
