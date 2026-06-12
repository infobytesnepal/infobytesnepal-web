import ConfirmButton from "@/components/admin/confirm-button";
import { AdminCard, AdminInput, SaveButton } from "@/components/admin/ui";
import { deleteMediaAsset, upsertMediaAsset } from "@/lib/actions/admin";
import { getMediaAssets } from "@/lib/data";

export default async function MediaAdminPage() {
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
    <form action={upsertMediaAsset} className="mt-5 grid gap-4 md:grid-cols-[1fr_1.4fr_160px_1fr_auto] md:items-end">
      <input type="hidden" name="id" value={asset?.id || ""} />
      <AdminInput label="Asset name" name="name" defaultValue={asset?.name || ""} required />
      <AdminInput label="URL" name="url" defaultValue={asset?.url || ""} required />
      <AdminInput label="Type" name="type" defaultValue={asset?.type || ""} required />
      <AdminInput label="Alt text" name="altText" defaultValue={asset?.altText || ""} />
      <SaveButton>{asset ? "Save" : "Add"}</SaveButton>
    </form>
  );
}
