import { listServices } from "@/lib/agent-content";
import { listResponse } from "@/lib/agent-api";

// Compiled from TypeScript modules that only change on deploy, so this is
// generated once and served from the cache rather than re-run per request.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  return listResponse(listServices());
}
