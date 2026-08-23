import type { Metadata } from "next";
import SeoLandingPage from "@/components/public/seo-landing-page";
import { basicPageMetadata } from "@/lib/seo";
import { getLandingPage } from "@/lib/landing-pages";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLandingPage("lims");
  return basicPageMetadata({
    route: page.path,
    title: page.metaTitle,
    description: page.metaDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogImageAlt: page.ogTitle,
  });
}

export default async function LimsNepalPage() {
  const page = await getLandingPage("lims");
  return <SeoLandingPage page={page} />;
}
