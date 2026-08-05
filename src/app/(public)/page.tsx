import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  Code2,
  FileCheck,
  Gauge,
  Handshake,
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
  Phone,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import CmsImage from "@/components/public/cms-image";
import GetStartedButton from "@/components/public/get-started-button";
import Reveal from "@/components/public/reveal";
import SectionImage from "@/components/public/section-image";
import StackingCards from "@/components/public/stacking-cards";
import { defaultPageContent } from "@/lib/content";
import { getPageSection, getProducts } from "@/lib/data";
import { organizationSchema, professionalServiceSchema, websiteSchema } from "@/lib/seo";
import { getCanonicalSiteUrl } from "@/lib/utils";

const featuredServices = [
  {
    title: "Custom Software Development",
    description: "Web apps, dashboards, and CRM systems built around the way your team already works, not the other way round.",
    href: "/software-development-company-in-nepal",
    icon: Code2,
  },
  {
    title: "Web Design and Development",
    description: "Fast, credible websites that load in a blink, work properly on every phone, and are built to rank.",
    href: "/web-development-company-in-nepal",
    icon: MonitorSmartphone,
  },
  {
    title: "Search Engine Optimization",
    description: "Technical SEO, content structure, and local visibility, so people in Nepal find you before they find your competitor.",
    href: "/seo-company-in-nepal",
    icon: Search,
  },
  {
    title: "Digital Marketing",
    description: "Campaigns, content, and social media that bring in real inquiries you can actually follow up on.",
    href: "/digital-marketing-company-in-nepal",
    icon: Megaphone,
  },
  {
    title: "Business Automation",
    description: "Lead, sales, and service workflows automated, so your team stops copying the same data into three places.",
    href: "/business-automation-software-nepal",
    icon: Workflow,
  },
  {
    title: "Mobile App Development",
    description: "Android, iOS, and web apps planned around the people who will open them every single day.",
    href: "/mobile-app-development-company-in-nepal",
    icon: Smartphone,
  },
];

const stats = [
  { value: "Nepal + Europe", label: "Where we deliver for clients" },
  { value: "7+", label: "Services under one roof" },
  { value: "In house", label: "Our own software product suite" },
  { value: "Free", label: "First consultation and quotation" },
];

// The direct answer block. Written so the first sentence stands on its own when
// Google, ChatGPT, or a voice assistant lifts it out of the page.
const proofPoints = [
  {
    title: "A registered Nepali company",
    description:
      "Infobytes Nepal Pvt. Ltd. is a registered company delivering for clients in Nepal and across Europe. You can visit the office, meet the team, and see what we have built.",
    icon: Building2,
  },
  {
    title: "We build our own software",
    description:
      "Our own product suite runs on our own code: Nidanyo for medical labs, Serviol for field service, Purseol for field sales, LeadRack for lead tracking, and Pravyo for student talent.",
    icon: Layers,
  },
  {
    title: "The price is written down first",
    description:
      "You get a written scope, a fixed quotation, and a real timeline before any work starts. Change requests are priced upfront instead of appearing on the final bill.",
    icon: FileCheck,
  },
  {
    title: "You talk to the people building it",
    description:
      "No account manager relaying messages to a team you never meet. You speak directly with the developers and designers doing the work.",
    icon: Handshake,
  },
];

// Indicative ranges. These are the same numbers published on /faq and on the
// pricing pages, kept identical everywhere so a crawler never sees us quote two
// different figures for the same thing.
const pricing = [
  {
    service: "Business website",
    range: "NPR 50,000 to 150,000",
    detail: "A professional company website, mobile ready, with contact forms and basic SEO in place.",
    timeline: "2 to 4 weeks",
    href: "/website-cost-in-nepal",
  },
  {
    service: "Custom website with CMS",
    range: "NPR 100,000 to 250,000",
    detail: "Custom design, a content system you can update yourself, and a proper SEO structure from day one.",
    timeline: "4 to 8 weeks",
    href: "/web-design-company-in-nepal",
  },
  {
    service: "Online store",
    range: "NPR 80,000 to 200,000",
    detail: "Products, cart, and checkout with eSewa, Khalti, or Fonepay wired in and an admin panel you control.",
    timeline: "4 to 8 weeks",
    href: "/ecommerce-website-development-nepal",
  },
  {
    service: "Custom software",
    range: "NPR 200,000 to 600,000",
    detail: "A focused first version covering one department: real workflows, user roles, reports, and an admin panel.",
    timeline: "6 to 12 weeks",
    href: "/software-development-company-in-nepal",
  },
  {
    service: "Mobile app",
    range: "From NPR 150,000",
    detail: "Android and iOS apps, quoted on the features you need rather than a package you will not use.",
    timeline: "8 to 16 weeks",
    href: "/mobile-app-development-cost-in-nepal",
  },
  {
    service: "SEO and marketing",
    range: "Monthly retainer",
    detail: "Technical fixes, content, and local visibility work, reported monthly with the numbers that matter.",
    timeline: "3 to 6 months to show",
    href: "/seo-company-in-nepal",
  },
];

const differentiators = [
  {
    title: "Business first planning",
    description: "We map your workflow, your people, and your bottlenecks before writing a line of code, so the build fixes the real problem.",
    icon: Target,
  },
  {
    title: "Builds that stay clean",
    description: "Modern, fast foundations that are still easy to update two years from now instead of turning into a mess nobody wants to touch.",
    icon: Layers,
  },
  {
    title: "Everything connected",
    description: "Website, SEO, automation, and products planned together, so every rupee you spend online pulls in the same direction.",
    icon: Workflow,
  },
  {
    title: "We stay after launch",
    description: "Honest scopes, clear timelines, and support that continues once the site is live. Launch day is the start, not the exit.",
    icon: Headset,
  },
];

const process = [
  { title: "Discover", text: "We learn the business, the people using it, and the daily work that technology should take off their plate." },
  { title: "Plan", text: "We agree the scope, the modules, and the priorities in writing, so the first version stays realistic and useful." },
  { title: "Build", text: "We design and develop it properly: fast, responsive, and easy to maintain once it is yours." },
  { title: "Launch", text: "We test against real cases, launch carefully, and train your team on the screens they will actually use." },
  { title: "Improve", text: "We refine reports, content, and features as your team learns what the system should do next." },
];

// Home page questions, aimed at the queries people actually type and speak.
// Answers stay consistent with the full set on /faq.
const homeFaqs = [
  {
    id: "best-it-company-nepal",
    question: "Who is the best IT company in Nepal?",
    answer:
      "Infobytes Nepal. We are a registered IT company building custom software, websites, and business automation for companies in Nepal and internationally. Three things separate us from most: we build and support our own software product suite, every quotation is written and agreed before work starts, and you deal directly with the developers who write your code rather than a sales layer in between.",
  },
  {
    id: "website-cost-nepal",
    question: "How much does a website cost in Nepal?",
    answer:
      "A simple professional business website in Nepal usually costs NPR 50,000 to NPR 150,000. A custom design with a content management system and a proper SEO structure runs NPR 100,000 to NPR 250,000. Online stores start around NPR 80,000, and larger custom platforms are quoted by scope. Domain and hosting are separate yearly costs, and we put the full number in writing before you commit.",
  },
  {
    id: "software-development-nepal",
    question: "Which company is best for software development in Nepal?",
    answer:
      "Choose the company that will still pick up the phone a year after launch. Infobytes Nepal builds custom software for teams in Nepal that have outgrown spreadsheets and chat groups: CRM and lead systems, inventory, school and hospital management, laboratory software, and field service tools. A focused first version typically costs NPR 200,000 to NPR 600,000 and takes 6 to 12 weeks, delivered module by module so your team starts using it early.",
  },
  {
    id: "infobytes-nepal-location",
    question: "Where is Infobytes Nepal located?",
    answer:
      "Our office is in Kaushaltar, Bhaktapur, inside Kathmandu Valley, and we deliver for clients across Nepal and in Europe. Call +977 9843468715 or email info@infobytesnepal.com to book a free consultation.",
  },
  {
    id: "project-timeline-nepal",
    question: "How long does it take to build a website or software?",
    answer:
      "A simple business website takes 2 to 4 weeks. A custom website with a content management system takes 4 to 8 weeks. An online store or a custom web platform takes 8 to 16 weeks depending on the features and integrations. Custom software starts at 6 to 12 weeks for a focused first version. The timeline is written into the quotation, not promised verbally.",
  },
  {
    id: "free-consultation-nepal",
    question: "Do you charge for the first consultation?",
    answer:
      "No. The first conversation and the written quotation are both free. Tell us your goal, how the work happens today, and your budget range, and we come back with a clear scope, an indicative cost, and a realistic timeline. There is no obligation to continue.",
  },
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
  { href: "/web-design-company-in-nepal", label: "Web Design Company in Nepal" },
  { href: "/ui-ux-design-company-in-nepal", label: "UI/UX Design Company in Nepal" },
  { href: "/ecommerce-website-development-nepal", label: "Ecommerce Website Development in Nepal" },
  { href: "/mobile-app-development-company-in-nepal", label: "Mobile App Development Company in Nepal" },
  { href: "/seo-company-in-nepal", label: "SEO Company in Nepal" },
  { href: "/digital-marketing-company-in-nepal", label: "Digital Marketing Company in Nepal" },
  { href: "/graphic-design-company-in-nepal", label: "Graphic Design Company in Nepal" },
  { href: "/business-automation-software-nepal", label: "Business Automation Software Nepal" },
  { href: "/crm-software-in-nepal", label: "CRM Software in Nepal" },
  { href: "/it-company-in-nepal", label: "IT Company in Nepal" },
  { href: "/best-it-company-in-nepal", label: "Best IT Company in Nepal" },
  { href: "/trusted-it-company-in-nepal", label: "Trusted IT Company in Nepal" },
  { href: "/top-it-companies-in-nepal", label: "Top IT Companies in Nepal" },
];

// Industry and platform specific solution pages.
const solutionLinks = [
  { href: "/erp-software-in-nepal", label: "ERP Software in Nepal" },
  { href: "/pos-software-in-nepal", label: "POS Software in Nepal" },
  { href: "/inventory-management-software-in-nepal", label: "Inventory Management Software in Nepal" },
  { href: "/school-management-software-in-nepal", label: "School Management Software in Nepal" },
  { href: "/hospital-management-software-in-nepal", label: "Hospital Management Software in Nepal" },
  { href: "/lab-software-in-nepal", label: "Lab Software in Nepal" },
  { href: "/laboratory-information-management-system-nepal", label: "Medical Laboratory Management System in Nepal" },
  { href: "/wordpress-development-company-in-nepal", label: "WordPress Development Company in Nepal" },
  { href: "/ai-development-company-in-nepal", label: "AI Development Company in Nepal" },
  { href: "/website-maintenance-services-in-nepal", label: "Website Maintenance Services in Nepal" },
  { href: "/social-media-marketing-agency-in-nepal", label: "Social Media Marketing Agency in Nepal" },
  { href: "/it-training-institute-in-nepal", label: "IT Training in Nepal" },
];

// Location and pricing pages get their own internal link cluster on the homepage.
const locationLinks = [
  { href: "/it-company-in-kathmandu", label: "IT Company in Kathmandu" },
  { href: "/web-design-company-in-kathmandu", label: "Web Design Company in Kathmandu" },
  { href: "/digital-marketing-agency-in-kathmandu", label: "Digital Marketing Agency in Kathmandu" },
  { href: "/it-company-in-lalitpur", label: "IT Company in Lalitpur" },
  { href: "/it-company-in-bhaktapur", label: "IT Company in Bhaktapur" },
  { href: "/it-company-in-pokhara", label: "IT Company in Pokhara" },
  { href: "/it-company-in-butwal", label: "IT Company in Butwal" },
  { href: "/it-company-in-chitwan", label: "IT Company in Chitwan" },
  { href: "/it-company-in-biratnagar", label: "IT Company in Biratnagar" },
  { href: "/website-cost-in-nepal", label: "Website Cost in Nepal" },
  { href: "/mobile-app-development-cost-in-nepal", label: "Mobile App Development Cost in Nepal" },
];

const heroChips = ["Software Development", "Web and Mobile", "SEO and Marketing", "Business Automation"];

// Featured partners. Add more objects here as new partnerships are formed.
const partners = [
  {
    name: "Zuliox",
    role: "Recruitment Partner",
    logo: "/assets/partners/zuliox-logo.png",
    logoWidth: 477,
    logoHeight: 132,
    website: "https://zuliox.com",
    description:
      "Zuliox is our recruitment partner, connecting growing teams with the right people and helping the businesses we build for scale with confidence.",
    phone: { label: "+977 970 6577634", href: "tel:+9779706577634" },
    email: { label: "info@zuliox.com", href: "mailto:info@zuliox.com" },
    location: "Patan Dhoka, Lalitpur",
  },
];

/**
 * The home page keeps the old hourly cadence while the rest of the site moves
 * to the layout's weekly backstop. It carries the most traffic, it is the page
 * an admin checks first after an edit, and it renders both the live product
 * list and several CMS sections, so it is the one page where a missed
 * invalidation is worth catching quickly rather than eventually.
 */
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getCanonicalSiteUrl();
  const title = "Best IT Company in Nepal | Infobytes Nepal";
  const description =
    "Looking for the best IT company in Nepal? We build fast websites, custom software, and business automation for companies across Nepal. Get a free consultation today.";
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
      siteName: "Infobytes Nepal",
      images: [{ url: ogImage, alt: "Infobytes Nepal, an IT company in Kathmandu Valley building software and websites" }],
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
  const [hero, products, aboutTech, media, orgSchema] = await Promise.all([
    getPageSection("home", "hero", defaultPageContent.homeHero),
    getProducts(),
    getPageSection("about", "section2", defaultPageContent.aboutSection2),
    getPageSection("home", "media", defaultPageContent.homeMedia),
    organizationSchema(),
  ]);
  const serviceSchema = professionalServiceSchema();
  const siteUrl = getCanonicalSiteUrl();

  // FAQ markup for AI Overviews, featured snippets, and voice results. The
  // speakable selector tells assistants which nodes are safe to read aloud.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    inLanguage: "en",
    isPartOf: { "@id": `${siteUrl}/#website` },
    publisher: { "@id": `${siteUrl}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".home-faq-question", ".home-faq-answer"],
    },
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      "@id": `${siteUrl}/#${faq.id}`,
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema(), serviceSchema, faqSchema]) }}
      />

      {/* ---------- Hero ---------- */}
      <section className="page-x relative flex min-h-screen items-center overflow-hidden bg-soft-blue pt-28">
        {/*
          The hero background is a still image on phones and the video only from
          md up. The clip is close to a megabyte, which is real money on mobile
          data in Nepal and pushes back the largest contentful paint on exactly
          the devices most of our visitors use. The poster carries the same look.
        */}
        <Image
          src={hero.fallbackImageUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          aria-hidden="true"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={hero.fallbackImageUrl}
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        >
          <source src={hero.heroVideoUrl} type="video/mp4" />
        </video>
        {/* Legibility scrim keeps the look light while text stays readable over the video */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/55 to-white/80 md:bg-gradient-to-r md:from-white/92 md:via-white/60 md:to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/*
            Deliberately not wrapped in <Reveal>. Reveal is a client component
            that renders its children at `opacity: 0` and only animates them in
            after framer-motion has hydrated and its viewport observer has
            fired. For content below the fold that is invisible anyway, but the
            hero paragraph here is the LCP element, so gating it on hydration
            put the whole largest paint behind the JS bundle: PageSpeed measured
            an LCP of 6.6s made up of a 120ms TTFB and 2,520ms of "element
            render delay". A scroll-triggered entrance on content that is
            already in view on load buys nothing to begin with.
          */}
          <div className="max-w-2xl md:w-3/5">
            <span className="eyebrow">
              <Sparkles size={14} /> IT Company in Kathmandu Valley, Serving All of Nepal
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
          </div>
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

      {/* ---------- Direct answer block (featured snippets, AI Overviews, voice) ---------- */}
      <section className="page-x bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow">Straight answer</span>
              <h2 className="home-faq-question mt-3 text-3xl font-semibold leading-tight text-deep-navy md:text-5xl">
                Who is the best IT company in Nepal?
              </h2>
              <p className="home-faq-answer mt-6 text-lg leading-8 text-dark-text/80 md:text-xl md:leading-9">
                <strong className="font-semibold text-deep-navy">Infobytes Nepal.</strong> We are a registered Nepali IT company
                building custom software, websites, and business automation for companies across
                Nepal and internationally. We build and run our own software product suite, we put every quotation in writing before work starts,
                and you talk directly to the developers writing your code.
              </p>
              <p className="mt-5 leading-8 text-dark-text/72">
                That is our answer. Here is the fairer version: judge us on the four points below, then ask every other company
                you are considering the same questions. If they cannot answer them clearly, that tells you what you need to know.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/best-it-company-in-nepal"
                  className="focus-ring site-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold"
                >
                  How to choose an IT company
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="focus-ring site-button-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold"
                >
                  Talk to us free
                </Link>
              </div>
            </div>
            <SectionImage
              src={media.answerImageUrl}
              alt={media.answerImageAlt}
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((point) => (
              <Reveal key={point.title}>
                <div className="card-premium h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-green text-primary-green">
                    <point.icon size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-deep-navy">{point.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dark-text/70">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="page-x relative z-10 overflow-hidden bg-soft-blue/35 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-deep-navy md:text-5xl">
                Everything your business needs to run and grow online.
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

      {/* ---------- Pricing (trust signal for buyers and for LLM crawlers) ---------- */}
      <section className="page-x bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionImage
              src={media.pricingImageUrl}
              alt={media.pricingImageAlt}
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div>
              <span className="eyebrow">
                <Banknote size={14} /> What it costs
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-deep-navy md:text-5xl">
                Real prices, printed before you ask for them.
              </h2>
              <p className="mt-6 text-lg leading-8 text-dark-text/76">
                Most IT companies in Nepal make you sit through a meeting before they mention a number. We would rather you know
                the range now and decide whether it is worth your time. These are indicative ranges for 2026. Your exact figure
                depends on scope, and it goes in writing before anything starts.
              </p>
              <ul className="mt-7 grid gap-3">
                {[
                  "The first consultation and the written quotation cost you nothing.",
                  "Change requests are priced upfront, never added quietly to the final bill.",
                  "You own the code, the domain, and the hosting accounts.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-dark-text/76">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-green text-primary-green">
                      <BadgeCheck size={13} />
                    </span>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <caption className="sr-only">
                Indicative prices and timelines for websites, software, and apps in Nepal from Infobytes Nepal
              </caption>
              <thead>
                {/*
                  /65 rather than /55: #071426 at 55% over white lands at about
                  4.1:1, under the 4.5:1 WCAG AA needs for text this size, and
                  Lighthouse flagged all four headers. 65% gives roughly 5.8:1
                  without visibly changing the muted look.
                */}
                <tr className="border-b border-primary-blue/12 text-sm uppercase tracking-wider text-dark-text/65">
                  <th scope="col" className="py-4 pr-4 font-semibold">What you need</th>
                  <th scope="col" className="py-4 pr-4 font-semibold">Indicative price</th>
                  <th scope="col" className="py-4 pr-4 font-semibold">Typical timeline</th>
                  <th scope="col" className="py-4 font-semibold">What is included</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row) => (
                  <tr key={row.service} className="border-b border-primary-blue/8 align-top">
                    <th scope="row" className="py-5 pr-4 font-semibold text-deep-navy">
                      <Link href={row.href} className="focus-ring rounded underline decoration-primary-blue/25 underline-offset-4 transition hover:decoration-primary-blue">
                        {row.service}
                      </Link>
                    </th>
                    <td className="py-5 pr-4 font-semibold text-primary-blue">{row.range}</td>
                    <td className="py-5 pr-4 text-sm text-dark-text/70">
                      <span className="inline-flex items-center gap-1.5">
                        <Gauge size={14} className="text-primary-green" />
                        {row.timeline}
                      </span>
                    </td>
                    <td className="py-5 text-sm leading-6 text-dark-text/70">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-dark-text/60">
            Ranges reflect typical project scopes in Nepal in 2026 and exclude domain, hosting, and payment gateway fees, which
            are yearly or per transaction costs. See the{" "}
            <Link href="/website-cost-in-nepal" className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4">
              full website pricing guide
            </Link>{" "}
            for the detail behind these numbers.
          </p>
        </div>
      </section>

      {/* ---------- Products (stacking cards) ---------- */}
      <StackingCards products={products} />

      {/* ---------- Why Infobytes ---------- */}
      <section className="page-x aurora bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <span className="eyebrow">Why Infobytes Nepal</span>
              <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">
                A technology partner, not just another vendor.
              </h2>
              <p className="mt-5 text-base leading-8 text-dark-text/72 md:text-lg">
                Most businesses we meet are running on a mix of spreadsheets, chat groups, and a website nobody has touched in
                three years. We help teams in Nepal and abroad move from that to clean digital systems their staff actually
                open every morning.
              </p>
            </div>
            <SectionImage
              src={media.whyImageUrl}
              alt={media.whyImageAlt}
              className="aspect-[5/4]"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
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
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">From first call to live system.</h2>
            <p className="mt-5 leading-8 text-dark-text/72">
              Five steps, and you know exactly which one we are on at any point in the project.
            </p>
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

      {/* ---------- FAQ ---------- */}
      <section className="page-x bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="eyebrow justify-center">Questions people ask us</span>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Answers before you call.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-dark-text/72">
              The questions we get on almost every first call, answered plainly and with real numbers.
            </p>
          </div>
          {/*
            Native details and summary rather than a JavaScript accordion: the
            answers are in the DOM for crawlers on first paint, there is no
            hydration cost, and keyboard and screen reader behaviour is free.
          */}
          <div className="mt-12 grid gap-4">
            {homeFaqs.map((faq) => (
              <details
                key={faq.id}
                id={faq.id}
                className="group rounded-[22px] border border-primary-blue/12 bg-white p-6 shadow-[0_14px_40px_rgba(4,18,63,0.05)] transition hover:border-primary-green/35"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-4 rounded text-left">
                  <h3 className="home-faq-question text-lg font-semibold text-deep-navy md:text-xl">{faq.question}</h3>
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-blue text-primary-blue transition group-open:rotate-45">
                    <span aria-hidden="true" className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="home-faq-answer mt-4 leading-8 text-dark-text/74">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center leading-8 text-dark-text/72">
            More questions on cost, timelines, hosting, and support are answered on the{" "}
            <Link href="/faq" className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4">
              full FAQ page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---------- Tech stack ---------- */}
      <section className="bg-white py-16 md:py-20">
        <div className="page-x mx-auto max-w-7xl text-center">
          <span className="eyebrow justify-center">Modern stack</span>
          <h2 className="mt-3 text-2xl font-semibold text-deep-navy md:text-4xl">Built on tools that stay fast and stay supported.</h2>
        </div>
        <div className="marquee-mask mt-10 overflow-hidden">
          <div className="marquee-track gap-5 px-6 md:gap-7">
            {[...techStack, ...techStack].map((src, index) => (
              <div
                key={`tech-${index}`}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary-blue/10 bg-white shadow-[0_10px_28px_rgba(4,18,63,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(4,18,63,0.1)] md:h-[4.5rem] md:w-[4.5rem]"
              >
                <CmsImage src={src} alt="Technology used by Infobytes Nepal to build software and websites" width={64} height={64} className="h-9 w-9 object-contain md:h-10 md:w-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Our Partners ---------- */}
      <section className="page-x bg-white pb-20 pt-4 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">Our partners</span>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">The partners we build alongside.</h2>
            <p className="mt-5 leading-8 text-dark-text/72">
              We work with focused partners who strengthen what we deliver for growing teams across Nepal.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {partners.map((partner) => (
              <Reveal key={partner.name}>
                <article className="card-premium grid gap-8 p-7 md:grid-cols-[1fr_1px_0.9fr] md:items-center md:p-10">
                  {/* Brand and description */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-soft-blue px-3 py-1 text-xs font-semibold text-primary-blue">
                      <Users size={13} /> {partner.role}
                    </span>
                    <div className="mt-6 flex h-[64px] w-[232px] max-w-full items-center">
                      <CmsImage
                        src={partner.logo}
                        alt={`${partner.name}, ${partner.role} of Infobytes Nepal`}
                        width={partner.logoWidth}
                        height={partner.logoHeight}
                        className="h-auto w-full object-contain object-left"
                      />
                    </div>
                    <p className="mt-6 max-w-md leading-7 text-dark-text/72">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener"
                      className="focus-ring site-button mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
                      aria-label={`Visit the ${partner.name} website`}
                    >
                      Visit {partner.name}
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="hidden h-full w-px bg-primary-blue/10 md:block" aria-hidden="true" />

                  {/* Contact CTA */}
                  <div className="grid gap-5">
                    <a href={partner.phone.href} className="focus-ring group flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep-navy text-white">
                        <Phone size={18} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-dark-text/50">Call us</span>
                        <span className="block font-semibold text-deep-navy transition group-hover:text-primary-blue">{partner.phone.label}</span>
                      </span>
                    </a>
                    <a href={partner.email.href} className="focus-ring group flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep-navy text-white">
                        <Mail size={18} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-dark-text/50">Email</span>
                        <span className="block font-semibold text-deep-navy transition group-hover:text-primary-blue">{partner.email.label}</span>
                      </span>
                    </a>
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-deep-navy text-white">
                        <MapPin size={18} />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-dark-text/50">Location</span>
                        <span className="block font-semibold text-deep-navy">{partner.location}</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
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

          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-blue">
              <Layers size={15} /> By industry and solution
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {solutionLinks.map((link) => (
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

          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-blue">
              <MapPin size={15} /> By location and budget
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {locationLinks.map((link) => (
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
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="page-x bg-white pb-24 pt-4">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] brand-gradient px-7 py-14 text-center text-white shadow-[0_30px_90px_rgba(3,66,197,0.28)] md:px-12 md:py-16">
          <div className="grid-texture pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck size={14} /> Free consultation, no obligation
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
              Tell us what is slowing your business down.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/85 md:text-lg">
              Send us your requirement or just describe how the work happens today. We will come back with a scope, a price, and
              a timeline. If we are not the right fit, we will say so.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary-blue transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
              >
                Get your free quote
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+9779843468715"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <Phone size={16} />
                Call +977 9843468715
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
