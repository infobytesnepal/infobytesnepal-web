export type Faq = {
  /** Stable anchor slug so individual answers can be linked and shared. */
  id: string;
  question: string;
  /**
   * The direct answer. Written so the first sentence answers the question on its
   * own — this is what search engines, AI assistants, and impatient readers take.
   */
  answer: string;
  /** Supporting paragraphs. Included in the FAQ schema answer text. */
  more?: string[];
  /** Internal links surfaced under the answer. Kept out of the schema text. */
  links?: Array<{ href: string; label: string }>;
};

export type FaqGroup = {
  id: string;
  title: string;
  intro: string;
  faqs: Faq[];
};

/**
 * Indicative market ranges in Nepal, used across the pricing answers.
 * Kept in one place so every number on the page stays consistent.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "pricing",
    title: "Costs & budgets in Nepal",
    intro:
      "Real, indicative price ranges for websites, apps, software, and marketing in Nepal, plus what actually moves the number up or down.",
    faqs: [
      {
        id: "website-cost-nepal-2026",
        question: "How much does a website cost in Nepal in 2026?",
        answer:
          "In 2026, a simple professional business website in Nepal typically costs around NPR 50,000 to NPR 150,000, a custom designed website with a content management system and proper SEO structure usually costs around NPR 100,000 to NPR 250,000, and larger custom web platforms generally start above NPR 250,000 and are quoted by scope.",
        more: [
          "The number moves on five things: how many pages you need, whether the design is custom or template based, the features involved (forms, bookings, dashboards, payments, multi language), how much content and SEO work is included, and the level of ongoing support after launch.",
          "Budget one more line that many quotes leave out: domain and hosting are recurring yearly costs, and content (photos, product details, and written copy) takes real time whether you produce it or pay someone to. A website that loads fast, ranks, and brings inquiries is usually worth more than the cheapest quote you can find.",
        ],
        links: [
          { href: "/website-cost-in-nepal", label: "Full website pricing guide" },
          { href: "/web-development-company-in-nepal", label: "Web development in Nepal" },
        ],
      },
      {
        id: "ecommerce-website-cost-nepal",
        question: "How much does an ecommerce website cost in Nepal?",
        answer:
          "A basic online store in Nepal typically costs around NPR 80,000 to NPR 200,000, while a custom ecommerce build with local payment gateways, inventory sync, delivery integration, and a proper admin panel usually ranges from around NPR 200,000 to NPR 500,000.",
        more: [
          "Cost rises with the catalogue size, product variations (size, colour, weight), whether you need multi vendor or multi branch stock, and how many integrations you want: eSewa, Khalti, Fonepay, ConnectIPS, courier partners, accounting, or a POS.",
          "Also plan for running costs: payment gateway transaction fees, hosting that can handle traffic spikes during festive campaigns, and someone to manage products and orders daily. An online store is an operation, not just a build.",
        ],
        links: [
          { href: "/ecommerce-website-development-nepal", label: "E-commerce development in Nepal" },
        ],
      },
      {
        id: "mobile-app-cost-nepal",
        question: "How much does a mobile app cost in Nepal in 2026?",
        answer:
          "A small, focused mobile app or PWA in Nepal generally starts from around NPR 150,000, mid range apps with user accounts, dashboards, and several core features commonly range from around NPR 300,000 to NPR 800,000, and complex apps with payments, live tracking, or heavy integrations are quoted above that based on scope.",
        more: [
          "Most business apps also need a web backend and an admin panel, which should be counted in the budget from day one rather than discovered halfway through.",
          "Add the recurring items: Google Play has a one time developer fee and the Apple Developer Program is billed yearly, plus server, notification, and map or SMS service costs depending on what the app does.",
        ],
        links: [
          { href: "/mobile-app-development-cost-in-nepal", label: "Full app pricing guide" },
          { href: "/mobile-app-development-company-in-nepal", label: "App development in Nepal" },
        ],
      },
      {
        id: "custom-software-cost-nepal",
        question: "How much does custom software, a CRM, or an ERP cost in Nepal?",
        answer:
          "A focused first version of custom software in Nepal (one department, a clear workflow, a working admin panel) typically ranges from around NPR 200,000 to NPR 600,000, while multi department systems that connect sales, inventory, service, accounts, and reporting generally range from around NPR 600,000 upward and are quoted by module.",
        more: [
          "Custom software is priced by workflow complexity, number of user roles, integrations with existing tools, and the reporting you need, not by page count.",
          "The most reliable way to control the cost is to build the highest value module first, put it in real use, and expand from what the team actually needs after a few months of usage.",
        ],
        links: [
          { href: "/software-development-company-in-nepal", label: "Software development in Nepal" },
          { href: "/crm-software-in-nepal", label: "CRM software in Nepal" },
          { href: "/erp-software-in-nepal", label: "ERP software in Nepal" },
        ],
      },
      {
        id: "seo-cost-nepal",
        question: "How much does SEO cost per month in Nepal?",
        answer:
          "Ongoing SEO in Nepal typically costs around NPR 45,000 to NPR 80,000 per month for a small or mid sized business, with competitive national keywords and larger content programmes priced higher. A one time SEO audit and technical fix up usually falls between NPR 20,000 and NPR 60,000.",
        more: [
          "What you are paying for each month is a mix of technical fixes, on page optimisation, content, internal linking, Google Business Profile work, and reporting. A monthly retainer that includes no content production rarely moves rankings.",
          "Treat any package that promises guaranteed rankings for a fixed low fee with caution. That is not how search works, and the shortcuts used to fake it can damage a site.",
        ],
        links: [{ href: "/seo-company-in-nepal", label: "SEO services in Nepal" }],
      },
      {
        id: "digital-marketing-cost-nepal",
        question: "How much does digital marketing cost per month in Nepal?",
        answer:
          "Social media and digital marketing management in Nepal generally costs around NPR 15,000 to NPR 40,000 per month for content, scheduling, and campaign management, and this is separate from your advertising budget, which is paid directly to Meta or Google.",
        more: [
          "For advertising itself, a realistic starting budget for Facebook and Instagram in Nepal is around NPR 10,000 to NPR 50,000 per month, and Google Ads usually needs a similar or larger budget because clicks are bought by keyword competition.",
          "Photo and video production, if you need it, is quoted separately. Good creative usually affects results more than a small increase in ad spend.",
        ],
        links: [
          { href: "/digital-marketing-company-in-nepal", label: "Digital marketing in Nepal" },
          { href: "/digital-marketing-agency-in-kathmandu", label: "Digital marketing in Kathmandu" },
        ],
      },
      {
        id: "domain-hosting-cost-nepal",
        question: "How much do domain and hosting cost per year in Nepal?",
        answer:
          "A .com domain generally costs around NPR 1,500 to NPR 2,500 per year, .com.np domains are issued free of cost through Nepal's national registry subject to document verification, and hosting typically runs around NPR 3,000 to NPR 12,000 per year on shared plans or roughly NPR 12,000 to NPR 60,000 per year on cloud and VPS setups.",
        more: [
          "Hosting choice should follow traffic and risk, not price alone. A brochure website is fine on shared hosting; an online store or a system your staff depend on daily belongs on cloud hosting with backups and room to scale.",
          "Always register the domain in your own company's name and keep the registrar login yourself. It is the single most common thing businesses in Nepal lose access to when they change agencies.",
        ],
      },
      {
        id: "website-maintenance-cost",
        question: "How much does website maintenance cost?",
        answer:
          "Website maintenance in Nepal typically costs around NPR 2,000 to NPR 10,000 per month, or roughly NPR 20,000 to NPR 100,000 per year, depending on how often content changes and whether the site is a brochure website, an online store, or a business system.",
        more: [
          "Maintenance normally covers updates and security patches, backups, uptime checks, small content changes, and bug fixes. Larger new features are quoted separately as improvements.",
          "Skipping maintenance is usually more expensive than paying for it. Outdated plugins and unpatched systems are the most common cause of hacked websites in Nepal.",
        ],
      },
      {
        id: "logo-branding-cost-nepal",
        question: "How much does a logo or brand identity cost in Nepal?",
        answer:
          "A professional logo in Nepal typically costs around NPR 10,000 to NPR 30,000, and a fuller brand identity (logo, colour system, typography, stationery, and social media templates) with usage guidelines usually ranges from around NPR 40,000 to NPR 120,000.",
        more: [
          "The difference is not drawing time; it is whether you receive a single image or a complete system your team can apply consistently across a website, packaging, documents, and campaigns without redesigning something every week.",
          "Always confirm you are receiving source files and full ownership, not just exported PNGs.",
        ],
        links: [
          { href: "/graphic-design-company-in-nepal", label: "Graphic design in Nepal" },
          { href: "/ui-ux-design-company-in-nepal", label: "UI/UX design in Nepal" },
        ],
      },
      {
        id: "why-quotes-vary",
        question: "Why do website and software quotes in Nepal vary so much?",
        answer:
          "Quotes vary because they are rarely quoting the same thing. One may be a template installed in a week with stock content, another a custom designed, SEO structured build with a CMS, training, and support. Until the scope is written down, the prices are not comparable.",
        more: [
          "Ask every vendor for the same written breakdown: number of pages, custom or template design, features, who writes the content, whether SEO setup is included, hosting arrangements, training, support period, and what a change costs after launch.",
          "Once quotes describe identical deliverables, the real differences (quality, speed, accountability) become visible, and the cheapest quote often turns out to be the most expensive one over two years.",
        ],
      },
      {
        id: "payment-terms",
        question: "What are your payment terms, and do you take an advance?",
        answer:
          "Projects are paid in milestones: an advance to begin, one or more progress payments tied to agreed stages, and a final payment at handover. The exact split, dates, and deliverables are confirmed in writing before any work starts, so there are no surprises mid project.",
        more: [
          "We quote in NPR for clients in Nepal and can quote in USD for clients abroad. Bank transfer and common digital wallets are both accepted.",
          "Ongoing work such as SEO, marketing, maintenance, or support is billed monthly against an agreed scope rather than bundled into the project fee.",
        ],
      },
      {
        id: "small-budget-start",
        question: "What if my budget is small? Can I still start?",
        answer:
          "Yes. The practical approach on a small budget is to build a strong first version rather than a stripped down full system: a focused website or a single working module that solves your most expensive problem, then expand in phases as it earns its return.",
        more: [
          "Phasing works because the second version is always better informed than the first. Real usage tells you which features matter, so you spend the later budget on things people actually use.",
          "We will tell you honestly if a requirement does not fit a budget, and what a realistic first phase would look like instead.",
        ],
      },
      {
        id: "free-quotation",
        question: "Do you charge for a consultation or quotation?",
        answer:
          "No. The first conversation and the written quotation are free. You describe the goal, the current workflow, and the constraints, and we come back with a scope, an indicative cost, and a realistic timeline.",
        more: [
          "If the honest answer is that you do not need what you came asking for, we will say so. A well scoped small project is better business for both sides than an oversized one that stalls.",
        ],
        links: [{ href: "/contact", label: "Request a quotation" }],
      },
    ],
  },
  {
    id: "choosing",
    title: "Choosing an IT company in Nepal",
    intro:
      "How to compare vendors, what to ask before you sign, and the warning signs worth walking away from.",
    faqs: [
      {
        id: "how-to-choose-it-company-nepal",
        question: "How to choose an IT company in Nepal?",
        answer:
          "Choose an IT company in Nepal by checking five things in order: verifiable past work you can actually open and use, legal registration and a written contract, a clear scope with a fixed deliverable list, who owns the code and accounts at the end, and what support looks like after launch. Price should be the last filter, not the first.",
        more: [
          "Ask to see two or three live projects similar in size to yours and, where possible, speak to those clients directly. A portfolio of screenshots proves far less than a working site you can load on your phone.",
          "Confirm you will be dealing with the people who do the work, that communication has a named point of contact, and that timelines are written into the agreement with what happens if they slip. Vague scope is the single biggest cause of failed projects in Nepal.",
          "Finally, judge how a company handles your questions before you pay. A vendor that explains tradeoffs plainly, tells you what you do not need, and puts commitments in writing at the quotation stage will usually behave the same way during the project.",
        ],
        links: [
          { href: "/best-it-company-in-nepal", label: "Best IT company in Nepal" },
          { href: "/top-it-companies-in-nepal", label: "Top IT companies in Nepal" },
          { href: "/trusted-it-company-in-nepal", label: "Trusted IT company in Nepal" },
        ],
      },
      {
        id: "questions-before-hiring",
        question: "What questions should I ask before hiring a web development company?",
        answer:
          "Ask these before signing: What exactly is included and excluded? Who writes the content? Who owns the code, domain, and hosting accounts? What is the timeline and what happens if it slips? Is SEO setup included? What does support cost after launch, and what does a change request cost?",
        more: [
          "Two more questions save most disputes: Which platform are you building on, and can I move it elsewhere later? And, who will actually be working on this project?",
          "Get the answers in the written proposal rather than over a phone call. A company that is comfortable putting its answers in writing is telling you something useful.",
        ],
      },
      {
        id: "warning-signs",
        question: "What are the warning signs of a bad IT company or developer?",
        answer:
          "The clearest warning signs are: a quote with no written scope, guaranteed number one Google rankings, refusal to hand over code or account access, a price far below every other quote, no contract, and portfolio links that do not open.",
        more: [
          "Add these to the list: no named point of contact, work that only progresses when you chase it, and pressure to pay the full amount upfront before anything is delivered.",
          "One structural risk that costs Nepali businesses the most: letting a vendor register your domain, hosting, Google, and social accounts under their own email. Always insist those are created in your company's name.",
        ],
      },
      {
        id: "freelancer-vs-company",
        question: "Should I hire a freelancer or an IT company in Nepal?",
        answer:
          "Hire a freelancer for small, well defined, one off work where cost matters most; hire a company when the project spans design, development, SEO, and support, when it must keep running after launch, or when continuity matters more than the lowest price.",
        more: [
          "The real difference is not skill, many freelancers in Nepal are excellent, it is coverage. A company has more than one person who understands your project, so a phone that stops being answered is not the end of your website.",
          "If you do work with a freelancer, keep ownership of your accounts and insist on documented handover. That single precaution removes most of the risk.",
        ],
      },
      {
        id: "local-vs-foreign",
        question: "Is it better to hire a local Nepali company or an overseas agency?",
        answer:
          "For most businesses operating in Nepal, a local company is the practical choice, for local payment gateways, Nepali content and dates, on the ground support, invoicing in NPR, and the ability to meet in person all matter more than they appear to on paper.",
        more: [
          "Overseas agencies make sense when you need a specialised skill that is genuinely scarce locally, or when your customers are entirely outside Nepal.",
          "Cost is not the deciding factor people expect: Nepali teams generally cost less, but the real advantage is time zone, context, and accountability.",
        ],
        links: [{ href: "/it-company-in-nepal", label: "IT company in Nepal" }],
      },
      {
        id: "verify-registered-company",
        question: "How do I verify that an IT company in Nepal is legally registered?",
        answer:
          "Ask for the company registration certificate and PAN or VAT certificate, and check that the name on those documents matches the name on your quotation, contract, and invoice. Registered companies in Nepal are recorded with the Office of the Company Registrar, and a legitimate vendor will share these without hesitation.",
        more: [
          "Also confirm the bank account you pay into is in the company's name, not an individual's, and that you receive a proper invoice for every payment.",
          "Infobytes Nepal Pvt. Ltd. is a registered private limited company based in Kaushaltar, Bhaktapur, and we provide our registration and tax details on request.",
        ],
      },
      {
        id: "who-owns-the-work",
        question: "Who owns the website, code, and accounts after the project is finished?",
        answer:
          "You should own all of it: the code, the design files, the content, the domain, the hosting, and every account created for your business. At Infobytes Nepal this is the default: on final payment, ownership and full access transfer to you in writing.",
        more: [
          "Before you sign with anyone, make sure the agreement says this explicitly. Some vendors retain the code or keep accounts under their own credentials, which quietly locks you in and makes changing vendors expensive.",
          "Ask for a handover that includes source code, admin credentials, domain registrar access, hosting access, and any third party service accounts.",
        ],
      },
      {
        id: "written-agreement",
        question: "Do you work with a written contract or agreement?",
        answer:
          "Yes. Every project starts with a written scope and quotation covering deliverables, timeline, milestones, payment schedule, ownership, and support terms, agreed by both sides before work begins.",
        more: [
          "A written scope protects both sides equally. It tells you what you are getting, and it tells us when the project is complete, which is what keeps timelines honest.",
          "Changes are welcome; they are handled as a written change request with any cost or timeline impact stated upfront, rather than absorbed silently until the project drifts.",
        ],
      },
    ],
  },
  {
    id: "websites",
    title: "Websites & web development",
    intro:
      "Timelines, platforms, hosting, and what you actually need to provide to get a website built.",
    faqs: [
      {
        id: "website-timeline",
        question: "How long does it take to build a website in Nepal?",
        answer:
          "A simple business website usually takes 2 to 4 weeks, a custom designed website with a CMS typically takes 4 to 8 weeks, and an online store or custom web platform generally takes 8 to 16 weeks depending on features and integrations.",
        more: [
          "The most common cause of delay is not development. It is content. Projects wait on logos, product details, photos, and approvals far more often than on code.",
          "If a deadline is fixed, say so at the start. We can plan a phased launch that puts a solid first version live on time and adds the rest afterwards.",
        ],
      },
      {
        id: "what-to-provide",
        question: "What do I need to provide to start a website project?",
        answer:
          "To start, you need three things: your logo and any brand assets, your core content (services, products, about, contact details), and a clear idea of what the website should achieve. Everything else (structure, design, SEO, hosting setup) we handle.",
        more: [
          "Useful extras if you have them: photographs of your team, work, or products; examples of websites you like and dislike; and access to your existing domain or hosting if you already have one.",
          "If content is the blocker, we can start from a structure and work with you to write it. It is normal for this to be the longest part of a project.",
        ],
      },
      {
        id: "wordpress-vs-custom",
        question: "WordPress or a custom coded website: which is better for my business?",
        answer:
          "Choose WordPress when you want to publish and edit content frequently and your needs are standard; choose a custom build when you need speed, unusual workflows, custom dashboards, or an application rather than a set of pages.",
        more: [
          "WordPress is cheaper to start and easy to edit, but it needs regular updates and careful plugin discipline, and it can become slow when it is stretched beyond what it was designed for.",
          "A custom build costs more upfront and is generally faster, more secure, and easier to extend when your requirements are specific. We build both and will recommend the one that fits your actual usage, not the one that bills more.",
        ],
        links: [
          { href: "/wordpress-development-company-in-nepal", label: "WordPress development in Nepal" },
          { href: "/web-development-company-in-nepal", label: "Custom web development" },
        ],
      },
      {
        id: "update-website-myself",
        question: "Can I update the website myself after launch?",
        answer:
          "Yes. Websites are handed over with an admin panel for the content you are likely to change (pages, text, images, products, blog posts, and inquiries) along with a walkthrough for your team.",
        more: [
          "Structural changes such as new page types or new features are development work, and we handle those on request.",
          "If you would rather not manage content at all, we can maintain it for you under a monthly arrangement.",
        ],
      },
      {
        id: "redesign-existing-website",
        question: "Can you redesign or fix our existing website?",
        answer:
          "Yes. We take on redesigns, rebuilds, speed and mobile fixes, security clean ups, and migrations from an old site or a previous developer.",
        more: [
          "We start with a review of what exists: what is worth keeping, what is causing the problems, and whether a fix or a rebuild is the better investment. Sometimes the honest answer is that a repair is enough.",
          "During a redesign, existing SEO value is preserved with proper URL mapping and redirects so you do not lose the rankings you already have.",
        ],
      },
      {
        id: "mobile-friendly",
        question: "Will my website work properly on mobile?",
        answer:
          "Yes. Every website we build is designed mobile first and tested across phone, tablet, and desktop before launch. In Nepal the majority of visitors arrive on a phone, so mobile is the primary design target, not an afterthought.",
        more: [
          "Google also evaluates the mobile version of your site for ranking, so a site that breaks on a phone loses both customers and visibility.",
        ],
      },
      {
        id: "website-speed",
        question: "Will my website be fast, and does speed really matter?",
        answer:
          "Yes, speed matters directly. Slow pages lose visitors before they read anything and rank worse in Google. We build with optimised images, minimal scripts, and proper caching, and we test loading performance before handover.",
        more: [
          "Speed matters more in Nepal than global averages suggest, because a meaningful share of traffic arrives on mobile data with variable connection quality.",
          "The usual culprits behind slow Nepali business websites are oversized uncompressed images, a heavy theme with a dozen plugins, and cheap overloaded hosting.",
        ],
      },
      {
        id: "content-and-photos",
        question: "Do you provide content writing and photographs?",
        answer:
          "We provide website content writing as part of most projects, structured for both readers and search engines. Photography and video production are arranged separately, and we can advise on what you actually need before you spend on a shoot.",
        more: [
          "Where suitable, professionally licensed stock imagery is used to keep costs down, but for teams, premises, and products, real photographs almost always perform better.",
        ],
      },
      {
        id: "hosting-and-domain-management",
        question: "Can you handle hosting and domain registration for us?",
        answer:
          "Yes. We can register your domain, set up hosting, configure email, and manage renewals, with everything registered in your company's name and your credentials, so ownership always stays with you.",
        more: [
          "If you already have hosting, we can work with it or advise you honestly if it is the reason your site is slow.",
          "We will also set up business email on your own domain, which matters more for credibility than most businesses expect.",
        ],
      },
      {
        id: "com-vs-com-np",
        question: "Should I register a .com or a .com.np domain?",
        answer:
          "Register a .com if you want the broadest recognition and the simplest transfer process, and a .com.np if your audience is entirely within Nepal and local identity matters. Many businesses register both and point one to the other.",
        more: [
          ".com.np domains are issued free of cost through Nepal's national registry, but they require document verification, typically company registration papers, and renewal follows the registry's own process rather than a commercial registrar's.",
          "Neither choice gives you a ranking advantage by itself. A .com.np can help slightly with local relevance signals; content, speed, and links matter far more.",
        ],
      },
      {
        id: "multilingual-website",
        question: "Can you build a website in both English and Nepali?",
        answer:
          "Yes. We build bilingual and multilingual websites with proper language structure, correct fonts for Devanagari, and the right technical markup so search engines index each language version correctly.",
        more: [
          "The part worth planning early is who maintains the translations. A second language that goes stale is worse than not having it, so we set up the CMS so both versions are edited side by side.",
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    title: "Online stores & payments",
    intro: "Payment gateways, delivery, and what running an online store in Nepal actually involves.",
    faqs: [
      {
        id: "payment-gateway-integration",
        question: "Can you integrate eSewa, Khalti, Fonepay, or ConnectIPS?",
        answer:
          "Yes. We integrate Nepal's common payment gateways (eSewa, Khalti, Fonepay, IMEPay, and ConnectIPS) along with bank transfer and cash on delivery options.",
        more: [
          "Each gateway requires a merchant account in your business's name, with its own documentation and approval process, and its own transaction fee. We handle the technical integration and guide you through the merchant application.",
          "Cash on delivery is still a significant share of orders in Nepal, so we usually build order flows that handle it properly rather than treating it as an afterthought.",
        ],
      },
      {
        id: "international-payments",
        question: "Can my Nepali business accept international card payments?",
        answer:
          "It is possible but constrained. Accepting international cards from Nepal generally requires working with a licensed local acquiring bank or an approved payment partner, and it is subject to Nepal Rastra Bank regulations on foreign currency.",
        more: [
          "For businesses selling services abroad, the practical routes are usually an approved gateway arrangement through your bank, or an international platform where the arrangement is permitted for your category.",
          "We will build your store so the payment layer can be swapped or extended later without rebuilding the checkout.",
        ],
      },
      {
        id: "ecommerce-timeline",
        question: "How long does it take to build an online store?",
        answer:
          "A standard online store typically takes 4 to 8 weeks, and a custom store with multiple payment gateways, inventory sync, delivery integration, and a full admin panel usually takes 8 to 16 weeks.",
        more: [
          "Product data is the usual bottleneck: photographs, descriptions, variants, weights, and pricing for a large catalogue take longer to prepare than most teams estimate. Starting that early shortens the project more than anything else.",
        ],
      },
      {
        id: "delivery-and-inventory",
        question: "Can you integrate delivery partners, inventory, and POS?",
        answer:
          "Yes. We connect online stores to courier and delivery workflows, inventory systems, and point of sale software so online and offline stock stay consistent rather than being reconciled by hand.",
        more: [
          "Where a delivery partner offers an API, we integrate it directly; where they do not, we build order exports and status updates that fit their process.",
        ],
        links: [
          { href: "/pos-software-in-nepal", label: "POS software in Nepal" },
          { href: "/inventory-management-software-in-nepal", label: "Inventory management software" },
        ],
      },
    ],
  },
  {
    id: "seo",
    title: "SEO, Google & marketing",
    intro: "Realistic timelines, what rankings actually depend on, and what to expect from a monthly budget.",
    faqs: [
      {
        id: "seo-timeline",
        question: "How long does SEO take to show results in Nepal?",
        answer:
          "Expect early movement in 2 to 3 months, meaningful ranking and traffic improvement in 4 to 6 months, and competitive national keywords to take 6 to 12 months. Local searches in a specific city usually move faster than national ones.",
        more: [
          "The timeline depends on where you start: a new domain with no content takes longer than an established site that simply has technical problems holding it back.",
          "Anything that promises top rankings in a few weeks is either targeting keywords nobody searches or using tactics that create a bigger problem later.",
        ],
        links: [{ href: "/seo-company-in-nepal", label: "SEO services in Nepal" }],
      },
      {
        id: "ranking-guarantee",
        question: "Can you guarantee first page Google rankings?",
        answer:
          "No, and no honest agency can. Google's ranking system is not controlled by any vendor. What we can commit to is the work that reliably produces rankings: technical health, well structured content, correct on page optimisation, internal linking, local search setup, and transparent monthly reporting.",
        more: [
          "We do set measurable targets (keyword positions, impressions, clicks, and inquiries) and report against them monthly so you can judge progress on evidence rather than promises.",
        ],
      },
      {
        id: "google-maps-ranking",
        question: "Why doesn't my business show on Google Maps, and how do I fix it?",
        answer:
          "Usually because the Google Business Profile is unverified, incomplete, or duplicated. Fixing it means claiming and verifying the profile, completing every field, using a consistent name, address, and phone number everywhere online, adding real photos, and collecting genuine reviews steadily.",
        more: [
          "Local ranking depends heavily on proximity, relevance, and prominence. Consistent business details across your website, Google, Facebook, and local directories is one of the highest return tasks for a Nepali business.",
          "Duplicate or old listings from previous owners or staff are a common hidden cause. Those need to be found and merged.",
        ],
      },
      {
        id: "ad-budget-nepal",
        question: "What is a realistic monthly ad budget in Nepal?",
        answer:
          "For Facebook and Instagram, a realistic starting budget in Nepal is around NPR 10,000 to NPR 50,000 per month; Google Ads usually needs a similar or larger budget because cost per click depends on keyword competition. Management fees are charged separately from the ad spend itself.",
        more: [
          "Spend enough for the platform to learn. Very small budgets spread across many campaigns rarely produce usable data. One well targeted campaign beats five underfunded ones.",
          "Before scaling spend, make sure the destination converts. Paying to send traffic to a slow or unclear page is the most common way marketing budgets are wasted.",
        ],
        links: [{ href: "/digital-marketing-company-in-nepal", label: "Digital marketing in Nepal" }],
      },
      {
        id: "nepali-language-seo",
        question: "Do you do SEO for Nepali language searches?",
        answer:
          "Yes. We optimise for Nepali language and romanised Nepali search terms as well as English, because a large share of local searches are typed in a mix of both.",
        more: [
          "This matters most for local service businesses, where customers search the way they speak rather than in formal keywords.",
        ],
      },
      {
        id: "redesign-and-seo",
        question: "Will a website redesign hurt my existing Google rankings?",
        answer:
          "Not if it is done properly. Rankings are lost during redesigns when URLs change without redirects, content is removed, or the new site is slower, all of which are avoidable with planning.",
        more: [
          "Our redesign process maps every existing URL, sets up permanent redirects, preserves the content that already ranks, and monitors search performance after launch to catch anything that slips.",
        ],
      },
    ],
  },
  {
    id: "software",
    title: "Custom software, automation & data",
    intro: "Buy versus build, timelines, integrations, and how your data is handled.",
    faqs: [
      {
        id: "buy-vs-build",
        question: "Should we buy ready made software or build something custom?",
        answer:
          "Buy ready made when your process is standard and a proven tool already fits it; build custom when your workflow is genuinely specific, when off the shelf licensing becomes expensive at your team size, or when you keep paying people to work around a tool's limitations.",
        more: [
          "A useful test: if your team maintains parallel spreadsheets alongside the software they already pay for, the tool does not fit the workflow.",
          "There is also a middle path we often recommend: keep the standard tools and build only the connecting layer or the one module that is genuinely unique to your business.",
        ],
        links: [
          { href: "/business-automation-software-nepal", label: "Business automation in Nepal" },
          { href: "/products", label: "Our ready-made products" },
        ],
      },
      {
        id: "custom-software-timeline",
        question: "How long does custom software take to build?",
        answer:
          "A focused first version typically takes 6 to 12 weeks, and a larger multi module system generally takes 4 to 9 months, delivered module by module rather than in one release at the end.",
        more: [
          "We deliver in stages deliberately: your team starts using the first module while the next is being built, so problems surface early and the final system reflects real usage rather than assumptions made in month one.",
        ],
        links: [{ href: "/software-development-company-in-nepal", label: "Software development in Nepal" }],
      },
      {
        id: "integrations",
        question: "Can new software integrate with our existing systems?",
        answer:
          "Yes, in most cases. We integrate with accounting software, POS systems, SMS gateways, payment gateways, Google Workspace, and other tools where an API or a supported data exchange exists.",
        more: [
          "Where a system has no API, which is common with older local software, we build scheduled imports and exports so data still flows without manual reentry.",
          "Tell us your existing tools at the quotation stage. Integration effort is much cheaper to plan for than to retrofit.",
        ],
      },
      {
        id: "data-security",
        question: "Is our data safe, and where is it hosted?",
        answer:
          "Your data is yours, hosted on infrastructure you own or control, with encrypted connections, role based access so staff only see what they should, and regular automated backups.",
        more: [
          "We can host on international cloud providers for reliability and speed, or on local infrastructure where your policy or client requirements demand data stay in Nepal.",
          "We sign nondisclosure agreements on request, and access to production systems is limited and handed over to you at project close.",
        ],
      },
      {
        id: "offline-and-low-internet",
        question: "Can the system work with poor internet or offline?",
        answer:
          "Yes, where the workflow requires it. For field teams and locations with unreliable connectivity, we build offline capable apps that store data locally and sync automatically once a connection is restored.",
        more: [
          "This is a common requirement for field service, field sales, and site inspection works specially in the context of Nepal, and it is one of the reasons our own products handle it natively.",
        ],
        links: [{ href: "/products", label: "See our field products" }],
      },
      {
        id: "billing-and-ird",
        question: "Can you build billing that meets Nepal's tax and IRD requirements?",
        answer:
          "We build billing and invoicing modules with VAT and PAN handling, Nepali (Bikram Sambat) dates, and the reporting formats local accounting expects. Note that billing software used by VAT registered businesses in Nepal must meet Inland Revenue Department requirements and be approved by the IRD before use.",
        more: [
          "Depending on your situation, the right path is either building to those specifications and going through the approval process, or integrating your operations system with an already approved billing package so invoices stay compliant.",
          "We will tell you which route applies to your business at the scoping stage rather than after the build.",
        ],
      },
    ],
  },
  {
    id: "labs",
    title: "Lab & healthcare software",
    intro:
      "Questions we get from medical laboratories, diagnostic centres, and hospitals in Nepal about Nidanyo and how lab systems work here.",
    faqs: [
      {
        id: "best-lab-software-nepal",
        question: "What is the best lab management software in Nepal?",
        answer:
          "For a Nepali laboratory, the best lab software is the one that handles local realities: credit accounts with referring clinics, referral commissions, Nepali date reporting, and support you can reach by phone when the counter is busy. Nidanyo by Infobytes Nepal is built here for exactly that, covering registration, sample tracking, result verification, report release, billing, and reagent stock in one system.",
        more: [
          "Imported LIMS products are usually stronger on research and regulated pharmaceutical workflows and weaker on the commercial side that Nepali labs actually run on. A lab here spends more time on referral commissions and credit reconciliation than on any laboratory science feature, and that is where most foreign systems make you build workarounds.",
          "The practical test when comparing options: ask the vendor to show you a doctor commission statement and a daily counter reconciliation. If they cannot, the system will cost you staff hours every month.",
        ],
        links: [
          { href: "/lab-software-in-nepal", label: "Lab software in Nepal" },
          { href: "/products/nidanyo", label: "Nidanyo lab management system" },
        ],
      },
      {
        id: "lims-vs-billing-software",
        question: "What is the difference between a LIMS and lab billing software?",
        answer:
          "Lab billing software prints bills and often reports. A laboratory information management system tracks the sample itself, so it can tell you when a sample arrived, who ran it, which reagent lot was used, who verified the result, and whether the report was later amended. That traceability is what audits and accreditation reviews ask for and what billing packages cannot produce.",
        more: [
          "Most labs in Nepal start with a billing package because it is cheaper and solves the visible problem. The cost shows up later, usually during an accreditation attempt or a disputed report, when nobody can reconstruct what happened.",
        ],
        links: [
          {
            href: "/laboratory-information-management-system-nepal",
            label: "Laboratory information management system in Nepal",
          },
        ],
      },
      {
        id: "lab-software-cost-nepal",
        question: "How much does lab software cost in Nepal?",
        answer:
          "It depends on the number of counters and users, whether analyser interfacing is needed, how many branches or collection centres you run, and whether you host it yourself or we host it. A single branch lab with manual result entry sits at the low end; a multi branch diagnostic centre with interfacing sits considerably higher.",
        more: [
          "We quote against your actual monthly test volume, branch count, and test menu rather than publishing a package price, because lab requirements vary more than most software categories. Setup, catalogue loading, report formatting, and staff training are quoted as part of the project rather than appearing as surprises later.",
        ],
        links: [{ href: "/lab-software-in-nepal", label: "Lab software in Nepal" }],
      },
      {
        id: "analyser-interfacing",
        question: "Can lab software connect to our analysers?",
        answer:
          "Yes, for analysers that support standard interfacing. Results transfer from the machine into the result entry screen directly, which removes the transcription errors that cause most rework in a busy lab. Machines without an interface port are handled by manual entry through the same verification path.",
        more: [
          "Interfacing is worth doing for high volume machines in biochemistry and haematology, where the transcription load is heaviest. For low volume specialised tests it often is not worth the setup cost, and we will say so rather than adding it to a quote.",
        ],
      },
      {
        id: "lab-offline",
        question: "What happens to our lab system if the internet goes down?",
        answer:
          "Labs that cannot risk downtime run Nidanyo on a machine inside the lab, so registration, sample entry, and billing keep working through an outage, with backups and remote reporting syncing when the connection returns. Labs with reliable connectivity usually prefer the hosted setup so updates and backups are handled by us.",
        links: [{ href: "/products/nidanyo", label: "How Nidanyo is deployed" }],
      },
      {
        id: "hospital-vs-lab-software",
        question: "We are a hospital with a lab. Do we need both systems?",
        answer:
          "Usually one system with a lab module, not two. If the lab mainly serves your own OPD and IPD patients, a hospital system with proper lab functionality avoids double registration and double billing. A lab that also takes significant outside and referral work often needs the deeper lab specific features, in which case the two are built to share patient and billing records.",
        links: [
          { href: "/hospital-management-software-in-nepal", label: "Hospital management software in Nepal" },
          { href: "/lab-software-in-nepal", label: "Lab software in Nepal" },
        ],
      },
    ],
  },
  {
    id: "process",
    title: "Working with Infobytes Nepal",
    intro: "How projects run, how we communicate, and what happens after launch.",
    faqs: [
      {
        id: "how-projects-start",
        question: "How does a project usually start?",
        answer:
          "It starts with a conversation about your goals, your current workflow, and where it breaks. From there we define a realistic scope and a focused first version, put it in writing with a timeline and cost, and only then begin building.",
        more: [
          "That first discussion is free and carries no obligation. Even if we are not the right fit, you will leave it with a clearer idea of what the work involves.",
        ],
        links: [{ href: "/contact", label: "Start a conversation" }],
      },
      {
        id: "communication",
        question: "How do we communicate during the project?",
        answer:
          "You get a named point of contact, agreed check ins at each milestone, and a shared preview link so you can see progress as it happens rather than waiting for a reveal at the end.",
        more: [
          "Day to day communication happens on whatever channel suits you (email, phone, WhatsApp, or Viber) and decisions that affect scope, cost, or timeline are always confirmed in writing.",
        ],
      },
      {
        id: "phased-work",
        question: "Can we work in phases?",
        answer:
          "Yes, and for most growing teams it is the approach we recommend. A focused first phase goes live sooner, costs less to begin, and tells you what the next phase should contain based on real usage instead of guesswork.",
        more: [
          "Each phase is scoped and quoted on its own, so you are never committed to spending beyond the phase you have approved.",
        ],
      },
      {
        id: "post-launch-support",
        question: "Do you provide support after launch?",
        answer:
          "Yes. Every project includes a support period after handover for fixes and adjustments, and beyond that we offer ongoing maintenance, content updates, SEO work, and new features as your business grows.",
        more: [
          "Support terms are agreed in writing before launch, so you know what is covered, what is billed, and how quickly issues are responded to.",
        ],
      },
      {
        id: "changes-after-launch",
        question: "What if I need changes after the website or system is live?",
        answer:
          "Small content changes are usually covered under a maintenance arrangement or handled quickly on request, and larger changes are scoped and quoted as improvements before any work starts.",
        more: [
          "Websites and internal systems are supposed to change, and that is a sign the business is moving. We build them so changes do not require rebuilding from scratch.",
        ],
      },
      {
        id: "nda",
        question: "Will you sign an NDA?",
        answer:
          "Yes. We sign nondisclosure agreements on request, and we treat client data, business processes, and unreleased plans as confidential by default whether or not an NDA is in place.",
      },
      {
        id: "rescue-project",
        question: "Can you take over a project another developer abandoned?",
        answer:
          "Yes. We regularly take over half finished or unsupported projects. We start with an assessment of the existing code, hosting, and accounts, then give you an honest recommendation on whether to continue it or rebuild.",
        more: [
          "Before anything else, secure what you can: domain registrar access, hosting credentials, source code, database backups, and any third party accounts. Recovering those later is the hardest part of a rescue.",
        ],
      },
      {
        id: "outside-kathmandu",
        question: "Do you work with clients outside Kathmandu Valley or outside Nepal?",
        answer:
          "Yes. We work with businesses across Nepal (Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan, Butwal, Biratnagar and beyond) and with International clients abroad. Most collaboration happens online, so location is rarely a barrier.",
        more: [
          "For clients in the Kathmandu Valley, in person meetings are easy to arrange at our Kaushaltar, Bhaktapur office or at yours.",
        ],
        links: [
          { href: "/it-company-in-kathmandu", label: "IT company in Kathmandu" },
          { href: "/it-company-in-lalitpur", label: "IT company in Lalitpur" },
          { href: "/it-company-in-bhaktapur", label: "IT company in Bhaktapur" },
          { href: "/it-company-in-pokhara", label: "IT company in Pokhara" },
        ],
      },
    ],
  },
  {
    id: "company",
    title: "About Infobytes Nepal",
    intro: "Who we are, what we build, and how to reach us.",
    faqs: [
      {
        id: "what-we-do",
        question: "What does Infobytes Nepal do?",
        answer:
          "Infobytes Nepal is a Nepal based IT company offering custom software development, web design and development, SEO, digital marketing, graphic design, training, and business automation. We also build focused digital products for field service, sales, lead tracking, and student talent workflows.",
        links: [
          { href: "/services", label: "All services" },
          { href: "/products", label: "Our products" },
        ],
      },
      {
        id: "legal-entity",
        question: "Is Infobytes Nepal a registered company?",
        answer:
          "Yes. Our registered legal name is Infobytes Nepal Pvt. Ltd., a private limited company based in Kaushaltar, Bhaktapur, Nepal. Registration and tax details are shared on request, and all quotations, contracts, and invoices are issued under that name.",
      },
      {
        id: "location",
        question: "Where is Infobytes Nepal located?",
        answer:
          "We are based in Kaushaltar, Bhaktapur, Nepal, within the Kathmandu Valley, and we work with businesses across the country. You can reach us at inquiry@infobytesnepal.com or +977-9843468715.",
        links: [{ href: "/contact", label: "Contact details and map" }],
      },
      {
        id: "who-we-work-with",
        question: "What types of businesses do you work with?",
        answer:
          "We work with startups, small and growing businesses, consultancies, schools, hospitals and clinics, retailers, service teams, and sales driven organizations in Nepal that want clearer, more reliable digital systems.",
        more: [
          "Project size matters less than clarity of purpose. A well defined small project is welcome; so is a multi module system replacing years of spreadsheets.",
        ],
        links: [
          { href: "/school-management-software-in-nepal", label: "School management software" },
          { href: "/hospital-management-software-in-nepal", label: "Hospital management software" },
        ],
      },
      {
        id: "services-vs-products",
        question: "What is the difference between your services and your products?",
        answer:
          "Services are custom work built around your specific requirements. Products (Nidanyo, LeadRack, Serviol, Purseol, and Pravyo) are ready made systems for medical laboratories, lead tracking, field service, field sales, and student talent workflows that you can adopt directly and start using much faster.",
        more: [
          "If a product covers most of what you need, adopting and configuring it is usually quicker and cheaper than building from zero. We will tell you which route fits.",
        ],
        links: [{ href: "/products", label: "Explore our products" }],
      },
      {
        id: "design-dev-marketing-together",
        question: "Can you handle design, development, and marketing together?",
        answer:
          "Yes. Because design, development, SEO, and marketing sit under one team, your website, brand visuals, and campaigns stay consistent, and nobody is left coordinating between three vendors who blame each other when results stall.",
        links: [{ href: "/services", label: "See how services connect" }],
      },
      {
        id: "custom-software-or-websites",
        question: "Do you build custom software or only websites?",
        answer:
          "Both. We build company websites and landing pages as well as custom web applications, dashboards, CRM style tools, and automation systems built around your workflow.",
      },
      {
        id: "get-started",
        question: "How do I get started with Infobytes Nepal?",
        answer:
          "Send us your requirement, current workflow, or goal through the contact page, or email inquiry@infobytesnepal.com. We will respond with questions if anything is unclear, then a scope, an indicative cost, and a realistic timeline, at no charge.",
        links: [{ href: "/contact", label: "Contact Infobytes Nepal" }],
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((group) => group.faqs);

/** Full answer text for schema markup — the direct answer plus supporting paragraphs. */
export function faqAnswerText(faq: Faq) {
  return [faq.answer, ...(faq.more ?? [])].join(" ");
}
