import { searchSite } from "@/lib/agent-content";
import { listResponse, problemResponse, readLimit } from "@/lib/agent-api";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = (url.searchParams.get("q") || "").trim();
  if (!query) {
    return problemResponse(400, "Missing query", "Pass a search term as ?q=", "/api/v1/search");
  }
  const results = await searchSite(query, readLimit(url, 10, 50));
  return listResponse(results, { query });
}
