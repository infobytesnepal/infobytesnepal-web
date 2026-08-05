import { getProductDetail } from "@/lib/agent-content";
import { jsonResponse, notFound } from "@/lib/agent-api";

// Static so `revalidatePublicSite()` can invalidate it on a product write. See
// the note in /api/v1/company for why a dynamic handler could not be.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET(_request: Request, ctx: RouteContext<"/api/v1/products/[slug]">) {
  const { slug } = await ctx.params;
  const product = await getProductDetail(slug);
  if (!product) return notFound("product", `/api/v1/products/${slug}`);
  return jsonResponse(product);
}
