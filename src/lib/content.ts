export const siteDefaults = {
  companyName: "InfoBytes Nepal",
  tagline: "Complexities, now simplified.",
  contactEmail: "info@infobytesnepal.com",
  whatsappNumber: "",
  logoUrl: "/assets/brand/infobytes-nepal-logo.png",
  defaultOgImage: "/assets/hero/infobytes-hero-fallback.webp",
};

export const productSeeds = [
  {
    name: "Pravyo",
    slug: "pravyo",
    logoUrl: "/assets/products/pravyo.svg",
    shortDescription:
      "A talent bench for students, designed to help student potential become easier to discover, organize, and present.",
    fullDescription:
      "A talent bench for students, designed to help student potential become easier to discover, organize, and present.",
    displayOrder: 1,
  },
  {
    name: "Serviol",
    slug: "serviol",
    logoUrl: "/assets/products/serviol.svg",
    shortDescription:
      "An end-to-end field service management platform empowering resources on the field with tickets, planners, attendance, and beyond.",
    fullDescription:
      "An end-to-end field service management platform empowering resources on the field with tickets, planners, attendance, and beyond.",
    displayOrder: 2,
  },
  {
    name: "Purseol",
    slug: "purseol",
    logoUrl: "/assets/products/purseol.svg",
    shortDescription:
      "A field sales management platform that keeps management informed on client visits, product pitches, and lead outcomes while giving sales teams a seamless way to log work and move deals forward.",
    fullDescription:
      "A field sales management platform that keeps management informed on client visits, product pitches, and lead outcomes while giving sales teams a seamless way to log work and move deals forward.",
    displayOrder: 3,
  },
  {
    name: "LeadRack",
    slug: "leadrack",
    logoUrl: "/assets/products/leadrack.svg",
    shortDescription:
      "A lead tracking platform built so no lead goes unmissed, with traceable boards and stage-based movement.",
    fullDescription:
      "A lead tracking platform built so no lead goes unmissed, with traceable boards and stage-based movement.",
    displayOrder: 4,
  },
];

export const stackingCards = [
  {
    title: "Student Talent",
    product: "Pravyo",
    description: "A talent bench for students, designed to make potential easier to discover and present.",
  },
  {
    title: "Field Service",
    product: "Serviol",
    description: "Field tickets, planners, attendance, and service operations simplified for teams on the move.",
  },
  {
    title: "Field Sales",
    product: "Purseol",
    description: "Client visits, product pitches, and lead outcomes logged clearly from the field.",
  },
  {
    title: "Lead Tracking",
    product: "LeadRack",
    description: "Leads organized through boards and stages so nothing goes unmissed.",
  },
];

export const defaultPageContent = {
  homeHero: {
    headline: "InfoBytes Nepal",
    tagline: "Complexities, now simplified.",
    supportingText:
      "We build focused digital products that simplify field service, sales, lead tracking, and student talent workflows for growing teams.",
    heroVideoUrl: "/assets/hero/infobytes-hero.mp4",
    fallbackImageUrl: "/assets/hero/infobytes-hero-fallback.webp",
  },
  aboutSection1: {
    title: "Focused products for practical teams",
    text: "InfoBytes Nepal builds digital products that make everyday operational work clearer for growing teams.",
    buttonLabel: "Explore Products",
    buttonUrl: "/products",
    imageUrl: "/assets/about/about-section-1.jpeg",
  },
  aboutSection2: {
    title: "Built around simpler workflows",
    text: "Our work is shaped around field service, sales, lead tracking, and student talent workflows that benefit from cleaner systems.",
    buttonLabel: "Get Started",
    buttonUrl: "#get-started",
    imageUrl: "/assets/about/about-section-2.webp",
    techLogo1: "/assets/tech/react.svg",
    techLogo2: "/assets/tech/next.svg",
    techLogo3: "/assets/tech/typescript.svg",
    techLogo4: "/assets/tech/tailwind.svg",
    techLogo5: "/assets/tech/node.svg",
    techLogo6: "/assets/tech/turso.svg",
    techLogo7: "/assets/tech/drizzle.svg",
    techLogo8: "/assets/tech/vercel.svg",
    techLogo9: "/assets/tech/framer.svg",
    techLogo10: "/assets/tech/gsap.svg",
    techLogo11: "/assets/tech/sqlite.svg",
    techLogo12: "/assets/tech/auth.svg",
    techLogo13: "/assets/tech/zod.svg",
    techLogo14: "/assets/tech/lucide.svg",
    techLogo15: "/assets/tech/npm.svg",
  },
  aboutStarted: {
    title: "How We Started",
    body: "InfoBytes Nepal started with a clear focus: build digital products that reduce complexity in real operational workflows.",
  },
  aboutGoals: {
    goal: "Create focused products that help teams work with more clarity.",
    vision: "Make complex workflows easier to understand, manage, and improve.",
    mission: "Design practical digital systems for field service, sales, lead tracking, and student talent workflows.",
  },
  contactHero: {
    title: "Start a focused conversation",
    text: "Share what you want to simplify, and the InfoBytes Nepal team will get back to you.",
    whatsappNumber: "",
    backgroundUrl: "/assets/hero/infobytes-contact-hero.mp4",
  },
  privacy: {
    title: "Privacy Policy",
    body: "InfoBytes Nepal collects inquiry details only to respond to submitted requests and improve communication with interested organizations. We do not publish submitted contact details.",
  },
  footer: {
    text: "Focused digital products for growing teams.",
  },
};

export const productInterests = ["Pravyo", "Serviol", "Purseol", "LeadRack", "Not sure yet"] as const;
