import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import GetStartedButton from "@/components/public/get-started-button";
import Reveal from "@/components/public/reveal";
import StackingCards from "@/components/public/stacking-cards";
import { defaultPageContent } from "@/lib/content";
import { getPageSection, getProducts } from "@/lib/data";
import { organizationSchema, professionalServiceSchema, websiteSchema } from "@/lib/seo";
import { getSiteUrl } from "@/lib/utils";

const featuredServices = [
  {
    title: "Web Design & Development",
    image: "/assets/services/1web-design-and-development-ibn.png",
  },
  {
    title: "Search Engine Optimization (SEO)",
    image: "/assets/services/2seo-ibn.png",
  },
  {
    title: "Digital Marketing",
    image: "/assets/services/3digital-marketing-ibn.png",
  },
  {
    title: "Professional Training",
    image: "/assets/services/4training-ibn.png",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getSiteUrl();
  const title = "Software Development Company in Nepal | InfoBytes Nepal";
  const description =
    "InfoBytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, and business automation solutions.";
  const ogImage = "/assets/hero/infobytes-hero-fallback.webp";

  return {
    title,
    description,
    alternates: { canonical: siteUrl },
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "InfoBytes Nepal",
      images: [{ url: ogImage, alt: "InfoBytes Nepal" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function HomePage() {
  const [hero, products, orgSchema] = await Promise.all([
    getPageSection("home", "hero", defaultPageContent.homeHero),
    getProducts(),
    organizationSchema(),
  ]);
  const serviceSchema = professionalServiceSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema(), serviceSchema]) }} />
      <section className="page-x relative flex min-h-screen items-center overflow-hidden bg-soft-blue pt-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={hero.fallbackImageUrl}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={hero.heroVideoUrl} type="video/mp4" />
        </video>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal className="max-w-xl md:w-1/2">
            <h1 className="text-4xl font-semibold leading-tight tracking-normal text-deep-navy md:text-[3.5rem]">{hero.headline}</h1>
            <p className="mt-5 text-xl font-semibold text-primary-blue md:text-[1.35rem]">{hero.tagline}</p>
            <p className="mt-6 max-w-lg text-base leading-7 text-dark-text/76 md:text-lg md:leading-8">{hero.supportingText}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="focus-ring site-button-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold shadow-[0_16px_42px_rgba(4,18,63,0.12)]"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <GetStartedButton />
            </div>
          </Reveal>
        </div>
      </section>

      <StackingCards products={products} />

      <section className="page-x relative z-10 overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute inset-x-0 top-32 z-0 hidden h-72 md:block" aria-hidden="true">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
            <path
              d="M80 210 C260 70 430 265 620 130 C815 -8 1015 245 1220 105 C1320 38 1390 58 1460 86"
              stroke="#00C76A"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.18"
            />
            <path
              d="M80 210 C260 70 430 265 620 130 C815 -8 1015 245 1220 105 C1320 38 1390 58 1460 86"
              stroke="#00C76A"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.08"
              filter="blur(8px)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-blue">Services</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-deep-navy md:text-5xl">
                Practical digital services for focused business growth.
              </h2>
            </div>
            <Link href="/services" className="focus-ring inline-flex items-center gap-2 font-semibold text-primary-blue">
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-4">
            {featuredServices.map((service) => (
              <Reveal key={service.title}>
                <Link
                  href="/services"
                  className="group block h-full rounded-[20px] border border-primary-blue/12 bg-soft-blue/60 p-4 shadow-[0_18px_50px_rgba(4,18,63,0.05)] transition hover:-translate-y-1 hover:border-primary-green/35 hover:bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/80">
                    <Image
                      src={service.image}
                      alt={`${service.title} service illustration`}
                      fill
                      sizes="(min-width: 768px) 22vw, 90vw"
                      className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-deep-navy">{service.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
