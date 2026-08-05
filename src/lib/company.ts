/**
 * The company facts that machine-readable surfaces agree on.
 *
 * llms.txt, the public content API, the MCP server, auth.md, and the markdown
 * renderings all state the same things about Infobytes Nepal. Before this
 * module each of them carried its own copy of the address and phone number,
 * which is exactly the kind of detail that goes stale in one place and not the
 * others. Change a fact here and every surface changes with it.
 */
export const company = {
  name: "Infobytes Nepal",
  legalName: "Infobytes Nepal Pvt. Ltd.",
  tagline: "Complexities, now simplified.",
  description:
    "Infobytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, graphic design, IT training, website maintenance, and business automation. We also build and support our own software products.",
  founded: "2023",
  email: "inquiry@infobytesnepal.com",
  careersEmail: "careers@infobytesnepal.com",
  phone: "+977-9843468715",
  address: {
    street: "Kaushaltar",
    locality: "Bhaktapur",
    region: "Bagmati Province",
    country: "NP",
    countryName: "Nepal",
  },
  /** Where the work is delivered, not just where the office is. */
  areaServed: ["Nepal", "Worldwide"],
  languages: ["en", "ne"],
} as const;

export function companyAddressLine() {
  const { street, locality, countryName } = company.address;
  return `${street}, ${locality}, ${countryName}`;
}
