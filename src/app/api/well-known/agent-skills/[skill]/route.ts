import { notFound, textResponse } from "@/lib/agent-api";
import { findSkill, skillDigest } from "@/lib/agent-skills";

/**
 * One SKILL.md, served at /.well-known/agent-skills/<name>/SKILL.md through a
 * rewrite in next.config.ts.
 *
 * The digest goes out as a strong ETag as well as in the index, so a client that
 * verified the index can revalidate the document itself without a second hash.
 */
// A discovery document that only changes on deploy: generated once and served
// from the cache, so agent traffic costs no function invocations.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET(_request: Request, ctx: RouteContext<"/api/well-known/agent-skills/[skill]">) {
  const { skill: name } = await ctx.params;
  const skill = findSkill(name);
  if (!skill) return notFound("agent skill", `/.well-known/agent-skills/${name}/SKILL.md`);

  return textResponse(skill.body, "text/markdown; charset=utf-8", {
    etag: `"${skillDigest(skill)}"`,
  });
}
