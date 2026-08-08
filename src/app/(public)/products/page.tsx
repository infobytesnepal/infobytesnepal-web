import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import InternalLinkHub from "@/components/public/internal-links";
import ProductLogo from "@/components/public/product-logo";
import Reveal from "@/components/public/reveal";
import { getProducts } from "@/lib/data";
import { basicPageMetadata } from "@/lib/seo";

/**
 * The catalogue is admin-editable, so this sits below the layout's weekly
 * backstop but well above the old hour. Publishing or reordering a product
 * already invalidates this page on demand; six hours just bounds how long a
 * missed invalidation could leave the catalogue wrong.
 */
export const revalidate = 21600;

export async function generateMetadata(): Promise<Metadata> {
  return basicPageMetadata({
    route: "/products",
    title: "Our Software Products in Nepal | Infobytes Nepal",
    description:
      "Five software products built and supported in Nepal: Nidanyo for medical labs, Serviol for field service, Purseol for field sales, LeadRack for leads, and Pravyo.",
  });
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
    <section className="page-x brand-radial bg-white pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-primary-blue">Our Products</p>
          <h1 className="mt-4 text-4xl font-semibold text-deep-navy md:text-6xl">Focused digital products from Infobytes Nepal.</h1>
          <p className="mt-6 text-lg leading-8 text-dark-text/74">
            Five systems we built, run, and support ourselves. Nidanyo runs medical laboratories, Serviol runs field
            service teams, Purseol runs field sales, LeadRack keeps leads from going cold, and Pravyo makes student
            talent easier to present. If your requirement sits outside these, we also do{" "}
            <Link href="/software-development-company-in-nepal" className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4">
              custom software development in Nepal
            </Link>
            .
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className="group block h-full overflow-hidden rounded-[28px] border border-primary-blue/12 bg-white p-7 shadow-[0_24px_70px_rgba(4,18,63,0.08)] transition hover:-translate-y-1 hover:border-primary-green/40 hover:shadow-[0_28px_84px_rgba(4,18,63,0.13)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <ProductLogo src={product.logoUrl} name={product.name} />
                  <span className="site-button-light shrink-0 rounded-full px-4 py-2 text-sm font-semibold">Learn More</span>
                </div>
                <h2 className="mt-8 text-3xl font-semibold text-deep-navy">{product.name}</h2>
                <p className="mt-4 max-w-xl leading-7 text-dark-text/72">{product.shortDescription}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-blue">
                  Learn More
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <InternalLinkHub sourcePath="/products" heading="Services that surround these products" className="page-x bg-soft-blue/30 py-16 md:py-20" />
    </>
  );
}
