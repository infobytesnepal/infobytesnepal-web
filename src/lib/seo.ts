import type { Metadata } from "next";
import { getSeo, getSettings } from "./data";
import { team } from "./team";
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
    "@id": `${siteUrl}/#organization`,
    name: settings.companyName,
    alternateName: "InfoBytes",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(settings.logoUrl),
      width: 230,
      height: 70,
    },
    image: toAbsoluteUrl(settings.defaultOgImage),
    slogan: settings.tagline,
    description:
      "InfoBytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, and business automation solutions.",
    email: settings.contactEmail || "info@infobytesnepal.com",
    telephone: "+977-9843468715",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaushaltar",
      addressLocality: "Bhaktapur",
      addressRegion: "Bagmati",
      addressCountry: "NP",
    },
    areaServed: {
      "@type": "Country",
      name: "Nepal",
    },
    sameAs: [
      "https://www.facebook.com/infobytesnepal",
      "https://www.instagram.com/infobytesnepal/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: settings.contactEmail || "info@infobytesnepal.com",
      telephone: "+977-9843468715",
      areaServed: "NP",
      availableLanguage: ["en", "ne"],
    },
    // Wire the people into the Organization entity graph so search engines
    // associate each person with InfoBytes Nepal (strengthens name searches).
    founder: {
      "@type": "Person",
      "@id": `${siteUrl}/about#rajesh-pandey`,
      name: "Rajesh Pandey",
      jobTitle: "Founder",
      url: `${siteUrl}/about`,
    },
    employee: team.map((member) => ({
      "@type": "Person",
      "@id": `${siteUrl}/team/${member.slug}#person`,
      name: member.name,
      jobTitle: member.role,
      url: `${siteUrl}/team/${member.slug}`,
    })),
  };
}

export function websiteSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "InfoBytes Nepal",
    alternateName: "InfoBytes",
    url: siteUrl,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function professionalServiceSchema() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "InfoBytes Nepal",
    url: siteUrl,
    image: `${siteUrl}/assets/hero/infobytes-hero-fallback.webp`,
    email: "info@infobytesnepal.com",
    telephone: "+977-9843468715",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaushaltar",
      addressLocality: "Bhaktapur",
      addressRegion: "Bagmati",
      addressCountry: "NP",
    },
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
