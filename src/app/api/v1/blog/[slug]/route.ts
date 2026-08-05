import { getPostDetail } from "@/lib/agent-content";
import { jsonResponse, notFound } from "@/lib/agent-api";

// Compiled from TypeScript modules that only change on deploy, so this is
// generated once and served from the cache rather than re-run per request.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET(_request: Request, ctx: RouteContext<"/api/v1/blog/[slug]">) {
  const { slug } = await ctx.params;
  const post = await getPostDetail(slug);
  if (!post) return notFound("blog post", `/api/v1/blog/${slug}`);
  return jsonResponse(post);
}
