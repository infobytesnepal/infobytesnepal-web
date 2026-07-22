import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import ServiceInquiryModal from "./service-inquiry-modal";
import ServiceScrollTrail from "./service-scroll-trail";
import { getSiteUrl } from "@/lib/utils";

export function generateMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const title = "Services | Infobytes Nepal";
  const description =
    "Explore software development, web development, SEO, digital marketing, training, graphics design, and business automation services by Infobytes Nepal.";
  const ogImage = "/assets/hero/infobytes-hero-fallback.webp";

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/services` },
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: `${siteUrl}/services`,
      siteName: "Infobytes Nepal",
      images: [{ url: ogImage, alt: "Infobytes Nepal services" }],
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

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    subtitle: "Modern, responsive, and high-performing websites built to help your business grow online.",
    description:
      "We design and develop websites that are fast, mobile-friendly, visually polished, and easy to manage. From company websites to scalable web platforms, we focus on clean design, smooth user experience, and strong technical foundations.",
    image: "/assets/services/1web-design-and-development-ibn.png",
    imageAlt: "Web design and development service illustration",
    imagePosition: "left",
    features: [
      "Responsive Website Design",
      "Custom UI/UX",
      "Web App Development",
      "CMS & Admin Integration",
      "Speed & Performance Optimization",
    ],
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO)",
    subtitle: "Improve visibility, rank higher, and attract the right audience organically.",
    description:
      "Our SEO approach helps businesses strengthen their search presence through technical improvements, keyword strategy, on-page optimization, content structure, and performance tracking.",
    image: "/assets/services/2seo-ibn.png",
    imageAlt: "Search engine optimization service illustration",
    imagePosition: "right",
    features: ["Technical SEO", "On-Page SEO", "Local SEO", "Keyword & Content Strategy", "Analytics & Ranking Reports"],
  },
  {
    number: "03",
    title: "Digital Marketing",
    subtitle: "Performance-driven digital campaigns built for reach, engagement, and growth.",
    description:
      "We help brands reach the right audience through strategic digital marketing, social media planning, paid campaigns, content direction, and data-backed performance improvements.",
    image: "/assets/services/3digital-marketing-ibn.png",
    imageAlt: "Digital marketing service illustration",
    imagePosition: "left",
    features: ["Social Media Marketing", "Paid Advertising", "Campaign Strategy", "Content Planning", "Performance Reporting"],
  },
  {
    number: "04",
    title: "Professional Training",
    subtitle: "Practical training programs designed to build real-world digital skills.",
    description:
      "Our training programs focus on practical learning, guided projects, and industry-relevant skills for students, professionals, and teams looking to grow in the digital space.",
    image: "/assets/services/4training-ibn.png",
    imageAlt: "Professional training service illustration",
    imagePosition: "right",
    features: [
      "Web & UI Foundations",
      "SEO & Marketing Training",
      "Graphics & Branding Skills",
      "Hands-on Workshops",
      "Career-focused Guidance",
    ],
  },
  {
    number: "05",
    title: "Graphics Design",
    subtitle: "Creative visuals that strengthen your brand identity and communication.",
    description:
      "We create professional graphics and brand visuals that help businesses communicate clearly, look credible, and stand out across digital and print platforms.",
    image: "/assets/services/5graphics-design-ibn.png",
    imageAlt: "Graphics design service illustration",
    imagePosition: "left",
    features: ["Brand Identity Design", "Social Media Creatives", "Marketing Collaterals", "UI & Visual Assets", "Print-ready Designs"],
  },
] as const;

function ServiceImage({ service }: { service: (typeof services)[number] }) {
  return (
    <div
      data-trail-anchor
      className="relative z-10 mx-auto flex w-full max-w-xl items-center justify-center rounded-[22px] bg-soft-blue/35 p-3 md:p-5 lg:max-w-none lg:rounded-[28px] lg:border lg:border-primary-blue/10 lg:bg-white/78 lg:p-7 lg:shadow-[0_24px_70px_rgba(4,18,63,0.08)] lg:backdrop-blur"
    >
      <div className="absolute inset-4 rounded-[22px] bg-[radial-gradient(circle_at_30%_20%,rgba(3,66,197,0.12),transparent_42%),radial-gradient(circle_at_80%_78%,rgba(0,187,92,0.14),transparent_38%)]" />
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 42vw, 90vw"
          className="object-contain drop-shadow-[0_22px_34px_rgba(4,18,63,0.12)]"
          priority={service.number === "01"}
        />
      </div>
    </div>
  );
}

function ServiceCopy({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="relative z-10">
      <h2 className="text-3xl font-semibold leading-tight text-deep-navy md:text-5xl">{service.title}</h2>
      <p className="mt-5 text-lg font-semibold leading-8 text-primary-blue">{service.subtitle}</p>
      <p className="mt-5 leading-8 text-dark-text/74">{service.description}</p>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {service.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 rounded-2xl border border-primary-blue/10 bg-white/82 px-4 py-3 text-sm font-semibold text-deep-navy shadow-[0_12px_28px_rgba(4,18,63,0.04)] backdrop-blur"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-green text-primary-green">
              <Check size={15} strokeWidth={2.4} />
            </span>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main id="services-page" className="relative isolate overflow-hidden bg-white">
      <ServiceScrollTrail containerId="services-page" />
      <section className="page-x relative overflow-hidden bg-soft-blue/45 pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(232,255,243,0.42)),radial-gradient(circle_at_18%_18%,rgba(3,66,197,0.14),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(0,187,92,0.16),transparent_30%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase text-primary-blue"></p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-deep-navy md:text-6xl">
            Digital services shaped for sharper business growth.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-dark-text/74">
            From websites and search visibility to campaigns, training, and brand visuals, we build practical digital momentum with a clean technical foundation.
            <span data-trail-anchor className="relative inline-block h-2 w-2 align-baseline" />
          </p>
        </div>
      </section>

      <section id="services-experience" className="page-x relative isolate overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_8%,rgba(3,66,197,0.08),transparent_28%),radial-gradient(circle_at_84%_36%,rgba(0,187,92,0.1),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fbff_46%,#ffffff_100%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:gap-12 lg:gap-20">
          {services.map((service) => {
            const imageFirst = service.imagePosition === "left";

            return (
              <article
                key={service.number}
                className="grid gap-7 rounded-[28px] border border-primary-blue/10 bg-white/72 p-5 shadow-[0_22px_70px_rgba(4,18,63,0.06)] backdrop-blur md:p-7 lg:grid-cols-2 lg:items-center lg:gap-12 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0"
              >
                <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <ServiceImage service={service} />
                </div>
                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <ServiceCopy service={service} />
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <ServiceInquiryModal />
    </main>
  );
}
