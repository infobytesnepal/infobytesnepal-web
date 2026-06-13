import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { SeoLandingPage as SeoLandingPageData } from "@/lib/seo-landing-pages";
import { getSiteUrl } from "@/lib/utils";

function buildSchemas(page: SeoLandingPageData) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}${page.path}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.heroTitle,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.heroTitle,
      serviceType: page.keyword,
      description: page.metaDescription,
      areaServed: {
        "@type": "Country",
        name: "Nepal",
      },
      provider: {
        "@type": "Organization",
        name: "InfoBytes Nepal",
        url: siteUrl,
        email: "info@infobytesnepal.com",
        telephone: "+977-9843468715",
      },
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export default function SeoLandingPage({ page }: { page: SeoLandingPageData }) {
  const schemas = buildSchemas(page);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <main className="bg-white">
        <section className="page-x brand-radial bg-white pb-16 pt-32 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-blue">InfoBytes Nepal Services</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-deep-navy md:text-6xl">{page.heroTitle}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-dark-text/76">{page.heroIntro}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="focus-ring site-button rounded-full px-6 py-3 text-center font-semibold">
                  Discuss Your Requirement
                </Link>
                <Link href="/services" className="focus-ring site-button-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold">
                  View Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="page-x bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <article>
              <p className="text-sm font-semibold uppercase text-primary-blue">Overview</p>
              <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">{page.overview.title}</h2>
              <div className="mt-6 grid gap-5 text-base leading-8 text-dark-text/74">
                {page.overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
            <aside className="rounded-[28px] border border-primary-blue/12 bg-soft-blue/45 p-6 shadow-[0_24px_70px_rgba(4,18,63,0.06)]">
              <h2 className="text-2xl font-semibold text-deep-navy">Common problems for Nepali businesses</h2>
              <div className="mt-6 grid gap-4">
                {page.problems.map((problem) => (
                  <div key={problem} className="flex gap-3 text-sm leading-6 text-dark-text/74">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary-green">
                      <Check size={15} />
                    </span>
                    <p>{problem}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="page-x bg-soft-blue/35 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase text-primary-blue">How We Help</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-deep-navy md:text-5xl">
              How InfoBytes Nepal solves these challenges
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {page.solutions.map((solution) => (
                <article key={solution} className="rounded-[24px] border border-primary-blue/10 bg-white/82 p-5 shadow-[0_18px_55px_rgba(4,18,63,0.05)]">
                  <p className="leading-7 text-dark-text/74">{solution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-x bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase text-primary-blue">Included</p>
                <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Services and features</h2>
                <p className="mt-5 leading-7 text-dark-text/72">
                  These areas can be shaped into a focused scope depending on your team, budget, timeline, and current workflow.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {page.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl border border-primary-blue/10 bg-white px-4 py-3 text-sm font-semibold text-deep-navy shadow-[0_12px_28px_rgba(4,18,63,0.04)]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-green text-primary-green">
                      <Check size={15} strokeWidth={2.4} />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-x bg-soft-green/35 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase text-primary-blue">Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">A practical process from idea to improvement</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {page.process.map((step, index) => (
                <article key={step.title} className="rounded-[24px] border border-primary-blue/10 bg-white/86 p-5 shadow-[0_18px_55px_rgba(4,18,63,0.05)]">
                  <p className="text-sm font-semibold text-primary-blue">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-xl font-semibold text-deep-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dark-text/70">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-x bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <article>
              <p className="text-sm font-semibold uppercase text-primary-blue">Why InfoBytes Nepal</p>
              <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Built for practical teams in Nepal</h2>
              <div className="mt-7 grid gap-4">
                {page.reasons.map((reason) => (
                  <div key={reason} className="flex gap-3 leading-7 text-dark-text/74">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-green text-primary-green">
                      <Check size={15} strokeWidth={2.4} />
                    </span>
                    <p>{reason}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="rounded-[28px] border border-primary-blue/12 bg-soft-blue/45 p-6 shadow-[0_24px_70px_rgba(4,18,63,0.06)]">
              <h2 className="text-2xl font-semibold text-deep-navy">Related services and products</h2>
              <div className="mt-6 grid gap-4">
                {page.related.map((item) => (
                  <Link key={item.href} href={item.href} className="group rounded-2xl border border-primary-blue/10 bg-white/86 p-4 transition hover:border-primary-green/40">
                    <span className="inline-flex items-center gap-2 font-semibold text-primary-blue">
                      {item.label}
                      <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                    </span>
                    <p className="mt-2 text-sm leading-6 text-dark-text/68">{item.text}</p>
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="page-x bg-soft-blue/35 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase text-primary-blue">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Common questions</h2>
            <div className="mt-8 grid gap-4">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[24px] border border-primary-blue/10 bg-white/86 p-5 shadow-[0_18px_55px_rgba(4,18,63,0.05)]">
                  <h3 className="text-lg font-semibold text-deep-navy">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-dark-text/72">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-x bg-white pb-20 pt-16">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-primary-blue/10 bg-gradient-to-br from-soft-blue/70 via-white to-soft-green/60 p-7 text-center shadow-[0_22px_70px_rgba(4,18,63,0.07)] md:p-9">
            <p className="text-sm font-semibold uppercase text-primary-blue">Ready to discuss?</p>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-4xl">Build the next practical step with InfoBytes Nepal.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-dark-text/70">
              Share your requirement, current workflow, or growth goal. We will help you identify a focused and realistic digital direction.
            </p>
            <Link href="/contact" className="focus-ring site-button-gradient mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)]">
              Contact InfoBytes Nepal
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
