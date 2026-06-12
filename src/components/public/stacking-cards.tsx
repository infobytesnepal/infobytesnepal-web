"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { stackingCards } from "@/lib/content";

function StackCard({ card, index }: { card: (typeof stackingCards)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "start 18%"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94 + index * 0.012]);
  const y = useTransform(scrollYProgress, [0, 1], [40, index * -10]);

  return (
    <motion.article
      ref={ref}
      className="sticky top-24 mx-auto min-h-[420px] max-w-5xl overflow-hidden rounded-[28px] border border-primary-blue/12 bg-white p-7 shadow-[0_30px_80px_rgba(4,18,63,0.11)] md:min-h-[470px] md:p-10"
      style={{ scale, y }}
    >
      <div className="brand-radial absolute inset-0 opacity-80" />
      <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-between">
        <div className="flex items-center justify-between gap-4">
          <span className="rounded-full border border-primary-green/30 bg-soft-green px-4 py-2 text-sm font-semibold text-deep-navy">
            {card.product}
          </span>
          <span className="text-sm font-semibold text-primary-blue">0{index + 1}</span>
        </div>
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-normal text-deep-navy md:text-6xl">{card.title}</h2>
          <p className="mt-6 text-lg leading-8 text-dark-text/76 md:text-xl">{card.description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function StackingCards() {
  return (
    <section className="relative z-0 bg-soft-blue px-5 py-20 md:pb-48 md:pt-28">
      <div className="mx-auto mb-12 max-w-5xl">
        <p className="text-sm font-semibold uppercase text-primary-blue">Workflows</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-deep-navy md:text-5xl">
          Focused products for the workflows teams need to keep clear.
        </h2>
      </div>
      <div className="hidden h-[220vh] gap-8 md:grid">
        {stackingCards.map((card, index) => (
          <StackCard key={card.title} card={card} index={index} />
        ))}
      </div>
      <div className="hidden h-56 md:block" />
      <div className="grid gap-5 md:hidden">
        {stackingCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="brand-radial rounded-[24px] border border-primary-blue/12 bg-white p-6 shadow-[0_18px_45px_rgba(4,18,63,0.08)]"
          >
            <div className="mb-14 flex items-center justify-between">
              <span className="rounded-full bg-soft-green px-3 py-1 text-sm font-semibold text-deep-navy">{card.product}</span>
              <span className="text-sm font-semibold text-primary-blue">0{index + 1}</span>
            </div>
            <h3 className="text-3xl font-semibold text-deep-navy">{card.title}</h3>
            <p className="mt-4 leading-7 text-dark-text/74">{card.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
