import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import type { SVGProps } from "react";
import { getPageSection, getProducts, getSettings } from "@/lib/data";
import { defaultPageContent } from "@/lib/content";

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

const socialLinks = [
  {
    href: "https://www.facebook.com/infobytesnepal",
    label: "Visit InfoBytes Nepal on Facebook",
    icon: FacebookIcon,
    external: true,
  },
  {
    href: "https://www.instagram.com/infobytesnepal/",
    label: "Visit InfoBytes Nepal on Instagram",
    icon: InstagramIcon,
    external: true,
  },
  {
    href: "mailto:info@infobytesnepal.com",
    label: "Email InfoBytes Nepal",
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
    <footer className="bg-primary-green text-white">
      <div className="page-x grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Image src="/assets/brand/infobytes-nepal-logo-white.png" alt="InfoBytes Nepal logo" width={230} height={70} className="h-16 w-auto object-contain md:h-[4.5rem]" />
          <p className="mt-4 font-semibold text-white">{settings.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">{footer.text}</p>
          <div className="mt-4 flex items-center gap-3 text-white/78">
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-white/55 hover:text-deep-navy"
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <Icon className="h-[19px] w-[19px]" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Explore</h2>
          <div className="mt-4 grid gap-2 text-sm text-white/78">
            <Link href="/products" className="hover:text-deep-navy">Our Products</Link>
            <Link href="/services" className="hover:text-deep-navy">Services</Link>
            <Link href="/contact" className="hover:text-deep-navy">Contact</Link>
            <Link href="/about" className="hover:text-deep-navy">About</Link>
            <Link href="/privacy-policy" className="hover:text-deep-navy">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Products</h2>
          <div className="mt-4 grid gap-2 text-sm text-white/78">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="hover:text-deep-navy">
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/78">
            <p>Kaushaltar, Bhaktapur</p>
            <a href="mailto:info@infobytesnepal.com" className="hover:text-deep-navy">info@infobytesnepal.com</a>
            <a href="tel:+9779843468715" className="hover:text-deep-navy">+977 - 9843468715</a>
            <a href="tel:+9779863777171" className="hover:text-deep-navy">+977 - 9863777171</a>
          </div>
        </div>
      </div>
      <div className="page-x border-t border-white/20 py-4 text-right text-xs text-white/70">
        © {new Date().getFullYear()} InfoBytes Nepal. All rights reserved.
      </div>
    </footer>
  );
}
