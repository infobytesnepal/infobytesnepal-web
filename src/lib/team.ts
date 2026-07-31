export type TeamMember = {
  /** URL slug — must be unique. Used for /team/<slug> */
  slug: string;
  name: string;
  /** Job title / designation shown under the name */
  role: string;
  /** Transparent-background portrait PNG. Put new images in /public/assets/team/ */
  image: string;
  /** Short one-line summary used for the profile meta description + card */
  summary: string;
  /** City / area for local SEO, e.g. "Bhaktapur, Nepal" */
  location: string;
  /** Topics the person is known for — used in Person schema (knowsAbout) */
  expertise: string[];
  /** Full bio paragraphs shown on the /team/<slug> profile page */
  bio: string[];
  /** Optional external profiles (LinkedIn, GitHub, etc.) — strengthens Person entity */
  sameAs?: string[];
  /** Optional contact email shown on the profile page */
  email?: string;
};

/**
 * HOW TO ADD A PERSON
 * 1. Drop their cutout PNG (transparent background) in /public/assets/team/
 * 2. Copy one object below, change the fields, give it a unique `slug`.
 * That's it — the About team grid, the /team/<slug> page, the SEO schema,
 * the sitemap and llms.txt all update automatically.
 */
export const team: TeamMember[] = [
  {
    slug: "sugam-dahal",
    name: "Sugam Dahal",
    role: "Implementation & Deployment Lead",
    image: "/assets/about/sugam-dahal.png",
    summary:
      "Sugam Dahal leads implementation and deployment at Infobytes Nepal, the stage where a finished build has to survive contact with a real office.",
    location: "Bhaktapur, Nepal",
    expertise: [
      "Product Strategy",
      "Custom Software Development",
      "Business Automation",
      "Field Service & Lead Management Software",
      "Web Development",
    ],
    bio: [
      "Sugam runs the part of a project that decides whether it succeeds: getting a finished system into an office where people already have a way of doing things.",
      "That work is less about code than about people. Data has to be migrated and cleaned, staff have to be trained on the screens they will actually use, and someone has to be reachable in the first weeks when a question comes up mid rush. Sugam handles all three, which is why our projects go live in stages rather than in one switch-over that nobody is ready for.",
      "He argues for smaller first versions than clients usually ask for. A focused module in real use for a month teaches more about what to build next than any amount of planning, and it lets the team adjust while changes are still cheap.",
      "His view of the job is simple: understand the workflow, keep the scope honest, build cleanly, and improve it once real usage shows where the friction is.",
    ],
    sameAs: [],
  },
  {
    slug: "kapil-aryal",
    name: "Kapil Aryal",
    role: "Mobile Application & PWA Specialist",
    image: "/assets/about/kapil-aryal.png",
    summary:
      "Kapil Aryal builds the mobile and progressive web apps at Infobytes Nepal, with a particular focus on making them work on ordinary phones and unreliable connections.",
    location: "Bhaktapur, Nepal",
    expertise: [
      "Mobile Application Development",
      "Progressive Web Apps",
      "Offline-first and Low-bandwidth Design",
      "Business Workflow Systems",
      "Software Product Development",
    ],
    bio: [
      "Kapil builds our mobile and progressive web apps, which in Nepal means designing for the phone and the network people actually have rather than the ones in a demo video.",
      "A lot of his work is offline-first. Field service and field sales teams lose signal constantly, so the apps behind Serviol and Purseol store work locally and sync when a connection returns, without the user having to think about it. Getting that right is unglamorous and it is the difference between an app a field team uses and one they abandon in week two.",
      "He also pushes for progressive web apps where they fit. For a lot of Nepali businesses a PWA reaches users on both Android and iOS without a store listing, a review queue, or the cost of maintaining two native builds, and most of the time nobody notices the difference.",
    ],
    sameAs: [],
  },
  {
    slug: "bibek-neupane",
    name: "Bibek Neupane",
    role: "Operations Incharge - Europe Region",
    image: "/assets/about/bibek-neupane.png",
    summary:
      "Bibek Neupane is Operations Incharge for the Europe region at Infobytes Nepal, handling client communication and delivery for European projects.",
    location: "Bhaktapur, Nepal",
    expertise: [
      "Client Operations",
      "Project Delivery",
      "Requirement Gathering",
      "Custom Software Development",
      "Web Development",
    ],
    bio: [
      "Bibek looks after our European clients, which mostly means solving the two problems distance creates: a time difference that can turn one question into a lost day, and requirements that get thinner the further they travel.",
      "He works against both by keeping calls in the client's working hours, writing requirements down in a form both sides can check, and reporting progress on a fixed schedule rather than when there is news. Clients abroad rarely mind a delay they were told about. They mind silence.",
    ],
    sameAs: [],
  },
];

export function getTeamMember(slug: string) {
  return team.find((member) => member.slug === slug) || null;
}
