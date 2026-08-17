import ConfirmButton from "@/components/admin/confirm-button";
import { AdminCard, AdminFileInput, AdminInput, SaveButton } from "@/components/admin/ui";
import CmsImage from "@/components/public/cms-image";
import { deleteMediaAsset, upsertMediaAsset } from "@/lib/actions/admin";
import { getMediaAssets } from "@/lib/data";
import { requireAdmin } from "@/lib/auth";

export default async function MediaAdminPage() {
  await requireAdmin();
  const assets = await getMediaAssets();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Media / Assets</h1>
      <AdminCard className="mt-6">
        <h2 className="text-xl font-semibold text-deep-navy">Add asset</h2>
        <AssetForm />
      </AdminCard>
      <div className="mt-6 grid gap-4">
        {assets.map((asset) => (
          <AdminCard key={asset.id}>
            <div className="mb-4 flex items-center gap-4">
              {asset.type.startsWith("image/") && (
                <CmsImage src={asset.url} alt={asset.altText || asset.name} width={72} height={72} className="h-16 w-16 rounded-2xl border border-primary-blue/10 object-cover" />
              )}
              <div>
                <h2 className="font-semibold text-deep-navy">{asset.name}</h2>
                <p className="text-sm text-dark-text/60">{asset.type}</p>
              </div>
            </div>
            <AssetForm asset={asset} />
            <form action={deleteMediaAsset} className="mt-3">
              <input type="hidden" name="id" value={asset.id} />
              <ConfirmButton message="Delete this asset?" className="rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy">
                Delete asset
              </ConfirmButton>
            </form>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}

function AssetForm({ asset }: { asset?: Awaited<ReturnType<typeof getMediaAssets>>[number] }) {
  return (
    <form action={upsertMediaAsset} className="mt-5 grid gap-4 md:grid-cols-[1fr_1.2fr_1fr_auto] md:items-end">
      <input type="hidden" name="id" value={asset?.id || ""} />
      <AdminInput label="Asset name" name="name" defaultValue={asset?.name || ""} required />
      <AdminFileInput label={asset ? "Replace image" : "Upload image"} name="file" accept="image/*" help="Stored in Turso. Max 1.5MB." required={!asset} />
      <AdminInput label="Alt text" name="altText" defaultValue={asset?.altText || ""} />
      <SaveButton>{asset ? "Save" : "Add"}</SaveButton>
    </form>
  );
}
