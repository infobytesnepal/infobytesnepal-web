import type { SeoLandingPage } from "./seo-landing-pages";

/**
 * The Serviol cluster: service management, field service, AMC, and complaints.
 *
 * These five pages exist to win one commercial topic rather than five keywords.
 * They share a product — Serviol — and deliberately do not share their copy:
 * a service CRM buyer, a field service manager, an AMC desk, and someone
 * comparing systems are four different readers with four different first
 * questions, and a page that answers a different reader's question is a page an
 * answer engine has no reason to quote.
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
        href: "/crm-software-in-nepal",
        label: "CRM software in Nepal",
        text: "If your need is sales pipeline rather than service delivery.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Ask for a walkthrough against your own service workflow.",
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
    ],
  },

  fieldServiceManagement: {
    slug: "field-service-management-software-in-nepal",
    path: "/field-service-management-software-in-nepal",
    metaTitle: "Field Service Management Software in Nepal | Serviol",
    metaDescription:
      "Field service management (FSM) software for Nepali teams. Assign jobs, plan technician days, capture proof of work, track attendance, and keep working when the signal drops.",
    ogTitle: "Field Service Management Software in Nepal",
    ogDescription:
      "Serviol is FSM software built in Nepal: day planners, job assignment, offline capable field app, attendance, and complete job history.",
    keyword: "Field Service Management Software in Nepal",
    heroTitle: "Field Service Management Software in Nepal",
    heroIntro:
      "Field service management, or FSM, is the software that decides which technician goes where, what they do when they arrive, and what proof comes back. Serviol is FSM built by Infobytes Nepal for teams whose work happens on customer sites rather than at a desk.",
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
        href: "/business-automation-software-nepal",
        label: "business automation in Nepal",
        text: "Removing the repeated manual steps between departments.",
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
} satisfies Record<string, SeoLandingPage>;
