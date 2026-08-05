import { jsonResponse, siteUrl } from "@/lib/agent-api";
import { agentSkills, skillDigest, skillUrl } from "@/lib/agent-skills";

/**
 * Agent Skills discovery index (RFC v0.2.0), served at
 * /.well-known/agent-skills/index.json through a rewrite in next.config.ts.
 */
// A discovery document that only changes on deploy: generated once and served
// from the cache, so agent traffic costs no function invocations.
export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  return jsonResponse({
    $schema: "https://agentskills.io/schemas/v0.2.0/index.json",
    version: "0.2.0",
    skills: agentSkills.map((skill) => ({
      name: skill.name,
      type: "skill",
      description: skill.description,
      url: skillUrl(skill),
      sha256: skillDigest(skill),
    })),
    publisher: { name: "Infobytes Nepal", url: siteUrl() },
  });
}
