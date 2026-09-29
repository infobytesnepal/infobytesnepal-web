import CmsForm from "@/components/admin/cms-form";
import ImageField from "@/components/admin/image-field";
import { AdminCard, AdminInput } from "@/components/admin/ui";
import { updateSiteSettings } from "@/lib/actions/admin";
import { getSettings } from "@/lib/data";
import { requireAdmin } from "@/lib/auth";

export default async function SettingsAdminPage() {
  await requireAdmin();
  const settings = await getSettings();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Site Settings</h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-dark-text/65">
        These appear on every page of the website — the logo in the navigation and the details in the footer — so a save
        here refreshes the whole site.
      </p>
      <AdminCard className="mt-6">
        <CmsForm action={updateSiteSettings} submitLabel="Save settings">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminInput label="Company name" name="companyName" defaultValue={settings.companyName} />
            <AdminInput label="Tagline" name="tagline" defaultValue={settings.tagline} />
            <AdminInput label="WhatsApp number" name="whatsappNumber" defaultValue={settings.whatsappNumber} />
            <AdminInput label="Contact email" name="contactEmail" type="email" defaultValue={settings.contactEmail} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ImageField
              label="Logo"
              fileName="logoUrlFile"
              urlName="logoUrl"
              currentUrl={settings.logoUrl}
              aspect="square"
              help="Shown in the navigation bar on every page."
            />
            <ImageField
              label="Default share image"
              fileName="defaultOgImageFile"
              urlName="defaultOgImage"
              currentUrl={settings.defaultOgImage}
              help="Used when a page without its own image is shared. 1200×630 is ideal."
            />
          </div>
        </CmsForm>
      </AdminCard>
    </div>
  );
}
