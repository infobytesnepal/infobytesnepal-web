"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CmsImage from "@/components/public/cms-image";
import { stackingCards } from "@/lib/content";

type StackProduct = {
  name: string;
  logoUrl: string;
};

function productForCard(products: StackProduct[], productName: string) {
  return products.find((product) => product.name.toLowerCase() === productName.toLowerCase());
}

function StackCard({ card, index, product }: { card: (typeof stackingCards)[number]; index: number; product?: StackProduct }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "start 18%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94 + index * 0.012]);
  const y = useTransform(scrollYProgress, [0, 1], [40, index * -10]);

  return (
    <motion.article
      ref={ref}
      className="sticky top-24 mx-auto min-h-[420px] max-w-5xl overflow-hidden rounded-[28px] border border-primary-blue/12 bg-white p-7 shadow-[0_30px_80px_rgba(4,18,63,0.11)] md:min-h-[470px] md:p-10"
      style={{ scale, y, zIndex: index + 1 }}
    >
      <div className="brand-radial absolute inset-0 opacity-80" />
      <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-primary-green/30 bg-soft-green px-4 py-2 text-sm font-semibold text-deep-navy">
            {card.product}
          </span>
          <span className="text-sm font-semibold text-primary-blue">0{index + 1}</span>
        </div>
        {product ? (
          <div className="flex h-32 items-center md:h-40">
            <CmsImage
              src={product.logoUrl}
              alt={`${product.name} logo`}
              width={260}
              height={130}
              className="max-h-28 w-auto max-w-[280px] object-contain object-left md:max-h-36"
            />
          </div>
        ) : null}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-normal text-deep-navy md:text-5xl">{card.title}</h2>
          <p className="mt-6 text-lg leading-8 text-dark-text/76 md:text-xl">{card.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function StackingCards({ products }: { products: StackProduct[] }) {
  return (
    <section className="page-x relative z-0 bg-soft-blue py-20 md:pb-48 md:pt-28">
      <div className="mx-auto mb-12 max-w-5xl">
        <p className="text-sm font-semibold uppercase text-primary-blue">Workflows</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-deep-navy md:text-5xl">
          Focused products for the workflows teams need to keep clear.
        </h2>
      </div>
      <div className="hidden h-[360vh] flex-col gap-8 md:flex lg:h-[340vh]">
        {stackingCards.map((card, index) => {
          const product = productForCard(products, card.product);
          return <StackCard key={card.title} card={card} index={index} product={product} />;
        })}
      </div>
      <div className="hidden h-56 md:block" />
      <div className="grid gap-5 md:hidden">
        {stackingCards.map((card, index) => {
          const product = productForCard(products, card.product);
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="brand-radial rounded-[24px] border border-primary-blue/12 bg-white p-6 shadow-[0_18px_45px_rgba(4,18,63,0.08)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-soft-green px-3 py-1 text-sm font-semibold text-deep-navy">{card.product}</span>
                <span className="text-sm font-semibold text-primary-blue">0{index + 1}</span>
              </div>
              {product ? (
                <div className="mt-8 flex h-24 items-center">
                  <CmsImage
                    src={product.logoUrl}
                    alt={`${product.name} logo`}
                    width={210}
                    height={96}
                    className="max-h-20 w-auto max-w-[220px] object-contain object-left"
                  />
                </div>
              ) : null}
              <h3 className="mt-7 text-2xl font-semibold text-deep-navy">{card.title}</h3>
              <p className="mt-4 leading-7 text-dark-text/74">{card.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
