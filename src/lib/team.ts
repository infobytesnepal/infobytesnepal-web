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
    slug: "rajesh-pandey",
    name: "Rajesh Pandey",
    role: "Founder",
    image: "/assets/about/rajesh-pandey.png",
    summary:
      "Rajesh Pandey is the Founder of InfoBytes Nepal, an IT company in Nepal building practical digital products and software.",
    location: "Bhaktapur, Nepal",
    expertise: [
      "Technology Vision",
      "Software Product Development",
      "Business Workflow Systems",
      "Student Talent Platforms",
      "InfoBytes Nepal",
    ],
    bio: [
      "Rajesh Pandey is the Founder of InfoBytes Nepal, a Nepal-based IT company that builds focused digital products and custom software for growing teams. His work centers on turning real operational problems into clean, dependable technology.",
      "InfoBytes Nepal began with a simple idea shared over tea-time conversations: that everyday business problems could be solved with a few thoughtful lines of code. That belief grew into Pravyo and the company's wider product direction across field service, sales, lead tracking, and student talent workflows.",
      "Rajesh focuses on product vision and the long-term direction of InfoBytes Nepal, guiding the team toward systems that are practical to use, maintainable over time, and genuinely useful for businesses in Nepal.",
    ],
    sameAs: [],
  },
  {
    slug: "shiwam-paudel",
    name: "Shiwam Paudel",
    role: "Co-Founder & CEO",
    image: "/assets/about/shiwam-paudel.png",
    summary:
      "Shiwam Paudel is the Co-Founder & CEO of InfoBytes Nepal, leading custom software, web, and business automation work.",
    location: "Bhaktapur, Nepal",
    expertise: [
      "Product Strategy",
      "Custom Software Development",
      "Business Automation",
      "Field Service & Lead Management Software",
      "Web Development",
    ],
    bio: [
      "Shiwam Paudel is the Co-Founder & CEO of InfoBytes Nepal, where he leads the company's software development, web, SEO, and business automation work. He focuses on building digital systems that make everyday operations clearer for growing teams.",
      "At InfoBytes Nepal, Shiwam helps shape products such as Serviol for field service management, Purseol for field sales, LeadRack for lead tracking, and Pravyo for student talent — each designed around how real teams actually work rather than generic, oversized tooling.",
      "His approach is practical and business-first: understand the workflow, keep the scope realistic, build cleanly, and improve over time. Under his leadership, InfoBytes Nepal works to be a trusted, long-term technology partner for businesses in Nepal.",
    ],
    sameAs: [],
  },
];

export function getTeamMember(slug: string) {
  return team.find((member) => member.slug === slug) || null;
}
