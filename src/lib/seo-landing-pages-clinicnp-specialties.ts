import type { SeoLandingPage } from "./seo-landing-pages";

/**
 * ClinicNP by specialty: the hub for "clinic software in Nepal", then one page
 * per kind of clinic.
 *
 * The first ClinicNP cluster (`seo-landing-pages-clinicnp.ts`) ranks for
 * "clinic management software in Nepal" and its price and pharmacy siblings.
 * It did not rank for "clinic software in Nepal" or for any specialty
 * ("dental clinic software", "derma clinic software"), because nothing on the
 * site addressed a specialty at all. These pages do.
 *
 * Two rules decide whether pages like these help or hurt, and both are about
 * not being a doorway page:
 *
 * 1. Each page has to describe that specialty's day, not the generic one with
 *    a word swapped. A dental clinic's revenue leaks through dental-lab work and
 *    staged treatment; a derma clinic's through its dispensary; a physio
 *    clinic's through patients who stop coming. The content follows that.
 * 2. Each page says what ClinicNP does not do for that specialty. There is no
 *    tooth chart, no session-package wallet, no growth chart, no device
 *    integration, and a clinic that needs one of those should hear it here,
 *    before a demo. Every capability claimed below is one the product document
 *    describes; nothing was extrapolated to fit a specialty.
 *
 * No em dashes in visitor-facing copy in this file, by request: they read as
 * machine-written. Commas, colons, and full stops instead.
 */
export const clinicnpSpecialtySeoLandingPages = {
  clinicSoftware: {
    slug: "clinic-software-in-nepal",
    path: "/clinic-software-in-nepal",
    metaTitle: "Clinic Software in Nepal for Every Specialty | ClinicNP",
    metaDescription:
      "Clinic software built in Nepal for general, dental, derma, aesthetic, physiotherapy, pediatric, and neuromodulation clinics. ClinicNP runs patients, visits, appointments, doctor shares, outside-lab work, pharmacy stock, and one bill, in Bikram Sambat, and keeps billing offline.",
    ogTitle: "Clinic Software in Nepal, by Specialty | ClinicNP",
    ogDescription:
      "What changes between a dental, derma, aesthetic, physio, pediatric, and neuromodulation clinic, and what one clinic system has to handle for all of them.",
    keyword: "Clinic Software in Nepal",
    heroTitle: "Clinic Software in Nepal, for Every Kind of Clinic",
    heroIntro:
      "A dental clinic, a skin clinic, and a physiotherapy centre look nothing alike from the waiting room. At the counter they share the same job: register a patient once, record each visit, bill services and medicines together, pay the doctors their share, and close the day with numbers that agree. ClinicNP by Infobytes Nepal does that job for clinics of every specialty across Nepal, in Bikram Sambat, and it keeps billing when the internet stops.",
    overview: {
      title: "Where specialties differ, and where they do not",
      paragraphs: [
        "Most clinic software is sold as if every clinic were a general OPD with a different sign on the door. The differences are real, and they sit in specific places. A dental clinic sends crowns and dentures to an outside dental lab and has to track what it owes that lab. A derma clinic dispenses most of what it prescribes, so its pharmacy shelf is half its revenue. An aesthetic clinic sells injectables where the batch number matters to the patient's safety. A physiotherapy or neuromodulation centre lives on courses of sessions, so its biggest loss is the patient who stops coming at session six. A pediatric clinic records ages in months and keeps vaccines that expire.",
        "What does not change is the counter. Every one of those clinics needs one patient record per person for life, visits attached to it, appointments that turn into visits, services with their own rates, doctor shares worked out on the bill, one invoice carrying services and medicines together, and a day close that matches the cash drawer. That shared core is what ClinicNP is, and the specialty pages below set out how each kind of clinic uses it.",
        "They also say what it does not do. ClinicNP has no dental tooth chart, no prepaid session-package wallet, no growth chart, and no connection to treatment devices. A clinic whose daily work depends on one of those needs a specialist system for that part, and we would rather you read that here than discover it in a demo.",
        "Under every specialty sit the same local realities: dates in Bikram Sambat on every screen and printed report, a fiscal year from Shrawan to Ashadh that closes properly, billing and registration that carry on through a full day with no internet, and support on the phone in Nepali from the team that wrote the software.",
      ],
    },
    problems: [
      "Specialty software bought for one feature, a tooth chart or a photo gallery, turns out to have no proper billing, pharmacy, or doctor-share side behind it.",
      "General billing software has no patient and no visit, so the clinical half of a specialty clinic ends up in a register beside it.",
      "Visiting specialists are paid from a month-end calculation nobody fully trusts.",
      "Work sent to an outside lab, whether blood, a biopsy, or a dental crown, disappears from view once it is billed.",
      "Patients on a course of sessions stop coming and nobody notices until the month is over.",
      "Stock with an expiry date, from vaccines to fillers to anaesthetic cartridges, is checked by reading labels.",
      "The internet drops and the counter goes back to a duplicate book.",
    ],
    solutions: [
      "One patient record for life, with duplicate detection, allergies shown in red, and age recorded in years, months, or days.",
      "Your own service catalogue, with codes, groups, rates, a doctor rule, an outside-lab rule, and a follow-up rule on each service.",
      "Doctor shares on four bases, calculated per billed line and totalled into a payout sheet.",
      "An outside-lab worklist that follows work from collection to handover, with what the partner lab charges and what you owe it.",
      "A new-versus-returning report that shows who has not come back.",
      "Pharmacy stock by batch and expiry, oldest first, with expired stock blocked from sale.",
      "Billing and registration that keep working through a full day offline.",
    ],
    features: [
      "Patient records with a lifetime number",
      "Visits with optional vitals and free-text findings",
      "Files such as X-rays, reports, and photos attached to a visit",
      "Appointments that become a visit in one keystroke",
      "Doctor shares on four bases with payout sheets",
      "Outside-lab worklist and partner statements",
      "One invoice for services and medicines",
      "Pharmacy stock by batch and expiry",
      "Cash, QR, and credit with later settlement",
      "Bikram Sambat and proper fiscal-year closing",
      "Offline billing and registration",
      "Fifteen registers and reports, exportable to Excel",
    ],
    process: [
      {
        title: "Tell us your specialty and your day",
        text: "Which services you sell, which go to an outside lab, whether you dispense, how your doctors are paid, and how many people use the counter. That decides how ClinicNP is set up for you.",
      },
      {
        title: "Load your catalogue and your doctors",
        text: "Services go in with their codes, groups, rates, and rules. Doctors go in with qualification as printed, NMC number, and the share basis that pays them.",
      },
      {
        title: "Bring in patients and opening stock",
        text: "Your active patient list is imported so the counter is useful on day one, and opening stock goes in by batch and expiry if you dispense.",
      },
      {
        title: "Train the counter and the doctors separately",
        text: "The person billing and the doctor checking their own list use different screens, so each is trained on the screens they will actually use.",
      },
      {
        title: "Go live with us on the phone",
        text: "We watch a real week, including a busy morning and an evening day close, and adjust the catalogue, print layouts, and reports to match.",
      },
    ],
    reasons: [
      "One system for the shared core of every specialty, rather than a different package for each.",
      "Plain about what it does not do for your specialty, before you buy.",
      "Bikram Sambat and fiscal years throughout, with closed years that still print unchanged.",
      "The counter keeps billing through a day with no internet.",
      "Built and supported in Nepal, on the phone, in Nepali.",
    ],
    related: [
      { href: "/products/clinicnp", label: "ClinicNP", text: "The product itself: every module, the four roles, and how it is deployed." },
      { href: "/dental-clinic-software-in-nepal", label: "dental clinic software in Nepal", text: "Staged treatment, dental-lab work, and visiting specialists." },
      { href: "/derma-clinic-software-in-nepal", label: "derma clinic software in Nepal", text: "Procedures, biopsies, and a dispensary that is half the revenue." },
      { href: "/aesthetic-clinic-software-in-nepal", label: "aesthetic clinic software in Nepal", text: "Treatments, injectables traced by batch, and retail skincare." },
      { href: "/physiotherapy-clinic-software-in-nepal", label: "physiotherapy clinic software in Nepal", text: "Courses of sessions and the patients who stop coming." },
      { href: "/pediatric-clinic-software-in-nepal", label: "pediatric clinic software in Nepal", text: "Ages in months, guardians, and vaccines by batch and expiry." },
      { href: "/neuromodulation-clinic-software-in-nepal", label: "neuromodulation clinic software in Nepal", text: "Session courses for rTMS, tDCS, and related therapies." },
      { href: "/clinic-management-software-in-nepal", label: "clinic management software in Nepal", text: "The general clinic and polyclinic day in depth." },
    ],
    faqs: [
      {
        question: "What is the best clinic software in Nepal?",
        answer:
          "The best clinic software in Nepal is the one that handles your specialty's actual day and the counter around it: one patient record, visits, appointments, doctor shares, outside-lab work, pharmacy stock if you dispense, one invoice, Bikram Sambat dates, and billing that survives a day offline. ClinicNP by Infobytes Nepal is built for that shared core across specialties, and each specialty page here says where it fits and where it does not.",
      },
      {
        question: "Is there clinic software made in Nepal?",
        answer:
          "Yes. ClinicNP is built and supported in Nepal by Infobytes Nepal Pvt. Ltd., with Bikram Sambat on every screen and register, fiscal years from Shrawan to Ashadh, and support on the phone in Nepali from the people who wrote it.",
      },
      {
        question: "Can one clinic software work for different specialties?",
        answer:
          "Yes, for the shared core, which is most of the work: patients, visits, appointments, services and rates, doctor shares, outside-lab tracking, pharmacy stock, billing, and reports. The catalogue, doctors, and rules are set up for your specialty. Where a specialty needs a dedicated clinical tool, such as a dental tooth chart, ClinicNP does not provide it, and we say so.",
      },
      {
        question: "Which specialties does ClinicNP suit?",
        answer:
          "General and polyclinics, dental clinics, dermatology and skin clinics, aesthetic clinics, physiotherapy centres, pediatric clinics, and neuromodulation clinics all use the same core. It is the wrong fit for hospitals that admit patients, and for laboratories that run their own bench and release their own reports, which is our other product, Nidanyo.",
      },
      {
        question: "What does clinic software cost in Nepal?",
        answer:
          "ClinicNP is quoted by the size of the clinic and the modules you switch on, and licensed by users and counters rather than per patient, so a busier clinic does not pay more. For comparison, commissioning custom software in Nepal typically starts around NPR 200,000 for a focused first version. Tell us your specialty, daily patient count, and counters, and you get a written quotation at no charge.",
      },
      {
        question: "Does it work without internet?",
        answer:
          "Yes. Billing and patient registration carry on through a full business day with no connection and reconcile by themselves when it returns, and patient numbers never collide even when two devices register offline at the same time.",
      },
    ],
  },

  dentalClinic: {
    slug: "dental-clinic-software-in-nepal",
    path: "/dental-clinic-software-in-nepal",
    metaTitle: "Dental Clinic Software in Nepal | ClinicNP by Infobytes Nepal",
    metaDescription:
      "Dental clinic software built in Nepal. ClinicNP bills procedures from scaling to crowns, follows dental-lab work to the patient and accounts for what the lab is owed, pays visiting specialists their share per procedure, attaches X-rays to the visit, and tracks staged payments on credit.",
    ogTitle: "Dental Clinic Software in Nepal | ClinicNP",
    ogDescription:
      "Procedures, staged treatment, dental-lab jobs, visiting orthodontists and endodontists, X-rays on the visit, and one bill. Built in Nepal, in Bikram Sambat.",
    keyword: "Dental Clinic Software in Nepal",
    heroTitle: "Dental Clinic Software in Nepal",
    heroIntro:
      "A dental clinic loses money in three quiet places: lab work that was billed but never reconciled with the dental lab, specialist shares worked out from memory at month end, and treatment spread over several sittings where nobody is sure what has been paid. ClinicNP by Infobytes Nepal runs the counter of a dental clinic around all three, in Bikram Sambat, with the patient's X-rays kept on the visit they belong to.",
    overview: {
      title: "A dental clinic's day, seen from the counter",
      paragraphs: [
        "Dentistry is billed by procedure, and a dental catalogue is long: consultation, scaling, fillings by surface, root canal treatment by canal, extraction, crowns and bridges by material, dentures, orthodontic stages, whitening. In ClinicNP each of those is a service with its own short code, group, and rate, so the person at the counter finds it by typing a few letters, and the service revenue report later shows exactly how many root canals the clinic did this month and what they earned.",
        "Treatment rarely finishes in one sitting. A root canal takes three or four visits, orthodontics takes months. Each sitting is a visit on the same patient record with its own number inside the fiscal year, its findings and advice written as free text the way dentists already write them, and the patient's X-rays or OPG attached to that visit as files. A patient who pays in stages is billed on credit and settles later from the bill register, so the balance on a long treatment is a figure on a screen rather than a note in a diary.",
        "The dental lab is where money most often goes missing. A crown, bridge, or denture is billed to the patient and made by an outside lab that charges the clinic. ClinicNP marks such services as going to an outside laboratory with their partner cost, follows each job on the outside-lab worklist from sent to back to handed over, and keeps a statement per lab: what you billed patients, what the lab charges, your margin, what you have paid the lab, and what you still owe it. The worklist was built for laboratory samples, and a dental-lab job moves through it the same way.",
        "Many clinics in Nepal run on visiting specialists: an orthodontist on Thursdays, an endodontist for root canals, an oral surgeon for extractions. Each doctor is paid on their own basis, and one of ClinicNP's four bases is a percentage of listed services, which is how most dental specialist arrangements work. The share is calculated on each billed line as it is raised, and totals into a payout sheet per doctor for the month.",
      ],
    },
    problems: [
      "Crowns, bridges, and dentures are billed to patients but the dental lab's invoices are reconciled by hand, if at all.",
      "Nobody can say at a glance which lab jobs are still out and which patients are waiting for their fitting.",
      "Visiting specialists are paid from a month-end tally of procedures that the clinic and the dentist count differently.",
      "Staged treatment and orthodontic payments are tracked in a diary, so a patient's real balance is a guess.",
      "X-rays and OPGs live on a separate computer or a phone, not on the visit they belong to.",
      "Dental consumables and anaesthetic cartridges with expiry dates are checked by reading the box.",
      "The internet drops during a busy evening and the counter writes bills on paper.",
    ],
    solutions: [
      "Every procedure is a service with a code, group, and rate, and the service revenue report counts and totals each one.",
      "Lab services carry their partner cost, so each dental lab has a statement of billed, cost, margin, paid, and owed.",
      "The outside-lab worklist shows every job that is out, back, or waiting to be handed over, with how long it has been waiting.",
      "Specialists are paid a percentage of the services they perform, calculated per line and totalled into a payout sheet.",
      "Staged payments go on credit and are settled later from the bill register, with the balance always visible.",
      "X-rays and photos are attached to the visit as files, served only to logged-in staff.",
      "Consumables are stocked by batch and expiry, used stock is recorded as used in the clinic, and expired stock cannot be issued.",
    ],
    features: [
      "Procedure catalogue with codes, groups, and rates",
      "Multi-sitting treatment as visits on one record",
      "X-rays and OPGs attached to the visit",
      "Dental-lab jobs tracked from sent to handed over",
      "Per-lab statements: billed, cost, margin, paid, owed",
      "Specialist shares as a percentage of listed services",
      "Staged payments on credit with later settlement",
      "Consumable stock by batch and expiry",
      "Appointments with alerts to the dentist's phone",
      "Service revenue by procedure and by group",
      "Bikram Sambat dates and fiscal-year closing",
      "Offline billing and registration",
    ],
    process: [
      {
        title: "Write the procedure list once",
        text: "We load your procedures with codes, groups, and rates, mark the ones made by an outside lab with what the lab charges, and set which ones need a doctor on the line.",
      },
      {
        title: "Set up each dentist's share",
        text: "Resident dentists and visiting specialists are loaded with qualification, NMC number, and their own share basis, so payouts are calculated from the first bill.",
      },
      {
        title: "Add your dental labs",
        text: "Each lab is recorded with its contact and settlement terms and gets a ledger of its own, so lab statements are right from day one.",
      },
      {
        title: "Bring in patients and consumables",
        text: "Active patients are imported, and consumables go in by batch and expiry if you track them.",
      },
      {
        title: "Go live and check the first lab statement",
        text: "After the first few weeks we read a dental-lab statement and a payout sheet with you, because those two reports are where a dental clinic sees the difference.",
      },
    ],
    reasons: [
      "Built around where a dental clinic's money actually leaks: lab work, specialist shares, and staged payments.",
      "Lab jobs are followed to the patient's chair, not just billed.",
      "X-rays stay on the visit they belong to.",
      "Bikram Sambat throughout, with billing that survives a day offline.",
      "Clear about what it does not do: there is no tooth chart, and we tell you before you buy.",
    ],
    related: [
      { href: "/best-dental-clinic-software-in-nepal", label: "choosing dental clinic software in Nepal", text: "Dental-specific systems against clinic systems, and the questions to ask." },
      { href: "/clinic-software-in-nepal", label: "clinic software in Nepal", text: "How ClinicNP works across every kind of clinic." },
      { href: "/products/clinicnp", label: "ClinicNP", text: "The product itself, both modules, and how it is deployed." },
      { href: "/clinic-software-price-in-nepal", label: "clinic software price in Nepal", text: "What moves the quotation, and what appears after go-live." },
      { href: "/clinic-and-pharmacy-software-in-nepal", label: "clinic and pharmacy software", text: "If your clinic also runs a dispensing counter." },
    ],
    faqs: [
      {
        question: "What is dental clinic software?",
        answer:
          "Dental clinic software runs the non-clinical half of a dental practice: patient records, appointments, billing by procedure, staged payments, dental-lab jobs and their costs, specialist shares, consumable stock, and reports. ClinicNP by Infobytes Nepal covers all of that on one counter, in Bikram Sambat.",
      },
      {
        question: "Does ClinicNP have a dental tooth chart?",
        answer:
          "No. ClinicNP has no odontogram, no per-tooth charting, and no treatment-plan builder. Findings are written as free text on each visit and X-rays are attached as files. If per-tooth charting is central to how your dentists work, you need a dental-specific system for that part, and ClinicNP is a better fit for the counter, lab, and billing side.",
      },
      {
        question: "Can it track crowns and dentures sent to a dental lab?",
        answer:
          "Yes. Services made by an outside lab carry the lab's cost, each job is followed on the outside-lab worklist from sent to back to handed over, and each lab has a statement showing what you billed, what it charges, your margin, what you have paid, and what you owe.",
      },
      {
        question: "How are visiting dentists and specialists paid?",
        answer:
          "Each dentist has their own share basis: nothing, a percentage of the consultation, a fixed amount per consultation, or a percentage of listed services. The share is calculated on every billed line and totals into a monthly payout sheet, so the clinic and the specialist see the same figure.",
      },
      {
        question: "Can patients pay for treatment in instalments?",
        answer:
          "Yes. Each sitting can be billed on credit and settled later from the bill register, so the outstanding balance on a long treatment such as orthodontics is always visible.",
      },
      {
        question: "Where are X-rays kept?",
        answer:
          "On the visit they belong to, attached as files. Files are served only to logged-in staff through an authenticated route, never through a public link.",
      },
      {
        question: "How much does dental clinic software cost in Nepal?",
        answer:
          "ClinicNP is quoted by clinic size and modules and licensed by users and counters, not per patient. Tell us your chair count, how many dentists take a share, and whether you dispense, and you get a written quotation at no charge.",
      },
    ],
  },

  bestDentalClinic: {
    slug: "best-dental-clinic-software-in-nepal",
    path: "/best-dental-clinic-software-in-nepal",
    metaTitle: "Best Dental Clinic Software in Nepal: How to Choose | ClinicNP",
    metaDescription:
      "How to choose dental clinic software in Nepal: dental-specific charting systems against clinic systems, the demo requests that separate them, why dental-lab accounting and specialist shares matter more than features lists, and when ClinicNP is the wrong choice.",
    ogTitle: "How to choose the best dental clinic software in Nepal",
    ogDescription:
      "There is no single best dental software. There is a best one for how your dentists chart, how your lab work flows, and how your specialists are paid.",
    keyword: "Best Dental Clinic Software in Nepal",
    heroTitle: "Choosing the best dental clinic software in Nepal",
    heroIntro:
      "There is no single best dental clinic software in Nepal, and a vendor who answers that question with their own name is selling, not advising. There is a best one for how your dentists record treatment, how much of your work goes through an outside dental lab, and how your specialists are paid. This is how we would choose if we were buying, including the clinics our own product is wrong for.",
    overview: {
      title: "Two kinds of dental software, and the question that splits them",
      paragraphs: [
        "Dental software falls into two families. Dental-specific systems are built around the chart: a picture of the mouth, findings per tooth, and a treatment plan per tooth that the dentist works through. Clinic systems are built around the counter: patients, visits, procedures billed, lab work, doctor shares, stock, and the day's money. Some products try to be both and are usually stronger at one.",
        "The question that splits them is simple. Do your dentists chart per tooth on a screen today, or want to? If yes, a dental-specific system is the core purchase and its billing side needs scrutiny. If your dentists write findings by hand or as notes, which is how most clinics in Nepal work, the chart is a feature you will not use and the counter is where the clinic's money is actually decided.",
        "ClinicNP is a clinic system. It has no tooth chart. What it does well is the side most dental clinics here struggle with: dental-lab jobs followed to the patient and reconciled against each lab's charges, specialists paid a percentage of the procedures they performed, calculated on the bill, and staged treatment payments on credit with a balance that is always visible. Judge it on that, and judge a dental-specific system on whether its billing can do the same.",
        "Whatever you shortlist, test it on your own day rather than a prepared demo. Ask for one bill with a consultation, an X-ray, and a crown sent to your dental lab, with the visiting dentist's share shown on it. Ask for that lab's statement afterwards. Ask to take a partial payment on a root canal and settle the rest a week later. Ask them to disconnect the internet and keep billing. Those four requests separate a shortlist faster than any feature comparison.",
      ],
    },
    problems: [
      "A system is chosen for its tooth chart and turns out to have weak billing, no lab accounting, and no specialist shares.",
      "A general billing package is chosen because it is cheap, and lab work and staged payments live in a diary beside it.",
      "Demos run on prepared data, so nobody sees a partial payment, a lab job, or a cancelled bill.",
      "Specialist shares are promised as a feature and turn out to be a report someone fills in by hand.",
      "Dates are in AD only, so the fiscal year and printed registers do not match how the clinic files.",
      "Nobody asks what happens to years of patient records if you change vendor.",
    ],
    solutions: [
      "Decide first whether per-tooth charting is a daily need. That decides which family you are shopping in.",
      "Bring your own procedures, one dental lab, and one visiting specialist to every demo.",
      "Ask for a bill with a lab-made crown and the specialist's share shown on it, then that lab's statement.",
      "Ask for a partial payment on a staged treatment, settled later.",
      "Ask for a report in Bikram Sambat and a reprint from a closed fiscal year.",
      "Ask them to disconnect the internet and keep billing.",
      "Confirm in writing that your patient and billing data can be exported.",
    ],
    features: [
      "The right family: chart-first or counter-first",
      "Dental-lab jobs and per-lab statements",
      "Specialist shares calculated on the bill",
      "Staged payments with a visible balance",
      "X-rays attached to the visit",
      "Bikram Sambat in registers and reports",
      "Billing that survives a day offline",
      "Data export confirmed before signing",
    ],
    process: [
      {
        title: "Write down how your clinic works",
        text: "Chairs, dentists and specialists, how each is paid, which labs you use and how often, and whether anyone charts per tooth today.",
      },
      {
        title: "Pick the family before the vendor",
        text: "Chart-first if per-tooth charting is daily work. Counter-first if your problem is lab money, shares, and staged payments.",
      },
      {
        title: "Run the four requests on every shortlist",
        text: "The lab-made crown with a specialist share, the lab statement, the staged payment, and the disconnected internet.",
      },
      {
        title: "Price year two before signing year one",
        text: "Get one-time setup and recurring cost as separate totals, and the figure for adding a chair or a dentist.",
      },
      {
        title: "Pilot for a few weeks",
        text: "Run real patients through the counter alongside what you do now, and read the first lab statement and payout sheet before committing.",
      },
    ],
    reasons: [
      "We tell you which family of software you need before we tell you about ours.",
      "We say plainly that ClinicNP has no tooth chart.",
      "The four demo requests above are ones we invite, because they test what ClinicNP was built for.",
      "Built and supported in Nepal, on the phone, in Nepali.",
      "Your data stays exportable.",
    ],
    related: [
      { href: "/dental-clinic-software-in-nepal", label: "dental clinic software in Nepal", text: "What ClinicNP does for a dental clinic, in detail." },
      { href: "/best-clinic-management-software-in-nepal", label: "choosing clinic software in Nepal", text: "The same decision for clinics of every kind." },
      { href: "/clinic-software-price-in-nepal", label: "clinic software price in Nepal", text: "What moves a quotation in this category." },
      { href: "/products/clinicnp", label: "ClinicNP", text: "The product itself, so you can judge it against the above." },
      { href: "/clinic-software-in-nepal", label: "clinic software by specialty", text: "How the same core serves different clinics." },
    ],
    faqs: [
      {
        question: "What is the best dental clinic software in Nepal?",
        answer:
          "The best dental clinic software in Nepal depends on one question: whether your dentists chart per tooth on a screen. If they do, a dental-specific charting system is the core purchase. If your clinic's real problems are dental-lab costs, specialist shares, and staged payments, a clinic system such as ClinicNP by Infobytes Nepal handles those better.",
      },
      {
        question: "Do I need a tooth chart in my dental software?",
        answer:
          "Only if your dentists will use it daily. Most dental clinics in Nepal record findings by hand or as notes, and for them a chart is a feature that goes unused while billing, lab accounting, and shares decide whether the clinic makes money.",
      },
      {
        question: "What should I ask for in a dental software demo?",
        answer:
          "Four things on your own data: a bill with an X-ray and a lab-made crown showing the visiting dentist's share, the dental lab's statement afterwards, a partial payment on a root canal settled a week later, and billing with the internet disconnected.",
      },
      {
        question: "When is ClinicNP the wrong choice for a dental clinic?",
        answer:
          "When per-tooth charting and treatment planning on screen are central to how your dentists work, because ClinicNP has neither. It is also the wrong choice for a dental hospital that admits patients. We would rather say that before a quotation than after an implementation.",
      },
      {
        question: "Can we use a charting system and ClinicNP together?",
        answer:
          "Yes, some clinics do: the charting system for clinical records and ClinicNP for the counter, lab accounting, shares, and stock. The trade-off is registering patients in two places, which is worth discussing honestly before choosing.",
      },
    ],
  },

  dermaClinic: {
    slug: "derma-clinic-software-in-nepal",
    path: "/derma-clinic-software-in-nepal",
    metaTitle: "Derma Clinic Software in Nepal | Dermatology & Skin Clinics | ClinicNP",
    metaDescription:
      "Software for dermatology and skin clinics in Nepal. ClinicNP bills consultations and procedures, runs the dispensary by batch and expiry with one invoice for both, tracks biopsies and fungal tests sent to outside labs, keeps clinical photos on the visit, and pays visiting dermatologists their share.",
    ogTitle: "Derma Clinic Software in Nepal | ClinicNP",
    ogDescription:
      "Consultations, procedures, a dispensary on the same bill, biopsies tracked to the report, and clinical photos on the visit. Built in Nepal.",
    keyword: "Derma Clinic Software in Nepal",
    heroTitle: "Derma Clinic Software in Nepal",
    heroIntro:
      "A dermatology clinic is half a pharmacy. Most of what the dermatologist prescribes, from topical creams to oral courses, is dispensed at the clinic's own counter, so the shelf is as much a part of the clinic's revenue as the consultation. ClinicNP by Infobytes Nepal runs both on one counter and one bill, tracks the biopsies and fungal tests sent out to a lab, and keeps each patient's clinical photos on the visit they were taken at.",
    overview: {
      title: "The consultation, the procedure, and the shelf",
      paragraphs: [
        "A typical derma visit produces three kinds of charge: the consultation, sometimes a procedure such as a chemical peel, cryotherapy, cautery, or a PRP session, and the medicines the patient leaves with. In ClinicNP all three go on one invoice with one number and one payment. Consultations and procedures are services from your own catalogue with their own rates; medicines come off the shelf by batch, with the unit picked by box, strip, tube, or tablet.",
        "The dispensary is where a skin clinic gains or loses margin. Stock is held per batch with its own cost and expiry, the oldest expiry is sold first, and expired stock cannot be sold at all, with no override. Near-expiry stock is flagged at thirty, sixty, and ninety days so it can be moved before it becomes a write-off, and anything that leaves the shelf without being sold is recorded with a reason, including samples given away and stock used in the clinic. Profit by item shows which products actually carry the clinic.",
        "Skin biopsies, KOH mounts, fungal cultures, and histopathology usually go to an outside laboratory. Each such service carries what the lab charges, and the outside-lab worklist follows the sample from collection to the report coming back and being handed over, with each stage time-stamped, so the question of whether a biopsy result is back has an answer on a screen. Each lab has a statement of what you billed, what it charged, and what you owe it.",
        "Clinical photographs are taken at almost every derma visit. In ClinicNP they are attached to that visit as files, next to the findings and advice, and served only to logged-in staff. ClinicNP does not offer a side-by-side before-and-after comparison view; the photos are kept in order on the patient's visit history.",
      ],
    },
    problems: [
      "Consultation and dispensing are billed separately, so the day reconciles twice.",
      "The dispensary loses money to expiry nobody saw coming.",
      "Samples given to patients and stock used in procedures leave the shelf without a record.",
      "Biopsies and fungal tests sent out are tracked in a notebook, and patients call to ask if results are back.",
      "Clinical photos live on a staff member's phone.",
      "Visiting dermatologists are paid from a month-end count.",
      "Nobody knows which products and procedures actually make the clinic money.",
    ],
    solutions: [
      "One invoice for the consultation, the procedure, and the medicines.",
      "Stock by batch and expiry, oldest first, expired blocked, with warnings at thirty, sixty, and ninety days.",
      "Stock out with a reason, including samples given and stock used in the clinic.",
      "Biopsies and lab tests followed from collection to handover, with the lab's statement alongside.",
      "Clinical photos attached to the visit, private to staff.",
      "Doctor shares calculated per billed line, on the basis you agree with each dermatologist.",
      "Service revenue and profit by item, so procedures and products can be compared.",
    ],
    features: [
      "Consultations and procedures as services with rates",
      "Dispensary by batch, expiry, and unit",
      "One invoice for services and medicines",
      "Expiry warnings and blocked expired sales",
      "Stock out by reason, including samples",
      "Biopsies and fungal tests tracked to the report",
      "Clinical photos attached to the visit",
      "Dermatologist shares and payout sheets",
      "Profit by item and service revenue reports",
      "Bikram Sambat and offline billing",
    ],
    process: [
      {
        title: "Load procedures and the shelf",
        text: "Procedures go in as services with rates. Products go in with their units, rates, and opening stock by batch and expiry.",
      },
      {
        title: "Set up your outside labs",
        text: "Biopsy, KOH, and culture services are linked to the labs you use, with what each lab charges.",
      },
      {
        title: "Agree each dermatologist's share",
        text: "Resident and visiting dermatologists are loaded with their share basis, so payouts come from the bill.",
      },
      {
        title: "Train the counter on one bill",
        text: "The counter learns to raise one invoice for the visit, the procedure, and the prescription, from the keyboard.",
      },
      {
        title: "Read the first month's shelf",
        text: "After a month we look at profit by item and the stock-out register with you, because that is where a derma clinic's margin is decided.",
      },
    ],
    reasons: [
      "Clinic and dispensary on one counter, which is how a derma clinic actually works.",
      "Expired stock cannot be sold, and every loss has a reason.",
      "Biopsy results stop being a phone call and become a worklist.",
      "Bikram Sambat throughout, with billing that survives a day offline.",
      "Clear that there is no before-and-after comparison view, before you buy.",
    ],
    related: [
      { href: "/aesthetic-clinic-software-in-nepal", label: "aesthetic clinic software in Nepal", text: "If your clinic is mainly cosmetic treatments and injectables." },
      { href: "/pharmacy-software-in-nepal", label: "pharmacy software in Nepal", text: "The dispensing side in depth." },
      { href: "/clinic-and-pharmacy-software-in-nepal", label: "clinic and pharmacy on one counter", text: "Why one invoice matters more than it sounds." },
      { href: "/clinic-software-in-nepal", label: "clinic software by specialty", text: "How ClinicNP works across different clinics." },
      { href: "/products/clinicnp", label: "ClinicNP", text: "The product itself and how it is deployed." },
    ],
    faqs: [
      {
        question: "What is derma clinic software?",
        answer:
          "Derma clinic software runs the counter of a dermatology or skin clinic: patient records, appointments, consultation and procedure billing, the clinic's own dispensary by batch and expiry, biopsy and lab-test tracking, clinical photos, doctor shares, and reports. ClinicNP by Infobytes Nepal covers all of it on one counter and one bill.",
      },
      {
        question: "Can the consultation and the medicines go on one bill?",
        answer:
          "Yes. The consultation, any procedure, and the medicines dispensed go on a single invoice with one number and one payment, and the day close splits the collection into services and medicines for you.",
      },
      {
        question: "Does it track biopsies sent to an outside lab?",
        answer:
          "Yes. Each lab service carries what the lab charges, the sample is followed through time-stamped stages from collection to the report being handed over, and each lab has a statement of billed, cost, margin, paid, and owed.",
      },
      {
        question: "Where are clinical photos kept?",
        answer:
          "On the visit they were taken at, attached as files and served only to logged-in staff. ClinicNP does not provide a side-by-side before-and-after comparison view.",
      },
      {
        question: "Can it stop expired creams and medicines being sold?",
        answer:
          "Yes. Expired stock is blocked from sale with no override, the oldest expiry is sold first, and near-expiry stock is flagged at thirty, sixty, and ninety days.",
      },
      {
        question: "How much does derma clinic software cost in Nepal?",
        answer:
          "ClinicNP is quoted by clinic size and modules, with the pharmacy half included when you dispense, and licensed by users and counters rather than per patient. Tell us your patient volume and how much you dispense, and you get a written quotation at no charge.",
      },
    ],
  },

  aestheticClinic: {
    slug: "aesthetic-clinic-software-in-nepal",
    path: "/aesthetic-clinic-software-in-nepal",
    metaTitle: "Aesthetic Clinic Software in Nepal | Cosmetic & Skin Clinics | ClinicNP",
    metaDescription:
      "Software for aesthetic and cosmetic clinics in Nepal. ClinicNP bills treatments, records the batch of every injectable on the bill line, sells retail skincare by batch and expiry, pays practitioners their share, and keeps treatment photos and consent forms on the visit.",
    ogTitle: "Aesthetic Clinic Software in Nepal | ClinicNP",
    ogDescription:
      "Treatments, injectables traced by batch to the patient, retail skincare, practitioner shares, and photos on the visit. Built in Nepal.",
    keyword: "Aesthetic Clinic Software in Nepal",
    heroTitle: "Aesthetic Clinic Software in Nepal",
    heroIntro:
      "In an aesthetic clinic the most important number on a bill is often not the price. It is the batch of the filler or toxin that went into the patient, which is what you need on the day a manufacturer recalls a lot. ClinicNP by Infobytes Nepal records the batch on every product line it bills, runs the retail shelf by batch and expiry, pays practitioners their share, and keeps treatment photos and signed consent forms on the visit.",
    overview: {
      title: "Treatments, injectables, and the retail shelf",
      paragraphs: [
        "An aesthetic clinic sells three things: treatments such as laser hair removal, chemical peels, microneedling, facials, and injectable procedures; the injectable products themselves; and retail skincare that patients take home. ClinicNP puts all three on one invoice. Treatments are services from your own catalogue with their own rates, and products are sold from stock with the batch and expiry on the line.",
        "That batch on the line is what makes injectables traceable. Every vial or syringe of filler or toxin is stock held per batch, and when it is billed the batch is recorded against that patient's bill. Product used in a procedure without being billed separately is recorded as stock out with the reason used in the clinic, so the shelf still adds up. Expired product cannot be sold at all, and near-expiry product is flagged at thirty, sixty, and ninety days.",
        "Aesthetic work is usually a course: six sessions of laser, three peels, a follow-up touch-up. In ClinicNP each session is a visit on the patient's record and is billed as it happens. ClinicNP does not offer prepaid packages or a session wallet that counts down; if your clinic sells packages paid up front, that is a real gap to weigh. What it does give you is the new-versus-returning report, which shows patients who have not come back, the ones who dropped out of a course.",
        "Practitioners and visiting doctors are usually paid a share of the treatments they perform, which is one of ClinicNP's four share bases, calculated on each billed line and totalled into a monthly payout sheet. Before-and-after photos and signed consent forms are attached to the visit as files, private to logged-in staff. There is no built-in electronic signature or photo comparison view.",
      ],
    },
    problems: [
      "Nobody can say which batch of filler or toxin went into which patient.",
      "Product used in treatments leaves the shelf with no record, so stock never matches.",
      "Expensive injectables expire on the shelf unnoticed.",
      "Retail skincare and treatments are billed in different places.",
      "Practitioners' shares are worked out at month end from a list.",
      "Patients drop out of a treatment course and nobody follows up.",
      "Before-and-after photos and consent forms live on a phone or in a folder.",
    ],
    solutions: [
      "The batch of every product sold is recorded on the patient's bill line.",
      "Product used in procedures is recorded as stock out with a reason, so the shelf reconciles.",
      "Expired stock is blocked from sale and near-expiry stock is flagged early.",
      "Treatments, injectables, and retail skincare go on one invoice.",
      "Practitioner shares are calculated per billed line and totalled into a payout sheet.",
      "The new-versus-returning report shows who has not come back.",
      "Photos and signed consent forms are attached to the visit, private to staff.",
    ],
    features: [
      "Treatment catalogue with rates",
      "Injectables and skincare by batch and expiry",
      "Batch recorded on every billed product line",
      "Stock used in procedures recorded by reason",
      "One invoice for treatments and products",
      "Practitioner shares and payout sheets",
      "Treatment photos and consent forms on the visit",
      "New-versus-returning report for course drop-outs",
      "Profit by item and service revenue",
      "Bikram Sambat and offline billing",
    ],
    process: [
      {
        title: "Load treatments and products",
        text: "Treatments go in as services with rates. Injectables and skincare go in with their units, rates, and opening stock by batch and expiry.",
      },
      {
        title: "Agree how practitioners are paid",
        text: "Each practitioner is loaded with their share basis, so payouts are calculated from the first treatment billed.",
      },
      {
        title: "Decide how courses are billed",
        text: "Since ClinicNP bills sessions as they happen rather than as prepaid packages, we agree how your courses will be priced and billed before go-live.",
      },
      {
        title: "Train the counter",
        text: "The counter learns to bill a treatment with its products in one invoice, and to record product used in a procedure.",
      },
      {
        title: "Review the first month",
        text: "We look at profit by item, the stock-out register, and returning patients with you after the first month.",
      },
    ],
    reasons: [
      "Injectables traceable by batch to the patient's bill.",
      "The shelf reconciles, because product used in treatments is recorded.",
      "One invoice for treatments, injectables, and retail.",
      "Bikram Sambat throughout, with billing that survives a day offline.",
      "Clear that there are no prepaid packages or session wallets, before you buy.",
    ],
    related: [
      { href: "/derma-clinic-software-in-nepal", label: "derma clinic software in Nepal", text: "For medical dermatology with biopsies and a busy dispensary." },
      { href: "/pharmacy-software-in-nepal", label: "pharmacy software in Nepal", text: "Batch, expiry, and the stock-out register in depth." },
      { href: "/clinic-software-in-nepal", label: "clinic software by specialty", text: "How ClinicNP works across different clinics." },
      { href: "/clinic-software-price-in-nepal", label: "clinic software price in Nepal", text: "What moves the quotation." },
      { href: "/products/clinicnp", label: "ClinicNP", text: "The product itself and how it is deployed." },
    ],
    faqs: [
      {
        question: "What is aesthetic clinic software?",
        answer:
          "Aesthetic clinic software runs the counter of a cosmetic or aesthetic clinic: patient records, appointments, treatment billing, injectable and skincare stock by batch and expiry, practitioner shares, treatment photos, and reports. ClinicNP by Infobytes Nepal does this on one counter with one invoice.",
      },
      {
        question: "Can it trace which filler or toxin batch went into a patient?",
        answer:
          "Yes. Products are stocked per batch, and the batch is recorded on the patient's bill line when the product is billed, so a recalled lot can be traced to the patients who received it.",
      },
      {
        question: "Does ClinicNP support prepaid treatment packages?",
        answer:
          "No. ClinicNP bills each session as it happens and has no prepaid package or session wallet. If selling packages up front is central to your clinic, weigh that before choosing. The new-versus-returning report does show patients who stopped coming mid-course.",
      },
      {
        question: "Where are before-and-after photos and consent forms kept?",
        answer:
          "On the visit, attached as files and served only to logged-in staff. There is no built-in photo comparison view or electronic signature; signed consent forms are scanned or photographed and attached.",
      },
      {
        question: "How are practitioners paid?",
        answer:
          "On the share basis agreed with each one, most often a percentage of the treatments they perform. The share is calculated on each billed line and totals into a monthly payout sheet.",
      },
      {
        question: "How much does aesthetic clinic software cost in Nepal?",
        answer:
          "ClinicNP is quoted by clinic size and modules and licensed by users and counters, not per patient. Tell us your treatment list, practitioner count, and how much retail you sell, and you get a written quotation at no charge.",
      },
    ],
  },

  neuromodulationClinic: {
    slug: "neuromodulation-clinic-software-in-nepal",
    path: "/neuromodulation-clinic-software-in-nepal",
    metaTitle: "Neuromodulation Clinic Software in Nepal | rTMS & tDCS Clinics | ClinicNP",
    metaDescription:
      "Clinic software for neuromodulation and brain stimulation clinics in Nepal offering rTMS, tDCS, and related therapies. ClinicNP schedules session courses, records every session as a visit, shows patients who drop out of a course, dispenses medication by batch, and pays doctors their share.",
    ogTitle: "Neuromodulation Clinic Software in Nepal | ClinicNP",
    ogDescription:
      "Session courses, a daily appointment book, drop-outs caught early, medication dispensing, and doctor shares, for rTMS and tDCS clinics in Nepal.",
    keyword: "Neuromodulation Clinic Software in Nepal",
    heroTitle: "Neuromodulation Clinic Software in Nepal",
    heroIntro:
      "A neuromodulation clinic is run by the appointment book. A course of rTMS or tDCS is twenty or more sessions, often daily, and the treatment only works if the patient keeps coming. ClinicNP by Infobytes Nepal runs that book, records every session as a visit on one patient record, shows you which patients have stopped coming, and handles the consultations, medication, and doctor shares around it.",
    overview: {
      title: "A clinic that lives on courses of sessions",
      paragraphs: [
        "Clinics offering repetitive transcranial magnetic stimulation, transcranial direct current stimulation, and related therapies work differently from an outpatient clinic. A patient is assessed, starts a course of sessions over several weeks, and is reviewed along the way. The front desk's job is mostly scheduling: a fixed daily slot for each patient, a chair or a device that cannot be double-booked, and a patient who has to be chased the moment they miss.",
        "In ClinicNP each session is an appointment that becomes a visit in one keystroke when the patient arrives, so the patient's record shows the whole course as a list of visits with their dates in Bikram Sambat. Session notes, the protocol used, and anything the clinician wants recorded go in the visit's findings as free text, and assessment forms or scale scores can be attached to the visit as files. ClinicNP does not count down a course automatically, does not score rating scales, and does not connect to the stimulation device; those stay with the clinician and the device.",
        "The loss a course-based clinic fears most is the patient who stops coming at session eight. ClinicNP's appointment book shows who was booked and which of them has arrived, and the new-versus-returning report shows patients who have not come back, so a drop-out is visible within the day rather than at month end.",
        "Around the sessions sit the same things as any clinic: psychiatrist or neurologist consultations billed as services, medication dispensed by batch and expiry if the clinic runs a counter, doctor shares calculated on every billed line, and a day close that matches the cash drawer.",
      ],
    },
    problems: [
      "Daily session slots are kept in a diary, so double bookings and missed sessions happen.",
      "A patient's course is spread across bills with no single view of how many sessions were done.",
      "Patients drop out mid-course and nobody notices for weeks.",
      "Session notes and assessment forms are kept in paper files.",
      "Consultations, sessions, and medication are billed separately.",
      "Doctors are paid from a month-end count of sessions.",
    ],
    solutions: [
      "An appointment book where each booked session becomes a visit in one keystroke.",
      "Every session recorded as a visit on one patient record, so the course reads as a dated list.",
      "The appointment book and the new-versus-returning report show who did not come.",
      "Session notes as free text and assessment forms attached to the visit.",
      "Consultations, sessions, and medication on one invoice.",
      "Doctor shares calculated per billed line and totalled into a payout sheet.",
    ],
    features: [
      "Appointment book with daily slots",
      "Each session as a visit on one record",
      "Session notes and attached assessment forms",
      "Drop-out visibility through returning-patient reports",
      "Consultations and sessions as services",
      "Medication dispensing by batch and expiry",
      "Doctor shares and payout sheets",
      "Credit and later settlement for course payments",
      "Bikram Sambat dates and fiscal-year closing",
      "Offline billing and registration",
    ],
    process: [
      {
        title: "Set up sessions and consultations",
        text: "Each therapy, assessment, and consultation goes in as a service with its rate and its doctor rule.",
      },
      {
        title: "Agree how courses are billed",
        text: "Sessions can be paid as they happen or billed on credit and settled later. We agree which suits your clinic before go-live.",
      },
      {
        title: "Load clinicians and their shares",
        text: "Psychiatrists, neurologists, and therapists go in with their share basis, so payouts come from the bill.",
      },
      {
        title: "Bring in current patients",
        text: "Patients already on a course are imported so their history starts in the system.",
      },
      {
        title: "Watch the first two weeks of bookings",
        text: "We check the appointment book and the returning-patient report with you, because that is where a session clinic gains or loses.",
      },
    ],
    reasons: [
      "Built around the appointment book, which is what a session clinic runs on.",
      "Drop-outs show up within the day.",
      "Every session on one patient record, in Bikram Sambat.",
      "Billing that survives a day offline.",
      "Clear that there is no device integration or course counter, before you buy.",
    ],
    related: [
      { href: "/physiotherapy-clinic-software-in-nepal", label: "physiotherapy clinic software in Nepal", text: "Another clinic that lives on courses of sessions." },
      { href: "/clinic-software-in-nepal", label: "clinic software by specialty", text: "How ClinicNP works across different clinics." },
      { href: "/clinic-management-software-in-nepal", label: "clinic management software in Nepal", text: "The counter in depth." },
      { href: "/products/clinicnp", label: "ClinicNP", text: "The product itself and how it is deployed." },
    ],
    faqs: [
      {
        question: "What is neuromodulation clinic software?",
        answer:
          "Neuromodulation clinic software runs the scheduling and counter of a clinic offering therapies such as rTMS and tDCS: daily session bookings, a record of every session, consultations, medication, billing, doctor shares, and reports. ClinicNP by Infobytes Nepal handles these around the treatment itself.",
      },
      {
        question: "Does ClinicNP connect to rTMS or tDCS devices?",
        answer:
          "No. ClinicNP does not connect to stimulation devices or record device parameters automatically. The protocol and session notes are recorded on the visit by the clinician, and any device report can be attached as a file.",
      },
      {
        question: "Can it show how many sessions a patient has had?",
        answer:
          "Yes, as a dated list of visits on the patient's record. It does not count down a course automatically against a planned total.",
      },
      {
        question: "How do we catch patients who stop coming?",
        answer:
          "The appointment book shows who was booked and which of them has arrived, and the new-versus-returning report shows patients who have not come back, so a missed session is visible the same day.",
      },
      {
        question: "Can patients pay for a course later?",
        answer:
          "Yes. Sessions can be billed on credit and settled later from the bill register, with the outstanding balance always visible.",
      },
    ],
  },

  physiotherapyClinic: {
    slug: "physiotherapy-clinic-software-in-nepal",
    path: "/physiotherapy-clinic-software-in-nepal",
    metaTitle: "Physiotherapy Clinic Software in Nepal | ClinicNP by Infobytes Nepal",
    metaDescription:
      "Software for physiotherapy and rehabilitation clinics in Nepal. ClinicNP books sessions, records each as a visit, bills modalities and sessions, pays therapists their share from the bill, and shows patients who stop coming before their course is done.",
    ogTitle: "Physiotherapy Clinic Software in Nepal | ClinicNP",
    ogDescription:
      "Session bookings, therapist pay from the bill, modality billing, and the patients who stop coming, for physiotherapy clinics in Nepal.",
    keyword: "Physiotherapy Clinic Software in Nepal",
    heroTitle: "Physiotherapy Clinic Software in Nepal",
    heroIntro:
      "A physiotherapy clinic is paid by the session and lost by the patient who stops coming. ClinicNP by Infobytes Nepal books sessions, records each one as a visit on the patient's record, bills the modalities used, pays each therapist the way you agreed, and shows you who has not come back while there is still time to call them.",
    overview: {
      title: "Sessions, therapists, and the patients who drift away",
      paragraphs: [
        "A physio patient comes for an assessment and then for a course of sessions: two or three a week for several weeks, each with exercise therapy and often a modality such as TENS, interferential therapy, ultrasound, or traction. In ClinicNP the assessment and each modality are services from your own catalogue with their own rates, and each session is a visit on the patient's record, with the therapist's notes and advice written as free text.",
        "Therapists are paid in different ways from one clinic to the next. ClinicNP pays each one on one of four bases: nothing, for salaried staff; a percentage of the consultation; a fixed amount per consultation; or a percentage of listed services, such as the sessions and modalities they deliver. Which basis fits a per-session arrangement depends on how your sessions are set up, and we agree that during setup. The share is calculated on each billed line as it happens and totals into a payout sheet per therapist for the month.",
        "The patient who feels a little better and stops at session five is the clinic's quiet loss and, often, a worse outcome for the patient. The appointment book shows who was booked and which of them has arrived, and the new-versus-returning report shows patients who have not come back, so the front desk can call while the course can still be finished.",
        "Many clinics let regular patients pay at the end of the week or the month. ClinicNP raises those bills on credit and settles them later from the bill register, so every patient's balance is a figure rather than a memory. ClinicNP does not offer prepaid session packages or an exercise-prescription library; those are worth weighing if your clinic depends on them.",
      ],
    },
    problems: [
      "Sessions are booked in a diary and therapists double up or sit idle.",
      "Patients stop coming mid-course and nobody calls them.",
      "Therapists are paid from a month-end count that never quite matches.",
      "Weekly and monthly settlements are tracked on paper.",
      "Nobody knows which modalities are used most or earn the most.",
      "The internet drops and the counter stops.",
    ],
    solutions: [
      "An appointment book where a booked session becomes a visit in one keystroke.",
      "The appointment book and the returning-patient report show who did not come.",
      "Therapist pay on one of four share bases, calculated on the bill.",
      "Credit billing settled later, with each patient's balance visible.",
      "Service revenue by modality and by group.",
      "Billing and registration that work through a day offline.",
    ],
    features: [
      "Session booking with arrivals marked",
      "Each session as a visit with notes",
      "Assessments and modalities as services",
      "Therapist pay on four share bases",
      "Payout sheets per therapist",
      "Credit with weekly or monthly settlement",
      "Returning-patient report for drop-outs",
      "Service revenue by modality",
      "Bikram Sambat dates and fiscal-year closing",
      "Offline billing and registration",
    ],
    process: [
      {
        title: "List your services and modalities",
        text: "Assessments, sessions, and modalities go in with their rates, grouped so the revenue report reads the way you think about the clinic.",
      },
      {
        title: "Agree how therapists are paid",
        text: "Each therapist is set up on the share basis that matches your arrangement, or none for salaried staff, so payouts are calculated from the first bill.",
      },
      {
        title: "Bring in current patients",
        text: "Patients mid-course are imported so their visits continue on one record.",
      },
      {
        title: "Train the front desk on the book",
        text: "The front desk learns the appointment book, marking arrivals, and how to settle credit at the end of the week.",
      },
      {
        title: "Review drop-outs after a month",
        text: "We read the returning-patient report with you, because recovering patients who stopped is the quickest gain for a physio clinic.",
      },
    ],
    reasons: [
      "Built around sessions and the patients who stop coming.",
      "Therapists paid from the bill, not a month-end tally.",
      "Weekly and monthly settlement without a paper ledger.",
      "Bikram Sambat throughout, and billing that survives a day offline.",
      "Clear that there are no prepaid packages or exercise library, before you buy.",
    ],
    related: [
      { href: "/neuromodulation-clinic-software-in-nepal", label: "neuromodulation clinic software in Nepal", text: "Another clinic run on courses of sessions." },
      { href: "/clinic-software-in-nepal", label: "clinic software by specialty", text: "How ClinicNP works across different clinics." },
      { href: "/clinic-software-price-in-nepal", label: "clinic software price in Nepal", text: "What moves the quotation." },
      { href: "/products/clinicnp", label: "ClinicNP", text: "The product itself and how it is deployed." },
    ],
    faqs: [
      {
        question: "What is physiotherapy clinic software?",
        answer:
          "Physiotherapy clinic software runs the booking and counter of a physio or rehabilitation clinic: session scheduling, a record of each session, assessment and modality billing, therapist pay, credit settlement, and reports. ClinicNP by Infobytes Nepal does this in Bikram Sambat, with billing that works offline.",
      },
      {
        question: "How are therapists paid?",
        answer:
          "On one of ClinicNP's four share bases, set per therapist: nothing, a percentage of the consultation, a fixed amount per consultation, or a percentage of listed services such as sessions and modalities. The share is calculated on each billed line and totals into a monthly payout sheet; which basis fits a per-session arrangement is agreed during setup.",
      },
      {
        question: "Does ClinicNP support prepaid session packages?",
        answer:
          "No. Sessions are billed as they happen, or on credit settled later. If prepaid packages are central to your clinic, weigh that before choosing.",
      },
      {
        question: "How does it help with patients who stop coming?",
        answer:
          "The appointment book shows who was booked and which of them has arrived, and the new-versus-returning report shows patients who have not come back, so the front desk can follow up while the course can still be finished.",
      },
      {
        question: "How much does physiotherapy clinic software cost in Nepal?",
        answer:
          "ClinicNP is quoted by clinic size and modules and licensed by users and counters, not per session. Tell us your therapist count and daily sessions, and you get a written quotation at no charge.",
      },
    ],
  },

  pediatricClinic: {
    slug: "pediatric-clinic-software-in-nepal",
    path: "/pediatric-clinic-software-in-nepal",
    metaTitle: "Pediatric Clinic Software in Nepal | Child Health Clinics | ClinicNP",
    metaDescription:
      "Software for pediatric and child health clinics in Nepal. ClinicNP records ages in months and days that stay correct over time, registers guardians, keeps vaccines by batch and expiry with expired stock blocked, records the batch on every dose billed, and shows allergies in red.",
    ogTitle: "Pediatric Clinic Software in Nepal | ClinicNP",
    ogDescription:
      "Ages in months, guardians on the record, vaccines by batch and expiry, the batch on every dose, and allergies in red. Built in Nepal.",
    keyword: "Pediatric Clinic Software in Nepal",
    heroTitle: "Pediatric Clinic Software in Nepal",
    heroIntro:
      "In a pediatric clinic, small details on the record are the important ones: a baby's age in months rather than years, the guardian who brought them, an allergy that must not be missed, and the batch of the vaccine that was given. ClinicNP by Infobytes Nepal records all of these properly, keeps vaccines by batch and expiry, and runs the clinic's counter in Bikram Sambat.",
    overview: {
      title: "A clinic where the patient is a child",
      paragraphs: [
        "A child's age is recorded the way a clinic actually records it: in years, months, or days, stamped with the date it was taken. That stamp is what keeps it correct. A baby recorded at four months is shown at the right age when they come back half a year later, instead of being frozen at four months forever.",
        "Registration carries the guardian alongside the child, with blood group, a standing note, and who referred them when that matters. A known allergy is shown as a red strip across the patient card, so it is the first thing anyone sees, and visits record weight and other vitals when the doctor wants them.",
        "Vaccines are stock with an expiry date and a batch number, and both matter. ClinicNP holds them per batch, sells the oldest expiry first, flags stock near expiry at thirty, sixty, and ninety days, and blocks expired stock from being given at all, with no override. Every dose billed carries its batch on the bill line, so the clinic can say which lot went to which child.",
        "ClinicNP does not include growth charts or an immunisation schedule that reminds parents of the next dose. Weight is recorded per visit and dose history is visible on the child's bills and visits; if automated schedule reminders are essential to your clinic, weigh that before choosing.",
      ],
    },
    problems: [
      "Infant ages recorded once in years or months are wrong by the next visit.",
      "The guardian who brought the child is not on the record.",
      "An allergy is written in a paper file and missed at the counter.",
      "Vaccines are checked for expiry by reading the vial.",
      "Nobody can say which vaccine batch was given to which child.",
      "Consultation and vaccine charges are billed separately.",
    ],
    solutions: [
      "Ages in years, months, or days, stamped with the date recorded, so they stay correct.",
      "Guardian, blood group, notes, and referral on the registration.",
      "Allergies shown as a red strip across the patient card.",
      "Vaccines by batch and expiry, oldest first, expired blocked, near-expiry flagged.",
      "The batch recorded on every dose billed.",
      "Consultation and vaccines on one invoice.",
    ],
    features: [
      "Ages in years, months, or days",
      "Guardian and referral on registration",
      "Allergies shown in red",
      "Weight and vitals per visit",
      "Vaccines by batch and expiry",
      "Batch recorded on every dose billed",
      "Expired vaccines blocked from use",
      "One invoice for consultation and vaccines",
      "Doctor shares and payout sheets",
      "Bikram Sambat and offline billing",
    ],
    process: [
      {
        title: "Load consultations and vaccines",
        text: "Consultations go in as services. Vaccines and medicines go in with their units, rates, and opening stock by batch and expiry.",
      },
      {
        title: "Bring in your patients",
        text: "Active patients and their guardians are imported, with ages carried over correctly.",
      },
      {
        title: "Set up doctors and shares",
        text: "Pediatricians are loaded with qualification, NMC number, and share basis.",
      },
      {
        title: "Train the counter",
        text: "The counter learns quick registration with a guardian, and billing a consultation and vaccine together.",
      },
      {
        title: "Check the vaccine shelf after a month",
        text: "We read the near-expiry report and the stock-out register with you, because vaccine wastage is where a child clinic's stock money goes.",
      },
    ],
    reasons: [
      "Ages stay correct for the youngest patients.",
      "Vaccines traceable by batch to the child.",
      "Expired vaccines cannot be given.",
      "Bikram Sambat throughout, and billing that survives a day offline.",
      "Clear that there are no growth charts or schedule reminders, before you buy.",
    ],
    related: [
      { href: "/clinic-software-in-nepal", label: "clinic software by specialty", text: "How ClinicNP works across different clinics." },
      { href: "/pharmacy-software-in-nepal", label: "pharmacy software in Nepal", text: "Batch and expiry control in depth." },
      { href: "/clinic-management-software-in-nepal", label: "clinic management software in Nepal", text: "The clinic counter in depth." },
      { href: "/products/clinicnp", label: "ClinicNP", text: "The product itself and how it is deployed." },
    ],
    faqs: [
      {
        question: "What is pediatric clinic software?",
        answer:
          "Pediatric clinic software runs the counter of a child health clinic: patient records with correct infant ages and guardians, appointments, consultations, vaccine stock by batch and expiry, billing, and reports. ClinicNP by Infobytes Nepal handles these in Bikram Sambat.",
      },
      {
        question: "Does it record infant ages correctly?",
        answer:
          "Yes. Age is recorded in years, months, or days and stamped with the date it was taken, so a baby's age is shown correctly on later visits rather than staying fixed.",
      },
      {
        question: "Can it track which vaccine batch a child received?",
        answer:
          "Yes. Vaccines are stocked per batch, and the batch is recorded on the bill line for every dose given, so a batch can be traced to the children who received it.",
      },
      {
        question: "Does ClinicNP have growth charts or vaccination reminders?",
        answer:
          "No. Weight is recorded per visit, and dose history is visible on the child's visits and bills, but there are no growth charts and no automated immunisation-schedule reminders.",
      },
      {
        question: "Can expired vaccines be blocked?",
        answer:
          "Yes. Expired stock is blocked from being billed with no override, the oldest expiry is used first, and stock near expiry is flagged at thirty, sixty, and ninety days.",
      },
    ],
  },
} satisfies Record<string, SeoLandingPage>;
