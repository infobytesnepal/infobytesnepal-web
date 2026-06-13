import type { Metadata } from "next";
import { getSeo, getSettings } from "./data";
import { getSiteUrl } from "./utils";

function toCanonicalUrl(value: string) {
  const siteUrl = getSiteUrl();
  try {
    const url = new URL(value, siteUrl);
    if (url.hostname === "infobytesnepal.com") {
      url.hostname = "www.infobytesnepal.com";
    }
    return url.toString().replace(/\/$/, "");
  } catch {
    return siteUrl;
  }
}

function toAbsoluteUrl(value?: string | null) {
  if (!value || value.startsWith("data:")) return undefined;
  return toCanonicalUrl(value);
}

export async function buildMetadata(route: string, fallback: { title: string; description: string; robots?: string }): Promise<Metadata> {
  const [seo, settings] = await Promise.all([getSeo(route), getSettings()]);
  const siteUrl = getSiteUrl();
  const title = seo?.title || fallback.title;
  const description = seo?.description || fallback.description;
  const canonical = toCanonicalUrl(seo?.canonical || `${siteUrl}${route === "/" ? "" : route}`);
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

export function basicPageMetadata({
  route,
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = "/assets/hero/infobytes-hero-fallback.webp",
  ogImageAlt = "InfoBytes Nepal",
  robots = "index,follow",
}: {
  route: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  robots?: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = toCanonicalUrl(`${siteUrl}${route === "/" ? "" : route}`);
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;

  return {
    title,
    description,
    alternates: { canonical },
    robots,
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      url: canonical,
      siteName: "InfoBytes Nepal",
      images: [{ url: ogImage, alt: ogImageAlt }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      images: [ogImage],
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
    logo: toAbsoluteUrl(settings.logoUrl),
    slogan: settings.tagline,
    email: settings.contactEmail || undefined,
    telephone: "+977-9843468715",
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: settings.contactEmail || "info@infobytesnepal.com",
      telephone: "+977-9843468715",
      areaServed: "NP",
      availableLanguage: ["en", "ne"],
    },
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

export function professionalServiceSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "InfoBytes Nepal",
    url: siteUrl,
    email: "info@infobytesnepal.com",
    telephone: "+977-9843468715",
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    serviceType: [
      "Software Development",
      "Web Design & Development",
      "SEO",
      "Digital Marketing",
      "Business Automation",
      "CRM and ERP-style systems",
    ],
  };
}
