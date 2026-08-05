import { findTool, toolDescriptors } from "@/lib/mcp-tools";
import { API_VERSION } from "@/lib/agent-api";
import { company } from "@/lib/company";

/**
 * Model Context Protocol server, Streamable HTTP transport.
 *
 * Implemented directly against the JSON-RPC wire format rather than through the
 * MCP SDK: this server is stateless and read-only, so the only methods that
 * mean anything are `initialize`, `tools/list`, `tools/call`, and `ping`. The
 * SDK's session store, SSE stream, and subscription machinery would all be dead
 * weight on a serverless function that never has anything to push.
 *
 * Being stateless is also why no `Mcp-Session-Id` is issued. The spec makes the
 * header optional exactly for servers like this one, and every request carries
 * everything needed to answer it.
 */

const SUPPORTED_PROTOCOL_VERSIONS = ["2025-06-18", "2025-03-26", "2024-11-05"];
const DEFAULT_PROTOCOL_VERSION = SUPPORTED_PROTOCOL_VERSIONS[0];

export const dynamic = "force-dynamic";

// CORS lives in next.config.ts alongside every other agent-facing path.
const baseHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

type JsonRpcId = string | number | null;

function result(id: JsonRpcId, payload: unknown) {
  return Response.json({ jsonrpc: "2.0", id, result: payload }, { headers: baseHeaders });
}

/**
 * JSON-RPC errors are transport-level: the request never ran. A tool that runs
 * and fails reports that through `isError` on a successful result instead, which
 * is what lets the model see the failure and react to it.
 */
function rpcError(id: JsonRpcId, code: number, message: string, data?: unknown) {
  return Response.json(
    { jsonrpc: "2.0", id, error: { code, message, ...(data === undefined ? {} : { data }) } },
    { headers: baseHeaders },
  );
}

function negotiateVersion(requested: unknown) {
  return typeof requested === "string" && SUPPORTED_PROTOCOL_VERSIONS.includes(requested)
    ? requested
    : DEFAULT_PROTOCOL_VERSION;
}

export async function POST(request: Request) {
  let message: { jsonrpc?: string; id?: JsonRpcId; method?: string; params?: Record<string, unknown> };
  try {
    message = await request.json();
  } catch {
    return rpcError(null, -32700, "Parse error: body is not valid JSON.");
  }

  // Batches were removed in the 2025-06-18 revision and this server never
  // needed them, so say so plainly instead of half-supporting them.
  if (Array.isArray(message)) {
    return rpcError(null, -32600, "Batched requests are not supported. Send one JSON-RPC message per request.");
  }

  const { id = null, method, params = {} } = message ?? {};
  if (!method) return rpcError(id, -32600, "Invalid request: missing method.");

  // Notifications carry no id and expect no body.
  if (method.startsWith("notifications/")) {
    return new Response(null, { status: 202, headers: baseHeaders });
  }

  switch (method) {
    case "initialize":
      return result(id, {
        protocolVersion: negotiateVersion(params.protocolVersion),
        capabilities: { tools: { listChanged: false } },
        serverInfo: {
          name: "infobytes-nepal",
          title: `${company.name} Content`,
          version: API_VERSION,
        },
        instructions: [
          `Read-only access to everything ${company.name} publishes.`,
          "Start with search_site when the right tool is not obvious.",
          "Every result includes the public URL it came from — cite it.",
        ].join(" "),
      });

    case "ping":
      return result(id, {});

    case "tools/list":
      return result(id, { tools: toolDescriptors() });

    case "tools/call": {
      const name = typeof params.name === "string" ? params.name : "";
      const tool = findTool(name);
      if (!tool) return rpcError(id, -32602, `Unknown tool: ${name || "(none given)"}`);

      const args = (params.arguments ?? {}) as Record<string, unknown>;
      try {
        const output = await tool.execute(args);
        if (output === null || output === undefined) {
          return result(id, {
            content: [{ type: "text", text: `No record found for the given arguments.` }],
            isError: true,
          });
        }
        return result(id, {
          content: [{ type: "text", text: JSON.stringify(output, null, 2) }],
          structuredContent: Array.isArray(output) ? { items: output } : (output as object),
        });
      } catch (error) {
        const detail = error instanceof Error ? error.message : "Unknown error";
        return result(id, {
          content: [{ type: "text", text: `Tool ${name} failed: ${detail}` }],
          isError: true,
        });
      }
    }

    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

/**
 * A GET on the MCP endpoint is the client asking to open a server-to-client SSE
 * stream. This server has nothing to push, and the spec's answer for that is
 * 405 rather than an empty stream the client would sit waiting on.
 */
export function GET() {
  return new Response(
    JSON.stringify({
      error: "This MCP server is stateless and does not offer a server-initiated SSE stream.",
      usage: "POST JSON-RPC 2.0 messages to this URL.",
      protocolVersions: SUPPORTED_PROTOCOL_VERSIONS,
      tools: toolDescriptors().map((tool) => tool.name),
    }),
    { status: 405, headers: { ...baseHeaders, allow: "POST, OPTIONS" } },
  );
}

/**
 * The one endpoint that needs an explicit preflight handler.
 *
 * MCP clients POST `application/json`, which is not a CORS-safelisted content
 * type, so a browser sends an `OPTIONS` first and refuses to proceed on
 * anything but a 2xx. The read endpoints under /api/v1 are plain GETs with
 * safelisted headers and are never preflighted, which is why they can stay
 * static — see the note in `lib/agent-api.ts`. This route is already dynamic,
 * so the handler costs nothing here.
 *
 * The CORS headers themselves still come from next.config.ts.
 */
export function OPTIONS() {
  return new Response(null, { status: 204, headers: { allow: "POST, OPTIONS" } });
}
