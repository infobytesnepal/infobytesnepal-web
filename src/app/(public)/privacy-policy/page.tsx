import type { Metadata } from "next";
import LegalDocument from "@/components/public/legal-document";
import { defaultPageContent } from "@/lib/content";
import { getPageSection } from "@/lib/data";
import { legalLastUpdated, privacySections } from "@/lib/legal";
import { basicPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return basicPageMetadata({
    route: "/privacy-policy",
    title: "Privacy Policy | Infobytes Nepal",
    description:
      "What Infobytes Nepal collects through this website, why, where it is stored, who sees it, and how to ask for it to be corrected or deleted.",
  });
}

/*
  The title and the opening paragraph stay CMS-editable, as they were. The
  sections under them come from `lib/legal.ts`, because a privacy policy has to
  match what the code actually does and that is where the code is described.
*/
export default async function PrivacyPolicyPage() {
  const content = await getPageSection("privacy-policy", "content", defaultPageContent.privacy);
  return <LegalDocument title={content.title} intro={content.body} updated={legalLastUpdated} sections={privacySections} />;
}
