import { listJobs } from "@/lib/agent-content";
import { listResponse } from "@/lib/agent-api";

export async function GET(request: Request) {
  const url = new URL(request.url);
  // Closed roles stay live for a while so bookmarked URLs keep returning 200,
  // but an agent asking "are they hiring" should only see what is open.
  const openOnly = url.searchParams.get("open") !== "false";
  return listResponse(await listJobs({ openOnly }));
}
