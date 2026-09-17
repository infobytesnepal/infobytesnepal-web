import type { SeoLandingPage } from "./seo-landing-pages";

/**
 * The Nidanyo cluster: lab software, LIMS, choosing a system, and cost.
 *
 * Moved out of `seo-landing-pages-extra.ts` for the same reason the Serviol
 * pages have their own file — `extra` is a grab-bag of pages added after the
 * first build-out, and a cluster that will keep growing is easier to reason
 * about whole. The object keys (`labSoftware`, `lims`) are unchanged, which is
 * what matters: `landing_page_content.page_key` stores them, so any copy an
 * editor has already saved against those two pages still resolves.
 *
 * On vocabulary, because these four pages have to agree with each other and
 * with the blog:
 *
 *   LIS   — Laboratory Information System. Patient-focused clinical records.
 *           This is what medical labs here actually call it.
 *   LIMS  — Laboratory Information Management System. Sample- and
 *           workflow-focused. The term skews research and pharma.
 *   LIOMS — Laboratory Information and Operations Management System. Both of
 *           the above plus billing, inventory, permissions, and reporting.
 *
 * LIOMS is how the blog post at /blog/laboratory-management-software-in-nepal
 * positions Nidanyo, and it is the honest description: a Nepali lab spends more
 * of its day on referral commissions and credit reconciliation than on anything
 * a research LIMS was designed for. That term was previously written down in
 * exactly one place — a database-backed blog post — which meant none of the
 * landing pages, none of `/api/v1/*`, and neither `llms.txt` nor the MCP tools
 * had ever heard of it. Stating it here puts it on every surface at once.
 *
 * The four pages answer four different readers and must not converge:
 *
 *   labSoftware  — "I run a lab and my process is breaking." Operations.
 *   lims         — "I need traceability I can defend in an audit." Compliance.
 *   bestLab      — "Which one do I buy?" Decision and comparison.
 *   labCost      — "What will this cost me?" Money.
 *
 * The blog post already owns the awareness half of this topic (the ten signs a
 * lab has outgrown its register, the feature checklist, and the questions to
 * put to any vendor). None of these pages repeat that checklist; `bestLab`
 * links to it instead, because two pages answering the same question with
 * different words is how a cluster dilutes itself.
 */
export const nidanyoSeoLandingPages = {
  labSoftware: {
    slug: "lab-software-in-nepal",
    path: "/lab-software-in-nepal",
    // Not "Best Lab Software in Nepal". The page's own H1, og:title, and body
    // never made that claim; only the title tag did, which left the one string
    // Google shows in results saying something the page does not support.
    metaTitle: "Lab Software in Nepal | Nidanyo by Infobytes Nepal",
    metaDescription:
      "Nidanyo by Infobytes Nepal is lab management software (LIS and LIOMS) for medical laboratories in Nepal. Patient registration, sample tracking, result verification, report printing, billing, referral commissions, and reagent stock in one system.",
    ogTitle: "Lab Software in Nepal | Nidanyo by Infobytes Nepal",
    ogDescription:
      "Lab management software built in Nepal for pathology labs and diagnostic centres. Registration to report release, billing, and reagent stock handled in one place.",
    keyword: "Lab Software in Nepal",
    heroTitle: "Lab Software in Nepal",
    heroIntro:
      "Infobytes Nepal builds Nidanyo, a complete medical laboratory information and operations management system (LIOMS) for polyclinics, medical laboratories, diagnostic centres, and pathology labs across Nepal and the World. It does what an LIS does and what a LIMS does, and adds the billing, referral, and inventory side a lab here runs on. One system carries a sample from the registration counter to a verified, printed report and the bill that goes with it.",
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
        href: "/best-lab-software-in-nepal",
        label: "how to choose lab software in Nepal",
        text: "Still comparing options? The criteria, the LIS versus LIMS versus LIOMS question, and where we are the wrong fit.",
      },
      {
        href: "/lab-software-cost-in-nepal",
        label: "what lab software costs in Nepal",
        text: "What moves the quotation, and which charges tend to appear after go live rather than in it.",
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
        question: "Is Nidanyo an LIS or a LIMS?",
        answer:
          "Both, which is why we call it a LIOMS — a laboratory information and operations management system. It does what an LIS does (patient-focused clinical records, results, and reports) and what a LIMS does (sample lifecycle, chain of custody, and verification), and adds the operational half a laboratory in Nepal runs on: billing, credit accounts, referral commissions, reagent inventory, permissions, and management reporting.",
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
    metaTitle: "Laboratory Information Management System in Nepal | LIMS",
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
        href: "/best-lab-software-in-nepal",
        label: "how to choose lab software in Nepal",
        text: "Why a research LIMS and a clinical LIS are not interchangeable, and which one your lab is actually buying.",
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
        question: "Is a LIMS the same thing as an LIS?",
        answer:
          "No. An LIS, a laboratory information system, is built around the patient and the clinical record, while a LIMS is built around the sample and the workflow, with chain of custody, batching, and instrument runs at the centre. Most medical laboratories need both, plus billing and inventory on top, which is the combination we call a LIOMS and which Nidanyo provides.",
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


  bestLab: {
    slug: "best-lab-software-in-nepal",
    path: "/best-lab-software-in-nepal",
    // "Best" is allowed in this title where it was removed from
    // /lab-software-in-nepal, and the difference is not cosmetic. That page
    // would have been asserting it is the best. This one is about how to decide
    // which is, opens by saying there is no single answer, and names the labs
    // Nidanyo is wrong for. The title describes what the page does.
    metaTitle: "Best Lab Software in Nepal: How to Choose | Nidanyo",
    metaDescription:
      "How to choose lab software in Nepal: LIS, LIMS, and LIOMS explained as a buying decision, local versus imported vendors, build versus buy, and the labs Nidanyo is the wrong fit for.",
    ogTitle: "How to choose the best lab software in Nepal",
    ogDescription:
      "There is no single best lab software in Nepal. There is a best one for your test volume, your branch structure, and your referral model. Here is how to tell which.",
    keyword: "Best Lab Software in Nepal",
    heroTitle: "Choosing the best lab software in Nepal",
    heroIntro:
      "There is no single best lab software in Nepal, and a vendor who answers that question with their own product name is selling rather than advising. There is a best system for your test volume, your branch and collection centre structure, and how much of your revenue arrives through referring doctors. This page is the reasoning we would use if we were buying, including the labs our own product is the wrong answer for.",
    overview: {
      title: "The three letters that decide most of this: LIS, LIMS, or LIOMS",
      paragraphs: [
        "Most comparison confusion in this category comes from three acronyms being used as if they were interchangeable. They are not, and picking the wrong category is a more expensive mistake than picking the wrong vendor inside the right one.",
        "An LIS, a laboratory information system, is built around the patient and the clinical record. It is what most medical laboratories mean when they say lab software: register a patient, order tests, enter results, release a report. A LIMS, a laboratory information management system, is built around the sample and the workflow, with chain of custody, batching, and instrument runs at the centre. LIMS products tend to come from research, pharmaceutical, and industrial testing, which is why so many of them handle a study protocol beautifully and cannot represent a credit account with a referring clinic at all.",
        "A LIOMS, a laboratory information and operations management system, is both of those plus the commercial half a lab actually runs on: billing, packages and discounts, credit accounts, referring doctor and institution commissions, reagent inventory, permissions, and management reporting. Nidanyo is a LIOMS, and we use the term deliberately rather than calling it a LIMS, because the distinction is the whole reason imported products struggle here.",
        "The practical consequence is that a Nepali diagnostic centre evaluating a well known international LIMS is usually comparing a system that is stronger than it needs on sample science and unable to do the thing it spends its mornings on. Test that directly. Ask any vendor to produce a referring doctor commission statement and a daily counter reconciliation from live data during the demo. The answer to that one request separates the shortlist faster than any feature comparison.",
      ],
    },
    problems: [
      "Vendors describe the same product as an LIS, a LIMS, and lab software in the same conversation, so category comparison becomes impossible.",
      "Feature lists across vendors are close to identical, which means comparing them tells you almost nothing about how the system behaves in a busy morning.",
      "Imported products are evaluated on laboratory science strength and bought before anyone checks whether they can model credit accounts and referral commissions.",
      "The demo runs on prepared data, so nobody sees what the system does with a duplicate patient, an amended report, or a half paid credit bill.",
      "Licence models priced per test or per user compound badly for a lab whose volume is the thing it is trying to grow.",
      "Support sits in another timezone, so an urgent question during Sunday morning collection is answered on Monday.",
      "Nobody asks what happens to five years of patient results if the relationship with the vendor ends.",
    ],
    solutions: [
      "Decide your category first. If your lab is clinical and commercial, you are shopping for a LIOMS, and a research LIMS is not a cheaper version of one.",
      "Judge every candidate on your own data. Bring a real day: two similar patient names, a panel with a discount, a credit bill from a referring clinic, and a report that has to be amended after release.",
      "Ask for the commission statement and the counter reconciliation live, in the system, not as a slide.",
      "Compare total annual cost including users, branches, modules, interfacing, and support, rather than the headline figure.",
      "Confirm who configures your test catalogue and reference ranges, and whether that work is included or billed later.",
      "Establish before signing that your patient, result, and billing data is exportable in a usable format.",
      "Pilot on one counter and one department for a few weeks, because a wrong choice then costs weeks instead of a year.",
    ],
    features: [
      "Correct category for your lab: LIS, LIMS, or LIOMS",
      "Duplicate patient detection that works on real names",
      "Sample status visible without walking to the bench",
      "Separated result entry and authorised verification",
      "Amended reports that preserve the original",
      "Reference ranges by age band and sex",
      "Credit accounts for referring clinics and hospitals",
      "Referring doctor and institution commission statements",
      "Daily counter reconciliation that actually reconciles",
      "Reagent inventory by batch and expiry",
      "Branch and collection centre workflow",
      "Analyser interfacing with a named party responsible for it",
      "A documented answer for internet and power interruption",
      "Local implementation, training, and support hours",
      "Data export in a usable format",
    ],
    process: [
      {
        title: "Write down what your lab actually sells",
        text: "Before looking at any product, write down where your revenue comes from: walk in patients, referring doctors on commission, credit accounts with hospitals, corporate packages, or collection centres. Most bad purchases in this category happen because the software was evaluated before anyone wrote that list down.",
      },
      {
        title: "Pick the category, then the vendor",
        text: "Clinical and commercial lab, so a LIOMS. Research or industrial testing with protocols and studies, so a LIMS. Getting this right removes most of the market from your shortlist immediately, which is the point.",
      },
      {
        title: "Run the demo on your own day",
        text: "Hand the vendor a real morning from your lab and have them enter it live. Two patients with similar names, a discounted panel, a credit bill, an out of range result, and a report amended after release. Refuse a prepared dataset.",
      },
      {
        title: "Ask the vendor questions, not the product questions",
        text: "Who configures the test catalogue, who migrates the data, who trains each role, who answers the phone during collection hours, what does year two cost, and can we speak to a lab you delivered for more than a year ago. The blog post linked below carries the full list to work through.",
      },
      {
        title: "Pilot before committing",
        text: "One counter, one department, a few weeks, real patients running in parallel with your current process. A pilot answers what a procurement process cannot, and it is the only reliable way to find out whether your staff will actually use the thing.",
      },
    ],
    reasons: [
      "We would rather you chose correctly than chose us, because a system abandoned in month three costs both sides more than a lost sale does.",
      "Nidanyo is a strong fit for medical laboratories, diagnostic centres, and pathology labs in Nepal that bill at a counter, work with referring doctors, and run one or more collection centres.",
      "Nidanyo is a weaker fit for research laboratories running study protocols, for industrial and food testing labs, and for a hospital whose lab serves only its own OPD and IPD, where a hospital system with a lab module avoids double registration. We will say so rather than quote you.",
      "Built and supported from Nepal, so implementation, catalogue setup, training, and support happen in your timezone and in your working hours.",
      "Quoted by lab size and modules rather than per test, because a licence that charges you more for growing is a licence that punishes the outcome you bought it for.",
      "A pilot on one counter is how we prefer to start, because it is how buyers find out the truth.",
    ],
    related: [
      {
        href: "/blog/laboratory-management-software-in-nepal",
        label: "ten signs your lab has outgrown its current process",
        text: "The awareness half of this decision, plus the full feature checklist and the questions to put to any vendor.",
      },
      {
        href: "/lab-software-in-nepal",
        label: "lab software in Nepal",
        text: "The operational side: registration, sample tracking, reports, billing, and reagent stock.",
      },
      {
        href: "/laboratory-information-management-system-nepal",
        label: "laboratory information management system in Nepal",
        text: "The traceability side, if audit and accreditation readiness is what is driving this.",
      },
      {
        href: "/lab-software-cost-in-nepal",
        label: "what lab software costs in Nepal",
        text: "What drives the number up and down, and how to compare two quotes that are not comparable.",
      },
      {
        href: "/products/nidanyo",
        label: "Nidanyo",
        text: "Our own lab system, module by module, so you can judge it against the criteria above.",
      },
      {
        href: "/hospital-management-software-in-nepal",
        label: "hospital management software in Nepal",
        text: "The better answer when the lab is one department inside a hospital.",
      },
    ],
    faqs: [
      {
        question: "What is the best lab software in Nepal?",
        answer:
          "There is no single best lab software in Nepal; the right system depends on whether your lab is clinical or research, how much revenue arrives through referring doctors, and how many branches and collection centres you run. For a medical laboratory or diagnostic centre that bills at a counter and works on referral, the best fit is a LIOMS that handles credit accounts and commissions natively, which is what Nidanyo by Infobytes Nepal was built to do.",
      },
      {
        question: "What is the difference between an LIS, a LIMS, and a LIOMS?",
        answer:
          "An LIS manages patient-focused clinical laboratory information, a LIMS manages samples, testing data, and laboratory workflows, and a LIOMS combines both with the operational side: billing, inventory, permissions, audit trails, and management reporting. Medical laboratories in Nepal almost always need the LIOMS scope, because the commercial half of the day is where their time and their leakage actually are.",
      },
      {
        question: "Is imported lab software better than software built in Nepal?",
        answer:
          "Imported products are usually stronger on laboratory science and research workflows and weaker on exactly the things a Nepali lab runs on day to day: credit accounts with referring clinics, doctor commission structures, counter reconciliation, and Nepali date reporting. They are also priced in foreign currency and supported in another timezone. Judge on fit to your commercial model rather than on where the software was written.",
      },
      {
        question: "Should we buy lab software or build our own?",
        answer:
          "Buy the product if your lab workflow is reasonably standard, because it is faster and materially cheaper; a focused custom build in Nepal typically starts around NPR 200,000 and a lab system is not a small build. Build custom only if your process is genuinely unusual or is itself your competitive advantage, which is rare for a diagnostic laboratory.",
      },
      {
        question: "What should we ask a lab software vendor before buying?",
        answer:
          "Ask them to run your own real morning through the system live, including two similar patient names, a discounted panel, a credit bill from a referring clinic, and a report amended after release. Then ask who configures your test catalogue, who migrates your data, who trains each role, who answers the phone during collection hours, and what year two costs.",
      },
      {
        question: "How do we know staff will actually use it?",
        answer:
          "Pilot it on one counter and one department for a few weeks with real patients, running in parallel with your current process. Front desk staff and technologists abandon systems that add steps to a busy morning, and that only shows up under real load, never in a demo.",
      },
      {
        question: "When is Nidanyo the wrong choice?",
        answer:
          "Nidanyo is the wrong choice for research laboratories running study protocols, for industrial, food, and environmental testing labs, and for hospitals whose laboratory serves only their own OPD and IPD patients, where a hospital management system with a lab module avoids double registration and double billing. We would rather tell you that before a quotation than after an implementation.",
      },
    ],
  },

  labCost: {
    slug: "lab-software-cost-in-nepal",
    path: "/lab-software-cost-in-nepal",
    metaTitle: "Lab Software Cost in Nepal | What Drives the Price | Nidanyo",
    metaDescription:
      "What lab software costs in Nepal and why quotes differ so much: licence models, one-time versus recurring cost, hosting, analyser interfacing, migration, and the charges that appear after go live.",
    ogTitle: "What lab software actually costs in Nepal",
    ogDescription:
      "The cost drivers behind a lab software quotation in Nepal, the charges that turn up after signing, and how to compare two quotes that are not comparable.",
    keyword: "Lab Software Cost in Nepal",
    heroTitle: "What lab software costs in Nepal",
    heroIntro:
      "Lab software in Nepal is quoted, not priced off a list, and the honest reason is that two labs with the same monthly test count can need very different systems. What we can do is set out exactly what moves the number, which costs are one-time and which recur every year, and which charges tend to appear after go live rather than in the quotation. Bring us your test volume, branch count, and whether you need analyser interfacing, and you get a real figure rather than a range.",
    overview: {
      title: "Why nobody publishes a price, and what to do about it",
      paragraphs: [
        "A single branch pathology lab with manual result entry and a two hundred test menu, and a three branch diagnostic centre with collection centres, six analyser interfaces, and credit accounts with fourteen referring hospitals, are not the same purchase. They differ by more than an order of magnitude in setup work, and almost all of that difference is in configuration and data rather than in software. That is why a published package price in this category is usually either meaningless or a starting point designed to be exceeded.",
        "The more useful way to think about it is one-time cost against recurring cost. One-time covers implementation: loading your test catalogue, reference ranges, panels and rate lists, formatting your report layouts on your letterhead, migrating your active patient list, configuring roles and billing rules, connecting analysers, and training each role on its own screens. Recurring covers the licence or subscription, hosting if we host it, support, and updates. A quotation that does not separate these two is not comparable to one that does.",
        "The cost drivers that move the number most, roughly in order, are: how many users and counters need access, how many branches and collection centres you run, whether analyser interfacing is required and for how many machines, how clean your existing test catalogue and rate list are, whether you host it yourself or we host it, and how much historical data you want migrated. Interfacing and catalogue cleanup are the two that most often surprise buyers, because both are quoted as software and delivered as weeks of careful work.",
        "For comparison against the alternative: commissioning custom software in Nepal typically starts around NPR 200,000 for a focused first version and runs from around NPR 600,000 upward for multi department systems, and a lab system is not a small build. Adopting an existing product such as Nidanyo is quoted by lab size and modules and is substantially cheaper than commissioning the equivalent, which is the usual reason labs adopt rather than build.",
      ],
    },
    problems: [
      "Vendors quote a headline figure that covers the licence and excludes implementation, so the real number arrives after the decision has been made.",
      "One-time and recurring costs are mixed into a single line, which makes two quotations impossible to compare.",
      "Per test or per user licensing looks cheap at current volume and becomes the largest line item exactly when the lab succeeds.",
      "Analyser interfacing is sold as a checkbox and delivered as a project, with the validation work quoted separately afterwards.",
      "Test catalogue and rate list cleanup is assumed to be the lab's job, then billed when the lab cannot do it.",
      "Training is quoted for one session, and the lab discovers that front desk, technologists, signatories, and accounts each need their own.",
      "Support hours are not stated, so the lab finds out during a Sunday morning collection that cover is Monday to Friday.",
    ],
    solutions: [
      "Ask for the quotation split into one-time implementation and recurring annual cost, as two separate totals.",
      "Get the licence model in writing and model it at twice your current volume before signing, not at today's.",
      "Have interfacing quoted per analyser, with the validation work and the party responsible for it named.",
      "Establish who cleans and loads the test catalogue, reference ranges, and rate lists, and whether that is included.",
      "Confirm how many training sessions are included and which roles each one covers.",
      "Get support hours and response expectations written down, including whether collection hours and Saturdays are covered.",
      "Ask what year two costs before you sign year one, and what happens to the figure when you add a branch.",
    ],
    features: [
      "Number of users and billing counters",
      "Branches and collection centres",
      "Analyser interfaces and their validation",
      "Hosted by us or on your own server",
      "Test catalogue size and current condition",
      "Reference range and rate list cleanup",
      "Report template formatting on your letterhead",
      "Historical data migration scope",
      "Modules: billing, inventory, commissions, reporting",
      "Training sessions per role",
      "Support hours and cover during collection times",
      "Backup, restore, and downtime procedure",
    ],
    process: [
      {
        title: "Tell us the four numbers",
        text: "Monthly test volume, number of billing counters, number of branches and collection centres, and how many analysers you would want interfaced. Those four answer most of the quotation on their own.",
      },
      {
        title: "We look at your current reports",
        text: "Your existing report layouts and rate list tell us how much configuration work is real. A clean catalogue is days; a catalogue that has drifted across three staff and two systems is the longest part of the project, and we would rather say so up front.",
      },
      {
        title: "You get a split quotation",
        text: "One-time implementation and recurring annual cost as two separate totals, with interfacing quoted per machine and training listed per role. Nothing is left as an allowance to be settled later.",
      },
      {
        title: "Scope is fixed in writing",
        text: "What is included, what is not, what triggers an additional charge, and what year two looks like, agreed before any work starts rather than discovered during it.",
      },
      {
        title: "Phase it if the number is uncomfortable",
        text: "Most labs do not need everything in month one. Registration, sample tracking, results, reports, and billing first; interfacing, commissions, and multi branch afterwards, funded by what the first phase saves.",
      },
    ],
    reasons: [
      "We quote against your actual volume and branch count rather than publishing a package price we would have to exceed.",
      "One-time and recurring costs are separated in every quotation we send, because that is the only form in which two quotes can be compared.",
      "Setup, catalogue loading, report formatting, and training are quoted as part of the project rather than appearing as surprises after go live.",
      "Licensing is by lab size and modules, not per test, so growing your volume does not increase your bill.",
      "Phased rollouts are normal here, and we will tell you which modules can wait rather than quoting everything at once.",
      "The first conversation and the written quotation cost nothing, including if the answer is that you do not need us yet.",
    ],
    related: [
      {
        href: "/best-lab-software-in-nepal",
        label: "how to choose lab software in Nepal",
        text: "The decision itself: LIS versus LIMS versus LIOMS, and where Nidanyo is the wrong fit.",
      },
      {
        href: "/lab-software-in-nepal",
        label: "lab software in Nepal",
        text: "What the system actually does, from registration to verified report to bill.",
      },
      {
        href: "/products/nidanyo",
        label: "Nidanyo",
        text: "The product itself, module by module.",
      },
      {
        href: "/blog/laboratory-management-software-in-nepal",
        label: "ten signs your lab has outgrown its current process",
        text: "Worth reading before budgeting, because it tells you which problems you are actually buying a solution to.",
      },
      {
        href: "/website-cost-in-nepal",
        label: "what a website costs in Nepal",
        text: "The same cost breakdown applied to web work, if that is also on the list.",
      },
      {
        href: "/contact",
        label: "ask for a written quotation",
        text: "Send us your test volume, counters, branches, and analyser list and we will send a real figure.",
      },
    ],
    faqs: [
      {
        question: "How much does lab software cost in Nepal?",
        answer:
          "Lab software in Nepal is quoted rather than sold at a list price, because a single branch lab with manual result entry and a multi branch diagnostic centre with analyser interfacing differ by more than an order of magnitude in setup work. The figure is driven by user and counter count, branches and collection centres, how many analysers are interfaced, hosting choice, and how clean your existing test catalogue is. Send us those numbers and you get a real quotation at no charge.",
      },
      {
        question: "Is it cheaper to buy lab software or build our own?",
        answer:
          "Buying is substantially cheaper for almost every diagnostic laboratory. Commissioning custom software in Nepal typically starts around NPR 200,000 for a focused first version and runs from around NPR 600,000 upward for multi department systems, and a full lab system sits at the larger end of that. Adopting an existing product is quoted by lab size and modules instead.",
      },
      {
        question: "What is not usually included in a lab software quotation?",
        answer:
          "The four that most often sit outside the headline figure are analyser interfacing and its validation, test catalogue and rate list cleanup, historical data migration beyond the active patient list, and training sessions past the first one. Ask for each of these to be priced explicitly, as included or excluded, before you compare two quotations.",
      },
      {
        question: "Should we host it ourselves or have you host it?",
        answer:
          "Host it yourself if downtime during an internet outage would stop your counter, which is the common choice for labs outside reliable connectivity; you then own the server, the backups, and the power arrangement. Have us host it if you would rather we handle updates, backups, and monitoring, which is usually cheaper in total and is what most single site labs choose.",
      },
      {
        question: "What does it cost per year after the first year?",
        answer:
          "Recurring cost covers the licence or subscription, hosting if we host it, support, and updates, and it is quoted as a separate annual total from the one-time implementation. Ask any vendor for that figure before signing year one, and ask specifically what happens to it when you add a branch or a counter.",
      },
      {
        question: "Can we start small and add modules later?",
        answer:
          "Yes, and it is what we usually recommend. Registration, sample tracking, result entry and verification, reporting, and billing go in first; analyser interfacing, referral commissions, and multi branch consolidation follow once the core is in daily use and paying for itself.",
      },
      {
        question: "Is there a charge for the quotation or the lab visit?",
        answer:
          "No. The first conversation, the lab visit, and the written quotation cost nothing and carry no obligation, including when our conclusion is that your current process is fine for now or that a hospital system would serve you better than a lab system.",
      },
    ],
  },
} satisfies Record<string, SeoLandingPage>;
