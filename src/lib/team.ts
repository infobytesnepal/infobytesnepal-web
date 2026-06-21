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
      "Sugam Dahal is the Implementation & Deployment Lead at InfoBytes Nepal, responsible for ensuring smooth execution of software projects.",
    location: "Bhaktapur, Nepal",
    expertise: [
      "Product Strategy",
      "Custom Software Development",
      "Business Automation",
      "Field Service & Lead Management Software",
      "Web Development",
    ],
    bio: [
      "Sugam Dahal is the Implementation & Deployment Lead at InfoBytes Nepal, responsible for ensuring smooth execution of software projects.",
      "With a background in Organizational Implementation and a passion for Deployment Strategies, Sugam has contributed to various projects that enhance user engagement and streamline operations.",
      "His expertise lies in developing robust deployment processes and ensuring that software projects are executed smoothly and efficiently.",
      "His approach is practical and business-first: understand the workflow, keep the scope realistic, build cleanly, and improve over time. Under his leadership, Infobytes Nepal works to be a trusted, long-term technology partner for businesses in Nepal.",
    ],
    sameAs: [],
  },
  {
    slug: "kapil-aryal",
    name: "Kapil Aryal",
    role: "Mobile Application & PWA Specialist",
    image: "/assets/about/kapil-aryal.png",
    summary:
      "Kapil Aryal is a Mobile Application & PWA Specialist at Infobytes Nepal, focusing on creating seamless mobile experiences.",
    location: "Bhaktapur, Nepal",
    expertise: [
      "Technology Vision",
      "Software Product Development",
      "Business Workflow Systems",
      "Student Talent Platforms",
      "InfoBytes Nepal",
    ],
    bio: [
      "Kapil Aryal is a Mobile Application & PWA Specialist at Infobytes Nepal, focusing on creating seamless mobile experiences.",
      "With a background in software development and a passion for mobile technologies, Kapil has contributed to various projects that enhance user engagement and streamline operations.",
      "His expertise lies in developing responsive and performant mobile applications and progressive web apps that meet the evolving needs of businesses and users in Nepal.",
    ],
    sameAs: [],
  },
  {
    slug: "bibek-neupane",
    name: "Bibek Neupane",
    role: "Operations Incharge - Europe Region",
    image: "/assets/about/bibek-neupane.png",
    summary:
      "Bibek Neupane is the Operations Incharge for the Europe Region at Infobytes Nepal, overseeing operations and ensuring smooth execution of software projects across the european countries.",
    location: "Bhaktapur, Nepal",
    expertise: [
      "Product Strategy",
      "Custom Software Development",
      "Business Automation",
      "Field Service & Lead Management Software",
      "Web Development",
    ],
    bio: [
      "Bibek Neupane is the Operations Incharge for the Europe Region at Infobytes Nepal, overseeing operations and ensuring smooth execution of software projects across the european countries.",
    ],
    sameAs: [],
  },
];

export function getTeamMember(slug: string) {
  return team.find((member) => member.slug === slug) || null;
}
