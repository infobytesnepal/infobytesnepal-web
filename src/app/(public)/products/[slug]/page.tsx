import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import Breadcrumbs, { breadcrumbSchema } from "@/components/public/breadcrumbs";
import GetStartedButton from "@/components/public/get-started-button";
import InternalLinkHub from "@/components/public/internal-links";
import ProductLogo from "@/components/public/product-logo";
import { productAgentProfiles, productFaqs, productSeoDefaults } from "@/lib/content";
import { getProductBySlug, getProducts } from "@/lib/data";
import { getCanonicalSiteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Matches `/products`: six hours keeps a detail page in step with the
 * catalogue listing it. */
export const revalidate = 21600;

/**
 * Without this the route was fully dynamic, so every visit to a product page
 * cost a function invocation and a Turso query before anything could be sent.
 * The slugs are known at build time — the products listing and the sitemap both
 * already enumerate them — so there is no reason to discover them one visitor at
 * a time.
 *
 * `dynamicParams` stays at its default of true: a product published from the
 * admin after this build still renders on first request rather than 404ing, and
 * the write path invalidates these paths anyway.
 */
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  const defaults = productSeoDefaults[product.slug] || {
    title: `${product.name} | Infobytes Nepal`,
    description: product.shortDescription,
  };
  const title = product.seoTitle && product.seoTitle !== `${product.name} | Infobytes Nepal` ? product.seoTitle : defaults.title;
  const description = product.seoDescription && product.seoDescription !== product.shortDescription ? product.seoDescription : defaults.description;
  const url = `${getCanonicalSiteUrl()}/products/${product.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Infobytes Nepal",
      images: product.ogImage ? [{ url: product.ogImage, alt: product.name }] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: product.ogImage ? [product.ogImage] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product || !product.isPublished) notFound();

  const siteUrl = getCanonicalSiteUrl();
  const productUrl = `${siteUrl}/products/${product.slug}`;
  const productPath = `/products/${product.slug}`;
  /**
   * Both of these already existed as data and were rendered nowhere.
   *
   * `productAgentProfiles` was written for llms.txt and /api/v1/products, so an
   * agent calling the API got a structured capability list while a person
   * reading the page got the same information buried in seven paragraphs of
   * prose — and so did the crawler, which has no way to lift a feature list out
   * of a paragraph. `productFaqs` is new and exists for the same reason: a
   * branded search ("nidanyo lab software nepal") lands here already knowing the
   * name, and this page had no answer to "what is it" that anything could quote.
   */
  const profile = productAgentProfiles[product.slug];
  const faqs = productFaqs[product.slug] ?? [];
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: product.name, href: productPath },
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android, iOS",
      description: product.shortDescription,
      url: productUrl,
      image: product.logoUrl ? `${siteUrl}${product.logoUrl}` : undefined,
      /**
       * Quote-only, and the markup has to say so.
       *
       * This block previously published `price: "0"` in USD for every product,
       * which is a machine-readable claim that Nidanyo, Serviol, Purseol,
       * LeadRack, and Pravyo are free. None of them are: all five are quoted by
       * team or lab size and modules. A rich result is not worth a price we
       * would have to correct in public, and an answer engine lifting "free"
       * from here costs a sales conversation before anyone reaches the page.
       *
       * `PriceSpecification` without a `price` is the honest form: it states a
       * currency and points at where a real figure comes from, without
       * asserting an amount. Google will not render an offer chip from this,
       * which is the intended trade.
       */
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "NPR",
          valueAddedTaxIncluded: false,
        },
        url: `${siteUrl}/contact`,
      },
      publisher: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Infobytes Nepal", url: siteUrl },
      ...(profile
        ? {
            /**
             * The category names this product answers to. Somebody looking for
             * Nidanyo rarely types "Nidanyo" first — they type "lab software in
             * Nepal" or "LIS", and `alternateName` is where a search engine
             * reads the aliases of an entity.
             */
            alternateName: profile.alsoKnownAs,
            featureList: profile.capabilities,
            audience: { "@type": "Audience", audienceType: profile.audience },
          }
        : {}),
    },
    breadcrumbSchema(crumbs),
    ...(faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${productUrl}#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="page-x brand-radial bg-white pt-32">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs crumbs={crumbs} />
          <section className="rounded-[32px] border border-primary-blue/12 bg-white p-7 shadow-[0_28px_90px_rgba(4,18,63,0.09)] md:p-12">
            <ProductLogo src={product.logoUrl} name={product.name} size="detail" priority />
            <h1 className="mt-7 text-5xl font-semibold text-deep-navy md:text-7xl">{product.name}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-dark-text/76">{product.shortDescription}</p>
            <div className="mt-9">
              <GetStartedButton interest={product.name} />
            </div>
          </section>
          <section className="mx-auto mt-12 max-w-3xl text-lg leading-9 text-dark-text/78">
            {product.fullDescription.split("\n").map((paragraph) => (
              <p key={paragraph} className="mb-6">
                {paragraph}
              </p>
            ))}
          </section>

          {profile && profile.capabilities.length > 0 && (
            <section className="mt-6 pb-4">
              <p className="text-sm font-semibold uppercase text-primary-blue">What it covers</p>
              <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-4xl">
                {product.name} module by module
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-dark-text/72">{profile.audience}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {profile.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 rounded-2xl border border-primary-blue/10 bg-white px-4 py-3 text-sm font-semibold text-deep-navy shadow-[0_12px_28px_rgba(4,18,63,0.04)]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-green text-primary-green">
                      <Check size={15} strokeWidth={2.4} />
                    </span>
                    {capability}
                  </div>
                ))}
              </div>
            </section>
          )}

          {faqs.length > 0 && (
            <section className="mt-14 pb-16">
              <p className="text-sm font-semibold uppercase text-primary-blue">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-4xl">
                Common questions about {product.name}
              </h2>
              <div className="mt-8 grid gap-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-[24px] border border-primary-blue/10 bg-soft-blue/35 p-5 shadow-[0_18px_55px_rgba(4,18,63,0.05)]"
                  >
                    <h3 className="text-lg font-semibold text-deep-navy">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-dark-text/72">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {!profile && faqs.length === 0 && <div className="pb-16" />}
        </div>
      </article>
      <InternalLinkHub
        sourcePath={productPath}
        heading={`Where ${product.name} fits with the rest of our work`}
        className="page-x bg-soft-blue/30 py-16 md:py-20"
      />
    </>
  );
}
