import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import CmsImage from "@/components/public/cms-image";
import InternalLinkHub from "@/components/public/internal-links";
import Reveal from "@/components/public/reveal";
import { getProducts } from "@/lib/data";
import { basicPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return basicPageMetadata({
    route: "/products",
    title: "Products | Infobytes Nepal",
    description:
      "Explore Infobytes Nepal software products for business automation, CRM, sales management, service management, lead tracking, and student talent workflows.",
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
                  <CmsImage src={product.logoUrl} alt={`${product.name} logo`} width={72} height={72} className="h-16 w-16" />
                  <span className="site-button-light rounded-full px-4 py-2 text-sm font-semibold">Learn More</span>
                </div>
                <h2 className="mt-10 text-3xl font-semibold text-deep-navy">{product.name}</h2>
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
