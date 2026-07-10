export type SeoLandingPage = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  keyword: string;
  heroTitle: string;
  heroIntro: string;
  overview: {
    title: string;
    paragraphs: string[];
  };
  problems: string[];
  solutions: string[];
  features: string[];
  process: Array<{
    title: string;
    text: string;
  }>;
  reasons: string[];
  related: Array<{
    href: string;
    label: string;
    text: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const seoLandingPages = {
  software: {
    slug: "software-development-company-in-nepal",
    path: "/software-development-company-in-nepal",
    metaTitle: "Software Development Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds custom software, automation tools, CRM-style systems, and practical digital products for growing businesses and teams in Nepal.",
    ogTitle: "Software Development Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Work with InfoBytes Nepal for custom software development, workflow automation, CRM-style platforms, and business-focused systems built for Nepal.",
    keyword: "Software Development Company in Nepal",
    heroTitle: "Software Development Company in Nepal",
    heroIntro:
      "InfoBytes Nepal builds practical software for teams that need clearer operations, better tracking, and dependable digital systems. We focus on custom products, automation, and business tools that fit real workflows in Nepal.",
    overview: {
      title: "Custom software built around real business work",
      paragraphs: [
        "A reliable software system should reduce confusion, not add another layer of work. Many organizations in Nepal still manage leads, service requests, student data, field teams, reports, and approvals through spreadsheets, chat messages, and disconnected tools. Those methods can work at first, but they become difficult to control as the team grows.",
        "InfoBytes Nepal approaches software development with a practical mindset. We study the workflow, define the users, map the operational pain points, and then build a system that supports the way the organization actually works. The result may be a CRM-style platform, a service management system, a sales operations tool, a student/talent platform, or a custom dashboard for internal teams.",
        "Our goal is not to overcomplicate the solution. We build focused systems that are easier to use, easier to maintain, and easier to improve over time. For businesses searching for custom software development Nepal, the strongest result is usually a product that fits the team, not a generic system forced into the business.",
      ],
    },
    problems: [
      "Customer and lead information is spread across notebooks, chat groups, spreadsheets, and individual staff devices.",
      "Managers cannot see the real status of field service, sales visits, follow-ups, or support work without asking multiple people.",
      "Manual reporting takes time and often creates duplicate or inconsistent data.",
      "Off-the-shelf tools may be too broad, too expensive, or not suited to local operating habits in Nepal.",
      "Growing teams need permissions, audit trails, dashboards, and structured workflows, but do not always need a huge enterprise system.",
    ],
    solutions: [
      "We design custom software around the actual roles, stages, data, and reports your team needs.",
      "We build workflow automation that reduces repeated manual updates and helps teams act faster.",
      "We create dashboards and operational views so decision makers can understand work status without chasing updates.",
      "We connect software planning with product thinking, so the system remains usable for daily teams and scalable for future improvements.",
      "We can align your custom system with existing InfoBytes Nepal products when a focused product already solves part of the workflow.",
    ],
    features: [
      "Custom web application development",
      "CRM and lead management workflows",
      "Business automation dashboards",
      "Sales and service operations systems",
      "Role-based access and admin panels",
      "Reporting, filtering, and operational visibility",
      "Student, talent, and consultancy-focused platforms",
      "Ongoing product improvement planning",
    ],
    process: [
      {
        title: "Discovery",
        text: "We begin by understanding the organization, users, workflow stages, data sources, and current bottlenecks. This keeps the project grounded in business reality.",
      },
      {
        title: "Scope and structure",
        text: "We define modules, user roles, dashboards, forms, notifications, and reports. The scope stays clear so the first version can be built with confidence.",
      },
      {
        title: "Design and development",
        text: "We turn the workflow into a clean interface and reliable software foundation, keeping speed, usability, and maintainability in mind.",
      },
      {
        title: "Testing and launch",
        text: "We review real use cases, fix issues, prepare the launch, and help the team understand how the system should be used.",
      },
      {
        title: "Improve",
        text: "After launch, we can refine reports, add automation, and improve the product as the business learns from real usage.",
      },
    ],
    reasons: [
      "Nepal-based team with a practical understanding of local business workflows.",
      "Experience across field service, sales management, lead tracking, and student talent products.",
      "Business-first planning before development begins.",
      "A preference for focused systems instead of unnecessary complexity.",
      "Clear internal links between software services and existing InfoBytes Nepal products.",
    ],
    related: [
      {
        href: "/services",
        label: "custom software development services",
        text: "Review the broader service areas InfoBytes Nepal supports.",
      },
      {
        href: "/products",
        label: "business automation products",
        text: "Explore ready product directions for service, sales, lead, and student workflows.",
      },
      {
        href: "/products/serviol",
        label: "Serviol for service operations",
        text: "A field service management product for tickets, planners, and attendance.",
      },
      {
        href: "/products/purseol",
        label: "Purseol for sales teams",
        text: "A field sales management product for visits, pitches, and outcomes.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Start a focused conversation about your software requirement.",
      },
    ],
    faqs: [
      {
        question: "What type of software can InfoBytes Nepal build?",
        answer:
          "InfoBytes Nepal can build custom web applications, CRM-style tools, sales and service management systems, dashboards, admin panels, and workflow automation products for businesses in Nepal.",
      },
      {
        question: "Is custom software better than a ready-made tool?",
        answer:
          "Custom software is useful when your workflow, reports, team roles, or operating process do not fit a generic tool. A ready-made product may be better when your need is already covered by a focused product.",
      },
      {
        question: "Can you build business automation software for a small team?",
        answer:
          "Yes. A practical first version can start with core workflows such as lead tracking, task status, customer records, reports, or approvals, then improve as the team grows.",
      },
      {
        question: "Do you also help with product planning?",
        answer:
          "Yes. Before development, InfoBytes Nepal helps define the workflow, users, modules, priorities, and launch scope so the software remains useful and manageable.",
      },
      {
        question: "How do we begin a software project?",
        answer:
          "You can contact InfoBytes Nepal with your current workflow, pain points, and goals. The team can then discuss the right scope, product direction, and next steps.",
      },
    ],
  },
  web: {
    slug: "web-development-company-in-nepal",
    path: "/web-development-company-in-nepal",
    metaTitle: "Web Development Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal designs and develops fast, responsive, business-focused websites, landing pages, and web platforms for growing companies in Nepal.",
    ogTitle: "Web Development Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Build a modern, responsive, and business-focused website with InfoBytes Nepal, a Nepal-based team for web design and development.",
    keyword: "Web Development Company in Nepal",
    heroTitle: "Web Development Company in Nepal",
    heroIntro:
      "InfoBytes Nepal helps businesses create websites that look credible, load smoothly, and support real business goals. We build modern websites and web platforms for teams in Nepal that need a stronger digital presence.",
    overview: {
      title: "Websites that support trust, clarity, and growth",
      paragraphs: [
        "A website is often the first serious interaction a customer has with a business. For companies in Nepal, that first impression matters. A slow website, unclear message, broken mobile layout, or outdated design can make a good business look less reliable than it really is.",
        "InfoBytes Nepal provides web design and development services in Nepal with a focus on clean structure, responsive layouts, useful content flow, and technical stability. We build company websites, service pages, landing pages, product websites, and web platforms that are practical to manage and ready for future improvements.",
        "Our approach connects design with business purpose. A website should explain what you do, show why people can trust you, guide visitors toward action, and support SEO foundations. Whether you need a new website, a redesign, or a web application connected to your operations, we keep the experience simple, professional, and focused.",
      ],
    },
    problems: [
      "Many business websites in Nepal are not mobile-friendly, even though customers often browse from phones.",
      "Service information is unclear, making it hard for visitors to understand what the company actually offers.",
      "Old websites may be difficult to update, slow to load, or dependent on manual developer changes for simple content.",
      "Landing pages are often designed visually but not planned around conversion, search visibility, or customer questions.",
      "Growing companies need websites that can later connect with forms, dashboards, CRM, or automation systems.",
    ],
    solutions: [
      "We plan website structure around customer intent, service clarity, and business goals.",
      "We create responsive interfaces that work across mobile, tablet, and desktop screens.",
      "We build with performance and maintainability in mind, so the website remains useful after launch.",
      "We support CMS and admin needs where teams want easier content management.",
      "We can connect websites with inquiry forms, product flows, lead tracking, and future business automation systems.",
    ],
    features: [
      "Responsive company websites",
      "Service and landing page development",
      "Custom UI and user experience planning",
      "CMS or admin integration",
      "Website speed and technical structure",
      "Inquiry and lead capture forms",
      "Product and platform web pages",
      "SEO-ready page foundations",
    ],
    process: [
      {
        title: "Understand the business",
        text: "We review your audience, services, goals, existing content, and the action visitors should take after landing on the website.",
      },
      {
        title: "Plan the pages",
        text: "We map the page structure, sections, internal links, calls to action, and content priorities before design and development begin.",
      },
      {
        title: "Design and build",
        text: "We create a polished, responsive website using the current brand direction and a technical setup that supports performance.",
      },
      {
        title: "Review and launch",
        text: "We test the website across screens, review content, connect forms or tracking needs, and prepare the launch carefully.",
      },
      {
        title: "Improve over time",
        text: "After launch, the website can evolve with SEO pages, new service pages, product pages, and conversion improvements.",
      },
    ],
    reasons: [
      "Nepal-based web development support with practical business context.",
      "A clean design approach that keeps pages professional and easy to scan.",
      "Experience with service websites, product websites, and workflow-based web platforms.",
      "Ability to connect websites with SEO, digital marketing, and automation needs.",
      "Focus on maintainable foundations, not just a one-time visual build.",
    ],
    related: [
      {
        href: "/services",
        label: "web development services in Nepal",
        text: "See how web design fits into the wider InfoBytes Nepal service offering.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO and digital marketing support",
        text: "Plan search visibility alongside the website structure.",
      },
      {
        href: "/products/leadrack",
        label: "LeadRack for lead tracking",
        text: "Connect website inquiries with a more traceable lead management workflow.",
      },
      {
        href: "/products",
        label: "business automation products",
        text: "Explore products that can support operations beyond the website.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a new website, redesign, or web platform requirement.",
      },
    ],
    faqs: [
      {
        question: "What makes a good business website in Nepal?",
        answer:
          "A good business website should be fast, mobile-friendly, easy to understand, credible, and built around clear actions such as inquiries, calls, bookings, or product exploration.",
      },
      {
        question: "Can InfoBytes Nepal redesign an existing website?",
        answer:
          "Yes. InfoBytes Nepal can review an existing website, identify structure and usability issues, and rebuild it with a cleaner design and stronger technical foundation.",
      },
      {
        question: "Do you build only websites or also web applications?",
        answer:
          "InfoBytes Nepal can build both. A company website focuses on presence and inquiries, while a web application can support workflows such as dashboards, CRM, service tracking, or sales operations.",
      },
      {
        question: "Will the website be mobile responsive?",
        answer:
          "Yes. Responsive layout is a core requirement because many customers in Nepal discover and evaluate businesses from mobile devices.",
      },
      {
        question: "Can the website support SEO later?",
        answer:
          "Yes. The website can be structured with clean headings, internal links, fast loading, and page foundations that support future SEO content and landing pages.",
      },
    ],
  },
  seo: {
    slug: "seo-company-in-nepal",
    path: "/seo-company-in-nepal",
    metaTitle: "SEO Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal provides practical SEO support for businesses in Nepal, including technical SEO, content planning, local visibility, and reporting.",
    ogTitle: "SEO Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Improve search visibility with practical SEO support from InfoBytes Nepal, including technical SEO, content structure, and local search planning.",
    keyword: "SEO Company in Nepal",
    heroTitle: "SEO Company in Nepal",
    heroIntro:
      "InfoBytes Nepal helps businesses improve search visibility with practical SEO foundations, content planning, technical improvements, and reporting. We focus on sustainable growth for Nepal-based companies and service providers.",
    overview: {
      title: "SEO that starts with clarity and useful content",
      paragraphs: [
        "Search visibility is not only about adding keywords to a page. For many businesses in Nepal, SEO becomes difficult because the website has unclear structure, weak service pages, slow performance, missing metadata, thin content, or no plan for local search intent.",
        "InfoBytes Nepal provides SEO support for businesses that want a clearer path to organic visibility. We review the technical foundation, page structure, metadata, internal links, content quality, and search opportunities. Then we help organize the website around real customer questions and business services.",
        "Our SEO approach is practical and careful. We do not promise instant rankings or make fake claims. Instead, we focus on improving the signals that search engines and users both need: relevant content, crawlable pages, useful internal links, fast pages, accurate metadata, and consistent business information.",
      ],
    },
    problems: [
      "Important services are not represented by dedicated pages, making it hard to rank for specific search intent.",
      "Titles and meta descriptions may be duplicated, too generic, or missing important Nepal-focused context.",
      "Websites may look good but lack technical SEO foundations such as canonical URLs, structured headings, sitemap coverage, and internal links.",
      "Businesses often publish content without understanding what customers are actually searching for.",
      "Leads from organic traffic can be hard to track when inquiry flows are not connected to a lead management process.",
    ],
    solutions: [
      "We audit metadata, page structure, sitemap signals, internal links, and technical SEO basics.",
      "We plan content around service intent, local Nepal search behavior, and customer questions.",
      "We improve on-page SEO with better headings, descriptions, FAQs, and useful page sections.",
      "We support technical cleanup such as canonical alignment, sitemap updates, and safe schema planning.",
      "We can connect SEO strategy with lead tracking and digital marketing workflows for better follow-up.",
    ],
    features: [
      "Technical SEO audit",
      "Keyword and search intent planning",
      "On-page SEO recommendations",
      "Local SEO foundations",
      "Metadata and Open Graph planning",
      "Internal linking strategy",
      "FAQ and content structure",
      "Performance and reporting guidance",
    ],
    process: [
      {
        title: "SEO audit",
        text: "We review the website structure, metadata, indexing signals, sitemap, page speed concerns, content depth, and internal links.",
      },
      {
        title: "Keyword and intent mapping",
        text: "We map important services and products to search terms that match how customers in Nepal look for solutions.",
      },
      {
        title: "Page improvements",
        text: "We improve metadata, headings, content sections, FAQs, internal links, and schema opportunities without unnecessary redesign.",
      },
      {
        title: "Content planning",
        text: "We identify missing pages, helpful topics, and content improvements that can build authority over time.",
      },
      {
        title: "Measure and refine",
        text: "SEO improves through monitoring, reporting, and gradual refinement based on search performance and user behavior.",
      },
    ],
    reasons: [
      "SEO work connected with web development, content structure, and technical implementation.",
      "Nepal-focused planning for service and product keywords.",
      "Careful recommendations that avoid keyword stuffing and fake ranking claims.",
      "Ability to connect SEO with digital marketing, lead tracking, and business automation.",
      "A practical path for improving existing pages before creating larger content campaigns.",
    ],
    related: [
      {
        href: "/services",
        label: "SEO and digital marketing support",
        text: "See where SEO fits within InfoBytes Nepal's broader service offering.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development services in Nepal",
        text: "Build a website foundation that supports long-term search visibility.",
      },
      {
        href: "/products/leadrack",
        label: "LeadRack lead management",
        text: "Organize and follow up with leads generated through organic search.",
      },
      {
        href: "/products",
        label: "business automation products",
        text: "Explore products that support sales, service, lead, and student workflows.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss an SEO audit or search visibility plan for your business.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take in Nepal?",
        answer:
          "SEO depends on competition, website condition, content quality, and consistency. Some technical improvements can be visible quickly, while stronger organic growth usually takes ongoing work.",
      },
      {
        question: "Can InfoBytes Nepal guarantee first-page ranking?",
        answer:
          "No responsible SEO company should guarantee a specific ranking. InfoBytes Nepal focuses on practical improvements, clear strategy, useful content, and technical foundations.",
      },
      {
        question: "What is included in an SEO audit?",
        answer:
          "An SEO audit can review metadata, sitemap coverage, canonical URLs, headings, page speed concerns, content quality, internal links, schema opportunities, and search intent gaps.",
      },
      {
        question: "Do you help with local SEO?",
        answer:
          "Yes. InfoBytes Nepal can help plan local SEO foundations such as location relevance, service content, business information consistency, and pages that answer local customer intent.",
      },
      {
        question: "Should SEO be planned before website development?",
        answer:
          "Yes, when possible. Planning SEO during web development helps create better page structure, faster pages, cleaner metadata, and stronger internal linking from the beginning.",
      },
    ],
  },
  itCompany: {
    slug: "it-company-in-nepal",
    path: "/it-company-in-nepal",
    metaTitle: "IT Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is a Nepal-based IT company for software development, websites, SEO, digital marketing, automation, digital products, and growth support.",
    ogTitle: "IT Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Explore InfoBytes Nepal as a practical IT company in Nepal for custom software, websites, SEO, digital marketing, automation, and product development.",
    keyword: "IT Company in Nepal",
    heroTitle: "IT Company in Nepal",
    heroIntro:
      "InfoBytes Nepal helps businesses, service teams, consultancies, and growing organizations use technology in a practical way. We support websites, software systems, SEO, digital marketing, automation, and digital product development for teams in Nepal.",
    overview: {
      title: "A practical technology partner for growing teams",
      paragraphs: [
        "A modern IT company in Nepal should do more than build pages or write code. Businesses need a partner that can understand operations, identify the right digital direction, and build systems that make daily work easier. A website may be the first requirement, but the real need may include lead tracking, service management, reporting, automation, SEO, and long-term product improvement.",
        "InfoBytes Nepal works across these connected areas. We design and develop websites, build custom software, improve search visibility, support digital marketing, and create business-focused products for sales, service, student, and operational workflows. This helps clients avoid scattered digital decisions and move toward a cleaner technical foundation.",
        "Our approach is simple: understand the business, keep the scope realistic, build cleanly, and improve over time. For organizations looking for an IT company in Nepal, the strongest partner is usually one that connects design, development, content, and operations instead of treating each service as an isolated task.",
      ],
    },
    problems: [
      "Many businesses use separate vendors for websites, marketing, software, and reporting, which can create inconsistent systems.",
      "Teams often begin with manual processes and only realize the need for automation after data becomes hard to manage.",
      "Websites may be visually present but disconnected from lead tracking, customer follow-up, and operational reporting.",
      "Digital marketing efforts can become weak when the website structure and service content do not support conversion.",
      "Local teams in Nepal need practical solutions that match budget, workflow, and staff adoption, not oversized technology.",
    ],
    solutions: [
      "We connect website, software, SEO, and automation planning so digital work supports one business direction.",
      "We help identify whether a need is best solved through a service, a custom system, or an existing InfoBytes Nepal product.",
      "We build websites and applications with maintainability, usability, and future improvement in mind.",
      "We plan digital visibility through SEO, service pages, metadata, content structure, and practical marketing support.",
      "We support business automation for leads, sales, service requests, reporting, and team workflows.",
    ],
    features: [
      "Custom software development",
      "Web design and development",
      "SEO and content planning",
      "Digital marketing support",
      "Business automation systems",
      "CRM-style workflow tools",
      "Product development and dashboards",
      "Training and digital skill support",
    ],
    process: [
      {
        title: "Understand",
        text: "We begin by learning the business model, current tools, customer journey, team roles, and the practical problems technology should solve.",
      },
      {
        title: "Prioritize",
        text: "We separate urgent needs from future improvements so the first scope remains realistic and valuable for the team.",
      },
      {
        title: "Design",
        text: "We plan page structure, user flows, dashboards, content, or campaign direction depending on the nature of the requirement.",
      },
      {
        title: "Build",
        text: "We develop the website, software, automation, or digital asset with a clean technical foundation and usable interface.",
      },
      {
        title: "Improve",
        text: "We review performance, feedback, and operational use so the digital system can keep improving after launch.",
      },
    ],
    reasons: [
      "Nepal-based team with service, software, SEO, marketing, and product experience.",
      "Practical planning that connects technical work with business workflows.",
      "Ability to support both custom builds and focused product solutions.",
      "Clear attention to maintainability, communication, and long-term improvement.",
      "Useful internal paths from website presence to automation and product adoption.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Explore custom software and workflow system support.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development services in Nepal",
        text: "Build a stronger website foundation for your business.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Improve search visibility with practical technical and content work.",
      },
      {
        href: "/products",
        label: "business automation products",
        text: "Review product directions for sales, service, lead, and student workflows.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss the right IT support for your current requirement.",
      },
    ],
    faqs: [
      {
        question: "What services does InfoBytes Nepal provide as an IT company?",
        answer:
          "InfoBytes Nepal supports software development, web design and development, SEO, digital marketing, graphics design, training, business automation, and product development for organizations in Nepal.",
      },
      {
        question: "Can one IT company handle both website and software needs?",
        answer:
          "Yes, if the team has experience across design, development, content, and workflow planning. This can help keep the digital direction consistent.",
      },
      {
        question: "Do you work with small businesses in Nepal?",
        answer:
          "Yes. InfoBytes Nepal can help small and growing teams start with focused websites, automation tools, CRM-style workflows, or digital marketing improvements.",
      },
      {
        question: "How should a business choose an IT company in Nepal?",
        answer:
          "Look for clear communication, realistic scope planning, maintainable development, practical support, and a team that understands the business problem before suggesting a solution.",
      },
      {
        question: "Can InfoBytes Nepal support long-term digital improvement?",
        answer:
          "Yes. Projects can start with one focused requirement and later expand into SEO, automation, reporting, products, or additional software modules.",
      },
    ],
  },
  bestItCompany: {
    slug: "best-it-company-in-nepal",
    path: "/best-it-company-in-nepal",
    metaTitle: "Best IT Company in Nepal Guide | InfoBytes Nepal",
    metaDescription:
      "Learn how to choose the best IT company in Nepal with practical criteria for websites, software, automation, support, digital growth, and fit with confidence.",
    ogTitle: "How to Choose the Best IT Company in Nepal",
    ogDescription:
      "A practical guide from InfoBytes Nepal on choosing an IT partner for software development, websites, SEO, automation, and long-term support.",
    keyword: "Best IT Company in Nepal",
    heroTitle: "How to Choose the Best IT Company in Nepal",
    heroIntro:
      "Choosing the best IT company in Nepal is not about a label. It is about finding a reliable partner that understands your business, communicates clearly, builds maintainable systems, and supports practical digital growth.",
    overview: {
      title: "The right IT partner should fit your business, not just your project",
      paragraphs: [
        "Businesses often search for the best IT company in Nepal when they need a website, software system, automation tool, SEO support, or a more dependable digital partner. The challenge is that every business has different goals. A school, consultancy, field service team, sales company, startup, and corporate office may all need technology, but their workflows and priorities are not the same.",
        "A good decision starts with criteria. The company should ask useful questions, understand the real problem, explain the scope clearly, and avoid pushing unnecessary complexity. Strong IT work should help a business become easier to manage, easier to present, easier to track, or easier to grow.",
        "InfoBytes Nepal positions itself as a practical option for teams that want thoughtful planning, clean development, and business-focused digital systems. We do not claim that one company is perfect for every case. Instead, we believe businesses should choose a partner based on fit, communication, maintainability, and the ability to support the next stage after launch.",
      ],
    },
    problems: [
      "Businesses may compare IT companies only by price, without checking scope clarity, support, or long-term maintainability.",
      "A visually attractive website or app can still fail if it does not match real user needs or business workflows.",
      "Some projects begin without proper documentation, priorities, timelines, or expectations, leading to confusion later.",
      "Clients may not know whether they need a custom system, an existing product, SEO support, or a simpler website first.",
      "After launch, many teams struggle because training, support, reporting, or future improvements were not planned early.",
    ],
    solutions: [
      "We help clients clarify the business problem before deciding the exact technical direction.",
      "We keep project scope practical, with clear modules, page plans, workflows, or campaign priorities.",
      "We build solutions that can be maintained and improved rather than treating launch as the end of the work.",
      "We connect related needs such as website, SEO, lead tracking, CRM-style workflows, and automation.",
      "We guide clients toward custom development or existing InfoBytes Nepal products depending on what fits better.",
    ],
    features: [
      "Requirement discovery and scope planning",
      "Website and web platform development",
      "Custom software and automation",
      "SEO and digital growth support",
      "Lead, sales, and service workflows",
      "CMS and admin tools",
      "Post-launch improvement planning",
      "Practical training and handover",
    ],
    process: [
      {
        title: "Compare needs",
        text: "We help identify whether the business needs visibility, workflow control, automation, product development, or a combination of services.",
      },
      {
        title: "Define success",
        text: "Before development, we define what a successful first version should achieve for the users, managers, and business owner.",
      },
      {
        title: "Plan clearly",
        text: "We outline features, pages, roles, reports, integrations, and priorities so the project does not drift unnecessarily.",
      },
      {
        title: "Build carefully",
        text: "We create the digital solution with clean design, practical usability, and a technical setup that can be improved.",
      },
      {
        title: "Support next steps",
        text: "After launch, we can help refine content, reports, automation, SEO, marketing, or additional product modules.",
      },
    ],
    reasons: [
      "A careful, non-claim approach to helping businesses evaluate IT partners.",
      "Experience across software, websites, automation, SEO, marketing, and products.",
      "A focus on communication and realistic scopes for Nepal-based businesses.",
      "Options for both custom development and practical product-led workflows.",
      "Support for improving digital systems after the first launch.",
    ],
    related: [
      {
        href: "/it-company-in-nepal",
        label: "IT company in Nepal",
        text: "See InfoBytes Nepal's broader service and product direction.",
      },
      {
        href: "/services",
        label: "custom software development services",
        text: "Review available services before choosing a project scope.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Understand when automation may be better than a simple website.",
      },
      {
        href: "/products/leadrack",
        label: "LeadRack for lead tracking",
        text: "Explore a focused product for managing sales leads.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss whether our approach fits your requirement.",
      },
    ],
    faqs: [
      {
        question: "How can I identify the best IT company for my business?",
        answer:
          "Start by checking whether the company understands your workflow, explains scope clearly, communicates honestly, and can support the solution after launch.",
      },
      {
        question: "Should price be the main factor when choosing an IT company?",
        answer:
          "Price matters, but it should be compared with scope, quality, maintainability, communication, and the business value the project is expected to create.",
      },
      {
        question: "Does InfoBytes Nepal claim to be the best IT company in Nepal?",
        answer:
          "No. InfoBytes Nepal focuses on being a reliable and practical option for businesses that value clear planning, maintainable systems, and long-term improvement.",
      },
      {
        question: "What should I prepare before contacting an IT company?",
        answer:
          "Prepare your current problem, target users, existing tools, expected outcomes, budget range if possible, and examples of workflows or websites you like.",
      },
      {
        question: "Can InfoBytes Nepal help decide between website, software, and automation?",
        answer:
          "Yes. The team can discuss your goals and help identify whether you need a website, custom software, automation, SEO support, or a phased approach.",
      },
    ],
  },
  trustedItCompany: {
    slug: "trusted-it-company-in-nepal",
    path: "/trusted-it-company-in-nepal",
    metaTitle: "Trusted IT Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal supports businesses seeking a trusted IT company in Nepal for software, websites, automation, SEO, long-term support, and clear growth.",
    ogTitle: "Trusted IT Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Work with InfoBytes Nepal for clear communication, maintainable development, practical automation, SEO support, and long-term digital partnership.",
    keyword: "Trusted IT Company in Nepal",
    heroTitle: "Trusted IT Company in Nepal",
    heroIntro:
      "Trust in an IT partner is built through clear communication, realistic planning, dependable development, and support after launch. InfoBytes Nepal helps organizations in Nepal build digital systems with confidence and practical long-term thinking.",
    overview: {
      title: "Trust comes from clarity, consistency, and support",
      paragraphs: [
        "When a business searches for a trusted IT company in Nepal, it is usually looking for more than technical skill. It needs a team that will listen carefully, explain trade-offs, respect the business context, and build something that can be used by real staff members without constant confusion.",
        "Trust also depends on maintainability. A website, software platform, CRM workflow, or automation system should not become impossible to update after launch. The project should have clear structure, reasonable documentation, and a path for future improvements as the organization learns from real use.",
        "InfoBytes Nepal works with this mindset across software development, web development, SEO, digital marketing, and business automation. We focus on practical solutions, honest scope conversations, and digital systems that support real operations in Nepal. The goal is to become a long-term partner, not just a vendor for a one-time task.",
      ],
    },
    problems: [
      "Many teams worry that technical work will be unclear, delayed, or difficult to maintain after launch.",
      "A project can fail when the provider does not understand staff roles, operational pressure, or reporting needs.",
      "Clients may receive a finished website or system but little guidance on how to use, improve, or measure it.",
      "Poor communication can create mismatched expectations about features, timelines, content, and support.",
      "Businesses need partners who can support changes as the company grows and digital requirements evolve.",
    ],
    solutions: [
      "We discuss business goals, users, workflows, and constraints before recommending the technical direction.",
      "We keep scope and priorities clear so clients know what is included and what can be improved later.",
      "We build maintainable websites, software modules, and automation flows with daily usability in mind.",
      "We support related needs such as SEO, digital marketing, lead tracking, and reporting when they become relevant.",
      "We help clients move in phases so teams can adopt the solution without unnecessary pressure.",
    ],
    features: [
      "Transparent requirement discussions",
      "Maintainable web and software builds",
      "Business workflow planning",
      "SEO and digital visibility support",
      "Automation and reporting systems",
      "Lead and service tracking products",
      "Training and handover support",
      "Post-launch improvement direction",
    ],
    process: [
      {
        title: "Listen",
        text: "We begin by understanding the business context, current process, pain points, and what the team needs from a digital solution.",
      },
      {
        title: "Clarify",
        text: "We define scope, priorities, expected outputs, and practical constraints so the project has a shared direction.",
      },
      {
        title: "Build",
        text: "We develop with attention to usability, performance, content structure, data flow, and future improvement.",
      },
      {
        title: "Review",
        text: "We test the solution against real use cases and gather feedback before the system becomes part of daily work.",
      },
      {
        title: "Support",
        text: "We can continue improving the system through SEO, automation, reporting, content, or added modules after launch.",
      },
    ],
    reasons: [
      "Practical communication and planning for Nepal-based business needs.",
      "A balanced approach across development, content, automation, and support.",
      "Product experience in service, sales, lead, and student workflows.",
      "Careful language and realistic expectations instead of exaggerated promises.",
      "A long-term improvement mindset for websites and software systems.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Learn how custom systems can support long-term business operations.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development services in Nepal",
        text: "Build a reliable website foundation with clear structure.",
      },
      {
        href: "/products/serviol",
        label: "Serviol for service teams",
        text: "Explore service operations management for field and support teams.",
      },
      {
        href: "/products/purseol",
        label: "Purseol for sales operations",
        text: "Review a product direction for field sales visibility.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Start a clear conversation about your digital requirement.",
      },
    ],
    faqs: [
      {
        question: "What makes an IT company trustworthy?",
        answer:
          "Trust comes from clear communication, realistic planning, maintainable work, honest timelines, useful support, and a focus on the client's actual business problem.",
      },
      {
        question: "Does InfoBytes Nepal provide support after launch?",
        answer:
          "Yes. Depending on the project, InfoBytes Nepal can support improvements, SEO work, automation changes, reporting updates, and product enhancements after launch.",
      },
      {
        question: "Can you work in phases?",
        answer:
          "Yes. A phased approach is often useful for businesses in Nepal because it keeps the first version focused and allows the system to improve based on real use.",
      },
      {
        question: "How do you avoid unclear project scope?",
        answer:
          "We clarify users, modules, pages, workflows, priorities, and expected outputs before moving deeply into design or development.",
      },
      {
        question: "Can InfoBytes Nepal support both technical and marketing needs?",
        answer:
          "Yes. The team can support websites, software, SEO, digital marketing, automation, and related product workflows.",
      },
    ],
  },
  topItCompanies: {
    slug: "top-it-companies-in-nepal",
    path: "/top-it-companies-in-nepal",
    metaTitle: "Top IT Companies in Nepal Guide | InfoBytes Nepal",
    metaDescription:
      "A practical guide to what top IT companies in Nepal offer, including software, websites, automation, SEO, support, product thinking, and business growth.",
    ogTitle: "What Makes Top IT Companies in Nepal Valuable?",
    ogDescription:
      "Learn what Nepali businesses should look for when comparing IT companies for software development, websites, automation, SEO, and support.",
    keyword: "Top IT Companies in Nepal",
    heroTitle: "What Makes Top IT Companies in Nepal Valuable?",
    heroIntro:
      "Top IT companies in Nepal are valuable when they help businesses solve real problems, not just deliver isolated technical work. This guide explains what to look for and how InfoBytes Nepal approaches practical digital support.",
    overview: {
      title: "A useful comparison starts with business value",
      paragraphs: [
        "Many businesses search for top IT companies in Nepal when they are comparing options for software development, website development, automation, SEO, or digital marketing. A list can be helpful, but the better question is what makes an IT company valuable for your specific requirement.",
        "The most useful companies usually combine technical execution with clear planning. They understand that a website should support inquiries, software should support workflows, SEO should support discoverability, and automation should reduce repeated manual work. These areas are connected in day-to-day business, so the provider should be able to think across them.",
        "InfoBytes Nepal uses this connected approach. We help clients plan practical websites, custom software, SEO foundations, digital campaigns, and automation systems. We also develop products for lead, sales, service, and student/talent workflows. For Nepali businesses, value often comes from a partner who can help choose the right next step instead of offering every possible feature at once.",
      ],
    },
    problems: [
      "Comparison lists do not always explain which IT company is right for a specific business model or project stage.",
      "A provider may be strong in design but weak in workflow planning, SEO, automation, or long-term maintainability.",
      "Businesses can spend on digital work without connecting it to lead handling, reporting, customer service, or sales follow-up.",
      "Oversized technical scopes can become expensive and difficult for local teams to adopt.",
      "Marketing, website, and software decisions are often made separately, which reduces the impact of each investment.",
    ],
    solutions: [
      "We help businesses compare needs by focusing on outcomes, workflows, users, and future maintainability.",
      "We connect website, SEO, software, automation, and product thinking so decisions support one business direction.",
      "We suggest focused first versions that can grow instead of pushing unnecessary complexity.",
      "We provide internal links between custom services and existing products where a product-led approach can help.",
      "We support planning for visibility, conversion, tracking, and operational control together.",
    ],
    features: [
      "Digital requirement analysis",
      "Website and service page planning",
      "Custom software development",
      "Business automation workflows",
      "SEO and search intent planning",
      "Sales and service product support",
      "Lead tracking and CRM-style systems",
      "Training and long-term improvement",
    ],
    process: [
      {
        title: "Evaluate",
        text: "We begin by looking at the business goal and deciding whether the need is visibility, operations, automation, product development, or growth support.",
      },
      {
        title: "Map",
        text: "We map users, customer touchpoints, workflow stages, data needs, and reporting expectations before recommending a solution.",
      },
      {
        title: "Focus",
        text: "We reduce the project to a practical first scope that can deliver value without overwhelming the team.",
      },
      {
        title: "Deliver",
        text: "We build the selected website, software, automation, SEO improvement, or product workflow using the existing brand direction.",
      },
      {
        title: "Extend",
        text: "We identify the next improvements after launch, such as content, tracking, reports, automation, or extra modules.",
      },
    ],
    reasons: [
      "Educational, comparison-style guidance without exaggerated self-claims.",
      "A business-first view of web, software, SEO, automation, and products.",
      "Nepal-focused planning for local operating habits and team adoption.",
      "Existing product directions for lead, service, sales, and student workflows.",
      "A preference for focused digital progress over unnecessary complexity.",
    ],
    related: [
      {
        href: "/best-it-company-in-nepal",
        label: "how to choose the best IT company in Nepal",
        text: "Review practical selection criteria before starting a project.",
      },
      {
        href: "/trusted-it-company-in-nepal",
        label: "trusted IT company in Nepal",
        text: "Understand why communication and support matter.",
      },
      {
        href: "/services",
        label: "custom software development services",
        text: "Explore the services InfoBytes Nepal provides.",
      },
      {
        href: "/products/pravyo",
        label: "Pravyo student talent platform",
        text: "See a product direction for student and talent presentation.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss the digital path that fits your business.",
      },
    ],
    faqs: [
      {
        question: "How should businesses compare top IT companies in Nepal?",
        answer:
          "Compare companies by their understanding of your business, technical capability, communication, support model, maintainability, and ability to connect digital work with business outcomes.",
      },
      {
        question: "Is the biggest IT company always the right choice?",
        answer:
          "Not always. The right partner depends on project size, communication style, budget, support expectations, and whether the team understands your workflow.",
      },
      {
        question: "What services should a strong IT company offer?",
        answer:
          "Useful services may include websites, software development, automation, SEO, digital marketing, dashboards, and product planning, depending on the business need.",
      },
      {
        question: "Can InfoBytes Nepal help with both services and products?",
        answer:
          "Yes. InfoBytes Nepal offers services and also develops product directions for lead, sales, service, and student/talent workflows.",
      },
      {
        question: "Why is long-term support important?",
        answer:
          "Digital systems need updates, content improvements, workflow changes, reporting refinements, and occasional new modules as a business grows.",
      },
    ],
  },
  mobileApp: {
    slug: "mobile-app-development-company-in-nepal",
    path: "/mobile-app-development-company-in-nepal",
    metaTitle: "Mobile App Development Company in Nepal | InfoBytes",
    metaDescription:
      "InfoBytes Nepal supports mobile app development for Nepal businesses, including Android, iOS, PWA, admin dashboards, workflow apps, and product planning.",
    ogTitle: "Mobile App Development Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Plan and build practical mobile app experiences for businesses, consultancies, service teams, sales teams, schools, and startups in Nepal.",
    keyword: "Mobile App Development Company in Nepal",
    heroTitle: "Mobile App Development Company in Nepal",
    heroIntro:
      "InfoBytes Nepal helps businesses plan mobile app experiences that support real users and practical operations. We can support Android, iOS, PWA, and mobile-friendly workflow systems depending on the business requirement.",
    overview: {
      title: "Mobile apps should solve a clear user problem",
      paragraphs: [
        "A mobile app can be valuable when customers, staff, students, sales teams, or service teams need fast access to a focused workflow. For businesses in Nepal, this might mean lead follow-up, service tickets, attendance, student profiles, customer requests, notifications, field visits, or a digital product for a startup idea.",
        "InfoBytes Nepal approaches mobile app development by first asking whether an app is truly the right solution. In some cases, a responsive web platform or PWA may be faster and more practical. In other cases, a dedicated Android or iOS experience may make sense because the workflow depends on mobile behavior, offline use, notifications, or staff adoption.",
        "Our focus is practical planning. We define users, permissions, screens, data flow, admin needs, reports, and launch scope before development. This helps avoid apps that look attractive but are difficult to use, maintain, or connect with daily business operations.",
      ],
    },
    problems: [
      "Businesses may want an app before clearly defining the user problem, workflow, or operational value.",
      "Mobile projects can become too broad when every feature is included in the first version.",
      "Apps often need an admin panel, reporting dashboard, or web backend, which may be overlooked early.",
      "Schools, consultancies, sales teams, and service teams need different mobile workflows, not one generic pattern.",
      "Without proper adoption planning, staff may continue using chat messages and spreadsheets instead of the app.",
    ],
    solutions: [
      "We help decide whether a native app, PWA, or mobile-responsive web platform is the right fit.",
      "We define app users, screens, core workflows, notifications, reports, and admin needs before build.",
      "We keep first versions focused so the app can launch, gather feedback, and improve responsibly.",
      "We connect mobile workflows with dashboards, lead tracking, service operations, or student/talent systems.",
      "We can align app planning with existing InfoBytes Nepal products when they match the requirement.",
    ],
    features: [
      "Android and iOS app planning",
      "Progressive web app support",
      "Mobile-friendly web platforms",
      "Admin panels and dashboards",
      "User roles and permissions",
      "Lead, sales, and service workflows",
      "Student and consultancy app concepts",
      "Notifications and reporting planning",
    ],
    process: [
      {
        title: "Validate",
        text: "We confirm who will use the app, why mobile access matters, and whether native, PWA, or web-first development is most practical.",
      },
      {
        title: "Scope",
        text: "We define screens, user roles, data, reports, backend needs, and the smallest useful first version.",
      },
      {
        title: "Prototype",
        text: "We plan the user flow and interface so the app is clear for customers, staff, students, or field teams.",
      },
      {
        title: "Develop",
        text: "We build the mobile experience and any required admin or dashboard layer with maintainability in mind.",
      },
      {
        title: "Launch",
        text: "We test real workflows, prepare handover, and plan improvements based on user feedback after launch.",
      },
    ],
    reasons: [
      "Practical advice on whether a mobile app is the right first step.",
      "Experience with business workflows that often need mobile access.",
      "Ability to connect mobile apps with web dashboards and automation.",
      "Nepal-focused understanding of school, consultancy, sales, and service needs.",
      "A phased development mindset that keeps launch scope manageable.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Connect mobile app planning with custom software systems.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Explore workflows that can be automated across web and mobile.",
      },
      {
        href: "/products/serviol",
        label: "Serviol service operations",
        text: "Review field service management concepts that can benefit from mobile access.",
      },
      {
        href: "/products/purseol",
        label: "Purseol sales operations",
        text: "Explore field sales workflows for visits, pitches, and outcomes.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss mobile app development support for your team.",
      },
    ],
    faqs: [
      {
        question: "Do all businesses need a mobile app?",
        answer:
          "No. Some businesses are better served by a responsive website or PWA first. A mobile app is useful when the workflow strongly depends on mobile access, repeated use, or staff adoption.",
      },
      {
        question: "Can InfoBytes Nepal build an admin panel with the app?",
        answer:
          "Yes. Most business apps need an admin panel or dashboard for managing users, records, reports, content, and workflow status.",
      },
      {
        question: "Do you support Android and iOS?",
        answer:
          "InfoBytes Nepal can help plan Android, iOS, PWA, or mobile-friendly web experiences depending on the project scope and business goals.",
      },
      {
        question: "Can a mobile app support field teams?",
        answer:
          "Yes. Mobile workflows can support field visits, service requests, attendance, lead updates, status tracking, and reporting for managers.",
      },
      {
        question: "How should we start a mobile app project?",
        answer:
          "Start by defining users, core tasks, data needs, admin requirements, and what the first version must achieve for the business.",
      },
    ],
  },
  digitalMarketing: {
    slug: "digital-marketing-company-in-nepal",
    path: "/digital-marketing-company-in-nepal",
    metaTitle: "Digital Marketing Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal supports digital marketing in Nepal with SEO, content, social media strategy, campaigns, conversion planning, reporting, and lead growth.",
    ogTitle: "Digital Marketing Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Grow digital visibility with practical SEO, social media strategy, content planning, campaigns, conversion improvements, and reporting support.",
    keyword: "Digital Marketing Company in Nepal",
    heroTitle: "Digital Marketing Company in Nepal",
    heroIntro:
      "InfoBytes Nepal helps businesses in Nepal plan digital marketing that connects visibility with actual business outcomes. We focus on SEO, content, social media strategy, campaigns, website conversion, and practical reporting.",
    overview: {
      title: "Digital marketing works better when the foundation is clear",
      paragraphs: [
        "Digital marketing is not only about posting regularly or running ads. Businesses in Nepal need a clear message, a useful website, strong service pages, search visibility, social media direction, and a process for handling inquiries after they arrive. Without this foundation, campaigns can create attention but not meaningful growth.",
        "InfoBytes Nepal approaches digital marketing with a practical structure. We connect SEO, content planning, social media, campaign direction, website conversion, and reporting. This helps businesses understand what they offer, who they want to reach, and how inquiries should move into follow-up or sales workflows.",
        "Our digital marketing support can work alongside website development, SEO cleanup, lead tracking, and automation products. The goal is not to create noise online. The goal is to make your digital presence clearer, more discoverable, and easier to act on for customers in Nepal. This gives teams a better foundation before spending more on campaigns, content, and local search.",
      ],
    },
    problems: [
      "Social media posts may look active but fail to explain services clearly or guide customers toward inquiry.",
      "Paid campaigns can waste budget when landing pages, forms, or lead follow-up processes are weak.",
      "Businesses often separate SEO, content, website, and social media instead of planning them together.",
      "Google Business Profile, local relevance, and service pages may be ignored even when local customers are important.",
      "Marketing reports may focus on surface metrics without showing how inquiries and follow-ups are handled.",
    ],
    solutions: [
      "We plan digital marketing around business goals, customer intent, website structure, and conversion paths.",
      "We support SEO and content foundations so marketing has useful pages to send customers toward.",
      "We help organize social media and campaigns around clear service messages and practical offers.",
      "We can improve landing pages, inquiry forms, and lead tracking so marketing activity becomes easier to measure.",
      "We connect digital marketing with LeadRack or custom workflows when businesses need better follow-up visibility.",
    ],
    features: [
      "SEO and content planning",
      "Social media strategy",
      "Campaign direction",
      "Landing page planning",
      "Google Business Profile guidance",
      "Website conversion improvements",
      "Lead tracking support",
      "Performance reporting",
    ],
    process: [
      {
        title: "Audit",
        text: "We review the website, service pages, social presence, search visibility, inquiry flow, and current marketing activity.",
      },
      {
        title: "Plan",
        text: "We define target audiences, services, content themes, campaign direction, landing pages, and tracking needs.",
      },
      {
        title: "Improve",
        text: "We improve SEO basics, content structure, calls to action, forms, and the pages that marketing will rely on.",
      },
      {
        title: "Campaign",
        text: "We support campaigns and social direction with clearer messages, useful content, and realistic performance expectations.",
      },
      {
        title: "Report",
        text: "We review results and help connect marketing activity with inquiries, follow-up, and next improvements.",
      },
    ],
    reasons: [
      "Marketing support connected with website development, SEO, and automation.",
      "Nepal-focused understanding of local search and customer behavior.",
      "A practical approach that avoids empty activity and focuses on business outcomes.",
      "Ability to connect campaigns with lead tracking and reporting workflows.",
      "Support for improving the website foundation before scaling campaigns.",
    ],
    related: [
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Build organic visibility as part of your marketing foundation.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development services in Nepal",
        text: "Improve website pages before sending traffic through campaigns.",
      },
      {
        href: "/products/leadrack",
        label: "LeadRack for lead tracking",
        text: "Track inquiries and follow-ups generated by marketing activity.",
      },
      {
        href: "/services",
        label: "digital marketing support",
        text: "Review InfoBytes Nepal's wider service offerings.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss marketing support for your business.",
      },
    ],
    faqs: [
      {
        question: "What is included in digital marketing support?",
        answer:
          "Digital marketing support can include SEO planning, content direction, social media strategy, campaign planning, landing page improvements, lead tracking, and reporting.",
      },
      {
        question: "Should SEO and digital marketing be planned together?",
        answer:
          "Yes. SEO helps build long-term visibility, while campaigns and social media can support timely reach. Together they create a stronger digital foundation.",
      },
      {
        question: "Can InfoBytes Nepal help improve campaign landing pages?",
        answer:
          "Yes. InfoBytes Nepal can help improve website pages, forms, calls to action, and content so campaigns have a better place to send traffic.",
      },
      {
        question: "Do you support local digital marketing in Nepal?",
        answer:
          "Yes. Local relevance, Google Business Profile guidance, service pages, and Nepal-focused search intent can be part of the digital marketing plan.",
      },
      {
        question: "How do we measure digital marketing results?",
        answer:
          "Results can be reviewed through traffic, inquiries, campaign performance, search visibility, form submissions, and lead follow-up quality.",
      },
    ],
  },
  businessAutomation: {
    slug: "business-automation-software-nepal",
    path: "/business-automation-software-nepal",
    metaTitle: "Business Automation Software Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds business automation software in Nepal for leads, sales, service, CRM workflows, reporting, tasks, follow-ups, and daily operations.",
    ogTitle: "Business Automation Software Nepal | InfoBytes Nepal",
    ogDescription:
      "Automate sales, service, CRM workflows, reporting, follow-ups, task tracking, and daily operations with InfoBytes Nepal.",
    keyword: "Business Automation Software Nepal",
    heroTitle: "Business Automation Software Nepal",
    heroIntro:
      "InfoBytes Nepal helps businesses reduce repeated manual work through practical automation software. We support lead tracking, sales workflows, service requests, CRM-style systems, reporting, follow-ups, tasks, and operational dashboards for teams in Nepal.",
    overview: {
      title: "Automation should make daily work easier to control",
      paragraphs: [
        "Business automation software is useful when a team spends too much time repeating updates, searching for records, asking for status, preparing manual reports, or following up through scattered channels. These problems are common in Nepal across sales teams, service companies, consultancies, education businesses, and growing organizations.",
        "InfoBytes Nepal builds and plans automation systems that fit actual workflows. This may include lead management, service ticket tracking, task assignment, customer records, sales visits, reporting dashboards, reminders, approvals, or CRM-style operations. The system can be custom-built or supported through existing InfoBytes Nepal product directions where appropriate.",
        "The goal is not to automate everything at once. The strongest first version usually focuses on the workflow that causes the most confusion or delay. Once that becomes clear, the software can expand into deeper reporting, more roles, better dashboards, or added integrations. This keeps adoption realistic for busy teams.",
      ],
    },
    problems: [
      "Leads, customers, tasks, and service requests are often scattered across spreadsheets, phones, chat groups, and notebooks.",
      "Managers cannot easily see who followed up, which customer is pending, or what work is delayed.",
      "Manual reports take time and may not match the actual status of sales, service, or team activity.",
      "Staff members may repeat the same data entry across multiple tools without a single source of truth.",
      "Growing businesses need structured workflows but may not be ready for a large enterprise system.",
    ],
    solutions: [
      "We map the workflow and identify which repeated tasks, status updates, and reports should be automated first.",
      "We build CRM-style systems that organize contacts, leads, follow-ups, tasks, and outcomes in one place.",
      "We create dashboards that help managers understand sales, service, or operational status without chasing updates.",
      "We can connect automation needs with LeadRack, Serviol, Purseol, or custom software depending on the use case.",
      "We design phased systems so businesses can adopt automation gradually and improve based on real usage.",
    ],
    features: [
      "Lead and CRM workflows",
      "Sales follow-up tracking",
      "Service request management",
      "Task and status tracking",
      "Reporting dashboards",
      "Role-based access",
      "Customer and organization records",
      "Workflow automation planning",
    ],
    process: [
      {
        title: "Map workflow",
        text: "We identify how work currently moves through the team, where delays happen, and which updates are repeated manually.",
      },
      {
        title: "Choose priority",
        text: "We select the first automation area, such as leads, service tickets, sales visits, reporting, or task tracking.",
      },
      {
        title: "Design system",
        text: "We define roles, statuses, forms, dashboards, notifications, and reports around the actual business process.",
      },
      {
        title: "Build and test",
        text: "We develop the automation system or adapt a product direction, then test it against real team scenarios.",
      },
      {
        title: "Improve adoption",
        text: "We help refine workflows, reports, and user experience so automation becomes part of daily operations.",
      },
    ],
    reasons: [
      "Experience with lead, sales, service, student, and operational workflow products.",
      "Practical automation planning for Nepal-based teams and local operating habits.",
      "Ability to choose between custom development and product-led solutions.",
      "Focus on dashboards, reports, and follow-up visibility for managers.",
      "Phased implementation that avoids overwhelming teams with too much change at once.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Build custom automation systems around your workflow.",
      },
      {
        href: "/products/leadrack",
        label: "LeadRack for lead management",
        text: "Track leads so no opportunity is missed.",
      },
      {
        href: "/products/serviol",
        label: "Serviol for service management",
        text: "Manage service tickets, field teams, planners, and attendance.",
      },
      {
        href: "/products/purseol",
        label: "Purseol for sales operations",
        text: "Support sales visits, product pitches, and client outcomes.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss the automation workflow your team needs most.",
      },
    ],
    faqs: [
      {
        question: "What is business automation software?",
        answer:
          "Business automation software helps organize and automate repeated work such as lead tracking, follow-ups, tasks, service requests, reports, approvals, and customer records.",
      },
      {
        question: "Can automation start with one workflow?",
        answer:
          "Yes. Starting with one high-impact workflow is often better than trying to automate everything at once. The system can expand later.",
      },
      {
        question: "Does InfoBytes Nepal build CRM-style systems?",
        answer:
          "Yes. InfoBytes Nepal can build CRM-style workflows for leads, customer records, follow-ups, sales stages, service tickets, and reporting.",
      },
      {
        question: "Can existing products support automation?",
        answer:
          "Yes. LeadRack, Serviol, and Purseol may support parts of lead, service, and sales automation depending on the requirement.",
      },
      {
        question: "How do we know what to automate first?",
        answer:
          "Start with the workflow that causes the most repeated manual work, missed follow-ups, unclear status, or reporting pressure for the team.",
      },
    ],
  },
  webDesign: {
    slug: "web-design-company-in-nepal",
    path: "/web-design-company-in-nepal",
    metaTitle: "Web Design Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is a web design company in Nepal creating clean, modern, mobile-first website designs with strong UI, UX, and brand-consistent visuals.",
    ogTitle: "Web Design Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Get a modern, mobile-first website design with clear UX, strong visuals, and brand consistency from InfoBytes Nepal.",
    keyword: "Web Design Company in Nepal",
    heroTitle: "Web Design Company in Nepal",
    heroIntro:
      "InfoBytes Nepal designs websites that look credible, communicate clearly, and feel effortless to use. We focus on clean UI, thoughtful UX, and brand-consistent visuals that turn visitors into inquiries.",
    overview: {
      title: "Design that earns trust in the first few seconds",
      paragraphs: [
        "Most visitors decide whether a business looks trustworthy within seconds of landing on its website. Cluttered layouts, inconsistent colors, weak typography, and confusing navigation quietly push potential customers away, even when the underlying business is excellent.",
        "InfoBytes Nepal approaches web design as a balance of aesthetics and usability. We plan visual hierarchy, spacing, color, and typography around your brand, then shape each page so the most important message and action are always clear. The result is a website that feels modern and intentional, not decorated.",
        "For businesses searching for a web design company in Nepal, the strongest outcome is a design system that is beautiful, consistent across pages, mobile-first, and ready to scale as you add services, products, and content over time.",
      ],
    },
    problems: [
      "Designs look outdated or generic and fail to reflect the quality of the actual business.",
      "Layouts break or feel cramped on mobile, where most Nepali customers browse.",
      "Inconsistent colors, fonts, and spacing make the brand feel unprofessional.",
      "Important content and calls to action get lost in cluttered pages.",
      "Pretty visuals are added without a clear plan for usability or conversion.",
    ],
    solutions: [
      "We design a clean, consistent visual system based on your brand colors, type, and tone.",
      "We craft mobile-first layouts that stay clear and elegant on every screen size.",
      "We use visual hierarchy so visitors instantly see what matters and what to do next.",
      "We pair strong aesthetics with conversion-focused structure and clear calls to action.",
      "We design components that are reusable, so the website stays consistent as it grows.",
    ],
    features: [
      "Modern UI design",
      "User experience (UX) planning",
      "Mobile-first responsive design",
      "Brand-consistent visual systems",
      "Landing page design",
      "Design-to-development handoff",
      "Reusable component design",
      "Conversion-focused layouts",
    ],
    process: [
      {
        title: "Brand & goals",
        text: "We review your brand, audience, and goals so the design direction reflects who you are and who you serve.",
      },
      {
        title: "Wireframe",
        text: "We structure each page around content priority, user flow, and clear calls to action before adding visuals.",
      },
      {
        title: "Visual design",
        text: "We craft polished, on-brand interfaces with strong type, color, spacing, and a clean modern feel.",
      },
      {
        title: "Review",
        text: "We refine the design across screens, gather feedback, and ensure consistency and usability throughout.",
      },
      {
        title: "Build-ready",
        text: "We prepare the design for development so the final website matches the approved visuals precisely.",
      },
    ],
    reasons: [
      "Design and development under one team, so visuals translate cleanly into a real website.",
      "Mobile-first thinking for the way customers in Nepal actually browse.",
      "A focus on clarity and trust, not decoration for its own sake.",
      "Consistent design systems that keep growing websites looking professional.",
      "Conversion-aware layouts that connect design with business goals.",
    ],
    related: [
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Turn the design into a fast, responsive, production-ready website.",
      },
      {
        href: "/graphic-design-company-in-nepal",
        label: "graphic design company in Nepal",
        text: "Extend your brand visuals beyond the website with graphic design support.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Pair a strong design with a structure built for search visibility.",
      },
      {
        href: "/services",
        label: "all InfoBytes Nepal services",
        text: "See how design fits into the wider service offering.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a new website design or redesign for your business.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between web design and web development?",
        answer:
          "Web design focuses on how the website looks and feels, including layout, colors, typography, and user experience. Web development turns that design into a working, responsive website. InfoBytes Nepal offers both.",
      },
      {
        question: "Will my website design be mobile-friendly?",
        answer:
          "Yes. Every design is created mobile-first, because most customers in Nepal browse from phones, and search engines prioritize mobile experience.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We can review your current website, identify design and usability issues, and create a cleaner, more modern, brand-consistent design.",
      },
      {
        question: "Do you follow our brand colors and logo?",
        answer:
          "Yes. We design around your existing brand identity. If your brand needs refinement, we can also support that through our graphic design service.",
      },
      {
        question: "How do we start a web design project?",
        answer:
          "Share your business goals, current website if any, and examples you like. We will then plan a design direction and a realistic scope.",
      },
    ],
  },
  graphicDesign: {
    slug: "graphic-design-company-in-nepal",
    path: "/graphic-design-company-in-nepal",
    metaTitle: "Graphic Design Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal offers graphic design in Nepal, including logos, brand identity, social media creatives, marketing graphics, and print-ready design.",
    ogTitle: "Graphic Design Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Build a consistent brand with logos, social media creatives, and marketing graphics designed by InfoBytes Nepal.",
    keyword: "Graphic Design Company in Nepal",
    heroTitle: "Graphic Design Company in Nepal",
    heroIntro:
      "InfoBytes Nepal helps businesses look consistent and professional across every touchpoint. From logos and brand identity to social media creatives and marketing graphics, we design visuals that communicate clearly and build recognition.",
    overview: {
      title: "Consistent visuals that make a brand memorable",
      paragraphs: [
        "Strong graphic design does more than look good. It makes a business instantly recognizable, builds trust, and helps marketing perform better. When logos, colors, fonts, and creatives are inconsistent, even a great business can look scattered and forgettable.",
        "InfoBytes Nepal provides graphic design support for businesses in Nepal that want a clear, consistent visual identity. We design logos and brand systems, social media creatives, ad graphics, presentations, and print-ready materials that all feel like they belong to the same brand.",
        "Because we also build websites and run digital marketing, our graphic design stays connected to where it will actually be used, online, on social media, and in campaigns, so every asset supports real communication and growth.",
      ],
    },
    problems: [
      "Logos and visuals look inconsistent across the website, social media, and print.",
      "Social media creatives are made quickly without a clear, recognizable style.",
      "There is no defined brand color palette, typography, or usage guideline.",
      "Marketing materials look amateur and weaken otherwise good campaigns.",
      "Design assets are scattered and hard to reuse when new content is needed.",
    ],
    solutions: [
      "We create logos and brand identity systems with clear colors, type, and usage rules.",
      "We design social media creatives and templates that stay consistent and on-brand.",
      "We produce marketing graphics, banners, and ad creatives aligned to campaigns.",
      "We prepare print-ready designs for cards, brochures, and other materials.",
      "We keep visuals connected to your website and digital marketing for a unified brand.",
    ],
    features: [
      "Logo design",
      "Brand identity systems",
      "Social media creatives & templates",
      "Marketing & ad graphics",
      "Presentation design",
      "Print-ready design",
      "Brand color & typography guidelines",
      "Reusable design templates",
    ],
    process: [
      {
        title: "Understand the brand",
        text: "We learn your business, audience, and personality so the visuals reflect the right tone.",
      },
      {
        title: "Define direction",
        text: "We set the color palette, typography, and visual style that will guide every asset.",
      },
      {
        title: "Design",
        text: "We create the logo, creatives, or materials with attention to clarity and consistency.",
      },
      {
        title: "Refine",
        text: "We review the designs with you and refine details until the brand feels right.",
      },
      {
        title: "Deliver & reuse",
        text: "We deliver organized files and reusable templates so your brand stays consistent over time.",
      },
    ],
    reasons: [
      "Design that connects directly with your website and digital marketing.",
      "A focus on consistency, so your brand is recognizable everywhere.",
      "Practical templates that make ongoing content creation easier.",
      "Nepal-based support that understands local business and audience context.",
      "Clean, modern visuals that strengthen trust and recognition.",
    ],
    related: [
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "Carry your brand visuals into a polished website design.",
      },
      {
        href: "/digital-marketing-company-in-nepal",
        label: "digital marketing company in Nepal",
        text: "Put your creatives to work across campaigns and social media.",
      },
      {
        href: "/services",
        label: "all InfoBytes Nepal services",
        text: "See how graphic design fits within the wider service offering.",
      },
      {
        href: "/products",
        label: "InfoBytes Nepal products",
        text: "Explore the digital products we design and build.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a logo, brand identity, or design requirement.",
      },
    ],
    faqs: [
      {
        question: "What graphic design services does InfoBytes Nepal offer?",
        answer:
          "We design logos, brand identity systems, social media creatives, marketing and ad graphics, presentations, and print-ready materials for businesses in Nepal.",
      },
      {
        question: "Can you design a logo and full brand identity?",
        answer:
          "Yes. We can create a logo along with a complete brand system, including color palette, typography, and usage guidelines for consistent use.",
      },
      {
        question: "Do you design social media creatives?",
        answer:
          "Yes. We design social media posts, templates, and campaign creatives that keep your brand consistent and recognizable across platforms.",
      },
      {
        question: "Can graphic design connect with my website and marketing?",
        answer:
          "Yes. Because we also handle web design, development, and digital marketing, your graphics can stay aligned with where they are actually used.",
      },
      {
        question: "Will I receive editable or reusable files?",
        answer:
          "Yes. We deliver organized files and reusable templates so your team can keep producing consistent content after the project.",
      },
    ],
  },
  kathmandu: {
    slug: "it-company-in-kathmandu",
    path: "/it-company-in-kathmandu",
    metaTitle: "IT Company in Kathmandu | InfoBytes Nepal",
    metaDescription:
      "Looking for an IT company in Kathmandu? InfoBytes Nepal builds software, websites, SEO, and business automation for businesses across the Kathmandu valley.",
    ogTitle: "IT Company in Kathmandu | InfoBytes Nepal",
    ogDescription:
      "Software development, web design, SEO, and automation for businesses in Kathmandu — from New Baneshwor and Putalisadak to Thamel and Durbar Marg.",
    keyword: "IT Company in Kathmandu",
    heroTitle: "IT Company in Kathmandu",
    heroIntro:
      "InfoBytes Nepal helps businesses across Kathmandu build practical websites, custom software, and digital systems. From trading houses in New Road to startups in Putalisadak and hospitality brands in Thamel, we support teams that want technology to actually make daily work easier.",
    overview: {
      title: "A practical technology partner for Kathmandu businesses",
      paragraphs: [
        "Kathmandu is the busiest commercial hub in Nepal, and the competition for attention is high. Trading companies around New Road and Ason, colleges and consultancies in Putalisadak, corporate offices in Durbar Marg and Kamaladi, hospitals, travel agencies in Thamel, and fast-growing startups all rely on their digital presence to win trust. A slow website or scattered manual process quietly costs real customers.",
        "InfoBytes Nepal works with Kathmandu-based teams on the full digital picture: a credible website, custom software or automation for internal operations, SEO to be found by local customers, and digital marketing to stay visible. Because we are based in the valley, we can meet in person, understand the local market, and keep communication direct instead of routing everything through email.",
        "Whether you run a single office in Baneshwor or a growing operation with branches across the valley, the goal is the same — a clean, maintainable digital foundation that supports inquiries, follow-up, and growth. For businesses searching for an IT company in Kathmandu, the strongest partner is one that connects design, development, SEO, and operations instead of treating each as a separate task.",
      ],
    },
    problems: [
      "Kathmandu markets are crowded, so an outdated or slow website makes a capable business look less credible than its competitors.",
      "Many valley businesses still run leads, sales, and service updates through spreadsheets, viber groups, and notebooks.",
      "Customers increasingly search on Google Maps and Google before visiting or calling, but the business is hard to find online.",
      "Marketing spend on Facebook and Instagram is wasted when the website and follow-up process are weak.",
      "Growing teams across multiple valley branches need shared dashboards and reporting, not disconnected tools.",
    ],
    solutions: [
      "We build fast, mobile-first websites that make Kathmandu businesses look as credible as they actually are.",
      "We develop custom software and automation for leads, sales, service, and reporting across single or multi-branch teams.",
      "We improve local SEO and Google presence so nearby customers in the valley can find and contact you.",
      "We connect website inquiries to lead tracking so marketing budget turns into measurable follow-up.",
      "We meet in person where useful, keeping communication clear for teams based in Kathmandu.",
    ],
    features: [
      "Business websites and landing pages",
      "Custom software and web applications",
      "Local SEO for Kathmandu searches",
      "Digital marketing and social strategy",
      "Lead, sales, and service automation",
      "Google Business Profile support",
      "Admin dashboards and reporting",
      "Ongoing support and improvement",
    ],
    process: [
      {
        title: "Meet and understand",
        text: "We learn your business, customers, and current process — in person where convenient for Kathmandu-based teams.",
      },
      {
        title: "Plan the scope",
        text: "We prioritize the website, software, SEO, or automation work that will create the most value first.",
      },
      {
        title: "Design and build",
        text: "We design and develop a clean, responsive, maintainable solution built around how your team works.",
      },
      {
        title: "Launch and connect",
        text: "We launch carefully and connect inquiries, tracking, and reporting so nothing falls through the cracks.",
      },
      {
        title: "Improve over time",
        text: "We keep refining SEO, content, and features as the business grows across the valley.",
      },
    ],
    reasons: [
      "A Nepal-based team inside the Kathmandu valley for direct, in-person communication.",
      "Full-stack support across websites, software, SEO, marketing, and automation.",
      "Practical understanding of local business habits and customer behavior in Kathmandu.",
      "Product experience in lead, sales, service, and student workflows.",
      "A focus on maintainable systems and long-term partnership, not one-time delivery.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Build custom systems and automation around your workflow.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Get a fast, credible website for your Kathmandu business.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Be found by local customers searching in the valley.",
      },
      {
        href: "/it-company-in-lalitpur",
        label: "IT company in Lalitpur",
        text: "See how we support businesses across the river in Lalitpur.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss your requirement with a Kathmandu-based team.",
      },
    ],
    faqs: [
      {
        question: "Do you work with businesses based in Kathmandu?",
        answer:
          "Yes. InfoBytes Nepal is based in the Kathmandu valley and works with businesses across Kathmandu, including New Baneshwor, Putalisadak, Durbar Marg, Thamel, and surrounding areas. We can meet in person when useful.",
      },
      {
        question: "What does an IT company in Kathmandu actually help with?",
        answer:
          "We help with websites, custom software, web and mobile applications, SEO, digital marketing, and business automation for leads, sales, service, and reporting.",
      },
      {
        question: "Can you improve our Google and local search visibility?",
        answer:
          "Yes. We support local SEO, on-page improvements, and Google Business Profile guidance so nearby customers in Kathmandu can find and contact your business.",
      },
      {
        question: "Do you support businesses with multiple branches in the valley?",
        answer:
          "Yes. We can build shared dashboards, role-based access, and reporting so multi-branch teams across the Kathmandu valley work from one system.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your current website, workflow, and goals. We will suggest a focused first scope and a realistic plan for your Kathmandu business.",
      },
    ],
  },
  lalitpur: {
    slug: "it-company-in-lalitpur",
    path: "/it-company-in-lalitpur",
    metaTitle: "IT Company in Lalitpur (Patan) | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is an IT company serving Lalitpur and Patan — software development, web design, SEO, and automation for businesses, NGOs, and creative teams.",
    ogTitle: "IT Company in Lalitpur (Patan) | InfoBytes Nepal",
    ogDescription:
      "Websites, software, SEO, and automation for Lalitpur businesses across Pulchowk, Jawalakhel, Kupondole, Sanepa, and Patan Dhoka.",
    keyword: "IT Company in Lalitpur",
    heroTitle: "IT Company in Lalitpur (Patan)",
    heroIntro:
      "InfoBytes Nepal helps businesses, NGOs, and creative teams in Lalitpur build modern websites, custom software, and digital systems. From Pulchowk and Jawalakhel to Kupondole, Sanepa, and Patan Dhoka, we support organizations that want technology done cleanly.",
    overview: {
      title: "Digital systems for Lalitpur's businesses and organizations",
      paragraphs: [
        "Lalitpur has a distinct character — a strong creative and design community, a dense cluster of NGOs and INGOs around Pulchowk, Kupondole, and Sanepa, heritage tourism around Patan Durbar Square, and a busy commercial belt through Jawalakhel and Ekantakuna. These organizations often need websites, reporting tools, and internal systems that are both clean and dependable.",
        "InfoBytes Nepal provides web design, development, SEO, and business automation for Lalitpur-based teams. We understand that a design studio, a development-sector organization, a café or boutique, and a growing product company each need different things — a portfolio-grade website, structured reporting, an online presence, or a workflow system. We plan around that reality instead of applying one template to everyone.",
        "Being based in the valley, we can work closely with Lalitpur teams, including our own recruitment partner Zuliox in Patan Dhoka. For organizations searching for an IT company in Lalitpur, the value is a partner who can connect polished design with reliable software and search visibility.",
      ],
    },
    problems: [
      "Creative and design-led businesses in Lalitpur need portfolio-quality websites that many generic developers do not deliver.",
      "NGOs and INGOs need clean reporting, data, and content systems that are easy for non-technical staff to manage.",
      "Heritage tourism and hospitality businesses are hard to discover online despite strong local demand.",
      "Manual processes for members, donors, customers, or bookings become difficult to manage as the organization grows.",
      "Brand, website, and marketing are often handled separately, weakening overall presence.",
    ],
    solutions: [
      "We design clean, modern, portfolio-grade websites that match Lalitpur's creative standard.",
      "We build content and reporting systems that non-technical staff can manage confidently.",
      "We improve local SEO and Google visibility for tourism, hospitality, and service businesses.",
      "We develop custom software for members, donors, customers, bookings, and internal workflows.",
      "We keep design, website, and marketing connected so the brand feels consistent everywhere.",
    ],
    features: [
      "Portfolio-grade web design",
      "Website and web application development",
      "Local SEO for Lalitpur searches",
      "Content and reporting systems",
      "Booking and inquiry workflows",
      "Brand-consistent digital presence",
      "Admin dashboards and access control",
      "Ongoing support and improvement",
    ],
    process: [
      {
        title: "Understand the organization",
        text: "We learn whether you are a business, studio, NGO, or product team, and what your users and reporting actually need.",
      },
      {
        title: "Plan clearly",
        text: "We define the website, content system, or software scope with priorities that fit your team and budget.",
      },
      {
        title: "Design and build",
        text: "We craft a clean, on-brand solution and build it to be reliable and easy to maintain.",
      },
      {
        title: "Launch and train",
        text: "We launch carefully and make sure your staff can manage content, data, and reports with confidence.",
      },
      {
        title: "Support and grow",
        text: "We continue improving SEO, features, and content as your Lalitpur organization evolves.",
      },
    ],
    reasons: [
      "Design-quality work suited to Lalitpur's creative and heritage context.",
      "Experience with businesses, NGOs, hospitality, and product teams.",
      "A valley-based team for close, direct collaboration.",
      "Connected web, SEO, software, and marketing under one team.",
      "Maintainable systems that non-technical staff can actually use.",
    ],
    related: [
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "Get a clean, portfolio-grade website design for your brand.",
      },
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Build reporting and workflow systems around your organization.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Improve local visibility for Lalitpur customers and visitors.",
      },
      {
        href: "/it-company-in-kathmandu",
        label: "IT company in Kathmandu",
        text: "See how we support businesses across the valley in Kathmandu.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss your Lalitpur project with a valley-based team.",
      },
    ],
    faqs: [
      {
        question: "Do you work with businesses and NGOs in Lalitpur?",
        answer:
          "Yes. InfoBytes Nepal works with businesses, creative studios, NGOs, INGOs, and hospitality teams across Lalitpur, including Pulchowk, Jawalakhel, Kupondole, Sanepa, and Patan.",
      },
      {
        question: "Can you build a website that matches Lalitpur's creative standard?",
        answer:
          "Yes. We focus on clean, modern, portfolio-grade design and pair it with reliable development, which suits Lalitpur's design-led businesses and organizations.",
      },
      {
        question: "Do you build reporting systems for development-sector organizations?",
        answer:
          "Yes. We can build content, data, and reporting systems that are easy for non-technical staff to manage, with role-based access where needed.",
      },
      {
        question: "Can you help tourism and hospitality businesses get found online?",
        answer:
          "Yes. We support local SEO, Google visibility, and inquiry or booking workflows for hospitality and tourism businesses around Patan and Lalitpur.",
      },
      {
        question: "How do we begin?",
        answer:
          "Share your organization type, current website, and goals. We will propose a focused scope and a realistic plan for your Lalitpur team.",
      },
    ],
  },
  bhaktapur: {
    slug: "it-company-in-bhaktapur",
    path: "/it-company-in-bhaktapur",
    metaTitle: "IT Company in Bhaktapur | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is an IT company based in Bhaktapur (Kaushaltar) offering software development, web design, SEO, and business automation for local businesses.",
    ogTitle: "IT Company in Bhaktapur | InfoBytes Nepal",
    ogDescription:
      "Based in Kaushaltar, Bhaktapur — InfoBytes Nepal builds websites, software, SEO, and automation for businesses across Bhaktapur, Thimi, and Madhyapur.",
    keyword: "IT Company in Bhaktapur",
    heroTitle: "IT Company in Bhaktapur",
    heroIntro:
      "InfoBytes Nepal is based in Kaushaltar, Bhaktapur, and helps local businesses build modern websites, custom software, and digital systems. We are your neighbours — a technology team you can actually meet, working with schools, shops, workshops, and growing companies across Bhaktapur.",
    overview: {
      title: "Your local technology team in Bhaktapur",
      paragraphs: [
        "Bhaktapur blends a strong heritage and tourism economy around Bhaktapur Durbar Square with a growing base of schools, trading businesses, handicraft and pottery workshops, and service providers across Kaushaltar, Thimi, Sallaghari, Suryabinayak, and Madhyapur. Many of these businesses do excellent work but remain almost invisible online, losing customers to competitors who are easier to find and contact.",
        "As an IT company based right here in Kaushaltar, InfoBytes Nepal helps Bhaktapur businesses build a credible website, get found on Google, and replace scattered manual processes with clean digital systems. Being local means we can meet face to face, understand the specific business, and support the team directly rather than through distant, impersonal service.",
        "From a simple, professional website for a school or shop to custom software and automation for a growing operation, our goal is a practical digital foundation that brings in inquiries and keeps daily work organized. For anyone searching for an IT company in Bhaktapur, working with a genuinely local team is a real advantage.",
      ],
    },
    problems: [
      "Excellent Bhaktapur businesses are hard to find online and lose customers to competitors with a stronger web presence.",
      "Tourism, handicraft, and heritage businesses have no clear way to reach visitors searching before they arrive.",
      "Schools and institutions manage admissions, notices, and records through manual, paper-based processes.",
      "Shops and workshops rely on memory, notebooks, and chat messages instead of organized systems.",
      "Owners are unsure who to trust with technology and worry about impersonal, hard-to-reach providers.",
    ],
    solutions: [
      "We build clean, credible websites that help Bhaktapur businesses look as professional as they are.",
      "We improve local SEO and Google Business presence so nearby and visiting customers can find you.",
      "We build simple systems for schools and institutions to manage notices, admissions, and records.",
      "We replace manual notebooks with organized digital records, tracking, and reporting.",
      "We work as a local, reachable team you can meet in person in Bhaktapur whenever needed.",
    ],
    features: [
      "Local business websites",
      "Local SEO and Google Business Profile support",
      "School and institution systems",
      "Custom software and automation",
      "Inventory, records, and reporting tools",
      "Mobile-friendly, responsive design",
      "In-person local support",
      "Ongoing maintenance and improvement",
    ],
    process: [
      {
        title: "Meet locally",
        text: "We meet you in Bhaktapur, understand the business, and see exactly where technology can help.",
      },
      {
        title: "Plan simply",
        text: "We suggest a practical, affordable first step — usually a website, local SEO, or a focused system.",
      },
      {
        title: "Build cleanly",
        text: "We design and develop a professional, mobile-friendly solution that fits how you work.",
      },
      {
        title: "Launch and guide",
        text: "We launch it, connect your Google presence, and make sure you know how to use everything.",
      },
      {
        title: "Stay close",
        text: "As a local team, we keep supporting and improving your system as the business grows.",
      },
    ],
    reasons: [
      "Genuinely local — based in Kaushaltar, Bhaktapur, and easy to meet in person.",
      "Practical understanding of Bhaktapur's businesses, schools, and heritage economy.",
      "Full support across websites, SEO, software, and automation.",
      "Clear, honest communication without impersonal, distant service.",
      "Affordable, focused first steps that can grow over time.",
    ],
    related: [
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Get a professional website for your Bhaktapur business.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Be found by customers and visitors searching for you.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Replace notebooks and chat messages with organized systems.",
      },
      {
        href: "/about",
        label: "about InfoBytes Nepal",
        text: "Meet the local team based in Kaushaltar, Bhaktapur.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Visit or call your local Bhaktapur technology team.",
      },
    ],
    faqs: [
      {
        question: "Where is InfoBytes Nepal located in Bhaktapur?",
        answer:
          "InfoBytes Nepal is based in Kaushaltar, Bhaktapur. Being local means we can meet businesses in person across Bhaktapur, Thimi, Suryabinayak, and Madhyapur.",
      },
      {
        question: "Do you work with small shops and schools in Bhaktapur?",
        answer:
          "Yes. We help small shops, workshops, schools, and institutions with websites, local SEO, and simple systems for records, notices, and daily operations.",
      },
      {
        question: "Can you help my Bhaktapur business show up on Google?",
        answer:
          "Yes. We improve local SEO and Google Business Profile visibility so nearby customers and visitors can find and contact your business.",
      },
      {
        question: "Is working with a local IT company better?",
        answer:
          "For many businesses, yes. A local team in Bhaktapur can meet in person, understand the context directly, and provide support that is easy to reach.",
      },
      {
        question: "How do I get started?",
        answer:
          "You can contact or visit us in Kaushaltar, Bhaktapur. Share what your business needs and we will suggest a simple, practical first step.",
      },
    ],
  },
  pokhara: {
    slug: "it-company-in-pokhara",
    path: "/it-company-in-pokhara",
    metaTitle: "IT Company in Pokhara | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal supports Pokhara businesses with websites, software, SEO, and automation — ideal for hotels, travel, trekking, and hospitality brands.",
    ogTitle: "IT Company in Pokhara | InfoBytes Nepal",
    ogDescription:
      "Websites, booking systems, SEO, and automation for Pokhara's hotels, travel agencies, trekking companies, and growing businesses around Lakeside.",
    keyword: "IT Company in Pokhara",
    heroTitle: "IT Company in Pokhara",
    heroIntro:
      "InfoBytes Nepal helps Pokhara businesses reach travellers and local customers with modern websites, booking-ready systems, SEO, and automation. From Lakeside hotels and trekking agencies to shops and growing companies, we build digital tools that turn interest into bookings and inquiries.",
    overview: {
      title: "Digital growth for Pokhara's tourism and business economy",
      paragraphs: [
        "Pokhara is one of Nepal's most important tourism destinations, and much of its economy depends on being discovered online before a traveller ever arrives. Hotels and resorts, trekking and travel agencies, restaurants and cafés around Lakeside, adventure operators, and a growing base of local businesses all compete for attention on Google, maps, and social media.",
        "InfoBytes Nepal helps Pokhara businesses build fast, credible websites with clear booking or inquiry paths, improve their search visibility for tourism-related queries, and organize operations with practical software. We work with Pokhara teams remotely with clear communication, and can travel for larger projects, so location is never a barrier to strong technology support.",
        "Whether you want more direct bookings for a hotel, more inquiries for a trekking package, or a cleaner system to manage customers and staff, the goal is a digital setup that works while you focus on guests. For businesses searching for an IT company in Pokhara, we combine tourism-aware web design with dependable development and SEO.",
      ],
    },
    problems: [
      "Hotels and agencies depend heavily on third-party platforms and lose margin instead of earning direct bookings.",
      "Websites load slowly or look dated, which weakens trust with international travellers comparing options.",
      "Tourism businesses are hard to find for search terms travellers actually use before visiting Pokhara.",
      "Bookings, inquiries, and customer details are managed through scattered messages and spreadsheets.",
      "Seasonal demand makes it hard to stay consistently visible and organized year-round.",
    ],
    solutions: [
      "We build fast, credible websites with clear direct booking and inquiry paths.",
      "We improve SEO for tourism and location-based searches so travellers find you earlier.",
      "We create simple booking, inquiry, and customer management systems to reduce manual work.",
      "We help reduce dependence on third-party platforms by strengthening your own website.",
      "We support Pokhara teams remotely with clear communication, and travel for larger projects.",
    ],
    features: [
      "Tourism and hospitality websites",
      "Direct booking and inquiry flows",
      "SEO for travel and location searches",
      "Customer and booking management",
      "Multi-language friendly structure",
      "Mobile-first responsive design",
      "Google Business Profile support",
      "Ongoing support and improvement",
    ],
    process: [
      {
        title: "Understand the business",
        text: "We learn your property, packages, or services and how travellers and customers currently reach you.",
      },
      {
        title: "Plan the funnel",
        text: "We map the path from search to booking or inquiry so the website drives real action.",
      },
      {
        title: "Design and build",
        text: "We create a fast, credible, mobile-first website and any booking or management tools you need.",
      },
      {
        title: "Get you found",
        text: "We set up SEO and Google presence for the searches travellers use before choosing Pokhara.",
      },
      {
        title: "Improve each season",
        text: "We refine content, SEO, and features so visibility and bookings stay strong through the seasons.",
      },
    ],
    reasons: [
      "Tourism-aware web design built to convert travellers into direct bookings.",
      "SEO focused on the searches that bring visitors to Pokhara.",
      "Practical systems to reduce manual booking and customer management.",
      "Clear remote collaboration, with travel for larger projects.",
      "A connected approach across web, SEO, and automation.",
    ],
    related: [
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Get a fast, booking-ready website for your Pokhara business.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Be found by travellers searching before they arrive.",
      },
      {
        href: "/digital-marketing-company-in-nepal",
        label: "digital marketing company in Nepal",
        text: "Reach more travellers through search and social campaigns.",
      },
      {
        href: "/ecommerce-website-development-nepal",
        label: "ecommerce website development in Nepal",
        text: "Sell packages, products, or bookings directly online.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a website or system for your Pokhara business.",
      },
    ],
    faqs: [
      {
        question: "Do you work with businesses in Pokhara?",
        answer:
          "Yes. InfoBytes Nepal works with hotels, travel and trekking agencies, restaurants, and other businesses in Pokhara. We collaborate remotely with clear communication and can travel for larger projects.",
      },
      {
        question: "Can you help us get more direct bookings?",
        answer:
          "Yes. We build fast websites with clear booking and inquiry paths and improve your SEO and Google presence so travellers can find and book with you directly.",
      },
      {
        question: "Do you build booking or customer management systems?",
        answer:
          "Yes. We can create simple systems to manage bookings, inquiries, customers, and staff, reducing scattered messages and manual spreadsheets.",
      },
      {
        question: "Can you help us rank for tourism searches?",
        answer:
          "Yes. We focus SEO on the location and travel-related searches that potential visitors use before choosing where to stay or which agency to book in Pokhara.",
      },
      {
        question: "How do we start if we are based in Pokhara?",
        answer:
          "Share your business details and goals. We will plan a focused website or system and coordinate remotely, travelling when the project needs it.",
      },
    ],
  },
  ecommerce: {
    slug: "ecommerce-website-development-nepal",
    path: "/ecommerce-website-development-nepal",
    metaTitle: "Ecommerce Website Development in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds ecommerce websites and online stores in Nepal with eSewa, Khalti, and connectIPS payments, delivery, and inventory management.",
    ogTitle: "Ecommerce Website Development in Nepal | InfoBytes Nepal",
    ogDescription:
      "Launch an online store in Nepal with local payment gateways, product management, delivery, and a checkout built to convert.",
    keyword: "Ecommerce Website Development in Nepal",
    heroTitle: "Ecommerce Website Development in Nepal",
    heroIntro:
      "InfoBytes Nepal builds online stores that are fast, trustworthy, and easy to manage. From product catalogs and local payment gateways to delivery and inventory, we help Nepali businesses sell online with a checkout experience customers actually complete.",
    overview: {
      title: "Online stores built for how Nepal actually shops and pays",
      paragraphs: [
        "Selling online in Nepal is no longer optional for retail, fashion, electronics, groceries, and specialty brands. But a successful store is more than a catalog — it needs local payment options like eSewa, Khalti, IME Pay, and connectIPS, clear delivery handling, reliable inventory, and a checkout that works smoothly on the phones most customers use.",
        "InfoBytes Nepal builds ecommerce websites around these local realities. We plan the product structure, cart, and checkout to reduce drop-off, integrate the payment and delivery methods your customers expect, and give you an admin panel where managing products, orders, and stock is genuinely simple. The store should make your team faster, not create more manual work.",
        "Whether you are launching a first online store or replacing a slow, hard-to-manage one, we focus on speed, trust, and conversion. For businesses searching for ecommerce website development in Nepal, the strongest result is a store that looks credible, loads fast, and turns visitors into paid, delivered orders.",
      ],
    },
    problems: [
      "Many stores do not support the local payment methods Nepali customers actually use, so checkouts fail.",
      "Slow, cluttered product pages and confusing checkouts cause customers to abandon their carts.",
      "Order, stock, and delivery details are tracked manually, leading to mistakes and delays.",
      "Stores are not built mobile-first, even though most shopping in Nepal happens on phones.",
      "Businesses depend entirely on Instagram or Facebook DMs, which are hard to scale and track.",
    ],
    solutions: [
      "We integrate local payment gateways such as eSewa, Khalti, IME Pay, and connectIPS alongside cash on delivery.",
      "We design fast, clean product and checkout flows built to reduce drop-off and increase completed orders.",
      "We build an admin panel where products, orders, stock, and delivery status are simple to manage.",
      "We develop mobile-first stores that feel fast and trustworthy on the devices customers use most.",
      "We give you an owned platform that scales beyond social media DMs, with proper order tracking.",
    ],
    features: [
      "Product catalog and categories",
      "Local payment gateway integration",
      "Cash on delivery support",
      "Cart and optimized checkout",
      "Order and inventory management",
      "Delivery and shipping handling",
      "Discounts, coupons, and offers",
      "Admin dashboard and reporting",
    ],
    process: [
      {
        title: "Plan the store",
        text: "We map your products, categories, payment methods, delivery areas, and the checkout experience.",
      },
      {
        title: "Design for conversion",
        text: "We design fast, clear product and checkout pages that build trust and reduce cart abandonment.",
      },
      {
        title: "Build and integrate",
        text: "We develop the store and integrate local payment gateways, delivery, and inventory management.",
      },
      {
        title: "Test and launch",
        text: "We test real orders, payments, and edge cases, then launch the store carefully.",
      },
      {
        title: "Grow sales",
        text: "We support SEO, offers, and improvements so the store keeps converting and growing over time.",
      },
    ],
    reasons: [
      "Ecommerce built around Nepali payment methods and shopping habits.",
      "Conversion-focused product and checkout design, not just a catalog.",
      "A genuinely simple admin panel for products, orders, and stock.",
      "Mobile-first performance for the way customers actually browse.",
      "Connected SEO and marketing to bring traffic that converts.",
    ],
    related: [
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "See our broader website development approach and standards.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Bring searchable, buying-intent traffic to your store.",
      },
      {
        href: "/digital-marketing-company-in-nepal",
        label: "digital marketing company in Nepal",
        text: "Run campaigns that drive traffic to your product pages.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Connect orders with inventory, delivery, and reporting workflows.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss your online store requirement and product range.",
      },
    ],
    faqs: [
      {
        question: "Do you integrate eSewa, Khalti, and other Nepali payment gateways?",
        answer:
          "Yes. We integrate local payment gateways such as eSewa, Khalti, IME Pay, and connectIPS, and can also support cash on delivery depending on your business.",
      },
      {
        question: "Can I manage products and orders myself?",
        answer:
          "Yes. We build an admin dashboard where you can manage products, categories, prices, orders, stock, and delivery status without technical help.",
      },
      {
        question: "Will the store work well on mobile?",
        answer:
          "Yes. Every store is built mobile-first because most online shopping in Nepal happens on phones, and mobile performance directly affects sales.",
      },
      {
        question: "Can you move my store from Instagram to a real website?",
        answer:
          "Yes. We can build an owned ecommerce platform that scales beyond social media DMs, with proper product pages, checkout, and order tracking.",
      },
      {
        question: "How much does an ecommerce website cost in Nepal?",
        answer:
          "It depends on product count, payment and delivery integrations, and features. Share your requirement and we will suggest a focused scope and a clear quote.",
      },
    ],
  },
  crm: {
    slug: "crm-software-in-nepal",
    path: "/crm-software-in-nepal",
    metaTitle: "CRM Software in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds CRM software in Nepal for leads, contacts, sales pipelines, follow-ups, and reporting — custom-fit to how your team actually sells.",
    ogTitle: "CRM Software in Nepal | InfoBytes Nepal",
    ogDescription:
      "Organize leads, contacts, follow-ups, and sales pipelines with custom CRM software built for teams in Nepal.",
    keyword: "CRM Software in Nepal",
    heroTitle: "CRM Software in Nepal",
    heroIntro:
      "InfoBytes Nepal builds CRM software that keeps every lead, contact, and follow-up in one clear place. Instead of losing opportunities in spreadsheets and chat groups, your team gets a simple pipeline, timely reminders, and reporting managers can trust.",
    overview: {
      title: "A CRM that fits your sales process, not the other way around",
      paragraphs: [
        "Most teams in Nepal lose sales not because of weak products, but because follow-ups slip through the cracks. Leads arrive from calls, Facebook, referrals, and the website, then get scattered across notebooks, phones, and viber groups. Nobody is sure who followed up, which deal is warm, or why a customer went quiet.",
        "A CRM (customer relationship management) system fixes this by giving every lead a place, a stage, and an owner. InfoBytes Nepal builds CRM software around your actual sales process — your stages, your fields, your reports — so it feels natural to use. We can build a custom CRM or shape one from our LeadRack product direction, depending on your needs and budget.",
        "The result is a clearer pipeline, fewer missed follow-ups, and honest reporting on where deals stand. For businesses searching for CRM software in Nepal, the strongest fit is usually a system built around how your team already sells, not a rigid foreign tool forced onto local workflows.",
      ],
    },
    problems: [
      "Leads from calls, social media, referrals, and the website are scattered and easy to lose.",
      "No one can clearly say who followed up with a customer or what the next step is.",
      "Managers cannot see the real state of the pipeline without asking each salesperson.",
      "Follow-ups depend on memory, so warm leads go cold and revenue is lost.",
      "Generic foreign CRMs feel heavy, expensive, or mismatched to local sales habits.",
    ],
    solutions: [
      "We centralize every lead and contact with clear ownership, stage, and next action.",
      "We build a pipeline that reflects your real sales stages, from new lead to won or lost.",
      "We add reminders and follow-up tracking so no warm lead is forgotten.",
      "We create dashboards so managers see pipeline health and activity at a glance.",
      "We tailor the CRM to your fields, roles, and process, or adapt our LeadRack product.",
    ],
    features: [
      "Lead and contact management",
      "Custom sales pipeline stages",
      "Follow-up reminders and tasks",
      "Activity and communication history",
      "Role-based access for teams",
      "Reporting and pipeline dashboards",
      "Lead source and conversion tracking",
      "Website and form lead capture",
    ],
    process: [
      {
        title: "Map your sales process",
        text: "We learn your lead sources, sales stages, roles, and the reports managers actually need.",
      },
      {
        title: "Design the CRM",
        text: "We define fields, pipeline stages, permissions, and dashboards around your real workflow.",
      },
      {
        title: "Build or adapt",
        text: "We build a custom CRM or shape our LeadRack product direction to fit your requirement.",
      },
      {
        title: "Roll out to the team",
        text: "We launch, import existing data where possible, and help your team adopt it smoothly.",
      },
      {
        title: "Refine and report",
        text: "We refine stages, reminders, and reports as your sales process matures.",
      },
    ],
    reasons: [
      "CRM built around your sales process, not a rigid foreign template.",
      "Product experience with LeadRack for lead and follow-up tracking.",
      "Clear pipelines and reporting that managers can actually trust.",
      "Nepal-based support with understanding of local sales habits.",
      "A phased approach so teams adopt the CRM without disruption.",
    ],
    related: [
      {
        href: "/products/leadrack",
        label: "LeadRack lead management",
        text: "Explore our focused product for tracking leads and follow-ups.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Automate follow-ups, tasks, and reporting beyond the pipeline.",
      },
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "See how we build custom systems around your operations.",
      },
      {
        href: "/digital-marketing-company-in-nepal",
        label: "digital marketing company in Nepal",
        text: "Feed the CRM with tracked, quality leads from campaigns.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss the CRM workflow your sales team needs.",
      },
    ],
    faqs: [
      {
        question: "What is CRM software and do I need it?",
        answer:
          "CRM software organizes your leads, contacts, follow-ups, and sales pipeline in one place. If your team handles multiple leads and follow-ups, a CRM helps prevent lost opportunities and unclear pipelines.",
      },
      {
        question: "Can you build a custom CRM for our process?",
        answer:
          "Yes. We build CRM software around your real sales stages, fields, roles, and reports, so it fits your team instead of forcing your team to fit the tool.",
      },
      {
        question: "Do you have a ready CRM product?",
        answer:
          "Yes. Our LeadRack product direction focuses on lead and follow-up tracking and can be adapted to many sales workflows, or we can build fully custom.",
      },
      {
        question: "Can the CRM capture leads from our website?",
        answer:
          "Yes. We can connect website and form inquiries directly into the CRM so every lead is captured, owned, and followed up.",
      },
      {
        question: "Can managers see reports and pipeline status?",
        answer:
          "Yes. We build dashboards and reports so managers can see pipeline health, follow-up activity, and conversion without chasing individual salespeople.",
      },
    ],
  },
  uiux: {
    slug: "ui-ux-design-company-in-nepal",
    path: "/ui-ux-design-company-in-nepal",
    metaTitle: "UI/UX Design Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is a UI/UX design company in Nepal offering user research, wireframes, prototypes, and interface design for websites, apps, and software.",
    ogTitle: "UI/UX Design Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "User research, wireframes, prototypes, and polished interface design for websites, apps, and software products in Nepal.",
    keyword: "UI/UX Design Company in Nepal",
    heroTitle: "UI/UX Design Company in Nepal",
    heroIntro:
      "InfoBytes Nepal designs digital products that are clear, usable, and pleasant to use. From user research and wireframes to prototypes and polished interfaces, we help websites, apps, and software feel effortless — so people understand them and act with confidence.",
    overview: {
      title: "Interfaces that feel obvious, not clever",
      paragraphs: [
        "Good UI/UX is invisible. When a website, app, or dashboard is well designed, people find what they need, understand what to do, and complete their task without frustration. When it is not, even a powerful product feels confusing, support requests rise, and users quietly give up.",
        "InfoBytes Nepal approaches UI/UX design as problem-solving, not decoration. We study who the users are, what they are trying to do, and where the current experience breaks down. Then we structure the flow, design clear screens, and prototype the experience before development — so usability problems are caught early, when they are cheap to fix.",
        "Because we also build the software, our designs are realistic and translate cleanly into a working product. For businesses and startups searching for a UI/UX design company in Nepal, the value is design that improves adoption, reduces confusion, and makes the whole product feel trustworthy.",
      ],
    },
    problems: [
      "Users struggle to complete key tasks because flows and screens are confusing.",
      "Products look decorated but are hard to actually use, increasing support requests.",
      "Designs are created without understanding real users, so they miss the mark.",
      "Usability issues are discovered only after development, when they are expensive to fix.",
      "Inconsistent screens and components make the product feel unpolished and untrustworthy.",
    ],
    solutions: [
      "We research users and tasks so design decisions are grounded in real needs.",
      "We structure clear flows and wireframes before visuals, focusing on usability first.",
      "We prototype key experiences so issues are caught early, before development.",
      "We design consistent components and screens for a polished, trustworthy product.",
      "We design with development in mind, so the final product matches the intended experience.",
    ],
    features: [
      "User research and task analysis",
      "Information architecture and flows",
      "Wireframing",
      "Interactive prototypes",
      "Interface (UI) design",
      "Design systems and components",
      "Usability review",
      "Design-to-development handoff",
    ],
    process: [
      {
        title: "Understand users",
        text: "We learn who the users are, what they need to do, and where the current experience fails.",
      },
      {
        title: "Structure the flow",
        text: "We map the information architecture and user flows so the product is logical and clear.",
      },
      {
        title: "Wireframe and prototype",
        text: "We design wireframes and interactive prototypes to test usability before building.",
      },
      {
        title: "Design the interface",
        text: "We craft polished, consistent screens and a reusable design system.",
      },
      {
        title: "Hand off and refine",
        text: "We prepare clean handoff for development and refine based on real usage.",
      },
    ],
    reasons: [
      "UX treated as problem-solving, grounded in real users and tasks.",
      "Prototyping that catches usability issues before costly development.",
      "Design and development under one team for realistic, buildable design.",
      "Consistent design systems that keep products polished as they grow.",
      "A focus on adoption and trust, not decoration.",
    ],
    related: [
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "See how UI/UX applies to website design specifically.",
      },
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Turn well-designed flows into a working software product.",
      },
      {
        href: "/mobile-app-development-company-in-nepal",
        label: "mobile app development company in Nepal",
        text: "Design app experiences that feel effortless on mobile.",
      },
      {
        href: "/services",
        label: "all InfoBytes Nepal services",
        text: "See where UI/UX fits within our wider offering.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a UI/UX design need for your product or website.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between UI and UX design?",
        answer:
          "UX design focuses on how a product works and flows so users can complete tasks easily, while UI design focuses on how each screen looks. Good products need both, and InfoBytes Nepal provides them together.",
      },
      {
        question: "Do you do user research and prototypes?",
        answer:
          "Yes. We research users and tasks, structure flows, and build interactive prototypes so usability issues are caught before development begins.",
      },
      {
        question: "Can you design for apps and software, not just websites?",
        answer:
          "Yes. We design UI/UX for websites, mobile apps, dashboards, and software products, and because we also build them, our designs translate cleanly into working products.",
      },
      {
        question: "Can you improve the UX of our existing product?",
        answer:
          "Yes. We can review your current product, identify usability problems, and redesign flows and screens to improve clarity, adoption, and trust.",
      },
      {
        question: "How do we start a UI/UX project?",
        answer:
          "Share your product, users, and the problems you are seeing. We will propose a research, design, and prototyping scope that fits your goals.",
      },
    ],
  },
  websiteCost: {
    slug: "website-cost-in-nepal",
    path: "/website-cost-in-nepal",
    metaTitle: "Website Cost in Nepal: Pricing Guide | InfoBytes Nepal",
    metaDescription:
      "How much does a website cost in Nepal? A clear guide to website pricing, what affects it, and typical ranges — from InfoBytes Nepal. Get a custom quote.",
    ogTitle: "How Much Does a Website Cost in Nepal?",
    ogDescription:
      "A practical guide to website pricing in Nepal — what affects cost, typical ranges, and how to get an accurate quote for your project.",
    keyword: "Website Cost in Nepal",
    heroTitle: "How Much Does a Website Cost in Nepal?",
    heroIntro:
      "The honest answer is that website cost in Nepal depends on what you actually need. This guide explains what drives the price, the typical ranges for different kinds of websites, and how to get an accurate quote without paying for features you will never use.",
    overview: {
      title: "What actually determines the cost of a website",
      paragraphs: [
        "There is no single price for a website in Nepal because a five-page business website and a custom web platform are completely different projects. The real cost depends on the number of pages, whether the design is custom or template-based, the features you need (forms, bookings, payments, dashboards), how much content and SEO work is involved, and the level of ongoing support.",
        "As a rough guide, a simple, professional business website in Nepal typically ranges from around NPR 25,000 to NPR 80,000. A larger, custom-designed website with more pages, stronger SEO structure, and a content management system usually ranges from around NPR 80,000 to NPR 250,000. Ecommerce stores and custom web applications with payments, dashboards, or complex logic generally start higher and are quoted based on scope. These are indicative market ranges — your exact price depends on your requirements.",
        "The goal should not be the cheapest possible website, but the right scope for your business. A slightly stronger foundation that loads fast, ranks well, and brings inquiries usually pays for itself. InfoBytes Nepal helps you decide what you genuinely need first, so the budget goes toward results rather than unnecessary features.",
      ],
    },
    problems: [
      "Quotes vary wildly, making it hard to know what a fair website price actually is.",
      "Very cheap websites often load slowly, break on mobile, or cannot be updated easily.",
      "Businesses pay for features and pages they never use, inflating the cost.",
      "Hidden costs for hosting, domain, content, or changes appear only after the project starts.",
      "It is unclear whether a template or a custom design is the right investment.",
    ],
    solutions: [
      "We explain exactly what affects your price so the quote is transparent and clear.",
      "We recommend a scope that matches your goals, avoiding features you do not need.",
      "We build fast, mobile-first, maintainable websites so you are not paying to fix them later.",
      "We are upfront about hosting, domain, content, and support so there are no surprises.",
      "We help you choose between template-based and custom design based on real value.",
    ],
    features: [
      "Transparent, scope-based quotes",
      "Simple business website options",
      "Custom-designed website options",
      "Ecommerce and web app estimates",
      "Content and SEO scope planning",
      "Hosting and domain guidance",
      "Clear support and maintenance terms",
      "Phased budgets for growing sites",
    ],
    process: [
      {
        title: "Share your goals",
        text: "You tell us what the website should achieve, your rough page needs, and any must-have features.",
      },
      {
        title: "Define the scope",
        text: "We translate that into a clear scope: pages, design level, features, content, and SEO.",
      },
      {
        title: "Give a clear quote",
        text: "We provide a transparent quote with what is included, so you know exactly what you are paying for.",
      },
      {
        title: "Build in phases if needed",
        text: "If budget matters, we plan a strong first version that can grow in later phases.",
      },
      {
        title: "Support after launch",
        text: "We agree on clear support terms so future changes and hosting are predictable.",
      },
    ],
    reasons: [
      "Transparent pricing tied to a scope you understand.",
      "Honest advice on template versus custom, and what you actually need.",
      "Fast, maintainable builds that avoid costly fixes later.",
      "Phased budgets so you can start strong and grow.",
      "Clear terms for hosting, content, and ongoing support.",
    ],
    related: [
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "See our full website development approach and standards.",
      },
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "Understand what goes into a strong, custom website design.",
      },
      {
        href: "/ecommerce-website-development-nepal",
        label: "ecommerce website development in Nepal",
        text: "Explore pricing factors for online stores specifically.",
      },
      {
        href: "/mobile-app-development-cost-in-nepal",
        label: "mobile app development cost in Nepal",
        text: "See how app pricing compares to website pricing.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Get a clear, custom quote for your website.",
      },
    ],
    faqs: [
      {
        question: "How much does a website cost in Nepal?",
        answer:
          "A simple professional business website in Nepal typically ranges from around NPR 25,000 to NPR 80,000, while larger custom websites usually range from around NPR 80,000 to NPR 250,000. Ecommerce and custom web applications are quoted based on scope. Your exact price depends on your specific requirements.",
      },
      {
        question: "Why do website prices vary so much?",
        answer:
          "Price depends on the number of pages, custom versus template design, features like forms, bookings, or payments, content and SEO work, and ongoing support. Different requirements produce very different quotes.",
      },
      {
        question: "Is a cheap website a good idea?",
        answer:
          "Very cheap websites often load slowly, break on mobile, or are hard to update, which can cost more later. The goal is the right scope for your business, not the lowest possible price.",
      },
      {
        question: "Are hosting and domain included in the price?",
        answer:
          "Hosting and domain are usually separate, ongoing costs. We are upfront about them so your total cost is clear before the project begins.",
      },
      {
        question: "Can I start small and grow later?",
        answer:
          "Yes. We can build a strong first version within your budget and plan later phases to add pages, features, and SEO as your business grows.",
      },
    ],
  },
  appCost: {
    slug: "mobile-app-development-cost-in-nepal",
    path: "/mobile-app-development-cost-in-nepal",
    metaTitle: "Mobile App Development Cost in Nepal | InfoBytes Nepal",
    metaDescription:
      "How much does mobile app development cost in Nepal? A clear guide to app pricing, what affects it, and typical ranges — from InfoBytes Nepal. Get a quote.",
    ogTitle: "How Much Does Mobile App Development Cost in Nepal?",
    ogDescription:
      "A practical guide to mobile app development pricing in Nepal — what drives the cost, typical ranges, and how to get an accurate quote.",
    keyword: "Mobile App Development Cost in Nepal",
    heroTitle: "How Much Does Mobile App Development Cost in Nepal?",
    heroIntro:
      "Mobile app cost in Nepal depends on what the app needs to do, who it is for, and how it will be built. This guide breaks down the real factors behind app pricing, typical ranges, and how to keep a first version affordable without wasting money.",
    overview: {
      title: "What drives the cost of a mobile app",
      paragraphs: [
        "A mobile app's cost is mostly about scope and complexity. A simple app with a few screens and basic features is very different from an app with user accounts, payments, real-time updates, an admin dashboard, and integrations. Whether you need Android, iOS, both, or a progressive web app (PWA) also changes the price, as does whether an admin panel and backend are required.",
        "As an indicative guide, a small, focused app or PWA in Nepal often starts from around NPR 150,000, mid-range apps with accounts, dashboards, and several core features commonly range from around NPR 300,000 to NPR 800,000, and larger, complex apps are quoted higher based on scope. Most business apps also need a web backend and admin panel, which should be counted in the budget. These are market-level ranges — your exact quote depends on the feature set.",
        "The smartest approach is usually to launch a focused first version that solves one clear problem well, then expand based on real usage. InfoBytes Nepal helps you decide whether you even need a native app or whether a PWA or responsive web platform is faster and cheaper, so you invest in the right thing first.",
      ],
    },
    problems: [
      "App quotes are hard to compare because scope and complexity are rarely defined clearly.",
      "Businesses try to include every feature in version one, which inflates cost and delays launch.",
      "The need for a backend and admin panel is often overlooked in the budget.",
      "It is unclear whether native apps, a PWA, or a web platform is the right choice.",
      "Ongoing costs for maintenance, updates, and app store presence are not planned for.",
    ],
    solutions: [
      "We define scope and complexity clearly so the quote is transparent and comparable.",
      "We help prioritize a focused first version that launches sooner and costs less.",
      "We include the backend and admin panel in planning so the budget is realistic.",
      "We advise whether native, PWA, or web-first development best fits your goals and budget.",
      "We plan for maintenance and updates so long-term costs are predictable.",
    ],
    features: [
      "Scope and complexity assessment",
      "Native, PWA, or web-first guidance",
      "Focused MVP planning",
      "Backend and admin panel estimates",
      "Feature-by-feature costing",
      "Integration and payment planning",
      "Maintenance and update planning",
      "Transparent, phased budgets",
    ],
    process: [
      {
        title: "Define the app",
        text: "We clarify who uses the app, the core tasks, and the must-have features for a first version.",
      },
      {
        title: "Choose the approach",
        text: "We recommend native, PWA, or web-first based on your goals, users, and budget.",
      },
      {
        title: "Scope and quote",
        text: "We break the app into features and provide a clear, transparent cost estimate.",
      },
      {
        title: "Build the first version",
        text: "We build a focused, usable first version with the backend and admin panel it needs.",
      },
      {
        title: "Improve with usage",
        text: "We expand features based on real feedback, keeping later phases planned and predictable.",
      },
    ],
    reasons: [
      "Clear, feature-based costing instead of vague lump-sum quotes.",
      "Honest advice on native versus PWA versus web to save unnecessary spend.",
      "Focused MVP planning that launches sooner and costs less.",
      "Backend and admin panel included in realistic budgeting.",
      "Predictable maintenance and phased improvement planning.",
    ],
    related: [
      {
        href: "/mobile-app-development-company-in-nepal",
        label: "mobile app development company in Nepal",
        text: "See our full approach to planning and building apps.",
      },
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Understand backend and admin development that apps rely on.",
      },
      {
        href: "/website-cost-in-nepal",
        label: "website cost in Nepal",
        text: "Compare app pricing with website pricing factors.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "See whether a web-based system may fit better than an app.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Get a clear, scope-based quote for your app idea.",
      },
    ],
    faqs: [
      {
        question: "How much does mobile app development cost in Nepal?",
        answer:
          "A small focused app or PWA in Nepal often starts from around NPR 150,000, while mid-range apps with accounts, dashboards, and several features commonly range from around NPR 300,000 to NPR 800,000. Complex apps are quoted higher based on scope. Your exact cost depends on the features you need.",
      },
      {
        question: "What makes an app more expensive?",
        answer:
          "Cost rises with the number of features, user accounts, payments, real-time updates, integrations, whether you need Android, iOS, or both, and the backend and admin panel required.",
      },
      {
        question: "Do I need a native app or is a PWA enough?",
        answer:
          "It depends on your goals. A PWA or responsive web platform is often faster and cheaper, while a native app makes sense when the workflow depends on mobile behavior, offline use, or app store presence. We help you decide.",
      },
      {
        question: "Should the backend and admin panel be in the budget?",
        answer:
          "Yes. Most business apps need a backend and admin panel to manage users, data, and content. We include these in planning so the budget is realistic.",
      },
      {
        question: "Can I start with a smaller, cheaper version?",
        answer:
          "Yes. We recommend launching a focused first version that solves one clear problem well, then expanding based on real usage, which keeps initial cost lower.",
      },
    ],
  },
  erp: {
    slug: "erp-software-in-nepal",
    path: "/erp-software-in-nepal",
    metaTitle: "ERP Software in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds and implements ERP software in Nepal to connect sales, inventory, accounts, HR, and operations in one system with clear reporting.",
    ogTitle: "ERP Software in Nepal | InfoBytes Nepal",
    ogDescription:
      "Connect sales, inventory, accounts, HR, and operations with custom ERP software built for businesses in Nepal.",
    keyword: "ERP Software in Nepal",
    heroTitle: "ERP Software in Nepal",
    heroIntro:
      "InfoBytes Nepal builds and implements ERP software that brings sales, inventory, purchases, accounts, HR, and operations into one connected system. Instead of disconnected tools and manual reconciliation, your team works from a single source of truth with reporting managers can trust.",
    overview: {
      title: "One connected system instead of scattered tools",
      paragraphs: [
        "As a business in Nepal grows, the number of separate tools and spreadsheets grows with it — one for billing, another for stock, a book for accounts, a chat group for approvals. Data stops matching, reconciliation eats hours, and no one has a real-time picture of the business. ERP (enterprise resource planning) software solves this by connecting core operations in one place.",
        "InfoBytes Nepal builds and implements ERP systems shaped around how a business actually runs. Modules for sales, purchases, inventory, accounting, HR, and reporting share the same data, so a sale updates stock, and stock updates reporting, without duplicate entry. We focus on the modules you truly need first, rather than forcing a heavy, generic ERP onto a team that is not ready for it.",
        "The result is fewer errors, faster reporting, and clearer control as the business scales. For companies searching for ERP software in Nepal, the strongest fit is usually a right-sized system — custom or modular — that matches local operating habits and grows in phases instead of overwhelming staff on day one.",
      ],
    },
    problems: [
      "Sales, stock, purchases, and accounts live in separate tools that never fully agree.",
      "Staff re-enter the same data in multiple places, creating errors and wasted hours.",
      "Reconciling inventory and accounts at month-end is slow and stressful.",
      "Managers cannot see real-time business status without compiling reports manually.",
      "Generic foreign ERPs are heavy, expensive, and mismatched to local workflows.",
    ],
    solutions: [
      "We connect sales, inventory, purchases, accounts, and HR so data flows without duplicate entry.",
      "We build the modules you actually need first and expand in phases as the team adapts.",
      "We create real-time dashboards so managers see business status without manual compiling.",
      "We design approvals, roles, and audit trails suited to how your organization operates.",
      "We shape the ERP around local operating habits instead of forcing a rigid template.",
    ],
    features: [
      "Sales and billing module",
      "Inventory and stock control",
      "Purchase and supplier management",
      "Accounting and finance views",
      "HR and attendance basics",
      "Role-based access and approvals",
      "Real-time reporting dashboards",
      "Phased, modular rollout",
    ],
    process: [
      {
        title: "Map operations",
        text: "We study how sales, stock, purchases, accounts, and approvals move through your business today.",
      },
      {
        title: "Prioritize modules",
        text: "We choose the first modules that will remove the most manual work and errors.",
      },
      {
        title: "Build and connect",
        text: "We develop or configure the modules so they share data and reduce duplicate entry.",
      },
      {
        title: "Roll out in phases",
        text: "We launch module by module, import data where possible, and train the team gradually.",
      },
      {
        title: "Expand and refine",
        text: "We add modules, reports, and automation as the business grows and adoption strengthens.",
      },
    ],
    reasons: [
      "Right-sized ERP that fits your business instead of overwhelming it.",
      "Phased, modular rollout that respects staff adoption.",
      "Real-time reporting that connects operations to decisions.",
      "Nepal-based implementation aware of local workflows.",
      "Custom flexibility where generic ERPs are too rigid.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "See how we build custom systems around operations.",
      },
      {
        href: "/inventory-management-software-in-nepal",
        label: "inventory management software in Nepal",
        text: "Explore the inventory side of a connected system.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Automate approvals, reporting, and repeated operational work.",
      },
      {
        href: "/crm-software-in-nepal",
        label: "CRM software in Nepal",
        text: "Connect sales and customer workflows with operations.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss which ERP modules your business needs first.",
      },
    ],
    faqs: [
      {
        question: "What is ERP software and when do I need it?",
        answer:
          "ERP software connects core business operations such as sales, inventory, purchases, accounts, and HR in one system. You typically need it when separate tools and spreadsheets stop agreeing and manual reconciliation becomes a burden.",
      },
      {
        question: "Do I have to implement the whole ERP at once?",
        answer:
          "No. We recommend a phased, modular rollout starting with the modules that remove the most manual work, then expanding as your team adapts.",
      },
      {
        question: "Can you build a custom ERP for our workflow?",
        answer:
          "Yes. We build and implement ERP systems shaped around your real operations, which suits businesses whose workflows do not fit rigid, generic ERPs.",
      },
      {
        question: "Will managers get real-time reports?",
        answer:
          "Yes. Because modules share the same data, we can provide real-time dashboards for sales, stock, purchases, and finance without manual report compiling.",
      },
      {
        question: "How do we start an ERP project?",
        answer:
          "Share how your operations run today and where the biggest manual pain is. We will propose a first module scope and a realistic phased plan.",
      },
    ],
  },
  posSoftware: {
    slug: "pos-software-in-nepal",
    path: "/pos-software-in-nepal",
    metaTitle: "POS Software in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds POS software in Nepal for shops, restaurants, and retail — fast billing, stock sync, and sales reporting that fits local business.",
    ogTitle: "POS Software in Nepal | InfoBytes Nepal",
    ogDescription:
      "Fast billing, stock sync, and clear sales reporting with POS software built for shops, restaurants, and retail in Nepal.",
    keyword: "POS Software in Nepal",
    heroTitle: "POS Software in Nepal",
    heroIntro:
      "InfoBytes Nepal builds point of sale (POS) software that makes billing fast, keeps stock accurate, and gives owners clear sales reports. Built for shops, restaurants, and retail chains in Nepal, it turns every sale into organized, trackable data.",
    overview: {
      title: "Fast billing with stock and reporting that stay in sync",
      paragraphs: [
        "For a shop, restaurant, or retail chain, the counter is where everything happens — and where mistakes are costly. Slow billing frustrates customers, manual stock counts drift out of reality, and at day-end the owner has no clear picture of what actually sold. A good POS system fixes this by making billing quick and connecting every sale to stock and reporting.",
        "InfoBytes Nepal builds POS software around how Nepali retail actually works: fast item entry, discounts, multiple payment methods including digital wallets, printed or digital receipts, and automatic stock deduction. Owners get sales reports by day, item, and outlet, so decisions are based on real numbers instead of guesswork.",
        "Whether you run a single shop or several outlets, the goal is a counter that moves quickly and books that stay accurate. For businesses searching for POS software in Nepal, we focus on speed at the counter and clarity in the back office, with the option to connect inventory and accounting as you grow.",
      ],
    },
    problems: [
      "Billing is slow at busy times, frustrating customers and staff.",
      "Stock counts drift from reality because sales are not deducted automatically.",
      "Owners cannot see what sold, what is profitable, or what is running low.",
      "Multiple outlets are hard to compare without a shared system.",
      "Digital wallet and mixed payments are not handled cleanly at the counter.",
    ],
    solutions: [
      "We build fast billing with quick item entry, discounts, and receipt printing.",
      "We deduct stock automatically on each sale so inventory stays accurate.",
      "We provide sales reports by day, item, category, and outlet.",
      "We support multiple outlets with shared, comparable reporting.",
      "We handle cash, card, and digital wallet payments cleanly at checkout.",
    ],
    features: [
      "Fast point of sale billing",
      "Automatic stock deduction",
      "Barcode and quick item entry",
      "Discounts, offers, and taxes",
      "Multiple payment methods",
      "Receipt printing or digital receipts",
      "Multi-outlet reporting",
      "Sales and profitability reports",
    ],
    process: [
      {
        title: "Understand the counter",
        text: "We learn your items, pricing, payment methods, and how busy the counter gets.",
      },
      {
        title: "Design billing flow",
        text: "We design a fast checkout that fits your staff and reduces queue time.",
      },
      {
        title: "Build and connect stock",
        text: "We build the POS and connect it to stock so inventory updates on every sale.",
      },
      {
        title: "Launch at the counter",
        text: "We set up devices and receipts, and train staff for smooth day-one use.",
      },
      {
        title: "Add reporting and outlets",
        text: "We refine reports and connect additional outlets or accounting as you grow.",
      },
    ],
    reasons: [
      "Speed at the counter, built for busy Nepali retail.",
      "Accurate stock through automatic deduction on every sale.",
      "Clear sales and profit reporting for owners.",
      "Multi-outlet support with comparable numbers.",
      "Room to connect inventory and accounting later.",
    ],
    related: [
      {
        href: "/inventory-management-software-in-nepal",
        label: "inventory management software in Nepal",
        text: "Keep deeper stock control connected to your sales.",
      },
      {
        href: "/erp-software-in-nepal",
        label: "ERP software in Nepal",
        text: "Connect POS with accounts, purchases, and operations.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Automate reporting and repeated back-office work.",
      },
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "See our broader custom software approach.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss POS software for your shop or restaurant.",
      },
    ],
    faqs: [
      {
        question: "What kind of businesses is your POS software for?",
        answer:
          "We build POS software for shops, retail stores, restaurants, cafés, and multi-outlet businesses in Nepal that need fast billing and accurate stock.",
      },
      {
        question: "Does the POS update stock automatically?",
        answer:
          "Yes. Each sale deducts stock automatically, so your inventory stays accurate and you can see what is running low.",
      },
      {
        question: "Can it handle digital wallet payments?",
        answer:
          "Yes. The POS can handle cash, card, and digital wallet payments, and record mixed payments cleanly at checkout.",
      },
      {
        question: "Do you support multiple outlets?",
        answer:
          "Yes. We support multiple outlets with shared, comparable sales and stock reporting so you can manage the whole business.",
      },
      {
        question: "Can the POS connect to accounting later?",
        answer:
          "Yes. The POS can connect with inventory and accounting or a broader ERP as your business grows.",
      },
    ],
  },
  inventorySoftware: {
    slug: "inventory-management-software-in-nepal",
    path: "/inventory-management-software-in-nepal",
    metaTitle: "Inventory Management Software in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds inventory management software in Nepal for accurate stock, low-stock alerts, purchase tracking, and multi-location warehouse control.",
    ogTitle: "Inventory Management Software in Nepal | InfoBytes Nepal",
    ogDescription:
      "Track stock accurately with low-stock alerts, purchase tracking, and multi-location control built for businesses in Nepal.",
    keyword: "Inventory Management Software in Nepal",
    heroTitle: "Inventory Management Software in Nepal",
    heroIntro:
      "InfoBytes Nepal builds inventory management software that keeps stock accurate across shops, warehouses, and outlets. With low-stock alerts, purchase tracking, and clear valuation, you stop losing money to stockouts, overstock, and untracked shrinkage.",
    overview: {
      title: "Know exactly what you have, where, and what it is worth",
      paragraphs: [
        "Inventory is often a business's largest tied-up asset, yet many teams in Nepal track it through memory, notebooks, or a spreadsheet that is always slightly wrong. The result is familiar: fast-selling items run out, slow items pile up, and month-end counts never quite match the books. Every gap is money lost.",
        "InfoBytes Nepal builds inventory management software that keeps a live, accurate view of stock across locations. Goods received update stock, sales or issues reduce it, and low-stock alerts prompt reordering before you run out. Purchase and supplier records, batch or expiry handling where needed, and stock valuation give both floor staff and owners the truth in real time.",
        "Whether you manage one store or several warehouses, the goal is fewer stockouts, less dead stock, and books that reconcile. For businesses searching for inventory management software in Nepal, we build a system that fits your items, units, and locations rather than forcing your stock into a rigid tool.",
      ],
    },
    problems: [
      "Stock records are inaccurate, so fast movers run out while slow movers pile up.",
      "There is no alert before an item runs out, causing lost sales.",
      "Purchases and suppliers are tracked loosely, making costs and dues unclear.",
      "Multi-location stock is impossible to see in one place.",
      "Month-end counts never match the books, hiding shrinkage and errors.",
    ],
    solutions: [
      "We keep a live stock view that updates on every receipt, sale, or transfer.",
      "We add low-stock alerts and reorder points so you restock before running out.",
      "We track purchases, suppliers, and costs for clear dues and valuation.",
      "We support multiple locations with transfers and consolidated visibility.",
      "We enable structured stock counts so books and shelves finally reconcile.",
    ],
    features: [
      "Real-time stock tracking",
      "Low-stock and reorder alerts",
      "Purchase and supplier records",
      "Multi-location and transfers",
      "Batch and expiry handling",
      "Stock valuation reports",
      "Barcode support",
      "Adjustment and audit logs",
    ],
    process: [
      {
        title: "Map your stock",
        text: "We learn your items, units, locations, suppliers, and how goods move in and out.",
      },
      {
        title: "Design the system",
        text: "We define stock flows, alerts, roles, and the reports you need to control inventory.",
      },
      {
        title: "Build and import",
        text: "We build the software and import your current item and supplier data where possible.",
      },
      {
        title: "Launch and count",
        text: "We launch, run an opening stock count, and train staff on daily use.",
      },
      {
        title: "Refine control",
        text: "We refine alerts, valuation, and multi-location handling as your operation grows.",
      },
    ],
    reasons: [
      "Accurate, real-time stock across every location.",
      "Alerts that prevent both stockouts and dead stock.",
      "Clear purchase, supplier, and valuation records.",
      "Built around your items, units, and workflow.",
      "Connectable to POS, accounting, or a full ERP.",
    ],
    related: [
      {
        href: "/pos-software-in-nepal",
        label: "POS software in Nepal",
        text: "Connect billing so sales update stock automatically.",
      },
      {
        href: "/erp-software-in-nepal",
        label: "ERP software in Nepal",
        text: "Connect inventory with accounts, purchases, and operations.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Automate reorder, reporting, and stock workflows.",
      },
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "See how we build systems around your operations.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss inventory control for your business.",
      },
    ],
    faqs: [
      {
        question: "What does inventory management software do?",
        answer:
          "It keeps an accurate, real-time record of your stock across locations, with low-stock alerts, purchase tracking, valuation, and reports so you avoid stockouts and overstock.",
      },
      {
        question: "Can it alert me before stock runs out?",
        answer:
          "Yes. We set reorder points and low-stock alerts so you can restock fast-moving items before they run out and you lose sales.",
      },
      {
        question: "Does it support multiple warehouses or outlets?",
        answer:
          "Yes. We support multiple locations with stock transfers and consolidated visibility so you can see and control everything in one place.",
      },
      {
        question: "Can it handle batches or expiry dates?",
        answer:
          "Yes. Where your business needs it, we can add batch tracking and expiry handling, which is useful for pharmacies, food, and similar sectors.",
      },
      {
        question: "Can it connect with billing and accounts?",
        answer:
          "Yes. Inventory can connect with POS billing and accounting or a broader ERP so sales, purchases, and stock stay consistent.",
      },
    ],
  },
  schoolSoftware: {
    slug: "school-management-software-in-nepal",
    path: "/school-management-software-in-nepal",
    metaTitle: "School Management Software in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds school management software in Nepal for admissions, attendance, fees, exams, results, and parent communication in one system.",
    ogTitle: "School Management Software in Nepal | InfoBytes Nepal",
    ogDescription:
      "Manage admissions, attendance, fees, exams, results, and parent communication with school management software built for Nepal.",
    keyword: "School Management Software in Nepal",
    heroTitle: "School Management Software in Nepal",
    heroIntro:
      "InfoBytes Nepal builds school management software that brings admissions, attendance, fees, exams, results, and parent communication into one organized system. Schools and colleges in Nepal spend less time on paperwork and more time on students.",
    overview: {
      title: "Less paperwork, clearer communication, better records",
      paragraphs: [
        "Schools and colleges in Nepal carry a heavy administrative load — admissions, student records, daily attendance, fee collection and dues, exam marks, result publishing, and constant communication with parents. When this runs on registers, spreadsheets, and phone calls, staff burn hours, mistakes creep in, and parents feel out of the loop.",
        "InfoBytes Nepal builds school management software that organizes this into one system. Admissions and student profiles stay in one place, attendance is quick to record, fees and dues are tracked clearly, and exam marks flow into results that can be shared with parents. Role-based access keeps admin, teachers, and accounts working in the right areas.",
        "The goal is an institution that runs smoothly and communicates well, without overwhelming non-technical staff. For schools searching for school management software in Nepal, we focus on the modules that save the most time first — usually fees, attendance, and results — then expand from there.",
      ],
    },
    problems: [
      "Admissions, records, and documents are scattered across registers and files.",
      "Fee collection and dues are hard to track, and reminders are manual.",
      "Attendance and exam records take teachers significant time to maintain.",
      "Publishing results and sharing them with parents is slow and manual.",
      "Parents feel disconnected from attendance, fees, and academic updates.",
    ],
    solutions: [
      "We centralize admissions and student profiles with documents in one place.",
      "We track fees and dues clearly, with statements and reminders.",
      "We make attendance quick to record and easy to report.",
      "We turn exam marks into results that can be published and shared.",
      "We give parents visibility into attendance, fees, and academic updates.",
    ],
    features: [
      "Admissions and student records",
      "Fee collection and dues tracking",
      "Attendance management",
      "Exam and marks entry",
      "Result generation and publishing",
      "Parent communication and notices",
      "Role-based access for staff",
      "Reports for administration",
    ],
    process: [
      {
        title: "Understand the institution",
        text: "We learn your admission flow, fee structure, exam system, and communication needs.",
      },
      {
        title: "Prioritize modules",
        text: "We start with the areas that save the most time, usually fees, attendance, and results.",
      },
      {
        title: "Build and configure",
        text: "We build the system around your classes, sections, fee heads, and grading.",
      },
      {
        title: "Launch and train",
        text: "We launch, import existing records where possible, and train non-technical staff.",
      },
      {
        title: "Expand features",
        text: "We add modules such as parent access, transport, or library as the school adopts the system.",
      },
    ],
    reasons: [
      "Built for the real administrative load of Nepali schools.",
      "Easy for non-technical teachers and staff to use.",
      "Clear fee tracking that reduces missed dues.",
      "Better parent communication and transparency.",
      "Phased rollout that starts with the biggest time-savers.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "See how we build custom systems for institutions.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Pair the system with a credible school website.",
      },
      {
        href: "/mobile-app-development-company-in-nepal",
        label: "mobile app development company in Nepal",
        text: "Add a parent or student app on top of the system.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Automate fee reminders, notices, and reporting.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a school management system for your institution.",
      },
    ],
    faqs: [
      {
        question: "What does school management software include?",
        answer:
          "It typically includes admissions, student records, attendance, fee tracking, exams and results, parent communication, and reports, with role-based access for admin, teachers, and accounts.",
      },
      {
        question: "Can we start with just fees and attendance?",
        answer:
          "Yes. We recommend starting with the modules that save the most time, usually fees, attendance, and results, then expanding as staff adopt the system.",
      },
      {
        question: "Is it easy for non-technical teachers to use?",
        answer:
          "Yes. We design the system to be simple for non-technical staff, with clear screens for daily tasks like attendance and marks entry.",
      },
      {
        question: "Can parents get updates?",
        answer:
          "Yes. We can give parents visibility into attendance, fees, and academic updates through notices, statements, or an app.",
      },
      {
        question: "Can you migrate our existing records?",
        answer:
          "Where your data is available in a usable format, we can import existing student and fee records during setup.",
      },
    ],
  },
  hospitalSoftware: {
    slug: "hospital-management-software-in-nepal",
    path: "/hospital-management-software-in-nepal",
    metaTitle: "Hospital Management Software in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal builds hospital and clinic management software in Nepal for appointments, patient records, billing, pharmacy, and lab in one secure system.",
    ogTitle: "Hospital Management Software in Nepal | InfoBytes Nepal",
    ogDescription:
      "Manage appointments, patient records, billing, pharmacy, and lab with hospital and clinic management software built for Nepal.",
    keyword: "Hospital Management Software in Nepal",
    heroTitle: "Hospital & Clinic Management Software in Nepal",
    heroIntro:
      "InfoBytes Nepal builds hospital and clinic management software that connects appointments, patient records, billing, pharmacy, and lab in one secure system. Clinics and hospitals in Nepal reduce waiting, avoid lost records, and give patients a smoother experience.",
    overview: {
      title: "Connected care from appointment to billing",
      paragraphs: [
        "Clinics and hospitals handle sensitive, high-volume work where errors and delays have real consequences. When appointments, patient histories, billing, pharmacy, and lab results live in separate places, patients wait longer, records get lost, and staff repeat the same data entry. A connected system makes the whole journey smoother and safer.",
        "InfoBytes Nepal builds hospital and clinic management software that links registration, appointments, patient records, doctor visits, billing, pharmacy, and lab into one flow. Patient history is available when needed, billing reflects services accurately, and pharmacy and lab connect to the visit. Role-based access and careful handling keep sensitive data appropriately controlled.",
        "Whether you run a single clinic or a multi-department hospital, the goal is less waiting, fewer lost records, and clearer operations. For healthcare providers searching for hospital management software in Nepal, we start with the highest-impact modules — usually registration, appointments, and billing — and expand into pharmacy, lab, and reporting.",
      ],
    },
    problems: [
      "Patient records are paper-based and hard to retrieve during a visit.",
      "Appointments and queues are managed manually, increasing waiting times.",
      "Billing does not accurately reflect the services, tests, and medicines provided.",
      "Pharmacy and lab operate separately from the patient visit.",
      "There is no clear reporting on patients, revenue, or department load.",
    ],
    solutions: [
      "We centralize patient registration and history for quick, reliable access.",
      "We manage appointments and queues to reduce waiting and confusion.",
      "We connect billing to services, tests, and medicines for accurate charges.",
      "We link pharmacy and lab to the patient visit and records.",
      "We provide reporting on patients, revenue, and department activity.",
    ],
    features: [
      "Patient registration and records",
      "Appointment and queue management",
      "Doctor visit and history",
      "Billing and invoicing",
      "Pharmacy management",
      "Lab and test records",
      "Role-based access control",
      "Operational and revenue reports",
    ],
    process: [
      {
        title: "Understand the workflow",
        text: "We map patient flow from registration through consultation, billing, pharmacy, and lab.",
      },
      {
        title: "Prioritize modules",
        text: "We start with registration, appointments, and billing for the fastest impact.",
      },
      {
        title: "Build securely",
        text: "We build the system with role-based access and careful handling of sensitive data.",
      },
      {
        title: "Launch and train",
        text: "We launch carefully and train reception, doctors, billing, and pharmacy staff.",
      },
      {
        title: "Expand care flow",
        text: "We connect pharmacy, lab, and reporting, and refine as departments adopt it.",
      },
    ],
    reasons: [
      "Connected patient flow from appointment to billing.",
      "Reduced waiting and fewer lost records.",
      "Accurate billing tied to real services provided.",
      "Role-based access suited to sensitive healthcare data.",
      "Phased rollout starting with the highest-impact modules.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "See how we build secure custom systems.",
      },
      {
        href: "/mobile-app-development-company-in-nepal",
        label: "mobile app development company in Nepal",
        text: "Add patient or doctor apps on top of the system.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Pair the system with a credible clinic or hospital website.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Automate reminders, reporting, and repeated work.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a system for your clinic or hospital.",
      },
    ],
    faqs: [
      {
        question: "What does hospital management software include?",
        answer:
          "It typically includes patient registration and records, appointments, doctor visits, billing, pharmacy, and lab, connected in one system with role-based access and reporting.",
      },
      {
        question: "Is it suitable for a small clinic?",
        answer:
          "Yes. We can start a clinic with registration, appointments, and billing, then expand into pharmacy, lab, and reporting as needed.",
      },
      {
        question: "How is sensitive patient data handled?",
        answer:
          "We build with role-based access so staff see only what they need, and we handle sensitive data carefully as part of the system design.",
      },
      {
        question: "Can billing include tests and medicines?",
        answer:
          "Yes. Billing connects to services, lab tests, and pharmacy so invoices accurately reflect what the patient received.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your patient flow and the biggest pain points. We will propose a first module scope and a phased plan for your clinic or hospital.",
      },
    ],
  },
  wordpress: {
    slug: "wordpress-development-company-in-nepal",
    path: "/wordpress-development-company-in-nepal",
    metaTitle: "WordPress Development Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is a WordPress development company in Nepal building fast, secure, custom WordPress websites you can update yourself — with SEO built in.",
    ogTitle: "WordPress Development Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Fast, secure, custom WordPress websites you can update yourself, built with SEO foundations by InfoBytes Nepal.",
    keyword: "WordPress Development Company in Nepal",
    heroTitle: "WordPress Development Company in Nepal",
    heroIntro:
      "InfoBytes Nepal builds fast, secure, custom WordPress websites that you can update yourself. Instead of slow, bloated templates, you get a clean WordPress site with the flexibility of an easy content editor and the performance and SEO foundations to actually rank.",
    overview: {
      title: "The flexibility of WordPress, without the usual bloat",
      paragraphs: [
        "WordPress powers a huge share of the web because it is flexible and easy to manage. But many WordPress sites in Nepal are slow, insecure, and stuffed with unnecessary plugins that break over time. The platform is not the problem — how it is built is. A well-built WordPress site can be fast, secure, and genuinely easy for your team to update.",
        "InfoBytes Nepal builds WordPress websites with a focus on performance, security, and clean content management. We choose lightweight, reliable foundations, avoid plugin overload, and set up an editor your team can actually use to update pages, posts, and content without a developer. SEO basics — clean structure, fast loading, proper metadata — are built in from the start.",
        "Whether you need a business website, a blog, or a content-driven site you can grow, WordPress can be an excellent choice when built properly. For businesses searching for a WordPress development company in Nepal, we deliver the flexibility of WordPress with the speed, security, and SEO of a professionally engineered site.",
      ],
    },
    problems: [
      "Many WordPress sites are slow and bloated with unnecessary plugins.",
      "Poorly built WordPress sites are insecure and get hacked or break on updates.",
      "Owners are told they can edit content but the setup is confusing in practice.",
      "Themes look generic and do not match the brand or convert well.",
      "SEO basics are ignored, so the site never ranks despite the content.",
    ],
    solutions: [
      "We build lightweight, fast WordPress sites and avoid plugin overload.",
      "We harden security and set up safe, reliable update practices.",
      "We configure a clean editor your team can genuinely use without a developer.",
      "We design custom, brand-consistent WordPress themes, not generic templates.",
      "We build in SEO foundations: structure, speed, metadata, and clean content.",
    ],
    features: [
      "Custom WordPress theme development",
      "Fast, lightweight builds",
      "Security hardening",
      "Easy content editing setup",
      "Blog and content structure",
      "SEO-ready foundations",
      "Plugin selection and cleanup",
      "Migration from old WordPress sites",
    ],
    process: [
      {
        title: "Plan the site",
        text: "We map your pages, content, and how your team will update the site day to day.",
      },
      {
        title: "Design the theme",
        text: "We design a clean, brand-consistent theme rather than a generic template.",
      },
      {
        title: "Build cleanly",
        text: "We build a fast, secure WordPress site with only the plugins you actually need.",
      },
      {
        title: "Set up editing",
        text: "We configure a simple editor and train your team to manage content confidently.",
      },
      {
        title: "Optimize and support",
        text: "We tune performance and SEO, and support updates and improvements over time.",
      },
    ],
    reasons: [
      "WordPress built for speed and security, not plugin bloat.",
      "Custom themes that match your brand and convert.",
      "An editor your team can actually use.",
      "SEO foundations built in from the start.",
      "Migration and cleanup of existing WordPress sites.",
    ],
    related: [
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Compare WordPress with fully custom website development.",
      },
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "Get a strong, custom design for your WordPress site.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Build search visibility on top of a clean WordPress base.",
      },
      {
        href: "/ecommerce-website-development-nepal",
        label: "ecommerce website development in Nepal",
        text: "Explore WooCommerce and online store options.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a new WordPress site or a rebuild.",
      },
    ],
    faqs: [
      {
        question: "Is WordPress a good choice for my website?",
        answer:
          "WordPress is an excellent choice for business sites, blogs, and content-driven websites when built properly. We build fast, secure, custom WordPress sites you can update yourself.",
      },
      {
        question: "Will my WordPress site be slow?",
        answer:
          "Not when built well. We use lightweight foundations, avoid plugin overload, and optimize performance, so the site loads fast for users and search engines.",
      },
      {
        question: "Can I update the content myself?",
        answer:
          "Yes. We configure a clean editor and train your team so you can update pages, posts, and content without needing a developer.",
      },
      {
        question: "Can you fix or rebuild my existing WordPress site?",
        answer:
          "Yes. We can clean up, secure, speed up, or fully rebuild an existing WordPress site, and migrate your content safely.",
      },
      {
        question: "Do you build WooCommerce online stores?",
        answer:
          "Yes. We can build WooCommerce stores on WordPress, or recommend a different approach if it fits your ecommerce needs better.",
      },
    ],
  },
  aiDevelopment: {
    slug: "ai-development-company-in-nepal",
    path: "/ai-development-company-in-nepal",
    metaTitle: "AI Development Company in Nepal | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is an AI development company in Nepal building practical AI chatbots, automation, and integrations that solve real business problems.",
    ogTitle: "AI Development Company in Nepal | InfoBytes Nepal",
    ogDescription:
      "Practical AI chatbots, automation, and integrations that solve real business problems — built by InfoBytes Nepal.",
    keyword: "AI Development Company in Nepal",
    heroTitle: "AI Development Company in Nepal",
    heroIntro:
      "InfoBytes Nepal helps businesses use AI in practical, grounded ways — chatbots that actually help customers, automation that removes repetitive work, and AI features built into your software. We focus on real problems and measurable value, not hype.",
    overview: {
      title: "Practical AI that solves real business problems",
      paragraphs: [
        "AI is genuinely useful when it removes real friction: answering common customer questions, drafting and summarizing content, extracting data from documents, or automating repetitive decisions. It becomes a waste when it is added for hype without a clear problem to solve. The difference is planning and grounding it in a real workflow.",
        "InfoBytes Nepal helps businesses in Nepal apply AI where it actually pays off. That might be a support chatbot trained on your information, automation that classifies and routes incoming inquiries, document and data extraction, or AI features embedded inside your existing software. We connect proven AI models to your data and workflow through clean, reliable engineering.",
        "Our approach is honest and outcome-first: identify a problem worth solving, prototype quickly, measure whether it helps, and only then expand. For businesses searching for an AI development company in Nepal, the value is practical implementation and clear judgement about where AI belongs — and where it does not.",
      ],
    },
    problems: [
      "Teams answer the same customer questions repeatedly, consuming staff time.",
      "Useful information is buried in documents, chats, and files that are slow to search.",
      "Repetitive classification, sorting, and routing work eats hours every week.",
      "AI is adopted for hype without a clear problem, wasting money and trust.",
      "Businesses are unsure which AI use cases are realistic and worth building.",
    ],
    solutions: [
      "We build support chatbots and assistants grounded in your own information.",
      "We automate repetitive classification, routing, and drafting tasks.",
      "We add document and data extraction to turn files into usable data.",
      "We embed practical AI features into your existing websites and software.",
      "We help you identify which AI use cases are realistic and worth the investment.",
    ],
    features: [
      "AI chatbots and assistants",
      "Workflow and inquiry automation",
      "Document and data extraction",
      "Content drafting and summarizing tools",
      "AI features inside your software",
      "Integration with proven AI models",
      "Prototyping and evaluation",
      "Responsible, grounded implementation",
    ],
    process: [
      {
        title: "Find the use case",
        text: "We identify a real problem where AI can save time or improve service, and define success.",
      },
      {
        title: "Prototype fast",
        text: "We build a focused prototype quickly so value can be tested before heavy investment.",
      },
      {
        title: "Ground in your data",
        text: "We connect the AI to your information and workflow for accurate, relevant results.",
      },
      {
        title: "Integrate cleanly",
        text: "We embed the solution into your website, software, or operations reliably.",
      },
      {
        title: "Measure and expand",
        text: "We measure real impact and expand only where AI genuinely helps.",
      },
    ],
    reasons: [
      "Honest, outcome-first approach instead of AI hype.",
      "Practical use cases grounded in your real workflow and data.",
      "Fast prototyping so value is proven before scaling.",
      "AI engineered into reliable, maintainable software.",
      "Clear judgement on where AI belongs and where it does not.",
    ],
    related: [
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Embed AI features into custom software and workflows.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation software Nepal",
        text: "Combine AI with automation to remove repetitive work.",
      },
      {
        href: "/crm-software-in-nepal",
        label: "CRM software in Nepal",
        text: "Add AI assistance to lead handling and follow-up.",
      },
      {
        href: "/mobile-app-development-company-in-nepal",
        label: "mobile app development company in Nepal",
        text: "Bring AI features into mobile experiences.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a practical AI use case for your business.",
      },
    ],
    faqs: [
      {
        question: "What kind of AI solutions do you build?",
        answer:
          "We build practical AI solutions such as support chatbots grounded in your information, inquiry automation, document and data extraction, and AI features embedded inside your software.",
      },
      {
        question: "Is AI worth it for a small business in Nepal?",
        answer:
          "It can be, when it targets a real problem such as repetitive questions or manual sorting. We help identify realistic use cases and prototype quickly before major investment.",
      },
      {
        question: "Can you add an AI chatbot to our website?",
        answer:
          "Yes. We can build a chatbot grounded in your business information so it gives accurate, relevant answers and reduces repetitive support work.",
      },
      {
        question: "Do you use existing AI models or build from scratch?",
        answer:
          "We typically integrate proven, reliable AI models and connect them to your data and workflow through clean engineering, which is faster and more dependable than building models from scratch.",
      },
      {
        question: "How do we start with AI?",
        answer:
          "Share a task that is repetitive or time-consuming. We will assess whether AI fits, prototype a focused solution, and measure whether it genuinely helps before expanding.",
      },
    ],
  },
  webDesignKathmandu: {
    slug: "web-design-company-in-kathmandu",
    path: "/web-design-company-in-kathmandu",
    metaTitle: "Web Design Company in Kathmandu | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is a web design company in Kathmandu creating fast, modern, mobile-first websites for valley businesses — with in-person collaboration.",
    ogTitle: "Web Design Company in Kathmandu | InfoBytes Nepal",
    ogDescription:
      "Modern, mobile-first website design for Kathmandu businesses, with in-person collaboration from a valley-based team.",
    keyword: "Web Design Company in Kathmandu",
    heroTitle: "Web Design Company in Kathmandu",
    heroIntro:
      "InfoBytes Nepal designs modern, credible, mobile-first websites for businesses across Kathmandu. As a valley-based team, we can meet in person, understand your market, and craft a website that makes your business stand out in a crowded city.",
    overview: {
      title: "Website design that stands out in a crowded Kathmandu market",
      paragraphs: [
        "Kathmandu is the most competitive market in Nepal. Whether you run a shop in New Road, a consultancy in Putalisadak, a restaurant in Thamel, or a corporate office in Durbar Marg, customers judge your credibility online within seconds. A dated or cluttered website quietly hands business to competitors who simply look more professional.",
        "InfoBytes Nepal designs websites that earn trust fast — clean layouts, strong visual hierarchy, mobile-first structure, and clear calls to action. Because we are based in the Kathmandu valley, we can meet you in person, understand your specific audience, and design around how your customers actually search and decide, rather than working blindly from a brief.",
        "From a single-page landing site to a full business website, our focus is design that looks premium and converts visitors into inquiries. For businesses searching for a web design company in Kathmandu, working with a local team means faster collaboration and a website tuned to the valley market.",
      ],
    },
    problems: [
      "Kathmandu markets are crowded, so a dated website makes a strong business look weak.",
      "Many local websites break or feel cramped on mobile, where most customers browse.",
      "Cluttered layouts bury the message and the call to action.",
      "Generic templates make different businesses look the same and forgettable.",
      "Remote-only designers miss the local context and slow down decisions.",
    ],
    solutions: [
      "We design clean, premium layouts that make your Kathmandu business look credible.",
      "We build mobile-first designs that stay clear and elegant on every screen.",
      "We use strong visual hierarchy so the message and action are always obvious.",
      "We design custom, brand-consistent visuals rather than generic templates.",
      "We collaborate in person as a valley-based team, keeping decisions fast.",
    ],
    features: [
      "Modern, custom UI design",
      "Mobile-first responsive layouts",
      "Conversion-focused structure",
      "Brand-consistent visuals",
      "Landing page design",
      "In-person collaboration in the valley",
      "Design-to-development handoff",
      "SEO-ready page structure",
    ],
    process: [
      {
        title: "Meet and align",
        text: "We meet you in Kathmandu, review your brand, audience, and goals for the website.",
      },
      {
        title: "Structure the pages",
        text: "We plan each page around content priority, user flow, and clear calls to action.",
      },
      {
        title: "Design the visuals",
        text: "We craft polished, on-brand, mobile-first designs that build trust quickly.",
      },
      {
        title: "Review together",
        text: "We refine the design with your feedback for consistency and usability.",
      },
      {
        title: "Prepare for build",
        text: "We hand the design to development so the final site matches the approved visuals.",
      },
    ],
    reasons: [
      "A valley-based team for in-person, fast collaboration.",
      "Design tuned to the competitive Kathmandu market.",
      "Mobile-first for how customers actually browse.",
      "Custom visuals, not generic templates.",
      "Design and development under one roof.",
    ],
    related: [
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "See our national web design approach and standards.",
      },
      {
        href: "/it-company-in-kathmandu",
        label: "IT company in Kathmandu",
        text: "Explore our full range of services for Kathmandu businesses.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Turn the design into a fast, production-ready website.",
      },
      {
        href: "/digital-marketing-agency-in-kathmandu",
        label: "digital marketing agency in Kathmandu",
        text: "Drive traffic to your new Kathmandu website.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss a website design for your Kathmandu business.",
      },
    ],
    faqs: [
      {
        question: "Do you meet clients in person in Kathmandu?",
        answer:
          "Yes. InfoBytes Nepal is based in the Kathmandu valley, so we can meet businesses in person across Kathmandu for briefings, reviews, and collaboration.",
      },
      {
        question: "Will my website design be mobile-friendly?",
        answer:
          "Yes. Every design is mobile-first, because most customers in Kathmandu browse from phones and search engines prioritize mobile experience.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We can review your current website, identify design and usability issues, and create a cleaner, more modern, brand-consistent design.",
      },
      {
        question: "Do you also build the website, not just design it?",
        answer:
          "Yes. We handle both design and development, so your approved design becomes a fast, responsive, production-ready website.",
      },
      {
        question: "How do we start?",
        answer:
          "Share your business, current website if any, and goals. We can meet in Kathmandu or online, then plan a design direction and scope.",
      },
    ],
  },
  digitalMarketingKathmandu: {
    slug: "digital-marketing-agency-in-kathmandu",
    path: "/digital-marketing-agency-in-kathmandu",
    metaTitle: "Digital Marketing Agency in Kathmandu | InfoBytes Nepal",
    metaDescription:
      "InfoBytes Nepal is a digital marketing agency in Kathmandu offering SEO, social media, and campaigns connected to real inquiries and lead follow-up.",
    ogTitle: "Digital Marketing Agency in Kathmandu | InfoBytes Nepal",
    ogDescription:
      "SEO, social media, and campaigns that turn attention into inquiries and tracked follow-up, for Kathmandu businesses.",
    keyword: "Digital Marketing Agency in Kathmandu",
    heroTitle: "Digital Marketing Agency in Kathmandu",
    heroIntro:
      "InfoBytes Nepal helps Kathmandu businesses turn attention into real inquiries. We connect SEO, social media, and campaigns with a strong website and proper lead follow-up, so your marketing budget produces calls and customers, not just likes.",
    overview: {
      title: "Marketing that produces inquiries, not just impressions",
      paragraphs: [
        "Kathmandu businesses spend heavily on Facebook, Instagram, and boosted posts, yet many struggle to connect that spend to actual customers. The reason is usually a weak foundation: an unclear website, no SEO, and no system to capture and follow up on leads. Attention arrives, then leaks away before it becomes a sale.",
        "InfoBytes Nepal approaches digital marketing as a connected system for Kathmandu businesses. We strengthen your website and service pages, build SEO so people find you on Google, run focused social and campaign activity with clear messages, and connect inquiries to lead tracking so nothing is lost. Because we also build websites and software, the whole funnel works together.",
        "The goal is measurable: more qualified inquiries and a clear view of what is working. For businesses searching for a digital marketing agency in Kathmandu, the advantage is a local team that ties marketing to a strong website and real follow-up, instead of running disconnected campaigns.",
      ],
    },
    problems: [
      "Boosted posts and ads create likes but few real inquiries or sales.",
      "The website is weak, so paid traffic arrives and then leaves.",
      "There is no SEO, so the business is invisible on Google searches.",
      "Leads are not captured or followed up, so marketing spend leaks away.",
      "Reports focus on vanity metrics instead of inquiries and revenue.",
    ],
    solutions: [
      "We strengthen the website and service pages so traffic converts.",
      "We build SEO so Kathmandu customers find you on Google, not just social.",
      "We run focused social and campaigns with clear, action-driven messages.",
      "We connect inquiries to lead tracking so follow-up is organized.",
      "We report on inquiries and outcomes, not just likes and reach.",
    ],
    features: [
      "Local SEO for Kathmandu searches",
      "Social media strategy",
      "Campaign planning and management",
      "Landing page and website improvements",
      "Google Business Profile support",
      "Lead capture and tracking",
      "Content and creative direction",
      "Outcome-focused reporting",
    ],
    process: [
      {
        title: "Audit the funnel",
        text: "We review your website, SEO, social presence, and how inquiries are currently handled.",
      },
      {
        title: "Fix the foundation",
        text: "We strengthen the website, service pages, and lead capture so traffic can convert.",
      },
      {
        title: "Drive visibility",
        text: "We build SEO and run focused social and campaigns to reach Kathmandu customers.",
      },
      {
        title: "Capture and follow up",
        text: "We connect inquiries to tracking so leads are organized and followed up.",
      },
      {
        title: "Measure and improve",
        text: "We report on inquiries and outcomes and refine what actually works.",
      },
    ],
    reasons: [
      "A connected funnel: website, SEO, campaigns, and follow-up together.",
      "Focus on inquiries and revenue, not vanity metrics.",
      "A Kathmandu-based team for close collaboration.",
      "Lead tracking so marketing spend is measurable.",
      "Website and software skills that strengthen the whole funnel.",
    ],
    related: [
      {
        href: "/digital-marketing-company-in-nepal",
        label: "digital marketing company in Nepal",
        text: "See our national digital marketing approach.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Build organic visibility as a marketing foundation.",
      },
      {
        href: "/it-company-in-kathmandu",
        label: "IT company in Kathmandu",
        text: "Explore our full range of services for Kathmandu businesses.",
      },
      {
        href: "/crm-software-in-nepal",
        label: "CRM software in Nepal",
        text: "Track and follow up the leads your marketing generates.",
      },
      {
        href: "/contact",
        label: "contact InfoBytes Nepal",
        text: "Discuss marketing that brings real inquiries in Kathmandu.",
      },
    ],
    faqs: [
      {
        question: "What does a digital marketing agency in Kathmandu do?",
        answer:
          "It helps businesses get found and chosen online through SEO, social media, and campaigns. InfoBytes Nepal also connects this to a strong website and lead follow-up so marketing produces real inquiries.",
      },
      {
        question: "Why do my boosted posts not bring customers?",
        answer:
          "Usually because the website is weak, there is no SEO, or leads are not captured and followed up. We fix the whole funnel so attention converts into inquiries.",
      },
      {
        question: "Do you do SEO as well as social media?",
        answer:
          "Yes. We combine SEO, social media, and campaigns, because organic search and social together create a stronger, more durable marketing foundation.",
      },
      {
        question: "Can you track the leads from marketing?",
        answer:
          "Yes. We connect inquiries to lead tracking so you can see where leads come from and how follow-up is going, making spend measurable.",
      },
      {
        question: "How do we get started?",
        answer:
          "Share your current marketing, website, and goals. We will audit the funnel and propose a focused plan to bring more inquiries for your Kathmandu business.",
      },
    ],
  },
} satisfies Record<string, SeoLandingPage>;

export const seoLandingPageList = Object.values(seoLandingPages);
