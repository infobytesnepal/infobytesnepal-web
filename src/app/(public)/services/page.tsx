import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import ServiceInquiryModal from "./service-inquiry-modal";
import ServiceScrollTrail from "./service-scroll-trail";
import { SiteDirectory } from "@/components/public/internal-links";
import { clusters } from "@/lib/internal-links";
import { getCanonicalSiteUrl } from "@/lib/utils";

export function generateMetadata(): Metadata {
  const siteUrl = getCanonicalSiteUrl();
  const title = "IT Services in Nepal | Web, Software, SEO | Infobytes Nepal";
  const description =
    "Websites, custom software, SEO, digital marketing, design, and IT training from one team in Nepal. See what each service includes and what it costs. Free quote.";
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
    links: [
      { href: "/web-development-company-in-nepal", label: "web development company in Nepal" },
      { href: "/web-design-company-in-nepal", label: "web design in Nepal" },
      { href: "/ecommerce-website-development-nepal", label: "e-commerce website development" },
      { href: "/website-cost-in-nepal", label: "what a website costs in Nepal" },
      { href: "/website-maintenance-services-in-nepal", label: "website maintenance in Nepal" },
    ],
    title: "Web Design and Development",
    subtitle: "Websites that load fast, look right on every phone, and bring in real inquiries.",
    description:
      "We design and build websites that are quick, easy to update, and built on clean code. Company websites, landing pages, online stores, or a full web platform. Whatever you need, the structure is set up for Google from the first day rather than patched on later. Most business websites take 2 to 4 weeks and start around NPR 50,000.",
    image: "/assets/services/1web-design-and-development-ibn.png",
    imageAlt: "Web design and development service by Infobytes Nepal shown on a laptop and mobile phone",
    imagePosition: "left",
    features: [
      "Responsive Website Design",
      "Custom UI and UX",
      "Web App Development",
      "CMS and Admin Panel",
      "Speed and Performance Tuning",
    ],
  },
  {
    number: "02",
    links: [
      { href: "/seo-company-in-nepal", label: "SEO company in Nepal" },
      { href: "/best-it-company-in-nepal", label: "best IT company in Nepal" },
      { href: "/it-company-in-kathmandu", label: "IT company in Kathmandu" },
    ],
    title: "Search Engine Optimization",
    subtitle: "Get found on Google when someone in Nepal searches for what you sell.",
    description:
      "We fix what is holding your site back technically, then build the content and local signals that move you up the results. No promises of page one in two weeks, because anyone offering that is either targeting keywords nobody searches or doing something that will cost you later. Expect 3 to 6 months to see real movement, reported monthly with the numbers that matter.",
    image: "/assets/services/2seo-ibn.png",
    imageAlt: "Search engine optimization service by Infobytes Nepal showing Google ranking growth for a business in Nepal",
    imagePosition: "right",
    features: ["Technical SEO", "On Page SEO", "Local SEO for Nepal", "Keyword and Content Strategy", "Monthly Ranking Reports"],
  },
  {
    number: "03",
    links: [
      { href: "/digital-marketing-company-in-nepal", label: "digital marketing company in Nepal" },
      { href: "/social-media-marketing-agency-in-nepal", label: "social media marketing in Nepal" },
      { href: "/digital-marketing-agency-in-kathmandu", label: "digital marketing in Kathmandu" },
    ],
    title: "Digital Marketing",
    subtitle: "Campaigns that bring in inquiries, not just likes and reach.",
    description:
      "We plan and run social media and paid campaigns aimed at people who might actually buy from you. Content, targeting, budget, and reporting handled together, so you can see what every rupee brought back. If a campaign is not working, we tell you and change it rather than quietly spending the budget.",
    image: "/assets/services/3digital-marketing-ibn.png",
    imageAlt: "Digital marketing service by Infobytes Nepal running social media and paid campaigns for a Nepali business",
    imagePosition: "left",
    features: ["Social Media Marketing", "Paid Advertising", "Campaign Strategy", "Content Planning", "Performance Reporting"],
  },
  {
    number: "04",
    links: [
      { href: "/it-training-institute-in-nepal", label: "IT training in Nepal" },
    ],
    title: "IT Training",
    subtitle: "Practical training where you build real things, not just watch slides.",
    description:
      "Training for students, working professionals, and whole teams, run by the same people who build client projects. You work on guided projects from the first session, because nobody learns web development or SEO by taking notes. Useful whether you want a job, a promotion, or a team that can manage its own website.",
    image: "/assets/services/4training-ibn.png",
    imageAlt: "IT training class by Infobytes Nepal teaching web development and digital skills to students in Nepal",
    imagePosition: "right",
    features: [
      "Web and UI Foundations",
      "SEO and Marketing Training",
      "Graphics and Branding Skills",
      "Practical Workshops",
      "Career Guidance",
    ],
  },
  {
    number: "05",
    links: [
      { href: "/graphic-design-company-in-nepal", label: "graphic design company in Nepal" },
      { href: "/ui-ux-design-company-in-nepal", label: "UI/UX design in Nepal" },
    ],
    title: "Graphic Design",
    subtitle: "Visuals that make a small company look like a serious one.",
    description:
      "Logos, brand identity, social media creatives, and print material designed so your business looks credible the moment someone sees it. You get the source files and full ownership, not just exported images, so you are never stuck waiting on us to change a phone number on a flyer.",
    image: "/assets/services/5graphics-design-ibn.png",
    imageAlt: "Graphic design work by Infobytes Nepal showing brand identity and social media creatives for a Nepali company",
    imagePosition: "left",
    features: ["Brand Identity Design", "Social Media Creatives", "Marketing Collaterals", "UI and Visual Assets", "Print Ready Designs"],
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
      <p className="mt-6 leading-8 text-dark-text/74">
        Read more:{" "}
        {service.links.map((link, index) => (
          <span key={link.href}>
            <Link
              href={link.href}
              className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4 transition hover:decoration-primary-blue"
            >
              {link.label}
            </Link>
            {index < service.links.length - 2 ? ", " : index === service.links.length - 2 ? ", and " : "."}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function ServicesPage() {
  const siteUrl = getCanonicalSiteUrl();
  const pageUrl = `${siteUrl}/services`;

  // The services page is the hub every cluster hangs off, so the structured
  // data mirrors that: one ItemList naming each pillar and pointing at the page
  // that owns it, rather than a single vague Service entity.
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${pageUrl}#services`,
      name: "Services offered by Infobytes Nepal",
      itemListElement: clusters.map((cluster, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: cluster.pillar.label,
          description: cluster.pillar.blurb,
          url: `${siteUrl}${cluster.pillar.href}`,
          areaServed: { "@type": "Country", name: "Nepal" },
          provider: { "@id": `${siteUrl}/#organization` },
        },
      })),
    },
  ];

  return (
    <main id="services-page" className="relative isolate overflow-hidden bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceScrollTrail containerId="services-page" />
      <section className="page-x relative overflow-hidden bg-soft-blue/45 pb-16 pt-32 md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(232,255,243,0.42)),radial-gradient(circle_at_18%_18%,rgba(3,66,197,0.14),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(0,187,92,0.16),transparent_30%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase text-primary-blue">What we do</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-deep-navy md:text-6xl">
            IT Services in Nepal, all under one team.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-dark-text/74">
            Websites, custom software, SEO, marketing, design, and training. Six things most businesses in Nepal end up buying
            from six different vendors who blame each other when something breaks. We do all of it, so nobody has anyone to
            blame but us.
            <span data-trail-anchor className="relative inline-block h-2 w-2 align-baseline" />
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="focus-ring site-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold">
              Get a free quote
            </Link>
            <Link href="/website-cost-in-nepal" className="focus-ring site-button-light inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold">
              See what it costs
            </Link>
          </div>
        </div>
      </section>

      {/* What every project includes, stated plainly. Buyers scan for this and
          answer engines quote it when asked how a Nepali IT company works. */}
      <section className="page-x relative z-10 border-y border-primary-blue/10 bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-primary-blue">
            What comes with every project
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "A free first consultation",
                text: "The first conversation and the written quotation cost you nothing, and there is no obligation after it.",
              },
              {
                title: "A written scope and fixed price",
                text: "Deliverables, timeline, milestones, and payment terms agreed in writing before any work starts.",
              },
              {
                title: "You own everything",
                text: "The code, the design files, the domain, and the hosting accounts are yours, handed over at the end.",
              },
              {
                title: "Support after launch",
                text: "We stay reachable once you go live, when the real questions turn up during a busy morning.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-primary-blue/10 bg-soft-blue/30 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-green text-primary-green">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-deep-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-dark-text/70">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

      <SiteDirectory className="page-x relative z-10 border-t border-primary-blue/10 bg-white py-16 md:py-20" />

      <ServiceInquiryModal />
    </main>
  );
}
