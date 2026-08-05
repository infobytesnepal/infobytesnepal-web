"use client";

import { useEffect } from "react";

/**
 * WebMCP tool registration.
 *
 * An agent driving a real browser on this site can call these instead of
 * scraping the DOM. They are the same operations the MCP server at /api/mcp
 * exposes, reached over same-origin fetch rather than JSON-RPC, because the two
 * transports serve different callers: an in-browser agent already has the page,
 * a remote agent does not.
 *
 * The API is not shipping everywhere yet, so everything is behind a capability
 * check and the component renders nothing. On a browser without WebMCP this
 * costs one property lookup and then does nothing at all.
 */

type ToolResult = { content: Array<{ type: "text"; text: string }>; isError?: boolean };

type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<ToolResult>;
};

declare global {
  interface Navigator {
    modelContext?: {
      provideContext?: (context: { tools: WebMcpTool[] }) => void;
      registerTool?: (tool: WebMcpTool) => void;
    };
  }
}

const noArgs = { type: "object", properties: {}, additionalProperties: false } as const;

const text = (value: unknown): ToolResult => ({
  content: [{ type: "text", text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }],
});

const failed = (message: string): ToolResult => ({
  content: [{ type: "text", text: message }],
  isError: true,
});

/**
 * Every tool goes through here, so a network failure surfaces to the model as a
 * tool error it can retry or work around, rather than as a rejected promise
 * that stops the whole turn.
 */
async function getJson(path: string): Promise<ToolResult> {
  try {
    const response = await fetch(path, { headers: { accept: "application/json" } });
    if (!response.ok) return failed(`Request to ${path} failed with status ${response.status}.`);
    return text(await response.json());
  } catch (error) {
    return failed(`Request to ${path} failed: ${error instanceof Error ? error.message : "unknown error"}`);
  }
}

function asString(args: Record<string, unknown>, key: string) {
  const value = args?.[key];
  return typeof value === "string" ? value.trim() : "";
}

const tools: WebMcpTool[] = [
  {
    name: "search_infobytes",
    description:
      "Search everything Infobytes Nepal publishes — services, software products, blog posts, landing pages, FAQs, open roles, and team members. Returns titles, summaries, and links. Use this first when the right page is not obvious.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "What to search for, e.g. \"website cost\" or \"lab software\"." },
        limit: { type: "integer", description: "Maximum results (1-50).", default: 10 },
      },
      required: ["query"],
      additionalProperties: false,
    },
    execute: async (args) => {
      const query = asString(args, "query");
      if (!query) return failed("Pass a non-empty query.");
      const limit = Number(args.limit) > 0 ? Math.min(Math.floor(Number(args.limit)), 50) : 10;
      return getJson(`/api/v1/search?q=${encodeURIComponent(query)}&limit=${limit}`);
    },
  },
  {
    name: "read_current_page",
    description:
      "Get the page currently open in the browser as clean markdown, without navigation, styling, or decorative markup. Use this instead of reading the DOM when you need what the page actually says.",
    inputSchema: noArgs,
    execute: async () => {
      try {
        const response = await fetch(window.location.pathname, { headers: { accept: "text/markdown" } });
        if (!response.ok) return failed(`This page has no markdown rendering (status ${response.status}).`);
        return text(await response.text());
      } catch (error) {
        return failed(`Could not read this page: ${error instanceof Error ? error.message : "unknown error"}`);
      }
    },
  },
  {
    name: "get_infobytes_profile",
    description:
      "Get who Infobytes Nepal is, where they are based, how to contact them, and which services and products they offer.",
    inputSchema: noArgs,
    execute: async () => getJson("/api/v1/company"),
  },
  {
    name: "list_infobytes_services",
    description:
      "List the services Infobytes Nepal sells — web design and development, SEO, digital marketing, IT training, graphic design — with what each includes and indicative timelines and prices.",
    inputSchema: noArgs,
    execute: async () => getJson("/api/v1/services"),
  },
  {
    name: "list_infobytes_products",
    description: "List the software products Infobytes Nepal builds and supports, with a short description of each.",
    inputSchema: noArgs,
    execute: async () => getJson("/api/v1/products"),
  },
  {
    name: "list_infobytes_faqs",
    description:
      "Get answered questions about pricing, timelines, process, and support, including the indicative rupee ranges quoted publicly. Pass a topic such as \"pricing\" to narrow it.",
    inputSchema: {
      type: "object",
      properties: { topic: { type: "string", description: "Optional topic id, e.g. \"pricing\"." } },
      additionalProperties: false,
    },
    execute: async (args) => {
      const topic = asString(args, "topic");
      return getJson(`/api/v1/faqs${topic ? `?topic=${encodeURIComponent(topic)}` : ""}`);
    },
  },
  {
    name: "list_infobytes_open_roles",
    description:
      "List the jobs and internships Infobytes Nepal is currently hiring for, including department, location, and compensation.",
    inputSchema: noArgs,
    execute: async () => getJson("/api/v1/jobs"),
  },
];

export default function WebMcpTools() {
  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext) return;

    if (typeof modelContext.provideContext === "function") {
      modelContext.provideContext({ tools });
      return;
    }

    // Older builds of the API only shipped one-at-a-time registration.
    if (typeof modelContext.registerTool === "function") {
      tools.forEach((tool) => modelContext.registerTool!(tool));
    }
  }, []);

  return null;
}
