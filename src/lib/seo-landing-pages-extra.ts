import type { SeoLandingPage } from "./seo-landing-pages";

/**
 * Landing pages added after the first SEO build-out. Kept in a separate module
 * so the original file stays readable; both objects are merged into
 * `seoLandingPageList`, which drives the sitemap, llms.txt, and link registry.
 */
export const extraSeoLandingPages = {
  labSoftware: {
    slug: "lab-software-in-nepal",
    path: "/lab-software-in-nepal",
    metaTitle: "Best Lab Software in Nepal | Infobytes Nepal",
    metaDescription:
      "Nidanyo by Infobytes Nepal is lab management software for medical laboratories in Nepal. Patient registration, sample tracking, result verification, report printing, billing, and reagent stock in one system.",
    ogTitle: "Lab Software in Nepal | Nidanyo by Infobytes Nepal",
    ogDescription:
      "Lab management software built in Nepal for pathology labs and diagnostic centres. Registration to report release, billing, and reagent stock handled in one place.",
    keyword: "Lab Software in Nepal",
    heroTitle: "Lab Software in Nepal",
    heroIntro:
      "Infobytes Nepal builds Nidanyo, a laboratory operations and information management system for medical laboratories, diagnostic centres, and pathology labs across Nepal. One system carries a sample from the registration counter to a verified, printed report and the bill that goes with it.",
    overview: {
      title: "One system from the registration counter to the signed report",
      paragraphs: [
        "Walk into most labs in Nepal on a busy morning and you will see the same setup. A register book at the counter, a billing package that was bought years ago and does not talk to anything else, analyser printouts stacked next to the machine, and report templates in Word that somebody keeps a folder of. It works. It works right up to the point where volume grows, and then the cracks show all at once: the same patient registered twice under two spellings, a sample nobody logged sitting past its stability window, a report released with last year's reference range still in it, and a month end that takes three days to reconcile.",
        "Nidanyo was built to close those specific gaps. A patient is registered once and every step afterwards reads from that one record. Samples carry a barcode from collection onward, so a technologist can tell at a glance what is on the bench, what is pending, and what is overdue. Results either get typed in or come straight off analysers that support standard interfacing, which removes the transcription mistakes that cause most of the rework in a busy lab.",
        "Reports move through a verification path instead of going straight to the printer. A technologist enters, an authorised signatory verifies, and only a verified result becomes releasable. Reference ranges are set per test and can vary by age band and by sex, so an out of range flag actually means something to the doctor reading it. Billing sits on the same records, which is where manual leakage usually happens: a test that was ordered is a test that was billed, with no separate ledger to reconcile against.",
        "We are a Nepal based team, so setup is not a download link and a PDF manual. We load your existing test catalogue and reference ranges, format your report layout on your letterhead, train each role on the screens they will actually use, and stay reachable after go live when a question comes up at nine in the morning with twenty patients waiting.",
      ],
    },
    problems: [
      "Patient details are reentered at the counter, at sample collection, and again at reporting, so the same person ends up in the system three times with three spellings.",
      "Nobody can answer where a sample is right now without walking to the bench and asking.",
      "Reports are typed into Word templates, which means reference ranges drift, formatting varies between staff, and a corrected report leaves no trace of what changed.",
      "Billing and reporting live in separate systems, so tests get run without being billed and the daily collection never quite matches the register.",
      "Referral commissions for doctors and partner clinics are calculated by hand at month end, which takes days and invites disputes.",
      "Reagent stock is checked by looking at the shelf, so a kit runs out mid morning and patients get told to come back tomorrow.",
    ],
    solutions: [
      "Register a patient once. Every later step, from collection to report to bill, reads the same record, and duplicate detection catches the near matches before they become two files.",
      "Barcode each sample at collection so its position in the workflow is visible from any screen, with pending and overdue work separated from what is simply in progress.",
      "Enter results against a defined test master with age and sex specific reference ranges, then route them through a verify step before anything can be released.",
      "Print reports on your own letterhead layout, or send them to patients by email or a download link so they do not have to travel back to the counter for a piece of paper.",
      "Bill from the same order that created the test, with counter billing, credit accounts for referring hospitals, package rates, and discounts that carry an approval trail.",
      "Track reagents, kits, and consumables by batch and expiry, with reorder alerts that fire before the shelf is empty rather than after.",
      "Read turnaround time, test volume by department, revenue by referral source, and pending work from a dashboard instead of assembling it by hand.",
    ],
    features: [
      "Patient registration and duplicate detection",
      "Barcoded sample collection and tracking",
      "Test master with age and sex specific ranges",
      "Analyser interfacing for supported machines",
      "Two step result entry and verification",
      "Letterhead report printing and PDF delivery",
      "Counter, credit, and package billing",
      "Referring doctor and institution commissions",
      "Reagent stock by batch and expiry",
      "Role based access with a full audit trail",
      "Turnaround time and pending work dashboards",
      "Daily collection and department revenue reports",
    ],
    process: [
      {
        title: "Lab visit",
        text: "We sit in your lab for a morning and watch the actual flow, from the counter to the bench to the report desk. What we build is shaped by what we see there, not by a feature checklist.",
      },
      {
        title: "Catalogue setup",
        text: "Your test list, departments, sample types, reference ranges, panel rates, and report layouts get loaded and checked against the reports you issue today.",
      },
      {
        title: "Configuration",
        text: "Roles, permissions, billing rules, referral terms, and analyser connections are set up for your lab specifically, then reviewed with the people who will use them.",
      },
      {
        title: "Training and parallel run",
        text: "Each role is trained on its own screens. Most labs run Nidanyo alongside the old process for a week or two until the counter and the bench are comfortable.",
      },
      {
        title: "Go live and support",
        text: "We are available during the first weeks when questions come up mid rush, and we keep refining reports and rules as your volume and test menu change.",
      },
    ],
    reasons: [
      "Built and supported from Nepal, so support is a phone call in your timezone, not a ticket queue in another country.",
      "Designed around how labs here actually run, including credit accounts with referring clinics and commission structures that no imported system handles cleanly.",
      "Report formats match what your doctors and patients already expect from your lab, not a foreign template you have to explain.",
      "Priced for Nepali labs, with no per test licence that punishes you for growing.",
      "Backed by a team that also builds field service, sales, and lead systems, so integrating the lab with the rest of your operations is a normal request, not a special project.",
    ],
    related: [
      {
        href: "/products/nidanyo",
        label: "Nidanyo lab management system",
        text: "See what Nidanyo covers module by module, from registration to reagent stock.",
      },
      {
        href: "/laboratory-information-management-system-nepal",
        label: "Laboratory information management system in Nepal",
        text: "The LIMS side in detail: sample lifecycle, verification, interfacing, and audit.",
      },
      {
        href: "/hospital-management-software-in-nepal",
        label: "hospital management software in Nepal",
        text: "For labs that sit inside a hospital and need OPD, IPD, and pharmacy alongside.",
      },
      {
        href: "/software-development-company-in-nepal",
        label: "custom software development in Nepal",
        text: "If your lab needs something Nidanyo does not cover yet, we can build it.",
      },
    ],
    faqs: [
      {
        question: "What is the best lab management software in Nepal?",
        answer:
          "The best lab software for a Nepali laboratory is one that handles local billing habits, credit accounts with referring clinics, and referral commissions, and that comes with support you can actually reach. Nidanyo by Infobytes Nepal is built here for exactly that, covering registration, sample tracking, result verification, report release, billing, and reagent stock in one system.",
      },
      {
        question: "Can Nidanyo connect to our analysers?",
        answer:
          "Yes, for analysers that support standard interfacing. Results come straight from the machine into the result entry screen, which removes transcription errors. Machines without an interface port are handled by manual entry with the same verification step, so the report path stays consistent either way.",
      },
      {
        question: "Do you migrate our old patient and test data?",
        answer:
          "Yes. If your existing records are in a database, Excel, or an older billing package that can export, we map and import patients, the test catalogue, reference ranges, and rate lists during setup. Register book history is usually not worth importing in full, so most labs bring across the active patient list and start clean.",
      },
      {
        question: "How much does lab software cost in Nepal?",
        answer:
          "It depends on lab size, how many counters and users you need, whether analyser interfacing is involved, and whether you want it hosted by us or on your own machine. Small single branch labs sit at the low end and multi branch diagnostic centres with interfacing sit higher. Tell us your monthly test volume and branch count and we will give you a real number rather than a range.",
      },
      {
        question: "Can it run when the internet goes down?",
        answer:
          "Yes. Labs that cannot risk downtime run Nidanyo on a machine inside the lab so the counter and the bench keep working through an outage, with reporting and backups syncing when the connection returns. Labs with reliable connectivity usually prefer the hosted option so we handle updates and backups.",
      },
      {
        question: "Does it handle multiple branches or collection centres?",
        answer:
          "Yes. Collection centres can register patients and collect samples that get processed at the main lab, with the report visible at the centre once it is verified. Branch level billing, revenue, and pending work are reported separately as well as together.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "For a single branch lab with a standard test menu, expect two to four weeks from catalogue setup to go live, including training and a parallel run. Multi branch labs and labs with analyser interfacing take longer, mostly because catalogue and rate cleanup takes longer than the software work.",
      },
    ],
  },

  lims: {
    slug: "laboratory-information-management-system-nepal",
    path: "/laboratory-information-management-system-nepal",
    metaTitle: "Lab Management System in Nepal | Infobytes Nepal",
    metaDescription:
      "A laboratory information management system built in Nepal. Nidanyo tracks the full sample lifecycle, enforces result verification, keeps an audit trail, and reports turnaround time for medical labs.",
    ogTitle: "Laboratory Information Management System in Nepal | Nidanyo",
    ogDescription:
      "LIMS for medical laboratories in Nepal: sample lifecycle, chain of custody, verified results, audit trails, and turnaround time reporting.",
    keyword: "Medical Laboratory Management System in Nepal",
    heroTitle: "Medical Laboratory Management System in Nepal",
    heroIntro:
      "Nidanyo is the laboratory information management system built by Infobytes Nepal for medical laboratories that need traceability, not just billing. Every sample has a recorded path, every result has a verifier, and every change has a name and a timestamp against it.",
    overview: {
      title: "Traceability is the part cheap lab software skips",
      paragraphs: [
        "A billing package with a report printer attached is not a laboratory information management system. The difference shows up the day somebody asks a question the software cannot answer: who ran this sample, when did it arrive, which lot of reagent was used, who verified the result, and was this report amended after it went out. A LIMS is the system that can answer all six without anyone opening a register.",
        "Nidanyo treats the sample as the central object. It is created at collection, given a barcode, and moves through defined states: collected, received, in process, resulted, verified, released. Each transition is stamped with a user and a time. Nothing skips a state, which means the pending list on the technologist's screen is always the truth rather than an estimate.",
        "Result verification is enforced rather than encouraged. A technologist can enter and save, but only a user with signatory rights can verify, and only verified results are releasable. Amendments after release do not overwrite history. The original stays, the correction is recorded alongside it, and the report is reissued as an amended version so a doctor holding the old copy knows there is a newer one.",
        "That discipline is what turns a system into something you can defend. Labs going through NPHL assessment, accreditation preparation, or a corporate or insurance audit need to show a documented path from sample to signed report, including who touched it. Labs that have that path also find their turnaround times drop, because the delays become visible instead of anecdotal.",
      ],
    },
    problems: [
      "There is no record of when a sample was actually received, so turnaround time complaints turn into arguments nobody can settle.",
      "Any staff member can edit a saved result, and there is no record of what the value was before.",
      "A report is amended by printing a new one, so the lab has no way to know which version a doctor is holding.",
      "Accreditation and audit preparation means reconstructing history from register books and memory.",
      "Reagent lots are not tied to the results they produced, so a suspect lot cannot be traced to affected reports.",
      "Management sees monthly revenue but has no visibility into which tests are consistently late and why.",
    ],
    solutions: [
      "Give every sample a barcoded identity and a state machine, so its position and its history are both queryable at any moment.",
      "Separate result entry from result verification by permission, so a value only becomes releasable after an authorised signatory has seen it.",
      "Keep an immutable audit trail of edits, cancellations, and amendments, each carrying the user and the timestamp.",
      "Version reports properly, so an amended report is identifiable as an amendment rather than silently replacing the original.",
      "Record reagent lot and expiry against the run, so a quality problem can be traced forward to every affected result.",
      "Report turnaround time per test and per department against your own targets, so slow steps are visible before patients complain.",
    ],
    features: [
      "Sample lifecycle with timestamped state changes",
      "Barcode generation and scanning",
      "Chain of custody from collection to release",
      "Permission separated entry and verification",
      "Immutable audit trail on every change",
      "Amended report versioning",
      "Reagent lot and expiry traceability",
      "Quality control run recording",
      "Turnaround time targets and exception reports",
      "Department and analyst workload reporting",
      "Role based access control",
      "Structured data export for audits",
    ],
    process: [
      {
        title: "Workflow mapping",
        text: "We document how a sample currently moves through your lab, where it waits, and who touches it. That map becomes the state model the system enforces.",
      },
      {
        title: "Master data",
        text: "Test catalogue, departments, sample types, containers, reference ranges, panels, and signatory rights are defined and verified against your current reports.",
      },
      {
        title: "Control setup",
        text: "Verification rules, amendment policy, permission matrix, and turnaround targets are configured to match how your lab is supposed to run.",
      },
      {
        title: "Validation run",
        text: "We run real samples through the system in parallel with your current process and check that every report, flag, and audit entry comes out correct.",
      },
      {
        title: "Go live and review",
        text: "After cutover we review turnaround and exception reports with you, because the first month of real data usually reveals a bottleneck nobody knew was there.",
      },
    ],
    reasons: [
      "We build traceability in from the start rather than bolting an audit log onto a billing tool.",
      "Nepal based team that has sat in labs here and knows the difference between what a manual says and what the morning rush allows.",
      "Configurable to your test menu and your signatory structure instead of forcing an imported workflow onto your staff.",
      "The same team supports the system long term, so a change request goes to people who already know your setup.",
      "Works alongside our other operational products when a lab is part of a larger hospital or service business.",
    ],
    related: [
      {
        href: "/products/nidanyo",
        label: "Nidanyo lab management system",
        text: "The product page, with the full module list and what each one covers.",
      },
      {
        href: "/lab-software-in-nepal",
        label: "lab software in Nepal",
        text: "The operational side: registration, reports, billing, and reagent stock.",
      },
      {
        href: "/hospital-management-software-in-nepal",
        label: "hospital management software in Nepal",
        text: "When the lab is one department inside a hospital system.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation in Nepal",
        text: "Automate the reporting, alerts, and handoffs around the lab itself.",
      },
    ],
    faqs: [
      {
        question: "What is a laboratory information management system?",
        answer:
          "A laboratory information management system, or LIMS, is software that tracks samples and their results through the whole laboratory workflow with a recorded history at every step. It is different from a billing package with report printing because it can tell you who did what, when, and to which sample, which is what audits and accreditation reviews ask for.",
      },
      {
        question: "Does Nidanyo support accreditation requirements?",
        answer:
          "Nidanyo provides the traceability that accreditation preparation depends on: chain of custody, separated entry and verification, immutable audit trails, amended report versioning, reagent lot recording, and quality control run history. Accreditation itself is granted to your lab based on your whole quality system, so the software supports the process rather than delivering the certificate.",
      },
      {
        question: "Can we control who is allowed to verify results?",
        answer:
          "Yes. Signatory rights are assigned per user and can be limited by department, so a biochemistry signatory cannot release a histopathology report. Entry and verification are separate permissions, and the same person cannot silently do both unless you deliberately configure it that way.",
      },
      {
        question: "What happens if a released report has to be corrected?",
        answer:
          "The original is preserved and the correction is recorded against it with the user and the reason. The report is reissued as an amended version, clearly marked, so anyone holding the earlier copy can tell it has been superseded. Nothing is overwritten in place.",
      },
      {
        question: "Can we measure turnaround time per test?",
        answer:
          "Yes, and this is usually the report that changes how a lab runs. Because each state change is timestamped, the system can show collection to receipt, receipt to result, and result to release separately, per test and per department, against targets you set. Delays stop being a matter of opinion.",
      },
      {
        question: "Is our patient data secure?",
        answer:
          "Access is role based, so staff see only what their role requires, and every view and change is logged. Hosted deployments run with encrypted connections and scheduled backups. Labs that prefer to keep data physically inside the building can run the system on their own server, which we set up and support the same way.",
      },
    ],
  },

  socialMedia: {
    slug: "social-media-marketing-agency-in-nepal",
    path: "/social-media-marketing-agency-in-nepal",
    metaTitle: "Social Media Marketing Agency in Nepal | Infobytes Nepal",
    metaDescription:
      "Social media marketing for Nepali businesses. Facebook, Instagram, and TikTok content and ads run against real inquiries, with lead follow up tracked instead of guessed.",
    ogTitle: "Social Media Marketing Agency in Nepal | Infobytes Nepal",
    ogDescription:
      "Facebook, Instagram, and TikTok marketing for businesses in Nepal, connected to lead tracking so you can see what the spend actually produced.",
    keyword: "Social Media Marketing Agency in Nepal",
    heroTitle: "Social Media Marketing Agency in Nepal",
    heroIntro:
      "Facebook, Instagram, and TikTok are where most buying decisions in Nepal start. Infobytes Nepal runs social media for businesses that want inquiries they can trace, not a monthly report full of impressions.",
    overview: {
      title: "Reach is easy to buy. Inquiries are the harder part.",
      paragraphs: [
        "Almost every business in Nepal has a Facebook page, and a good number now have a TikTok account that somebody posts to when there is time. The page collects followers, the boosted posts collect reach, and at the end of the month nobody can say which of it produced a customer. That gap is the whole problem, and it is not solved by posting more.",
        "We work the other way around. Before anything gets scheduled we agree on what a result looks like for your business: a phone call, a Messenger inquiry, a form submission, a shop visit, a booking. Then the content and the ad spend are built to produce that, and the inquiries are logged somewhere you can look at them later rather than sitting unanswered in a Page inbox.",
        "Content is made for the platform it runs on. A carousel that works on Instagram is not a TikTok. Nepali and English both get used, and which one leads depends on who is buying. We shoot and edit short video because that is what actually moves in this market now, and we keep the production practical enough to sustain weekly rather than making one expensive film a year.",
        "Paid spend stays honest. Small, tested budgets first, then more behind whatever produced inquiries. We tell you what a campaign cost per inquiry, and if the number is bad we say so instead of reframing it as engagement growth.",
      ],
    },
    problems: [
      "The page posts regularly but nobody can connect a single sale to it.",
      "Boosted posts eat budget every month with no comparison between what worked and what did not.",
      "Messenger and Instagram inquiries pile up unanswered because there is no owner and no queue.",
      "Content is made once a month in a rush, so it looks nothing like what performs on the platform.",
      "Competitors on TikTok are taking attention the business does not know how to compete for.",
      "Reports show reach, likes, and follower growth, none of which pay salaries.",
    ],
    solutions: [
      "Define the actual conversion for your business first, then build content and campaigns to produce it.",
      "Run a content calendar with a mix that suits the platform, weighted toward short video where the attention is.",
      "Write and shoot in the language your customers buy in, which in much of Nepal means Nepali first.",
      "Route Messenger, Instagram, and form inquiries into a tracked list so follow up has an owner and a deadline.",
      "Test ad creative in small budgets, then scale the ones that produce inquiries and stop the ones that do not.",
      "Report cost per inquiry and follow up outcome alongside reach, so spend decisions have something real behind them.",
    ],
    features: [
      "Facebook and Instagram page management",
      "TikTok content and campaign management",
      "Short video shooting and editing",
      "Nepali and English copywriting",
      "Post design and carousel creative",
      "Meta ad campaign setup and optimisation",
      "Audience and retargeting setup",
      "Inquiry response handling",
      "Lead capture and tracking integration",
      "Monthly reporting on cost per inquiry",
      "Competitor and category monitoring",
      "Festival and seasonal campaign planning",
    ],
    process: [
      {
        title: "Audit",
        text: "We look at your current pages, past boosted posts, competitor activity, and where your inquiries come from today.",
      },
      {
        title: "Plan",
        text: "We agree on the conversion that matters, the platforms worth your budget, and a content mix you can sustain.",
      },
      {
        title: "Produce",
        text: "Shooting, editing, design, and copy get done on a calendar, so posting stops depending on someone having a free afternoon.",
      },
      {
        title: "Run",
        text: "Campaigns go live with small tests first, budget shifts to what works, and inquiries get routed to a tracked queue.",
      },
      {
        title: "Report and adjust",
        text: "Each month we review cost per inquiry and what happened to those inquiries, then change the plan based on it.",
      },
    ],
    reasons: [
      "We connect social spend to lead tracking, so results are a number rather than a feeling.",
      "Content is produced for Nepali audiences by people who live here and know what lands.",
      "Short video is treated as the main format, not an afterthought.",
      "The same team can fix the website and landing pages the ads point at, which is often where campaigns are actually losing.",
      "We will tell you when paid social is the wrong channel for your business instead of selling you a retainer.",
    ],
    related: [
      {
        href: "/digital-marketing-company-in-nepal",
        label: "digital marketing company in Nepal",
        text: "The full marketing picture, including search, content, and campaigns together.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Search brings buyers who are already looking. Social builds the demand.",
      },
      {
        href: "/graphic-design-company-in-nepal",
        label: "graphic design company in Nepal",
        text: "Creative, brand assets, and post design that keep the feed consistent.",
      },
      {
        href: "/products/leadrack",
        label: "LeadRack lead tracking",
        text: "Where social inquiries land so follow up stops depending on memory.",
      },
    ],
    faqs: [
      {
        question: "How much does social media marketing cost in Nepal?",
        answer:
          "Management retainers for a small business typically run from around NPR 20,000 to NPR 60,000 per month depending on how much content is produced, and ad spend is separate and paid directly to Meta or TikTok. Most businesses starting out put a modest amount into ads for the first two months to learn what converts before committing a larger budget.",
      },
      {
        question: "Is TikTok worth it for a business in Nepal?",
        answer:
          "For consumer facing businesses, usually yes, because attention has genuinely moved there. For B2B and technical services it is weaker and the same budget often does more on Facebook and search. We look at where your buyers actually are before recommending a platform, rather than adding TikTok because it is the current answer.",
      },
      {
        question: "Do you write in Nepali or English?",
        answer:
          "Both, and the choice depends on who is buying. Consumer campaigns in most of Nepal perform better in Nepali or in a natural mix, while corporate and B2B audiences often expect English. We do not translate the same copy into both, because what works in one rarely works in the other.",
      },
      {
        question: "Will you handle the inquiries that come in?",
        answer:
          "We can respond to first contact and qualify inquiries, and we route them to a tracked list so your sales team sees them with the context. Deep product questions and pricing usually stay with your team, since they answer them better and faster than we can.",
      },
      {
        question: "How long before we see results?",
        answer:
          "Paid campaigns produce inquiries within days, though the first two to four weeks are mostly learning which creative and audience combinations work. Organic growth is slower and takes a few months of consistent posting before it carries meaningful weight on its own.",
      },
    ],
  },

  itTraining: {
    slug: "it-training-institute-in-nepal",
    path: "/it-training-institute-in-nepal",
    metaTitle: "IT Training Institute in Nepal | Infobytes Nepal",
    metaDescription:
      "Practical IT training in Nepal from a working software team. Web development, frontend, digital marketing, and SEO taught on real projects with mentorship and portfolio work.",
    ogTitle: "IT Training in Nepal | Infobytes Nepal",
    ogDescription:
      "Web development, frontend, digital marketing, and SEO training in Nepal, taught by a team that ships client work rather than lectures from slides.",
    keyword: "IT Training in Nepal",
    heroTitle: "IT Training in Nepal",
    heroIntro:
      "Infobytes Nepal runs practical training in web development, frontend engineering, digital marketing, and SEO. It is taught by the people who build client projects here, which means the examples come from real work rather than a textbook chapter.",
    overview: {
      title: "The gap is not knowledge. It is the ability to finish something.",
      paragraphs: [
        "Nepal has no shortage of IT courses, and no shortage of graduates who can describe a framework but have never taken a project from an empty folder to something running on a real domain. Employers here notice the difference within one interview. So the question worth asking about any training is not what the syllabus covers, but what you will have built by the end of it.",
        "Our training is built around that. Every track ends with work that exists: a deployed site, a working frontend application, a live campaign with real numbers, an audited and improved page. You leave with something you can show, explain, and defend, which is a very different position from leaving with a certificate.",
        "Classes stay small because mentorship does not scale past a certain room size. Sessions mix short explanation with long hands on time, and the questions that come up during the hands on part are usually where the real learning happens. Trainers are working developers and marketers from our own team, so when a student hits a problem that the tutorial did not cover, the answer comes from experience rather than a search.",
        "We are honest about who this suits. If you want a certificate to attach to a CV quickly, there are faster options. If you want to be able to do the work, this is built for that, and it asks for real hours from you.",
      ],
    },
    problems: [
      "Courses teach syntax but never take a project through deployment, so students have nothing to show an employer.",
      "Class sizes are too large for anyone to get unstuck, so the students who fall behind stay behind.",
      "The stack being taught is years behind what companies here actually hire for.",
      "Trainers have not shipped production work, so they cannot answer questions the tutorial does not cover.",
      "No feedback on code quality, so bad habits get reinforced for months.",
      "No help with the step after the course, which is where most people actually get stuck.",
    ],
    solutions: [
      "Every track is project based and ends with deployed, reviewable work rather than a set of exercises.",
      "Small batches so trainers can sit with individual students during hands on sessions.",
      "Stack and tooling chosen to match what employers in Kathmandu and remote clients are hiring for right now.",
      "Trainers drawn from the team that ships client projects, so examples and answers come from live experience.",
      "Code review on submitted work, with feedback on structure and readability, not just whether it runs.",
      "Guidance on portfolio, CV, and interview preparation as part of the track rather than as an afterthought.",
    ],
    features: [
      "Web development fundamentals",
      "Frontend with React and Next.js",
      "Responsive interface building",
      "Git and collaborative workflow",
      "Backend and database basics",
      "Deployment and hosting",
      "SEO fundamentals and technical audit",
      "Digital marketing and campaign setup",
      "Analytics and reporting",
      "Portfolio project mentorship",
      "Code review and feedback",
      "Interview and CV preparation",
    ],
    process: [
      {
        title: "Placement talk",
        text: "A short conversation about your background and goal, so you start in the right track instead of the popular one.",
      },
      {
        title: "Fundamentals",
        text: "The core concepts, taught with short explanation and long practice. This is where habits get set.",
      },
      {
        title: "Guided build",
        text: "You build a real project with a trainer available, hitting real problems and learning how to work through them.",
      },
      {
        title: "Independent project",
        text: "You take one on your own, with code review and feedback rather than a hand held solution.",
      },
      {
        title: "Portfolio and next step",
        text: "We help you present the work properly and prepare for what comes after, whether that is a job, freelance, or your own product.",
      },
    ],
    reasons: [
      "Taught by a working software team in Nepal, not by people whose only project is the course itself.",
      "Small batches, so being stuck is temporary rather than permanent.",
      "You finish with deployed work you can point at, which is what actually gets interviews here.",
      "Honest advice about which track fits you, including telling you when the answer is none of them.",
      "Strong students sometimes end up working with us or on projects we refer, and that path is open rather than promised.",
    ],
    related: [
      {
        href: "/services",
        label: "services from Infobytes Nepal",
        text: "The client work our trainers do day to day, which is where the course material comes from.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development in Nepal",
        text: "The kind of projects the web track prepares you to work on.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "What the SEO training is based on, drawn from campaigns we run.",
      },
      {
        href: "/about",
        label: "the Infobytes Nepal team",
        text: "The people who teach these tracks and what they work on.",
      },
    ],
    faqs: [
      {
        question: "Do I need a computer science background?",
        answer:
          "For the web and frontend tracks, no. What matters more is time and consistency, since the material builds week on week and falling behind is hard to recover from. The digital marketing and SEO tracks need no technical background at all, just comfort with a computer.",
      },
      {
        question: "How long does a track take?",
        answer:
          "Most tracks run two to four months depending on depth and how many hours a week you can give. The independent project at the end takes as long as it takes, and we would rather you finish it properly than hit an arbitrary date.",
      },
      {
        question: "Do you provide a certificate?",
        answer:
          "Yes, on completion including the final project. We will also be straight with you: in this market, the deployed project and the code behind it open more doors than the certificate does, which is why the project is the part we insist on.",
      },
      {
        question: "Is there a job guarantee?",
        answer:
          "No, and we would be careful with anyone who offers one. What we do is prepare you properly, review your portfolio and CV, run interview practice, and refer strong students to openings we hear about. Some students have gone on to work with us directly.",
      },
      {
        question: "Are classes online or in person?",
        answer:
          "Both run, with in person sessions at our Bhaktapur office and online batches for students elsewhere in Nepal. The hands on and code review parts work well online. Students who can attend in person tend to get unstuck faster, simply because asking is easier.",
      },
    ],
  },

  websiteMaintenance: {
    slug: "website-maintenance-services-in-nepal",
    path: "/website-maintenance-services-in-nepal",
    metaTitle: "Website Maintenance Services in Nepal | Infobytes Nepal",
    metaDescription:
      "Website maintenance and support in Nepal. Updates, security patching, backups, uptime monitoring, speed fixes, and content changes handled on a monthly plan.",
    ogTitle: "Website Maintenance Services in Nepal | Infobytes Nepal",
    ogDescription:
      "Keep your site secure, fast, and current. Monthly website maintenance for businesses in Nepal, including backups, patching, monitoring, and content updates.",
    keyword: "Website Maintenance Services in Nepal",
    heroTitle: "Website Maintenance Services in Nepal",
    heroIntro:
      "A website is not finished at launch. Infobytes Nepal keeps sites patched, backed up, monitored, fast, and current, so the problems get found by us on a Tuesday instead of by a customer on a Saturday.",
    overview: {
      title: "Most sites in Nepal fail quietly, months before anyone notices",
      paragraphs: [
        "The usual story goes like this. A business pays for a website, it launches, everyone is pleased. Nobody touches it for two years. Then the SSL certificate expires and browsers start showing a warning, or a WordPress plugin that has not been updated since 2023 gets exploited and the site starts serving spam links, or the hosting account lapses because the renewal email went to a developer who left. By the time somebody notices, Google has already noticed too.",
        "None of that is exotic. It is ordinary neglect, and it is preventable with a small amount of regular attention. Maintenance means checking that backups actually restore, applying security updates before they are exploited, watching uptime so an outage is detected in minutes, keeping page speed from drifting as content is added, and fixing the broken links and missing images that accumulate on any site people edit.",
        "We also treat content changes as part of maintenance. Businesses put off updating a price list, a team page, or a service description because it means emailing a developer and waiting. On a maintenance plan those go into a queue and get done, which keeps the site accurate. An accurate site converts better and ranks better than a stale one.",
        "Plans are monthly and sized to the site. A five page brochure site needs a fraction of the attention that an ecommerce store with payments and daily orders does, and we price accordingly rather than selling one package to everyone.",
      ],
    },
    problems: [
      "Nobody knows whether the site is backed up, and nobody has ever tested a restore.",
      "The CMS and its plugins are several versions behind, each one a published vulnerability.",
      "The domain or SSL renewal sits with a former employee or an agency you no longer work with.",
      "The site goes down and you find out from a customer instead of from monitoring.",
      "Pages have slowed down over the years as images and scripts piled up, and mobile has got worse.",
      "Simple content updates wait weeks because they depend on a developer who is busy with other work.",
      "Contact forms stopped delivering email months ago and the inquiries have been going nowhere.",
    ],
    solutions: [
      "Automated backups with a tested restore path, kept off the same server as the site itself.",
      "Scheduled security patching for the CMS, plugins, themes, and server packages, applied on a staging copy first where the site warrants it.",
      "Domain, SSL, and hosting renewals tracked in one place with alerts well before expiry, and control of them handed back to you.",
      "Uptime and error monitoring so an outage or a broken form is detected in minutes and acted on.",
      "Periodic speed and mobile checks with real fixes, not just a score screenshot.",
      "A content update queue with an agreed turnaround, so ordinary changes stop needing a project.",
      "Monthly reporting on what was updated, what broke, what was fixed, and what is worth doing next.",
    ],
    features: [
      "Daily or weekly offsite backups",
      "Restore testing",
      "CMS, plugin, and theme updates",
      "Security hardening and malware scanning",
      "SSL and domain renewal tracking",
      "Uptime and error monitoring",
      "Form delivery checks",
      "Page speed and Core Web Vitals checks",
      "Broken link and image fixes",
      "Content and image updates",
      "Search Console and analytics monitoring",
      "Monthly maintenance report",
    ],
    process: [
      {
        title: "Takeover audit",
        text: "We document the hosting, domain, CMS, plugins, access, and current state of the site, including anything already broken or exposed.",
      },
      {
        title: "Stabilise",
        text: "Backups, monitoring, and SSL get set up properly first, then outstanding security updates are applied carefully.",
      },
      {
        title: "Fix the backlog",
        text: "Broken forms, dead links, missing images, and the worst speed problems get cleared before routine maintenance starts.",
      },
      {
        title: "Routine cycle",
        text: "Updates, checks, monitoring, and your content requests run on a fixed monthly rhythm.",
      },
      {
        title: "Review",
        text: "A monthly report covers what happened and what is worth improving next, so the site keeps getting better instead of just staying alive.",
      },
    ],
    reasons: [
      "We take over sites built by other agencies without making it awkward, including ones with no documentation.",
      "You keep ownership of your domain, hosting, and code. We do not hold access hostage.",
      "Fixed monthly cost, so maintenance stops being a surprise invoice after something breaks.",
      "The same team can improve the site properly when you are ready, rather than patching around a design that has stopped working.",
      "Local support in Nepali or English, reachable when something is actually wrong.",
    ],
    related: [
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "When the site is beyond maintaining and needs rebuilding properly.",
      },
      {
        href: "/wordpress-development-company-in-nepal",
        label: "WordPress development in Nepal",
        text: "Most maintenance work in Nepal is WordPress. This covers what we do with it.",
      },
      {
        href: "/seo-company-in-nepal",
        label: "SEO company in Nepal",
        text: "Maintenance protects rankings. SEO is how you grow them.",
      },
      {
        href: "/website-cost-in-nepal",
        label: "website cost in Nepal",
        text: "What a website costs to build and what it costs to keep running.",
      },
    ],
    faqs: [
      {
        question: "How much does website maintenance cost in Nepal?",
        answer:
          "A small business brochure site typically runs from around NPR 3,000 to NPR 8,000 per month, a larger content or corporate site from around NPR 8,000 to NPR 20,000, and an ecommerce store with payments and daily orders higher again depending on volume. Hosting and domain renewals are separate and paid to the provider directly.",
      },
      {
        question: "Can you maintain a site another company built?",
        answer:
          "Yes, and most of our maintenance work is exactly that. We start with an audit of the hosting, code, and access, tell you honestly what condition it is in, and then take it on. Occasionally a site is built badly enough that maintaining it costs more than replacing it, and we will say so rather than quietly billing monthly.",
      },
      {
        question: "What if my site gets hacked?",
        answer:
          "On a maintenance plan, we clean the infection, restore from a known good backup, close the entry point, and check for anything left behind. Sites not on a plan can still come to us for recovery as one off work. The honest note is that recovery costs several months of maintenance fees, which is why patching is the cheap part.",
      },
      {
        question: "Do you handle content updates too?",
        answer:
          "Yes. Text edits, image swaps, new pages, price and team updates, and posting blog articles are included up to an agreed amount of time each month. Larger work like a new section or a redesign is quoted separately, and we will tell you which side of the line a request falls on before starting.",
      },
      {
        question: "Do I keep control of my hosting and domain?",
        answer:
          "Always. They stay in your name with your billing, and we work with access you grant. If you ever move to another provider we hand over cleanly. Holding a client's domain hostage is a common practice here and not one we take part in.",
      },
    ],
  },

  butwal: {
    slug: "it-company-in-butwal",
    path: "/it-company-in-butwal",
    metaTitle: "IT Company in Butwal | Infobytes Nepal",
    metaDescription:
      "Infobytes Nepal works with businesses in Butwal and Rupandehi on websites, custom software, billing and inventory systems, SEO, and digital marketing.",
    ogTitle: "IT Company in Butwal | Infobytes Nepal",
    ogDescription:
      "Websites, custom software, and digital marketing for businesses in Butwal, Bhairahawa, and across Rupandehi.",
    keyword: "IT Company in Butwal",
    heroTitle: "IT Company Serving Butwal",
    heroIntro:
      "Infobytes Nepal builds websites, custom software, and marketing systems for businesses in Butwal, Bhairahawa, and the wider Rupandehi area. We work remotely with regular calls and travel when a project needs us on site.",
    overview: {
      title: "Butwal businesses are outgrowing the tools they started with",
      paragraphs: [
        "Butwal has become one of the busiest commercial centres outside the Kathmandu valley. Trading houses, distributors, hospitals and clinics, colleges, hotels, and manufacturing units here run at a scale that spreadsheets and paper registers were never meant to handle. The bottleneck is rarely demand. It is that the business has no reliable view of its own stock, receivables, service calls, or leads.",
        "The other common gap is online presence. A business in Butwal with a strong local reputation often has no website at all, or one built years ago that does not work on a phone. Meanwhile customers search before they call, and the businesses that show up in those searches take the inquiry regardless of who has been in the market longer.",
        "We work with businesses here on both. That means websites built to load fast on mobile data and to be found in local search, and it means operational software: inventory and billing, distribution and route sales, service and complaint tracking, lead follow up, and reporting that a manager can actually read.",
        "Distance is a practical question and we treat it as one. Discovery happens over calls and screen shares, updates come on a fixed rhythm rather than when you chase, and we travel to Butwal for the parts that need to be done in the room, like watching how your counter actually operates or training staff on a new system.",
      ],
    },
    problems: [
      "Stock, sales, and receivables live across separate registers, so nobody has a current picture of the business.",
      "Distributors and route sales staff report by phone, and the numbers arrive late and inconsistent.",
      "The business has no website, or one that was built years ago and breaks on a phone.",
      "Competitors from Kathmandu appear in search results for local buyers who are ready to purchase.",
      "Customer inquiries arrive across Facebook, Viber, and phone with no shared record of what was promised.",
      "Reporting for owners means asking three people and reconciling three answers.",
    ],
    solutions: [
      "Build billing, inventory, and receivables into one system so the daily position is a screen, not a reconstruction.",
      "Give field sales and distribution staff a mobile way to log visits and orders, so reporting stops depending on phone calls.",
      "Build a fast, mobile first website that loads on ordinary connections and is structured for local search.",
      "Set up Google Business Profile and local SEO so buyers searching in Butwal find you before they find someone from outside.",
      "Route inquiries from every channel into one tracked list with an owner and a follow up date.",
      "Deliver management reporting that answers the owner's actual questions rather than producing a data dump.",
    ],
    features: [
      "Business website design and development",
      "Ecommerce and online ordering",
      "Billing and inventory software",
      "Distribution and route sales systems",
      "Service and complaint tracking",
      "Lead tracking and CRM",
      "Local SEO and Google Business Profile",
      "Social media and campaign management",
      "Mobile applications",
      "Reporting dashboards for owners",
      "Staff training and handover",
      "Ongoing support and maintenance",
    ],
    process: [
      {
        title: "Call",
        text: "A first conversation about what the business does, where the friction is, and what a fix is worth to you.",
      },
      {
        title: "Study",
        text: "We look at your current process in detail over screen shares, or in person in Butwal when the work needs it.",
      },
      {
        title: "Scope",
        text: "A clear written scope with what is in the first version, what it costs, and how long it takes.",
      },
      {
        title: "Build",
        text: "Development with regular demos, so you are seeing progress rather than waiting for a reveal at the end.",
      },
      {
        title: "Launch and support",
        text: "Training for your staff, a careful cutover, and support afterwards while people settle into the new way.",
      },
    ],
    reasons: [
      "Nepal based team, so pricing, payment, and communication all work the way you expect locally.",
      "Experience with distribution, service, and sales operations, which is most of what Butwal businesses run.",
      "Remote delivery done properly, with a fixed update rhythm rather than silence between milestones.",
      "We travel for the parts that genuinely need presence instead of pretending everything works over a call.",
      "One team for website, software, and marketing, so the pieces are planned to fit together.",
    ],
    related: [
      {
        href: "/it-company-in-nepal",
        label: "IT company in Nepal",
        text: "How we work with businesses across the country.",
      },
      {
        href: "/software-development-company-in-nepal",
        label: "software development company in Nepal",
        text: "Custom systems for billing, inventory, distribution, and service work.",
      },
      {
        href: "/web-development-company-in-nepal",
        label: "web development company in Nepal",
        text: "Websites built to load fast on mobile and be found in local search.",
      },
      {
        href: "/inventory-management-software-in-nepal",
        label: "inventory management software in Nepal",
        text: "For trading houses and distributors carrying real stock.",
      },
    ],
    faqs: [
      {
        question: "Do you have an office in Butwal?",
        answer:
          "Our office is in Kaushaltar, Bhaktapur, and we serve Butwal clients remotely with travel when a project needs it. In practice that means calls and screen shares for most of the work, and someone on site for requirement study, staff training, and go live.",
      },
      {
        question: "Can you visit our business in Butwal?",
        answer:
          "Yes, for projects where it matters. Watching how your counter, warehouse, or service desk actually runs tells us things a call never will, and training lands better in person. We plan those visits into the project so the cost is known upfront rather than added later.",
      },
      {
        question: "How do payments and contracts work?",
        answer:
          "Everything is in Nepali rupees with a written scope and a milestone based payment schedule, typically an advance to start, a payment at an agreed midpoint, and the balance at handover. Bank transfer is standard, and we issue proper invoices with PAN details.",
      },
      {
        question: "What does a website cost for a Butwal business?",
        answer:
          "A professional business website in Nepal generally runs from around NPR 50,000 to NPR 150,000, with custom builds and ecommerce higher depending on features. The full breakdown of what moves that number is on our website cost guide, and we quote against your actual requirement rather than a package.",
      },
    ],
  },

  chitwan: {
    slug: "it-company-in-chitwan",
    path: "/it-company-in-chitwan",
    metaTitle: "IT Company in Chitwan | Infobytes Nepal",
    metaDescription:
      "Infobytes Nepal builds websites, booking systems, custom software, and digital marketing for businesses in Chitwan, Bharatpur, and Sauraha.",
    ogTitle: "IT Company in Chitwan | Infobytes Nepal",
    ogDescription:
      "Websites, booking systems, hospital and lab software, and digital marketing for businesses across Chitwan and Bharatpur.",
    keyword: "IT Company in Chitwan",
    heroTitle: "IT Company Serving Chitwan",
    heroIntro:
      "Infobytes Nepal works with hotels, hospitals, colleges, agro businesses, and traders across Chitwan, Bharatpur, and Sauraha. Websites that bring bookings, software that runs operations, and marketing that produces inquiries you can trace.",
    overview: {
      title: "Chitwan sells to people who are searching from somewhere else",
      paragraphs: [
        "Chitwan's economy has an unusual shape. A large part of it depends on customers who are not in Chitwan when they decide: tourists booking a resort in Sauraha from Kathmandu or abroad, patients choosing a hospital in Bharatpur from across the region, students comparing colleges before they travel. Almost all of those decisions start on a phone, on a search or a social feed, days before anyone picks up a phone to call.",
        "That makes the website and what people find about you online far more consequential here than in a business that lives on walk in trade. A resort with no direct booking path pays commission on every guest an aggregator sends. A hospital whose site does not list departments and doctors properly loses patients who were actively looking for exactly that. These are not branding problems, they are revenue problems.",
        "The second half is operations. Bharatpur's hospitals and diagnostic centres, the colleges, and the agro and trading businesses around them all run at a scale where paper registers cost real money in errors and delays. We build the systems underneath: lab and hospital software, billing and inventory, admissions and student records, service tracking, and reporting owners can read.",
        "We work remotely with a fixed communication rhythm and travel to Chitwan when a project needs someone in the room, which is usually during requirement study and staff training.",
      ],
    },
    problems: [
      "Resorts and hotels depend on aggregator platforms and pay commission on bookings that could have come direct.",
      "The website looks acceptable on a laptop but is slow and awkward on the phones most customers actually use.",
      "Hospitals and diagnostic centres run registration, reporting, and billing on separate systems that do not reconcile.",
      "Colleges handle admissions, fees, and student records across spreadsheets held by different departments.",
      "Inquiries arrive on Facebook, phone, and email with no shared record, so follow up depends on who remembers.",
      "Nobody can say which marketing spend produced which booking or admission.",
    ],
    solutions: [
      "Build direct booking and inquiry paths into the website so a share of bookings stops carrying commission.",
      "Design mobile first for real Nepali network conditions, because that is where the decision is being made.",
      "Put lab, hospital, or clinic operations on one system covering registration, reporting, and billing together.",
      "Build admission, fee, and student record systems for colleges so departments stop keeping parallel copies.",
      "Route every inquiry into one tracked list with an owner, a follow up date, and a visible outcome.",
      "Connect campaigns to inquiry tracking so marketing spend can be judged on bookings rather than reach.",
    ],
    features: [
      "Hotel and resort websites with direct booking",
      "Hospital and clinic websites",
      "Lab and diagnostic centre software",
      "College and admission management systems",
      "Billing and inventory software",
      "Ecommerce and online ordering",
      "Local SEO and Google Business Profile",
      "Social media and campaign management",
      "Lead tracking and follow up systems",
      "Mobile applications",
      "Management reporting dashboards",
      "Ongoing maintenance and support",
    ],
    process: [
      {
        title: "Call",
        text: "We start by understanding the business, where customers come from, and what is currently leaking.",
      },
      {
        title: "Study",
        text: "A closer look at your process and your current online presence, over screen shares or on site in Bharatpur.",
      },
      {
        title: "Scope",
        text: "A written scope with cost and timeline, prioritised so the highest value part ships first.",
      },
      {
        title: "Build",
        text: "Development with regular demos and feedback, rather than a long silence and a reveal at the end.",
      },
      {
        title: "Launch and support",
        text: "Staff training, a careful launch, and support while the new process settles in.",
      },
    ],
    reasons: [
      "Real experience with hospitality, healthcare, and education workflows, which is much of Chitwan's economy.",
      "We build the lab and hospital systems ourselves, so healthcare clients are not getting a reseller.",
      "Mobile and speed treated as requirements rather than a final check, because your customers are on phones.",
      "Remote work handled with discipline, plus travel for the parts that need presence.",
      "Website, software, and marketing from one team, planned to support each other.",
    ],
    related: [
      {
        href: "/it-company-in-nepal",
        label: "IT company in Nepal",
        text: "How we work with clients across the country.",
      },
      {
        href: "/lab-software-in-nepal",
        label: "lab software in Nepal",
        text: "Nidanyo, for the diagnostic centres and pathology labs around Bharatpur.",
      },
      {
        href: "/hospital-management-software-in-nepal",
        label: "hospital management software in Nepal",
        text: "For hospitals running OPD, IPD, pharmacy, and lab together.",
      },
      {
        href: "/web-design-company-in-nepal",
        label: "web design company in Nepal",
        text: "Websites built for mobile, speed, and direct bookings.",
      },
    ],
    faqs: [
      {
        question: "Do you work with hotels and resorts in Sauraha?",
        answer:
          "Yes. The work that usually matters most is a fast mobile site with a direct booking or inquiry path, proper photography presentation, and local search visibility, so a share of bookings arrives without an aggregator commission attached. We also connect inquiries to a tracked follow up list, since resort inquiries often go cold from slow replies rather than price.",
      },
      {
        question: "Can you build software for a hospital or lab in Bharatpur?",
        answer:
          "Yes, and this is core work for us rather than something we outsource. Nidanyo is our own laboratory operations and information management system, and we build hospital systems covering registration, OPD and IPD, pharmacy, and billing. Being the actual developers means changes come from us directly.",
      },
      {
        question: "Do you visit Chitwan?",
        answer:
          "Yes, for requirement study, staff training, and go live on projects where it matters. Day to day work runs over calls and screen shares with a fixed update rhythm, so you are not waiting on a visit for progress.",
      },
      {
        question: "How do we start?",
        answer:
          "Send a short note about your business and what is not working, through the contact form or by phone. The first call is a conversation, not a pitch, and if what you need is smaller or different from what you asked for we will tell you.",
      },
    ],
  },

  biratnagar: {
    slug: "it-company-in-biratnagar",
    path: "/it-company-in-biratnagar",
    metaTitle: "IT Company in Biratnagar | Infobytes Nepal",
    metaDescription:
      "Infobytes Nepal builds custom software, ERP and inventory systems, websites, and digital marketing for industries, traders, and businesses in Biratnagar and Morang.",
    ogTitle: "IT Company in Biratnagar | Infobytes Nepal",
    ogDescription:
      "Custom software, inventory and distribution systems, websites, and marketing for businesses across Biratnagar and Morang.",
    keyword: "IT Company in Biratnagar",
    heroTitle: "IT Company Serving Biratnagar",
    heroIntro:
      "Infobytes Nepal works with manufacturers, distributors, traders, hospitals, and colleges across Biratnagar and Morang. Custom operational software, websites built for mobile and search, and marketing tied to real inquiries.",
    overview: {
      title: "Industrial scale with office systems that never caught up",
      paragraphs: [
        "Biratnagar is an industrial city, and industrial businesses fail at a specific point. Production and trade scale up, staff numbers grow, branches and depots open, and the office is still running on the same spreadsheets and register books that worked when the owner could hold the whole picture in his head. The result is familiar: stock figures nobody trusts, receivables discovered late, dispatch and delivery disputes with no record, and month end taking a week.",
        "The fix is not necessarily a large ERP. Most businesses here need a focused system that covers the specific parts where money and time are actually leaking, built to how they work rather than to a foreign template. That is usually stock and warehouse, purchase and sales, receivables and credit control, and dispatch tracking, with reporting that gives the owner a real daily position.",
        "There is an online side too, and it is often ignored. B2B buyers, distributors, and institutional customers research suppliers before contacting them now, and a business with a strong local reputation but no findable web presence loses inquiries to competitors with a weaker product and a better website. For manufacturers and exporters this matters more, not less.",
        "We deliver remotely with a fixed rhythm of updates and demos, and travel to Biratnagar for requirement study, staff training, and go live, which are the parts that genuinely need someone in the room.",
      ],
    },
    problems: [
      "Stock across factory, godown, and depots is tracked separately, so the total figure is never quite right.",
      "Receivables and credit exposure per party are discovered when there is a problem rather than monitored.",
      "Dispatch and delivery disputes have no supporting record, so they get settled by argument.",
      "Purchase, production, and sales data live in different files, making costing an estimate.",
      "The business has no website, or one that is outdated and invisible in search.",
      "Owners get reports days late, assembled by hand from several sources.",
    ],
    solutions: [
      "Build multi location stock into one system so factory, godown, and depot figures roll into a single trusted total.",
      "Track receivables and credit limits per party with ageing, so exposure is visible before it becomes a loss.",
      "Record dispatch with a delivery trail, so disputes are settled by the record rather than by memory.",
      "Connect purchase, production, and sales data so costing and margin come from actual numbers.",
      "Build a website that presents the business credibly to B2B buyers and shows up in relevant searches.",
      "Deliver daily owner reporting from live data instead of a compiled file that arrives too late to act on.",
    ],
    features: [
      "Inventory and multi warehouse management",
      "Purchase, sales, and dispatch systems",
      "Receivables and credit control",
      "Distribution and depot management",
      "ERP style modules built to scope",
      "Barcode and stock movement tracking",
      "Corporate and product websites",
      "Ecommerce and B2B ordering portals",
      "Lead tracking and CRM",
      "Local and national SEO",
      "Owner and management dashboards",
      "Staff training and ongoing support",
    ],
    process: [
      {
        title: "Call",
        text: "We start with what the business does, how it is organised, and which part is costing you the most right now.",
      },
      {
        title: "Study",
        text: "A detailed look at your stock, purchase, sales, and dispatch process, on site in Biratnagar where it helps.",
      },
      {
        title: "Scope",
        text: "A written scope prioritised so the module that stops the biggest leak is built first, with cost and timeline.",
      },
      {
        title: "Build",
        text: "Development with regular demos, so your team shapes the system while it is still cheap to change.",
      },
      {
        title: "Launch and support",
        text: "Data migration, staff training, a careful cutover, and support through the first months of real use.",
      },
    ],
    reasons: [
      "We build focused systems rather than selling a large ERP licence for problems you do not have.",
      "Experience across inventory, distribution, sales, and service operations in Nepali businesses.",
      "Nepal based pricing, invoicing, and support, with no currency or timezone friction.",
      "Remote delivery with a disciplined update rhythm, plus travel for the parts that need presence.",
      "Software, website, and marketing from one team, so the pieces are planned together.",
    ],
    related: [
      {
        href: "/it-company-in-nepal",
        label: "IT company in Nepal",
        text: "How we work with businesses across the country.",
      },
      {
        href: "/erp-software-in-nepal",
        label: "ERP software in Nepal",
        text: "For manufacturers and distributors that need connected modules.",
      },
      {
        href: "/inventory-management-software-in-nepal",
        label: "inventory management software in Nepal",
        text: "Multi warehouse stock, movement tracking, and reorder control.",
      },
      {
        href: "/business-automation-software-nepal",
        label: "business automation in Nepal",
        text: "Removing the manual steps between purchase, dispatch, and reporting.",
      },
    ],
    faqs: [
      {
        question: "Do you serve Biratnagar from Kathmandu?",
        answer:
          "Yes. Our office is in Kaushaltar, Bhaktapur, and we deliver to Biratnagar clients remotely with travel built into the project for requirement study, staff training, and go live. Day to day work runs on calls, screen shares, and scheduled demos.",
      },
      {
        question: "Do we need a full ERP?",
        answer:
          "Usually not at first. Most businesses get more value from a focused system covering the two or three areas where money is actually leaking, built to how they work, and then extended. A full ERP is worth it when several departments genuinely need to share one data model, and we will tell you honestly which situation you are in.",
      },
      {
        question: "Can the system handle multiple warehouses and depots?",
        answer:
          "Yes. Multi location stock with transfers between them, location wise valuation, and a consolidated position is a standard requirement for businesses here and is built in rather than added as a workaround.",
      },
      {
        question: "Will you migrate our existing data?",
        answer:
          "Yes. Item masters, party ledgers, opening stock, and outstanding balances get mapped and imported during setup from whatever you use now, whether that is Excel, an older package, or a mix. Cleaning that data is usually the longest part of the project, and we do it with your team rather than around them.",
      },
    ],
  },
} satisfies Record<string, SeoLandingPage>;
