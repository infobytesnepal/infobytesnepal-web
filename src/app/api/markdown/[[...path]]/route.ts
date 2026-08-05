import { estimateTokens, renderMarkdown } from "@/lib/agent-markdown";
import { siteUrl } from "@/lib/agent-api";

/**
 * The markdown half of content negotiation.
 *
 * `proxy.ts` rewrites a request for a public page carrying `Accept:
 * text/markdown` here, so the URL an agent asked for and the URL it gets back
 * are the same. Nothing links to /api/markdown directly, but it answers on its
 * own too — useful for testing without having to forge an Accept header.
 */
// Static, for the same reason as the content endpoints: the markdown views of
// /, /products, and /about read CMS content, and `revalidatePublicSite()` has to
// be able to clear them when that content is edited.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET(_request: Request, ctx: RouteContext<"/api/markdown/[[...path]]">) {
  const { path = [] } = await ctx.params;
  const pathname = `/${(path as string[]).join("/")}`;

  const rendered = await renderMarkdown(pathname === "/" ? "/" : pathname);

  if (!rendered) {
    return new Response(
      [
        "# Not found",
        "",
        `No page exists at \`${pathname}\`.`,
        "",
        `Start from <${siteUrl("/llms.txt")}> or search <${siteUrl("/api/v1/search")}?q=...>.`,
      ].join("\n"),
      {
        status: 404,
        headers: {
          "content-type": "text/markdown; charset=utf-8",
          "cache-control": "public, max-age=300",
          vary: "Accept",
        },
      },
    );
  }

  return new Response(rendered.body, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      // Tells caches that this URL has an HTML representation too, so an agent's
      // markdown response is never served to a browser or the reverse.
      vary: "Accept",
      /**
       * `private` on purpose, and the one header here worth explaining.
       *
       * This body is served at the HTML page's own URL through a rewrite, so a
       * shared cache that stored it could hand markdown to the next browser
       * that asked for the page. `Vary: Accept` is the usual guard, but Next
       * overwrites `Vary` on the HTML side for its RSC headers, so it cannot be
       * relied on. Keeping the markdown out of shared caches entirely closes
       * the hole without touching how the HTML is cached. The response is still
       * held in Next's own route cache, so the origin does not re-render it.
       */
      "cache-control": "private, max-age=300",
      "x-markdown-tokens": String(estimateTokens(rendered.body)),
      link: `<${siteUrl(pathname)}>; rel="canonical"; type="text/html"`,
    },
  });
}
