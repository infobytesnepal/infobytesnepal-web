import { AdminCard, AdminFileInput, AdminInput, AdminTextarea, SaveButton } from "@/components/admin/ui";
import { updatePageSection } from "@/lib/actions/admin";
import { defaultPageContent } from "@/lib/content";
import { getPageSection } from "@/lib/data";
import { requireAdmin } from "@/lib/auth";

export default async function PagesAdminPage() {
  await requireAdmin();
  const [homeHero, homeMedia, about1, about2, aboutWorking, started, goals, contactHero, privacy, footer] = await Promise.all([
    getPageSection("home", "hero", defaultPageContent.homeHero),
    getPageSection("home", "media", defaultPageContent.homeMedia),
    getPageSection("about", "section1", defaultPageContent.aboutSection1),
    getPageSection("about", "section2", defaultPageContent.aboutSection2),
    getPageSection("about", "working", defaultPageContent.aboutWorking),
    getPageSection("about", "started", defaultPageContent.aboutStarted),
    getPageSection("about", "goals", defaultPageContent.aboutGoals),
    getPageSection("contact", "hero", defaultPageContent.contactHero),
    getPageSection("privacy-policy", "content", defaultPageContent.privacy),
    getPageSection("footer", "content", defaultPageContent.footer),
  ]);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Pages</h1>
      <div className="mt-6 grid gap-6">
        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">Home</h2>
          <SectionForm pageKey="home" sectionKey="hero">
            <AdminInput label="Hero headline" name="headline" defaultValue={homeHero.headline} />
            <AdminInput label="Tagline" name="tagline" defaultValue={homeHero.tagline} />
            <AdminTextarea label="Supporting text" name="supportingText" rows={3} defaultValue={homeHero.supportingText} />
            <AdminInput label="Hero video path" name="heroVideoUrl" defaultValue={homeHero.heroVideoUrl} />
            <input type="hidden" name="fallbackImageUrl" value={homeHero.fallbackImageUrl} />
            <AdminFileInput label="Fallback image" name="fallbackImageUrlFile" accept="image/*" help="Used as the video poster." />
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">Home content images</h2>
          <p className="mt-1 text-sm text-dark-text/60">
            The three photos inside the home page sections. Upload a replacement to swap the stock photography for real
            office and team photos. Keep the alt text descriptive: it is read by Google and by screen readers.
          </p>
          <SectionForm pageKey="home" sectionKey="media">
            <input type="hidden" name="answerImageUrl" value={homeMedia.answerImageUrl} />
            <AdminFileInput label="Answer section image" name="answerImageUrlFile" accept="image/*" help="Sits beside the 'Who is the best IT company in Nepal' block." />
            <AdminInput label="Answer image alt text" name="answerImageAlt" defaultValue={homeMedia.answerImageAlt} />
            <input type="hidden" name="pricingImageUrl" value={homeMedia.pricingImageUrl} />
            <AdminFileInput label="Pricing section image" name="pricingImageUrlFile" accept="image/*" help="Sits beside the pricing table." />
            <AdminInput label="Pricing image alt text" name="pricingImageAlt" defaultValue={homeMedia.pricingImageAlt} />
            <input type="hidden" name="whyImageUrl" value={homeMedia.whyImageUrl} />
            <AdminFileInput label="Why Infobytes image" name="whyImageUrlFile" accept="image/*" help="Sits beside the 'technology partner' block." />
            <AdminInput label="Why image alt text" name="whyImageAlt" defaultValue={homeMedia.whyImageAlt} />
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">About section 1</h2>
          <SectionForm pageKey="about" sectionKey="section1">
            <AdminInput label="Title" name="title" defaultValue={about1.title} />
            <AdminTextarea label="Text" name="text" rows={4} defaultValue={about1.text} />
            <AdminInput label="Button label" name="buttonLabel" defaultValue={about1.buttonLabel} />
            <AdminInput label="Button URL" name="buttonUrl" defaultValue={about1.buttonUrl} />
            <input type="hidden" name="imageUrl" value={about1.imageUrl} />
            <AdminFileInput label="Image" name="imageUrlFile" accept="image/*" />
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">About: how we work image</h2>
          <SectionForm pageKey="about" sectionKey="working">
            <input type="hidden" name="imageUrl" value={aboutWorking.imageUrl} />
            <AdminFileInput label="Image" name="imageUrlFile" accept="image/*" help="Sits beside the 'How we actually work' block." />
            <AdminInput label="Alt text" name="imageAlt" defaultValue={aboutWorking.imageAlt} />
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">About section 2</h2>
          <SectionForm pageKey="about" sectionKey="section2">
            <AdminInput label="Title" name="title" defaultValue={about2.title} />
            <AdminTextarea label="Text" name="text" rows={4} defaultValue={about2.text} />
            <AdminInput label="Button label" name="buttonLabel" defaultValue={about2.buttonLabel} />
            <AdminInput label="Button URL" name="buttonUrl" defaultValue={about2.buttonUrl} />
            <div className="grid gap-4 md:grid-cols-3">
              {Array.from({ length: 15 }, (_, index) => {
                const key = `techLogo${index + 1}` as keyof typeof about2;
                const value = String(about2[key] || "");
                return (
                  <div key={key}>
                    <input type="hidden" name={key} value={value} />
                    <AdminFileInput label={`Tech logo ${index + 1}`} name={`${key}File`} accept="image/*" />
                  </div>
                );
              })}
            </div>
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">How We Started</h2>
          <SectionForm pageKey="about" sectionKey="started">
            <AdminInput label="Title" name="title" defaultValue={started.title} />
            <AdminTextarea label="Body" name="body" rows={4} defaultValue={started.body} />
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">Goals, Vision and Mission</h2>
          <SectionForm pageKey="about" sectionKey="goals">
            <AdminTextarea label="Goal" name="goal" rows={3} defaultValue={goals.goal} />
            <AdminTextarea label="Vision" name="vision" rows={3} defaultValue={goals.vision} />
            <AdminTextarea label="Mission" name="mission" rows={3} defaultValue={goals.mission} />
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">Contact</h2>
          <SectionForm pageKey="contact" sectionKey="hero">
            <AdminInput label="Hero title" name="title" defaultValue={contactHero.title} />
            <AdminTextarea label="Hero text" name="text" rows={3} defaultValue={contactHero.text} />
            <AdminInput label="WhatsApp number" name="whatsappNumber" defaultValue={contactHero.whatsappNumber} />
            <AdminInput label="Background video path" name="backgroundUrl" defaultValue={contactHero.backgroundUrl} />
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">Privacy Policy</h2>
          <SectionForm pageKey="privacy-policy" sectionKey="content">
            <AdminInput label="Title" name="title" defaultValue={privacy.title} />
            <AdminTextarea label="Body" name="body" rows={5} defaultValue={privacy.body} />
          </SectionForm>
        </AdminCard>

        <AdminCard>
          <h2 className="text-xl font-semibold text-deep-navy">Footer</h2>
          <SectionForm pageKey="footer" sectionKey="content">
            <AdminTextarea label="Footer text" name="text" rows={3} defaultValue={footer.text} />
          </SectionForm>
        </AdminCard>
      </div>
    </div>
  );
}

function SectionForm({ pageKey, sectionKey, children }: { pageKey: string; sectionKey: string; children: React.ReactNode }) {
  return (
    <form action={updatePageSection} className="mt-5 grid gap-4">
      <input type="hidden" name="pageKey" value={pageKey} />
      <input type="hidden" name="sectionKey" value={sectionKey} />
      {children}
      <SaveButton>Save section</SaveButton>
    </form>
  );
}
