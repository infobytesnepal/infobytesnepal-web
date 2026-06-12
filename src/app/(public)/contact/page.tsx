import type { Metadata } from "next";
import { Phone } from "lucide-react";
import ContactForm from "@/components/public/contact-form";
import { defaultPageContent } from "@/lib/content";
import { getPageSection, getSettings } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";
import { stripWhatsAppNumber } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("/contact", {
    title: "Contact | InfoBytes Nepal",
    description: "Contact InfoBytes Nepal about focused digital products for growing teams.",
  });
}

export default async function ContactPage() {
  const [hero, settings] = await Promise.all([
    getPageSection("contact", "hero", defaultPageContent.contactHero),
    getSettings(),
  ]);
  const displayNumber = hero.whatsappNumber || settings.whatsappNumber;
  const whatsapp = stripWhatsAppNumber(displayNumber);
  const heroMedia = hero.backgroundUrl || "/assets/hero/infobytes-contact-hero.mp4";
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-deep-navy px-5 pt-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero/infobytes-hero-fallback.webp"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroMedia} type="video/mp4" />
        </video>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center justify-start pb-16 pl-5 md:pl-14 lg:pl-24">
          {whatsapp ? (
            <a
              href={`https://wa.me/${whatsapp}`}
              className="focus-ring site-button-light inline-flex items-center justify-center gap-4 rounded-full px-7 py-4 text-lg font-semibold shadow-[0_22px_60px_rgba(4,18,63,0.16)] backdrop-blur-xl"
              aria-label={`Contact InfoBytes Nepal on WhatsApp at ${displayNumber}`}
            >
              <Phone size={22} />
              {displayNumber}
            </a>
          ) : (
            <div className="inline-flex items-center justify-center gap-4 rounded-full border border-primary-blue/15 bg-white/96 px-7 py-4 text-lg font-semibold text-deep-navy shadow-[0_22px_60px_rgba(4,18,63,0.16)] backdrop-blur-xl">
              <Phone size={22} />
              WhatsApp number unavailable
            </div>
          )}
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase text-primary-blue">Contact Form</p>
            <h1 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">{hero.title}</h1>
            <p className="mt-4 max-w-2xl leading-7 text-dark-text/72">{hero.text}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
