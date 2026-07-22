import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Plus } from "lucide-react";
import { basicPageMetadata } from "@/lib/seo";
import { allFaqs, faqAnswerText, faqGroups } from "@/lib/faqs";
import { getSiteUrl } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return basicPageMetadata({
    route: "/faq",
    title: "FAQ: Website Cost, IT Companies & Software in Nepal | Infobytes Nepal",
    description:
      "How much does a website cost in Nepal in 2026? How do you choose an IT company? Real price ranges and straight answers on websites, apps, custom software, SEO, and support in Nepal.",
    ogTitle: "Frequently Asked Questions | Infobytes Nepal",
    ogDescription:
      "Real price ranges and practical answers on website cost, app cost, custom software, SEO, hosting, and choosing an IT company in Nepal.",
  });
}

export default function FaqPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/faq`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: pageUrl,
      name: "Frequently Asked Questions | Infobytes Nepal",
      description:
        "Answers on website cost in Nepal, choosing an IT company, custom software, mobile apps, SEO, hosting, support, and working with Infobytes Nepal Pvt. Ltd.",
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      about: {
        "@type": "Organization",
        name: "Infobytes Nepal",
        legalName: "Infobytes Nepal Pvt. Ltd.",
        url: siteUrl,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".faq-question", ".faq-answer"],
      },
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        "@id": `${pageUrl}#${faq.id}`,
        name: faq.question,
        url: `${pageUrl}#${faq.id}`,
        acceptedAnswer: {
          "@type": "Answer",
          text: faqAnswerText(faq),
          url: `${pageUrl}#${faq.id}`,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "FAQ", item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-white">
        <section className="page-x brand-radial bg-white pb-10 pt-32 md:pb-12 md:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow justify-center">Frequently asked questions</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-deep-navy md:text-6xl">
              Questions, <span className="text-gradient">answered.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dark-text/74">
              Straight answers on what things cost in Nepal, how to choose an IT company, and what working with
              Infobytes Nepal actually involves — {allFaqs.length} questions, no vague replies.
            </p>
          </div>
        </section>

        <section className="page-x bg-white pb-12">
          <nav aria-label="FAQ categories" className="mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-2">
              {faqGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="focus-ring rounded-full border border-primary-blue/15 bg-white px-4 py-2 text-sm font-semibold text-primary-blue shadow-[0_10px_26px_rgba(4,18,63,0.05)] transition hover:border-primary-green/40 hover:text-deep-navy"
                >
                  {group.title}
                </a>
              ))}
            </div>
          </nav>
        </section>

        <section className="page-x bg-white pb-20">
          <div className="mx-auto max-w-4xl">
            {faqGroups.map((group) => (
              <section key={group.id} id={group.id} className="mt-14 scroll-mt-28 first:mt-0">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-blue">{group.title}</h2>
                <p className="mt-3 max-w-2xl leading-7 text-dark-text/70">{group.intro}</p>
                <div className="mt-6 grid gap-3">
                  {group.faqs.map((faq) => (
                    <details
                      key={faq.id}
                      id={faq.id}
                      className="group scroll-mt-28 rounded-2xl border border-primary-blue/10 bg-white/86 p-5 shadow-[0_12px_36px_rgba(4,18,63,0.04)] transition open:border-primary-green/30 open:shadow-[0_18px_50px_rgba(4,18,63,0.07)]"
                    >
                      <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-4">
                        <h3 className="faq-question text-lg font-semibold text-deep-navy">{faq.question}</h3>
                        <Plus
                          size={20}
                          className="mt-1 shrink-0 text-primary-blue transition-transform duration-300 group-open:rotate-45"
                        />
                      </summary>
                      <div className="faq-answer mt-4 grid gap-4 leading-7 text-dark-text/72">
                        <p>{faq.answer}</p>
                        {faq.more?.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {faq.links ? (
                        <div className="mt-5 flex flex-wrap gap-2 border-t border-primary-blue/10 pt-4">
                          {faq.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-soft-blue/60 px-3 py-1.5 text-sm font-semibold text-primary-blue transition hover:bg-soft-green/70 hover:text-deep-navy"
                            >
                              {link.label}
                              <ArrowRight size={14} />
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="page-x bg-white pb-24">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-primary-blue/10 bg-gradient-to-br from-soft-blue/70 via-white to-soft-green/60 p-8 text-center shadow-[0_22px_70px_rgba(4,18,63,0.07)] md:p-10">
            <h2 className="text-2xl font-semibold text-deep-navy md:text-3xl">Still have a question?</h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-dark-text/70">
              Tell us about your requirement or current workflow, and we&apos;ll come back with a clear scope, an
              indicative cost, and a realistic timeline — free of charge.
            </p>
            <Link
              href="/contact"
              className="focus-ring site-button-gradient mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)]"
            >
              Contact Infobytes Nepal
              <ArrowRight size={16} />
            </Link>
            <p className="mt-6 text-sm leading-6 text-dark-text/60">
              Prices on this page are indicative market ranges in Nepal for 2026 and are shared to help you budget.
              Your exact quote depends on scope. Infobytes Nepal Pvt. Ltd., Kaushaltar, Bhaktapur.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
