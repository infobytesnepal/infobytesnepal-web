import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CmsImage from "@/components/public/cms-image";
import GetStartedButton from "@/components/public/get-started-button";
import { getProductBySlug } from "@/lib/data";
import { getSiteUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

const productSeoDefaults: Record<string, { title: string; description: string }> = {
  pravyo: {
    title: "Pravyo Student Talent Platform | InfoBytes Nepal",
    description:
      "Pravyo by InfoBytes Nepal helps organize, discover, and present student talent for education, training, and consultancy-focused workflows in Nepal.",
  },
  serviol: {
    title: "Serviol Service Management Software Nepal | InfoBytes Nepal",
    description:
      "Serviol is service management software by InfoBytes Nepal for field service teams, tickets, planners, attendance, and operational workflows.",
  },
  purseol: {
    title: "Purseol Sales Management Software Nepal | InfoBytes Nepal",
    description:
      "Purseol is sales management software by InfoBytes Nepal for client visits, product pitches, field sales tracking, and lead outcomes.",
  },
  leadrack: {
    title: "LeadRack CRM & Lead Management Software Nepal | InfoBytes Nepal",
    description:
      "LeadRack by InfoBytes Nepal helps teams manage leads through traceable boards, sales stages, follow-ups, and CRM-style workflows.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  const defaults = productSeoDefaults[product.slug] || {
    title: `${product.name} | InfoBytes Nepal`,
    description: product.shortDescription,
  };
  const title = product.seoTitle && product.seoTitle !== `${product.name} | InfoBytes Nepal` ? product.seoTitle : defaults.title;
  const description = product.seoDescription && product.seoDescription !== product.shortDescription ? product.seoDescription : defaults.description;
  const url = `${getSiteUrl()}/products/${product.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "InfoBytes Nepal",
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    description: product.shortDescription,
    url: `${getSiteUrl()}/products/${product.slug}`,
    publisher: { "@type": "Organization", name: "InfoBytes Nepal" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="page-x brand-radial min-h-screen bg-white pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-[32px] border border-primary-blue/12 bg-white p-7 shadow-[0_28px_90px_rgba(4,18,63,0.09)] md:p-12">
            <CmsImage src={product.logoUrl} alt={`${product.name} logo`} width={92} height={92} className="h-20 w-20" priority />
            <h1 className="mt-8 text-5xl font-semibold text-deep-navy md:text-7xl">{product.name}</h1>
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
        </div>
      </article>
    </>
  );
}
