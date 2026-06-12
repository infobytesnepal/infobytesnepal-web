import type { Metadata } from "next";
import { getSeo, getSettings } from "./data";
import { getSiteUrl } from "./utils";

export async function buildMetadata(route: string, fallback: { title: string; description: string; robots?: string }): Promise<Metadata> {
  const [seo, settings] = await Promise.all([getSeo(route), getSettings()]);
  const siteUrl = getSiteUrl();
  const title = seo?.title || fallback.title;
  const description = seo?.description || fallback.description;
  const canonical = seo?.canonical || `${siteUrl}${route === "/" ? "" : route}`;
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const ogImage = seo?.ogImage || settings.defaultOgImage;
  const robots = seo?.robots || fallback.robots;

  return {
    title,
    description,
    alternates: { canonical },
    robots,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: settings.companyName,
      images: ogImage ? [{ url: ogImage, alt: settings.companyName }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export async function organizationSchema() {
  const settings = await getSettings();
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.companyName,
    url: siteUrl,
    logo: `${siteUrl}${settings.logoUrl}`,
    slogan: settings.tagline,
    email: settings.contactEmail || undefined,
  };
}

export function websiteSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InfoBytes Nepal",
    url: siteUrl,
  };
}
