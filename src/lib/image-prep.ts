/**
 * Shrinks an image in the browser before it is uploaded.
 *
 * Every CMS upload ends up base64-encoded in a Turso row, and every upload
 * travels from an office connection in Nepal to a Vercel function whose request
 * body is capped at 4.5 MB by the platform, whatever `bodySizeLimit` says in
 * next.config.ts. The covers already in the database are 1.7–2.7 MB PNGs —
 * screenshot-sized exports of what is, on the page, a 1200px-wide photograph —
 * which made each save slow, made anything bigger fail outright with a 413 the
 * form could not report, and put 61 MB of base64 into a table nobody browses.
 *
 * So large raster images are redrawn at a sensible size and re-encoded as WebP
 * before they leave the browser. The next/image optimizer still produces the
 * responsive sizes on the way out; this only stops the original being ten times
 * larger than anything that will ever be shown.
 *
 * Left alone: SVG (vector, already small, and redrawing would rasterise it),
 * GIF (redrawing drops the animation), and anything already under the
 * threshold, so a small logo is uploaded byte-for-byte as the author chose it.
 */

export type PreparedImage = {
  file: File;
  /** True when the browser re-encoded the image. */
  changed: boolean;
  originalBytes: number;
};

type Options = {
  /** Longest side after resizing. */
  maxDimension?: number;
  /** Files at or under this size, and within `maxDimension`, are left untouched. */
  keepUnderBytes?: number;
  quality?: number;
};

const untouchedTypes = new Set(["image/svg+xml", "image/gif"]);

async function loadImage(file: File): Promise<ImageBitmap | HTMLImageElement> {
  if (typeof createImageBitmap === "function") {
    try {
      return await createImageBitmap(file);
    } catch {
      // Fall through to <img>, which decodes a few formats createImageBitmap
      // rejects in some browsers.
    }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.decoding = "async";
    img.src = url;
    await img.decode();
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function prepareImage(file: File, options: Options = {}): Promise<PreparedImage> {
  const { maxDimension = 2000, keepUnderBytes = 600_000, quality = 0.85 } = options;
  const unchanged = { file, changed: false, originalBytes: file.size };

  if (!file.type.startsWith("image/") || untouchedTypes.has(file.type)) return unchanged;

  let source: ImageBitmap | HTMLImageElement;
  try {
    source = await loadImage(file);
  } catch {
    // Not decodable here (HEIC on most desktop browsers, for instance). Send the
    // original and let the server's type and size checks answer for it.
    return unchanged;
  }

  const width = "naturalWidth" in source ? source.naturalWidth : source.width;
  const height = "naturalHeight" in source ? source.naturalHeight : source.height;
  const scale = Math.min(1, maxDimension / Math.max(width, height));
  if (scale === 1 && file.size <= keepUnderBytes) return unchanged;

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const context = canvas.getContext("2d");
  if (!context) return unchanged;
  context.drawImage(source, 0, 0, canvas.width, canvas.height);
  if ("close" in source) source.close();

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/webp", quality));
  // Safari before 16 cannot encode WebP and hands back PNG, which is often
  // larger than the original. Only keep the result if it actually helped.
  if (!blob || blob.type !== "image/webp" || blob.size >= file.size) return unchanged;

  const name = file.name.replace(/\.[^.]+$/, "") + ".webp";
  return { file: new File([blob], name, { type: "image/webp" }), changed: true, originalBytes: file.size };
}

export function formatFileSize(bytes: number) {
  if (bytes < 1_000) return `${bytes} B`;
  if (bytes < 1_000_000) return `${Math.round(bytes / 1_000)} KB`;
  return `${(bytes / 1_000_000).toFixed(1)} MB`;
}
