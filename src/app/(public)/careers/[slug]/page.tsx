import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Briefcase, Building2, CalendarDays, Clock, Mail, MapPin, Users } from "lucide-react";
import Breadcrumbs, { breadcrumbSchema } from "@/components/public/breadcrumbs";
import JobApplicationForm from "@/components/public/job-application-form";
import { careersEmail, formatJobDate, getJob, getJobSlugs, getJobs, jobValidThrough } from "@/lib/careers";
import { getCanonicalSiteUrl } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = await getJobSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) return {};

  const siteUrl = getCanonicalSiteUrl();
  const url = `${siteUrl}/careers/${job.slug}`;
  const title = `${job.title} | Careers at Infobytes Nepal`;
  const description = job.isOpen
    ? `${job.summary} ${job.type} role in ${job.location}, ${job.experience}. Apply online.`.slice(0, 250)
    : `This role at Infobytes Nepal is now closed. See the current openings in Kaushaltar, Bhaktapur.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    // A filled role stops being a useful search result, but the page stays up
    // so an indexed URL does not 404 for people who bookmarked it.
    robots: job.isOpen ? "index,follow" : "noindex,follow",
    openGraph: {
      title,
      description,
      url,
      siteName: "Infobytes Nepal",
      type: "website",
      images: [{ url: "/assets/hero/infobytes-hero-fallback.webp", alt: `Careers at Infobytes Nepal, ${job.title}` }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) notFound();

  const siteUrl = getCanonicalSiteUrl();
  const url = `${siteUrl}/careers/${job.slug}`;
  const otherRoles = (await getJobs()).filter((item) => item.slug !== job.slug).slice(0, 3);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: job.title, href: `/careers/${job.slug}` },
  ];

  const schema = [
    breadcrumbSchema(crumbs),
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "@id": `${url}#job`,
      title: job.title,
      description: [
        `<p>${job.summary}</p>`,
        `<h3>About the role</h3><p>${job.about.join("</p><p>")}</p>`,
        `<h3>Responsibilities</h3><ul>${job.responsibilities.map((item) => `<li>${item}</li>`).join("")}</ul>`,
        `<h3>Requirements</h3><ul>${job.requirements.map((item) => `<li>${item}</li>`).join("")}</ul>`,
        `<h3>What we offer</h3><ul>${job.offer.map((item) => `<li>${item}</li>`).join("")}</ul>`,
      ].join(""),
      datePosted: job.postedAt,
      validThrough: jobValidThrough(job.postedAt),
      employmentType: job.type === "Full time" ? "FULL_TIME" : job.type === "Internship" ? "INTERN" : "CONTRACTOR",
      hiringOrganization: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Infobytes Nepal",
        sameAs: siteUrl,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kaushaltar",
          addressLocality: "Bhaktapur",
          addressRegion: "Bagmati",
          addressCountry: "NP",
        },
      },
      // Only set for roles that are genuinely not on site, since Google treats
      // this as a strong signal and mislabelling it is a manual action risk.
      ...(job.workplace === "Remote" ? { jobLocationType: "TELECOMMUTE" } : {}),
      applicantLocationRequirements: { "@type": "Country", name: "Nepal" },
      experienceRequirements: job.experience,
      industry: "Information Technology",
      url,
      directApply: true,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-x bg-soft-blue/40 pb-12 pt-32">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs crumbs={crumbs} />
          {!job.isOpen && (
            <p className="mb-5 rounded-2xl border border-primary-blue/15 bg-white px-5 py-3 text-sm font-medium text-deep-navy">
              This role has been filled. You can still{" "}
              <a href={`mailto:${careersEmail}?subject=General%20application`} className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4">
                send a general application
              </a>
              , or see the{" "}
              <Link href="/careers" className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4">
                current openings
              </Link>
              .
            </p>
          )}
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-deep-navy md:text-5xl">{job.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="chip !text-primary-blue">{job.department}</span>
            <span className="chip">{job.type}</span>
            <span className="chip">{job.workplace}</span>
            <span className="chip">{job.openings} {job.openings === 1 ? "opening" : "openings"}</span>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dark-text/62">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" />
              {job.commitment}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} aria-hidden="true" />
              Starts {job.startDate.toLowerCase()}
            </span>
            <span className="text-dark-text/45">Posted {formatJobDate(job.postedAt)}</span>
          </div>
        </div>
      </section>

      {/* pb-28 on mobile keeps the sticky bottom bar from covering the last section. */}
      <div className="page-x bg-white pb-28 pt-14 md:pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
          <div className="min-w-0 max-w-[68ch]">
            <h2 className="text-2xl font-semibold text-deep-navy md:text-3xl">About the role</h2>
            {job.about.map((paragraph, index) => (
              <p key={index} className="mt-5 leading-8 text-dark-text/78">
                {paragraph}
              </p>
            ))}

            <Section title="What you would do" items={job.responsibilities} />
            <Section title="What we are looking for" items={job.requirements} />
            <Section title="Good to have" items={job.niceToHave} />
            <Section title="What we offer" items={job.offer} />

            <h2 className="mt-12 text-2xl font-semibold text-deep-navy md:text-3xl">How to apply</h2>
            <p className="mt-5 leading-8 text-dark-text/78">
              Fill in the form below, or email your CV to{" "}
              <a href={`mailto:${careersEmail}?subject=${encodeURIComponent(job.title)}`} className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4">
                {careersEmail}
              </a>{" "}
              with the role name in the subject. We read every application and reply either way, usually within a week.
            </p>

            {job.isOpen ? (
              <div id="apply" className="mt-8 scroll-mt-28">
                <JobApplicationForm jobSlug={job.slug} jobTitle={job.title} />
              </div>
            ) : (
              <div id="apply" className="mt-8 scroll-mt-28 rounded-[28px] border border-primary-blue/12 bg-soft-blue/30 p-7">
                <h3 className="text-lg font-semibold text-deep-navy">This role is closed</h3>
                <p className="mt-3 leading-7 text-dark-text/72">
                  We are no longer accepting applications for it. Send a general application and we will keep it on file.
                </p>
                <a
                  href={`mailto:${careersEmail}?subject=General%20application`}
                  className="focus-ring site-button mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
                >
                  <Mail size={16} aria-hidden="true" />
                  Email us
                </a>
              </div>
            )}
          </div>

          {/* Sticky summary on desktop only. */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 grid gap-4">
              <div className="card-premium p-6">
                <h2 className="text-lg font-semibold text-deep-navy">{job.title}</h2>
                <dl className="mt-5 grid gap-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Building2 size={15} className="mt-0.5 shrink-0 text-primary-blue" aria-hidden="true" />
                    <div>
                      <dt className="text-dark-text/55">Department</dt>
                      <dd className="font-semibold text-deep-navy">{job.department}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase size={15} className="mt-0.5 shrink-0 text-primary-blue" aria-hidden="true" />
                    <div>
                      <dt className="text-dark-text/55">Type</dt>
                      <dd className="font-semibold text-deep-navy">
                        {job.type} · {job.workplace}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-primary-blue" aria-hidden="true" />
                    <div>
                      <dt className="text-dark-text/55">Location</dt>
                      <dd className="font-semibold text-deep-navy">{job.location}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={15} className="mt-0.5 shrink-0 text-primary-blue" aria-hidden="true" />
                    <div>
                      <dt className="text-dark-text/55">Hours</dt>
                      <dd className="font-semibold text-deep-navy">{job.commitment}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarDays size={15} className="mt-0.5 shrink-0 text-primary-blue" aria-hidden="true" />
                    <div>
                      <dt className="text-dark-text/55">Duration and start</dt>
                      <dd className="font-semibold text-deep-navy">{job.duration}</dd>
                      <dd className="text-dark-text/62">Starts {job.startDate.toLowerCase()}</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={15} className="mt-0.5 shrink-0 text-primary-blue" aria-hidden="true" />
                    <div>
                      <dt className="text-dark-text/55">Openings and experience</dt>
                      <dd className="font-semibold text-deep-navy">
                        {job.openings} {job.openings === 1 ? "opening" : "openings"}
                      </dd>
                      <dd className="text-dark-text/62">{job.experience}</dd>
                    </div>
                  </div>
                </dl>
                <p className="mt-4 rounded-2xl bg-soft-blue/60 px-4 py-3 text-xs leading-5 text-dark-text/70">
                  {job.compensation}
                </p>
                {job.isOpen && (
                  <a href="#apply" className="focus-ring site-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold">
                    Apply for this role
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>

              {otherRoles.length > 0 && (
                <div className="rounded-[24px] border border-primary-blue/10 bg-soft-blue/30 p-6">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-blue">Other openings</h2>
                  <ul className="mt-4 grid gap-3">
                    {otherRoles.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/careers/${item.slug}`} className="focus-ring group block rounded">
                          <span className="block text-sm font-semibold text-deep-navy transition group-hover:text-primary-blue">
                            {item.title}
                          </span>
                          <span className="block text-xs text-dark-text/58">
                            {item.department} · {item.type}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile apply bar. Hidden on desktop, where the sticky card does the job. */}
      {job.isOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary-blue/12 bg-white/95 px-4 py-3 shadow-[0_-10px_28px_rgba(4,18,63,0.08)] backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-3xl items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-deep-navy">{job.title}</p>
              <p className="truncate text-xs text-dark-text/58">
                {job.type} · {job.location}
              </p>
            </div>
            <a href="#apply" className="focus-ring site-button shrink-0 rounded-full px-6 py-2.5 text-sm font-semibold">
              Apply
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <>
      <h2 className="mt-12 text-2xl font-semibold text-deep-navy md:text-3xl">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-8 text-dark-text/78">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
