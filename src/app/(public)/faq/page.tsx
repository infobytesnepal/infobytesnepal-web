import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Plus } from "lucide-react";
import { basicPageMetadata } from "@/lib/seo";
import { getSiteUrl } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return basicPageMetadata({
    route: "/faq",
    title: "Frequently Asked Questions | InfoBytes Nepal",
    description:
      "Answers to common questions about InfoBytes Nepal — our software development, web design, SEO, digital marketing, automation services, pricing, process, and support.",
    ogTitle: "FAQ | InfoBytes Nepal",
    ogDescription:
      "Common questions about working with InfoBytes Nepal, a software and IT company in Nepal.",
  });
}

const faqGroups = [
  {
    title: "About InfoBytes Nepal",
    faqs: [
      {
        question: "What does InfoBytes Nepal do?",
        answer:
          "InfoBytes Nepal is a Nepal-based IT company offering custom software development, web design and development, SEO, digital marketing, graphic design, training, and business automation. We also build focused digital products for field service, sales, lead tracking, and student talent workflows.",
      },
      {
        question: "Where is InfoBytes Nepal located?",
        answer:
          "We are based in Kaushaltar, Bhaktapur, Nepal, and work with businesses across the country. Most collaboration happens online, so location is rarely a barrier.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We work with startups, small and growing businesses, consultancies, schools, service teams, and sales-driven organizations in Nepal that want clearer, more reliable digital systems.",
      },
    ],
  },
  {
    title: "Services & products",
    faqs: [
      {
        question: "Do you build custom software or only websites?",
        answer:
          "Both. We build company websites and landing pages as well as custom web applications, dashboards, CRM-style tools, and automation systems tailored to your workflow.",
      },
      {
        question: "What is the difference between your services and products?",
        answer:
          "Services are custom work built around your specific needs. Products like LeadRack, Serviol, Purseol, and Pravyo are ready-made solutions for lead tracking, field service, field sales, and student talent workflows that can be adopted directly.",
      },
      {
        question: "Can you handle web design, development, and marketing together?",
        answer:
          "Yes. Because we cover design, development, SEO, and marketing under one team, your website, brand visuals, and campaigns stay connected and consistent.",
      },
    ],
  },
  {
    title: "Process, pricing & support",
    faqs: [
      {
        question: "How does a project usually start?",
        answer:
          "It starts with a conversation about your goals, current workflow, and challenges. We then define a realistic scope and a focused first version before any development begins.",
      },
      {
        question: "How much does a project cost?",
        answer:
          "Cost depends on the scope, features, and complexity. We keep scopes practical and transparent, and we can suggest a phased approach so you start with what matters most. Contact us with your requirement for an estimate.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. Depending on the project, we support improvements, content updates, SEO work, automation changes, reporting refinements, and new features as your business grows.",
      },
      {
        question: "Can we work in phases?",
        answer:
          "Yes. A phased approach is often the most practical for growing teams. It keeps the first version focused and lets the system improve based on real usage.",
      },
    ],
  },
];

const allFaqs = faqGroups.flatMap((group) => group.faqs);

export default function FaqPage() {
  const siteUrl = getSiteUrl();
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/faq` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="bg-white">
        <section className="page-x brand-radial bg-white pb-12 pt-32 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow justify-center">Frequently asked questions</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-deep-navy md:text-6xl">
              Questions, <span className="text-gradient">answered.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dark-text/74">
              Everything you need to know about working with InfoBytes Nepal. Can&apos;t find your answer? We&apos;re a message away.
            </p>
          </div>
        </section>

        <section className="page-x bg-white pb-20">
          <div className="mx-auto max-w-4xl">
            {faqGroups.map((group) => (
              <div key={group.title} className="mt-12 first:mt-0">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-blue">{group.title}</h2>
                <div className="mt-5 grid gap-3">
                  {group.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-2xl border border-primary-blue/10 bg-white/86 p-5 shadow-[0_12px_36px_rgba(4,18,63,0.04)] transition open:border-primary-green/30 open:shadow-[0_18px_50px_rgba(4,18,63,0.07)]"
                    >
                      <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-deep-navy">
                        {faq.question}
                        <Plus
                          size={20}
                          className="shrink-0 text-primary-blue transition-transform duration-300 group-open:rotate-45"
                        />
                      </summary>
                      <p className="mt-4 leading-7 text-dark-text/72">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-x bg-white pb-24">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-primary-blue/10 bg-gradient-to-br from-soft-blue/70 via-white to-soft-green/60 p-8 text-center shadow-[0_22px_70px_rgba(4,18,63,0.07)] md:p-10">
            <h2 className="text-2xl font-semibold text-deep-navy md:text-3xl">Still have a question?</h2>
            <p className="mx-auto mt-3 max-w-xl leading-7 text-dark-text/70">
              Tell us about your requirement or current workflow, and we&apos;ll help you find a clear, practical direction.
            </p>
            <Link
              href="/contact"
              className="focus-ring site-button-gradient mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)]"
            >
              Contact InfoBytes Nepal
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
