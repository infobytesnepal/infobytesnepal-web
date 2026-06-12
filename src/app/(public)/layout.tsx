import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
import CustomCursor from "@/components/public/custom-cursor";
import { GetStartedProvider } from "@/components/public/get-started-context";
import { getSettings } from "@/lib/data";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  return (
    <GetStartedProvider>
      <Navbar logoUrl={settings.logoUrl} />
      <CustomCursor />
      <main>{children}</main>
      <Footer />
    </GetStartedProvider>
  );
}
