import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { getPageSection, getProducts, getSettings } from "@/lib/data";
import { defaultPageContent } from "@/lib/content";
import { stripWhatsAppNumber } from "@/lib/utils";

export default async function Footer() {
  const [settings, products, footer] = await Promise.all([
    getSettings(),
    getProducts(),
    getPageSection("footer", "content", defaultPageContent.footer),
  ]);
  const whatsapp = stripWhatsAppNumber(settings.whatsappNumber);
  return (
    <footer className="bg-primary-green text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
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
            {settings.contactEmail && <a href={`mailto:${settings.contactEmail}`} className="hover:text-deep-navy">{settings.contactEmail}</a>}
            {whatsapp && (
              <a href={`https://wa.me/${whatsapp}`} className="inline-flex w-fit items-center gap-2 rounded-full border border-white/45 px-4 py-2 font-semibold text-white hover:border-white hover:text-deep-navy">
                <MessageCircle size={16} />
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 px-5 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} InfoBytes Nepal. All rights reserved.
      </div>
    </footer>
  );
}
