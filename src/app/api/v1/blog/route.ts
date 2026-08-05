import { listPosts } from "@/lib/agent-content";
import { listResponse, readLimit } from "@/lib/agent-api";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const posts = await listPosts({
    limit: readLimit(url, 50),
    category: url.searchParams.get("category") || undefined,
  });
  return listResponse(posts);
}
