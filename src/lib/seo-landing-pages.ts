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
} satisfies Record<string, SeoLandingPage>;

export const seoLandingPageList = Object.values(seoLandingPages);
