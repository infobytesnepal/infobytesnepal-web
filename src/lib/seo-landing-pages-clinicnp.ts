import type { SeoLandingPage } from "./seo-landing-pages";

/**
 * The ClinicNP cluster: clinic, pharmacy, the two of them together, choosing
 * one, and what each side costs.
 *
 * Its own file for the same reason the Nidanyo and Serviol clusters have theirs:
 * `seo-landing-pages.ts` is already ~3,900 lines, and a cluster that will keep
 * growing is easier to reason about whole.
 *
 * On scope, because these six pages have to agree with each other, with the
 * Nidanyo cluster, and with the blog:
 *
 *   ClinicNP is a clinic and pharmacy management system. It runs the counter
 *   around a laboratory — who was billed, what was collected, where the sample
 *   went, what came back, and what the partner lab is owed. It does not enter
 *   results, hold reference ranges, produce report cards, or talk to an
 *   analyser. That is a laboratory information system, and that is Nidanyo.
 *
 * Stating that boundary on every page in this cluster is not modesty, it is the
 * thing that keeps two of our own products from competing for the same query.
 * A polyclinic with a collection counter buys ClinicNP; a pathology lab that
 * runs its own bench buys Nidanyo; a diagnostic centre that does both is told
 * so rather than sold one of them twice. Every page here links across to the
 * lab cluster at the point the reader would otherwise have to guess.
 *
 * The six pages answer six different readers and must not converge:
 *
 *   clinicManagement     — "My front desk is breaking." Clinic operations.
 *   pharmacySoftware     — "My stock is bleeding through expiry." Pharmacy ops.
 *   clinicAndPharmacy    — "I have both at one counter and two systems." The
 *                          one-invoice case, which is the actual differentiator.
 *   bestClinicSoftware   — "Which do I buy?" Category choice and comparison.
 *   clinicSoftwarePrice  — "What will this cost me?" Money, clinic side, and the
 *                          umbrella "medical software price" question.
 *   pharmacySoftwarePrice— "What will this cost me?" Money, retail pharmacy.
 *
 * The blog post at /blog/clinic-management-software-in-nepal-one-system-for-
 * clinic-pharmacy-and-lab owns the awareness half of this topic. None of these
 * pages repeat its narrative; the decision page links to it instead, because
 * two pages answering one question in different words is how a cluster dilutes
 * itself.
 *
 * Two rules carried over from the Serviol file, both about what actually gets
 * cited rather than about keyword habit:
 *
 * 1. Every FAQ answers in its first sentence. An answer engine lifts a
 *    sentence, not a section.
 * 2. Nothing claims a number we cannot stand behind. The only rupee figures
 *    here are the custom-software ranges the FAQ and the cost pages already
 *    publish. ClinicNP itself is quoted, and these pages say so.
 */
export const clinicnpSeoLandingPages = {
  clinicManagement: {
    slug: "clinic-management-software-in-nepal",
    path: "/clinic-management-software-in-nepal",
    metaTitle: "Clinic Management Software in Nepal | ClinicNP by Infobytes Nepal",
    metaDescription:
      "ClinicNP by Infobytes Nepal is clinic management software for polyclinics and clinics in Nepal. Patient records, visits, appointments, doctor shares, sample tracking, pharmacy, and one invoice that carries all of it, in Bikram Sambat, and it keeps billing when the internet stops.",
    ogTitle: "Clinic Management Software in Nepal | ClinicNP",
    ogDescription:
      "One system for the front desk of a Nepali clinic: patients for life, visits, appointments, doctor payouts, samples followed to the report, and a single bill.",
    keyword: "Clinic Management Software in Nepal",
    heroTitle: "Clinic Management Software in Nepal",
    heroIntro:
      "Infobytes Nepal builds ClinicNP, a clinic and pharmacy management system for polyclinics, clinics, and medical centres across Nepal. It runs the front desk the way the day actually runs: patients and their visits, doctors and their shares, samples followed all the way to the report, medicines by batch and expiry, and one bill that carries all of it. Bikram Sambat on every screen and register, and the counter keeps working when the internet stops.",
    overview: {
      title: "The problem is the counter, not the medicine",
      paragraphs: [
        "A clinic's hardest half hour is not clinical. It is a queue of eight people at one desk, a paper register, a billing package written for a supermarket, and a phone ringing to ask whether a report has come back. The consultation itself is the part that works. Everything wrapped around it — registering the same patient for the third time under a slightly different spelling, finding out whether the ultrasound was billed, telling somebody where their blood sample is — is where the day is lost.",
        "ClinicNP is built for that wrapper. A patient is registered once and keeps one number for life, P-000001 onwards, never reused and never reset at year end. Every visit attaches to that record with its own number inside the fiscal year, V-2083/84-000001, so the register reads the way a Nepali clinic's register has always read. A patient from eighteen months ago is found by name, phone, or patient number, and their whole history and every attached report come back on one card.",
        "The bill is one bill. A consultation, an ultrasound, an ECG, two lab tests, and the prescription leave the counter as a single invoice with one number and one payment, because that is what the person at the desk is actually being asked for. Services sit in their own block with the doctor on the line, medicines carry the unit, the batch, and the expiry, and the whole thing is driven from the keyboard rather than from a mouse — one search box finds a medicine or a service, and every counter action has a key.",
        "Bikram Sambat is not a display setting here. BS dates are on every screen, every register, and every printed report, the year runs Shrawan to Ashadh, and a closed year stays readable and prints unchanged forever. That last part matters more than it sounds: an owner who cannot reprint last year's register in the form it was filed has not replaced the paper, only added to it.",
      ],
    },
    problems: [
      "The same person exists three times in the system under three spellings, so nobody can say how many patients the clinic actually has.",
      "The consultation, the diagnostics, and the prescription are billed separately, so the patient pays at two counters and the day's money is reconciled twice.",
      "A billed lab test disappears from view the moment it is billed, and the only answer to 'has that sample gone yet' is somebody's memory.",
      "Doctor shares are worked out on paper at month end, from a register that was not designed to be added up.",
      "Nobody knows whether the ultrasound machine is paying for itself, because diagnostics revenue was never separated from everything else.",
      "The internet drops mid morning and the counter stops, so bills go back onto a duplicate book that has to be entered again later.",
      "Software bought for a retail shop has no patient, no visit, and no doctor, so half the day's work is recorded in a notes field.",
      "Last year's register cannot be reprinted in the form it was filed, which means the paper register never actually went away.",
    ],
    solutions: [
      "One patient record per person for life, with duplicate detection that catches a matching name and phone on save and leaves the merge decision to the owner.",
      "One invoice series carrying services and medicines together, with one payment, one number, and one set of books behind it.",
      "Five stamped laboratory stages, so a sample's position and the time it got there are a screen rather than a question.",
      "Doctor shares calculated per line as the bill is raised, on a percentage, a fixed amount, or a share of listed services, and totalled into a payout sheet.",
      "Service revenue reported by group and by service, so a machine's earnings can be read against what it cost.",
      "Billing and patient registration that carry on through a full business day of zero connectivity and reconcile themselves afterwards.",
      "A counter built for a clinic: a service needs a patient, a medicine-only bill can stay anonymous, and a bill can be held while the next person is served.",
      "Fiscal years closed properly, with a backup taken first, and closed years that stay readable and print unchanged.",
    ],
    features: [
      "Patient records with one lifetime number and duplicate detection",
      "Visits with optional vitals, complaint, findings, and advice",
      "Appointments that become a visit in one keystroke",
      "Doctor profiles, NMC number, and four ways to share revenue",
      "Doctor payout sheets calculated per billed line",
      "Laboratory worklists from collection to handing the report over",
      "Partner laboratory statements: billed, cost, margin, paid, owed",
      "One invoice for services and medicines together",
      "Cash, QR, and credit with settlement from the bill register",
      "Pharmacy stock by batch and expiry, with expired stock held back",
      "A4 invoice, OPD slip, and lab dispatch slip from the browser",
      "Bikram Sambat dates, fiscal years, and a guided year-end rollover",
      "Offline billing and registration with automatic reconciliation",
      "Four server-enforced roles and a signed activity log",
      "Fifteen registers and reports, every one exportable to Excel",
    ],
    process: [
      {
        title: "Decide which halves you are switching on",
        text: "ClinicNP is one system with two modules, clinic and pharmacy, and each is switched on or off on its own. A clinic with no dispensing counter runs the clinic half alone. Switching a module off removes its screens, its menu, and its server routes rather than hiding them, and never deletes anything, so the decision is reversible.",
      },
      {
        title: "Load your services, rates, and doctors",
        text: "Your service catalogue is defined as you actually sell it: name, short code, group, rate, whether a doctor is required on the line, whether it goes to an outside laboratory and at what partner cost, whether it keeps a file, and the follow-up rule. Doctors are loaded with qualification as printed, specialty, NMC number, and the share basis that drives their payout.",
      },
      {
        title: "Open the fiscal year and bring the patients in",
        text: "The current Bikram Sambat year is opened, your active patient list is imported so the counter is useful on day one, and opening stock is entered by batch and expiry if the pharmacy half is on.",
      },
      {
        title: "Train the counter, then the doctors",
        text: "The person raising bills and the doctor checking their own list use completely different screens, and they are trained separately on the ones each will touch. Counter training is hands on the keyboard, because that is how the counter is meant to be driven.",
      },
      {
        title: "Go live and watch one real week",
        text: "We start on live patients with support on the phone, watch a full week including a busy morning and an evening day close, and adjust the service catalogue, the print layouts, and the reports against what the week actually showed.",
      },
    ],
    reasons: [
      "Built in Nepal for a Nepali clinic: Bikram Sambat throughout, fiscal years that close properly, and registers that print the way they were filed.",
      "The counter survives the internet. Billing and registration carry on through a full business day with no connectivity and reconcile by themselves.",
      "One counter and one invoice across the clinic and the pharmacy, rather than two systems and two reconciliations.",
      "Built for a keyboard, because the people using it are working a queue, not exploring a dashboard.",
      "Support on the phone, in Nepali, from the team that wrote the software.",
      "Honest boundaries. We say plainly what ClinicNP does not do and point you at the right product when it is not this one.",
    ],
    related: [
      {
        href: "/products/clinicnp",
        label: "ClinicNP",
        text: "The product itself: every module, the roles, and how it is deployed.",
      },
      {
        href: "/clinic-and-pharmacy-software-in-nepal",
        label: "clinic and pharmacy software in Nepal",
        text: "What changes when both halves run on one counter and one invoice.",
      },
      {
        href: "/pharmacy-software-in-nepal",
        label: "pharmacy software in Nepal",
        text: "The dispensing side: batch, expiry, shelf map, and stock out with a reason.",
      },
      {
        href: "/best-clinic-management-software-in-nepal",
        label: "choosing clinic management software in Nepal",
        text: "How to decide between a clinic system, a hospital system, and a retail package.",
      },
      {
        href: "/clinic-software-price-in-nepal",
        label: "what clinic software costs in Nepal",
        text: "What moves the quotation, and the charges that appear after go live.",
      },
      {
        href: "/lab-software-in-nepal",
        label: "lab software in Nepal",
        text: "If you run your own bench and enter results, that is Nidanyo rather than ClinicNP.",
      },
    ],
    faqs: [
      {
        question: "What is clinic management software?",
        answer:
          "Clinic management software is one system that runs the non-clinical half of a clinic: registering patients and keeping one record per person, recording visits and appointments, billing consultations and diagnostics, tracking samples sent out for testing, dispensing medicines, calculating doctor shares, and reporting the day's money. ClinicNP by Infobytes Nepal does all of that on one counter and one invoice series.",
      },
      {
        question: "Is there clinic management software made in Nepal?",
        answer:
          "Yes. ClinicNP is built and supported in Nepal by Infobytes Nepal Pvt. Ltd., with Bikram Sambat dates on every screen and register, fiscal years that run Shrawan to Ashadh and close properly, and support on the phone in Nepali. It is designed for the way a Nepali polyclinic actually bills, which is one counter carrying consultations, diagnostics, lab tests, and the prescription together.",
      },
      {
        question: "Does ClinicNP work without internet?",
        answer:
          "Yes. Billing and patient registration carry on through a full business day of zero connectivity, held in an outbox and sent the moment the line comes back, and patient numbers are assigned without collision even from two devices at once. The medicine catalogue and the patient list are cached on the machine so search still answers, and it installs like an app on the counter machine, a tablet, or the owner's phone.",
      },
      {
        question: "Can ClinicNP handle a clinic that also has a pharmacy?",
        answer:
          "Yes, and that is the case it was built for. The clinic and pharmacy halves are two modules of one system sharing one counter, one invoice series, one patient record, and one set of books, so a consultation and the prescription that follows it leave as a single bill with one payment. Each half can also be switched on or off on its own without deleting anything.",
      },
      {
        question: "Does ClinicNP enter lab results and print report cards?",
        answer:
          "No, and that is deliberate. ClinicNP bills a test, follows the sample through five stamped stages, and keeps the report that comes back against the patient's visit, which is the counter around a laboratory. Entering results, holding reference ranges, producing report cards, and interfacing with analysers is a laboratory information system, and that is our other product, Nidanyo.",
      },
      {
        question: "How are doctor shares calculated?",
        answer:
          "Four ways, set per doctor: nothing, a percentage of the consultation, a fixed amount per consultation, or a percentage of listed services. The share is calculated on each line as the bill is raised rather than reconstructed at month end, and totals into a payout sheet per doctor that exports for the month.",
      },
      {
        question: "What does ClinicNP print?",
        answer:
          "The A4 invoice on your own letterhead, marked TAX INVOICE when you are registered for VAT; the OPD slip with the patient, visit number, doctor, and complaint plus a large empty area for the doctor's handwriting; the lab dispatch slip that goes with the sample; and refund and stock-out notes on an 80 mm roll with a signature line. All of it prints through the browser from an ordinary office printer, with no drivers to install.",
      },
      {
        question: "Can staff be stopped from changing a rate on a bill?",
        answer:
          "Yes. Editing a rate is a permission the owner switches on or off per user, an edited line is marked as edited on the bill itself, and the change is signed and logged with a name and a time. Bills are never deleted either: a cancelled bill stays visible to the owner with who cancelled it and when.",
      },
      {
        question: "How much does ClinicNP cost?",
        answer:
          "ClinicNP is quoted by the size of the clinic and the modules you switch on rather than sold at a list price, and it is substantially cheaper than commissioning the equivalent, which for custom software in Nepal typically starts around NPR 200,000 for a focused first version. Tell us your daily patient count, how many counters you bill from, whether you dispense medicines, and how many doctors take a share, and you get a written quotation at no charge.",
      },
      {
        question: "How long does it take to get a clinic running on it?",
        answer:
          "For a single counter clinic with a settled service list, expect one to three weeks from catalogue setup to go live, including training and a parallel run alongside your current process. What takes the time is almost never the software: it is agreeing the service catalogue, the rates, and the doctor share basis, because those are usually written down for the first time during setup.",
      },
    ],
  },

  pharmacySoftware: {
    slug: "pharmacy-software-in-nepal",
    path: "/pharmacy-software-in-nepal",
    metaTitle: "Pharmacy Software in Nepal | ClinicNP by Infobytes Nepal",
    metaDescription:
      "Pharmacy software built in Nepal for medical shops, clinic dispensaries, and polyclinic pharmacies. Stock by batch and expiry, oldest expiry first, expired stock blocked from sale, a shelf map, supplier ledgers, and a stock-out register that shows what the month cost you.",
    ogTitle: "Pharmacy Software in Nepal | ClinicNP",
    ogDescription:
      "Batch and expiry on every line, expired stock that cannot be sold, a shelf map of the real room, and the one report an owner wants: what did I lose this month, and to what?",
    keyword: "Pharmacy Software in Nepal",
    heroTitle: "Pharmacy Software in Nepal",
    heroIntro:
      "ClinicNP by Infobytes Nepal is pharmacy software for medical shops, clinic dispensaries, and polyclinic pharmacies across Nepal. Stock is held per batch with its expiry, the oldest expiry leaves first, expired stock cannot be sold at all, and the counter sells by box, strip, or tablet with its own rate at each level. Bikram Sambat throughout, and it keeps billing when the internet stops.",
    overview: {
      title: "Stock is only an asset until the expiry date says otherwise",
      paragraphs: [
        "A pharmacy's stock figure is two different numbers wearing one label. There is what is on the shelf, and there is what can still be sold. The gap between them is expiry, and in a shop running on a supermarket billing package that gap is invisible until a strip is picked up at the counter and somebody reads the date out loud. By then it is not stock, it is a write-off, and nobody recorded when it became one.",
        "ClinicNP holds stock per batch, and every batch carries its own cost and its own expiry. Near expiry is a screen rather than a memory, with warnings at thirty, sixty, and ninety days. Expired stock is held back from sale outright, with no override, ever — not a confirmation dialog, not a manager password. Overselling is blocked the same way. The oldest expiry is chosen automatically on every line, and can be overridden per line when a batch genuinely has to be picked by hand.",
        "The counter is built for the way medicines are actually sold here. A single item has a rate as a box, as a strip, and as a tablet, and the person serving switches unit with one key. The quantity picker draws the medicine in its real shape — a strip of ten, a bottle, a tube — so the quantity can be seen rather than trusted to a number typed under pressure. One search box finds the item, and the whole counter has a key for every action.",
        "Where stock goes when it does not get sold is a register in its own right. Stock out is recorded with a reason: returned to supplier, expired, damaged, lost, used in the clinic, given as a sample, or a counted correction. That produces the number an owner actually wants at month end and almost never has — what did I lose this period, and to what? Alongside it sit profit by item, stock valuation, the purchase register, a VAT summary when the company is registered for it, and the expiry and slow-moving report that says what is dying on the shelf and what never moves at all.",
      ],
    },
    problems: [
      "Expiry is known only when somebody reads a strip at the counter, and by then the loss has already happened.",
      "Stock is held as one number per item, so two batches bought at different costs and expiring in different months are indistinguishable.",
      "Billing software written for retail sells a box, and the shop actually sells four tablets out of it.",
      "Expired medicine can be billed because nothing in the system prevents it, and the only control is the person at the counter noticing.",
      "Losses go unrecorded, so nobody can say whether the month's shortfall was expiry, damage, theft, or a miscount.",
      "A new hand cannot find an item, because where things are kept exists only as knowledge in the room.",
      "Supplier balances are reconstructed from a pile of invoices whenever the supplier asks.",
      "Profit is guessed at item level, because the cost the batch was actually bought at was never stored against it.",
    ],
    solutions: [
      "Stock held per batch, each with its own purchase cost and its own expiry date.",
      "Warnings at thirty, sixty, and ninety days before expiry, and expired stock held back from sale with no override.",
      "Oldest expiry leaves first by default, overridable per line when a batch has to be picked by hand.",
      "Rates per box, per strip, and per tablet on the same item, with a one-key unit switch and a picker that draws the real shape.",
      "A stock-out register with a reason on every line, and the period's loss grouped by reason.",
      "A shelf map drawn as the room actually is, with an item's place highlighted when it is searched for.",
      "Purchases entered against the supplier invoice, each line landing on its own batch with its own cost and expiry, and a ledger per supplier.",
      "Profit by item read against what the batch actually cost, plus stock valuation, purchase register, and a VAT summary.",
    ],
    features: [
      "Stock held per batch with cost and expiry",
      "Near expiry warnings at thirty, sixty, and ninety days",
      "Expired stock blocked from sale with no override",
      "Oldest expiry first, overridable per line",
      "Overselling blocked outright",
      "Rates per box, strip, and tablet on one item",
      "Visual quantity picker in the medicine's real shape",
      "Shelf and rack map of the actual room",
      "Stock out with a reason, and a loss register",
      "Purchases against a supplier invoice, batch by batch",
      "Supplier records and running ledgers",
      "Returns to supplier and returns from a patient",
      "Cash, QR, and credit with later settlement",
      "Profit by item, stock valuation, and purchase register",
      "VAT summary when the company is registered for it",
      "Day close across the counter every evening",
    ],
    process: [
      {
        title: "Load the item list the way you buy it",
        text: "Medicines are set up with the units you actually trade in and a rate at each level, so a box, a strip, and a tablet each price correctly from one record rather than from three.",
      },
      {
        title: "Enter opening stock by batch",
        text: "Opening stock goes in per batch with its cost and its expiry, which is the step that makes every later expiry warning, valuation figure, and profit-by-item number true rather than approximate.",
      },
      {
        title: "Draw the room",
        text: "Racks, desks, and shelves are laid out as the room really is, so a search for an item highlights where it physically sits. This is the part that pays for itself the first time a new hand works a busy evening alone.",
      },
      {
        title: "Set up suppliers and the purchase flow",
        text: "Suppliers are loaded with their terms, and purchases are entered against their invoices so each line lands on its own batch. Balances become a ledger instead of a pile of paper.",
      },
      {
        title: "Go live, then read the first month's stock out register",
        text: "We stay on the phone through the first days at the counter, and then look at the first stock-out register together. That single report usually changes how the shop buys, which is the point of installing any of this.",
      },
    ],
    reasons: [
      "Expiry is treated as a control, not a report. Expired stock cannot be sold, and no password changes that.",
      "Built for the way medicines are sold in Nepal, including selling four tablets out of a strip of ten.",
      "Bikram Sambat dates and fiscal years throughout, with closed years that stay readable and print unchanged.",
      "The counter keeps billing through a full business day with no internet, and reconciles by itself afterwards.",
      "It becomes a clinic system by switching a module on, without moving to another product or another counter.",
      "Support on the phone, in Nepali, from the people who built it.",
    ],
    related: [
      {
        href: "/products/clinicnp",
        label: "ClinicNP",
        text: "The product itself: both halves, the roles, and how it is deployed.",
      },
      {
        href: "/clinic-and-pharmacy-software-in-nepal",
        label: "clinic and pharmacy software in Nepal",
        text: "What changes when the dispensary and the consultation share one invoice.",
      },
      {
        href: "/pharmacy-software-price-in-nepal",
        label: "pharmacy software price in Nepal",
        text: "What moves a pharmacy quotation, and where the cheap options cost more.",
      },
      {
        href: "/clinic-management-software-in-nepal",
        label: "clinic management software in Nepal",
        text: "The clinic half: patients, visits, doctors, and samples.",
      },
      {
        href: "/inventory-management-software-in-nepal",
        label: "inventory management software in Nepal",
        text: "If your stock problem is a warehouse rather than a dispensing counter.",
      },
      {
        href: "/pos-software-in-nepal",
        label: "POS software in Nepal",
        text: "If you are a retailer without batches, expiry, or prescriptions to handle.",
      },
    ],
    faqs: [
      {
        question: "What is pharmacy software?",
        answer:
          "Pharmacy software is a system that sells medicines at a counter while holding stock by batch and expiry behind it, so every sale knows which batch it came from, what that batch cost, and when it expires. ClinicNP by Infobytes Nepal does that, blocks expired stock from being sold at all, and records every loss with a reason so the month's shortfall can be explained.",
      },
      {
        question: "Is there pharmacy software made in Nepal?",
        answer:
          "Yes. ClinicNP is built and supported in Nepal by Infobytes Nepal Pvt. Ltd., with Bikram Sambat dates on every screen and register, fiscal years running Shrawan to Ashadh, and support on the phone in Nepali. It sells by box, strip, or tablet because that is how a medical shop in Nepal actually trades.",
      },
      {
        question: "Can it stop expired medicine from being sold?",
        answer:
          "Yes, outright and with no override. Expired stock is held back from sale entirely, and there is no confirmation dialog or manager password that releases it. Near expiry is warned at thirty, sixty, and ninety days so it can be dealt with commercially before it becomes a write-off, and overselling is blocked the same way.",
      },
      {
        question: "Does it handle selling loose tablets from a strip?",
        answer:
          "Yes. One item carries a rate as a box, as a strip, and as a tablet, and the person at the counter switches unit with a single key. The quantity picker draws the medicine in its real shape, so a quantity is seen rather than trusted to a number typed during a queue.",
      },
      {
        question: "Which batch does it sell first?",
        answer:
          "The oldest expiry, chosen automatically on every line, and overridable per line when a batch genuinely has to be picked by hand. That default is what keeps near-expiry stock moving before it turns into a loss.",
      },
      {
        question: "Can it tell me what I lost to expiry this month?",
        answer:
          "Yes, and that is a report in its own right. Stock out is recorded with a reason — returned to supplier, expired, damaged, lost, used in the clinic, given as a sample, or a counted correction — and the stock-out register groups the period's lost value by reason. Alongside it are profit by item, stock valuation, and a report on what is dying on the shelf and what never moves.",
      },
      {
        question: "Do I need the clinic side if I only run a pharmacy?",
        answer:
          "No. The clinic and pharmacy halves are separate modules and either one runs on its own; a medical shop switches on the pharmacy half alone. Switching the clinic half on later never requires moving to a different product, and switching a module off removes its screens and server routes rather than deleting its data.",
      },
      {
        question: "Does it work when the internet is down?",
        answer:
          "Yes. Bills keep leaving the counter through a full business day of zero connectivity, held in an outbox and sent when the line returns, and the item catalogue is cached on the machine so search still answers. It installs like an app on the counter machine, a tablet, or the owner's phone.",
      },
      {
        question: "How much does pharmacy software cost in Nepal?",
        answer:
          "ClinicNP is quoted by counter count, user count, and the modules you switch on rather than sold at a list price. For comparison, commissioning custom software in Nepal typically starts around NPR 200,000 for a focused first version, so adopting an existing product is substantially cheaper. Tell us how many counters you bill from and roughly how many items you stock and you get a written quotation at no charge.",
      },
      {
        question: "Is ClinicNP approved by the Inland Revenue Department for VAT billing?",
        answer:
          "Billing software used by a VAT registered business in Nepal has to meet Inland Revenue Department requirements and be approved before use, and we will tell you exactly where that stands for your situation at the scoping stage rather than after the build. Depending on how you are registered, the right route is either building to those specifications and going through the approval process, or running ClinicNP for operations alongside an already approved billing package. Unregistered shops are not affected by this.",
      },
    ],
  },

  clinicAndPharmacy: {
    slug: "clinic-and-pharmacy-software-in-nepal",
    path: "/clinic-and-pharmacy-software-in-nepal",
    metaTitle: "Clinic & Pharmacy Software in Nepal | One Counter | ClinicNP",
    metaDescription:
      "One system for a clinic and its pharmacy in Nepal: one counter, one invoice carrying consultations, diagnostics, lab tests and medicines, one patient record, and one set of books. ClinicNP by Infobytes Nepal, with each half switchable on its own.",
    ogTitle: "Clinic and pharmacy software on one counter",
    ogDescription:
      "A consultation, an ultrasound, two lab tests and the prescription as a single invoice with one number and one payment. That is the whole idea.",
    keyword: "Clinic & Pharmacy Software in Nepal",
    heroTitle: "Clinic and pharmacy software on one counter",
    heroIntro:
      "A clinic and a pharmacy have the same problem at the same desk: a queue of people, a paper register, and software written for a supermarket. ClinicNP is one system with two halves that share one counter, one invoice series, one patient record, and one set of books. Each half is switched on or off on its own, and switching one off never deletes anything.",
    overview: {
      title: "Two systems at one desk is the actual problem",
      paragraphs: [
        "Most clinics with a dispensary did not choose to run two systems. They bought a billing package for the pharmacy because that was the urgent problem, then handled the consultation side on a register because no package covered it, and ended up with a desk where one person serves one patient twice. The patient pays for the consultation, walks four feet, and pays for the prescription against a different bill number that shares nothing with the first.",
        "That split costs more than the extra minute. The day's money reconciles twice and rarely agrees. A patient exists in one system and not the other, so the pharmacy has no idea who it just dispensed to. Nobody can read the day as a whole, because medicines, consultation, diagnostics, and laboratory sit in separate boxes. And when the owner asks what the clinic collected today, the answer is an addition somebody does by hand.",
        "ClinicNP is one system with two modules. The clinic half is where the patient exists: registered once, one number for life, every visit kept, the consultation and the ultrasound and the ECG and the lab test billed, and the report that comes back kept against the visit. The pharmacy half is where medicines live: sold by tablet, strip, or box, held per batch with expiry deciding whether stock is an asset or a write-off, oldest expiry first, expired stock unsellable. Both switched on is the interesting case — one counter, one invoice that carries medicines and services together, one dashboard, one set of books.",
        "On the counter that looks like a single search box returning both halves of the catalogue, each result tagged so a mixed bill still reads clearly, with the sample a test needs shown on the result. Services sit in their own block with the doctor on the line; medicines carry the unit picker, the batch, and the rate. It saves as one invoice, and the evening's day close shows the collection split into medicines, consultation, diagnostics, and laboratory — the four numbers an owner is actually trying to compare.",
      ],
    },
    problems: [
      "One patient pays twice at one desk, against two bill numbers that share nothing.",
      "The day's collection is reconciled in two systems and the two totals rarely agree.",
      "The pharmacy has no patient record, so a dispensing history cannot be attached to anybody.",
      "Nobody can see the day split into medicines, consultation, diagnostics, and laboratory without adding it up by hand.",
      "Two licences, two support numbers, two backups, and two sets of staff training.",
      "A prescription written in the consultation is typed again at the dispensing counter.",
      "Credit given on the consultation and credit given on medicines are tracked separately, so a patient's real balance exists nowhere.",
      "The clinic outgrows the arrangement and the only way forward looks like replacing both systems at once.",
    ],
    solutions: [
      "One invoice series carrying services and medicines together, with one number, one payment, and one record behind it.",
      "One day close covering both halves, with the collection split by method and by what it was collected for.",
      "One patient record that the dispensing side can see, so medicines given are attached to a person and a visit.",
      "One search box returning medicines and services together, each tagged, with the sample a test needs shown on the result.",
      "One system to license, back up, support, and train on, with one activity log across both halves.",
      "Credit settled from a single bill register, whichever half the charge came from.",
      "Modules that are a real boundary: a switched-off half has its screens, its menu, and its server routes gone, not merely hidden.",
      "A path that does not require replacing anything later, because turning the second half on is a setting rather than a migration.",
    ],
    features: [
      "One counter for medicines, services, or both",
      "One invoice series across both halves",
      "One patient record visible to the dispensing side",
      "A single search box over the whole catalogue, tagged by type",
      "Services blocked with the doctor on the line",
      "Medicines with unit picker, batch, and expiry on the line",
      "A service needs a patient; a medicine-only bill can stay anonymous",
      "Hold and resume a bill while the next person is served",
      "Day close across both halves, split by method and by category",
      "Dashboard splitting the day into medicines, consultation, diagnostics, and laboratory",
      "Each module switchable on its own, with nothing deleted",
      "One activity log, one backup, and one fiscal year rollover",
    ],
    process: [
      {
        title: "Work out which half is urgent",
        text: "Most clinics have one half that is actively costing them money and one that is merely untidy. We start with the urgent one so the system earns its keep in the first weeks, and switch the other on once the counter is comfortable.",
      },
      {
        title: "Put both catalogues in one place",
        text: "Services and medicines are loaded so one search box reaches both: services with their rate, doctor rule, outside laboratory and partner cost; medicines with their units, rates per level, and opening stock by batch and expiry.",
      },
      {
        title: "Agree what one invoice looks like",
        text: "The invoice is laid out on your own letterhead with the service block and the medicine block, and marked TAX INVOICE where you are registered for VAT. This is agreed before go live, because it is the document the clinic hands to every patient.",
      },
      {
        title: "Train one counter, not two",
        text: "The person on the desk learns one system and one keyboard, which is the whole point. Doctors are trained separately on their own screen, which shows their booked consultations and nothing else.",
      },
      {
        title: "Go live, then read one day close",
        text: "We watch a full day end to end, including the evening day close, and check that the expected cash in the drawer matches what is actually there. That single reconciliation is the test of whether the two halves really are one set of books.",
      },
    ],
    reasons: [
      "One counter and one invoice is not a feature here, it is the design. Both halves were written to share a bill, not integrated afterwards.",
      "Each half is independently switchable, so the arrangement can change as the clinic changes without changing product.",
      "One set of books, one day close, one backup, one activity log, and one support number.",
      "Bikram Sambat and a proper fiscal year rollover across both halves at once.",
      "The whole counter keeps working through a full business day with no internet.",
      "Built and supported in Nepal, with the service catalogue and rates loaded in for you.",
    ],
    related: [
      {
        href: "/products/clinicnp",
        label: "ClinicNP",
        text: "The product itself: both halves, the four roles, and how it is deployed.",
      },
      {
        href: "/clinic-management-software-in-nepal",
        label: "clinic management software in Nepal",
        text: "The clinic half on its own: patients, visits, doctors, and samples.",
      },
      {
        href: "/pharmacy-software-in-nepal",
        label: "pharmacy software in Nepal",
        text: "The pharmacy half on its own: batch, expiry, shelf map, and losses.",
      },
      {
        href: "/best-clinic-management-software-in-nepal",
        label: "choosing between a clinic, hospital, and retail system",
        text: "Which category you are actually shopping in, and where each one fails.",
      },
      {
        href: "/hospital-management-software-in-nepal",
        label: "hospital management software in Nepal",
        text: "If you admit patients and run wards, this is a different scope.",
      },
      {
        href: "/best-lab-software-in-nepal",
        label: "choosing lab software in Nepal",
        text: "If you run your own bench and release your own reports, start here instead.",
      },
    ],
    faqs: [
      {
        question: "Can one system run both a clinic and its pharmacy?",
        answer:
          "Yes. ClinicNP is one system with a clinic module and a pharmacy module that share one counter, one invoice series, one patient record, and one set of books, so a consultation and the prescription that follows it leave as a single bill with one number and one payment. Each module can also run on its own.",
      },
      {
        question: "What actually changes when both halves are on one system?",
        answer:
          "The patient pays once instead of twice, the day reconciles once instead of twice, and the evening day close shows the collection split into medicines, consultation, diagnostics, and laboratory rather than as two unrelated totals. Practically, the person on the desk learns one keyboard and the owner reads one dashboard.",
      },
      {
        question: "Can we start with one half and add the other later?",
        answer:
          "Yes. Each half is switched on or off on its own, and turning one on later is a setting rather than a migration. Switching a module off removes its screens, its menu, and its server routes rather than hiding them, and never deletes its data, so the decision is reversible in both directions. At least one half has to stay on.",
      },
      {
        question: "How does one bill carry both a service and a medicine?",
        answer:
          "One search box returns medicines and services together, each tagged so a mixed bill reads clearly. Services sit in their own block with the doctor on the line, medicines carry the unit picker, the batch, and the rate, and the whole thing saves as one invoice with one payment, split correctly behind the scenes for revenue, doctor shares, and stock.",
      },
      {
        question: "Does a medicine-only sale still need a patient?",
        answer:
          "No. A medicine-only bill can stay anonymous, which is what a walk-in at a dispensing counter actually is. A service does need a patient, and one can be attached or registered inline in about twenty seconds without leaving the bill.",
      },
      {
        question: "Is this the same as a hospital management system?",
        answer:
          "No. A hospital system covers admissions, wards, IPD billing, and departments a clinic does not have, and it is a much larger purchase. ClinicNP is scoped to an outpatient clinic or polyclinic with a dispensing counter, which is why it is quicker to set up and cheaper to run. If you admit patients overnight, you are shopping for a hospital system.",
      },
      {
        question: "Does it handle the lab tests we send outside?",
        answer:
          "Yes. A test is billed, the sample is followed through five stamped stages from collection to handing the report over, a dispatch slip goes with it, and the report that comes back is kept against the patient's visit. The partner laboratory side is fully accounted: what you billed, what the partner charges, the margin between them, what you have paid, and what is still owed, per partner or consolidated.",
      },
      {
        question: "Who can see what?",
        answer:
          "Four roles, enforced on the server for every read and every write rather than hidden in a menu. The owner sees the whole system and every fiscal year; counter staff do the day's work and nothing that rewrites history; an accountant is read-only across every report including closed years; a doctor gets their own booked consultations on a phone and nothing else.",
      },
    ],
  },

  bestClinicSoftware: {
    slug: "best-clinic-management-software-in-nepal",
    path: "/best-clinic-management-software-in-nepal",
    // "Best" is allowed in this title where it is kept out of
    // /clinic-management-software-in-nepal, and the difference is not cosmetic.
    // That page would be asserting that ClinicNP is the best. This one is about
    // how to decide which is, opens by saying there is no single answer, and
    // names the clinics ClinicNP is wrong for. The title describes what the
    // page does.
    metaTitle: "Best Clinic Management Software in Nepal: How to Choose | ClinicNP",
    metaDescription:
      "How to choose clinic management software in Nepal: clinic system versus hospital system versus retail billing package, the demo requests that separate a shortlist in ten minutes, what to ask about Bikram Sambat and fiscal years, and the clinics ClinicNP is the wrong fit for.",
    ogTitle: "How to choose clinic management software in Nepal",
    ogDescription:
      "There is no single best clinic software in Nepal. There is a best one for your patient volume, whether you dispense, and whether you run your own lab bench. Here is how to tell.",
    keyword: "Best Clinic Management Software in Nepal",
    heroTitle: "Choosing the best clinic management software in Nepal",
    heroIntro:
      "There is no single best clinic management software in Nepal, and a vendor who answers that question with their own product name is selling rather than advising. There is a best system for your patient volume, for whether you dispense medicines, for whether you run your own laboratory bench, and for whether you admit patients at all. This page is the reasoning we would use if we were buying, including the clinics our own product is the wrong answer for.",
    overview: {
      title: "Pick the category before you pick the vendor",
      paragraphs: [
        "Almost every expensive mistake in this category is a category mistake, not a vendor mistake. Four different kinds of software get sold to clinics in Nepal, they overlap enough to be confused in a demo, and choosing the wrong one costs more than choosing the second-best product inside the right one.",
        "A retail billing or POS package sells items and reconciles a till. It is cheap, it is everywhere, and it has no patient, no visit, and no doctor, so the clinical half of the day ends up in a notes field. A pharmacy package adds batch and expiry, which is real progress for a dispensary and still leaves the consultation unrecorded. A clinic management system is organised around the patient and the visit: one record per person for life, visits with a complaint and findings, doctors with a share basis, diagnostics and lab tests billed and followed, and a dispensing counter if there is one. A hospital management system adds admissions, wards, IPD billing, and departments — a much larger purchase that a clinic with no beds pays for and does not use.",
        "There is a fifth category that gets confused with all of them, and it is worth separating cleanly because we build in both. A laboratory information system is where results are entered, reference ranges are held per test and per age and sex, reports are verified by an authorised signatory and printed as report cards, and analysers are interfaced. If your bench runs your own tests and releases your own reports, that is what you are shopping for, and ClinicNP is not it — our other product, Nidanyo, is. If you collect samples and send them to a partner laboratory, you need the counter around a lab, which is exactly what ClinicNP does.",
        "Once the category is settled, the shortlist is decided by a small number of requests that no feature list answers. Ask any vendor to raise a single bill carrying a consultation, a diagnostic, an outside lab test, and two medicines from different batches, and to show the doctor's share on that bill. Ask them to reprint a bill from a closed fiscal year, unchanged. Ask them to sell four tablets out of a strip of ten, then to sell an expired batch. Ask them to pull the plug on the internet and keep billing. Those four requests separate a shortlist faster than any comparison table, because each of them is either built in or cannot be demonstrated at all.",
      ],
    },
    problems: [
      "Four different categories of software are all demonstrated as 'clinic software', so comparison starts from the wrong shelf.",
      "A retail billing package is bought because it is cheap, and the consultation, the doctor share, and the sample end up outside the system.",
      "A hospital management system is bought by a clinic with no beds, which pays for admissions, wards, and IPD billing it will never open.",
      "Laboratory software is bought by a clinic that sends its samples out, or clinic software by a laboratory that runs its own bench.",
      "The demo runs on prepared data, so nobody sees a duplicate patient, a mixed bill, a credit settlement, or a cancelled invoice.",
      "Bikram Sambat is shown as a date display and turns out not to reach the registers, the fiscal year, or the printed report.",
      "Nobody asks what happens to the counter when the internet goes down, which in most of Nepal is a question about this week.",
      "Nobody asks what happens to three years of patient records if the relationship with the vendor ends.",
    ],
    solutions: [
      "Settle the category first: retail package, pharmacy package, clinic system, hospital system, or laboratory information system. They are not cheaper or dearer versions of each other.",
      "Judge every candidate on your own day. Bring two similar patient names, a mixed bill, an outside lab test, a discount, and an invoice that has to be cancelled.",
      "Ask for one bill carrying a consultation, a diagnostic, an outside test, and two medicines from different batches, with the doctor's share shown on it.",
      "Ask for a bill from a closed fiscal year to be reprinted unchanged, live.",
      "Ask them to sell four tablets from a strip, then to sell an expired batch, and watch what the system does about the second one.",
      "Ask them to disconnect the internet during the demo and keep billing and registering patients.",
      "Compare total annual cost across users, counters, modules, hosting, and support rather than the headline figure.",
      "Establish before signing that your patient, visit, bill, and stock data is exportable in a usable format.",
    ],
    features: [
      "The right category for your clinic, decided first",
      "One patient record per person, with duplicate detection",
      "A single bill across consultation, diagnostics, and medicines",
      "Doctor share basis visible on the billed line",
      "Bikram Sambat in the registers, not only on the screen",
      "A closed fiscal year that reprints unchanged",
      "Batch and expiry control that cannot be overridden",
      "Billing that survives a day without internet",
      "Roles enforced on the server, not in the menu",
      "An activity log covering overrides, cancels, and merges",
      "Data export you have seen working before you sign",
      "Support in your language and your timezone",
    ],
    process: [
      {
        title: "Write down the day you actually have",
        text: "Patients a day, counters billing, whether you dispense, whether samples go out or stay in, how many doctors take a share, and whether anyone stays overnight. Six lines, and they decide the category before any vendor is contacted.",
      },
      {
        title: "Shortlist by category, not by feature list",
        text: "Two or three candidates inside one category is a comparison. One candidate from each of three categories is a confusion, and it is how clinics end up buying a hospital system.",
      },
      {
        title: "Run the four requests on live data",
        text: "The mixed bill with a doctor share, the reprint from a closed year, the expired batch, and the disconnected internet. Ask for all four in the same session, in the system, not as slides.",
      },
      {
        title: "Price the second year before signing the first",
        text: "Get the quotation split into one-time implementation and recurring annual cost, and ask what the figure becomes when you add a counter, a doctor, or the second module.",
      },
      {
        title: "Pilot on one counter",
        text: "A few weeks on one counter with real patients, in parallel with what you do now. Staff abandon anything that adds steps to a busy morning, and that only shows up under real load.",
      },
    ],
    reasons: [
      "We will tell you which category you are shopping in before we tell you about our product.",
      "We state plainly what ClinicNP does not do — results, reference ranges, report cards, analysers, admissions, wards — rather than letting a demo imply otherwise.",
      "When a laboratory information system is the right answer we say so, and Nidanyo is ours, so the recommendation costs us nothing to make honestly.",
      "The four demo requests above are ones we invite, because they are the ones our product was built to pass.",
      "Built, implemented, and supported by one team in Nepal, on the phone, in Nepali.",
      "Your data stays exportable. There is no lock in by design.",
    ],
    related: [
      {
        href: "/clinic-management-software-in-nepal",
        label: "clinic management software in Nepal",
        text: "What a clinic system actually covers, module by module.",
      },
      {
        href: "/clinic-and-pharmacy-software-in-nepal",
        label: "clinic and pharmacy software in Nepal",
        text: "The one-counter, one-invoice case, if you dispense as well as consult.",
      },
      {
        href: "/clinic-software-price-in-nepal",
        label: "clinic software price in Nepal",
        text: "What moves the number, and what appears on the bill after go live.",
      },
      {
        href: "/blog/clinic-management-software-in-nepal-one-system-for-clinic-pharmacy-and-lab",
        label: "one system for clinic, pharmacy and lab",
        text: "The longer read on why the counter, not the clinical work, is where the day is lost.",
      },
      {
        href: "/best-lab-software-in-nepal",
        label: "choosing lab software in Nepal",
        text: "If your bench runs its own tests, this is the decision you are actually making.",
      },
      {
        href: "/hospital-management-software-in-nepal",
        label: "hospital management software in Nepal",
        text: "If you admit patients and run wards, the scope is larger than this.",
      },
    ],
    faqs: [
      {
        question: "What is the best clinic management software in Nepal?",
        answer:
          "The best clinic management software in Nepal is the one that matches your category and your day: patient volume, whether you dispense medicines, whether samples go out to a partner laboratory or stay on your own bench, and whether anybody is admitted overnight. For an outpatient clinic or polyclinic with a dispensing counter that sends samples out, ClinicNP by Infobytes Nepal is built for exactly that shape, with Bikram Sambat throughout and billing that survives a day without internet.",
      },
      {
        question: "How is clinic software different from hospital software?",
        answer:
          "A clinic system is organised around outpatient visits: one patient record for life, a visit with a complaint and findings, diagnostics and tests billed, doctor shares, and a dispensing counter. A hospital system adds admissions, wards, IPD billing, and multiple departments, which is a much larger and more expensive purchase. If nobody stays overnight, a hospital system is capacity you pay for and never open.",
      },
      {
        question: "Can I just use a retail billing or POS package for my clinic?",
        answer:
          "You can bill medicines with one, and the clinical half of the day will have nowhere to go. A retail package has no patient, no visit, and no doctor, so registrations, complaints, findings, doctor shares, and sample tracking end up in a notes field or back on the register. It is the cheapest option and the one most likely to be replaced within two years.",
      },
      {
        question: "Do I need clinic software or lab software?",
        answer:
          "If your own bench runs the tests and you release your own reports, you need a laboratory information system — results entry, reference ranges per test and per age and sex, verification by an authorised signatory, report cards, and analyser interfacing. If you collect samples and send them to a partner laboratory, you need the counter around a lab: billing, five tracked stages, a dispatch slip, and the partner's ledger. ClinicNP is the second; Nidanyo, also ours, is the first.",
      },
      {
        question: "What should I ask for in a demo?",
        answer:
          "Four things, on live data in the same session: one bill carrying a consultation, a diagnostic, an outside lab test and two medicines from different batches with the doctor's share shown; a bill reprinted unchanged from a closed fiscal year; four tablets sold out of a strip, followed by an attempt to sell an expired batch; and the internet disconnected while billing continues. Each is either built in or cannot be shown at all, which is what makes them useful.",
      },
      {
        question: "How important is Bikram Sambat really?",
        answer:
          "It decides whether the software replaces your register or sits beside it. BS dates have to reach the registers, the fiscal year boundary at Shrawan and Ashadh, the year-end rollover, and the printed report, not just the date field on a screen. Ask to see a report filtered by a BS range and a closed year reprinted, because a system that converts dates for display only cannot do either.",
      },
      {
        question: "When is ClinicNP the wrong choice?",
        answer:
          "ClinicNP is the wrong choice for hospitals that admit patients and run wards, for laboratories that run their own bench and release their own reports with reference ranges and analyser interfacing, for research and industrial testing laboratories, and for retail shops with no patients, no prescriptions, and no doctors. We would rather say that before a quotation than after an implementation.",
      },
      {
        question: "Should we build our own instead?",
        answer:
          "Rarely, for this. A focused first version of custom software in Nepal typically ranges from around NPR 200,000 to NPR 600,000, and a clinic system with billing, stock by batch, doctor shares, sample tracking, fiscal years, and offline operation is not a focused first version. Adopting an existing product is substantially cheaper and is running in weeks rather than quarters; building makes sense when your workflow genuinely has no product-shaped answer, and we will say so when that is the case.",
      },
    ],
  },

  clinicSoftwarePrice: {
    slug: "clinic-software-price-in-nepal",
    path: "/clinic-software-price-in-nepal",
    metaTitle: "Clinic Software Price in Nepal | What Drives the Cost | ClinicNP",
    metaDescription:
      "What clinic software costs in Nepal and why quotations differ so much: how clinic, pharmacy, lab and hospital systems sit in different price bands, one-time versus recurring cost, per-user and per-counter licensing, and the charges that appear after go live.",
    ogTitle: "What clinic software actually costs in Nepal",
    ogDescription:
      "Medical software is quoted, not priced off a list. Here is exactly what moves the number, which costs recur every year, and which ones turn up after go live.",
    keyword: "Clinic Software Price in Nepal",
    heroTitle: "What clinic software costs in Nepal",
    heroIntro:
      "Clinic software in Nepal is quoted rather than priced off a list, and the honest reason is that two clinics seeing the same number of patients can need very different systems. What we can do is set out what actually moves the number, how the clinic, pharmacy, laboratory and hospital categories sit in different price bands, which costs are one-time and which recur every year, and which charges tend to appear after go live rather than in the quotation.",
    overview: {
      title: "Why 'medical software price in Nepal' has no single answer",
      paragraphs: [
        "The phrase covers four purchases that differ by more than an order of magnitude. A retail billing package for a dispensing counter is the cheapest thing on the shelf and has no patient in it. A pharmacy system adds batch, expiry, suppliers, and stock valuation. A clinic or polyclinic system adds the patient, the visit, doctors and their shares, diagnostics, and the counter around a laboratory. A hospital management system adds admissions, wards, IPD billing, and departments, and is the largest of the four by a wide margin. A laboratory information system is a different axis again, priced by test menu, analyser interfacing, and branches rather than by beds or counters. Asking what medical software costs in Nepal without naming the category is like asking what a vehicle costs.",
        "Inside the clinic category, the drivers that move a quotation most, roughly in order, are: how many users and billing counters need access, whether you are switching on the pharmacy half as well as the clinic half, how many doctors take a share and on how many different bases, how many services and diagnostics are in your catalogue and how clean that list currently is, how many outside laboratories you settle with, whether you host it yourself or we host it, and how much historical patient data you want brought in. Catalogue cleanup is the one that most often surprises buyers, because it is quoted as software and delivered as careful work: most clinics have never written their service list, their rates, and their doctor share arrangements down in one place, and setup is where that finally happens.",
        "The more useful way to read any quotation in this category is one-time cost against recurring cost. One-time covers implementation: loading services and rates, configuring the doctor share basis, entering opening stock by batch if the pharmacy half is on, laying out the invoice and OPD slip on your letterhead, importing the active patient list, configuring roles and billing permissions, and training each role on its own screens. Recurring covers the licence or subscription, hosting if we host it, support, and updates. A quotation that does not separate the two cannot be compared against one that does, and that is usually not an accident.",
        "For the build-versus-buy comparison, the published range is the honest reference point: a focused first version of custom software in Nepal typically runs from around NPR 200,000 to NPR 600,000, and multi department systems generally start around NPR 600,000 and are quoted by module. A clinic system with billing, batch-level stock, doctor payouts, sample tracking, fiscal year rollover, and offline operation is not a focused first version. Adopting ClinicNP is quoted by clinic size and modules and is substantially cheaper than commissioning the equivalent, which is the usual reason clinics adopt rather than build.",
      ],
    },
    problems: [
      "Quotations are compared across categories, so a clinic system looks expensive next to a retail billing package that cannot do the job.",
      "The headline figure covers the licence and excludes implementation, and the real number arrives after the decision is made.",
      "One-time and recurring costs are mixed into a single line, making two quotations impossible to compare.",
      "Per-user or per-counter licensing looks cheap at today's size and becomes the largest line item exactly when the clinic grows.",
      "Service catalogue and rate list cleanup is assumed to be the clinic's job, then billed when the clinic cannot do it.",
      "Training is quoted as one session, and the clinic discovers that counter staff, doctors, and accounts each need their own.",
      "Support hours are not stated, so the clinic finds out during a Saturday morning that cover is Sunday to Friday, office hours.",
      "Data migration is quoted as 'patient import' without anyone agreeing how much history is coming and in what shape.",
    ],
    solutions: [
      "Name your category before you collect quotations, so you are comparing three of the same thing rather than one each of three.",
      "Ask for the quotation split into one-time implementation and recurring annual cost, as two separate totals.",
      "Get the licence model in writing and model it at twice your current counters and users before signing.",
      "Establish who cleans and loads the service catalogue, the rates, and the doctor share basis, and whether that is included.",
      "Have the print layouts — invoice on your letterhead, OPD slip, dispatch slip — named as deliverables rather than assumed.",
      "Confirm how many training sessions are included and which roles each one covers.",
      "Get support hours and response expectations written down, including Saturdays and clinic opening hours.",
      "Ask what year two costs before you sign year one, and what the figure becomes when you add a counter or switch on the second module.",
    ],
    features: [
      "Users and billing counters",
      "Which modules are switched on: clinic, pharmacy, or both",
      "Doctors taking a share, and how many share bases",
      "Size and cleanliness of the service and diagnostics catalogue",
      "Outside laboratories settled with, and their ledgers",
      "Opening stock entry by batch and expiry",
      "Hosted by us, or on a machine inside the clinic",
      "How much historical patient data is migrated",
      "Print layouts on your own letterhead",
      "Training sessions per role",
      "Support hours, including Saturdays",
      "Annual licence, updates, and backup handling",
    ],
    process: [
      {
        title: "Tell us the six numbers",
        text: "Patients a day, billing counters, whether you dispense, doctors taking a share, roughly how many services and diagnostics you sell, and how many outside laboratories you settle with. Those six decide most of the quotation.",
      },
      {
        title: "We scope what setup actually involves",
        text: "We look at your current service list, rates, and doctor arrangements, and tell you how much of the setup work is ours and how much is yours. This is the step where surprises get removed rather than deferred.",
      },
      {
        title: "You get the split quotation",
        text: "One-time implementation and recurring annual cost as two separate totals, with the licence model stated, and the figure for adding a counter or the second module written down now rather than discovered later.",
      },
      {
        title: "We agree the go-live scope",
        text: "What is loaded, what is migrated, which print layouts are prepared, which roles are trained, and on what date. Anything outside that is priced before it is done, not on the final bill.",
      },
      {
        title: "Year two is known before year one is signed",
        text: "You leave the conversation knowing what the recurring cost is, what is included in support, and what changes the number. No clinic should discover its second-year figure in its second year.",
      },
    ],
    reasons: [
      "We quote against your actual counters, users, and catalogue rather than publishing a package price that is designed to be exceeded.",
      "One-time and recurring costs are separated in every quotation we send, because that is the only form in which two quotes can be compared.",
      "Catalogue loading, print layouts, and per-role training are named in the scope rather than appearing later as change requests.",
      "Licensing is by users and counters, not per patient or per bill, so growing your volume does not grow your bill.",
      "The first consultation and the quotation are free, and you get a scope and a timeline with the number.",
      "If the honest answer is a different category of software, or a different vendor, we say so before quoting.",
    ],
    related: [
      {
        href: "/clinic-management-software-in-nepal",
        label: "clinic management software in Nepal",
        text: "What you are actually buying, module by module.",
      },
      {
        href: "/pharmacy-software-price-in-nepal",
        label: "pharmacy software price in Nepal",
        text: "The dispensing side priced on its own, if that is the half you need.",
      },
      {
        href: "/best-clinic-management-software-in-nepal",
        label: "choosing clinic management software in Nepal",
        text: "Settle the category first; it moves the price more than the vendor does.",
      },
      {
        href: "/lab-software-cost-in-nepal",
        label: "lab software cost in Nepal",
        text: "If your bench runs its own tests, this is the cost page that applies.",
      },
      {
        href: "/website-cost-in-nepal",
        label: "website cost in Nepal",
        text: "Our published ranges for the other thing most clinics ask about.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Send the six numbers and get a written quotation at no charge.",
      },
    ],
    faqs: [
      {
        question: "How much does clinic software cost in Nepal?",
        answer:
          "Clinic software in Nepal is quoted by users, billing counters, and which modules you switch on rather than sold at a list price, because two clinics with the same patient count can need very different systems. As a reference point for build versus buy, a focused first version of custom software in Nepal typically runs from around NPR 200,000 to NPR 600,000, and adopting an existing product such as ClinicNP is substantially cheaper than commissioning the equivalent.",
      },
      {
        question: "Why does nobody publish a price for medical software in Nepal?",
        answer:
          "Because 'medical software' covers four purchases in different price bands: a retail billing package, a pharmacy system, a clinic or polyclinic system, and a hospital management system, with laboratory information systems priced on a different axis again. A published figure either names one category or is meaningless, and in practice a published package price in this market is usually a starting point designed to be exceeded.",
      },
      {
        question: "What moves a clinic software quotation the most?",
        answer:
          "In rough order: how many users and billing counters need access, whether the pharmacy half is switched on as well as the clinic half, how many doctors take a share and on how many bases, how large and how clean your service and diagnostics catalogue is, how many outside laboratories you settle with, whether you host it or we do, and how much patient history is migrated. Catalogue cleanup surprises buyers most often, because it is quoted as software and delivered as careful work.",
      },
      {
        question: "What is the difference between one-time and recurring cost?",
        answer:
          "One-time is implementation: loading services and rates, configuring doctor shares, entering opening stock by batch, laying out your invoice and OPD slip, importing the active patient list, configuring roles, and training each role separately. Recurring is the licence or subscription, hosting if we host it, support, and updates. Ask for the two as separate totals, because a quotation that merges them cannot be compared with one that does not.",
      },
      {
        question: "Is ClinicNP priced per patient or per bill?",
        answer:
          "No. It is licensed by users and counters and by which modules are switched on, so growing your patient volume does not increase your bill. That is deliberate: a licence that charges more as the clinic succeeds is a licence that eventually gets replaced.",
      },
      {
        question: "What costs usually appear after go live?",
        answer:
          "The ones most often missing from a quotation are catalogue and rate cleanup, extra print layouts, additional training sessions for roles nobody counted, data migration beyond the active patient list, and support outside stated hours. We name all of those in the scope up front, and anything outside it is priced before it is done rather than added to a final bill.",
      },
      {
        question: "Is it cheaper to build our own clinic system?",
        answer:
          "Almost never for a clinic. A focused first version of custom software in Nepal typically runs from around NPR 200,000 to NPR 600,000 and multi department systems start around NPR 600,000, and a clinic system with billing, batch-level stock, doctor payouts, sample tracking, fiscal year rollover, and offline operation is not a focused first version. Building makes sense when your workflow has no product-shaped answer, and we will tell you when that is genuinely the case.",
      },
      {
        question: "Do you charge for the quotation or the first consultation?",
        answer:
          "No. The first conversation and the written quotation are free and carry no obligation, and the quotation comes back with a scope and a timeline attached. Even if we are not the right fit you will leave it knowing what the work involves and which category of software you are actually shopping in.",
      },
    ],
  },

  pharmacySoftwarePrice: {
    slug: "pharmacy-software-price-in-nepal",
    path: "/pharmacy-software-price-in-nepal",
    metaTitle: "Pharmacy Software Price in Nepal | What Drives the Cost | ClinicNP",
    metaDescription:
      "What pharmacy software costs in Nepal: why the cheapest package is rarely the cheapest outcome, how counters and item counts move the quotation, one-time versus recurring cost, IRD and VAT billing, and what a month of unrecorded expiry actually costs a medical shop.",
    ogTitle: "What pharmacy software actually costs in Nepal",
    ogDescription:
      "The cheap billing package is not the cheap option if it cannot see expiry. Here is what moves a pharmacy quotation, and what the free version costs on the shelf.",
    keyword: "Pharmacy Software Price in Nepal",
    heroTitle: "What pharmacy software costs in Nepal",
    heroIntro:
      "Pharmacy software in Nepal spans everything from a free billing tool to a full dispensing system, and the price difference is almost entirely about whether the software can see a batch and an expiry date. This page sets out what moves a pharmacy quotation, which costs recur every year, where the cheap options quietly cost more on the shelf, and how VAT and Inland Revenue Department requirements affect the decision.",
    overview: {
      title: "The cheapest package is rarely the cheapest outcome",
      paragraphs: [
        "There is a floor to this market, and it is roughly free. Plenty of shops in Nepal bill on a general retail package, or on a spreadsheet, and the licence cost of that is nearly nothing. What it does not do is hold stock per batch with its own cost and its own expiry, and that single missing capability is what the price difference in this category is actually about. A shop that cannot see expiry until a strip is picked up at the counter is financing the gap out of margin, every month, without a line item for it.",
        "So the honest way to read a pharmacy software quotation is against what the shop currently loses rather than against the next quotation. Count one month of expired returns, damaged stock, and unexplained shortfall. In most shops that has never been counted, because losses were never recorded with a reason — which is exactly why the stock-out register is the first report we look at with a new customer. If the recorded loss over a month is meaningful, the software argument is arithmetic rather than persuasion. If it genuinely is not, a cheaper package may be the right answer and we will say so.",
        "What moves the number, roughly in order: how many billing counters run at once, how many users need their own login, how many items you stock and whether that list already exists in a usable form, how much opening stock has to be entered by batch and expiry, whether you want the clinic half switched on as well, whether you host it yourself or we host it, and how many suppliers need ledgers set up. Opening stock entry is the one that surprises shops most: entering several hundred items across multiple batches with correct costs and expiry dates is the work that makes every later valuation, expiry warning, and profit-by-item figure true, and it is not instant.",
        "One cost sits outside all of that and has to be raised early. Billing software used by a VAT registered business in Nepal must meet Inland Revenue Department requirements and be approved before use. Depending on how your shop is registered, the right route is either building to those specifications and going through the approval process, or running the operational system alongside an already approved billing package so invoices stay compliant. We tell you which applies to you at the scoping stage rather than after the build, and unregistered shops are not affected by it at all.",
      ],
    },
    problems: [
      "The cheapest package wins on licence cost and loses on expiry, which is the larger number and the invisible one.",
      "Losses are never recorded with a reason, so the shop cannot put a figure on what the current arrangement costs it.",
      "Opening stock entry by batch is assumed to be instant, and turns into the longest task in the project.",
      "Licence models priced per bill or per transaction get more expensive exactly as the counter gets busier.",
      "The item list exists only in the owner's head and in supplier invoices, and nobody agreed who would assemble it.",
      "VAT and IRD billing approval is discovered after the software is chosen rather than before.",
      "Support hours do not cover evenings and Saturdays, which is when a medical shop is busiest.",
      "Nothing in the quotation says what happens to years of purchase and sales history if the shop changes vendor.",
    ],
    solutions: [
      "Price the decision against one counted month of expiry, damage, and shortfall, not against the next cheapest licence.",
      "Get the quotation split into one-time implementation and recurring annual cost, as two separate totals.",
      "Agree who assembles the item list and who enters opening stock by batch, and have it scoped in hours rather than assumed.",
      "Check the licence model at twice your current counters and bill volume before signing.",
      "Raise VAT registration and IRD billing approval in the first conversation, so the route is chosen rather than discovered.",
      "Get support hours in writing, including evenings and Saturdays.",
      "Confirm your item, batch, purchase, and sales data is exportable in a usable format.",
      "Start on one counter, and read the first month's stock-out register before extending.",
    ],
    features: [
      "Billing counters running at once",
      "Users needing their own login and PIN",
      "Number of items stocked, and whether the list exists",
      "Opening stock entry by batch, cost, and expiry",
      "Suppliers needing ledgers and terms",
      "Whether the clinic half is switched on too",
      "Hosted by us, or on a machine in the shop",
      "Shelf and rack map of the actual room",
      "Print layouts, including 80 mm roll notes",
      "Training sessions per role",
      "Support hours, including evenings and Saturdays",
      "Annual licence, updates, and backup handling",
    ],
    process: [
      {
        title: "Count one month of loss first",
        text: "Expired returns, damaged stock, and unexplained shortfall over a single month. If that number is meaningful the rest of this conversation is arithmetic, and if it genuinely is not, we will tell you a cheaper package is the right answer.",
      },
      {
        title: "Tell us the four numbers",
        text: "Counters billing at once, users needing a login, roughly how many items you stock, and whether you also consult or dispense against prescriptions. Those four decide most of the quotation.",
      },
      {
        title: "Scope the opening stock honestly",
        text: "We look at what your item list currently is and agree who assembles it and who enters opening stock by batch and expiry, scoped as real work with a real duration. This is the step that decides whether your first valuation report is true.",
      },
      {
        title: "Settle the VAT and IRD route",
        text: "If you are VAT registered we establish which route applies — building to Inland Revenue Department specifications and going through approval, or running ClinicNP for operations alongside an approved billing package — before anything is committed.",
      },
      {
        title: "Go live on one counter, then read the register",
        text: "One counter, real sales, support on the phone. A month later we read the stock-out register together, because that report is the return on the purchase and it is the only honest proof of it.",
      },
    ],
    reasons: [
      "We price against what the shop currently loses, and we are willing to conclude that a cheaper package is right for you.",
      "Opening stock entry is scoped as real work with a real duration rather than assumed away, because it decides whether your reports are true.",
      "Licensing is by counters and users, not per bill, so a busier counter does not cost more to run.",
      "VAT and IRD billing approval is raised in the first conversation, not discovered after the build.",
      "The shop can become a clinic system by switching a module on, with no second product and no second counter.",
      "Support on the phone, in Nepali, from the team that wrote the software.",
    ],
    related: [
      {
        href: "/pharmacy-software-in-nepal",
        label: "pharmacy software in Nepal",
        text: "What you are buying: batch, expiry, shelf map, and the loss register.",
      },
      {
        href: "/clinic-software-price-in-nepal",
        label: "clinic software price in Nepal",
        text: "The clinic side priced on its own, and how the categories compare.",
      },
      {
        href: "/clinic-and-pharmacy-software-in-nepal",
        label: "clinic and pharmacy software in Nepal",
        text: "What switching both halves on changes, and what it changes about the price.",
      },
      {
        href: "/products/clinicnp",
        label: "ClinicNP",
        text: "The product itself, both halves, and how it is deployed.",
      },
      {
        href: "/faq",
        label: "pricing and IRD billing questions",
        text: "Our published ranges, and where VAT billing approval applies.",
      },
      {
        href: "/contact",
        label: "contact Infobytes Nepal",
        text: "Send the four numbers and get a written quotation at no charge.",
      },
    ],
    faqs: [
      {
        question: "How much does pharmacy software cost in Nepal?",
        answer:
          "Pharmacy software in Nepal ranges from free billing tools to full dispensing systems, and the price difference is almost entirely about whether the software holds stock per batch with its own cost and expiry. ClinicNP is quoted by counters, users, and which modules you switch on rather than sold at a list price; for build-versus-buy comparison, a focused first version of custom software in Nepal typically runs from around NPR 200,000 to NPR 600,000.",
      },
      {
        question: "Is free pharmacy billing software good enough?",
        answer:
          "It is good enough to print a bill and not good enough to protect stock. A package that cannot hold batches and expiry dates cannot warn you before stock dies, cannot block an expired sale, and cannot tell you what a month's loss was or what caused it, so the saving on licence cost is paid for out of margin on the shelf. Count one month of expiry, damage, and shortfall and the comparison answers itself.",
      },
      {
        question: "What moves a pharmacy software quotation the most?",
        answer:
          "Roughly in order: how many billing counters run at once, how many users need their own login, how many items you stock and whether that list already exists usably, how much opening stock must be entered by batch and expiry, whether the clinic half is switched on too, hosting, and how many suppliers need ledgers. Opening stock entry is the single most underestimated item, and it is what makes every later valuation and expiry figure true.",
      },
      {
        question: "Does pharmacy software in Nepal need IRD approval?",
        answer:
          "Billing software used by a VAT registered business in Nepal must meet Inland Revenue Department requirements and be approved before use, so it depends on how your shop is registered. For a registered shop the route is either building to those specifications and going through approval, or running the operational system alongside an already approved billing package; unregistered shops are not affected. We tell you which applies at the scoping stage rather than after the build.",
      },
      {
        question: "Is it priced per bill or per transaction?",
        answer:
          "No. ClinicNP is licensed by counters, users, and modules, so a busier counter does not cost more to run. Per-bill and per-transaction models get most expensive exactly when the shop is doing well, which is the wrong time for a licence to scale.",
      },
      {
        question: "How long does it take to get a pharmacy running on it?",
        answer:
          "For a single counter shop, usually one to two weeks, and the duration is set almost entirely by opening stock rather than by software. Assembling the item list and entering several hundred items across multiple batches with correct costs and expiry dates is the real work; once that is in, the counter itself is learned in an afternoon because it is driven from the keyboard.",
      },
      {
        question: "Do I have to pay for the clinic half if I only need the pharmacy?",
        answer:
          "No. The two halves are separate modules and the quotation reflects which ones are switched on, so a medical shop is quoted for the pharmacy half alone. Switching the clinic half on later is a change to the quotation rather than a move to a different product, and nothing is migrated.",
      },
      {
        question: "What happens to my data if we stop using it?",
        answer:
          "Your item list, batches, purchase history, sales, and supplier ledgers stay exportable in a usable format, and the reports themselves export to Excel throughout. We say so in writing before you sign, because a shop whose purchase history is trapped in a vendor's database has no real ability to change vendor.",
      },
    ],
  },
} satisfies Record<string, SeoLandingPage>;
