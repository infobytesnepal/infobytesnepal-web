import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumbs, { breadcrumbSchema } from "@/components/public/breadcrumbs";
import CmsImage from "@/components/public/cms-image";
import GetStartedButton from "@/components/public/get-started-button";
import InternalLinkHub from "@/components/public/internal-links";
import { productSeoDefaults } from "@/lib/content";
import { getProductBySlug } from "@/lib/data";
import { getCanonicalSiteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Matches `/products`. There is no `generateStaticParams` here, so each slug is
 * rendered on first request and then cached per path; six hours keeps a product
 * detail page in step with the catalogue listing it.
 */
export const revalidate = 21600;

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
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/contact`,
      },
      publisher: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Infobytes Nepal", url: siteUrl },
    },
    breadcrumbSchema(crumbs),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="page-x brand-radial bg-white pt-32">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs crumbs={crumbs} />
          <section className="rounded-[32px] border border-primary-blue/12 bg-white p-7 shadow-[0_28px_90px_rgba(4,18,63,0.09)] md:p-12">
            <CmsImage src={product.logoUrl} alt={`${product.name} logo`} width={92} height={92} className="h-20 w-20" priority />
            <h1 className="mt-8 text-5xl font-semibold text-deep-navy md:text-7xl">{product.name}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-dark-text/76">{product.shortDescription}</p>
            <div className="mt-9">
              <GetStartedButton interest={product.name} />
            </div>
          </section>
          <section className="mx-auto mt-12 max-w-3xl pb-16 text-lg leading-9 text-dark-text/78">
            {product.fullDescription.split("\n").map((paragraph) => (
              <p key={paragraph} className="mb-6">
                {paragraph}
              </p>
            ))}
          </section>
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
