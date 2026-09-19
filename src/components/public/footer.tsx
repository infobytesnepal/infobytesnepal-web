import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import type { SVGProps } from "react";
import { getPageSection, getProducts, getSettings } from "@/lib/data";
import { defaultPageContent } from "@/lib/content";

/**
 * Footer columns mirror the topical clusters in `lib/internal-links`. Every page
 * on the site therefore links into every cluster, which is what keeps the
 * long-tail pages out of orphan territory.
 */
const footerColumns = [
  {
    title: "Software",
    links: [
      { href: "/software-development-company-in-nepal", label: "Software Development" },
      { href: "/business-automation-software-nepal", label: "Business Automation" },
      { href: "/lab-software-in-nepal", label: "Lab Software" },
      { href: "/hospital-management-software-in-nepal", label: "Hospital Software" },
      { href: "/school-management-software-in-nepal", label: "School Software" },
      { href: "/crm-software-in-nepal", label: "CRM Software" },
      { href: "/erp-software-in-nepal", label: "ERP Software" },
      { href: "/inventory-management-software-in-nepal", label: "Inventory Software" },
      { href: "/pos-software-in-nepal", label: "POS Software" },
      { href: "/mobile-app-development-company-in-nepal", label: "Mobile App Development" },
    ],
  },
  {
    title: "Web & Marketing",
    links: [
      { href: "/web-development-company-in-nepal", label: "Web Development" },
      { href: "/web-design-company-in-nepal", label: "Web Design" },
      { href: "/ecommerce-website-development-nepal", label: "Ecommerce Development" },
      { href: "/wordpress-development-company-in-nepal", label: "WordPress Development" },
      { href: "/website-maintenance-services-in-nepal", label: "Website Maintenance" },
      { href: "/seo-company-in-nepal", label: "SEO" },
      { href: "/digital-marketing-company-in-nepal", label: "Digital Marketing" },
      { href: "/social-media-marketing-agency-in-nepal", label: "Social Media Marketing" },
      { href: "/graphic-design-company-in-nepal", label: "Graphic Design" },
      { href: "/website-cost-in-nepal", label: "Website Cost in Nepal" },
    ],
  },
  {
    title: "Where we work",
    links: [
      { href: "/it-company-in-nepal", label: "IT Company in Nepal" },
      { href: "/best-it-company-in-nepal", label: "Best IT Company in Nepal" },
      { href: "/trusted-it-company-in-nepal", label: "Trusted IT Company in Nepal" },
      { href: "/it-company-in-kathmandu", label: "Kathmandu" },
      { href: "/it-company-in-lalitpur", label: "Lalitpur" },
      { href: "/it-company-in-bhaktapur", label: "Bhaktapur" },
      { href: "/it-company-in-pokhara", label: "Pokhara" },
      { href: "/it-company-in-butwal", label: "Butwal" },
      { href: "/it-company-in-chitwan", label: "Chitwan" },
      { href: "/it-company-in-biratnagar", label: "Biratnagar" },
    ],
  },
];

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.45 23.69v-7.98h3.25l.67-3.67h-3.92v-1.3c0-1.94.76-2.68 2.73-2.68.61 0 1.1.01 1.39.04V4.78c-.54-.15-1.85-.3-2.61-.3-4.01 0-5.86 1.9-5.86 5.98v1.58H6.63v3.67H9.1v7.98h4.35Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.6 2h8.8A5.6 5.6 0 0 1 22 7.6v8.8a5.6 5.6 0 0 1-5.6 5.6H7.6A5.6 5.6 0 0 1 2 16.4V7.6A5.6 5.6 0 0 1 7.6 2Zm0 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

/**
 * The boxless "in", not the boxed LinkedIn tile.
 *
 * Every other mark in this row is a glyph on a transparent ground, sitting
 * inside its own bordered circle. The official boxed tile fills that circle
 * with a solid block and reads two shades heavier than the Facebook "f" beside
 * it, which makes the row look misaligned even though it is not.
 */
function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91V8.48z" />
    </svg>
  );
}

/** The current X mark. Not the retired bird, which every icon set still ships. */
function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
    </svg>
  );
}

/**
 * Every entry here must also appear in `sameAs` on the Organization schema in
 * `lib/seo.ts`. That list is what a search engine and an answer engine use to
 * resolve "Infobytes Nepal" to one entity across platforms, and a profile that
 * is linked in the footer but missing from `sameAs` does nothing for it.
 *
 * Checked against the live platforms on 2026-09-19 rather than trusted, which
 * caught two things worth writing down:
 *
 * 1. There are two YouTube channels with nearly the same name. @infobytesnepal
 *    (UCc8C8eCmNSkR7Vu_K_bfhDA, created 2025-09-22) is real but has zero
 *    videos; @infobytesnepal-pvt-ltd (UC-Y9kyI6BnRDRHu1kGwIoLg) is the active
 *    one, and its RSS feed carries the Nidanyo videos. The empty one must stay
 *    out of `sameAs` — pointing the entity graph at a dormant duplicate of your
 *    own brand splits the signal instead of strengthening it.
 *
 * 2. TikTok profile URLs require the "@". Both bare-path forms that were tried
 *    (/infobytesnepal-pvt-ltd and /infobytesnepal) redirect to tiktok.com/404.
 *    The handle below is the supplied one in the form TikTok actually serves.
 *    It could not be confirmed by request: TikTok returns an identical 200
 *    shell for every "@handle", including invented controls, so this one is
 *    taken on trust and is the only entry here that is.
 *
 * Facebook answers bot requests with 400 and LinkedIn with 999; both block
 * unauthenticated crawlers and neither is a 404, so both are unverifiable this
 * way rather than broken.
 */
const socialLinks = [
  {
    href: "https://www.facebook.com/infobytesnepal",
    label: "Visit Infobytes Nepal on Facebook",
    icon: FacebookIcon,
    external: true,
  },
  {
    href: "https://www.instagram.com/infobytesnepal/",
    label: "Visit Infobytes Nepal on Instagram",
    icon: InstagramIcon,
    external: true,
  },
  {
    href: "https://www.linkedin.com/company/infobytes-nepal-pvt-ltd",
    label: "Visit Infobytes Nepal on LinkedIn",
    icon: LinkedInIcon,
    external: true,
  },
  {
    href: "https://x.com/infobytesnepal",
    label: "Visit Infobytes Nepal on X",
    icon: XIcon,
    external: true,
  },
  {
    href: "https://www.youtube.com/@infobytesnepal-pvt-ltd",
    label: "Visit Infobytes Nepal on YouTube",
    icon: YouTubeIcon,
    external: true,
  },
  {
    href: "https://www.tiktok.com/@infobytesnepal",
    label: "Visit Infobytes Nepal on TikTok",
    icon: TikTokIcon,
    external: true,
  },
  {
    href: "mailto:inquiry@infobytesnepal.com",
    label: "Email Infobytes Nepal",
    icon: Mail,
    external: false,
  },
];

export default async function Footer() {
  const [settings, products, footer] = await Promise.all([
    getSettings(),
    getProducts(),
    getPageSection("footer", "content", defaultPageContent.footer),
  ]);
  return (
    <footer className="bg-deep-navy text-white">
      <div className="page-x grid gap-x-8 gap-y-8 py-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2">
          <Image src="/assets/brand/infobytes-nepal-logo-white.webp" alt="Infobytes Nepal logo" width={230} height={70} className="h-12 w-auto object-contain" />
          <p className="mt-4 font-semibold text-white">{settings.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">{footer.text}</p>
          <div className="mt-5 flex items-center gap-3 text-white/78">
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-white/55 hover:bg-white/10 hover:text-white"
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <Icon className="h-[19px] w-[19px]" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-white/90">{column.title}</h2>
            <div className="mt-3 grid gap-1.5 text-[13px] text-white/75">
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/90">Company</h2>
          <div className="mt-3 grid gap-1.5 text-[13px] text-white/75">
            <Link href="/services" className="transition hover:text-white">Services</Link>
            <Link href="/products" className="transition hover:text-white">Our Products</Link>
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/blog" className="transition hover:text-white">Blog</Link>
            <Link href="/careers" className="transition hover:text-white">Careers</Link>
            <Link href="/faq" className="transition hover:text-white">FAQ</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
            <Link href="/about#team" className="transition hover:text-white">Our People</Link>
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/90">Products</h2>
          <div className="mt-3 grid gap-1.5 text-[13px] text-white/75">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="transition hover:text-white">
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/90">Contact</h2>
          <div className="mt-3 grid gap-2 text-[13px] text-white/75">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" /> Kaushaltar, Bhaktapur, Nepal
            </p>
            <a href="mailto:inquiry@infobytesnepal.com" className="transition hover:text-white">inquiry@infobytesnepal.com</a>
            <a href="tel:+9779843468715" className="transition hover:text-white">+977 9843468715</a>
            <a href="tel:+9779863777171" className="transition hover:text-white">+977 9863777171</a>
          </div>
        </div>
      </div>
      <div className="page-x flex flex-col gap-2 border-t border-white/20 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Infobytes Nepal Pvt. Ltd. All rights reserved.</p>
        <p>
          <Link href="/software-development-company-in-nepal" className="transition hover:text-white">
            Software Development Company in Nepal
          </Link>{" "}
          · Kaushaltar, Bhaktapur
        </p>
      </div>
    </footer>
  );
}
