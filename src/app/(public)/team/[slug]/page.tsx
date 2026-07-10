import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Mail, MapPin } from "lucide-react";
import CmsImage from "@/components/public/cms-image";
import GetStartedButton from "@/components/public/get-started-button";
import { getTeamMember, team } from "@/lib/team";
import { getSiteUrl } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/team/${member.slug}`;
  const title = `${member.name} — ${member.role} | InfoBytes Nepal`;
  const description = member.summary;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: "index,follow",
    keywords: [
      member.name,
      `${member.name} InfoBytes Nepal`,
      `${member.name} Nepal`,
      `${member.name} ${member.role}`,
      `${member.role} InfoBytes Nepal`,
      "InfoBytes Nepal team",
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "InfoBytes Nepal",
      type: "profile",
      images: [{ url: member.image, alt: `${member.name}, ${member.role} at InfoBytes Nepal` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [member.image],
    },
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const siteUrl = getSiteUrl();
  const url = `${siteUrl}/team/${member.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url,
      mainEntity: {
        "@type": "Person",
        "@id": `${url}#person`,
        mainEntityOfPage: url,
        name: member.name,
        jobTitle: member.role,
        description: member.summary,
        image: `${siteUrl}${member.image}`,
        url,
        worksFor: {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          name: "InfoBytes Nepal",
          url: siteUrl,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: member.location,
          addressCountry: "NP",
        },
        knowsAbout: member.expertise,
        ...(member.email ? { email: member.email } : {}),
        ...(member.sameAs && member.sameAs.length ? { sameAs: member.sameAs } : {}),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
        { "@type": "ListItem", position: 3, name: member.name, item: url },
      ],
    },
  ];

  const others = team.filter((person) => person.slug !== member.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="page-x bg-white pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-sm text-dark-text/55">
            <Link href="/about" className="focus-ring inline-flex items-center gap-1.5 hover:text-primary-blue">
              <ArrowLeft size={15} /> Back to About
            </Link>
          </nav>

          <section className="mt-6 grid items-end gap-8 rounded-[32px] border-2 border-transparent p-6 shadow-[0_28px_80px_rgba(4,18,63,0.10)] sm:p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-10"
            style={{
              background:
                "linear-gradient(160deg,#e8f1ff,#ffffff 55%,#e8fff3) padding-box, linear-gradient(140deg,#00bb5c,#19c0ff 60%,#0342c5) border-box",
            }}
          >
            <div className="relative mx-auto flex h-[300px] w-full max-w-[320px] items-end justify-center md:h-[360px]">
              <CmsImage
                src={member.image}
                alt={`${member.name} — ${member.role} at InfoBytes Nepal`}
                width={460}
                height={560}
                priority
                className="h-[360px] w-auto object-contain object-bottom drop-shadow-[0_20px_28px_rgba(4,18,63,0.20)] md:h-[420px]"
              />
            </div>
            <div className="pb-2">
              <span className="eyebrow">InfoBytes Nepal</span>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-deep-navy md:text-5xl">{member.name}</h1>
              <p className="mt-2 text-lg font-semibold text-primary-blue">{member.role}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-dark-text/65">
                <MapPin size={15} className="text-primary-green" /> {member.location}
              </p>
              {member.email ? (
                <a href={`mailto:${member.email}`} className="focus-ring mt-2 inline-flex items-center gap-2 text-sm text-dark-text/65 hover:text-primary-blue">
                  <Mail size={15} className="text-primary-green" /> {member.email}
                </a>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-2">
                {member.expertise.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold text-deep-navy md:text-3xl">About {member.name}</h2>
            <div className="mt-5 grid gap-5 text-lg leading-8 text-dark-text/76">
              {member.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <GetStartedButton />
              <Link href="/contact" className="focus-ring site-button-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold">
                Contact InfoBytes Nepal
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>

          {others.length ? (
            <section className="mt-16">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-blue">More from the team</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {others.map((person) => (
                  <Link
                    key={person.slug}
                    href={`/team/${person.slug}`}
                    className="focus-ring inline-flex items-center gap-3 rounded-2xl border border-primary-blue/12 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(4,18,63,0.05)] transition hover:border-primary-green/40"
                  >
                    <CmsImage src={person.image} alt={person.name} width={80} height={80} className="h-10 w-10 rounded-full object-cover object-top" />
                    <span>
                      <span className="block text-sm font-semibold text-deep-navy">{person.name}</span>
                      <span className="block text-xs text-dark-text/60">{person.role}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </>
  );
}
