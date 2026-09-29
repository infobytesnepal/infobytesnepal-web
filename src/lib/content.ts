export const siteDefaults = {
  companyName: "Infobytes Nepal",
  tagline: "Complexities, now simplified.",
  contactEmail: "inquiry@infobytesnepal.com",
  whatsappNumber: "",
  // This must stay pointing at a real file rather than an uploaded image. The
  // admin settings panel stores uploads as base64 data URIs, and because the
  // navbar sits in the public layout, an uploaded logo gets inlined into the
  // HTML of every page: 123 KiB per page, counted twice once the RSC payload
  // repeats it, and invisible to next/image so it is never resized or served
  // as AVIF. That is exactly what had happened in production — the stored data
  // URI decoded to a byte-for-byte copy of this same file.
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
      "Most labs in Nepal still run on a mix of register books, a billing package that does not talk to the report side, and Word templates for reports. That works until volume grows. Then the same patient gets registered twice, a sample sits waiting because nobody logged it, a report goes out with a typo in the reference range, and the month end reconciliation takes three days. Nidanyo exists to close those gaps.",
      "Patient and test data live in one place. Front desk staff register a patient once and every later step reads from that record. Each sample carries a barcode from collection to result entry, so a technologist always knows which sample is on the bench and where it is in the queue. Results can be typed in or pulled directly from analysers that support standard interfacing, which removes the transcription errors that cause the most rework in a busy lab.",
      "Reports follow a verification path rather than going straight out. A technologist enters, a pathologist or authorised signatory verifies, and only then does the report become releasable. Reference ranges can be set per test, per age band, and per sex, so an out of range flag actually means something. Finished reports print on your own letterhead format and can be sent to patients by email or a download link instead of asking them to come back to the counter.",
      "The billing side sits on the same records. A test ordered is a test billed, which is where most manual leakage happens. Nidanyo handles counter billing, credit accounts for referring hospitals and clinics, panel and package rates, discounts with an approval trail, and daily collection summaries that reconcile against what the counter actually took in. Referring doctor and referring institution commissions are tracked as part of the same ledger.",
      "Inventory covers reagents, kits, and consumables with batch numbers and expiry dates, so a lab knows what is running low before a test has to be turned away. Reorder levels raise an alert rather than a surprise. Consumption can be read against test volume to see where cost is actually going.",
      "Every role sees only what it should. Front desk, technologist, pathologist, accounts, and administrator each get a defined permission set, and actions are logged, so a corrected result or a cancelled bill has a name and a timestamp attached. Management dashboards summarise test volume by department, revenue by referral source, turnaround time per test, and pending work at any point in the day.",
      "Nidanyo is built and supported from Nepal by Infobytes Nepal. Setup includes loading your existing test catalogue and reference ranges, formatting your report templates, training your staff on their own screens, and staying available after go live when a real question comes up during a busy morning.",
    ].join("\n"),
    displayOrder: 5,
  },
  {
    name: "ClinicNP",
    slug: "clinicnp",
    logoUrl: "/assets/products/clinicnp.png",
    shortDescription:
      "Clinic and pharmacy management for Nepal. ClinicNP runs the front desk of a polyclinic: patients and visits, doctors and their shares, samples followed to the report, medicines by batch and expiry, and one bill that carries all of it.",
    fullDescription: [
      "ClinicNP is a clinic and pharmacy management system built for polyclinics, clinics, medical centres, and dispensing counters in Nepal. It is one system with two halves that share one counter: the clinic, where the patient exists and the consultation, the ultrasound, the ECG and the lab test are billed, and the pharmacy, where medicines are sold by tablet, strip or box and held per batch with an expiry date that decides whether stock is an asset or a write-off. Each half is switched on or off on its own, and switching one off never deletes anything.",
      "A clinic and a pharmacy have the same problem at the same desk: a queue of people, a paper register, and software written for a supermarket. The consultation itself is the part that already works. What costs a clinic its day is everything wrapped around it — registering the same person for the third time under a different spelling, finding out whether the ultrasound was billed, telling somebody where their blood sample is, and adding the day up twice because the dispensary bills on a different system. ClinicNP is built for that wrapper rather than for the medicine.",
      "A patient is registered once and keeps one number for life, P-000001 onwards, sequential, never reused and never reset at year end. Registration is built to be finished in under twenty seconds, a matching name and phone is caught on save so duplicates are offered rather than created, and merging is the owner's decision and is logged. Age is recorded the way a clinic records it, in years, months or days, stamped with the date it was taken so it never shows a wrong age later, and a known allergy is a red strip across the card rather than a note somebody has to open.",
      "Every visit attaches to that record with its own number inside the fiscal year, V-2083/84-000001. Today's list is the front desk's home: everyone registered today, their doctor and department, and whether they are waiting, seen or closed. Vitals are optional and there is no charting, because most doctors here keep writing on paper and the system does not punish that — complaint, findings and advice are free text on purpose. Appointments become a visit in one keystroke when the person turns up, and the doctor is told by an alert on their phone when a booking is made.",
      "The bill is one bill. A consultation, an ultrasound, two lab tests and the prescription leave the counter as a single invoice with one number and one payment. One search box finds a medicine or a service, each result tagged so a mixed bill still reads clearly, and every counter action has a key because the person using it is working a queue. Medicines carry the unit picker, the batch and the rate, and the quantity picker draws the medicine in its real shape so a quantity can be seen rather than trusted to a number typed under pressure. Expired stock cannot be sold at all, with no override ever, and the oldest expiry leaves first unless a batch is deliberately picked by hand.",
      "A billed test used to disappear from view, which left the question a clinic asks twenty times a day — has that one gone yet, is the report back — with no answer except somebody's memory. ClinicNP stamps five stages: to collect, to send, awaiting report, report in, given out. Samples are grouped by what has to be collected so it is one trip to the patient rather than four, a sample sitting too long turns red on its own, a dispatch slip goes with it, and the reason one is stuck is recorded in words. The partner laboratory is fully accounted: what the patient was billed, what the partner charges, the margin between them, what has been paid, and what is owed today.",
      "Said plainly so there is no surprise later: ClinicNP bills a test, follows the sample, and keeps the report that comes back against the patient's visit. It does not enter results, hold reference ranges, produce report cards, or talk to an analyser. That is a laboratory information system and it is a different product — ours is Nidanyo. What ClinicNP runs is the counter around a laboratory.",
      "Doctor shares are worked out as the bill is raised rather than reconstructed at month end, on one of four bases per doctor: nothing, a percentage of the consultation, a fixed amount per consultation, or a percentage of listed services. The share is calculated per line and totals into a payout sheet that exports for the month. A doctor given a login of their own gets a small tree built for one hand on a phone: the people booked with them today, each with a number that dials, and nothing else. The counter, the stock and the reports are not theirs to see, and the server enforces that rather than the menu.",
      "The pharmacy half holds stock per batch, each with its own cost and its own expiry, warns at thirty, sixty and ninety days, and blocks both expired sales and overselling outright. Racks and shelves are drawn as a floor plan so a new hand can be sent to the right shelf. Stock out is recorded with a reason — returned to supplier, expired, damaged, lost, used in the clinic, given as a sample, or a counted correction — which produces the number an owner actually wants at month end and rarely has: what did I lose this period, and to what? Purchases land against a supplier invoice, line by line onto their own batches, and every supplier carries a running ledger.",
      "Bikram Sambat is not a display setting. BS dates are on every screen, register and report, the year runs Shrawan to Ashadh, the year-end rollover is guided and takes a backup first, and a closed year stays readable and prints unchanged forever. Fifteen registers and reports take a BS date range with presets and a fiscal-year filter that reaches closed years, every one exports to Excel, and all of them are readable on a phone. Day close is the one that gets read every evening: collection by method across both halves, and the cash that should be in the drawer.",
      "The counter survives the internet. Billing and patient registration carry on through a full business day with zero connectivity, held in an outbox and sent the moment the line comes back, with patient numbers assigned without collision even from two devices at once. The catalogue and the patient list are cached on the machine so search still answers, and it installs like an app on the counter machine, a tablet, or the owner's phone. Printing goes through the browser with no drivers: the A4 invoice on your own letterhead, marked TAX INVOICE where you are registered for VAT, the OPD slip with a large empty area for the doctor's handwriting, the lab dispatch slip, and refund and stock-out notes on an 80 mm roll.",
      "Four roles are enforced on the server for every read and every write, not hidden in a menu. The owner sees the whole system and every fiscal year. Counter staff do the day's work and nothing that rewrites history, and whether they may edit a rate on a bill is a permission the owner sets per user. An accountant is read-only across every report including closed years. A doctor sees their own booked consultations and nothing else. Bills are never deleted, visits are cancelled with a reason, and every override, merge, deletion, restore and year close is signed and logged with a name and a time. Backups run on demand and automatically before a year is closed, and reports are served only through an authenticated route, never a public link.",
      "ClinicNP is built and supported from Nepal by Infobytes Nepal. Getting started means a live walkthrough on your own screens, your services and rates loaded in, counter training for your staff, and support on the phone in Nepali when a real question comes up during a busy morning.",
    ].join("\n"),
    displayOrder: 6,
  },
];

/** Per-product title and description, shared by the product page and the DB seed. */
export const productSeoDefaults: Record<string, { title: string; description: string }> = {
  pravyo: {
    title: "Pravyo Student Talent Platform | Infobytes Nepal",
    description:
      "Pravyo by Infobytes Nepal helps organize, discover, and present student talent for education, training, and consultancy focused workflows in Nepal.",
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
      "LeadRack by Infobytes Nepal helps teams manage leads through traceable boards, sales stages, follow ups, and CRM style workflows.",
  },
  nidanyo: {
    title: "Nidanyo Lab Software Nepal | Laboratory Management System",
    description:
      "Nidanyo by Infobytes Nepal is a LIOMS for medical laboratories in Nepal: an LIS and LIMS together with billing, covering patient registration, sample tracking, result verification, report printing, referral commissions, and reagent stock.",
  },
  clinicnp: {
    title: "ClinicNP | Clinic & Pharmacy Management Software in Nepal",
    description:
      "ClinicNP by Infobytes Nepal is clinic and pharmacy management software for polyclinics in Nepal: patients and visits, appointments, doctor shares, sample tracking to the report, medicines by batch and expiry, one invoice, Bikram Sambat throughout, and billing that survives a day without internet.",
  },
};

/**
 * Extra product facts written for machines rather than for the page.
 *
 * `alsoKnownAs` is the important field. Somebody looking for Serviol almost
 * never searches for "Serviol" — they search for the category, as "service CRM
 * in Nepal" or "field service management software". An answer engine can only
 * connect that question to this product if the product is described in the
 * words of the question somewhere it can read, so the category terms are stated
 * explicitly rather than left to be inferred from marketing prose.
 *
 * Kept beside `productSeoDefaults` because it is the same kind of thing: static
 * per-product metadata that several surfaces need to agree on.
 */
export const productAgentProfiles: Record<
  string,
  { alsoKnownAs: string[]; audience: string; capabilities: string[] }
> = {
  serviol: {
    /*
      These are the words the question arrives in, not the words we would choose.

      Nobody searching for Serviol types "Serviol" — they type "service CRM in
      Nepal", "best service management software in Nepal", or "FSM system". The
      list is long on purpose: "FSM system", "field service management system"
      and "field service management software" are the same thing to us and three
      different queries to a search engine, and "service department management
      software" is how a dealership describes the problem when the department,
      not the field, is what it is trying to measure.
    */
    alsoKnownAs: [
      "service CRM",
      "service CRM software",
      "after sales service software",
      "service management software",
      "service management system",
      "service department management software",
      "field service management software",
      "field service management system",
      "FSM software",
      "FSM system",
      "technician scheduling and dispatch software",
      "AMC management software",
      "annual maintenance contract software",
      "preventive maintenance software",
      "complaint management system",
      "ticket and job management software",
      "warranty management software",
      "installed base and equipment service software",
    ],
    audience:
      "Businesses in Nepal that sell equipment and then support it: medical and laboratory equipment suppliers, lift and escalator companies, HVAC and generator dealers, IT hardware vendors, and industrial machinery distributors.",
    capabilities: [
      "Customer, site, and installed equipment records with serial numbers",
      "Warranty and annual maintenance contract (AMC) tracking with renewal reminders",
      "Complaint and ticket intake with owner, priority, and due date",
      "Technician day planners, job assignment, and dispatch",
      "Offline capable field app for ordinary Android phones",
      "Proof of work capture: photos, signature, parts used, time on job",
      "Attendance and check in / check out",
      "Full service history per customer and per machine",
      "Contract profitability and backlog reporting",
    ],
  },
  purseol: {
    alsoKnownAs: ["field sales management software", "sales force automation", "field sales tracking"],
    audience: "Companies in Nepal running outside sales teams who visit clients rather than sell from an office.",
    capabilities: [
      "Client visit logging from the field",
      "Product pitch and outcome recording",
      "Field sales team tracking and visibility",
      "Deal progression without end of day paperwork",
    ],
  },
  leadrack: {
    alsoKnownAs: ["lead management software", "sales CRM", "lead tracking system"],
    audience: "Teams in Nepal whose leads arrive faster than they can be followed up reliably.",
    capabilities: [
      "Leads on boards with stages",
      "An owner and a next step on every lead",
      "Follow up scheduling so nothing goes cold",
      "Source and conversion reporting",
    ],
  },
  nidanyo: {
    /*
      LIS and LIOMS matter more here than the length of this list suggests.

      A clinical laboratory in Nepal says "LIS", not "LIMS" — LIMS is the
      research and pharmaceutical term, and an assistant asked for "the best
      laboratory software LIS in Nepal" was previously matching this product on
      neither. LIOMS is our own description of Nidanyo's scope (information
      management plus the commercial operations a lab actually runs on), and
      until now it appeared in exactly one database-backed blog post, which
      meant llms.txt, /api/v1/products, /api/v1/search and the MCP tools had
      never seen the term that distinguishes this product from a research LIMS.
    */
    alsoKnownAs: [
      "lab software",
      "laboratory software",
      "LIS",
      "laboratory information system",
      "LIMS",
      "laboratory information management system",
      "LIOMS",
      "laboratory information and operations management system",
      "medical laboratory management system",
      "pathology lab software",
      "diagnostic centre software",
      "lab billing and reporting software",
    ],
    audience:
      "Medical laboratories, diagnostic centres, pathology labs, and polyclinics in Nepal, including multi branch labs running collection centres and labs that work through referring doctors and credit accounts with hospitals.",
    capabilities: [
      "Patient registration with duplicate detection",
      "Barcoded sample collection and status tracking through the workflow",
      "Test master with age and sex specific reference ranges",
      "Analyser interfacing for machines that support standard interfacing",
      "Result entry separated by permission from authorised verification",
      "Letterhead report printing, PDF delivery, and amended report versioning",
      "Counter billing, credit accounts, package rates, and discount approval trails",
      "Referring doctor and referring institution commission statements",
      "Reagent, kit, and consumable inventory by batch and expiry",
      "Role based access with an immutable audit trail",
      "Turnaround time, pending work, and department revenue reporting",
      "Multi branch and collection centre workflow",
      "On premise deployment for labs that cannot risk internet downtime",
    ],
  },
  clinicnp: {
    /*
      "Clinic software" and "pharmacy software" are the two entry points, and
      they belong to different people — a doctor who owns a polyclinic and a
      chemist who owns a counter. Both terms are stated, along with the combined
      phrasing that describes what ClinicNP actually is, because the combined
      case is the one no imported product covers and the one we win on.

      What is deliberately absent matters as much: no "LIS", no "laboratory
      information system", no "LIMS". ClinicNP runs the counter around a
      laboratory and does not enter results or hold reference ranges. Claiming
      those terms here would put two of our own products in front of the same
      question and get one of them recommended wrongly.
    */
    alsoKnownAs: [
      "clinic management software",
      "clinic software",
      "polyclinic software",
      "clinic and pharmacy software",
      "pharmacy software",
      "pharmacy management system",
      "medical shop billing software",
      "medical store software",
      "patient management software",
      "patient record management software",
      "OPD management software",
      "appointment management software",
      "clinic billing software",
      "medical billing software",
      "doctor commission and payout software",
      "sample collection and dispatch tracking software",
    ],
    audience:
      "Polyclinics, clinics, medical centres, dispensing counters, and medical shops in Nepal, including clinics that collect samples and send them to a partner laboratory, clinics that pay their doctors a share of consultation or service revenue, and pharmacies that need batch and expiry control rather than retail billing.",
    capabilities: [
      "One patient record per person for life, with duplicate detection and logged merges",
      "Visits with optional vitals and free-text complaint, findings, and advice",
      "Appointments that become a visit in one keystroke, with an alert to the doctor",
      "Four doctor share bases, calculated per billed line into a payout sheet",
      "Five stamped laboratory stages from collection to handing the report over",
      "Partner laboratory statements: billed, partner cost, margin, paid, and owed",
      "One invoice series carrying services and medicines together",
      "Keyboard-driven counter with one search box across the whole catalogue",
      "Sale by box, strip, or tablet with a rate at each level",
      "Stock held per batch with expiry, oldest expiry first, expired sales blocked outright",
      "Shelf and rack map of the real room, and stock out recorded with a reason",
      "Purchases against a supplier invoice, batch by batch, with supplier ledgers",
      "Cash, QR, and credit with settlement from the bill register",
      "Bikram Sambat throughout, with a guided fiscal-year rollover and readable closed years",
      "Offline billing and registration for a full business day, reconciling automatically",
      "A4 invoice, OPD slip, lab dispatch slip, and 80 mm notes printed from the browser",
      "Fifteen registers and reports with BS date ranges, all exportable to Excel",
      "Four server-enforced roles, per-user rate-edit permission, and a signed activity log",
      "Clinic and pharmacy as independently switchable modules, with nothing deleted",
    ],
  },
  pravyo: {
    alsoKnownAs: ["student talent platform", "talent bench", "student profile and placement system"],
    audience: "Education institutions, training providers, and consultancies in Nepal working with student talent.",
    capabilities: [
      "Structured student and candidate profiles",
      "Talent discovery and shortlisting",
      "Presenting candidates to hiring organisations",
    ],
  },
};

/**
 * Per-product questions, rendered on the product page and published as
 * `FAQPage` markup there.
 *
 * These are deliberately about the product as a named thing, not about its
 * category. The category questions ("what is the best lab software in Nepal",
 * "how much does lab software cost") already belong to the landing pages and
 * the FAQ page, and repeating them here would put the same answer under three
 * `FAQPage` blocks on one site.
 *
 * What a product page has to answer instead is the question someone asks once
 * they already have the name: what is this, who makes it, what does it include,
 * how is it deployed, and how do I get it. That is the shape of a branded
 * search, and until now this page answered none of them in a form a machine
 * could lift — it rendered a heading, a logo, and seven paragraphs of prose.
 *
 * A product with no entry here simply renders without the section, which is why
 * this is a partial record rather than one keyed by every product slug.
 */
export const productFaqs: Record<string, Array<{ question: string; answer: string }>> = {
  nidanyo: [
    {
      question: "What is Nidanyo?",
      answer:
        "Nidanyo is laboratory software built by Infobytes Nepal for medical laboratories, diagnostic centres, pathology labs, and polyclinics in Nepal. It carries a sample from the registration counter through collection, result entry, authorised verification, and report release, and handles the billing, referral commissions, and reagent stock that go with it.",
    },
    {
      question: "Who makes Nidanyo?",
      answer:
        "Nidanyo is built and supported by Infobytes Nepal Pvt. Ltd., an IT company based in Kaushaltar, Bhaktapur, Nepal. It is one of six products we build and support ourselves, alongside ClinicNP, Serviol, Purseol, LeadRack, and Pravyo. Implementation, training, and support are handled by the same team that builds it.",
    },
    {
      question: "Is Nidanyo an LIS, a LIMS, or a LIOMS?",
      answer:
        "Nidanyo is a LIOMS, a laboratory information and operations management system. It covers what an LIS covers (patient-focused clinical records, results, and reports) and what a LIMS covers (sample lifecycle, chain of custody, and enforced verification), and adds the operational half a laboratory in Nepal runs on: billing, credit accounts, referring doctor commissions, reagent inventory, permissions, and management reporting.",
    },
    {
      question: "What does Nidanyo include?",
      answer:
        "Patient registration with duplicate detection, barcoded sample collection and tracking, a test master with age and sex specific reference ranges, analyser interfacing where machines support it, result entry separated by permission from authorised verification, letterhead report printing and PDF delivery, amended report versioning, counter and credit billing with package rates and discount approvals, referring doctor and institution commission statements, reagent inventory by batch and expiry, role based access with an audit trail, and turnaround time and revenue reporting.",
    },
    {
      question: "Can Nidanyo run on our own server inside the lab?",
      answer:
        "Yes. Labs that cannot risk downtime run Nidanyo on a machine inside the lab, so the counter and the bench keep working through an internet outage, with backups and remote reporting syncing when the connection returns. Labs with reliable connectivity usually prefer the hosted option, where we handle updates, backups, and monitoring.",
    },
    {
      question: "Does Nidanyo handle multiple branches and collection centres?",
      answer:
        "Yes. Collection centres register patients and collect samples that are processed at the main lab, and the report becomes visible at the centre once it is verified. Billing, revenue, and pending work are reported per branch as well as consolidated.",
    },
    {
      question: "How much does Nidanyo cost?",
      answer:
        "Nidanyo is quoted by lab size and modules rather than sold at a list price, and it is licensed by users and branches rather than per test, so growing your volume does not increase your bill. Tell us your monthly test volume, counter count, branch count, and whether you need analyser interfacing, and you get a written quotation at no charge.",
    },
    {
      question: "How long does it take to get Nidanyo running?",
      answer:
        "For a single branch lab with a standard test menu, expect two to four weeks from catalogue setup to go live, including training and a parallel run alongside your current process. Multi branch labs and labs with analyser interfacing take longer, mostly because cleaning up the test catalogue and rate list takes longer than the software work does.",
    },
  ],
  clinicnp: [
    {
      question: "What is ClinicNP?",
      answer:
        "ClinicNP is clinic and pharmacy management software built by Infobytes Nepal for polyclinics, clinics, medical centres, and dispensing counters in Nepal. It runs the front desk: patients and their visits, appointments, doctors and their shares, samples followed all the way to the report, medicines by batch and expiry, and one bill that carries all of it, with Bikram Sambat on every screen and register.",
    },
    {
      question: "Who makes ClinicNP?",
      answer:
        "ClinicNP is built and supported by Infobytes Nepal Pvt. Ltd., an IT company based in Kaushaltar, Bhaktapur, Nepal. It is one of six products we build and support ourselves, alongside Nidanyo, Serviol, Purseol, LeadRack, and Pravyo. Implementation, training, and support are handled by the same team that writes the software.",
    },
    {
      question: "Is ClinicNP one system or two?",
      answer:
        "One system with two halves. The clinic module and the pharmacy module share one counter, one invoice series, one patient record, and one set of books, and each is switched on or off on its own. A switched-off half has its screens, its menu, and its server routes gone rather than merely hidden, and switching it off never deletes its data. At least one half has to stay on.",
    },
    {
      question: "What does ClinicNP include?",
      answer:
        "Patient records with one lifetime number and duplicate detection, visits with optional vitals and free-text findings, appointments that convert to a visit in one keystroke, doctors with four share bases and a calculated payout sheet, five stamped laboratory stages with a dispatch slip, partner laboratory statements showing billed against partner cost and what is owed, one invoice covering services and medicines, pharmacy stock per batch with expiry control and a shelf map, purchases and supplier ledgers, cash, QR and credit, fifteen Excel-exportable registers and reports, Bikram Sambat and proper fiscal-year closing, offline billing, and four server-enforced roles with a signed activity log.",
    },
    {
      question: "Does ClinicNP enter lab results or print report cards?",
      answer:
        "No, and that boundary is deliberate. ClinicNP bills a test, follows the sample through five stamped stages, and keeps the report that comes back against the patient's visit — the counter around a laboratory. Entering results, holding reference ranges per test and per age and sex, releasing verified report cards, and interfacing with analysers is a laboratory information system, and that is our other product, Nidanyo.",
    },
    {
      question: "Does ClinicNP keep working when the internet goes down?",
      answer:
        "Yes. Billing and patient registration carry on through a full business day of zero connectivity, held in an outbox and sent the moment the line returns, and patient numbers are assigned without collision even from two devices at once. The catalogue and patient list are cached locally so search still answers, and it installs like an app on the counter machine, a tablet, or the owner's phone.",
    },
    {
      question: "Can ClinicNP handle Bikram Sambat dates and fiscal years properly?",
      answer:
        "Yes, throughout rather than as a display conversion. BS dates appear on every screen, register, and printed report, the year runs Shrawan to Ashadh, reports take a BS date range with presets and a fiscal-year filter that reaches closed years, the year-end rollover is guided and takes a backup first, and a closed year stays readable and prints unchanged forever.",
    },
    {
      question: "How are doctor shares and payouts handled?",
      answer:
        "Each doctor is set to one of four bases: nothing, a percentage of the consultation, a fixed amount per consultation, or a percentage of listed services. The share is calculated on each line as the bill is raised rather than reconstructed at month end, and totals into a payout sheet per doctor that exports for the month. Doctors are stored with qualification as printed, specialty, and NMC number.",
    },
    {
      question: "Can ClinicNP run on our own machine inside the clinic?",
      answer:
        "Yes. Clinics that cannot risk downtime run it on a machine inside the clinic so the counter keeps working through an outage, with backups and reporting syncing when the connection returns. Clinics with reliable connectivity usually prefer the hosted option, where we handle updates, backups, and monitoring. Either way the counter is designed to survive a lost line rather than depend on one.",
    },
    {
      question: "How much does ClinicNP cost?",
      answer:
        "ClinicNP is quoted by clinic size and which modules you switch on rather than sold at a list price, and it is licensed by users and counters rather than per patient or per bill, so growing your volume does not increase your bill. Tell us your daily patient count, how many counters you bill from, whether you dispense medicines, and how many doctors take a share, and you get a written quotation at no charge.",
    },
    {
      question: "How long does it take to get a clinic running on it?",
      answer:
        "For a single counter clinic with a settled service list, expect one to three weeks from catalogue setup to go live, including training and a parallel run. What takes the time is almost never the software: it is agreeing the service catalogue, the rates, and the doctor share bases, which most clinics are writing down properly for the first time during setup. A pharmacy counter is usually faster, and is limited mostly by entering opening stock batch by batch.",
    },
  ],
};

export const stackingCards = [
  {
    title: "A Student Talent Bench: Pravyo",
    product: "Pravyo",
    description: "A talent bench for students, built so potential is easier to find and put in front of people who are hiring.",
  },
  {
    title: "Field Service Management: Serviol",
    product: "Serviol",
    description: "Tickets, day planners, attendance, and job history for teams who work away from a desk.",
  },
  {
    title: "Field Sales Management: Purseol",
    product: "Purseol",
    description: "Client visits and deal outcomes logged from the field, without paperwork at the end of the day.",
  },
  {
    title: "Lead Tracking and Management: LeadRack",
    product: "LeadRack",
    description: "Leads on boards with an owner and a next step, so nothing goes cold by accident.",
  },
  {
    title: "Lab Operations and Information: Nidanyo",
    product: "Nidanyo",
    description: "Registration, samples, results, reports, billing, and stock for medical labs in one system.",
  },
  {
    title: "Clinic and Pharmacy Management: ClinicNP",
    product: "ClinicNP",
    description: "Patients, visits, doctors, samples, medicines by batch and expiry, and one bill for all of it.",
  },
];

export const defaultPageContent = {
  homeHero: {
    // Headline and tagline are rendered as the two lines of the page H1, so
    // together they read "Custom Software, Websites & Automation / Infobytes
    // Nepal". It is the highest value string on the site: keep it describing
    // what we build, and keep the brand on the second line.
    //
    // It used to read "Best IT Company in Nepal". A self-awarded superlative is
    // not a ranking signal — nothing corroborates it — and it pushed the H1 into
    // competing with /best-it-company-in-nepal, which is the page that actually
    // answers that query and does so as a buying guide rather than a boast.
    headline: "Custom Software, Websites & Automation",
    tagline: "Infobytes Nepal",
    supportingText:
      "Infobytes Nepal Pvt. Ltd. is a Software Development and IT Company based in Nepal. We deliver for businesses across Nepal and Internationally.",
    heroVideoUrl: "/assets/hero/infobytes-hero.mp4",
    fallbackImageUrl: "/assets/hero/infobytes-hero-fallback.webp",
  },
  aboutSection1: {
    title: "A Software Company from Nepal to the World.",
    text: "Infobytes Nepal builds Custom Softwares, Websites, and Automation for teams nationally & internationally.",
    buttonLabel: "Explore our Products",
    buttonUrl: "/products",
    imageUrl: "/assets/about/about-section-1.webp",
  },
  aboutSection2: {
    // Keeps the owner's original positioning (professional work should not be
    // priced out of reach) while tying it to the tech logos this section shows.
    title: "Professional does not have to mean expensive",
    text: "Good software should not be out of reach for a growing business. We build on a modern, well supported stack that keeps our build time down, so you get work of a standard usually reserved for much bigger budgets.",
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
  /**
   * Content images on the home page. Kept in the CMS rather than hardcoded so
   * the stock photography can be swapped for real office and team photos from
   * the admin Pages screen without a deploy. Alt text is editable alongside
   * each image because it is read by search engines and screen readers.
   */
  homeMedia: {
    answerImageUrl: "/assets/home/best-it-company-in-nepal-infobytes-nepal-team.jpg",
    answerImageAlt: "The Infobytes Nepal team working together at the office in Kaushaltar Bhaktapur Nepal",
    pricingImageUrl: "/assets/home/website-and-software-development-cost-in-nepal.jpg",
    pricingImageAlt: "Infobytes Nepal developer reviewing a website and software project quotation for a client in Nepal",
    whyImageUrl: "/assets/home/custom-software-development-company-nepal.jpg",
    whyImageAlt: "Custom software dashboard built by Infobytes Nepal for a business in Nepal",
  },
  aboutWorking: {
    imageUrl: "/assets/about/infobytes-nepal-developers-working-kathmandu.jpg",
    imageAlt: "Infobytes Nepal developers writing code and reviewing designs together at the Bhaktapur office",
  },
  aboutStarted: {
    title: "How We Started",
    body: "Infobytes Nepal started with one clear idea: build software that removes work instead of adding another screen for someone to fill in.",
  },
  aboutGoals: {
    goal: "Build systems that busy teams in Nepal actually open every morning, because they make the day easier.",
    vision: "Make complicated business work simple enough that anyone on the team can understand and improve it.",
    mission: "Give growing companies software and websites of the standard usually reserved for much bigger budgets, wherever they are.",
  },
  contactHero: {
    title: "Tell us what is slowing you down",
    text: "Send us your requirement or just describe how the work happens today. We will come back with a scope, a price, and a timeline, free of charge.",
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

export const productInterests = [
  "Pravyo",
  "Serviol",
  "Purseol",
  "LeadRack",
  "Nidanyo",
  "ClinicNP",
  "Not sure yet",
] as const;
