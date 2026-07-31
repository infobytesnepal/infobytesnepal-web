import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Breadcrumbs, { breadcrumbSchema } from "@/components/public/breadcrumbs";
import InternalLinkHub from "@/components/public/internal-links";
import { anchorFor, getBreadcrumbs, getCluster, getLinkNode, priorityPaths } from "@/lib/internal-links";
import type { SeoLandingPage as SeoLandingPageData } from "@/lib/seo-landing-pages";
import { getCanonicalSiteUrl } from "@/lib/utils";

function buildSchemas(page: SeoLandingPageData, crumbs: ReturnType<typeof getBreadcrumbs>) {
  const siteUrl = getCanonicalSiteUrl();
  const pageUrl = `${siteUrl}${page.path}`;
  return [
    breadcrumbSchema(crumbs),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.heroTitle,
      serviceType: page.keyword,
      description: page.metaDescription,
      areaServed: {
        "@type": "Country",
        name: "Nepal",
      },
      provider: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Infobytes Nepal",
        url: siteUrl,
        email: "info@infobytesnepal.com",
        telephone: "+977-9843468715",
      },
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
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

/**
 * Two or three contextual links placed inside the article body, just after the
 * overview. In-content links sit higher in the page and read as editorial
 * rather than as a navigation block, which is why they are kept separate from
 * the hub section at the bottom.
 */
function contextualLinksFor(path: string) {
  const cluster = getCluster(path);
  const candidates = [
    ...(cluster && cluster.pillar.href !== path ? [cluster.pillar.href] : []),
    ...(cluster?.bridges ?? []),
    ...priorityPaths,
  ];

  const seen = new Set<string>([path]);
  const picked: Array<{ href: string; anchor: string }> = [];

  for (const href of candidates) {
    if (seen.has(href)) continue;
    const target = getLinkNode(href);
    if (!target) continue;
    seen.add(href);
    picked.push({ href, anchor: anchorFor(path, target) });
    if (picked.length === 3) break;
  }

  return picked;
}

export default function SeoLandingPage({ page }: { page: SeoLandingPageData }) {
  const crumbs = getBreadcrumbs(page.path, page.heroTitle);
  const schemas = buildSchemas(page, crumbs);
  const contextual = contextualLinksFor(page.path);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
      <main className="bg-white">
        <section className="page-x brand-radial bg-white pb-16 pt-32 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs crumbs={crumbs} />
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-primary-blue">Infobytes Nepal Services</p>
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
              {contextual.length > 0 && (
                <p className="mt-6 border-l-2 border-primary-green/50 pl-4 text-base leading-8 text-dark-text/72">
                  Worth reading alongside this:{" "}
                  {contextual.map((link, index) => (
                    <span key={link.href}>
                      <Link href={link.href} className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4 transition hover:decoration-primary-blue">
                        {link.anchor}
                      </Link>
                      {index < contextual.length - 2 ? ", " : index === contextual.length - 2 ? ", and " : "."}
                    </span>
                  ))}
                </p>
              )}
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
              How Infobytes Nepal solves these challenges
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
              <p className="text-sm font-semibold uppercase text-primary-blue">Why Infobytes Nepal</p>
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

        <InternalLinkHub sourcePath={page.path} className="page-x bg-white py-16 md:py-20" />

        <section className="page-x bg-white pb-20 pt-16">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-primary-blue/10 bg-gradient-to-br from-soft-blue/70 via-white to-soft-green/60 p-7 text-center shadow-[0_22px_70px_rgba(4,18,63,0.07)] md:p-9">
            <p className="text-sm font-semibold uppercase text-primary-blue">Ready to discuss?</p>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-4xl">Build the next practical step with Infobytes Nepal.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-dark-text/70">
              Share your requirement, current workflow, or growth goal. We will help you identify a focused and realistic digital direction.
            </p>
            <Link href="/contact" className="focus-ring site-button-gradient mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)]">
              Contact Infobytes Nepal
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
