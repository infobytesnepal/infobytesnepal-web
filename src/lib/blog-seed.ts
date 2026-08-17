/**
 * The six posts this blog launched with, as they were written in the repo.
 *
 * They serve two purposes now that posts live in the database. `npm run
 * db:seed:blog` copies them in so they are editable in the CMS like anything
 * written since, and until that has been run — or if the posts table is ever
 * empty — the read adapter in `lib/blog.ts` serves them directly, so the blog
 * cannot go blank. That mirrors how `lib/data.ts` already treats the product
 * seeds.
 *
 * Nothing here is edited by hand any more. Change a post in the CMS.
 */

import type { PostBlock } from "./blog-markdown";
import type { Category } from "./blog";

export type SeedPost = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  category: Category;
  tags: string[];
  authorSlug: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  body: PostBlock[];
  metaTitle?: string;
  metaDescription?: string;
};

export const postSeeds: SeedPost[] = [
  {
    slug: "how-much-does-a-website-cost-in-nepal",
    title: "What a website actually costs in Nepal, and what moves the price",
    excerpt:
      "Real ranges for a business site, a custom build, and an online store in Nepal, plus the five things that decide which end of the range you land on.",
    coverImage: "/assets/home/website-and-software-development-cost-in-nepal.jpg",
    coverAlt: "A developer at Infobytes Nepal preparing a written website quotation for a client in Nepal",
    category: "Web Development",
    tags: ["pricing", "websites", "budgeting"],
    authorSlug: "bibek-neupane",
    publishedAt: "2026-07-14",
    updatedAt: "2026-08-04",
    readTime: 7,
    metaTitle: "What a Website Costs in Nepal in 2026 | Infobytes Nepal",
    metaDescription:
      "Real website price ranges in Nepal for 2026, what pushes the number up or down, and the recurring costs most quotations leave out.",
    body: [
      {
        type: "p",
        text: "The first question in almost every first call is some version of this one, and the honest answer is a range rather than a number. Here is where that range sits in 2026, and what actually decides where in it you land.",
      },
      { type: "h2", text: "The ranges", id: "the-ranges" },
      {
        type: "table",
        caption: "Indicative website prices in Nepal in 2026",
        head: ["What you need", "Price", "Timeline"],
        rows: [
          ["Simple business website", "NPR 50,000 to 150,000", "2 to 4 weeks"],
          ["Custom design with a CMS", "NPR 100,000 to 250,000", "4 to 8 weeks"],
          ["Online store", "NPR 80,000 to 200,000", "4 to 8 weeks"],
          ["Custom web platform", "From NPR 250,000", "8 to 16 weeks"],
        ],
      },
      {
        type: "p",
        text: "Those are build costs. Domain and hosting are separate and recur every year, and a payment gateway takes a cut of every transaction. Any quotation that does not mention them is not finished.",
      },
      { type: "h2", text: "What moves the number", id: "what-moves-the-number" },
      {
        type: "ol",
        items: [
          "Page count. Five pages and fifty pages are different projects, even at the same design quality.",
          "Custom design or template. A template is cheaper and faster, and it will look like a template.",
          "Features. Forms are cheap. Bookings, dashboards, payments, and multi language are not.",
          "Content. Somebody has to write the copy and supply the photos. That somebody is billable if it is not you.",
          "Support after launch. A site nobody maintains is a site that breaks quietly.",
        ],
      },
      { type: "h3", text: "The cheapest quote is rarely the cheapest project", id: "cheapest-quote" },
      {
        type: "p",
        text: "A site built without a content structure has to be rebuilt when you want to rank, and a rebuild costs more than doing it once. Ask what happens when you need a new section in a year. The answer tells you what you are really buying. Our [full pricing guide](/website-cost-in-nepal) breaks this down further.",
      },
      {
        type: "quote",
        text: "Vague scope is the single biggest cause of failed projects in Nepal. Get the deliverables, the timeline, and the ownership terms written down before any money moves.",
        cite: "Infobytes Nepal delivery notes",
      },
      { type: "h2", text: "What to ask before you sign", id: "what-to-ask" },
      {
        type: "ul",
        items: [
          "What exactly is included, and what is explicitly excluded?",
          "Who owns the code, the domain, and the hosting accounts at the end?",
          "What does a change request cost once we have started?",
          "Is SEO structure part of the build or an extra?",
          "What does support cost after launch?",
        ],
      },
      {
        type: "p",
        text: "If you want the numbers for your own project rather than a range, send us the requirement. The first conversation and the written quotation are free.",
      },
    ],
  },
  {
    slug: "when-to-move-off-spreadsheets",
    title: "Five signs your business has outgrown spreadsheets",
    excerpt:
      "Spreadsheets are excellent until they are not. Here is how to tell when a shared sheet has quietly become the biggest risk in your operation.",
    coverImage: "/assets/home/custom-software-development-company-nepal.jpg",
    coverAlt: "A custom software dashboard replacing spreadsheet based tracking for a business in Nepal",
    category: "Software",
    tags: ["custom software", "operations", "automation"],
    authorSlug: "sugam-dahal",
    publishedAt: "2026-06-28",
    updatedAt: "2026-06-28",
    readTime: 6,
    // 59 characters. The previous version ran to 67, past the point Google
    // truncates a title in results.
    metaTitle: "Replace Spreadsheets With Custom Software | Infobytes Nepal",
    metaDescription:
      "Five practical signs a growing business in Nepal has outgrown spreadsheets, and what a focused first version of custom software should cover.",
    body: [
      {
        type: "p",
        text: "Nobody sets out to run a company on a shared sheet. It happens because a spreadsheet is free, instant, and good enough on day one. The problem is that it stays good enough for exactly as long as one person holds the whole process in their head.",
      },
      { type: "h2", text: "The five signs", id: "the-five-signs" },
      { type: "h3", text: "1. Somebody rebuilds the same report every month", id: "sign-one" },
      {
        type: "p",
        text: "If a person spends two days a month copying between sheets to produce a number the business needs, you are paying a salary for something a query answers instantly.",
      },
      { type: "h3", text: "2. There are three versions and nobody knows which is current", id: "sign-two" },
      {
        type: "p",
        text: "The moment a file gets a `_final_v2` suffix, the sheet has stopped being a record and started being a rumour.",
      },
      { type: "h3", text: "3. You cannot tell who changed what", id: "sign-three" },
      {
        type: "p",
        text: "A cancelled bill or an edited price should have a name and a timestamp attached. Spreadsheets give you neither, which turns an ordinary mistake into an argument.",
      },
      { type: "h3", text: "4. Access is all or nothing", id: "sign-four" },
      {
        type: "p",
        text: "Everyone can see salaries, or nobody can see anything. Real systems let you scope what each role sees, which is usually the point at which a growing team needs one.",
      },
      { type: "h3", text: "5. The answer to a simple question takes a day", id: "sign-five" },
      {
        type: "p",
        text: "How many jobs are open right now? Which customers have not been followed up in two weeks? If those take an afternoon, decisions get made on feel rather than fact.",
      },
      { type: "h2", text: "What a first version should look like", id: "first-version" },
      {
        type: "p",
        text: "Not everything at once. A focused first version covers one department, with the workflow, the roles, and the two or three reports that matter. That typically runs NPR 200,000 to 600,000 and takes 6 to 12 weeks, delivered module by module so your team is using part of it while the rest is being built.",
      },
      {
        type: "ul",
        items: [
          "One workflow, end to end, not five workflows half done.",
          "Roles and permissions from the start. Retrofitting them is painful.",
          "An export path, so your data is never trapped.",
          "Somebody on your side who owns adoption.",
        ],
      },
      {
        type: "p",
        text: "If you recognise three or more of the five signs, the sheet is already costing you more than the software would. Read more about [custom software development in Nepal](/software-development-company-in-nepal).",
      },
    ],
  },
  {
    slug: "local-seo-checklist-for-nepali-businesses",
    title: "A local SEO checklist for businesses in Nepal",
    excerpt:
      "The unglamorous list that decides whether people in Kathmandu find you on a phone: your profile, your pages, your speed, and your reviews.",
    coverImage: "/assets/services/2seo-ibn.webp",
    coverAlt: "Local search engine optimization work by Infobytes Nepal for a business in Kathmandu Nepal",
    category: "SEO",
    tags: ["local seo", "google business profile", "core web vitals"],
    authorSlug: "bibek-neupane",
    publishedAt: "2026-06-09",
    updatedAt: "2026-07-02",
    readTime: 8,
    metaTitle: "Local SEO Checklist for Businesses in Nepal | Infobytes Nepal",
    metaDescription:
      "A practical local SEO checklist for Nepali businesses: Google Business Profile, location pages, site speed, schema, and reviews that actually arrive.",
    body: [
      {
        type: "p",
        text: "Local search is won on details that nobody enjoys doing. None of this is clever. All of it matters more than another blog post about keywords.",
      },
      { type: "h2", text: "Start with the profile, not the website", id: "start-with-profile" },
      {
        type: "p",
        text: "For a huge share of local searches, your Google Business Profile is the result. Complete every field, pick the right primary category, add real photos of the actual place, and keep the hours accurate through festivals. An abandoned profile outranks nothing.",
      },
      { type: "h2", text: "Make the name, address, and phone identical everywhere", id: "nap-consistency" },
      {
        type: "p",
        text: "Your profile, your website footer, your Facebook page, and any directory listing should carry byte identical details. `+977 9843468715` in one place and `9843468715` in another is a small inconsistency that quietly weakens the signal.",
      },
      { type: "h2", text: "Give each location a real page", id: "location-pages" },
      {
        type: "p",
        text: "A page per city only works if the page says something specific about that city. Duplicated text with the place name swapped is worse than not having the page. If you cannot write three genuinely local paragraphs, do not make the page.",
      },
      { type: "h2", text: "Speed is a local ranking factor on mobile", id: "speed" },
      {
        type: "p",
        text: "Most local searches happen on a mid range Android phone on mobile data. Compress your images, serve modern formats, and set explicit dimensions so nothing jumps while loading.",
      },
      {
        type: "code",
        language: "html",
        code: `<!-- Always set width and height. It costs nothing and prevents layout shift. -->\n<img\n  src="/office-bhaktapur.jpg"\n  alt="Infobytes Nepal office in Kaushaltar Bhaktapur"\n  width="1600"\n  height="1200"\n  loading="lazy"\n  decoding="async"\n/>`,
      },
      { type: "h2", text: "Add LocalBusiness structured data", id: "structured-data" },
      {
        type: "p",
        text: "Structured data will not rank you on its own, but it removes ambiguity about who and where you are, which matters when an answer engine is deciding what to quote.",
      },
      { type: "h2", text: "Ask for reviews, properly", id: "reviews" },
      {
        type: "ul",
        items: [
          "Ask in person, at the moment the customer is happy, not by bulk SMS a month later.",
          "Send the direct review link. Every extra tap loses people.",
          "Reply to all of them, including the bad ones, without arguing.",
          "Never buy reviews. It is detectable and the cleanup costs more than the reviews did.",
        ],
      },
      {
        type: "p",
        text: "Work through this list before paying anyone for a monthly retainer. Half of local SEO is admin you can do yourself, and the other half is easier once the admin is done. If you want help with the rest, see [SEO services in Nepal](/seo-company-in-nepal).",
      },
    ],
  },
  {
    slug: "what-business-automation-actually-means",
    title: "Business automation, without the buzzword",
    excerpt:
      "Automation is not robots. It is removing the third place your team retypes the same customer name. Here is where to start and what to leave alone.",
    coverImage: "/assets/services/3digital-marketing-ibn.webp",
    coverAlt: "Business automation workflow built by Infobytes Nepal connecting sales and service data",
    category: "Business Automation",
    tags: ["automation", "crm", "workflow"],
    authorSlug: "sugam-dahal",
    publishedAt: "2026-05-21",
    updatedAt: "2026-05-21",
    readTime: 5,
    metaTitle: "What Business Automation Actually Means | Infobytes Nepal",
    metaDescription:
      "Business automation in plain terms: where to start, what to leave alone, and what a Nepali business should expect after the first three months.",
    body: [
      {
        type: "p",
        text: "Automation has been sold badly for long enough that most business owners assume it means replacing people. In practice it usually means removing the fourth place somebody retypes a phone number.",
      },
      { type: "h2", text: "Start where the same data is entered twice", id: "start-here" },
      {
        type: "p",
        text: "Every duplicate entry is a place where two records can disagree. Find those first. They are usually between the enquiry form, the sales sheet, and the billing system.",
      },
      { type: "h2", text: "Automate the handover, not the judgement", id: "handover-not-judgement" },
      {
        type: "p",
        text: "Moving a lead from the website to the right salesperson with a due date is a good thing to automate. Deciding whether to discount is not. Keep people where judgement is needed and take the clerical work off them.",
      },
      { type: "h2", text: "What good looks like after three months", id: "what-good-looks-like" },
      {
        type: "ul",
        items: [
          "Nobody retypes a customer detail that the business already holds.",
          "Every lead has an owner and a next step with a date.",
          "The daily and monthly numbers come out of the system, not out of a sheet.",
          "A manager can see status without asking three people.",
        ],
      },
      {
        type: "p",
        text: "That is the whole ambition. It is not glamorous and it pays for itself faster than almost anything else you can buy. More on [business automation in Nepal](/business-automation-software-nepal).",
      },
    ],
  },
  {
    slug: "choosing-an-it-company-in-nepal",
    title: "How to judge an IT company before you hire one",
    excerpt:
      "Eight questions that separate a company that will finish your project from one that will go quiet in month three.",
    coverImage: "/assets/home/best-it-company-in-nepal-infobytes-nepal-team.jpg",
    coverAlt: "The Infobytes Nepal team discussing a client project at the office in Bhaktapur Nepal",
    category: "Software",
    tags: ["hiring", "vendor selection", "scope"],
    authorSlug: "bibek-neupane",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readTime: 6,
    metaTitle: "How to Choose an IT Company in Nepal | Infobytes Nepal",
    metaDescription:
      "Eight questions to ask before you hire an IT company in Nepal, plus the warning signs that a project will go quiet after month three.",
    body: [
      {
        type: "p",
        text: "Everyone claims the same things, so claims are useless as a filter. Questions are not. These are the ones whose answers actually predict how the project will go.",
      },
      { type: "h2", text: "The eight questions", id: "the-eight-questions" },
      {
        type: "ol",
        items: [
          "Will I be talking to the people who write the code, or to an account manager?",
          "What exactly is in scope, and what is explicitly out?",
          "Who owns the code, the domain, and the hosting accounts when we finish?",
          "What happens to the timeline if something slips, and is that written down?",
          "What does a change request cost, and how is it agreed?",
          "Is SEO structure part of the build or billed separately?",
          "What does support cost after launch, and what response time comes with it?",
          "Can I speak to a client you delivered for over a year ago?",
        ],
      },
      {
        type: "p",
        text: "The last one is the most revealing. Anybody can produce a happy client from last month. A client from two years ago tells you whether the work held up and whether the company stayed reachable.",
      },
      { type: "h2", text: "Warning signs", id: "warning-signs" },
      {
        type: "ul",
        items: [
          "A quotation with no exclusions listed.",
          "A promise of first page rankings on a timeline.",
          "Reluctance to put the timeline in the agreement.",
          "No written change process.",
        ],
      },
      {
        type: "quote",
        text: "Ask what happens when we disagree. A company that has thought about that has been through it and learned something. One that has not is telling you it has not delivered much.",
      },
      {
        type: "p",
        text: "We wrote a longer version of this as a buying guide: [how to choose the best IT company in Nepal](/best-it-company-in-nepal).",
      },
    ],
  },
  {
    slug: "why-your-site-is-slow-on-mobile-data",
    title: "Why your website is slow on Nepali mobile data",
    excerpt:
      "The four things that make a site crawl on a mid range Android phone, and the fixes that take an afternoon rather than a rebuild.",
    coverImage: "/assets/services/1web-design-and-development-ibn.webp",
    coverAlt: "Website performance testing on mobile and desktop by Infobytes Nepal",
    category: "Web Development",
    tags: ["performance", "core web vitals", "mobile"],
    authorSlug: "kapil-aryal",
    publishedAt: "2026-04-02",
    updatedAt: "2026-04-02",
    readTime: 7,
    metaTitle: "Why Your Website Is Slow on Mobile Data | Infobytes Nepal",
    metaDescription:
      "Four reasons a website crawls on Nepali mobile data, how to check each one, and the fixes that take an afternoon instead of a full rebuild.",
    body: [
      {
        type: "p",
        text: "A site that feels instant on office wifi can take eleven seconds on a phone in Chitwan. The gap is almost always the same four things.",
      },
      { type: "h2", text: "1. Images nobody compressed", id: "images" },
      {
        type: "p",
        text: "The single most common cause. A 3MB hero photo straight from a camera is real money on a mobile data pack, and it delays the largest contentful paint on exactly the devices most of your visitors use. Serve modern formats and size them for the slot they occupy.",
      },
      { type: "h2", text: "2. A video that autoplays on phones", id: "video" },
      {
        type: "p",
        text: "Background video looks good in a demo and costs a megabyte before the page is usable. Show a still image on small screens and load the video only from tablet width up.",
      },
      { type: "h2", text: "3. Fonts that block the first paint", id: "fonts" },
      {
        type: "p",
        text: "Every extra family and weight is another download. Pick one family, load the weights you actually use, and set `display: swap` so text is readable while the font arrives.",
      },
      { type: "h2", text: "4. Layout that jumps while loading", id: "layout-shift" },
      {
        type: "p",
        text: "Not strictly speed, but it is what makes a site feel broken. Give every image and embed an explicit width and height so the browser reserves the space before the file lands.",
      },
      {
        type: "code",
        language: "css",
        code: `/* Reserve the box before the image arrives. Zero layout shift. */\n.media {\n  aspect-ratio: 4 / 3;\n  width: 100%;\n  background: #eaf2ff;\n}`,
      },
      { type: "h2", text: "How to check", id: "how-to-check" },
      {
        type: "p",
        text: "Test on a real mid range Android phone on mobile data, not on a laptop with the network throttled. Then use PageSpeed Insights and read the field data section, which reflects real visitors rather than a lab run.",
      },
      {
        type: "p",
        text: "Most of these are an afternoon of work rather than a rebuild. If the site is beyond patching, that is worth knowing too. See [website maintenance in Nepal](/website-maintenance-services-in-nepal).",
      },
    ],
  },
];
