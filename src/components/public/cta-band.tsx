import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";

/**
 * The closing CTA band used at the bottom of the home page, extracted so /blog
 * and /careers close the same way rather than inventing a second one.
 *
 * The home page keeps its own inline copy of this markup: pulling it out from
 * under a live page was out of scope for this change, so this component
 * mirrors that markup exactly. If the two ever need to diverge, change this
 * one and leave the home page alone.
 */
export default function CtaBand({
  eyebrow = "Free consultation, no obligation",
  title = "Tell us what is slowing your business down.",
  text = "Send us your requirement or just describe how the work happens today. We will come back with a scope, a price, and a timeline. If we are not the right fit, we will say so.",
  primaryLabel = "Get your free quote",
  primaryHref = "/contact",
  className = "page-x bg-white pb-24 pt-4",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] brand-gradient px-7 py-14 text-center text-white shadow-[0_30px_90px_rgba(3,66,197,0.28)] md:px-12 md:py-16">
        <div className="grid-texture pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck size={14} /> {eyebrow}
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85 md:text-lg">{text}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary-blue transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
            >
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+9779843468715"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={16} />
              Call +977 9843468715
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
