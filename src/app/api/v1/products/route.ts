import { listProducts } from "@/lib/agent-content";
import { listResponse } from "@/lib/agent-api";

// Static so `revalidatePublicSite()` can invalidate it on a product write. See
// the note in /api/v1/company for why a dynamic handler could not be.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  return listResponse(await listProducts());
}
