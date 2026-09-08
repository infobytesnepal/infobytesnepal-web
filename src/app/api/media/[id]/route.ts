import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { mediaAssets } from "@/lib/db/schema";

/**
 * Serves an uploaded image by its media id.
 *
 * There is no object storage on this project, so uploads are stored in the
 * database as base64 data URIs — the pattern the products, page sections, and
 * CV uploads already use. That works when the URI is written straight into an
 * `<img src>`, but it is unusable in a blog body: a 400KB photo becomes a
 * 550KB string sitting in the middle of the markdown the author is editing,
 * and it is re-sent inside the HTML of every page that shows the post.
 *
 * So the editor stores the upload once and writes `/api/media/<id>` into the
 * body instead. That keeps the markdown readable, lets the browser cache the
 * image across pages, and — because it is a same-origin path — puts blog images
 * back through the next/image optimizer, which the data URI form could never use.
 *
 * Nothing here is behind auth: these are images on published pages.
 */
export async function GET(request: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;

  /*
    The URL carries the file extension — /api/media/<uuid>.svg — because
    `next/image` only skips optimizing an SVG when it can see `.svg` on the end
    of the src. The id is the part before it; ids written before extensions
    existed still resolve, since a path with no extension simply has nothing to
    strip.
  */
  const assetId = id.replace(/\.[a-z0-9]+$/i, "");

  const [asset] = await db.select().from(mediaAssets).where(eq(mediaAssets.id, assetId)).limit(1);
  if (!asset) return new Response("Not found", { status: 404 });

  // `[\s\S]` rather than the /s flag, which this project's target predates.
  const match = asset.url.match(/^data:([^;,]+)(;base64)?,([\s\S]*)$/);
  if (!match) {
    /*
      Assets added before uploads existed hold a plain path such as
      /assets/home/hero.jpg, so the caller is sent to the real file rather than
      reading it back through the database.

      The guard matters: a row whose url points back into /api/media would make
      this handler redirect to itself forever. Nothing should write that — the
      Media tab stores data URIs in place for exactly this reason — but a 404 is
      the right answer to a corrupt row, not an infinite loop.
    */
    if (asset.url.startsWith("/api/media/")) return new Response("Not found", { status: 404 });
    return Response.redirect(new URL(asset.url, request.url), 308);
  }

  const [, contentType, isBase64, payload] = match;
  const body = isBase64 ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload), "utf8");

  return new Response(new Uint8Array(body), {
    headers: {
      "Content-Type": contentType || asset.type || "application/octet-stream",
      "Content-Length": String(body.byteLength),
      /*
        A day in the browser, a week of stale-while-revalidate at the edge.
        Long, because the blog editor always uploads to a fresh id and never
        overwrites one — but not `immutable`, because the Media tab can replace
        the bytes behind an existing id, and a year-long immutable cache would
        make that replacement invisible to anyone who had seen the old one.
      */
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
