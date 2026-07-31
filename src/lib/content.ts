export const siteDefaults = {
  companyName: "Infobytes Nepal",
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
      "A talent bench for students, built so potential is easier to find, organise, and put in front of the people who are hiring.",
    fullDescription:
      "A talent bench for students, built so potential is easier to find, organise, and put in front of the people who are hiring.",
    displayOrder: 1,
  },
  {
    name: "Serviol",
    slug: "serviol",
    logoUrl: "/assets/products/serviol.svg",
    shortDescription:
      "Field service management for teams that work away from a desk. Tickets, day planners, attendance, and job history in one place, and it keeps working when the signal drops.",
    fullDescription:
      "Field service management for teams that work away from a desk. Tickets, day planners, attendance, and job history in one place, and it keeps working when the signal drops.",
    displayOrder: 2,
  },
  {
    name: "Purseol",
    slug: "purseol",
    logoUrl: "/assets/products/purseol.svg",
    shortDescription:
      "Field sales management that shows managers what is actually happening on client visits, and gives the sales team a fast way to log a visit and move a deal along without paperwork at the end of the day.",
    fullDescription:
      "Field sales management that shows managers what is actually happening on client visits, and gives the sales team a fast way to log a visit and move a deal along without paperwork at the end of the day.",
    displayOrder: 3,
  },
  {
    name: "LeadRack",
    slug: "leadrack",
    logoUrl: "/assets/products/leadrack.svg",
    shortDescription:
      "Lead tracking built so nothing goes cold by accident. Leads sit on boards, move through stages, and always have an owner and a next step.",
    fullDescription:
      "Lead tracking built so nothing goes cold by accident. Leads sit on boards, move through stages, and always have an owner and a next step.",
    displayOrder: 4,
  },
  {
    name: "Nidanyo",
    slug: "nidanyo",
    logoUrl: "/assets/products/nidanyo.png",
    shortDescription:
      "Lab software for medical laboratories in Nepal. Nidanyo runs patient registration, sample tracking, test results, report printing, billing, and inventory from one system.",
    fullDescription: [
      "Nidanyo is a comprehensive laboratory operations and information management system built for medical laboratories, diagnostic centres, and pathology labs in Nepal. It covers the full path a sample takes through a lab: patient registration, test ordering, barcoded sample collection, result entry and verification, authorised report release, billing, and stock control.",
      "Most labs in Nepal still run on a mix of register books, a billing package that does not talk to the report side, and Word templates for reports. That works until volume grows. Then the same patient gets registered twice, a sample sits waiting because nobody logged it, a report goes out with a typo in the reference range, and the month-end reconciliation takes three days. Nidanyo exists to close those gaps.",
      "Patient and test data live in one place. Front desk staff register a patient once and every later step reads from that record. Each sample carries a barcode from collection to result entry, so a technologist always knows which sample is on the bench and where it is in the queue. Results can be typed in or pulled directly from analysers that support standard interfacing, which removes the transcription errors that cause the most rework in a busy lab.",
      "Reports follow a verification path rather than going straight out. A technologist enters, a pathologist or authorised signatory verifies, and only then does the report become releasable. Reference ranges can be set per test, per age band, and per sex, so an out-of-range flag actually means something. Finished reports print on your own letterhead format and can be sent to patients by email or a download link instead of asking them to come back to the counter.",
      "The billing side sits on the same records. A test ordered is a test billed, which is where most manual leakage happens. Nidanyo handles counter billing, credit accounts for referring hospitals and clinics, panel and package rates, discounts with an approval trail, and daily collection summaries that reconcile against what the counter actually took in. Referring doctor and referring institution commissions are tracked as part of the same ledger.",
      "Inventory covers reagents, kits, and consumables with batch numbers and expiry dates, so a lab knows what is running low before a test has to be turned away. Reorder levels raise an alert rather than a surprise. Consumption can be read against test volume to see where cost is actually going.",
      "Every role sees only what it should. Front desk, technologist, pathologist, accounts, and administrator each get a defined permission set, and actions are logged, so a corrected result or a cancelled bill has a name and a timestamp attached. Management dashboards summarise test volume by department, revenue by referral source, turnaround time per test, and pending work at any point in the day.",
      "Nidanyo is built and supported from Nepal by Infobytes Nepal. Setup includes loading your existing test catalogue and reference ranges, formatting your report templates, training your staff on their own screens, and staying available after go-live when a real question comes up during a busy morning.",
    ].join("\n"),
    displayOrder: 5,
  },
];

/** Per-product title and description, shared by the product page and the DB seed. */
export const productSeoDefaults: Record<string, { title: string; description: string }> = {
  pravyo: {
    title: "Pravyo Student Talent Platform | Infobytes Nepal",
    description:
      "Pravyo by Infobytes Nepal helps organize, discover, and present student talent for education, training, and consultancy-focused workflows in Nepal.",
  },
  serviol: {
    title: "Serviol Service Management Software Nepal | Infobytes Nepal",
    description:
      "Serviol is service management software by Infobytes Nepal for field service teams, tickets, planners, attendance, and operational workflows.",
  },
  purseol: {
    title: "Purseol Sales Management Software Nepal | Infobytes Nepal",
    description:
      "Purseol is sales management software by Infobytes Nepal for client visits, product pitches, field sales tracking, and lead outcomes.",
  },
  leadrack: {
    title: "LeadRack CRM & Lead Management Software Nepal | Infobytes Nepal",
    description:
      "LeadRack by Infobytes Nepal helps teams manage leads through traceable boards, sales stages, follow-ups, and CRM-style workflows.",
  },
  nidanyo: {
    title: "Nidanyo Lab Software Nepal | Laboratory Management System",
    description:
      "Nidanyo is lab management software for medical laboratories in Nepal, covering patient registration, sample tracking, result verification, report printing, billing, and reagent stock.",
  },
};

export const stackingCards = [
  {
    title: "A Student's Talent Bench - Pravyo",
    product: "Pravyo",
    description: "A talent bench for students, designed to make potential easier to discover and present.",
  },
  {
    title: "Field Service Management - Serviol",
    product: "Serviol",
    description: "Field tickets, planners, attendance, and service operations simplified for teams on the move.",
  },
  {
    title: "Field Sales Management - Purseol",
    product: "Purseol",
    description: "Client visits, product pitches, and lead outcomes logged clearly from the field.",
  },
  {
    title: "Lead Tracking & Management - LeadRack",
    product: "LeadRack",
    description: "Leads organized through boards and stages so nothing goes unmissed.",
  },
  {
    title: "Lab Operations & Information - Nidanyo",
    product: "Nidanyo",
    description: "Registration, samples, results, reports, billing, and stock for medical labs in one system.",
  },
];

export const defaultPageContent = {
  homeHero: {
    headline: "Infobytes Nepal",
    tagline: "Complexities, now simplified.",
    supportingText:
      "We build focused digital products that simplify field service, sales, lead tracking, and student talent workflows for growing teams.",
    heroVideoUrl: "/assets/hero/infobytes-hero.mp4",
    fallbackImageUrl: "/assets/hero/infobytes-hero-fallback.webp",
  },
  aboutSection1: {
    title: "Focused products for practical teams",
    text: "Infobytes Nepal builds digital products that make everyday operational work clearer for growing teams.",
    buttonLabel: "Explore Products",
    buttonUrl: "/products",
    imageUrl: "/assets/about/about-section-1.webp",
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
    body: "Infobytes Nepal started with a clear focus: build digital products that reduce complexity in real operational workflows.",
  },
  aboutGoals: {
    goal: "Create focused products that help teams work with more clarity.",
    vision: "Make complex workflows easier to understand, manage, and improve.",
    mission: "Design practical digital systems for field service, sales, lead tracking, and student talent workflows.",
  },
  contactHero: {
    title: "Start a focused conversation",
    text: "Share what you want to simplify, and the Infobytes Nepal team will get back to you.",
    whatsappNumber: "",
    backgroundUrl: "/assets/hero/infobytes-contact-hero.mp4",
  },
  privacy: {
    title: "Privacy Policy",
    body: "Infobytes Nepal collects inquiry details only to respond to submitted requests and improve communication with interested organizations. We do not publish submitted contact details.",
  },
  footer: {
    text: "Infobytes Nepal",
  },
};

export const productInterests = ["Pravyo", "Serviol", "Purseol", "LeadRack", "Nidanyo", "Not sure yet"] as const;
