import { eq } from "drizzle-orm";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db/client";
import { jobApplications } from "@/lib/db/schema";

/**
 * Downloads one applicant's CV.
 *
 * The Applications list no longer carries CV bytes (see
 * `searchJobApplications`), so each file is fetched here when someone clicks
 * for it. A CV is personal data, so this checks for an admin session itself —
 * route handlers are not wrapped by the admin layout — and is never cached.
 */
export async function GET(_request: Request, ctx: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session || session.role !== "admin") return new Response("Not found", { status: 404 });

  const { id } = await ctx.params;
  const [row] = await db
    .select({ cvData: jobApplications.cvData, cvName: jobApplications.cvName })
    .from(jobApplications)
    .where(eq(jobApplications.id, id))
    .limit(1);
  const match = row?.cvData?.match(/^data:([^;,]+)?(;base64)?,([\s\S]*)$/);
  if (!match) return new Response("Not found", { status: 404 });

  const [, contentType, isBase64, payload] = match;
  const body = isBase64 ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload), "utf8");
  const filename = (row.cvName || "cv").replace(/["\r\n]/g, "");

  return new Response(new Uint8Array(body), {
    headers: {
      "Content-Type": contentType || "application/octet-stream",
      "Content-Length": String(body.byteLength),
      "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
