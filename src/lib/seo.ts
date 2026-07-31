import type { Metadata } from "next";
import { getSeo, getSettings } from "./data";
import { team } from "./team";
import { getCanonicalSiteUrl } from "./utils";

function toCanonicalUrl(value: string) {
  const siteUrl = getCanonicalSiteUrl();
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
  const siteUrl = getCanonicalSiteUrl();
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
  ogImageAlt = "Infobytes Nepal",
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
  const siteUrl = getCanonicalSiteUrl();
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
      siteName: "Infobytes Nepal",
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
  const siteUrl = getCanonicalSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: settings.companyName,
    legalName: "Infobytes Nepal Pvt. Ltd.",
    alternateName: ["Infobytes", "Infobytes Nepal Pvt. Ltd."],
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
      "Infobytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, and business automation. It also builds Nidanyo, a laboratory operations and information management system for medical laboratories in Nepal.",
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
    // associate each person with Infobytes Nepal (strengthens name searches).
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
  const siteUrl = getCanonicalSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Infobytes Nepal",
    alternateName: "Infobytes",
    url: siteUrl,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function professionalServiceSchema() {
  const siteUrl = getCanonicalSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Infobytes Nepal",
    legalName: "Infobytes Nepal Pvt. Ltd.",
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
      "Social Media Marketing",
      "Business Automation",
      "CRM and ERP-style systems",
      "Laboratory Information Management Systems",
      "Hospital and Clinic Management Software",
      "Website Maintenance and Support",
      "IT Training",
    ],
  };
}
