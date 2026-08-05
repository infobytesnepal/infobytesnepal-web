export const serviceInquiryOptions = [
  "Web Design & Development",
  "Search Engine Optimization (SEO)",
  "Digital Marketing",
  "Professional Training",
  "Graphics Design",
] as const;

/**
 * The five services, in the order they appear on /services.
 *
 * This lived inside the services page component until the public content API
 * needed it too. Keeping one copy here means `/services`, `/api/v1/services`,
 * the MCP `list_services` tool, and the markdown rendering of the page can
 * never disagree about what the company sells or what a service costs.
 *
 * `number` and `imagePosition` are presentation concerns the page still uses;
 * the API projects them away.
 */
export const serviceCatalog = [
  {
    number: "01",
    slug: "web-design-and-development",
    links: [
      { href: "/web-development-company-in-nepal", label: "web development company in Nepal" },
      { href: "/web-design-company-in-nepal", label: "web design in Nepal" },
      { href: "/ecommerce-website-development-nepal", label: "e-commerce website development" },
      { href: "/website-cost-in-nepal", label: "what a website costs in Nepal" },
      { href: "/website-maintenance-services-in-nepal", label: "website maintenance in Nepal" },
    ],
    title: "Web Design and Development",
    subtitle: "Websites that load fast, look right on every phone, and bring in real inquiries.",
    description:
      "We design and build websites that are quick, easy to update, and built on clean code. Company websites, landing pages, online stores, or a full web platform. Whatever you need, the structure is set up for Google from the first day rather than patched on later. Most business websites take 2 to 4 weeks and start around NPR 50,000.",
    image: "/assets/services/1web-design-and-development-ibn.png",
    imageAlt: "Web design and development service by Infobytes Nepal shown on a laptop and mobile phone",
    imagePosition: "left",
    features: [
      "Responsive Website Design",
      "Custom UI and UX",
      "Web App Development",
      "CMS and Admin Panel",
      "Speed and Performance Tuning",
    ],
  },
  {
    number: "02",
    slug: "search-engine-optimization",
    links: [
      { href: "/seo-company-in-nepal", label: "SEO company in Nepal" },
      { href: "/best-it-company-in-nepal", label: "best IT company in Nepal" },
      { href: "/it-company-in-kathmandu", label: "IT company in Kathmandu" },
    ],
    title: "Search Engine Optimization",
    subtitle: "Get found on Google when someone in Nepal searches for what you sell.",
    description:
      "We fix what is holding your site back technically, then build the content and local signals that move you up the results. No promises of page one in two weeks, because anyone offering that is either targeting keywords nobody searches or doing something that will cost you later. Expect 3 to 6 months to see real movement, reported monthly with the numbers that matter.",
    image: "/assets/services/2seo-ibn.png",
    imageAlt: "Search engine optimization service by Infobytes Nepal showing Google ranking growth for a business in Nepal",
    imagePosition: "right",
    features: ["Technical SEO", "On Page SEO", "Local SEO for Nepal", "Keyword and Content Strategy", "Monthly Ranking Reports"],
  },
  {
    number: "03",
    slug: "digital-marketing",
    links: [
      { href: "/digital-marketing-company-in-nepal", label: "digital marketing company in Nepal" },
      { href: "/social-media-marketing-agency-in-nepal", label: "social media marketing in Nepal" },
      { href: "/digital-marketing-agency-in-kathmandu", label: "digital marketing in Kathmandu" },
    ],
    title: "Digital Marketing",
    subtitle: "Campaigns that bring in inquiries, not just likes and reach.",
    description:
      "We plan and run social media and paid campaigns aimed at people who might actually buy from you. Content, targeting, budget, and reporting handled together, so you can see what every rupee brought back. If a campaign is not working, we tell you and change it rather than quietly spending the budget.",
    image: "/assets/services/3digital-marketing-ibn.png",
    imageAlt: "Digital marketing service by Infobytes Nepal running social media and paid campaigns for a Nepali business",
    imagePosition: "left",
    features: ["Social Media Marketing", "Paid Advertising", "Campaign Strategy", "Content Planning", "Performance Reporting"],
  },
  {
    number: "04",
    slug: "it-training",
    links: [
      { href: "/it-training-institute-in-nepal", label: "IT training in Nepal" },
    ],
    title: "IT Training",
    subtitle: "Practical training where you build real things, not just watch slides.",
    description:
      "Training for students, working professionals, and whole teams, run by the same people who build client projects. You work on guided projects from the first session, because nobody learns web development or SEO by taking notes. Useful whether you want a job, a promotion, or a team that can manage its own website.",
    image: "/assets/services/4training-ibn.png",
    imageAlt: "IT training class by Infobytes Nepal teaching web development and digital skills to students in Nepal",
    imagePosition: "right",
    features: [
      "Web and UI Foundations",
      "SEO and Marketing Training",
      "Graphics and Branding Skills",
      "Practical Workshops",
      "Career Guidance",
    ],
  },
  {
    number: "05",
    slug: "graphic-design",
    links: [
      { href: "/graphic-design-company-in-nepal", label: "graphic design company in Nepal" },
      { href: "/ui-ux-design-company-in-nepal", label: "UI/UX design in Nepal" },
    ],
    title: "Graphic Design",
    subtitle: "Visuals that make a small company look like a serious one.",
    description:
      "Logos, brand identity, social media creatives, and print material designed so your business looks credible the moment someone sees it. You get the source files and full ownership, not just exported images, so you are never stuck waiting on us to change a phone number on a flyer.",
    image: "/assets/services/5graphics-design-ibn.png",
    imageAlt: "Graphic design work by Infobytes Nepal showing brand identity and social media creatives for a Nepali company",
    imagePosition: "left",
    features: ["Brand Identity Design", "Social Media Creatives", "Marketing Collaterals", "UI and Visual Assets", "Print Ready Designs"],
  },
] as const;

export type Service = (typeof serviceCatalog)[number];
