import ConfirmButton from "@/components/admin/confirm-button";
import { AdminCard, AdminInput, AdminTextarea, SaveButton } from "@/components/admin/ui";
import { deleteSeoSetting, upsertSeoSetting } from "@/lib/actions/admin";
import { getAllSeo } from "@/lib/data";

export default async function SeoAdminPage() {
  const rows = await getAllSeo();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">SEO Settings</h1>
      <AdminCard className="mt-6">
        <h2 className="text-xl font-semibold text-deep-navy">Add route SEO</h2>
        <SeoForm />
      </AdminCard>
      <div className="mt-6 grid gap-5">
        {rows.map((row) => (
          <AdminCard key={row.id}>
            <h2 className="text-xl font-semibold text-deep-navy">{row.route}</h2>
            <SeoForm row={row} />
            <form action={deleteSeoSetting} className="mt-3">
              <input type="hidden" name="id" value={row.id} />
              <ConfirmButton message="Delete this SEO setting?" className="rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy">
                Delete SEO setting
              </ConfirmButton>
            </form>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}

function SeoForm({ row }: { row?: Awaited<ReturnType<typeof getAllSeo>>[number] }) {
  return (
    <form action={upsertSeoSetting} className="mt-5 grid gap-4">
      <input type="hidden" name="id" value={row?.id || ""} />
      <div className="grid gap-4 md:grid-cols-2">
        <AdminInput label="Route" name="route" defaultValue={row?.route || ""} required />
        <AdminInput label="Robots" name="robots" defaultValue={row?.robots || ""} placeholder="index,follow" />
      </div>
      <AdminInput label="Title" name="title" defaultValue={row?.title || ""} />
      <AdminTextarea label="Description" name="description" rows={3} defaultValue={row?.description || ""} />
      <div className="grid gap-4 md:grid-cols-2">
        <AdminInput label="Canonical" name="canonical" defaultValue={row?.canonical || ""} />
        <AdminInput label="OG image" name="ogImage" defaultValue={row?.ogImage || ""} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <AdminInput label="OG title" name="ogTitle" defaultValue={row?.ogTitle || ""} />
        <AdminInput label="OG description" name="ogDescription" defaultValue={row?.ogDescription || ""} />
      </div>
      <AdminTextarea label="Schema JSON" name="schemaJson" rows={5} defaultValue={row?.schemaJson || ""} />
      <SaveButton>{row ? "Save SEO" : "Add SEO"}</SaveButton>
    </form>
  );
}
