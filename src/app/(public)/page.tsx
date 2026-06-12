import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import GetStartedButton from "@/components/public/get-started-button";
import Reveal from "@/components/public/reveal";
import StackingCards from "@/components/public/stacking-cards";
import { defaultPageContent } from "@/lib/content";
import { getPageSection, getProducts } from "@/lib/data";
import { buildMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("/", {
    title: "InfoBytes Nepal | Complexities, now simplified.",
    description:
      "Focused digital products that simplify field service, sales, lead tracking, and student talent workflows for growing teams.",
  });
}

export default async function HomePage() {
  const [hero, products, orgSchema] = await Promise.all([
    getPageSection("home", "hero", defaultPageContent.homeHero),
    getProducts(),
    organizationSchema(),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, websiteSchema()]) }} />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-soft-blue px-5 pt-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={hero.fallbackImageUrl}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={hero.heroVideoUrl} type="video/mp4" />
        </video>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Reveal className="max-w-xl md:w-1/2">
            <h1 className="text-5xl font-semibold tracking-normal text-deep-navy md:text-7xl">{hero.headline}</h1>
            <p className="mt-5 text-2xl font-semibold text-primary-blue">{hero.tagline}</p>
            <p className="mt-6 max-w-lg text-lg leading-8 text-dark-text/76">{hero.supportingText}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="focus-ring site-button-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold shadow-[0_16px_42px_rgba(4,18,63,0.12)]"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
              <GetStartedButton />
            </div>
          </Reveal>
        </div>
      </section>

      <StackingCards />

      <section className="relative z-10 bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-blue">Products</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-deep-navy md:text-5xl">
                A concise product bench for practical workflows.
              </h2>
            </div>
            <Link href="/products" className="focus-ring inline-flex items-center gap-2 font-semibold text-primary-blue">
              View all products
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {products.map((product) => (
              <Reveal key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="block h-full rounded-[20px] border border-primary-blue/12 bg-soft-blue/50 p-5 transition hover:-translate-y-1 hover:border-primary-green/35 hover:bg-soft-green/55"
                >
                  <Image src={product.logoUrl} alt={`${product.name} logo`} width={54} height={54} className="h-12 w-12" />
                  <h3 className="mt-5 text-xl font-semibold text-deep-navy">{product.name}</h3>
                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-dark-text/72">{product.shortDescription}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
