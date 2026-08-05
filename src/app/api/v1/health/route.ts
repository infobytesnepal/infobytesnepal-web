import { API_VERSION, jsonResponse } from "@/lib/agent-api";
import { getProducts } from "@/lib/data";

/**
 * The `status` link relation in /.well-known/api-catalog points here, so this
 * has to report on the dependency that can actually fail: the product list is
 * the only part of the API backed by the database. `getProducts` falls back to
 * the seeded list when the query throws, so a healthy-looking response with
 * `database: "fallback"` is a real signal rather than a hidden failure.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const startedAt = Date.now();
  let database: "ok" | "fallback" = "ok";
  try {
    const products = await getProducts();
    if (!products.length) database = "fallback";
  } catch {
    database = "fallback";
  }

  return jsonResponse(
    {
      status: "ok",
      apiVersion: API_VERSION,
      database,
      checkedAt: new Date().toISOString(),
      responseTimeMs: Date.now() - startedAt,
    },
    { headers: { "cache-control": "no-store" } },
  );
}
