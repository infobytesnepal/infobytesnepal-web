import type { Metadata } from "next";
import SeoLandingPage from "@/components/public/seo-landing-page";
import { basicPageMetadata } from "@/lib/seo";
import { extraSeoLandingPages } from "@/lib/seo-landing-pages-extra";

const page = extraSeoLandingPages.socialMedia;

export function generateMetadata(): Metadata {
  return basicPageMetadata({
    route: page.path,
    title: page.metaTitle,
    description: page.metaDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    ogImageAlt: page.ogTitle,
  });
}

export default function SocialMediaMarketingAgencyInNepalPage() {
  return <SeoLandingPage page={page} />;
}
