import { getJobDetail } from "@/lib/agent-content";
import { jsonResponse, notFound } from "@/lib/agent-api";

// Compiled from TypeScript modules that only change on deploy, so this is
// generated once and served from the cache rather than re-run per request.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET(_request: Request, ctx: RouteContext<"/api/v1/jobs/[slug]">) {
  const { slug } = await ctx.params;
  const job = await getJobDetail(slug);
  if (!job) return notFound("job", `/api/v1/jobs/${slug}`);
  return jsonResponse(job);
}
