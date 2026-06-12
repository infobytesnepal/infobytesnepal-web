import Image from "next/image";
import Link from "next/link";
import { getPageSection, getProducts, getSettings } from "@/lib/data";
import { defaultPageContent } from "@/lib/content";

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
          <Image src="/assets/brand/infobytes-nepal-logo-white.png" alt="InfoBytes Nepal logo" width={190} height={58} className="h-14 w-auto object-contain" />
          <p className="mt-4 font-semibold text-white">{settings.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">{footer.text}</p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Navigation</h2>
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
