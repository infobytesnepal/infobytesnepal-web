import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
import CustomCursor from "@/components/public/custom-cursor";
import { GetStartedProvider } from "@/components/public/get-started-context";
import { getSettings } from "@/lib/data";

/**
 * Public pages are prerendered, but the layout, footer, and several pages read
 * content that the admin panel edits at runtime (site settings, the product
 * list, page sections). Without revalidation those reads are frozen at build
 * time, so a CMS edit or a newly published product does not appear until the
 * next deploy. That already bit us: the Nidanyo launch left some pages showing
 * four products and others five, depending on which build worker reached the
 * database. An hour keeps pages effectively static while letting admin changes
 * land on their own.
 */
export const revalidate = 3600;

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  return (
    <GetStartedProvider>
      <Navbar logoUrl={settings.logoUrl} />
      <CustomCursor />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
    </GetStartedProvider>
  );
}
