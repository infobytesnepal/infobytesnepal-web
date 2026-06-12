import { AdminCard, AdminInput, SaveButton } from "@/components/admin/ui";
import { updateSiteSettings } from "@/lib/actions/admin";
import { getSettings } from "@/lib/data";

export default async function SettingsAdminPage() {
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
          <AdminInput label="Logo URL" name="logoUrl" defaultValue={settings.logoUrl} />
          <AdminInput label="Default OG image" name="defaultOgImage" defaultValue={settings.defaultOgImage} />
          <SaveButton>Save settings</SaveButton>
        </form>
      </AdminCard>
    </div>
  );
}
