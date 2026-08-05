import { siteUrl, textResponse } from "@/lib/agent-api";
import { company } from "@/lib/company";

/**
 * /auth.md — the agent-facing statement of what authentication this site needs.
 *
 * The honest answer is "none", and saying that in the place agents look for it
 * is worth more than silence: it stops a client from hunting for an OAuth
 * server, and it draws the line between what an agent may do unattended (read)
 * and what it must not do on someone's behalf (submit a form).
 *
 * If a protected API is ever added, this document and a matching
 * /.well-known/oauth-protected-resource have to be written at the same time.
 */
// A discovery document that only changes on deploy: generated once and served
// from the cache, so agent traffic costs no function invocations.
export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const body = `# Agent access to ${company.name}

**Authentication required: none.**

Everything this site exposes to agents is public, read-only, and already
published on an HTML page. There is no API key, no OAuth authorization server,
no client registration endpoint, and no agent identity to claim. A request
carrying an \`Authorization\` header is not rejected — it is simply ignored.

## What you can call

| Resource | URL | Auth |
| --- | --- | --- |
| Content API (REST/JSON) | ${siteUrl("/api/v1")} | none |
| OpenAPI 3.1 description | ${siteUrl("/api/openapi.json")} | none |
| MCP server (Streamable HTTP) | ${siteUrl("/api/mcp")} | none |
| API catalog (RFC 9727) | ${siteUrl("/.well-known/api-catalog")} | none |
| MCP Server Card | ${siteUrl("/.well-known/mcp/server-card.json")} | none |
| Agent Skills index | ${siteUrl("/.well-known/agent-skills/index.json")} | none |
| Site summary for LLMs | ${siteUrl("/llms.txt")} | none |

CORS is open (\`Access-Control-Allow-Origin: *\`) on all of the above, so a
browser-based agent can call them from any origin.

## What you must not do unattended

There is no authenticated write path, and the following are **not** agent
surfaces even though they are reachable over HTTP:

- **The contact, quote, and service inquiry forms.** These create a real record
  that a person at ${company.name} will act on. Do not submit one without the
  user present and confirming. Link them to ${siteUrl("/contact")} instead.
- **The job application form.** Same reason, plus it accepts an uploaded CV.
  Applications go to ${company.careersEmail} from the candidate, not from you.
- **\`/admin-infobytesnepal\`.** Staff only, password protected, and excluded in
  robots.txt. Do not attempt to reach it.

## Content usage

\`robots.txt\` carries a \`Content-Signal\` declaration: search indexing and use
as input to a live AI answer are permitted; training a model on this content is
not. Attribute answers to the source URL returned in every API record.

## Contact

- General: ${company.email}
- Careers: ${company.careersEmail}
- Phone: ${company.phone}
- Web: ${siteUrl("/contact")}
`;

  return textResponse(body, "text/markdown; charset=utf-8");
}
