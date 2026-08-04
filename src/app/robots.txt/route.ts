import { getCanonicalSiteUrl } from "@/lib/utils";

/**
 * Crawlers that answer questions instead of returning a list of links.
 *
 * These are named one by one rather than left to `User-agent: *` because
 * OpenAI and Google in particular treat their own token as the authoritative
 * signal, and Google-Extended is a separate opt in from Googlebot: allowing
 * Googlebot alone does not cover Gemini or AI Overviews. Being explicitly
 * allowed is what lets Infobytes Nepal get quoted inside ChatGPT, Claude,
 * Perplexity, and Google AI Overviews.
 */
const aiCrawlers = [
  // OpenAI: model training, live browsing inside a chat, and the search index.
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  // Anthropic.
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Google Gemini and AI Overviews.
  "Google-Extended",
  // Perplexity.
  "PerplexityBot",
  "Perplexity-User",
  // Remaining answer engines and AI search products.
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
];

export function GET() {
  const siteUrl = getCanonicalSiteUrl();

  const body = [
    "# Infobytes Nepal",
    "# Search crawlers and AI answer engines are both welcome here.",
    "",
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin-infobytesnepal",
    "",
    // One group per agent. A shared group is valid robots.txt, but several
    // crawlers only obey the first group that names them, so each gets its own.
    ...aiCrawlers.flatMap((agent) => [
      `User-agent: ${agent}`,
      "Allow: /",
      "Disallow: /admin-infobytesnepal",
      "",
    ]),
    `Sitemap: ${siteUrl}/sitemap.xml`,
    `# Plain text company summary for AI assistants: ${siteUrl}/llms.txt`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      // Cheap to regenerate, but no reason to hit the origin on every crawl.
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
