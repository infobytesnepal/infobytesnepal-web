import { API_VERSION, jsonResponse, siteUrl } from "@/lib/agent-api";
import { company } from "@/lib/company";
import { toolDescriptors } from "@/lib/mcp-tools";

/**
 * MCP Server Card (SEP-1649), served at /.well-known/mcp/server-card.json
 * through a rewrite in next.config.ts.
 *
 * The card lets a client decide whether connecting is worth it before it opens
 * a session, so the tool list is generated from the same array the server
 * answers `tools/list` with. A card that advertised a tool the server did not
 * have would be worse than no card.
 */
// A discovery document that only changes on deploy: generated once and served
// from the cache, so agent traffic costs no function invocations.
export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  return jsonResponse({
    $schema: "https://modelcontextprotocol.io/schemas/draft/2025-11-25/server-card.json",
    serverInfo: {
      name: "infobytes-nepal",
      title: `${company.name} Content`,
      version: API_VERSION,
      description:
        "Read-only access to everything Infobytes Nepal publishes: company profile, services, software products, blog posts, FAQs with indicative pricing, open roles, and team.",
      websiteUrl: siteUrl(),
    },
    transport: {
      type: "streamable-http",
      url: siteUrl("/api/mcp"),
    },
    remotes: [{ type: "streamable-http", url: siteUrl("/api/mcp") }],
    capabilities: { tools: { listChanged: false } },
    // No authorization block: the endpoint is public and rejects credentials
    // rather than requiring them. Saying so explicitly stops a client from
    // going looking for an OAuth server that does not exist.
    authentication: { type: "none" },
    tools: toolDescriptors().map((tool) => ({
      name: tool.name,
      title: tool.title,
      description: tool.description,
    })),
    documentation: siteUrl("/docs/api"),
    privacyPolicy: siteUrl("/privacy-policy"),
    contact: { email: company.email, url: siteUrl("/contact") },
  });
}
