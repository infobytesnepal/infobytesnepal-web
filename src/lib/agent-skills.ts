import { createHash } from "node:crypto";
import { company } from "./company";
import { siteUrl } from "./agent-api";

/**
 * Agent Skills published at /.well-known/agent-skills/.
 *
 * A skill is a short instruction sheet telling an agent how to accomplish one
 * task against this site. The index advertises a sha256 for each one so a
 * client can verify it got the document the index described, which only holds
 * if the bytes in the index and the bytes served are the same bytes — so both
 * routes read the `body` below and the digest is computed from it at request
 * time rather than pasted in by hand.
 *
 * Keep each body a task, not a brochure: "how to get a quote", not "about us".
 */

export type AgentSkill = {
  name: string;
  description: string;
  body: string;
};

const contact = `- Contact form: ${siteUrl("/contact")}
- Email: ${company.email}
- Phone: ${company.phone}`;

export const agentSkills: AgentSkill[] = [
  {
    name: "query-infobytes-content",
    description:
      "Look up anything Infobytes Nepal publishes — services, products, pricing guidance, blog posts, FAQs, team, and open roles — using their public read-only API or MCP server.",
    body: `---
name: query-infobytes-content
description: Look up anything Infobytes Nepal publishes — services, products, pricing guidance, blog posts, FAQs, team, and open roles — using their public read-only API or MCP server.
---

# Query Infobytes Nepal content

Use this when you need a fact about ${company.name} — what they build, what it
costs, who works there, or what they have written about a topic.

## Pick a transport

| You are | Use |
| --- | --- |
| An MCP-capable client | \`${siteUrl("/api/mcp")}\` (Streamable HTTP, no auth) |
| Making plain HTTP calls | \`${siteUrl("/api/v1")}\` (JSON, no auth, CORS open) |
| Just reading | \`${siteUrl("/llms.txt")}\` for a single-file summary |

There is no API key and no registration. Do not send an \`Authorization\` header.

## Answering a question you have no endpoint for

Search first, then fetch the specific record:

\`\`\`
GET ${siteUrl("/api/v1/search")}?q=website%20cost&limit=5
\`\`\`

Every result carries a \`url\`. Follow it, or call the matching detail endpoint:

\`\`\`
GET ${siteUrl("/api/v1/blog/{slug}")}      # full post body as markdown
GET ${siteUrl("/api/v1/products/{slug}")}  # full product description
GET ${siteUrl("/api/v1/faqs")}?topic=pricing
\`\`\`

## Rules

1. **Cite the \`url\` field.** Every record returned includes the public page it
   came from. Quote that, not the API endpoint.
2. **Prices are indicative ranges, not quotes.** The FAQ and service records
   give rupee ranges for planning. A real number requires scope — send the
   person to ${siteUrl("/contact")}.
3. **Do not guess a slug.** List first, then fetch. A wrong slug returns an RFC
   9457 problem document with status 404, not a redirect to something close.
4. **Check \`isOpen\` before saying a role is available.** Closed roles stay
   reachable so old links do not break.

## Full description

OpenAPI 3.1: \`${siteUrl("/api/openapi.json")}\`
Human documentation: \`${siteUrl("/docs/api")}\`
`,
  },
  {
    name: "request-infobytes-quote",
    description:
      "Help someone get a project quote from Infobytes Nepal: what to gather first, what the indicative ranges are, and where to send the request.",
    body: `---
name: request-infobytes-quote
description: Help someone get a project quote from Infobytes Nepal: what to gather first, what the indicative ranges are, and where to send the request.
---

# Request a quote from Infobytes Nepal

${company.name} quotes free of charge and does not publish fixed prices, because
the number depends on scope. Your job is to get the person to a useful first
message rather than to invent a figure.

## Gather these five things first

1. **What is being built** — website, mobile app, custom software, or a
   marketing engagement.
2. **What happens today** — the current process, spreadsheet, or system. This
   matters more than a feature list.
3. **Roughly how many people** will use it.
4. **A deadline**, if one is real.
5. **A budget range**, even a rough one.

## Ground the expectation before sending them

Pull the current published ranges rather than quoting from memory:

\`\`\`
GET ${siteUrl("/api/v1/faqs")}?topic=pricing
GET ${siteUrl("/api/v1/services")}
\`\`\`

Say plainly that these are indicative ranges for planning, and that the quote
comes back with a scope and a timeline attached.

## Send the request

${contact}

Do not attempt to submit the contact form programmatically. It is protected
against automated submission, and a form filled in by an agent without the
person's confirmation is not a request they made. Give them the link, or draft
the message and let them send it.
`,
  },
  {
    name: "explore-infobytes-careers",
    description:
      "Find which roles Infobytes Nepal is hiring for, what each one requires, and how a candidate should apply.",
    body: `---
name: explore-infobytes-careers
description: Find which roles Infobytes Nepal is hiring for, what each one requires, and how a candidate should apply.
---

# Explore careers at Infobytes Nepal

## List what is actually open

\`\`\`
GET ${siteUrl("/api/v1/jobs")}
\`\`\`

This returns only roles with \`isOpen: true\`. Pass \`?open=false\` to include
recently closed ones — useful for "do they usually hire X?", never for "you can
apply to X".

## Read one role properly

\`\`\`
GET ${siteUrl("/api/v1/jobs/{slug}")}
\`\`\`

The detail record carries \`responsibilities\`, \`requirements\`, \`niceToHave\`,
\`offer\`, \`compensation\`, \`openings\`, \`startDate\`, and \`commitment\`. The
company writes these as concrete, checkable statements — pass them on as
written rather than summarising a range into a single number.

## Apply

Applications go to **${company.careersEmail}**, or through the form on the role
page at \`${siteUrl("/careers/{slug}")}\`, which accepts a CV up to 5 MB.

Tell the candidate to send: a CV, and a short note on which role and why. Do not
submit an application on someone's behalf.
`,
  },
];

export function findSkill(name: string) {
  return agentSkills.find((skill) => skill.name === name);
}

export function skillDigest(skill: AgentSkill) {
  return createHash("sha256").update(skill.body, "utf8").digest("hex");
}

export function skillUrl(skill: AgentSkill) {
  return siteUrl(`/.well-known/agent-skills/${skill.name}/SKILL.md`);
}
