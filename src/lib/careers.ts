/**
 * Open roles and their read adapter.
 *
 * Same shape as `lib/blog.ts`: a typed module behind async accessors, so the
 * pages never touch the array directly and a database table can replace it
 * without touching a component.
 *
 * To close a role, set `isOpen: false` rather than deleting the object. The
 * page keeps returning a real 200 for a while, which is better than a sudden
 * 404 on a URL that people have bookmarked and Google has indexed.
 */

export const departments = [
  "Design",
  "Engineering",
  "Quality Assurance",
  "Marketing",
  "Support",
] as const;

export const employmentTypes = ["Full time", "Internship", "Contract"] as const;

export type Department = (typeof departments)[number];
export type EmploymentType = (typeof employmentTypes)[number];

export type Job = {
  slug: string;
  title: string;
  department: Department;
  type: EmploymentType;
  location: string;
  /** "Remote", "Hybrid", or "On site". Used for the JobPosting schema. */
  workplace: "On site" | "Hybrid" | "Remote";
  /**
   * The next five fields exist so a candidate never has to guess. Vague ranges
   * ("1 to 3 years") were removed deliberately: every one of these should be a
   * concrete, checkable answer.
   */
  experience: string;
  duration: string;
  commitment: string;
  startDate: string;
  openings: number;
  compensation: string;
  summary: string;
  postedAt: string;
  /** Roles stay live for a while after closing so the URL does not 404 overnight. */
  isOpen: boolean;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  offer: string[];
};

const jobs: Job[] = [
  {
    slug: "seo-digital-marketing-intern",
    title: "SEO and Digital Marketing Intern",
    department: "Marketing",
    type: "Internship",
    location: "Kaushaltar, Bhaktapur",
    workplace: "On site",
    experience: "No prior experience required",
    duration: "6 months, with a full time role on completion for those who do well",
    commitment: "Full time, Sunday to Friday, 10:00 to 18:00",
    startDate: "Immediate",
    openings: 2,
    compensation: "Paid internship. The stipend is confirmed at offer stage.",
    summary:
      "Learn search and paid marketing by running real campaigns for real clients from your first month, with someone senior reviewing the work.",
    postedAt: "2026-08-05",
    isOpen: true,
    about: [
      "This is a working internship rather than a shadowing one. Within the first month you will be doing keyword research, writing content briefs, and making on page changes that go live on client sites in Nepal and overseas.",
      "You will be reviewed, corrected, and asked to explain your reasoning. That is the point. Marketing you cannot justify to a client is marketing we will not run.",
    ],
    responsibilities: [
      "Run keyword research and competitor checks for client and in house projects.",
      "Write content briefs and on page copy, then measure whether it moved anything.",
      "Maintain Google Business Profiles and local listings.",
      "Help plan, launch, and monitor Meta and Google campaigns within an agreed budget.",
      "Build the monthly client report: rankings, traffic, inquiries, and what changes next.",
    ],
    requirements: [
      "Completed or final year study in marketing, IT, management, or a related field.",
      "Clear written English. Nepali fluency for local client work.",
      "Comfortable in a spreadsheet, and willing to be corrected on your numbers.",
      "Able to work from the Bhaktapur office for the full six months.",
    ],
    niceToHave: [
      "Any hands on use of Google Analytics or Search Console, even on a personal site.",
      "A blog, a page, or a store you have run yourself.",
      "Basic design skills for social creatives.",
    ],
    offer: [
      "A named mentor from day one and weekly review of your work.",
      "Live client accounts, not practice exercises.",
      "A full time offer at the end for interns who perform.",
      "A written reference and certificate either way.",
    ],
  },
  {
    slug: "ui-ux-designer-intern",
    title: "UI/UX Designer Intern",
    department: "Design",
    type: "Internship",
    location: "Kaushaltar, Bhaktapur",
    workplace: "On site",
    experience: "No prior experience required",
    duration: "6 months, with a full time role on completion for those who do well",
    commitment: "Full time, Sunday to Friday, 10:00 to 18:00",
    startDate: "Immediate",
    openings: 1,
    compensation: "Paid internship. The stipend is confirmed at offer stage.",
    summary:
      "Design real screens for our product suite and client platforms, and sit with the developers who build what you hand over.",
    postedAt: "2026-08-05",
    isOpen: true,
    about: [
      "You would work on our own products and on client platforms, taking screens from wireframe to a handover a developer can build without guessing.",
      "Designs here are discussed, not decorated. You will be asked why a screen works the way it does, and a good answer beats a pretty one.",
    ],
    responsibilities: [
      "Turn a workflow discussion into wireframes, then into finished screens.",
      "Design for the devices people actually use, including mid range Android phones.",
      "Build and maintain components in Figma instead of styling each screen fresh.",
      "Cover every state: empty, loading, error, and success.",
      "Sit with developers during the build and adjust when something does not work.",
    ],
    requirements: [
      "Completed or final year study in design, IT, or a related field, or a portfolio that speaks for itself.",
      "Working knowledge of Figma, including components and auto layout.",
      "An eye for typography, spacing, and hierarchy on a small screen.",
      "Able to work from the Bhaktapur office for the full six months.",
    ],
    niceToHave: [
      "Any dashboard or admin panel work, not only marketing pages.",
      "Enough HTML and CSS to prototype or sanity check a build.",
      "Awareness of contrast and focus states.",
    ],
    offer: [
      "A named mentor from day one and weekly design review.",
      "Your work shipped in products that are in daily use.",
      "A full time offer at the end for interns who perform.",
      "A written reference and certificate either way.",
    ],
  },
];

function byNewest(a: Job, b: Job) {
  return b.postedAt.localeCompare(a.postedAt);
}

// ---------------------------------------------------------------------------
// Read adapter.
// ---------------------------------------------------------------------------

export async function getJobs(): Promise<Job[]> {
  return jobs.filter((job) => job.isOpen).sort(byNewest);
}

/** Includes closed roles, so an indexed URL keeps resolving after a role fills. */
export async function getJob(slug: string): Promise<Job | null> {
  return jobs.find((job) => job.slug === slug) ?? null;
}

export async function getJobSlugs(): Promise<string[]> {
  return jobs.map((job) => job.slug);
}

/** Where applications and general CVs go. */
export const careersEmail = "careers@infobytesnepal.com";

export function formatJobDate(value: string) {
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

/**
 * JobPosting requires a validThrough date. Roles are treated as open for 90
 * days from posting, which keeps the markup valid without anyone maintaining a
 * second date by hand.
 */
export function jobValidThrough(postedAt: string) {
  const parsed = new Date(`${postedAt}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return undefined;
  parsed.setUTCDate(parsed.getUTCDate() + 90);
  return parsed.toISOString().slice(0, 10);
}
