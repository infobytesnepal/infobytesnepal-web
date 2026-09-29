import CmsForm from "@/components/admin/cms-form";
import CopyButton from "@/components/admin/copy-button";
import ImageField from "@/components/admin/image-field";
import { AdminCard, AdminInput } from "@/components/admin/ui";
import CmsImage from "@/components/public/cms-image";
import { deleteMediaAsset, deleteUnusedMedia, upsertMediaAsset } from "@/lib/actions/admin";
import { requireAdmin } from "@/lib/auth";
import { formatFileSize } from "@/lib/image-prep";
import { getMediaLibrary, getMediaUsage } from "@/lib/media";
import { mediaPath } from "@/lib/utils";

/**
 * The media library.
 *
 * This page used to `select *` the table and render every image as an inline
 * data URI, which made it a 123 MB HTML document — far past the 4.5 MB a Vercel
 * function can return, so in production it could not open. It now reads
 * metadata only and shows thumbnails through `/api/media`, which next/image
 * shrinks to a few kilobytes apiece.
 *
 * It also answers the two questions the old page could not: where is each image
 * used, and which ones are not used at all. Most unused ones are the leftovers
 * of saves that stored an image and then failed.
 */
export default async function MediaAdminPage() {
  await requireAdmin();
  const [assets, usage] = await Promise.all([getMediaLibrary(), getMediaUsage()]);
  const unused = assets.filter((asset) => !usage.has(asset.id.toLowerCase()));
  const totalBytes = assets.reduce((sum, asset) => sum + Number(asset.bytes || 0), 0);
  const unusedBytes = unused.reduce((sum, asset) => sum + Number(asset.bytes || 0), 0);
  /*
    A replaced image gets a new id (see `replaceAsset`), so its card is a new
    component and any confirmation shown inside the old one is gone. The
    server-rendered "Updated just now" badge (`recentlyChanged`) is the
    confirmation instead: it survives the refresh and sits on the card the
    author was looking at.
  */

  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Media / Assets</h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-dark-text/65">
        Every image uploaded through the CMS. {assets.length} images, {formatFileSize(totalBytes)} stored;{" "}
        {assets.length - unused.length} in use on the website, {unused.length} unused.
      </p>

      {/*
        Always rendered, so the confirmation from a cleanup survives the refresh
        that follows it — the count it acted on is zero by then.
      */}
      <AdminCard className={`mt-6 ${unused.length ? "border-amber-300 bg-amber-50" : ""}`}>
        <h2 className={`text-lg font-semibold ${unused.length ? "text-amber-900" : "text-deep-navy"}`}>
          {unused.length
            ? `${unused.length} unused image${unused.length === 1 ? "" : "s"} (${formatFileSize(unusedBytes)})`
            : "No unused images"}
        </h2>
        <p className={`mt-1 max-w-3xl text-sm leading-6 ${unused.length ? "text-amber-900/80" : "text-dark-text/60"}`}>
          {unused.length
            ? "Nothing on the website points at these. Most are left over from saves that uploaded an image and then did not go through. Deleting them cannot break a page — images in use are never deleted."
            : "Every image in the library is used somewhere on the website."}
        </p>
        <div className="mt-4">
          <CmsForm
            action={deleteUnusedMedia}
            submitLabel={unused.length ? `Delete ${unused.length} unused image${unused.length === 1 ? "" : "s"}` : "Nothing to clean up"}
            pendingLabel="Deleting…"
            disabled={!unused.length}
            confirmMessage={`Permanently delete ${unused.length} unused image${unused.length === 1 ? "" : "s"}? Images in use are not affected.`}
            buttonClassName="rounded-full border border-amber-400 bg-white px-5 py-2.5 text-sm font-semibold text-amber-900 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {null}
          </CmsForm>
        </div>
      </AdminCard>

      <AdminCard className="mt-6">
        <h2 className="text-xl font-semibold text-deep-navy">Add an image</h2>
        <p className="mt-1 text-sm text-dark-text/60">
          Upload once, then copy its address into any image field or a blog post.
        </p>
        <CmsForm action={upsertMediaAsset} className="mt-5 grid gap-4" submitLabel="Add to library" resetOnSuccess>
          <input type="hidden" name="id" value="" />
          <div className="grid gap-4 md:grid-cols-2">
            <AdminInput label="Name" name="name" required />
            <AdminInput label="Alt text" name="altText" />
          </div>
          <ImageField label="Image" fileName="file" urlName="currentUrl" required help="Large photos are compressed in your browser before upload." />
        </CmsForm>
      </AdminCard>

      <div className="mt-6 grid gap-3">
        {assets.map((asset) => {
          const path = mediaPath(asset.id, asset.type);
          const usedBy = usage.get(asset.id.toLowerCase()) ?? [];
          return (
            <AdminCard key={asset.id} className={usedBy.length ? "" : "border-amber-200"}>
              <div className="flex flex-wrap items-start gap-4">
                <CmsImage
                  src={path}
                  alt={asset.altText || asset.name}
                  width={72}
                  height={72}
                  className="h-16 w-16 shrink-0 rounded-2xl border border-primary-blue/10 object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="break-words font-semibold text-deep-navy">
                    {asset.name}
                    {Boolean(asset.recentlyChanged) && (
                      <span role="status" className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 align-middle text-xs font-semibold text-emerald-800">
                        Updated just now
                      </span>
                    )}
                  </h2>
                  <p className="text-sm text-dark-text/60">
                    {asset.type} · {formatFileSize(Number(asset.bytes || 0))} · {String(asset.createdAt).slice(0, 10)}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <code className="rounded bg-soft-blue px-2 py-1 font-mono text-xs text-deep-navy">{path}</code>
                    <CopyButton value={path} label="Copy address" />
                  </div>
                  {usedBy.length ? (
                    <ul className="mt-2 grid gap-0.5 text-xs text-emerald-800">
                      {usedBy.map((where) => (
                        <li key={where}>Used by {where}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-xs font-semibold text-amber-800">Not used anywhere</p>
                  )}
                </div>
              </div>

              <details className="mt-3">
                <summary className="cursor-pointer text-sm font-semibold text-primary-blue">Rename, replace, or delete</summary>
                <CmsForm action={upsertMediaAsset} className="mt-4 grid gap-4" submitLabel="Save">
                  <input type="hidden" name="id" value={asset.id} />
                  <div className="grid gap-4 md:grid-cols-2">
                    <AdminInput label="Name" name="name" defaultValue={asset.name} required />
                    <AdminInput label="Alt text" name="altText" defaultValue={asset.altText || ""} />
                  </div>
                  <ImageField
                    label="Replace image"
                    fileName="file"
                    urlName="currentUrl"
                    currentUrl={path}
                    help={
                      usedBy.length
                        ? "Every page using this image switches to the new one when you save."
                        : "Leave empty to keep the current image."
                    }
                  />
                </CmsForm>
                <div className="mt-4 border-t border-primary-blue/10 pt-4">
                  {usedBy.length ? (
                    <p className="text-xs text-dark-text/60">In use, so it cannot be deleted. Replace it instead, or remove it where it is used first.</p>
                  ) : (
                    <CmsForm
                      action={deleteMediaAsset}
                      submitLabel="Delete image"
                      pendingLabel="Deleting…"
                      confirmMessage={`Delete "${asset.name}"?`}
                      buttonClassName="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
                    >
                      <input type="hidden" name="id" value={asset.id} />
                    </CmsForm>
                  )}
                </div>
              </details>
            </AdminCard>
          );
        })}
      </div>
    </div>
  );
}
