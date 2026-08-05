import type { NextConfig } from "next";

/**
 * RFC 8288 Link relations advertised to agents.
 *
 * These are sent as one comma-separated `Link` header rather than several, which
 * the RFC allows and every parser handles. The relation names are the registered
 * IANA ones where a registered one exists; the MCP and Agent Skills relations
 * have no registration, so they use the extension form the RFC requires for
 * anything unregistered — an absolute URI rather than a bare token.
 *
 * Paths are relative so the header stays correct on both the .com and the
 * .com.np domain.
 */
const agentLinks = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</api/openapi.json>; rel="service-desc"; type="application/openapi+json"',
  '</docs/api>; rel="service-doc"; type="text/html"',
  '</api/v1/health>; rel="status"; type="application/json"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</auth.md>; rel="describedby"; type="text/markdown"',
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</.well-known/mcp/server-card.json>; rel="https://modelcontextprotocol.io/rel/server-card"; type="application/json"',
  '</.well-known/agent-skills/index.json>; rel="https://agentskills.io/rel/skills-index"; type="application/json"',
].join(", ");

/** The shorter set carried by every other page, so an agent that lands deep in
 * the site still finds the catalog without going back to the homepage. */
const siteWideLinks = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
].join(", ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF first, WebP as the fallback. The source PNGs on this site are large
    // (several are over 1 MB), so the format conversion is where most of the
    // mobile payload saving comes from.
    formats: ["image/avif", "image/webp"],
    // Optimized images are content-addressed by URL and the source files only
    // change on deploy, so a long TTL avoids re-encoding the same assets.
    minimumCacheTTL: 2678400,
    qualities: [70, 75, 85],
  },
  // Only the icons actually used are pulled into the client bundle instead of
  // the whole lucide-react barrel file.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    serverActions: {
      // The job application form accepts a CV up to 5MB. Server Actions cap the
      // request body at 1MB by default, which would reject a normal PDF résumé
      // before the action ever ran. The headroom covers the base64 encoding
      // overhead plus the other form fields.
      bodySizeLimit: "7mb",
    },
  },
  /**
   * The `.well-known` documents are generated, not static files, so they are
   * route handlers reached through a rewrite. A directory literally named
   * `.well-known` under `app/` would depend on how the router treats a
   * leading-dot segment; a rewrite depends on nothing and keeps the handlers
   * where the rest of the API lives.
   */
  async rewrites() {
    return [
      { source: "/.well-known/api-catalog", destination: "/api/well-known/api-catalog" },
      { source: "/.well-known/mcp/server-card.json", destination: "/api/well-known/mcp-server-card" },
      { source: "/.well-known/agent-skills/index.json", destination: "/api/well-known/agent-skills-index" },
      { source: "/.well-known/agent-skills/:skill/SKILL.md", destination: "/api/well-known/agent-skills/:skill" },
    ];
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [{ key: "Link", value: agentLinks }],
      },
      /**
       * CORS for everything an agent is meant to call.
       *
       * Declared here rather than inside the route handlers because a handler
       * that exports its own `OPTIONS` is treated as dynamic by Next: it would
       * cost a function invocation per request and, worse, leave nothing for
       * `revalidatePath` to invalidate when the admin publishes a product. With
       * the headers in config the handlers stay static, and Next's built-in
       * `OPTIONS` answers preflights with these same headers attached.
       *
       * The wildcard origin is safe here specifically because these paths are
       * read-only, carry no credentials, and expose nothing that is not already
       * on a public page. Do not extend this matcher to /admin-infobytesnepal.
       */
      {
        source: "/:path(api/.*|\\.well-known/.*|auth\\.md|llms\\.txt)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, HEAD, POST, OPTIONS" },
          {
            key: "Access-Control-Allow-Headers",
            value: "content-type, accept, mcp-protocol-version, mcp-session-id",
          },
          { key: "Access-Control-Max-Age", value: "86400" },
        ],
      },
      {
        source: "/admin-infobytesnepal/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
      {
        // `:path+` rather than `:path*` so this does not also match "/" and
        // send the homepage a second, redundant Link header alongside the full
        // one above.
        source: "/:path+",
        headers: [{ key: "Link", value: siteWideLinks }],
      },
    ];
  },
};

export default nextConfig;
