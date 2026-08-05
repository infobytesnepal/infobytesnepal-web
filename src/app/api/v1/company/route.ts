import { companyProfile, listProducts, listServices } from "@/lib/agent-content";
import { jsonResponse } from "@/lib/agent-api";

/**
 * Route handlers are dynamic by default, and a dynamic handler has no entry for
 * `revalidatePath` to invalidate — an admin publishing a product would leave
 * this endpoint stale until the CDN's own timer ran out. Made static, the
 * product writes in `lib/actions/admin.ts` clear it the moment they happen, and
 * the day here is only a backstop against an invalidation that never fired.
 */
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const products = await listProducts();
  return jsonResponse({
    ...companyProfile(),
    services: listServices().map((service) => ({ slug: service.slug, name: service.name })),
    products: products.map((product) => ({ slug: product.slug, name: product.name })),
  });
}
