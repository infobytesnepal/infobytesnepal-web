"use client";

import { useEffect, useState } from "react";
import { formatFileSize } from "@/lib/image-prep";

/**
 * An image upload that shows what it is about to do.
 *
 * The old field was a bare `<input type="file">` under the current image. Choose
 * a replacement and the page kept showing the old picture until the save came
 * back — which is exactly the moment an author concludes the replace "didn't
 * work" and tries again. The database shows the result: the same cover uploaded
 * two, three, four times in a few minutes, each attempt left behind as an
 * orphaned 2 MB row. This previews the chosen file immediately, says how big it
 * is, and makes "keep the current one" and "remove it" explicit.
 */
type Props = {
  label: string;
  /** Name of the file input the server action reads, e.g. "logoFile". */
  fileName: string;
  /** Name of the hidden field carrying the current URL, e.g. "logoUrl". */
  urlName: string;
  currentUrl?: string | null;
  help?: string;
  required?: boolean;
  /** Offer a "remove" option. Off for images a page cannot render without. */
  allowRemove?: boolean;
  /** Preview box shape. */
  aspect?: "square" | "wide";
};

export default function ImageField({
  label,
  fileName,
  urlName,
  currentUrl,
  help,
  required,
  allowRemove = false,
  aspect = "wide",
}: Props) {
  const [picked, setPicked] = useState<{ url: string; name: string; size: number } | null>(null);
  const [removed, setRemoved] = useState(false);

  useEffect(() => () => {
    if (picked) URL.revokeObjectURL(picked.url);
  }, [picked]);

  const shown = picked?.url ?? (removed ? null : currentUrl || null);
  const box = aspect === "square" ? "h-24 w-24" : "aspect-[16/9] w-full max-w-md";

  return (
    <div className="grid gap-2 text-sm font-medium text-deep-navy">
      <span>{label}</span>
      <input type="hidden" name={urlName} value={removed ? "" : currentUrl || ""} />

      <div className={`${box} overflow-hidden rounded-2xl border border-primary-blue/12 bg-soft-blue/30`}>
        {shown ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={shown} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
        ) : (
          <span className="flex h-full items-center justify-center p-3 text-center text-xs font-normal text-dark-text/50">
            {removed ? "Will be removed on save" : "No image yet"}
          </span>
        )}
      </div>

      {picked ? (
        <p className="text-xs font-normal text-emerald-800">
          New image chosen: {picked.name} ({formatFileSize(picked.size)}). It replaces the current one when you save.
        </p>
      ) : currentUrl && !removed ? (
        <p className="text-xs font-normal text-dark-text/55">Current image shown. Choose a file to replace it.</p>
      ) : null}

      <input
        type="file"
        name={fileName}
        accept="image/*"
        required={required && !currentUrl}
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (picked) URL.revokeObjectURL(picked.url);
          setPicked(file ? { url: URL.createObjectURL(file), name: file.name, size: file.size } : null);
          if (file) setRemoved(false);
        }}
        className="rounded-2xl border border-primary-blue/15 px-4 py-3 font-normal text-dark-text file:mr-4 file:rounded-full file:border-0 file:bg-soft-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-blue focus:outline-primary-blue"
      />

      {allowRemove && currentUrl && !picked && (
        <label className="flex items-center gap-2 text-xs font-normal text-dark-text/70">
          <input type="checkbox" checked={removed} onChange={(event) => setRemoved(event.target.checked)} className="h-4 w-4 accent-primary-blue" />
          Remove this image
        </label>
      )}
      {help && <span className="text-xs font-normal leading-5 text-dark-text/58">{help}</span>}
    </div>
  );
}
