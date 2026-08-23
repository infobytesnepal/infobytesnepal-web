import { listLandingPages } from "@/lib/agent-content";
import { listResponse } from "@/lib/agent-api";

// Landing page copy is now editable in the CMS, so this is no longer "changes
// only on deploy". It stays statically generated and cached, and a save in the
// CMS invalidates this path on demand; the day-long revalidate is the backstop
// if one is ever missed.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  return listResponse(await listLandingPages());
}
