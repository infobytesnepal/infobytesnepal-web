import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CmsImage from "@/components/public/cms-image";
import { team } from "@/lib/team";
import { getSiteUrl } from "@/lib/utils";

export default function TeamSection() {
  const siteUrl = getSiteUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "InfoBytes Nepal Team",
    itemListElement: team.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        "@id": `${siteUrl}/team/${member.slug}#person`,
        name: member.name,
        jobTitle: member.role,
        url: `${siteUrl}/team/${member.slug}`,
        image: `${siteUrl}${member.image}`,
        worksFor: { "@type": "Organization", name: "InfoBytes Nepal", url: siteUrl },
      },
    })),
  };

  return (
    <section id="team" className="mx-auto mt-24 max-w-7xl scroll-mt-28 md:mt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-2xl">
        <span className="eyebrow">Our People</span>
        <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Meet the team behind InfoBytes Nepal</h2>
        <p className="mt-5 leading-8 text-dark-text/72">
          The people building practical software, websites, and digital products for teams across Nepal.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-x-5 gap-y-16 sm:gap-x-6 lg:grid-cols-4">
        {team.map((member) => (
          <Link
            key={member.slug}
            href={`/team/${member.slug}`}
            className="focus-ring group block"
            aria-label={`${member.name} — ${member.role} at InfoBytes Nepal`}
          >
            <article
              className="relative rounded-[26px] border-2 border-transparent shadow-[0_18px_50px_rgba(4,18,63,0.10)] transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_70px_rgba(4,18,63,0.16)]"
              style={{
                background:
                  "linear-gradient(165deg,#e8f1ff,#ffffff 52%,#e8fff3) padding-box, linear-gradient(140deg,#00bb5c,#19c0ff 60%,#0342c5) border-box",
              }}
            >
              {/* Portrait stage — the PNG pops above the top edge of the card */}
              <div className="relative h-[150px] sm:h-[178px]">
                <CmsImage
                  src={member.image}
                  alt={`${member.name} — ${member.role} at InfoBytes Nepal`}
                  width={420}
                  height={520}
                  className="absolute bottom-0 left-1/2 h-[210px] w-auto -translate-x-1/2 object-contain object-bottom drop-shadow-[0_18px_24px_rgba(4,18,63,0.18)] sm:h-[250px]"
                />
              </div>
              {/* Name plate */}
              <div className="relative rounded-b-[24px] border-t border-deep-navy/10 bg-white/45 px-3 py-4 text-center backdrop-blur-[2px]">
                <h3 className="text-base font-bold text-primary-blue sm:text-lg">{member.name}</h3>
                <p className="mt-0.5 text-xs leading-snug text-primary-blue/75 sm:text-sm">{member.role}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-primary-green opacity-0 transition group-hover:opacity-100 sm:text-xs">
                  View profile <ArrowUpRight size={13} />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
