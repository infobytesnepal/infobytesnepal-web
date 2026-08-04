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
  experience: string;
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
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full time",
    location: "Kaushaltar, Bhaktapur",
    workplace: "On site",
    experience: "1 to 3 years",
    summary:
      "Design the screens behind our own products and our client work, from first wireframe through to the handover the developers actually build from.",
    postedAt: "2026-07-22",
    isOpen: true,
    about: [
      "You would work on both sides of what we do: the interfaces for our own products (Nidanyo, Serviol, Purseol, LeadRack, Pravyo) and the websites and systems we build for clients across Nepal.",
      "This is not a role where designs get thrown over a wall. You sit with the people who will write the code, and you will be asked why a screen works the way it does. If you like defending your decisions with reasons rather than taste, you will enjoy it here.",
    ],
    responsibilities: [
      "Turn a workflow discussion into wireframes, then into screens a developer can build without guessing.",
      "Design for the devices our users actually have, which is usually a mid range Android phone.",
      "Keep a consistent component library across a product rather than styling each screen fresh.",
      "Run short usability checks with real users and change the design when they struggle.",
      "Hand over specs, states, and assets properly: empty, loading, error, and success.",
    ],
    requirements: [
      "A portfolio showing real screens you designed, with your reasoning explained.",
      "Working knowledge of Figma, including components and auto layout.",
      "An eye for typography, spacing, and hierarchy that holds up on a small screen.",
      "Enough understanding of the web to know what is cheap to build and what is not.",
      "Clear written and spoken English and Nepali.",
    ],
    niceToHave: [
      "Experience designing dashboards or admin panels rather than only marketing pages.",
      "Some HTML and CSS, enough to prototype or check a build.",
      "Exposure to accessibility basics such as contrast and focus states.",
    ],
    offer: [
      "Work on products used by real businesses, not slide decks.",
      "A small team where your design decisions are visible in the shipped result.",
      "Salary matched to your experience, reviewed yearly.",
      "Paid time off, festival leave, and a predictable schedule.",
    ],
  },
  {
    slug: "react-developer",
    title: "React Developer",
    department: "Engineering",
    type: "Full time",
    location: "Kaushaltar, Bhaktapur",
    workplace: "Hybrid",
    experience: "2 to 4 years",
    summary:
      "Build the front end of our products and client platforms in React and Next.js, with a real focus on how they perform on Nepali mobile networks.",
    postedAt: "2026-07-18",
    isOpen: true,
    about: [
      "Most of our front end work is React and Next.js against our own APIs. You would be building dashboards, admin panels, and public sites that need to stay fast on a mid range phone on mobile data.",
      "We care more about a maintainable component and a fast first paint than about the newest library. If you have opinions about bundle size and re rendering, we will want to hear them.",
    ],
    responsibilities: [
      "Build and maintain interfaces in React and Next.js with TypeScript.",
      "Turn designs into accessible, responsive components that work from 360px up.",
      "Keep Core Web Vitals healthy: lazy loading, correct image sizing, no layout shift.",
      "Write components that the next developer can read without a walkthrough.",
      "Review pull requests and explain your reasoning in them.",
    ],
    requirements: [
      "Two or more years writing React in production, not only in tutorials.",
      "Confident with TypeScript, modern CSS, and a component driven approach.",
      "Understanding of how the browser actually loads and renders a page.",
      "Comfortable with Git in a team, including branching and code review.",
    ],
    niceToHave: [
      "Next.js App Router experience.",
      "Experience with an ORM such as Drizzle or Prisma.",
      "Any exposure to progressive web apps or offline behaviour.",
    ],
    offer: [
      "Real ownership of features from planning through to production.",
      "A modern stack that we keep current rather than letting rot.",
      "Salary matched to your experience, reviewed yearly.",
      "Hybrid working once you are settled in the team.",
    ],
  },
  {
    slug: "laravel-developer",
    title: "Laravel Developer",
    department: "Engineering",
    type: "Full time",
    location: "Kaushaltar, Bhaktapur",
    workplace: "On site",
    experience: "2 to 5 years",
    summary:
      "Build and maintain the PHP and Laravel systems behind client platforms: billing, inventory, reporting, and the integrations that hold them together.",
    postedAt: "2026-07-11",
    isOpen: true,
    about: [
      "A good part of the business software we deliver in Nepal runs on Laravel. You would be working on the parts where correctness matters most: billing, stock, permissions, and the reports management actually reads.",
      "This work rewards care. A rounding error in a billing module is a phone call on a Saturday, so we write tests where they earn their keep and we review each other's schema changes.",
    ],
    responsibilities: [
      "Design and build Laravel applications and REST APIs.",
      "Model data properly, including migrations, indexes, and constraints.",
      "Build reporting and export features that stay fast as tables grow.",
      "Integrate third party services: payment gateways, SMS providers, and accounting tools.",
      "Handle permissions and audit trails so every change has a name against it.",
    ],
    requirements: [
      "Two or more years with PHP and Laravel on live systems.",
      "Solid relational database skills, including query tuning.",
      "Understanding of authentication, authorisation, and common web vulnerabilities.",
      "Git in a team setting.",
    ],
    niceToHave: [
      "Experience with Nepali payment gateways such as eSewa, Khalti, or Fonepay.",
      "Queue and scheduled job experience.",
      "Any front end skill, enough to be useful at the boundary.",
    ],
    offer: [
      "Systems that run real operations, with the responsibility that comes with it.",
      "Code review culture rather than merge and hope.",
      "Salary matched to your experience, reviewed yearly.",
      "Paid time off and festival leave.",
    ],
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    department: "Quality Assurance",
    type: "Full time",
    location: "Kaushaltar, Bhaktapur",
    workplace: "On site",
    experience: "1 to 3 years",
    summary:
      "Find the problems before our clients do, across web platforms, admin panels, and mobile apps, on the devices our users actually own.",
    postedAt: "2026-06-30",
    isOpen: true,
    about: [
      "We deliver in stages, which means testing happens continuously rather than in a panic at the end. You would own that: test plans, regression passes before each release, and the bug reports that developers can act on without a follow up conversation.",
      "The most valuable testing we do is on real devices on real networks. A feature that works on office wifi and fails in a shop in Butwal has not been tested.",
    ],
    responsibilities: [
      "Write and run test cases for new features and regression passes before release.",
      "Test on real Android devices and on slow connections, not only on a laptop.",
      "File bug reports with steps, expected result, actual result, and evidence.",
      "Verify fixes and keep a regression suite that grows with the product.",
      "Check accessibility basics: keyboard navigation, focus order, and contrast.",
    ],
    requirements: [
      "One or more years in a QA role on web or mobile products.",
      "Methodical approach and genuinely careful attention to detail.",
      "Ability to write a bug report a developer can reproduce first time.",
      "Comfortable with browser developer tools.",
    ],
    niceToHave: [
      "Any test automation experience, for example Playwright or Cypress.",
      "API testing with Postman or similar.",
      "Basic SQL for checking what actually landed in the database.",
    ],
    offer: [
      "A team that treats QA as part of delivery rather than a gate at the end.",
      "Exposure across every product we build.",
      "Salary matched to your experience, reviewed yearly.",
      "Paid time off and festival leave.",
    ],
  },
  {
    slug: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    department: "Marketing",
    type: "Full time",
    location: "Kaushaltar, Bhaktapur",
    workplace: "Hybrid",
    experience: "1 to 3 years",
    summary:
      "Run search and social work for our clients and for us, and report on it with the numbers that actually matter rather than reach.",
    postedAt: "2026-06-24",
    isOpen: true,
    about: [
      "You would handle SEO and paid campaigns for clients across Nepal, plus our own site. The work is a mix of technical SEO, content planning, campaign management, and the monthly reporting that tells a client whether their money did anything.",
      "We do not promise page one in two weeks, and we do not buy followers. If you want to do marketing you can explain honestly to a client, this will suit you.",
    ],
    responsibilities: [
      "Run on page and local SEO work: structure, content briefs, and Google Business Profile.",
      "Plan and manage paid campaigns on Meta and Google within an agreed budget.",
      "Write and schedule social content that sounds like the client, not like a template.",
      "Report monthly on rankings, traffic, and inquiries, with what you plan to change next.",
      "Keep an eye on what competitors in the same market are doing.",
    ],
    requirements: [
      "One or more years running real campaigns or SEO work, with results you can talk through.",
      "Working knowledge of Google Analytics and Google Search Console.",
      "Clear writing in English and Nepali.",
      "Comfort with numbers and a spreadsheet.",
    ],
    niceToHave: [
      "Experience with local SEO for businesses in Nepal.",
      "Basic design skills for social creatives.",
      "Any familiarity with structured data or technical SEO.",
    ],
    offer: [
      "A portfolio of real clients across several industries.",
      "Budget authority once you have shown your judgement.",
      "Salary matched to your experience, reviewed yearly.",
      "Hybrid working once you are settled in the team.",
    ],
  },
  {
    slug: "it-support-intern",
    title: "IT Support Intern",
    department: "Support",
    type: "Internship",
    location: "Kaushaltar, Bhaktapur",
    workplace: "On site",
    experience: "Fresh graduates welcome",
    summary:
      "A paid six month internship helping our clients get the most out of the systems we have delivered, with a route into a full time role.",
    postedAt: "2026-06-12",
    isOpen: true,
    about: [
      "This is a real internship, not filing. You would sit with the implementation team, help clients through their first weeks on a new system, and learn how software behaves once actual people start using it.",
      "Interns who do well here are offered full time roles. That is the point of the programme.",
    ],
    responsibilities: [
      "Answer client questions about the systems we have delivered.",
      "Help with data migration and cleanup before a system goes live.",
      "Run training sessions for client staff on the screens they will use.",
      "Log issues clearly and pass the real ones to the development team.",
      "Keep short setup and troubleshooting notes for the next person.",
    ],
    requirements: [
      "A degree, or final year study, in IT, computer science, or something related.",
      "Patience, and the ability to explain a technical thing to a nontechnical person.",
      "Clear communication in Nepali and English.",
      "Willingness to work from the Bhaktapur office.",
    ],
    niceToHave: [
      "Any exposure to SQL or a scripting language.",
      "Previous customer facing experience of any kind.",
    ],
    offer: [
      "A paid six month internship with a mentor assigned from day one.",
      "Genuine consideration for a full time role at the end.",
      "Exposure to every product we build and support.",
      "A certificate and a reference either way.",
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

export async function getOpenDepartments(): Promise<Department[]> {
  const open = await getJobs();
  return departments.filter((department) => open.some((job) => job.department === department));
}

export async function getOpenTypes(): Promise<EmploymentType[]> {
  const open = await getJobs();
  return employmentTypes.filter((type) => open.some((job) => job.type === type));
}

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
