import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clusters, getLinkBlocks, type LinkBlock } from "@/lib/internal-links";

/**
 * The complete cluster directory. Rendered on the pages that carry the most
 * authority (services, FAQ) so link equity reaches every long-tail page in one
 * hop rather than three.
 */
export function SiteDirectory({
  heading = "The full directory of what Infobytes Nepal works on",
  intro = "Five areas, each with the pages that go into detail. The pillar page at the top of each group is the place to start if you are still working out what you need.",
  className = "page-x border-t border-primary-blue/10 bg-white py-16 md:py-20",
}: {
  heading?: string;
  intro?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-primary-blue">Everything in one place</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-deep-navy md:text-4xl">{heading}</h2>
        <p className="mt-4 max-w-3xl leading-8 text-dark-text/72">{intro}</p>
        <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {clusters.map((cluster) => (
            <div key={cluster.id}>
              <h3 className="text-lg font-semibold text-deep-navy">{cluster.title}</h3>
              <p className="mt-2 text-sm leading-6 text-dark-text/66">{cluster.intro}</p>
              <ul className="mt-4 grid gap-2 text-sm">
                <li>
                  <Link
                    href={cluster.pillar.href}
                    className="focus-ring group inline-flex items-center gap-1.5 rounded font-semibold text-primary-blue transition hover:text-primary-green"
                  >
                    {cluster.pillar.label}
                    <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
                {cluster.members.map((member) => (
                  <li key={member.href}>
                    <Link
                      href={member.href}
                      className="focus-ring rounded text-dark-text/72 transition hover:text-primary-blue"
                    >
                      {member.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkCard({ href, anchor, blurb }: { href: string; anchor: string; blurb: string }) {
  return (
    <Link
      href={href}
      className="focus-ring group flex h-full flex-col rounded-2xl border border-primary-blue/10 bg-white/86 p-4 transition hover:border-primary-green/40 hover:shadow-[0_14px_36px_rgba(4,18,63,0.07)]"
    >
      <span className="inline-flex items-start gap-2 font-semibold capitalize text-primary-blue">
        {anchor}
        <ArrowRight size={15} className="mt-1 shrink-0 transition group-hover:translate-x-1" />
      </span>
      <span className="mt-2 text-sm leading-6 text-dark-text/68">{blurb}</span>
    </Link>
  );
}

export function LinkBlockSection({ block }: { block: LinkBlock }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-deep-navy">{block.title}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-dark-text/68">{block.intro}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {block.links.map((link) => (
          <LinkCard key={link.href} href={link.href} anchor={link.anchor} blurb={link.blurb} />
        ))}
      </div>
    </div>
  );
}

/**
 * Renders the cluster, bridge, and priority link blocks for a page. This is the
 * structural half of the internal linking plan; the contextual half lives in
 * the body copy of each page.
 */
export default function InternalLinkHub({
  sourcePath,
  heading = "Explore more from Infobytes Nepal",
  siblingLimit,
  className = "page-x bg-soft-blue/30 py-16 md:py-20",
}: {
  sourcePath: string;
  heading?: string;
  siblingLimit?: number;
  className?: string;
}) {
  const blocks = getLinkBlocks(sourcePath, { siblingLimit });
  if (!blocks.length) return null;

  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-primary-blue">Keep reading</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-deep-navy md:text-4xl">{heading}</h2>
        <div className="mt-10 grid gap-12">
          {blocks.map((block) => (
            <LinkBlockSection key={block.title} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
