import { company, companyAddressLine } from "./company";

/**
 * The privacy policy and website terms, as structured sections.
 *
 * The privacy page used to be a single CMS paragraph saying the site collects
 * "inquiry details only". That stopped being true when the careers form began
 * accepting CVs, and it never mentioned the performance measurement every page
 * runs or where submissions are stored. Every statement below was checked
 * against the code that does the thing it describes:
 *
 *   - the four public forms and their fields: `lib/validation.ts`
 *   - the IP held in memory to rate-limit forms: `lib/rate-limit.ts`
 *   - the only cookie, for CMS staff, 8 hours: `lib/auth.ts`
 *   - anonymous performance timings: the analytics component in `app/layout.tsx`
 *   - where submissions are stored: `TURSO_DATABASE_URL` (a region in India)
 *
 * The published text names no vendors on purpose: the stack is not something
 * the business wants advertised on its website.
 *   - no outbound email, no payment details, no visitor tracking cookies
 *
 * If any of those change, this file has to change with them; a privacy policy
 * that describes a site that no longer exists is worse than a short one.
 *
 * The CMS still owns the page title and its opening summary paragraph; these
 * sections render beneath it. They are written to be read, not to impress a
 * lawyer, and should be reviewed by one before being relied on as such.
 */

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };

export const legalLastUpdated = "13 October 2026";

export const privacySections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      `This website is run by ${company.legalName}, ${companyAddressLine()}. For anything about your information, email ${company.email} or call ${company.phone}.`,
    ],
  },
  {
    heading: "What you send us, and why",
    paragraphs: ["We only receive what you type into one of the four forms on this site, and we use it only to respond to you."],
    list: [
      "Contact form: your name, organisation, contact number, email if you give one, and your message, so we can reply.",
      "Get started form: your name, organisation, contact number, email, message, the product you are interested in, and your consent to be contacted, so we can follow up and prepare a quotation.",
      "Service inquiry form: your name, organisation, contact number, email if you give one, the service you are asking about, and your message.",
      "Job applications: your name, email, phone number, a portfolio link if you give one, your message, your CV file, and your consent to keep the application, so we can assess it.",
    ],
  },
  {
    heading: "What is collected automatically",
    paragraphs: [
      "Each page measures how quickly it loaded. These are anonymous timings; they set no cookies and are not used to identify you.",
      "To stop the forms being flooded with automated submissions, the IP address a form is sent from is held briefly in the server's memory to count repeat attempts. It is not saved with your submission.",
      "Like any website, our hosting provider keeps server logs, which include IP addresses and browser details, for security and to keep the site running.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "The public website does not set cookies. The only cookie we use is a login cookie for our own staff when they sign in to manage the site.",
    ],
  },
  {
    heading: "Where your information is kept",
    paragraphs: [
      "The website runs on a cloud hosting provider, and form submissions, including CVs, are stored in a managed database on servers in India. Only Infobytes Nepal staff with a login can see them.",
    ],
  },
  {
    heading: "Who sees it",
    paragraphs: [
      "Our own team, to respond to you. We do not sell your information, share it for anyone else's marketing, or add you to a mailing list. We would only disclose it if the law required us to.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep inquiries for as long as they are useful for responding to you and for our business records, and job applications while the role or our talent pool is open. You can ask us to delete your information at any time.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      `You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Email ${company.email} and we will reply.`,
    ],
  },
  {
    heading: "Children",
    paragraphs: ["This website is meant for businesses and job applicants, not for children, and we do not knowingly collect information from them."],
  },
  {
    heading: "Changes to this policy",
    paragraphs: ["If what we collect or how we use it changes, we will update this page and the date at the top of it."],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      `These terms cover your use of this website, run by ${company.legalName}, ${companyAddressLine()}. They do not cover a project or a product licence, which are always set out in a separate written agreement.`,
    ],
  },
  {
    heading: "Prices and descriptions on this site",
    paragraphs: [
      "Prices on this site are indicative ranges to help you plan. They are not offers. A price becomes binding only in a written quotation from us that you accept.",
      "Pages about our products describe what they do. The exact scope, modules, price, and support for your organisation are agreed in writing before any work starts.",
    ],
  },
  {
    heading: "Using the site",
    paragraphs: ["Please do not misuse the site. In particular, do not:"],
    list: [
      "try to break, overload, or get unauthorised access to the site or its admin area;",
      "send false information or automated submissions through the forms;",
      "copy the site's content in a way that presents it as your own.",
    ],
  },
  {
    heading: "Our content",
    paragraphs: [
      "The text, images, logos, and the names of our products on this site belong to Infobytes Nepal. You are welcome to quote or link to our pages, including in search engines and AI answers, as long as you credit us and link to the source page.",
      "The content is not offered for training AI models. That preference is also declared in our robots.txt.",
    ],
  },
  {
    heading: "Links to other websites",
    paragraphs: ["Where we link to another website, we do so for your convenience and are not responsible for its content."],
  },
  {
    heading: "No guarantees",
    paragraphs: [
      "We work to keep this site accurate and available, but it is provided as it is, and we cannot promise it will always be error-free or online. To the extent the law allows, we are not liable for loss caused by relying on the general information on this site; anything you rely on should be confirmed with us in writing.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: ["These terms are governed by the laws of Nepal."],
  },
  {
    heading: "Contact and changes",
    paragraphs: [
      `Questions about these terms can go to ${company.email}. If we change them, we will update this page and the date at the top of it.`,
    ],
  },
];

/** Markdown for the agent renderings, from the same sections the pages use. */
export function legalSectionsToMarkdown(sections: LegalSection[]) {
  return sections
    .flatMap((section) => [
      `## ${section.heading}`,
      "",
      ...section.paragraphs.flatMap((paragraph) => [paragraph, ""]),
      ...(section.list ? [...section.list.map((item) => `- ${item}`), ""] : []),
    ])
    .join("\n");
}
