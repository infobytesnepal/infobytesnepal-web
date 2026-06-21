import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Code2,
  Megaphone,
  MonitorSmartphone,
  Search,
  Workflow,
  Smartphone,
  ShieldCheck,
  Layers,
  Headset,
  Target,
  Sparkles,
  Check,
} from "lucide-react";
import CmsImage from "@/components/public/cms-image";
import GetStartedButton from "@/components/public/get-started-button";
import Reveal from "@/components/public/reveal";
import StackingCards from "@/components/public/stacking-cards";
import { defaultPageContent } from "@/lib/content";
import { getPageSection, getProducts } from "@/lib/data";
import { organizationSchema, professionalServiceSchema, websiteSchema } from "@/lib/seo";
import { getSiteUrl } from "@/lib/utils";

const featuredServices = [
  {
    title: "Custom Software Development",
    description: "Practical web apps, dashboards, and CRM-style systems built around how your team actually works.",
    href: "/software-development-company-in-nepal",
    icon: Code2,
  },
  {
    title: "Web Design & Development",
    description: "Fast, responsive, credible websites and landing pages engineered for conversion and SEO.",
    href: "/web-development-company-in-nepal",
    icon: MonitorSmartphone,
  },
  {
    title: "Search Engine Optimization",
    description: "Technical SEO, content structure, and local visibility that compounds over time.",
    href: "/seo-company-in-nepal",
    icon: Search,
  },
  {
    title: "Digital Marketing",
    description: "Campaigns, content, and social strategy connected to real inquiries and follow-up.",
    href: "/digital-marketing-company-in-nepal",
    icon: Megaphone,
  },
  {
    title: "Business Automation",
    description: "Lead, sales, and service workflows automated so daily operations stay clear and traceable.",
    href: "/business-automation-software-nepal",
    icon: Workflow,
  },
  {
    title: "Mobile App Development",
    description: "Android, iOS, and PWA experiences planned around real users and clean adoption.",
    href: "/mobile-app-development-company-in-nepal",
    icon: Smartphone,
  },
];

const stats = [
  { value: "4", label: "Focused products shipped" },
  { value: "7+", label: "Service areas covered" },
  { value: "100%", label: "Nepal-based team" },
  { value: "1:1", label: "Direct communication" },
];

const differentiators = [
  {
    title: "Business-first planning",
    description: "We map your workflow, users, and bottlenecks before writing a line of code, so the build solves the real problem.",
    icon: Target,
  },
  {
    title: "Clean, maintainable builds",
    description: "Modern, performant foundations that stay easy to update long after launch instead of becoming technical debt.",
    icon: Layers,
  },
  {
    title: "Connected by design",
    description: "Web, SEO, automation, and products planned together so every digital investment supports one direction.",
    icon: Workflow,
  },
  {
    title: "Long-term partnership",
    description: "Honest scopes, clear timelines, and post-launch support that keeps improving the system as you grow.",
    icon: Headset,
  },
];

const process = [
  { title: "Discover", text: "Understand the business, users, and the workflow pain that technology should remove." },
  { title: "Plan", text: "Define scope, modules, pages, and priorities so the first version stays realistic and valuable." },
  { title: "Build", text: "Design and develop a polished, responsive, maintainable solution with performance in mind." },
  { title: "Launch", text: "Test real use cases, prepare a careful launch, and guide your team through adoption." },
  { title: "Improve", text: "Refine reports, content, automation, and features as the business learns from real usage." },
];

const techLogos = [
  { src: "/assets/tech/react.svg", alt: "React" },
  { src: "/assets/tech/next.svg", alt: "Next.js" },
  { src: "/assets/tech/typescript.svg", alt: "TypeScript" },
  { src: "/assets/tech/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/assets/tech/node.svg", alt: "Node.js" },
  { src: "/assets/tech/turso.svg", alt: "Turso" },
  { src: "/assets/tech/drizzle.svg", alt: "Drizzle ORM" },
  { src: "/assets/tech/vercel.svg", alt: "Vercel" },
  { src: "/assets/tech/framer.svg", alt: "Framer Motion" },
  { src: "/assets/tech/gsap.svg", alt: "GSAP" },
  { src: "/assets/tech/sqlite.svg", alt: "SQLite" },
  { src: "/assets/tech/zod.svg", alt: "Zod" },
];

const exploreLinks = [
  { href: "/software-development-company-in-nepal", label: "Software Development Company in Nepal" },
  { href: "/web-development-company-in-nepal", label: "Web Development Company in Nepal" },
  { href: "/seo-company-in-nepal", label: "SEO Company in Nepal" },
  { href: "/digital-marketing-company-in-nepal", label: "Digital Marketing Company in Nepal" },
  { href: "/mobile-app-development-company-in-nepal", label: "Mobile App Development Company in Nepal" },
  { href: "/business-automation-software-nepal", label: "Business Automation Software Nepal" },
  { href: "/it-company-in-nepal", label: "IT Company in Nepal" },
  { href: "/best-it-company-in-nepal", label: "Best IT Company in Nepal" },
  { href: "/trusted-it-company-in-nepal", label: "Trusted IT Company in Nepal" },
  { href: "/top-it-companies-in-nepal", label: "Top IT Companies in Nepal" },
];

const heroChips = ["Software Development", "Web & Mobile", "SEO & Marketing", "Business Automation"];

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
  const [hero, products, aboutTech, orgSchema] = await Promise.all([
    getPageSection("home", "hero", defaultPageContent.homeHero),
    getProducts(),
    getPageSection("about", "section2", defaultPageContent.aboutSection2),
    organizationSchema(),
  ]);
  const serviceSchema = professionalServiceSchema();

  // Real technology icons managed from the CMS (shared with the About page).
  // Falls back to the bundled svgs if the CMS has no icons set.
  const cmsTechLogos = [
    aboutTech.techLogo1,
    aboutTech.techLogo2,
    aboutTech.techLogo3,
    aboutTech.techLogo4,
    aboutTech.techLogo5,
    aboutTech.techLogo6,
    aboutTech.techLogo7,
    aboutTech.techLogo8,
    aboutTech.techLogo9,
    aboutTech.techLogo10,
    aboutTech.techLogo11,
    aboutTech.techLogo12,
    aboutTech.techLogo13,
    aboutTech.techLogo14,
    aboutTech.techLogo15,
  ].filter(Boolean);
  const techStack = cmsTechLogos.length ? cmsTechLogos : techLogos.map((logo) => logo.src);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema(), serviceSchema]) }} />

      {/* ---------- Hero ---------- */}
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
        {/* Legibility scrim — keeps the look light while text stays readable over the video */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/55 to-white/80 md:bg-gradient-to-r md:from-white/92 md:via-white/60 md:to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal className="max-w-2xl md:w-3/5">
            <span className="eyebrow">
              <Sparkles size={14} /> Software Development & IT Company in Nepal
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-deep-navy md:text-[3.6rem]">
              {hero.headline}
              <span className="mt-2 block text-gradient">{hero.tagline}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-dark-text/78 md:text-lg md:leading-8">{hero.supportingText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GetStartedButton />
              <Link
                href="/products"
                className="focus-ring site-button-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold shadow-[0_16px_42px_rgba(4,18,63,0.12)]"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {heroChips.map((chip) => (
                <span key={chip} className="chip">
                  <Check size={13} className="text-primary-green" />
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section className="page-x relative z-10 bg-deep-navy py-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-3xl font-semibold md:text-4xl">
                <span className="bg-gradient-to-r from-[#7eb0ff] to-[#5ff0a8] bg-clip-text text-transparent">{stat.value}</span>
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="page-x relative z-10 overflow-hidden bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-deep-navy md:text-5xl">
                Practical digital services for focused business growth.
              </h2>
            </div>
            <Link href="/services" className="focus-ring inline-flex items-center gap-2 font-semibold text-primary-blue">
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Reveal key={service.title}>
                <Link href={service.href} className="card-premium group flex h-full flex-col p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient text-white shadow-[0_12px_28px_rgba(3,66,197,0.25)]">
                    <service.icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-deep-navy">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-dark-text/70">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-blue">
                    Learn more
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Products (stacking cards) ---------- */}
      <StackingCards products={products} />

      {/* ---------- Why InfoBytes ---------- */}
      <section className="page-x aurora bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="eyebrow">Why InfoBytes Nepal</span>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">
              A technology partner that thinks beyond the build.
            </h2>
            <p className="mt-5 text-base leading-8 text-dark-text/72 md:text-lg">
              We help growing teams in Nepal move from scattered tools and manual work toward clean, maintainable digital systems
              that are actually used every day.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <Reveal key={item.title}>
                <div className="card-premium h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-primary-blue">
                    <item.icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-deep-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dark-text/70">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="page-x bg-soft-blue/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">A clear path from idea to improvement.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.title}>
                <div className="card-premium h-full p-6">
                  <p className="text-sm font-semibold text-primary-blue">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-xl font-semibold text-deep-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dark-text/70">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Tech stack ---------- */}
      <section className="bg-white py-16 md:py-20">
        <div className="page-x mx-auto max-w-7xl text-center">
          <span className="eyebrow justify-center">Modern stack</span>
          <h2 className="mt-3 text-2xl font-semibold text-deep-navy md:text-4xl">Built on a fast, reliable, modern foundation.</h2>
        </div>
        <div className="marquee-mask mt-10 overflow-hidden">
          <div className="marquee-track gap-5 px-6 md:gap-7">
            {[...techStack, ...techStack].map((src, index) => (
              <div
                key={`tech-${index}`}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary-blue/10 bg-white shadow-[0_10px_28px_rgba(4,18,63,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(4,18,63,0.1)] md:h-[4.5rem] md:w-[4.5rem]"
              >
                <CmsImage src={src} alt="InfoBytes Nepal technology stack" width={64} height={64} className="h-9 w-9 object-contain md:h-10 md:w-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Explore by service (internal links) ---------- */}
      <section className="page-x bg-soft-green/30 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Explore by need</span>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Find the right starting point.</h2>
            <p className="mt-5 leading-8 text-dark-text/72">
              Dedicated pages for the services and questions businesses in Nepal search for most.
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring group flex items-center justify-between gap-3 rounded-2xl border border-primary-blue/10 bg-white/80 px-5 py-4 text-sm font-semibold text-deep-navy shadow-[0_10px_28px_rgba(4,18,63,0.04)] transition hover:border-primary-green/40 hover:bg-white"
              >
                {link.label}
                <ArrowRight size={16} className="shrink-0 text-primary-blue transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="page-x bg-white pb-24 pt-4">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] brand-gradient px-7 py-14 text-center text-white shadow-[0_30px_90px_rgba(3,66,197,0.28)] md:px-12 md:py-16">
          <div className="grid-texture pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck size={14} /> Let&apos;s build it right
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Ready to simplify how your business runs?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85 md:text-lg">
              Share your requirement or current workflow, and we&apos;ll help you find a focused, realistic digital direction.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary-blue transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
              >
                Contact InfoBytes Nepal
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
