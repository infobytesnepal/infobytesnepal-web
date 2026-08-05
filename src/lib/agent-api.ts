import { getCanonicalSiteUrl } from "./utils";

/**
 * Shared plumbing for the machine-readable surfaces: the public content API
 * under /api/v1, the MCP server, and the .well-known discovery documents.
 *
 * Everything here is read-only and public, which is what makes the CORS and
 * caching decisions below simple. Nothing in this file may be reused for the
 * admin routes: those are authenticated and must not be cached or opened up to
 * cross-origin callers.
 */

export const API_VERSION = "1.0.0";

/** Base path of the current stable API. Bump the segment, never the shape. */
export const API_BASE = "/api/v1";

export function apiUrl(path = "") {
  return `${getCanonicalSiteUrl()}${API_BASE}${path}`;
}

export function siteUrl(path = "") {
  return `${getCanonicalSiteUrl()}${path}`;
}

/**
 * CORS is not set here. It is applied to every agent-facing path by the
 * `headers()` block in next.config.ts, for a reason worth recording: a route
 * handler that exports its own `OPTIONS` is treated as dynamic by Next, which
 * costs a function invocation per request and — the part that actually matters
 * — leaves nothing for `revalidatePath` to invalidate when the admin publishes.
 * Declaring the headers in config lets these handlers stay static.
 *
 * A wildcard origin is the point rather than an oversight: nothing behind this
 * API is absent from a public HTML page, and no cookie or Authorization header
 * is ever read, so a permissive origin grants a caller nothing they could not
 * get by scraping the site.
 */

/**
 * Content changes when someone publishes from the admin panel, and those writes
 * call `revalidatePath` on these routes. The short browser max-age keeps an
 * agent from hammering the origin inside one session; the long s-maxage lets
 * the CDN absorb the rest, and stale-while-revalidate means a revalidation
 * never makes a caller wait.
 */
const cacheHeaders = {
  "cache-control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
};

type JsonOptions = {
  status?: number;
  /** Overrides `application/json` for the profiled JSON media types. */
  contentType?: string;
  /** Extra headers merged last, so a caller can override the defaults. */
  headers?: Record<string, string>;
};

export function jsonResponse(body: unknown, options: JsonOptions = {}) {
  const { status = 200, contentType = "application/json; charset=utf-8", headers = {} } = options;
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      "content-type": contentType,
      ...cacheHeaders,
      ...headers,
    },
  });
}

/**
 * RFC 9457 problem details. Agents parse errors far more often than humans do,
 * and a typed problem document is the one error shape they already understand.
 */
export function problemResponse(status: number, title: string, detail: string, instance?: string) {
  return jsonResponse(
    { type: "about:blank", title, status, detail, ...(instance ? { instance } : {}) },
    {
      status,
      contentType: "application/problem+json; charset=utf-8",
      headers: { "cache-control": "public, max-age=60" },
    },
  );
}

export function notFound(what: string, instance?: string) {
  return problemResponse(404, "Not Found", `No ${what} matches that identifier.`, instance);
}

export function textResponse(body: string, contentType: string, headers: Record<string, string> = {}) {
  return new Response(body, {
    headers: {
      "content-type": contentType,
      ...cacheHeaders,
      ...headers,
    },
  });
}

/**
 * A list envelope rather than a bare array.
 *
 * A bare top-level array leaves no room to add paging or a total later without
 * breaking every existing caller, and some JSON parsers still refuse a
 * top-level array outright.
 */
export function listResponse<T>(items: T[], extra: Record<string, unknown> = {}) {
  return jsonResponse({ count: items.length, items, ...extra });
}

/** Clamps a `?limit=` query value into a range the origin can always serve. */
export function readLimit(url: URL, fallback: number, max = 100) {
  const raw = Number(url.searchParams.get("limit"));
  if (!Number.isFinite(raw) || raw <= 0) return fallback;
  return Math.min(Math.floor(raw), max);
}
