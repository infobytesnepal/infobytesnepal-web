import { AdminCard, AdminFileInput, AdminInput, SaveButton } from "@/components/admin/ui";
import { updateSiteSettings } from "@/lib/actions/admin";
import { getSettings } from "@/lib/data";
import { requireAdmin } from "@/lib/auth";

export default async function SettingsAdminPage() {
  await requireAdmin();
  const settings = await getSettings();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Site Settings</h1>
      <AdminCard className="mt-6">
        <form action={updateSiteSettings} className="grid gap-4">
          <AdminInput label="Company name" name="companyName" defaultValue={settings.companyName} />
          <AdminInput label="Tagline" name="tagline" defaultValue={settings.tagline} />
          <AdminInput label="WhatsApp number" name="whatsappNumber" defaultValue={settings.whatsappNumber} />
          <AdminInput label="Contact email" name="contactEmail" defaultValue={settings.contactEmail} />
          <input type="hidden" name="logoUrl" value={settings.logoUrl} />
          <AdminFileInput label="Logo" name="logoUrlFile" accept="image/*" />
          <input type="hidden" name="defaultOgImage" value={settings.defaultOgImage} />
          <AdminFileInput label="Default OG image" name="defaultOgImageFile" accept="image/*" />
          <SaveButton>Save settings</SaveButton>
        </form>
      </AdminCard>
    </div>
  );
}
