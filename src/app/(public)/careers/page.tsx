import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Briefcase, Clock, Mail, MapPin, Layers, Headset, Target, Workflow } from "lucide-react";
import Breadcrumbs, { breadcrumbSchema } from "@/components/public/breadcrumbs";
import CtaBand from "@/components/public/cta-band";
import Reveal from "@/components/public/reveal";
import {
  departments,
  employmentTypes,
  formatJobDate,
  getJobs,
  getOpenDepartments,
  getOpenTypes,
  type Department,
  type EmploymentType,
} from "@/lib/careers";
import { basicPageMetadata } from "@/lib/seo";
import { getCanonicalSiteUrl } from "@/lib/utils";

export function generateMetadata(): Metadata {
  return basicPageMetadata({
    route: "/careers",
    title: "Careers at Infobytes Nepal | IT Jobs in Bhaktapur",
    description:
      "Open IT jobs at Infobytes Nepal in Kaushaltar, Bhaktapur. Design, development, QA, marketing, and internships, with the full role details and how to apply.",
    ogTitle: "Work at Infobytes Nepal",
    ogDescription:
      "Open roles in design, engineering, QA, and marketing at Infobytes Nepal, Kaushaltar, Bhaktapur.",
  });
}

// Mirrors the "Why Infobytes Nepal" treatment on the home page: same icon tile,
// same card, same four-up grid.
const whyWorkHere = [
  {
    title: "You own what you build",
    description:
      "Small team, no layers. The person who plans a feature builds it and sees it used by a real client, usually within weeks rather than quarters.",
    icon: Target,
  },
  {
    title: "Products, not just projects",
    description:
      "We run five of our own products alongside client work, so you get to live with your decisions instead of handing them over and moving on.",
    icon: Layers,
  },
  {
    title: "We ship in stages",
    description:
      "No death march before a launch date. Work goes out module by module, which means fewer late nights and faster feedback on what you made.",
    icon: Workflow,
  },
  {
    title: "Learning is part of the job",
    description:
      "Code review is normal here, and so is being asked why. Everyone gets time to pick up the parts of the stack they have not touched yet.",
    icon: Headset,
  },
];

// Same numbered step pattern as the "How we work" 01 to 05 strip on the home page.
const hiringProcess = [
  { title: "Apply", text: "Send the form on the role page. A CV helps, but the short message matters more than a template." },
  { title: "Screening", text: "A short call to cover the role, your experience, and what you are looking for. About 20 minutes." },
  { title: "Task", text: "A small, paid, realistic task. Scoped to a few hours, never spec work we would actually ship." },
  { title: "Interview", text: "You walk us through the task and meet the people you would work with day to day." },
  { title: "Offer", text: "A written offer with salary, start date, and terms. We tell every candidate either way." },
];

type SearchParams = Promise<{ department?: string; type?: string }>;

function isDepartment(value: string | undefined): value is Department {
  return !!value && (departments as readonly string[]).includes(value);
}

function isType(value: string | undefined): value is EmploymentType {
  return !!value && (employmentTypes as readonly string[]).includes(value);
}

function buildHref(department: Department | null, type: EmploymentType | null) {
  const params = new URLSearchParams();
  if (department) params.set("department", department);
  if (type) params.set("type", type);
  const query = params.toString();
  return query ? `/careers?${query}` : "/careers";
}

const filterBase =
  "focus-ring inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition";
const filterOn = `${filterBase} border-primary-blue/25 bg-soft-blue text-primary-blue`;
const filterOff = `${filterBase} border-primary-blue/12 bg-white text-dark-text/70 hover:border-primary-green/40 hover:text-primary-blue`;

export default async function CareersPage({ searchParams }: { searchParams: SearchParams }) {
  const { department: rawDepartment, type: rawType } = await searchParams;
  const activeDepartment = isDepartment(rawDepartment) ? rawDepartment : null;
  const activeType = isType(rawType) ? rawType : null;

  const [openJobs, openDepartments, openTypes] = await Promise.all([
    getJobs(),
    getOpenDepartments(),
    getOpenTypes(),
  ]);

  const filtered = openJobs.filter(
    (job) =>
      (!activeDepartment || job.department === activeDepartment) && (!activeType || job.type === activeType),
  );

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
      description: "Open roles at Infobytes Nepal Pvt. Ltd. in Kaushaltar, Bhaktapur, Nepal.",
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
            We are a small team in Kaushaltar, Bhaktapur, building software for businesses across Nepal. If you want your
            work in front of real users quickly and you like being asked why, this is a good place to be.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-dark-text/64">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-primary-blue" aria-hidden="true" />
              Kaushaltar, Bhaktapur
            </span>
            <span className="inline-flex items-center gap-2">
              <Briefcase size={15} className="text-primary-blue" aria-hidden="true" />
              {openJobs.length} open {openJobs.length === 1 ? "role" : "roles"}
            </span>
          </div>
        </div>
      </section>

      <section className="page-x bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">Why work here</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-deep-navy md:text-5xl">
            What the job is actually like.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyWorkHere.map((item) => (
              <Reveal key={item.title}>
                <div className="card-premium h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-primary-blue">
                    <item.icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-deep-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dark-text/70">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-x bg-soft-blue/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="eyebrow">How hiring works</span>
            <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Five steps, no guessing.</h2>
            <p className="mt-5 leading-8 text-dark-text/72">
              You will always know which step you are on and roughly how long the next one takes.
            </p>
          </div>
          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {hiringProcess.map((step, index) => (
              <Reveal key={step.title}>
                <li className="card-premium h-full p-6">
                  <p className="text-sm font-semibold text-primary-blue">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-xl font-semibold text-deep-navy">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-dark-text/70">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="open-roles" className="page-x bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <span className="eyebrow">Open roles</span>
          <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-5xl">Where we need people right now.</h2>

          {openJobs.length > 0 && (
            <div className="mt-9 grid gap-4">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-dark-text/50">Department</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  <li>
                    <Link href={buildHref(null, activeType)} aria-current={!activeDepartment ? "true" : undefined} className={!activeDepartment ? filterOn : filterOff}>
                      All
                    </Link>
                  </li>
                  {openDepartments.map((item) => (
                    <li key={item}>
                      <Link
                        href={buildHref(item, activeType)}
                        aria-current={activeDepartment === item ? "true" : undefined}
                        className={activeDepartment === item ? filterOn : filterOff}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-dark-text/50">Type</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  <li>
                    <Link href={buildHref(activeDepartment, null)} aria-current={!activeType ? "true" : undefined} className={!activeType ? filterOn : filterOff}>
                      All
                    </Link>
                  </li>
                  {openTypes.map((item) => (
                    <li key={item}>
                      <Link
                        href={buildHref(activeDepartment, item)}
                        aria-current={activeType === item ? "true" : undefined}
                        className={activeType === item ? filterOn : filterOff}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-[28px] border border-primary-blue/12 bg-soft-blue/30 px-6 py-14 text-center">
              <h3 className="text-xl font-semibold text-deep-navy">
                {openJobs.length === 0 ? "No open roles at the moment" : "Nothing matches those filters"}
              </h3>
              <p className="mx-auto mt-3 max-w-lg leading-7 text-dark-text/72">
                {openJobs.length === 0
                  ? "We hire in small numbers and only when there is real work waiting. If you are good at what you do, write to us anyway. We keep applications on file and we do read them."
                  : "Try a different department or type. If nothing fits, send us a general application and tell us what you do."}
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                {openJobs.length > 0 && (
                  <Link href="/careers" className="focus-ring site-button-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold">
                    Clear filters
                  </Link>
                )}
                <a
                  href="mailto:info@infobytesnepal.com?subject=General%20application"
                  className="focus-ring site-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold"
                >
                  <Mail size={16} aria-hidden="true" />
                  Send a general application
                </a>
              </div>
            </div>
          ) : (
            <ul className="mt-10 grid gap-4">
              {filtered.map((job) => (
                <Reveal key={job.slug}>
                  <li className="card-premium group grid gap-5 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="chip !py-1 !text-[0.7rem] !text-primary-blue">{job.department}</span>
                        <span className="chip !py-1 !text-[0.7rem]">{job.type}</span>
                        <span className="chip !py-1 !text-[0.7rem]">{job.workplace}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-deep-navy md:text-2xl">
                        <Link href={`/careers/${job.slug}`} className="focus-ring rounded transition hover:text-primary-blue">
                          {job.title}
                        </Link>
                      </h3>
                      <p className="mt-3 max-w-2xl leading-7 text-dark-text/72">{job.summary}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-dark-text/58">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} aria-hidden="true" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase size={14} aria-hidden="true" />
                          {job.experience}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} aria-hidden="true" />
                          Posted {formatJobDate(job.postedAt)}
                        </span>
                      </div>
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

          {filtered.length > 0 && (
            <p className="mt-10 rounded-2xl border border-primary-blue/10 bg-soft-blue/25 px-5 py-4 text-sm leading-7 text-dark-text/72">
              Nothing here quite right? Write to{" "}
              <a
                href="mailto:info@infobytesnepal.com?subject=General%20application"
                className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4"
              >
                info@infobytesnepal.com
              </a>{" "}
              and tell us what you do. We keep good applications on file.
            </p>
          )}
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
