import type { Metadata } from "next";
import LegalDocument from "@/components/public/legal-document";
import { legalLastUpdated, termsSections } from "@/lib/legal";
import { basicPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return basicPageMetadata({
    route: "/terms",
    title: "Website Terms of Use | Infobytes Nepal",
    description:
      "The terms for using the Infobytes Nepal website: indicative prices, how our content may be quoted, and the law that applies.",
  });
}

export default function TermsPage() {
  return (
    <LegalDocument
      title="Website Terms of Use"
      intro="The short version: use the site in good faith, treat prices here as a guide rather than an offer, and credit us if you quote us."
      updated={legalLastUpdated}
      sections={termsSections}
    />
  );
}
