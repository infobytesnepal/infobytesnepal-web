import type { Metadata } from "next";
import Link from "next/link";
import { basicPageMetadata } from "@/lib/seo";
import { company } from "@/lib/company";
import { getCanonicalSiteUrl } from "@/lib/utils";
import { toolDescriptors } from "@/lib/mcp-tools";
import { agentSkills } from "@/lib/agent-skills";

export async function generateMetadata(): Promise<Metadata> {
  return basicPageMetadata({
    route: "/docs/api",
    title: "Content API and MCP Server | Infobytes Nepal",
    description:
      "Free, public, read-only API and MCP server for everything Infobytes Nepal publishes: services, products, pricing FAQs, blog posts, open roles, and team. No key required.",
  });
}

const siteUrl = getCanonicalSiteUrl();

/**
 * The `service-doc` half of /.well-known/api-catalog.
 *
 * Written for a person deciding whether to point an agent at this site, so it
 * stays a page rather than a rendered spec viewer: the OpenAPI document is one
 * click away and machines read that one. The tool and skill lists are generated
 * from the same modules the endpoints serve, so this page cannot drift out of
 * date the way a hand-written list would.
 */
const endpoints = [
  { method: "GET", path: "/api/v1", what: "Index of every endpoint below." },
  { method: "GET", path: "/api/v1/company", what: "Profile, contact details, and links to every machine-readable resource." },
  { method: "GET", path: "/api/v1/services", what: "The five services, what each includes, and indicative timelines and prices." },
  { method: "GET", path: "/api/v1/products", what: "Software products built and supported in Nepal." },
  { method: "GET", path: "/api/v1/products/{slug}", what: "Full description of one product." },
  { method: "GET", path: "/api/v1/blog", what: "Published articles. Filter with ?category= and ?limit=." },
  { method: "GET", path: "/api/v1/blog/{slug}", what: "One article, body included as CommonMark." },
  { method: "GET", path: "/api/v1/faqs", what: "Answered questions with published rupee ranges. Filter with ?topic=." },
  { method: "GET", path: "/api/v1/jobs", what: "Open roles. Pass ?open=false to include closed ones." },
  { method: "GET", path: "/api/v1/jobs/{slug}", what: "One role in full, including how to apply." },
  { method: "GET", path: "/api/v1/team", what: "Who works here and what each person does." },
  { method: "GET", path: "/api/v1/pages", what: "Service and location landing pages." },
  { method: "GET", path: "/api/v1/search", what: "Search everything at once. Requires ?q=." },
  { method: "GET", path: "/api/v1/health", what: "Service health, including database reachability." },
];

const discovery = [
  { path: "/.well-known/api-catalog", what: "RFC 9727 catalog of both APIs." },
  { path: "/api/openapi.json", what: "OpenAPI 3.1 description of the REST API." },
  { path: "/.well-known/mcp/server-card.json", what: "MCP Server Card (SEP-1649)." },
  { path: "/.well-known/agent-skills/index.json", what: "Agent Skills discovery index." },
  { path: "/llms.txt", what: "The whole company as one plain-text file." },
  { path: "/auth.md", what: "What authentication is needed, and what agents must not do." },
];

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-soft-blue/45 px-1.5 py-0.5 font-mono text-[0.9em] text-deep-navy">{children}</code>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-14 scroll-mt-28">
      <h2 className="text-2xl font-semibold text-deep-navy md:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-lg leading-8 text-dark-text/76">{children}</div>
    </section>
  );
}

export default function ApiDocsPage() {
  return (
    <section className="page-x min-h-screen bg-white pb-24 pt-32">
      <div className="brand-radial mx-auto max-w-4xl rounded-[32px] border border-primary-blue/12 bg-white p-7 shadow-[0_24px_70px_rgba(4,18,63,0.08)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-blue">For developers and AI agents</p>
        <h1 className="mt-3 text-4xl font-semibold text-deep-navy md:text-5xl">Content API and MCP server</h1>
        <p className="mt-6 text-lg leading-8 text-dark-text/76">
          Everything {company.name} publishes is available as JSON, and as an MCP server for agents. There is no API
          key, no registration, and no rate limit beyond ordinary fair use. CORS is open, so this works from a browser.
        </p>

        <Section id="rest" title="REST API">
          <p>
            Base URL <Code>{siteUrl}/api/v1</Code>. Every response is JSON. Errors come back as RFC 9457 problem
            documents with <Code>application/problem+json</Code>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-base">
              <thead>
                <tr className="border-b border-primary-blue/15 text-left text-sm uppercase tracking-wide text-deep-navy">
                  <th className="py-3 pr-4 font-semibold">Endpoint</th>
                  <th className="py-3 font-semibold">Returns</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint) => (
                  <tr key={endpoint.path} className="border-b border-primary-blue/8 align-top">
                    <td className="py-3 pr-4 font-mono text-sm text-primary-blue">
                      {endpoint.method} {endpoint.path}
                    </td>
                    <td className="py-3 text-base leading-7 text-dark-text/76">{endpoint.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Full description:{" "}
            <a className="font-semibold text-primary-blue underline" href="/api/openapi.json">
              OpenAPI 3.1 document
            </a>
            .
          </p>
        </Section>

        <Section id="mcp" title="MCP server">
          <p>
            Streamable HTTP at <Code>{siteUrl}/api/mcp</Code>. Stateless, unauthenticated, {toolDescriptors().length}{" "}
            read-only tools. Point any MCP client at that URL — there is no session to establish and no token to obtain.
          </p>
          <ul className="ml-5 list-disc space-y-2">
            {toolDescriptors().map((tool) => (
              <li key={tool.name}>
                <Code>{tool.name}</Code> — {tool.description}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="markdown" title="Markdown for agents">
          <p>
            Any public page returns clean markdown instead of HTML when the request asks for it. The URL does not
            change:
          </p>
          <pre className="overflow-x-auto rounded-2xl bg-deep-navy px-5 py-4 font-mono text-sm leading-6 text-white">
            {`curl -H 'Accept: text/markdown' ${siteUrl}/services`}
          </pre>
          <p>
            The response carries <Code>Content-Type: text/markdown</Code> and an <Code>x-markdown-tokens</Code> header
            with an approximate token count, so an agent can budget before it reads.
          </p>
        </Section>

        <Section id="skills" title="Agent skills">
          <p>
            Task-shaped instructions for agents, listed at{" "}
            <a className="font-semibold text-primary-blue underline" href="/.well-known/agent-skills/index.json">
              /.well-known/agent-skills/index.json
            </a>{" "}
            with a sha256 for each document.
          </p>
          <ul className="ml-5 list-disc space-y-2">
            {agentSkills.map((skill) => (
              <li key={skill.name}>
                <Code>{skill.name}</Code> — {skill.description}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="discovery" title="Discovery documents">
          <ul className="ml-5 list-disc space-y-2">
            {discovery.map((item) => (
              <li key={item.path}>
                <a className="font-mono text-sm font-semibold text-primary-blue underline" href={item.path}>
                  {item.path}
                </a>{" "}
                — {item.what}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="rules" title="Terms of use">
          <p>
            The content is published for search indexing and for use as input to a live AI answer — quote it and link
            back to the source URL that every record carries. It is not offered for model training; this is declared in{" "}
            <Code>robots.txt</Code> as a Content Signal.
          </p>
          <p>
            The contact, quote, and job application forms are <strong>not</strong> agent surfaces. They create a record
            a person will act on, so an agent should hand its user the link rather than submit on their behalf. See{" "}
            <a className="font-semibold text-primary-blue underline" href="/auth.md">
              /auth.md
            </a>
            .
          </p>
          <p>
            Something missing, or need a shape this API does not return?{" "}
            <Link className="font-semibold text-primary-blue underline" href="/contact">
              Tell us
            </Link>
            .
          </p>
        </Section>
      </div>
    </section>
  );
}
