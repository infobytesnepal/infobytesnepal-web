import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Briefcase, Clock, Mail, MapPin, Users } from "lucide-react";
import Breadcrumbs, { breadcrumbSchema } from "@/components/public/breadcrumbs";
import CtaBand from "@/components/public/cta-band";
import Reveal from "@/components/public/reveal";
import { careersEmail, formatJobDate, getJobs } from "@/lib/careers";
import { basicPageMetadata } from "@/lib/seo";
import { getCanonicalSiteUrl } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return basicPageMetadata({
    route: "/careers",
    title: "Careers at Infobytes Nepal | Openings and Internships",
    description:
      "Current openings and paid internships at Infobytes Nepal. See the exact role, duration, hours, and start date, then apply online or join our talent pool.",
    ogTitle: "Work at Infobytes Nepal",
    ogDescription: "Current openings and paid internships at Infobytes Nepal. Apply online or join the talent pool.",
  });
}

export default async function CareersPage() {
  const openJobs = await getJobs();
  const siteUrl = getCanonicalSiteUrl();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
  ];

  const schema = [
    breadcrumbSchema(crumbs),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteUrl}/careers#careers`,
      url: `${siteUrl}/careers`,
      name: "Careers at Infobytes Nepal",
      description: "Current openings and paid internships at Infobytes Nepal Pvt. Ltd.",
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-x bg-soft-blue/40 pb-14 pt-32 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs crumbs={crumbs} />
          <span className="eyebrow">
            <Briefcase size={14} /> Careers
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-deep-navy md:text-6xl">
            Come build things people actually use.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-dark-text/74">
            We build software for companies in Nepal and overseas, and we run our own product suite alongside that work.
            If you want what you make in front of real users quickly, and you like being asked why, this is a good place
            to be.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-dark-text/64">
            <span className="inline-flex items-center gap-2">
              <Briefcase size={15} className="text-primary-blue" aria-hidden="true" />
              {openJobs.length} open {openJobs.length === 1 ? "position" : "positions"}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={15} className="text-primary-blue" aria-hidden="true" />
              <a href={`mailto:${careersEmail}`} className="focus-ring rounded transition hover:text-primary-blue">
                {careersEmail}
              </a>
            </span>
          </div>
        </div>
      </section>

      <section id="open-roles" className="page-x bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">Open roles</span>
          <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Where we need people right now.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-dark-text/72">
            Every role below states the exact duration, hours, start date, and number of openings. No guessing, and no
            vague experience bands.
          </p>

          {openJobs.length === 0 ? (
            <div className="mt-10 rounded-[28px] border border-primary-blue/12 bg-soft-blue/30 px-6 py-14 text-center">
              <h3 className="text-xl font-semibold text-deep-navy">No openings advertised today</h3>
              <p className="mx-auto mt-3 max-w-lg leading-7 text-dark-text/72">
                We are still glad to hear from good people. Leave your CV in the talent pool below and we will come back
                to you when something matching opens up.
              </p>
            </div>
          ) : (
            <ul className="mt-10 grid gap-4">
              {openJobs.map((job) => (
                <Reveal key={job.slug}>
                  <li className="card-premium group grid gap-5 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="chip !py-1 !text-[0.7rem] !text-primary-blue">{job.department}</span>
                        <span className="chip !py-1 !text-[0.7rem]">{job.type}</span>
                        <span className="chip !py-1 !text-[0.7rem]">
                          {job.openings} {job.openings === 1 ? "opening" : "openings"}
                        </span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-deep-navy md:text-2xl">
                        <Link href={`/careers/${job.slug}`} className="focus-ring rounded transition hover:text-primary-blue">
                          {job.title}
                        </Link>
                      </h3>
                      <p className="mt-3 max-w-2xl leading-7 text-dark-text/72">{job.summary}</p>
                      <dl className="mt-5 grid gap-x-6 gap-y-2 text-sm text-dark-text/62 sm:grid-cols-2">
                        <div className="flex items-start gap-2">
                          <MapPin size={14} className="mt-1 shrink-0 text-primary-blue" aria-hidden="true" />
                          <div>
                            <dt className="sr-only">Location</dt>
                            <dd>
                              {job.location} · {job.workplace}
                            </dd>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock size={14} className="mt-1 shrink-0 text-primary-blue" aria-hidden="true" />
                          <div>
                            <dt className="sr-only">Hours</dt>
                            <dd>{job.commitment}</dd>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Briefcase size={14} className="mt-1 shrink-0 text-primary-blue" aria-hidden="true" />
                          <div>
                            <dt className="sr-only">Duration</dt>
                            <dd>{job.duration}</dd>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Users size={14} className="mt-1 shrink-0 text-primary-blue" aria-hidden="true" />
                          <div>
                            <dt className="sr-only">Experience</dt>
                            <dd>
                              {job.experience} · Starts {job.startDate.toLowerCase()}
                            </dd>
                          </div>
                        </div>
                      </dl>
                      <p className="mt-4 text-xs text-dark-text/50">Posted {formatJobDate(job.postedAt)}</p>
                    </div>
                    <Link
                      href={`/careers/${job.slug}`}
                      className="focus-ring site-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold md:shrink-0"
                    >
                      View role
                      <ArrowRight size={16} aria-hidden="true" className="transition group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Talent pool. The catch-all for everyone the current openings do not fit. */}
      <section className="page-x bg-soft-blue/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="card-premium grid gap-8 p-7 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10">
            <div>
              <span className="eyebrow">Talent pool</span>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-deep-navy md:text-4xl">
                Not the role you were looking for?
              </h2>
              <p className="mt-5 leading-8 text-dark-text/74">
                Leave your CV with us anyway. We keep it on file and go back to the talent pool first whenever a position
                opens up, which is often before it is ever advertised here. Tell us what you do and the kind of work you
                want to be doing.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href={`mailto:${careersEmail}?subject=${encodeURIComponent("Talent pool: [your role]")}&body=${encodeURIComponent(
                  "Hello Infobytes Nepal,\n\nI would like to join your talent pool.\n\nWhat I do:\nYears of experience:\nPortfolio or LinkedIn:\nWhere I am based:\n\nMy CV is attached.\n\nThank you,",
                )}`}
                className="focus-ring site-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold"
              >
                <Mail size={16} aria-hidden="true" />
                Send your CV to the talent pool
              </a>
              <p className="text-center text-sm text-dark-text/60">
                or write directly to{" "}
                <a href={`mailto:${careersEmail}`} className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4">
                  {careersEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Not looking for a job?"
        title="Ready to simplify how your business runs?"
        text="If you landed here as a business owner rather than a candidate, tell us what you need. We will come back with a scope, a price, and a timeline."
      />
    </>
  );
}
