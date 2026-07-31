import { getCanonicalSiteUrl } from "@/lib/utils";

export function GET() {
  const siteUrl = getCanonicalSiteUrl();
  const body = [
    "User-agent: *",
    "Allow: /",
    "Allow: /favicon.ico",
    "Allow: /favicon.png",
    "Allow: /icon.png",
    "Allow: /apple-icon.png",
    "Disallow: /admin-infobytesnepal",
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
