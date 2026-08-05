import Navbar from "@/components/public/navbar";
import Footer from "@/components/public/footer";
import CustomCursor from "@/components/public/custom-cursor";
import WebMcpTools from "@/components/public/webmcp";
import { GetStartedProvider } from "@/components/public/get-started-context";
import { getSettings } from "@/lib/data";

/**
 * Public pages are prerendered, but the layout, footer, and several pages read
 * content that the admin panel edits at runtime (site settings, the product
 * list, page sections). Without revalidation those reads are frozen at build
 * time, so a CMS edit or a newly published product does not appear until the
 * next deploy. That already bit us: the Nidanyo launch left some pages showing
 * four products and others five, depending on which build worker reached the
 * database.
 *
 * This used to be an hour, which was doing the propagation work by itself:
 * every admin edit waited out the timer, and in exchange all ~50 public pages
 * re-rendered hourly forever, whether or not anything had changed. Every write
 * path in `lib/actions/admin.ts` now calls `revalidatePublicSite()`, which
 * invalidates this layout and everything under it, so edits land immediately
 * and this value only has to be a backstop against an invalidation that never
 * fired.
 *
 * A week is the effective ceiling for the whole public site: the lowest
 * `revalidate` among a route's layout and page wins, so this is the value every
 * page inherits unless it sets a shorter one of its own. The pages that do are
 * `/`, `/products`, `/products/[slug]`, and `/contact`. Everything else here —
 * the SEO landing pages, blog, careers, team, FAQ, privacy — is compiled from
 * TypeScript modules in `lib/` and can only change in a deploy, which rebuilds
 * them anyway.
 */
export const revalidate = 604800;

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSettings();
  return (
    <GetStartedProvider>
      <Navbar logoUrl={settings.logoUrl} />
      <CustomCursor />
      <WebMcpTools />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
    </GetStartedProvider>
  );
}
