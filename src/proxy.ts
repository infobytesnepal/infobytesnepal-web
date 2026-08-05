import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Content negotiation for agents.
 *
 * A request for a public page that asks for `Accept: text/markdown` is rewritten
 * to the markdown renderer, so `curl -H 'Accept: text/markdown' <page>` returns
 * the page as markdown at the page's own URL. Browsers ask for `text/html` and
 * are untouched.
 *
 * This file deliberately imports nothing but `next/server`. Proxy code is
 * bundled separately and can be deployed to the CDN edge, so pulling in the
 * content modules — `seo-landing-pages.ts` alone is several thousand lines —
 * would drag the whole site's copy into a bundle that runs on every request.
 * All it does here is match a path shape; deciding whether a renderer actually
 * exists is the markdown route's job.
 */

/** Prefixes that are never HTML pages, so never markdown either. */
const SKIP_PREFIXES = [
  "/api",
  "/_next",
  "/.well-known",
  "/admin-infobytesnepal",
  "/assets",
  "/auth.md",
  "/llms.txt",
  "/robots.txt",
  "/sitemap.xml",
];

/**
 * Only an explicit `text/markdown` counts.
 *
 * Browsers send `text/html,application/xhtml+xml,application/xml;q=0.9` plus a
 * catch-all wildcard on navigation. That wildcard technically matches markdown,
 * so a naive check would serve every visitor a text file. Naming the type means
 * only a caller that asked for it gets it — and a caller that lists both is
 * taken at its word only when markdown is not ranked below HTML.
 */
function prefersMarkdown(accept: string | null) {
  if (!accept) return false;

  const entries = accept.split(",").map((part) => {
    const [type, ...params] = part.trim().split(";");
    const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
    return { type: type.trim().toLowerCase(), q: q ? Number(q.slice(2)) : 1 };
  });

  const markdown = entries.find((entry) => entry.type === "text/markdown");
  if (!markdown || !(markdown.q > 0)) return false;

  const html = entries.find((entry) => entry.type === "text/html");
  return !html || markdown.q >= html.q;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const skip =
    SKIP_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)) ||
    // Anything with a file extension is an asset, not a page.
    /\.[a-zA-Z0-9]+$/.test(pathname);

  if (skip) return NextResponse.next();

  if (prefersMarkdown(request.headers.get("accept"))) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/api/markdown" : `/api/markdown${pathname}`;
    return NextResponse.rewrite(url);
  }

  /**
   * The HTML response deliberately does not get `Vary: Accept`.
   *
   * It cannot: Next sets its own `Vary` on every app-router response for the RSC
   * headers, and anything written here is replaced by it. Overwriting that list
   * from config would break client-side navigation caching, which is a far worse
   * trade than the one being avoided.
   *
   * What `Vary` would have prevented — a shared cache storing the markdown
   * representation under the HTML URL — is instead prevented at the source: the
   * markdown route marks its responses `private`, so no shared cache stores them
   * in the first place. See `app/api/markdown/[[...path]]/route.ts`.
   */
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|assets|.*\\.[a-zA-Z0-9]+$).*)"],
};
