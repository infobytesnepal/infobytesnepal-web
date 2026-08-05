import {
  companyProfile,
  getJobDetail,
  getPostDetail,
  getProductDetail,
  listFaqs,
  listJobs,
  listPosts,
  listProducts,
  listServices,
  listTeam,
  searchSite,
} from "./agent-content";

/**
 * The tools an agent can call against this site.
 *
 * Defined once and consumed by three surfaces: the MCP server at /api/mcp, the
 * capability summary in /.well-known/mcp/server-card.json, and the WebMCP tools
 * registered on the page. Each one is a thin wrapper over `agent-content`, so a
 * tool can never return something the REST API would not.
 *
 * Every tool is read-only. Nothing here writes, and nothing here reads anything
 * that is not already on a public page — that property is what lets the
 * endpoint stay unauthenticated, so keep it true when adding a tool.
 */

type JsonSchema = {
  type: "object";
  properties: Record<string, unknown>;
  required?: string[];
  additionalProperties?: boolean;
};

export type McpTool = {
  name: string;
  title: string;
  description: string;
  inputSchema: JsonSchema;
  execute: (args: Record<string, unknown>) => Promise<unknown>;
};

const noArgs: JsonSchema = { type: "object", properties: {}, additionalProperties: false };

function str(args: Record<string, unknown>, key: string) {
  const value = args?.[key];
  return typeof value === "string" ? value.trim() : "";
}

function num(args: Record<string, unknown>, key: string, fallback: number, max: number) {
  const value = Number(args?.[key]);
  if (!Number.isFinite(value) || value <= 0) return fallback;
  return Math.min(Math.floor(value), max);
}

export const mcpTools: McpTool[] = [
  {
    name: "search_site",
    title: "Search the site",
    description:
      "Search everything Infobytes Nepal publishes — products, services, blog posts, landing pages, FAQs, open roles, and team members — and get back titles, summaries, and URLs. Use this first when you do not know which specific tool answers the question.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "What to search for, e.g. \"website cost\" or \"lab software\"." },
        limit: { type: "integer", description: "Maximum results to return (1-50).", default: 10 },
      },
      required: ["query"],
      additionalProperties: false,
    },
    execute: async (args) => searchSite(str(args, "query"), num(args, "limit", 10, 50)),
  },
  {
    name: "get_company_profile",
    title: "Get company profile",
    description:
      "Get who Infobytes Nepal is, where they are based, how to contact them, which services and products they offer, and links to their machine-readable resources.",
    inputSchema: noArgs,
    execute: async () => companyProfile(),
  },
  {
    name: "list_services",
    title: "List services",
    description:
      "List the services Infobytes Nepal sells — web design and development, SEO, digital marketing, IT training, and graphic design — with what each includes and indicative timelines and prices.",
    inputSchema: noArgs,
    execute: async () => listServices(),
  },
  {
    name: "list_products",
    title: "List products",
    description:
      "List the software products Infobytes Nepal builds and supports, such as Nidanyo, Serviol, Purseol, LeadRack, and Pravyo.",
    inputSchema: noArgs,
    execute: async () => listProducts(),
  },
  {
    name: "get_product",
    title: "Get product detail",
    description: "Get the full description of one product by its slug, as returned by list_products.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", description: "Product slug, e.g. \"nidanyo\"." } },
      required: ["slug"],
      additionalProperties: false,
    },
    execute: async (args) => getProductDetail(str(args, "slug")),
  },
  {
    name: "list_blog_posts",
    title: "List blog posts",
    description:
      "List published articles, newest first. Useful for questions about cost, process, and technology choices in Nepal.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter: Web Development, Software, SEO, Digital Marketing, or Business Automation.",
        },
        limit: { type: "integer", description: "Maximum posts to return (1-100).", default: 20 },
      },
      additionalProperties: false,
    },
    execute: async (args) =>
      listPosts({ limit: num(args, "limit", 20, 100), category: str(args, "category") || undefined }),
  },
  {
    name: "get_blog_post",
    title: "Get blog post",
    description: "Get one blog post by slug, including the entire body as markdown so it can be quoted or summarised.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", description: "Post slug, as returned by list_blog_posts." } },
      required: ["slug"],
      additionalProperties: false,
    },
    execute: async (args) => getPostDetail(str(args, "slug")),
  },
  {
    name: "list_faqs",
    title: "List FAQs",
    description:
      "Get answered questions about pricing, timelines, process, and support, with the indicative rupee ranges the company quotes publicly.",
    inputSchema: {
      type: "object",
      properties: {
        topic: { type: "string", description: "Optional topic group id, e.g. \"pricing\"." },
        limit: { type: "integer", description: "Maximum answers to return (1-500).", default: 50 },
      },
      additionalProperties: false,
    },
    execute: async (args) => listFaqs({ topic: str(args, "topic") || undefined, limit: num(args, "limit", 50, 500) }),
  },
  {
    name: "list_open_roles",
    title: "List open roles",
    description: "List the jobs and internships Infobytes Nepal is currently hiring for.",
    inputSchema: noArgs,
    execute: async () => listJobs({ openOnly: true }),
  },
  {
    name: "get_open_role",
    title: "Get role detail",
    description:
      "Get the full description of one role by slug: responsibilities, requirements, compensation, and where to send an application.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string", description: "Role slug, as returned by list_open_roles." } },
      required: ["slug"],
      additionalProperties: false,
    },
    execute: async (args) => getJobDetail(str(args, "slug")),
  },
  {
    name: "list_team",
    title: "List team members",
    description: "List the people at Infobytes Nepal, their roles, and what each of them specialises in.",
    inputSchema: noArgs,
    execute: async () => listTeam(),
  },
];

export function findTool(name: string) {
  return mcpTools.find((tool) => tool.name === name);
}

/** The tool list as MCP wants it on the wire — no `execute`. */
export function toolDescriptors() {
  return mcpTools.map(({ name, title, description, inputSchema }) => ({
    name,
    title,
    description,
    inputSchema,
  }));
}
