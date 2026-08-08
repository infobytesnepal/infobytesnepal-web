import Image from "next/image";

/**
 * Third-party directory listings and awards.
 *
 * Adding the next badge is one object in this array; the strip lays itself out.
 *
 * The artwork is served from `public/assets/badges/` rather than hotlinked from
 * the issuing directory. Hotlinking would put a render-blocking request to
 * someone else's WordPress host on the critical path of our busiest page, leak
 * a referrer on every visit, and leave a hole in the layout the day they move
 * the file. A self-hosted copy also goes through next/image, so the 53 KB JPEG
 * ships as a ~4 KB AVIF at the size it is actually displayed. The backlink,
 * which is the part these programmes verify, is unchanged.
 */
const badges = [
  {
    name: "TopFirms",
    href: "https://topfirms.co/companies/software-development/world",
    src: "/assets/badges/topfirms-top-software-development-companies.jpg",
    // The snippet TopFirms hands out is labelled "eCommerce Development
    // Companies", which is not what this badge is or what we were listed for.
    alt: "Infobytes Nepal, listed among the top software development companies on TopFirms",
    caption: "Top Software Development Companies",
    width: 300,
    height: 300,
  },
];

export default function BadgeStrip({ className = "page-x bg-white pb-12 pt-4" }: { className?: string }) {
  return (
    <section className={className} aria-labelledby="recognition-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="recognition-heading" className="eyebrow font-body">
          Listed on
        </h2>
        <ul className="mt-5 flex flex-wrap items-center gap-4">
          {badges.map((badge) => (
            <li key={badge.name}>
              <a
                href={badge.href}
                target="_blank"
                rel="noopener"
                className="focus-ring group flex items-center gap-4 rounded-2xl border border-primary-blue/10 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(4,18,63,0.05)] transition hover:-translate-y-0.5 hover:border-primary-green/40 hover:shadow-[0_16px_36px_rgba(4,18,63,0.1)]"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  sizes="88px"
                  className="h-[74px] w-[74px] shrink-0 object-contain md:h-[88px] md:w-[88px]"
                />
                <span className="max-w-[11rem]">
                  <span className="block text-sm font-semibold leading-5 text-deep-navy transition group-hover:text-primary-blue">
                    {badge.caption}
                  </span>
                  <span className="mt-0.5 block text-xs text-dark-text/60">{badge.name}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
