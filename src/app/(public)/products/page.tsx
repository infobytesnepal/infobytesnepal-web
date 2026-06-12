import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/public/reveal";
import { getProducts } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("/products", {
    title: "Products | InfoBytes Nepal",
    description: "Explore InfoBytes Nepal products for student talent, field service, field sales, and lead tracking workflows.",
  });
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <section className="brand-radial min-h-screen bg-white px-5 pb-20 pt-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-primary-blue">Our Products</p>
          <h1 className="mt-4 text-4xl font-semibold text-deep-navy md:text-6xl">Focused digital products from InfoBytes Nepal.</h1>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className="group block h-full overflow-hidden rounded-[28px] border border-primary-blue/12 bg-white p-7 shadow-[0_24px_70px_rgba(4,18,63,0.08)] transition hover:-translate-y-1 hover:border-primary-green/40 hover:shadow-[0_28px_84px_rgba(4,18,63,0.13)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <Image src={product.logoUrl} alt={`${product.name} logo`} width={72} height={72} className="h-16 w-16" />
                  <span className="rounded-full bg-soft-green px-4 py-2 text-sm font-semibold text-deep-navy">Learn More</span>
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
  );
}
