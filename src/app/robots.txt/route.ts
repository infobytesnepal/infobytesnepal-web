import { getSiteUrl } from "@/lib/utils";

export function GET() {
  const siteUrl = getSiteUrl();
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin-infobytesnepal",
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
