import { listFaqs } from "@/lib/agent-content";
import { listResponse, readLimit } from "@/lib/agent-api";
import { faqGroups } from "@/lib/faqs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const items = listFaqs({
    topic: url.searchParams.get("topic") || undefined,
    limit: readLimit(url, 200, 500),
  });
  return listResponse(items, {
    topics: faqGroups.map((group) => ({ id: group.id, title: group.title, count: group.faqs.length })),
  });
}
