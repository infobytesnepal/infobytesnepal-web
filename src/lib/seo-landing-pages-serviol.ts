import type { SeoLandingPage } from "./seo-landing-pages";

/**
 * The Serviol cluster: service management, field service, AMC, and complaints.
 *
 * These eight pages exist to win one commercial topic rather than eight keywords.
 * They share a product — Serviol — and deliberately do not share their copy:
 * a service CRM buyer, a field service manager, an AMC desk, a dealership's
 * service head, and someone comparing systems are different readers with
 * different first questions, and a page that answers a different reader's
 * question is a page an answer engine has no reason to quote.
 *
 * Read in the order a buyer meets them:
 *
 *   serviceManagementSoftware   — the Nepal market pillar for the category.
 *   serviceCrm                  — the record side: customers, machines, cover.
 *   fieldServiceManagement      — the delivery side: planners, dispatch, FSM app.
 *   serviceDepartmentManagement — service as a measurable unit inside a dealer.
 *   amcManagement               — contracts, schedules, renewals, profitability.
 *   complaintManagement         — capture, ownership, deadline, closure.
 *   bestServiceCrm              — which one to buy, Nepal scoped.
 *   bestServiceManagementSystem — will the rollout survive? Not Nepal scoped.
 *
 * Two rules were followed while writing them, both taken from what actually
 * gets cited rather than from keyword habit:
 *
 * 1. Every FAQ answers in its first sentence. An answer engine lifts a sentence,
 *    not a section, so an answer that opens with throat-clearing is an answer
 *    that loses the citation to whoever got to the point first.
 * 2. Nothing claims a number we cannot stand behind. The price ranges here are
 *    the same ones the FAQ and the cost pages already publish; invented
 *    precision is the fastest way to be quoted wrongly and then corrected
 *    publicly.
 *
 * Kept in their own file because the main `seo-landing-pages.ts` is already
 * ~3,900 lines, and a cluster that will keep growing is easier to reason about
 * when it is not interleaved with unrelated pages. It merges into
 * `allSeoLandingPages` exactly like `seo-landing-pages-extra.ts` does, so every
 * page here is CMS-editable, sitemapped, and listed in llms.txt automatically.
 */
export const serviolSeoLandingPages = {
  serviceCrm: {
    slug: "service-crm-in-nepal",
    path: "/service-crm-in-nepal",
    metaTitle: "Service CRM in Nepal | Serviol by Infobytes Nepal",
    metaDescription:
      "A service CRM for Nepali businesses that sell equipment and support it afterwards. Track customers, installed machines, contracts, complaints, and every visit in one system.",
    ogTitle: "Service CRM in Nepal, built for after the sale",
    ogDescription:
      "Serviol keeps customers, installed equipment, contracts, complaints, and engineer visits in one place, so service history survives staff turnover.",
    keyword: "Service CRM in Nepal",
    heroTitle: "Service CRM in Nepal",
    heroIntro:
      "A sales CRM tracks what you are trying to sell. A service CRM tracks what you already sold and still owe support on. Serviol is the second kind, built by Infobytes Nepal for companies whose customer relationship really begins on the day of installation.",
    overview: {
      title: "What a service CRM does that a sales CRM does not",
      paragraphs: [
        "Most CRM software is built around a pipeline: a lead arrives, moves through stages, and either closes or dies. That model fits a business whose work ends at the sale. It fits badly if you sell machines, systems, or equipment that then need installation, warranty cover, servicing, spare parts, and an engineer on site when something stops working.",
        "A service CRM is organised around the customer and the thing you sold them rather than around a deal. Each customer has installed units. Each unit has a serial number, an installation date, a warranty or contract that expires, a service history, and a next scheduled visit. When a complaint comes in, whoever answers the phone can see all of it before they say anything.",
        "That difference matters most when somebody leaves. In a lot of Nepali service businesses the real record of what was done for a customer lives in one senior technician's head and his phone. Serviol exists so that record lives in a system instead: the same history is there for whoever picks up the job next, including the person who joined last month.",
      ],
    },
    problems: [
      "Complaints arrive by phone, Viber, and Facebook message, and the only record is whichever staff member happened to take the call.",
      "Nobody can say with certainty whether a specific machine is still under warranty without digging through paper invoices.",
      "The same customer explains their problem three times because the person who took the call is not the person who arrives.",
      "Service history sits in a senior technician's memory, and walks out of the building when he does.",
      "Annual contracts lapse quietly because no system was watching the renewal date.",
      "Management cannot answer how many complaints are open right now, or how many are older than a week.",
    ],
    solutions: [
      "Every customer record carries their installed units, serial numbers, purchase dates, and contract status on one screen.",
      "Complaints are logged as tickets with an owner and a due date, whichever channel they arrived through.",
      "Warranty and contract status is shown at the moment a ticket is raised, so nobody guesses whether a job is chargeable.",
      "Full service history stays attached to the machine rather than to the person who serviced it.",
      "Contract expiry dates drive renewal reminders instead of relying on somebody remembering.",
      "Managers get open, overdue, and closed counts without asking three people for an update.",
    ],
    features: [
      "Customer and site records",
      "Installed equipment with serial numbers",
      "Warranty and contract tracking",
      "Complaint and ticket management",
      "Engineer assignment and scheduling",
      "Full service history per machine",
      "Spare parts used per job",
      "Renewal and follow up reminders",
      "Role based access for office and field staff",
      "Operational dashboards and reports",
    ],
    process: [
      {
        title: "Map what you actually service",
        text: "We start with your customer list, the equipment you install, and the contracts you sell. What Serviol needs to model is your service obligation, and that differs between a lift company, a medical equipment supplier, and an IT hardware dealer.",
      },
      {
        title: "Import the customer and equipment history",
        text: "Existing customers, installed units, and live contracts are brought in from whatever they live in now, usually spreadsheets and invoice files, so the system is useful on day one rather than after months of data entry.",
      },
      {
        title: "Set up the workflow",
        text: "Complaint types, priorities, assignment rules, and the stages a job passes through are configured to match how your team already works, rather than forcing the team onto a foreign process.",
      },
      {
        title: "Train the office and the field separately",
        text: "The person logging complaints and the technician closing them use the system very differently. They are trained separately, on the screens each of them will actually touch.",
      },
      {
        title: "Go live and adjust",
        text: "We start with one branch or one product line, watch a few weeks of real use, and adjust before rolling it wider. Reports are tuned once there is real data to report on.",
      },
    ],
    reasons: [
      "Built in Nepal for how service businesses here actually operate, including intermittent connectivity and staff who work primarily from a phone.",
      "Support in your timezone, in Nepali or English, from the team that built the system.",
      "A product rather than a fresh build, so implementation is measured in weeks rather than quarters.",
      "Configurable to your workflow without a full custom development project.",
      "Your data stays exportable. There is no lock in by design.",
    ],
    related: [
      {
        href: "/products/serviol",
        label: "Serviol",
        text: "The product itself: features, screens, and how it is deployed.",
      },
      {
        href: "/field-service-management-software-in-nepal",
        label: "field service management software in Nepal",
        text: "The same system viewed from the technician and scheduling side.",
      },
      {
        href: "/amc-management-software-nepal",
        label: "AMC management software",
        text: "For businesses whose service revenue is mostly annual maintenance contracts.",
      },
      {
        href: "/complaint-management-system-nepal",
        label: "complaint management system",
        text: "If your first priority is simply capturing complaints properly.",
      },
      {
        href: "/best-service-crm-in-nepal",
        label: "choosing the best service CRM in Nepal",
        text: "Service CRM against sales CRM against helpdesk, and the five requests that settle a shortlist.",
      },
      {
        href: "/service-management-software-in-nepal",
        label: "service management software in Nepal",
        text: "The wider category, and which industries in Nepal buy it.",
      },
      {
        href: "/crm-software-in-nepal",
        label: "CRM software in Nepal",
        text: "If your need is sales pipeline rather than service delivery.",
      },
    ],
    faqs: [
      {
        question: "What is a service CRM?",
        answer:
          "A service CRM is customer relationship software organised around the equipment and contracts a customer already has, rather than around a sales pipeline. It stores installed units, warranty and contract status, complaint history, and every service visit, so any staff member can see a customer's full support history before responding to them.",
      },
      {
        question: "How is a service CRM different from a normal CRM?",
        answer:
          "A normal CRM is built for winning deals and organises everything around opportunities and stages. A service CRM is built for honouring commitments after the sale and organises everything around customers, installed machines, contracts, and tickets. Businesses that both sell and service usually need the second, and often run the first alongside it.",
      },
      {
        question: "Is there a service CRM made in Nepal?",
        answer:
          "Yes. Serviol is a service CRM and field service management system built and supported in Nepal by Infobytes Nepal. It is used by teams that install and maintain equipment, and it is designed for local realities such as technicians working from ordinary Android phones on mobile data.",
      },
      {
        question: "How much does a service CRM cost in Nepal?",
        answer:
          "Adopting Serviol is quoted by team size and the modules you need, and it is substantially cheaper than commissioning custom software, which typically starts around NPR 200,000 for a focused first version. Tell us your user count and service workflow and we will send a written quotation at no charge.",
      },
      {
        question: "Can it work when technicians have no internet?",
        answer:
          "Yes. Serviol is built so field staff can keep working through a dropped signal, with job data syncing once the connection returns. This matters in Nepal, where a technician may be in a basement plant room or outside the valley with patchy coverage.",
      },
      {
        question: "Can we move our existing customer and machine records in?",
        answer:
          "Yes. Existing customers, installed equipment, and live contracts are imported during setup, usually from spreadsheets or your billing system, so the team starts with real history rather than an empty database.",
      },
      {
        question: "What is the best service CRM in Nepal?",
        answer:
          "The best service CRM in Nepal is the one that holds installed equipment by serial number, shows coverage before anyone decides whether a visit is chargeable, and keeps its field app working on a mid-range Android phone with no signal. Serviol is built for that shape; the five demo requests that test any vendor against it, including us, are set out on our guide to choosing a service CRM.",
      },
    ],
  },

  fieldServiceManagement: {
    slug: "field-service-management-software-in-nepal",
    path: "/field-service-management-software-in-nepal",
    metaTitle: "Field Service Management Software in Nepal | FSM System | Serviol",
    metaDescription:
      "A field service management system built in Nepal. Serviol is FSM software for assigning jobs, planning technician days, capturing proof of work, tracking attendance and spare parts, and keeping the field app working when the signal drops.",
    ogTitle: "Field Service Management System in Nepal | Serviol",
    ogDescription:
      "Serviol is an FSM system built in Nepal: day planners, job assignment, an offline capable field app, attendance, parts, and complete job history.",
    keyword: "Field Service Management Software in Nepal",
    heroTitle: "Field Service Management Software in Nepal",
    heroIntro:
      "A field service management system — FSM for short — is the software that decides which technician goes where, what they do when they arrive, and what proof comes back. Serviol is an FSM system built by Infobytes Nepal for teams whose work happens on customer sites rather than at a desk, on the ordinary Android phones field staff in Nepal actually carry.",
    overview: {
      title: "Running a field team without a system, and what it costs",
      paragraphs: [
        "A field team without FSM software runs on phone calls. A supervisor allocates the day verbally each morning, technicians report back when they remember, and the record of what happened is a mix of Viber messages, a paper job card, and somebody's recollection at the end of the week. It works while the team is small enough that one person can hold it all.",
        "It stops working at around eight to ten technicians. Jobs get double assigned or missed entirely, nobody can tell a customer when an engineer will actually arrive, and billing lags because the paperwork proving the work was done has not come back yet. The cost is not dramatic — it is a steady leak of unbilled visits, repeat trips, and customers who were not told anything.",
        "Field service management software replaces the phone calls with a shared plan. Each technician has a day, each job has a status the office can see, and each completed visit carries evidence: what was done, what parts were used, how long it took, and a customer signature or photo. Serviol does this on ordinary Android phones, which is what field staff in Nepal are actually carrying.",
      ],
    },
    problems: [
      "The day is allocated by phone each morning, so there is no plan anybody can look at.",
      "A customer asks when the engineer will arrive and nobody in the office can answer.",
      "Two technicians are sent to the same site, or a job is missed entirely.",
      "Job cards come back on paper days later, so invoicing waits for paperwork.",
      "There is no proof of what was done, which turns a billing dispute into an argument.",
      "Signal drops in a basement or outside the valley and the app becomes useless.",
      "Nobody can measure how long jobs actually take, so scheduling stays guesswork.",
    ],
    solutions: [
      "A visible day planner per technician that the office and the field see the same way.",
      "Jobs assigned with a site, a contact, a priority, and an expected window.",
      "Live job status, so the office can answer a customer without ringing the engineer.",
      "Completion captured on the phone at the site: work done, parts used, time on job, photos, signature.",
      "An app that keeps functioning without a connection and syncs when signal returns.",
      "Attendance and check in and check out recorded alongside the job record.",
      "Real durations per job type, so tomorrow's plan is based on evidence rather than optimism.",
    ],
    features: [
      "Technician day planner",
      "Job assignment and reassignment",
      "Offline capable field app",
      "Photo and signature capture",
      "Spare parts consumption per job",
      "Attendance and check in / check out",
      "Complete job and site history",
      "Priority and SLA handling",
      "Ticket intake from the office",
      "Operational dashboards for supervisors",
      "Route and territory aware assignment",
      "Job durations measured per job type",
      "Role based access",
    ],
    process: [
      {
        title: "Watch a normal day first",
        text: "Before configuring anything we follow how work is currently allocated, done, and reported. FSM projects fail when they encode a process nobody actually follows, and that is only visible by looking at a real day.",
      },
      {
        title: "Define jobs, priorities, and proof",
        text: "We agree what a job is, what its stages are, which priorities exist, and — most importantly — what a technician must capture before a job can be marked complete. That last decision is what makes the data worth having.",
      },
      {
        title: "Set up teams, sites, and skills",
        text: "Technicians, territories, customer sites, and which staff can handle which equipment are configured so assignment suggestions are useful rather than random.",
      },
      {
        title: "Pilot with one team",
        text: "One team runs on Serviol for a few weeks while the rest continue as before. This surfaces the practical problems — a screen that takes too long in the field, a required field nobody can fill on site — while they are still cheap to change.",
      },
      {
        title: "Roll out and tune the reports",
        text: "Once the field workflow is settled, the rest of the team moves across and reporting is tuned to the handful of numbers management will actually use.",
      },
    ],
    reasons: [
      "Designed for mid range Android phones on mobile data, not for a demo on office wifi.",
      "Keeps working when the connection drops, which is the single most common reason field staff abandon an app.",
      "Built and supported in Nepal, so questions are answered in your working hours.",
      "Adoption planned as a pilot rather than a switch over, because field teams reject systems that arrive all at once.",
      "Connects to the same customer and contract records as the service CRM side, so office and field share one history.",
    ],
    related: [
      {
        href: "/products/serviol",
        label: "Serviol",
        text: "Product detail, screens, and how deployment works.",
      },
      {
        href: "/service-crm-in-nepal",
        label: "service CRM in Nepal",
        text: "The office side: customers, equipment, contracts, and complaint history.",
      },
      {
        href: "/best-service-management-system",
        label: "how to choose a service management system",
        text: "The questions worth asking before you commit to any FSM product.",
      },
      {
        href: "/amc-management-software-nepal",
        label: "AMC management software in Nepal",
        text: "Preventive maintenance schedules and contract renewals.",
      },
      {
        href: "/service-management-software-in-nepal",
        label: "service management software in Nepal",
        text: "The wider category this sits inside, and which industries here buy it.",
      },
      {
        href: "/service-department-management-software-in-nepal",
        label: "service department management software in Nepal",
        text: "Technician utilisation, parts per job, and whether the department pays for itself.",
      },
      {
        href: "/contact",
        label: "talk to Infobytes Nepal",
        text: "Ask for a walkthrough with your own job types.",
      },
    ],
    faqs: [
      {
        question: "What is field service management (FSM) software?",
        answer:
          "Field service management software plans, assigns, and records work carried out at customer sites. It typically covers scheduling technicians, dispatching jobs, capturing proof of completion on a mobile app, tracking parts used, and reporting on job times and outstanding work.",
      },
      {
        question: "What is the difference between FSM and a service CRM?",
        answer:
          "FSM is the delivery side — who goes where, what they do, and what proof comes back. A service CRM is the record side — the customer, their installed equipment, contracts, and complete history. Serviol covers both, because a field job is worth little without the customer history behind it.",
      },
      {
        question: "Is there field service management software made in Nepal?",
        answer:
          "Yes. Serviol is FSM software built and supported in Nepal by Infobytes Nepal, designed for local conditions including ordinary Android phones, mobile data, and sites where the signal drops.",
      },
      {
        question: "Does the technician app work without internet?",
        answer:
          "Yes. Technicians can keep working through a lost connection and the job data syncs once signal returns. Offline capability is usually the deciding factor for field adoption in Nepal, because an app that freezes in a basement is an app that gets abandoned.",
      },
      {
        question: "How many technicians do you need before FSM software is worth it?",
        answer:
          "In our experience the tipping point is around eight to ten field staff. Below that a supervisor can usually hold the day in their head; above it, jobs start being double assigned or missed, and the cost of the missing system exceeds the cost of the system.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "A typical Serviol rollout runs a few weeks: mapping the workflow, importing customers and equipment, configuring job types, then a pilot with one team before the rest move across. It is deliberately staged rather than switched on everywhere at once.",
      },
      {
        question: "Is an FSM system the same as field service management software?",
        answer:
          "Yes. FSM system, FSM software, and field service management system all describe the same thing: software that schedules and dispatches work at customer sites and records what was done there. The wording varies by vendor and by industry, not by function, so compare what a product does rather than what it is called.",
      },
      {
        question: "Is there an FSM system made in Nepal?",
        answer:
          "Yes. Serviol is a field service management system built and supported in Nepal by Infobytes Nepal Pvt. Ltd., designed for mid-range Android phones on mobile data and for sites where the signal drops. Support is in your working hours, in Nepali or English, from the team that wrote it.",
      },
      {
        question: "What does an FSM system cost in Nepal?",
        answer:
          "Serviol is quoted by field team size and the modules you need rather than sold at a list price, and it is substantially cheaper than commissioning custom software, which in Nepal typically runs from around NPR 200,000 to NPR 600,000 for a focused first version. Tell us your technician count and how jobs reach them today and you get a written quotation at no charge.",
      },
    ],
  },

  bestServiceManagementSystem: {
    slug: "best-service-management-system",
    path: "/best-service-management-system",
    metaTitle: "Best Service Management System: How to Choose | Serviol",
    metaDescription:
      "A practical guide to choosing a service management system: the criteria that matter, the questions to ask any vendor, and the warning signs that a rollout will fail.",
    ogTitle: "How to choose the best service management system",
    ogDescription:
      "Ten criteria that separate a service management system your team will actually use from one that gets abandoned in month three.",
    keyword: "Best Service Management System",
    heroTitle: "Choosing the best service management system",
    heroIntro:
      "There is no single best service management system, and any vendor who tells you otherwise is selling rather than advising. There is a best one for your team size, your service model, and the phones your technicians carry. This page is the criteria we would use if we were buying, including where our own product is the wrong answer.",
    overview: {
      title: "What actually separates a good service management system from a bad one",
      paragraphs: [
        "Almost every service management system demos well. The feature lists are close to identical, and a scripted walkthrough on office wifi makes any of them look capable. The differences that decide whether a system is still in use a year later are mostly invisible in a demo.",
        "The first is field usability. A system is used by two very different populations — office staff on a desktop and technicians on a phone, often outdoors, often in a hurry, sometimes with no signal. Systems that were designed desktop first and given a mobile view afterwards tend to fail in the field, and once technicians stop entering data the whole system degrades into an expensive way of storing nothing.",
        "The second is whether the system models your service obligation correctly. A break-fix business, a business running annual maintenance contracts, and a business with SLA penalties need different things from the same software. A system that cannot represent your contracts will quietly push you back into spreadsheets for the part that actually earns money.",
        "The third is what happens after the sale. Implementation, data migration, training, and someone reachable when a question comes up in the first month decide more outcomes than the feature comparison does. This is where a local vendor has a structural advantage over a global one, and where an unsupported cheap system becomes the most expensive option available.",
      ],
    },
    problems: [
      "Every vendor's feature list looks the same, so comparison by feature tells you almost nothing.",
      "The demo runs on office wifi, which hides how the field app behaves on mobile data.",
      "Global products price in dollars per user per month, which compounds badly for a large field team in Nepal.",
      "Systems built for break-fix work cannot represent annual maintenance contracts, or the reverse.",
      "Support sits in a timezone where your urgent question is answered overnight, if at all.",
      "Nobody asks what happens to the data if the relationship ends, until it ends.",
    ],
    solutions: [
      "Judge field usability by testing the technician app on a real mid range phone on mobile data, not in the demo.",
      "Ask the vendor to model one of your real contracts and one real complaint before you commit.",
      "Compare total annual cost including users, modules, and support, not the headline per user price.",
      "Insist on knowing who implements it, who trains the team, and who answers the phone in month one.",
      "Confirm in writing that your data is exportable in a usable format.",
      "Start with a pilot on one team, so a wrong choice costs weeks instead of a year.",
    ],
    features: [
      "Works on ordinary Android phones",
      "Functions without a stable connection",
      "Models your contract type correctly",
      "Complete history per customer and machine",
      "Clear job assignment and status",
      "Proof of work capture",
      "Reporting management will actually use",
      "Role based permissions",
      "Local implementation and training",
      "Exportable data",
    ],
    process: [
      {
        title: "Write down your service model first",
        text: "Before looking at any product, write down what you actually sell after the sale: break-fix visits, annual contracts, warranty work, or SLA backed support. Most bad purchases come from evaluating software before deciding what it has to represent.",
      },
      {
        title: "Shortlist on fit, not on feature count",
        text: "Three products that can model your contracts beat ten that have longer feature lists. Anything that cannot represent your core commercial obligation is out, regardless of how good the rest of it looks.",
      },
      {
        title: "Test the field app in the field",
        text: "Put the technician app on a real mid range Android phone and use it somewhere with poor signal. This single test eliminates more candidates than any other, and it is the one most buyers skip.",
      },
      {
        title: "Ask the eight questions",
        text: "Who implements it, who migrates our data, who trains the team, what does support cost, what is the response time, what happens when we disagree, can we export everything, and can we speak to a customer you delivered for over a year ago.",
      },
      {
        title: "Pilot before you commit",
        text: "Run one team on the shortlisted system for a few weeks with real jobs. A pilot answers questions a procurement process cannot, and it makes a wrong choice recoverable.",
      },
    ],
    reasons: [
      "We would rather you chose correctly than chose us: a system abandoned in month three costs both sides more than a lost sale.",
      "Serviol is a strong fit for equipment and service businesses in Nepal with field teams, contracts, and complaint volume.",
      "It is a weaker fit if you need heavy manufacturing ERP, or if your service work is entirely remote with no site visits — and we will say so.",
      "Local implementation, training, and support in your timezone, from the people who built it.",
      "A pilot on one team is how we prefer to start, because it is how buyers find out the truth.",
    ],
    related: [
      {
        href: "/products/serviol",
        label: "Serviol",
        text: "Our own service management system, in detail.",
      },
      {
        href: "/service-crm-in-nepal",
        label: "service CRM in Nepal",
        text: "The customer, equipment, and contract side of service management.",
      },
      {
        href: "/field-service-management-software-in-nepal",
        label: "field service management software",
        text: "The scheduling, dispatch, and technician side.",
      },
      {
        href: "/complaint-management-system-nepal",
        label: "complaint management system in Nepal",
        text: "A narrower starting point if complaint capture is the immediate problem.",
      },
      {
        href: "/best-it-company-in-nepal",
        label: "how to judge an IT company in Nepal",
        text: "The same evaluative approach applied to choosing a vendor.",
      },
      {
        href: "/contact",
        label: "ask us directly",
        text: "Describe your service model and we will tell you honestly whether Serviol fits.",
      },
    ],
    faqs: [
      {
        question: "What is the best service management system?",
        answer:
          "There is no single best service management system; the right one depends on your service model, team size, and whether your technicians work on site. The best system for a business running annual maintenance contracts with a field team is one that models contracts properly and works offline on ordinary phones, which is what Serviol was built to do for companies in Nepal.",
      },
      {
        question: "What should I look for in a service management system?",
        answer:
          "Look for four things above the feature list: a technician app that works on a mid range phone with poor signal, a data model that can represent your actual contracts, local implementation and training, and a written guarantee that you can export your data. Feature lists across vendors are nearly identical; these four are where they genuinely differ.",
      },
      {
        question: "What is the difference between service management, FSM, and a service CRM?",
        answer:
          "Service management is the umbrella term. FSM (field service management) is the delivery half — scheduling, dispatch, and proof of work. A service CRM is the record half — customers, installed equipment, contracts, and history. A complete system covers both halves.",
      },
      {
        question: "How much does a service management system cost?",
        answer:
          "Global per-user subscriptions typically run several thousand rupees per user per month, which compounds quickly for a field team. A locally supported product such as Serviol is quoted by team size and modules, and custom-building an equivalent system starts around NPR 200,000 for a focused first version.",
      },
      {
        question: "How long does it take to implement?",
        answer:
          "A realistic rollout is a few weeks, not a day: mapping the service workflow, importing customer and equipment history, configuring job types and contracts, then piloting with one team before the rest move across. Any vendor promising same-week company-wide adoption is describing a login, not an implementation.",
      },
      {
        question: "Should we buy a product or build custom software?",
        answer:
          "Buy the product if your service workflow is reasonably standard, because it is faster and materially cheaper. Build custom if your process is genuinely unusual or is itself your competitive advantage. Most service businesses in Nepal are better served by adopting a product and configuring it than by commissioning a build.",
      },
    ],
  },

  amcManagement: {
    slug: "amc-management-software-nepal",
    path: "/amc-management-software-nepal",
    metaTitle: "AMC Management Software in Nepal | Serviol",
    metaDescription:
      "Track annual maintenance contracts, preventive service schedules, renewals, and contract profitability. AMC management software built and supported in Nepal.",
    ogTitle: "AMC Management Software in Nepal",
    ogDescription:
      "Stop losing AMC renewals to a forgotten date. Serviol tracks contracts, scheduled visits, renewals, and whether each contract is actually profitable.",
    keyword: "AMC Management Software in Nepal",
    heroTitle: "AMC management software in Nepal",
    heroIntro:
      "Annual maintenance contracts are the most predictable revenue a service business has, and the easiest to lose to an unnoticed date. Serviol tracks every contract, the visits it entitles the customer to, when it expires, and whether it is actually making money.",
    overview: {
      title: "Why AMC revenue leaks, and where",
      paragraphs: [
        "An AMC is a promise made in advance: a customer pays once for a year of cover, and your business owes them a defined number of preventive visits plus response when something breaks. Because the money arrives at the start and the obligation runs for twelve months, an AMC book is very easy to mismanage without anybody noticing for most of the year.",
        "Revenue leaks in three specific places. Renewals lapse because no system was watching the expiry date, and by the time somebody notices, the customer has been unattended for two months and is unwilling to renew. Scheduled preventive visits are skipped when the team is busy, which is invisible until a machine fails and the customer asks what exactly they paid for. And nobody knows which contracts are profitable, because the visits consumed against each contract were never counted.",
        "AMC management software fixes all three by treating the contract as an object that owns things: entitled visits, a schedule, a consumption count, an expiry date, and a margin. Serviol does this alongside the ticket and field service side, so a contract's real cost — the visits actually performed against it — is counted automatically rather than reconstructed at renewal time.",
      ],
    },
    problems: [
      "Contract expiry dates live in a spreadsheet nobody opens until a customer complains.",
      "Renewal conversations start after the contract has already lapsed, which is the worst possible moment.",
      "Preventive visits promised in the contract get skipped when the team is stretched, and nobody notices until something breaks.",
      "There is no count of how many visits a customer has consumed against their entitlement.",
      "Loss making contracts are only discovered by accident, if at all.",
      "A customer asks what their AMC actually covers and the answer takes a day to assemble.",
    ],
    solutions: [
      "Every contract carries its start, expiry, covered equipment, entitled visits, and terms in one record.",
      "Renewal reminders fire well before expiry, while the conversation is still easy.",
      "Preventive visits are scheduled from the contract and appear on the technician's planner automatically.",
      "Visits consumed against each contract are counted as they happen.",
      "Contract profitability is visible from real visit cost rather than estimated at year end.",
      "Coverage questions are answered from the screen while the customer is still on the phone.",
    ],
    features: [
      "Contract records with start and expiry",
      "Covered equipment per contract",
      "Entitled versus consumed visit counts",
      "Preventive maintenance scheduling",
      "Automatic renewal reminders",
      "Contract linked ticket handling",
      "Chargeable versus covered job flagging",
      "Contract profitability reporting",
      "Renewal pipeline view",
      "Customer coverage summary",
    ],
    process: [
      {
        title: "Model your contract types",
        text: "AMC, comprehensive AMC, warranty, and pay per call are commercially different promises. We define each one properly, because a system that treats them all the same cannot tell you whether a job is chargeable.",
      },
      {
        title: "Load the live contract book",
        text: "Existing contracts, their equipment, expiry dates, and remaining entitlements are imported so the renewal pipeline is accurate from the first week rather than building up over a year.",
      },
      {
        title: "Set the preventive schedule",
        text: "Visit frequency per contract type is configured so scheduled maintenance generates jobs automatically instead of depending on somebody remembering a quarterly cycle.",
      },
      {
        title: "Connect contracts to tickets",
        text: "When a complaint arrives, the system resolves whether that machine is covered, by which contract, and whether the visit is chargeable — before the engineer is dispatched.",
      },
      {
        title: "Review profitability after one cycle",
        text: "Once a few months of real visits have been counted against contracts, we review which contract types are actually profitable. That number usually changes how the next year is priced.",
      },
    ],
    reasons: [
      "Built around how AMC is actually sold in Nepal, including comprehensive and non comprehensive variants.",
      "Contract, ticket, and field visit live in one system, so consumption is counted rather than estimated.",
      "Renewal reminders are early enough to be a conversation rather than an apology.",
      "Local support, so a question during renewal season is answered the same day.",
      "Implemented in weeks as a configured product, not commissioned as a year long build.",
    ],
    related: [
      {
        href: "/products/serviol",
        label: "Serviol",
        text: "The full service management product this is part of.",
      },
      {
        href: "/service-crm-in-nepal",
        label: "service CRM in Nepal",
        text: "Customers, installed equipment, and complete service history.",
      },
      {
        href: "/field-service-management-software-in-nepal",
        label: "field service management software in Nepal",
        text: "Scheduling and dispatching the visits a contract entitles.",
      },
      {
        href: "/best-service-management-system",
        label: "choosing a service management system",
        text: "How to evaluate any vendor, including us.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation in Nepal",
        text: "Where contract handling fits into wider operational automation.",
      },
      {
        href: "/contact",
        label: "request a walkthrough",
        text: "Bring one of your real contracts and we will model it.",
      },
    ],
    faqs: [
      {
        question: "What is AMC management software?",
        answer:
          "AMC management software tracks annual maintenance contracts end to end: which equipment is covered, how many preventive visits the customer is entitled to, how many have been used, when the contract expires, and whether a given service call is covered or chargeable. It exists so contract obligations and renewals are driven by the system rather than by memory.",
      },
      {
        question: "How does AMC software stop renewals being missed?",
        answer:
          "It watches expiry dates and raises renewal reminders in advance, so the conversation happens while the contract is still live. Missed renewals almost always come from noticing too late, not from the customer refusing.",
      },
      {
        question: "Can it tell us whether a contract is profitable?",
        answer:
          "Yes, provided visits are logged against the contract. Serviol counts the visits and parts actually consumed under each contract, so profitability comes from real service cost rather than an estimate made at renewal time.",
      },
      {
        question: "Does it handle both comprehensive and non comprehensive AMC?",
        answer:
          "Yes. Contract types are configured separately, so the system knows whether parts are included, what the visit entitlement is, and whether a particular job should be billed — which is the distinction that matters commercially.",
      },
      {
        question: "Is AMC software separate from field service software?",
        answer:
          "They work best together. The contract defines what is owed and the field service side delivers it; keeping them in one system is what allows consumed visits to be counted automatically. Serviol includes both.",
      },
      {
        question: "Who uses AMC management software in Nepal?",
        answer:
          "Typically businesses that sell and then maintain equipment: medical and laboratory equipment suppliers, lift and escalator companies, HVAC and generator dealers, IT hardware vendors, and industrial machinery distributors.",
      },
    ],
  },

  complaintManagement: {
    slug: "complaint-management-system-nepal",
    path: "/complaint-management-system-nepal",
    metaTitle: "Complaint Management System in Nepal | Serviol",
    metaDescription:
      "Capture every customer complaint from phone, Viber, and email into one system with an owner, a priority, and a deadline. Complaint management software built in Nepal.",
    ogTitle: "Complaint Management System in Nepal",
    ogDescription:
      "Stop losing complaints between Viber and a notebook. Serviol gives every complaint an owner, a deadline, and a closure record.",
    keyword: "Complaint Management System in Nepal",
    heroTitle: "Complaint management system in Nepal",
    heroIntro:
      "Most complaints are not mishandled on purpose. They are lost — taken on a phone call, written in a notebook, forwarded on Viber, and never given an owner. A complaint management system makes losing one structurally difficult.",
    overview: {
      title: "The problem is capture, not effort",
      paragraphs: [
        "Ask any service business whether they take complaints seriously and the answer is yes, and it is usually true. Ask how many complaints are open right now and the answer is a pause. The gap between those two answers is not a lack of care. It is that complaints arrive through five channels and land in five different places, none of which is a system.",
        "A complaint that arrives by phone lives in whatever the person who answered wrote down. One that arrives on Viber lives in a chat that scrolls away. One that arrives through a manager lives in a forwarded message. Each of these is fine on its own; together they mean nobody can see the whole picture, and the complaints that get resolved are the ones whose customers chase hardest rather than the ones that are most urgent.",
        "A complaint management system fixes this by making the ticket the unit of work. Whatever channel a complaint arrives through, it becomes a ticket with a customer, a category, a priority, an owner, and a due date. Nothing is closed without a record of what was done. Serviol handles this alongside the field and contract side, so a complaint that needs an engineer becomes a scheduled job without being retyped.",
      ],
    },
    problems: [
      "Complaints arrive by phone, Viber, Facebook, email, and walk in, and land in five different places.",
      "Nobody can say how many complaints are open, or which are oldest.",
      "The loudest customer gets served first rather than the most urgent case.",
      "A complaint is passed to a colleague verbally and quietly disappears.",
      "There is no record of what was done, so the same issue is diagnosed from scratch next time.",
      "Repeat failures on the same machine are never spotted because nobody counts them.",
    ],
    solutions: [
      "Every complaint becomes a ticket with a customer, category, priority, owner, and due date.",
      "One queue regardless of the channel the complaint arrived through.",
      "Ageing and overdue views, so priority is set by urgency rather than by volume of chasing.",
      "Handover is a reassignment in the system, not a verbal request.",
      "Closure requires a record of what was actually done.",
      "Repeat complaints against the same customer or machine become visible and countable.",
    ],
    features: [
      "Multi channel complaint intake",
      "Ticket categories and priorities",
      "Owner and due date on every ticket",
      "Escalation for overdue tickets",
      "Conversion of a ticket into a field job",
      "Resolution notes and closure record",
      "Repeat fault detection per machine",
      "Ageing and backlog reporting",
      "Customer complaint history",
      "Role based visibility",
    ],
    process: [
      {
        title: "List where complaints actually arrive",
        text: "Phone, Viber, Facebook, email, walk in, and via the sales team. Every one of these has to have a route into the system, or it will keep being the channel where things get lost.",
      },
      {
        title: "Agree categories and priorities",
        text: "A short, honest category list beats a long aspirational one. We keep it small enough that whoever logs a complaint under pressure picks the right one without thinking hard.",
      },
      {
        title: "Set ownership and deadlines",
        text: "Every ticket gets an owner and a response deadline by priority. This is the change that does most of the work, because an unowned complaint is the one that disappears.",
      },
      {
        title: "Connect complaints to field work",
        text: "Complaints needing a site visit become scheduled jobs directly, so nothing is retyped and the field record links back to the original complaint.",
      },
      {
        title: "Review the backlog weekly",
        text: "Once tickets are real, a short weekly look at open and overdue counts turns the system into a management tool instead of a filing cabinet.",
      },
    ],
    reasons: [
      "Built for the channels complaints actually arrive through in Nepal, including Viber and Facebook.",
      "Complaints, contracts, and field jobs live in one system, so a complaint needing an engineer does not have to be retyped.",
      "Simple enough that whoever answers the phone will actually log the ticket.",
      "Local support and training in your working hours.",
      "Can be adopted on its own first, and extended to full service management later.",
    ],
    related: [
      {
        href: "/products/serviol",
        label: "Serviol",
        text: "The wider service management product this belongs to.",
      },
      {
        href: "/service-crm-in-nepal",
        label: "service CRM in Nepal",
        text: "Customer, equipment, and contract history behind each complaint.",
      },
      {
        href: "/field-service-management-software-in-nepal",
        label: "field service management software",
        text: "Turning a complaint into a scheduled, evidenced site visit.",
      },
      {
        href: "/amc-management-software-nepal",
        label: "AMC management software in Nepal",
        text: "Whether a complaint is covered by contract or chargeable.",
      },
      {
        href: "/best-service-management-system",
        label: "choosing a service management system",
        text: "How to evaluate options before committing.",
      },
      {
        href: "/contact",
        label: "get in touch",
        text: "Tell us how complaints reach you today and we will map it.",
      },
    ],
    faqs: [
      {
        question: "What is a complaint management system?",
        answer:
          "A complaint management system captures every customer complaint as a ticket with an owner, a priority, and a deadline, regardless of whether it arrived by phone, message, email, or in person. It exists so complaints are resolved by urgency and tracked to closure rather than depending on who chases hardest.",
      },
      {
        question: "How do you capture complaints that come in on Viber or Facebook?",
        answer:
          "Whoever receives the message logs it as a ticket, which takes seconds and immediately gives the complaint an owner and a deadline. The point is a single queue: the channel a complaint arrives through should not determine whether it gets resolved.",
      },
      {
        question: "Is a complaint management system different from a help desk?",
        answer:
          "They are closely related. Help desk software is usually built for IT support and remote resolution, while a complaint management system for a service business must also handle site visits, equipment history, and whether the work is covered by contract. Serviol is the second kind.",
      },
      {
        question: "Can complaints become field jobs automatically?",
        answer:
          "Yes. A complaint needing a site visit is converted into a scheduled job with the customer, equipment, and history attached, so nothing is retyped and the completed visit links back to the original complaint.",
      },
      {
        question: "Can we start with just complaint management?",
        answer:
          "Yes. Many teams adopt complaint capture first because it is the most visible problem and the fastest to show a result, then extend into scheduling, contracts, and reporting once the habit of logging tickets is established.",
      },
      {
        question: "How does it help spot recurring faults?",
        answer:
          "Because every complaint is attached to a customer and a machine, repeat failures become countable. A unit that has generated four complaints in six months is visible in a report rather than being noticed only when somebody happens to remember.",
      },
    ],
  },

  /*
    Added after the original five. The cluster now has a Nepal-market pillar,
    which it did not: `serviceCrm` owned the record side and
    `fieldServiceManagement` the delivery side, while the broad category term
    ("service management software in Nepal") had no page of its own and was
    being answered by `/best-service-management-system` — a vendor-neutral
    criteria guide with no "Nepal" in it, written for a different reader.

    The division of labour between the three pages that could collide:

      serviceManagementSoftware   — "What is this category and who in Nepal
                                     buys it?" The market pillar. Answers "best
                                     service management software in Nepal" in
                                     one FAQ and hands the reasoning to the
                                     criteria page rather than repeating it.
      bestServiceCrm              — "Which service CRM do I buy, here?" Vendor
                                     comparison: local against imported, what
                                     to test on your own data, and when Serviol
                                     is the wrong answer.
      bestServiceManagementSystem — "Will this rollout survive?" Criteria and
                                     failure modes, deliberately not Nepal
                                     scoped, and unchanged.
  */
  serviceManagementSoftware: {
    slug: "service-management-software-in-nepal",
    path: "/service-management-software-in-nepal",
    metaTitle: "Service Management Software in Nepal | Serviol by Infobytes Nepal",
    metaDescription:
      "Service management software built in Nepal for companies that sell equipment and support it afterwards. Customers and installed machines, AMC and warranty, complaint tickets, technician scheduling, offline field app, spare parts, and contract profitability in one system.",
    ogTitle: "Service Management Software in Nepal | Serviol",
    ogDescription:
      "One system for the whole service obligation: what you sold, what it is covered by, who is fixing it today, and whether the contract made money.",
    keyword: "Service Management Software in Nepal",
    heroTitle: "Service Management Software in Nepal",
    heroIntro:
      "Service management software is the system that holds everything you owe a customer after the sale: the machine you installed, the contract covering it, the complaint that came in this morning, the technician on the way, and the proof of what was done. Serviol is that system, built and supported in Nepal by Infobytes Nepal for teams whose revenue depends on service as much as on selling.",
    overview: {
      title: "What the category covers, and who in Nepal is actually buying it",
      paragraphs: [
        "Service management software sits between two things most businesses already have: a sales system that ends at the invoice, and an accounts system that starts at it. Neither one knows what you installed, whether it is still covered, who came out last time, or what the contract has cost you to honour so far. That gap is the category. It covers the record side — customers, sites, installed units with serial numbers, warranties, and annual maintenance contracts — and the delivery side — complaint tickets, scheduling, dispatch, proof of work, spare parts, and attendance — under one set of reports.",
        "In Nepal the buyers are consistent enough to name. Medical and laboratory equipment suppliers, who have machines under warranty in hospitals across several districts. Lift and escalator companies, whose entire business model is the maintenance contract rather than the installation. HVAC, generator, and solar dealers with seasonal complaint peaks. IT hardware vendors carrying hundreds of small units under support. Industrial machinery distributors whose downtime costs a factory money by the hour. What they share is that the machine is somewhere else, the technician is mobile, and the obligation outlives the sale by years.",
        "The practical threshold is not revenue, it is people. Below roughly eight field staff a capable supervisor can hold the day in their head and a spreadsheet holds the contract list. Above it, jobs get double assigned, contracts lapse quietly, and the answer to 'is this visit chargeable' becomes an argument rather than a lookup. The cost of not having the system is rarely dramatic — it is a steady leak of unbilled visits, repeat trips, expired contracts nobody renewed, and customers who were told nothing.",
        "What separates a system that survives here from one that gets abandoned is almost never the feature list. It is whether the field app keeps working in a basement plant room or outside the valley on patchy mobile data, whether it runs on the mid-range Android phone a technician is actually carrying rather than on office wifi during a demo, and whether support answers in your working hours and in your language. Serviol was built against those three constraints first, because a field team that cannot use the app on a bad day stops using it on the good ones too.",
      ],
    },
    problems: [
      "What you sold, what it is covered by, and what has been done to it live in three different places, none of which is a system.",
      "Complaints arrive by phone, Viber, and Facebook, and the only record is whichever staff member took the call.",
      "Nobody can say whether a visit is chargeable without digging out a paper invoice to check the warranty date.",
      "The day is allocated verbally each morning, so no plan exists that the office can look at.",
      "Annual maintenance contracts lapse quietly, because no system was watching the renewal dates.",
      "Spare parts leave the store against a job and are never reconciled against it.",
      "Service history sits in a senior technician's memory and walks out of the building with him.",
      "Management cannot say how many jobs are open right now, how many are overdue, or whether any contract is profitable.",
    ],
    solutions: [
      "One customer record carrying sites, installed units with serial numbers, warranty and contract status, and full service history.",
      "Complaints logged as tickets with an owner, a priority, and a due date, whichever channel they arrived through.",
      "Coverage shown at the moment a ticket is raised, so chargeability is a lookup rather than a debate.",
      "A visible day planner per technician that the office and the field read the same way.",
      "Contract expiry driving renewal reminders instead of relying on somebody remembering.",
      "Parts consumption captured against the job on site, so the store and the job agree.",
      "Proof of work — photos, signature, parts, time on job — captured on an ordinary Android phone, offline if need be.",
      "Open, overdue, and closed counts plus contract profitability available without asking three people.",
    ],
    features: [
      "Customer, site, and installed equipment records",
      "Serial numbers, installation dates, and coverage",
      "Warranty and AMC tracking with renewal reminders",
      "Multi channel complaint and ticket intake",
      "Priority, due date, and escalation handling",
      "Technician day planners and job assignment",
      "Offline capable field app for ordinary Android phones",
      "Proof of work: photos, signature, parts, time on job",
      "Spare parts consumption per job",
      "Attendance and check in / check out",
      "Preventive maintenance schedules",
      "Full service history per customer and per machine",
      "Contract profitability and backlog reporting",
      "Role based access for office, field, and management",
    ],
    process: [
      {
        title: "Map the obligation, not the org chart",
        text: "We start from what you actually owe customers after the sale: which equipment, under what cover, for how long, and at what response expectation. That differs completely between a lift company and an IT hardware vendor, and it is what the system has to model.",
      },
      {
        title: "Bring in customers, machines, and live contracts",
        text: "Existing customers, installed units, serial numbers, and contracts still running are imported from wherever they live now — usually spreadsheets and invoice files — so the system is useful on day one rather than after months of data entry.",
      },
      {
        title: "Configure tickets, priorities, and what proof means",
        text: "Complaint types, priorities, assignment rules, and the stages a job passes through are set to match how your team already works. The important decision is what a technician must capture before a job can close, because that is what makes the data worth reporting on.",
      },
      {
        title: "Pilot with one team on real jobs",
        text: "One team runs on Serviol for a few weeks while everyone else continues as before. A screen that takes too long at a site, or a required field nobody can fill on a roof, only shows up under real use and is cheap to change at this stage.",
      },
      {
        title: "Roll out and tune the reports",
        text: "Once the field workflow is settled the rest of the team moves across, and reporting is narrowed to the handful of numbers management will actually open: open and overdue jobs, renewals due, and profitability per contract.",
      },
    ],
    reasons: [
      "Built in Nepal for how service businesses here operate, including intermittent connectivity and staff working primarily from a phone.",
      "Both halves in one system: the customer and contract record, and the field job that delivers against it.",
      "A product rather than a fresh build, so implementation is measured in weeks rather than quarters.",
      "Configurable to your workflow without commissioning a full custom development project.",
      "Support in your timezone, in Nepali or English, from the team that wrote the software.",
      "Your data stays exportable. There is no lock in by design.",
    ],
    related: [
      {
        href: "/products/serviol",
        label: "Serviol",
        text: "The product itself: features, screens, and how it is deployed.",
      },
      {
        href: "/service-crm-in-nepal",
        label: "service CRM in Nepal",
        text: "The record side in depth: customers, machines, contracts, and history.",
      },
      {
        href: "/field-service-management-software-in-nepal",
        label: "field service management software in Nepal",
        text: "The delivery side in depth: planners, dispatch, and the offline field app.",
      },
      {
        href: "/best-service-management-system",
        label: "how to choose a service management system",
        text: "The criteria and the questions worth putting to any vendor.",
      },
      {
        href: "/service-department-management-software-in-nepal",
        label: "service department management software in Nepal",
        text: "If service is a department inside a sales business rather than the business itself.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Ask for a walkthrough against your own service workflow.",
      },
    ],
    faqs: [
      {
        question: "What is service management software?",
        answer:
          "Service management software is one system holding everything a company owes a customer after the sale: the equipment installed, its serial number and coverage, the warranty or annual maintenance contract over it, every complaint raised against it, the technician visits that followed, the parts used, and the reporting across all of it. It covers both the office record and the field job, which is what separates it from a sales CRM on one side and a helpdesk on the other.",
      },
      {
        question: "What is the best service management software in Nepal?",
        answer:
          "The best service management software in Nepal is the one that survives your worst day rather than the one with the longest feature list: a field app that keeps working in a basement or outside the valley, on the mid-range Android phone your technician already carries, with support answering in your working hours and your language. Serviol by Infobytes Nepal is built against those constraints first, and the criteria worth testing any vendor against — including us — are set out on our guide to choosing a service management system.",
      },
      {
        question: "Is there service management software made in Nepal?",
        answer:
          "Yes. Serviol is service management and field service management software built and supported in Nepal by Infobytes Nepal Pvt. Ltd. It is used by teams that install and maintain equipment, and it is designed for local realities including technicians on ordinary Android phones and sites where the signal drops.",
      },
      {
        question: "Which industries in Nepal use service management software?",
        answer:
          "Medical and laboratory equipment suppliers, lift and escalator companies, HVAC, generator and solar dealers, IT hardware vendors, and industrial machinery distributors. What they have in common is equipment installed somewhere else, a mobile technician, and a support obligation that outlives the sale by years.",
      },
      {
        question: "How is it different from a helpdesk or ticketing tool?",
        answer:
          "A helpdesk tracks a conversation until it is closed. Service management software tracks a physical machine across its whole life, so a ticket arrives already attached to a serial number, an installation date, a contract, and every previous visit. That context is what decides whether a job is chargeable, who should attend, and whether the unit is failing repeatedly.",
      },
      {
        question: "How many field staff do we need before it is worth it?",
        answer:
          "Around eight to ten, in our experience. Below that a capable supervisor can usually hold the day in their head; above it, jobs start being double assigned or missed, contracts lapse unnoticed, and the cost of the missing system exceeds the cost of the system.",
      },
      {
        question: "How much does service management software cost in Nepal?",
        answer:
          "Adopting Serviol is quoted by team size and the modules you need, and it is substantially cheaper than commissioning custom software, which in Nepal typically runs from around NPR 200,000 to NPR 600,000 for a focused first version. Tell us your field staff count, how many contracts you carry, and how complaints reach you today, and you get a written quotation at no charge.",
      },
      {
        question: "Can it work when technicians have no internet?",
        answer:
          "Yes. Field staff keep working through a dropped signal and job data syncs once the connection returns. This is the single most common reason field teams abandon an app in Nepal, so it was designed in rather than added later.",
      },
    ],
  },

  bestServiceCrm: {
    slug: "best-service-crm-in-nepal",
    path: "/best-service-crm-in-nepal",
    // "Best" is allowed in this title because the page is about how to decide
    // which service CRM is best, opens by refusing to answer it with a product
    // name, and names the businesses Serviol is wrong for. The same rule the
    // Nidanyo cluster applies to /best-lab-software-in-nepal.
    metaTitle: "Best Service CRM in Nepal: How to Choose | Serviol",
    metaDescription:
      "How to choose a service CRM in Nepal: service CRM versus sales CRM versus helpdesk, local against imported vendors, the five requests that decide a shortlist in one demo, what to check about offline working, and the businesses Serviol is the wrong fit for.",
    ogTitle: "How to choose the best service CRM in Nepal",
    ogDescription:
      "There is no single best service CRM in Nepal. There is a best one for what you sell, how many machines you carry, and how bad the signal gets. Here is how to tell.",
    keyword: "Best Service CRM in Nepal",
    heroTitle: "Choosing the best service CRM in Nepal",
    heroIntro:
      "There is no single best service CRM in Nepal, and a vendor who answers that question with their own product name is selling rather than advising. There is a best one for what you sell, how many installed machines you carry, how much of your revenue arrives through maintenance contracts, and how bad the signal gets where your technicians work. This is the reasoning we would use if we were buying, including the businesses our own product is the wrong answer for.",
    overview: {
      title: "Three categories get demonstrated as one, and that is the expensive mistake",
      paragraphs: [
        "A sales CRM, a helpdesk, and a service CRM all show you a list of open items with owners and due dates, which is why they are so easily confused in a demo. They are built around different objects, and picking the wrong object costs more than picking the second-best product inside the right category.",
        "A sales CRM is built around the opportunity: a lead arrives, moves through stages, and closes or dies. It models winning work and has no concept of a machine you installed three years ago. A helpdesk is built around the conversation: a request arrives, gets replied to, and is resolved. It models a thread, not an asset, so it cannot tell you that this is the fourth complaint against the same serial number. A service CRM is built around the customer and the thing you sold them: installed units with serial numbers, warranty and contract cover with expiry dates, complaint history per machine, and the visits that answered them. If your obligation outlives the invoice, that is the category you are shopping in.",
        "Within the category, the local-against-imported question is more practical than patriotic. Imported service CRMs are generally stronger on integrations and reporting polish and weaker on the things that actually decide adoption here: behaviour on mid-range Android phones over patchy mobile data, support inside your working hours, invoicing in NPR, and a willingness to configure a workflow that does not match the vendor's template. A well-known international product that assumes constant connectivity will be abandoned by a technician standing in a basement plant room, and no amount of feature depth recovers from that.",
        "Five requests settle a shortlist faster than any comparison table, because each is either built in or cannot be demonstrated at all. Ask to see a complaint raised against a specific serial number, with the warranty or contract status appearing before anyone decides whether the visit is chargeable. Ask for the full history of one machine, including which technician attended and what parts were used. Ask them to put the field app in flight mode, complete a job with a photo and a signature, and then sync it. Ask for a list of contracts expiring in the next sixty days. Ask for profitability on one maintenance contract — what you charged against what honouring it cost. Any vendor who can do all five on live data during one session is a serious candidate.",
      ],
    },
    problems: [
      "A sales CRM, a helpdesk, and a service CRM are all demonstrated as 'CRM', so comparison starts from the wrong category.",
      "A sales CRM is bought and the installed machine, its coverage, and its history have nowhere to live.",
      "A helpdesk is bought and repeat failures on the same unit stay invisible, because tickets attach to conversations rather than to serial numbers.",
      "The demo runs on office wifi with prepared data, so nobody sees the app on mobile data in a basement.",
      "Imported products are judged on integrations and reporting and bought before anyone checks whether a technician can actually use them on site.",
      "Feature lists across vendors are nearly identical, which means comparing them reveals almost nothing about behaviour under load.",
      "Licence models priced per user compound badly for a business whose field team is the thing it is trying to grow.",
      "Nobody asks what happens to years of machine and service history if the relationship with the vendor ends.",
    ],
    solutions: [
      "Decide your category first. If your obligation outlives the invoice, a sales CRM is not a cheaper service CRM.",
      "Judge every candidate on your own data: two real customers, one machine with a history, one live contract, and one complaint that turned into an argument about chargeability.",
      "Ask for a complaint raised against a serial number with coverage shown before the chargeability decision.",
      "Ask for one machine's complete history, including technician and parts used.",
      "Put the field app in flight mode during the demo, complete a job with proof, and watch it sync.",
      "Ask for contracts expiring in sixty days, and for profitability on a single contract.",
      "Compare total annual cost across users, modules, the mobile app, and support rather than the headline figure.",
      "Establish before signing that your customer, equipment, contract, and job history is exportable in a usable format.",
    ],
    features: [
      "The right category: service CRM, not sales CRM or helpdesk",
      "Installed equipment with serial numbers as first class records",
      "Warranty and contract cover with expiry visible at ticket time",
      "Complaint history attached to the machine, not the conversation",
      "A field app that completes a job with no connection",
      "Proof of work captured on an ordinary Android phone",
      "Parts consumption reconciled against the job",
      "Renewals due, in a list, before they lapse",
      "Profitability per maintenance contract",
      "Roles for office, field, and management",
      "Data export you have seen working before you sign",
      "Support in your language and your working hours",
    ],
    process: [
      {
        title: "Write down five lines about your service obligation",
        text: "What you install, how many units are out there, how many are under warranty or contract, how many field staff you have, and how complaints reach you today. Those five lines decide the category before any vendor is contacted.",
      },
      {
        title: "Shortlist inside one category",
        text: "Two or three service CRMs is a comparison. One service CRM, one sales CRM, and one helpdesk is a confusion, and it is how businesses end up with a pipeline tool holding their machine records.",
      },
      {
        title: "Run the five requests in one session",
        text: "Serial number with coverage, one machine's full history, the field app in flight mode, renewals in sixty days, and profitability on one contract. On live data, in the system, not as slides.",
      },
      {
        title: "Test the app the way a technician will",
        text: "On a mid-range Android phone, on mobile data, away from the office. If the app is only comfortable on wifi in a meeting room, it will be abandoned in month three regardless of what the rest of the system does.",
      },
      {
        title: "Pilot with one team before committing the rest",
        text: "A few weeks, one team, real jobs, in parallel with what you do now. Field teams reject systems that add steps to a bad day, and that only becomes visible under real conditions.",
      },
    ],
    reasons: [
      "We will tell you which category you are shopping in before we tell you about our product.",
      "The five demo requests above are ones we invite, because they are what Serviol was built to pass.",
      "We name the businesses Serviol is wrong for rather than letting a demo imply otherwise.",
      "Offline behaviour on mid-range Android phones was a design constraint here, not a later addition.",
      "Built, implemented, and supported by one team in Nepal, on the phone, in Nepali or English.",
      "Your data stays exportable. There is no lock in by design.",
    ],
    related: [
      {
        href: "/service-crm-in-nepal",
        label: "service CRM in Nepal",
        text: "What a service CRM actually covers, and how it differs from a sales CRM.",
      },
      {
        href: "/service-management-software-in-nepal",
        label: "service management software in Nepal",
        text: "The wider category, and which industries here buy it.",
      },
      {
        href: "/best-service-management-system",
        label: "criteria for a service management system",
        text: "The ten criteria that decide whether a rollout survives its first year.",
      },
      {
        href: "/field-service-management-software-in-nepal",
        label: "field service management software in Nepal",
        text: "If your first problem is the field team rather than the customer record.",
      },
      {
        href: "/crm-software-in-nepal",
        label: "CRM software in Nepal",
        text: "If your need really is a sales pipeline, this is the honest place to start.",
      },
      {
        href: "/products/serviol",
        label: "Serviol",
        text: "The product itself, so you can judge it against everything above.",
      },
    ],
    faqs: [
      {
        question: "What is the best service CRM in Nepal?",
        answer:
          "The best service CRM in Nepal is the one that matches what you sell and survives where your technicians work: installed equipment with serial numbers as first-class records, coverage visible before a chargeability decision, and a field app that completes a job on a mid-range Android phone with no signal. Serviol by Infobytes Nepal is built for exactly that shape, and the five demo requests on this page are how to test any vendor against it, including us.",
      },
      {
        question: "What is the difference between a service CRM and a sales CRM?",
        answer:
          "A sales CRM is organised around opportunities and stages and is built for winning work. A service CRM is organised around customers, installed machines, contracts, and tickets, and is built for honouring commitments after the sale. Businesses that both sell and service usually need the second and often run the first alongside it.",
      },
      {
        question: "Is a helpdesk enough instead of a service CRM?",
        answer:
          "Only if your work has no physical asset behind it. A helpdesk attaches a ticket to a conversation, so it cannot tell you that this is the fourth complaint against one serial number, whether the unit is still under contract, or which technician attended last time. Once equipment is involved, that missing context is the whole job.",
      },
      {
        question: "Should we choose a local or an imported service CRM?",
        answer:
          "Judge it on the things that actually decide adoption rather than on origin: behaviour on mid-range Android phones over patchy mobile data, support inside your working hours and language, invoicing in NPR, and willingness to configure a workflow that does not match the vendor's template. Imported products are often stronger on integrations and reporting polish and weaker on exactly those four, and a field app that assumes constant connectivity gets abandoned here regardless of feature depth.",
      },
      {
        question: "What should we ask for in a service CRM demo?",
        answer:
          "Five things, on live data in one session: a complaint raised against a specific serial number with warranty or contract status shown before the chargeability decision; one machine's full history including technician and parts; the field app put in flight mode, a job completed with photo and signature, then synced; a list of contracts expiring in the next sixty days; and profitability on one maintenance contract. Each is either built in or cannot be shown at all.",
      },
      {
        question: "How much does a service CRM cost in Nepal?",
        answer:
          "Adopting Serviol is quoted by team size and modules rather than sold at a list price, and it is substantially cheaper than commissioning custom software, which in Nepal typically runs from around NPR 200,000 to NPR 600,000 for a focused first version. Ask for any quotation split into one-time implementation and recurring annual cost, because that is the only form in which two quotes are comparable.",
      },
      {
        question: "When is Serviol the wrong choice?",
        answer:
          "Serviol is the wrong choice for businesses whose work ends at the sale and who need a sales pipeline rather than a service record, for pure software support teams with no physical equipment where a helpdesk is a better fit, and for organisations wanting a full ERP where service is one module among finance, manufacturing, and procurement. We would rather say that before a quotation than after an implementation.",
      },
    ],
  },

  serviceDepartmentManagement: {
    slug: "service-department-management-software-in-nepal",
    path: "/service-department-management-software-in-nepal",
    metaTitle: "Service Department Management Software in Nepal | Serviol",
    metaDescription:
      "Software for running the service department inside a sales business in Nepal. Technician utilisation, spare parts against jobs, warranty claims to the principal, chargeable against free work, AMC renewals, and whether the department makes or loses money.",
    ogTitle: "Service Department Management Software in Nepal",
    ogDescription:
      "Most service departments are assumed to be a cost centre because nobody ever measured one. Serviol makes the department a number you can read.",
    keyword: "Service Department Management Software in Nepal",
    heroTitle: "Service Department Management Software in Nepal",
    heroIntro:
      "In most Nepali dealerships and distributorships the service department is treated as a cost of doing business, because nobody has ever been able to measure it. Serviol by Infobytes Nepal runs the department as its own unit: what work came in, who did it, what parts it consumed, what was chargeable, what was claimed back from the principal, and whether the department finished the month ahead or behind.",
    overview: {
      title: "A department nobody measures is a department everybody assumes is losing money",
      paragraphs: [
        "A service department inside a sales business is a strange thing. It exists because the products need supporting, it is staffed by the most experienced technical people in the company, and it is usually the only part of the business whose contribution nobody can state. Sales has a target and a number. Accounts has a ledger. Service has a queue of complaints, a store of spare parts, a team of technicians, and no report, so it gets described as a cost centre by default — often while quietly earning more margin than the product sales it supports.",
        "The reason is that the department's numbers are spread across places that do not talk. Chargeable visits are invoiced in the accounts system, which does not know which job they belong to. Free warranty visits are invoiced nowhere and therefore counted nowhere, although they consume the same technician hours. Spare parts leave the store on a slip and are reconciled against stock but not against the job that consumed them. Claims to the principal for warranty work are assembled by hand from whatever evidence survives. Technician time is not recorded at all, so utilisation is an impression. Every one of those is measurable; none of them is being measured.",
        "Serviol closes the department around the job. A complaint arrives and is logged against a customer, a site, and a specific installed unit with its serial number. Coverage is visible before anyone decides whether the visit is chargeable, so free and billable work are separated at the point the decision is made rather than argued about later. The technician's time on the job is recorded, the parts consumed are captured on site against that job, and the proof — photos, signature, work done — comes back attached to it. What was warranty becomes a claimable record with its evidence already assembled.",
        "Out of that come the four numbers a department head is usually asked for and cannot produce: technician utilisation, the split between chargeable and free work, parts consumption per job type, and profitability per maintenance contract. The last one changes behaviour fastest. A dealer who discovers that one product line's AMCs are consistently loss-making, and that another line's are carrying the department, prices the next renewal differently. That is not a reporting improvement, it is a commercial one.",
      ],
    },
    problems: [
      "Nobody can say whether the service department makes money, so it is assumed to be a cost centre.",
      "Chargeable and free warranty work consume the same technician hours and only one of them is counted anywhere.",
      "Spare parts leave the store against a slip and are never reconciled against the job that used them.",
      "Warranty claims to the principal are assembled by hand, late, from whatever evidence still exists.",
      "Technician utilisation is an impression, because time on job was never recorded.",
      "The department competes for headcount and budget without a single number to argue with.",
      "AMC renewals are priced on last year's figure rather than on what honouring the contract actually cost.",
      "When a senior technician leaves, the department loses the only record of how half its machines behave.",
    ],
    solutions: [
      "Every job logged against a customer, a site, and an installed unit with its serial number.",
      "Coverage shown before the chargeability decision, so free and billable work separate at source.",
      "Time on job recorded by the technician on site, making utilisation a report rather than an impression.",
      "Parts consumption captured against the job, so the store and the department agree.",
      "Warranty work accumulating as claimable records with the evidence already attached.",
      "Profitability per maintenance contract: what was charged against what honouring it cost.",
      "Parts consumption per job type, so recurring failures show up as a purchasing pattern.",
      "Full machine history held in the system rather than in one technician's memory.",
    ],
    features: [
      "Installed base by customer, site, and serial number",
      "Warranty and AMC coverage visible at ticket time",
      "Chargeable and free work separated on the job",
      "Time on job captured in the field",
      "Technician utilisation reporting",
      "Spare parts issued and consumed per job",
      "Warranty claim records with attached evidence",
      "Preventive maintenance schedules per contract",
      "Contract profitability and renewal pricing inputs",
      "Job backlog, ageing, and overdue reporting",
      "Repeat failure counts per unit and per model",
      "Department level dashboards for management",
    ],
    process: [
      {
        title: "Separate the department from the sales business",
        text: "We establish what belongs to service: which products, which installed base, which staff, which store, and which revenue lines. Until that boundary exists on paper there is nothing to measure, and drawing it is usually the most valuable hour of the project.",
      },
      {
        title: "Load the installed base",
        text: "Customers, sites, units, serial numbers, installation dates, and live warranties and contracts are imported from sales invoices and spreadsheets, so the department starts with its real obligation rather than an empty system.",
      },
      {
        title: "Define chargeable, free, and claimable",
        text: "The rules that decide whether a visit is billed to the customer, absorbed by the department, or claimed from the principal are written down and configured. This is the decision that makes every later number honest.",
      },
      {
        title: "Put parts and time on the job",
        text: "The store's issue process and the technician's time capture are connected to the job record, because utilisation and parts-per-job are the two figures a department head is asked for most and can produce least.",
      },
      {
        title: "Run one month, then read the department",
        text: "After a full month we go through utilisation, the chargeable-to-free split, parts per job type, and profitability per contract together. Those four numbers are the return on the project and usually change how the next renewal is priced.",
      },
    ],
    reasons: [
      "Built around the job, so the department's costs and revenue land in the same place for the first time.",
      "Free warranty work is counted rather than invisible, which is what makes utilisation and contract profitability real.",
      "Warranty claims to the principal come out with their evidence already attached instead of being reconstructed.",
      "Works for a mobile team on ordinary Android phones with patchy signal, which is where dealership service actually happens.",
      "A product rather than a fresh build, so the department is measurable in weeks rather than quarters.",
      "Built and supported in Nepal, by the team that wrote it, in your working hours.",
    ],
    related: [
      {
        href: "/products/serviol",
        label: "Serviol",
        text: "The product itself: features, screens, and how it is deployed.",
      },
      {
        href: "/service-management-software-in-nepal",
        label: "service management software in Nepal",
        text: "The wider category, and which industries here buy it.",
      },
      {
        href: "/amc-management-software-nepal",
        label: "AMC management software in Nepal",
        text: "Contracts, preventive schedules, renewals, and contract profitability in depth.",
      },
      {
        href: "/field-service-management-software-in-nepal",
        label: "field service management software in Nepal",
        text: "The scheduling and field execution side of the same system.",
      },
      {
        href: "/inventory-management-software-in-nepal",
        label: "inventory management software in Nepal",
        text: "If the spare parts store is the part that is genuinely out of control.",
      },
      {
        href: "/erp-software-in-nepal",
        label: "ERP software in Nepal",
        text: "If service needs to sit alongside finance, procurement, and sales in one system.",
      },
    ],
    faqs: [
      {
        question: "What is service department management software?",
        answer:
          "Service department management software runs the after-sales department of a business that sells equipment, as a unit that can be measured. It holds the installed base by serial number, logs every complaint against a specific machine, separates chargeable work from free warranty work before the visit, captures technician time and parts against the job, and reports utilisation, the chargeable-to-free split, and profitability per maintenance contract.",
      },
      {
        question: "How is it different from field service management software?",
        answer:
          "Field service management is about execution: who goes where, what they do, and what proof comes back. Service department management is about the department as a business unit: utilisation, chargeable against free work, parts consumption, warranty claims to the principal, and whether contracts are profitable. Serviol covers both, because the second is assembled out of the data the first produces.",
      },
      {
        question: "Can it show whether our service department is profitable?",
        answer:
          "Yes, once free warranty work is being recorded rather than absorbed invisibly. Because every job carries its technician time, its parts, and whether it was chargeable, absorbed, or claimable, the department's revenue and cost land in the same place and profitability per contract and per product line becomes readable. Most departments discover the split between their loss-making and carrying contracts in the first month.",
      },
      {
        question: "Does it handle warranty claims to the manufacturer or principal?",
        answer:
          "Yes. Work identified as warranty accumulates as claimable records with the job evidence already attached — the unit and serial number, the fault, the parts consumed, the technician, the time, and the proof of completion — so a claim is assembled from the system rather than reconstructed from memory and paper weeks later.",
      },
      {
        question: "Can we separate chargeable visits from free warranty visits?",
        answer:
          "Yes, and at the right moment. Warranty and contract coverage is shown when the ticket is raised, before anyone decides whether the visit is billable, so the classification is made once by the person with the information rather than argued about at invoicing. Both kinds consume technician hours and both are counted.",
      },
      {
        question: "Does it measure technician utilisation?",
        answer:
          "Yes. Time on job is captured by the technician in the field, alongside attendance and check in and check out, so utilisation by technician and by job type becomes a report rather than an impression. That figure is usually what settles arguments about headcount.",
      },
      {
        question: "Will it work for a dealership whose technicians are always on the road?",
        answer:
          "Yes, that is the normal case. The field app runs on ordinary mid-range Android phones and keeps working through a dropped signal, syncing once the connection returns, which matters in Nepal where a technician may be in a basement plant room or working outside the valley on patchy mobile data.",
      },
      {
        question: "How long before the department has real numbers?",
        answer:
          "Usually one full month after go live, and the limit is data rather than software: utilisation, the chargeable-to-free split, and contract profitability need a complete month of jobs behind them to mean anything. Implementation itself runs a few weeks, most of which is loading the installed base and agreeing the chargeable, free, and claimable rules.",
      },
    ],
  },
} satisfies Record<string, SeoLandingPage>;
