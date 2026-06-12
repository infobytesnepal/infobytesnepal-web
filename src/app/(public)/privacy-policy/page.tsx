import type { Metadata } from "next";
import { defaultPageContent } from "@/lib/content";
import { getPageSection } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("/privacy-policy", {
    title: "Privacy Policy | InfoBytes Nepal",
    description: "A concise privacy policy for InfoBytes Nepal inquiries.",
  });
}

export default async function PrivacyPolicyPage() {
  const content = await getPageSection("privacy-policy", "content", defaultPageContent.privacy);
  return (
    <section className="min-h-screen bg-white px-5 pb-20 pt-32">
      <div className="brand-radial mx-auto max-w-4xl rounded-[32px] border border-primary-blue/12 bg-white p-7 shadow-[0_24px_70px_rgba(4,18,63,0.08)] md:p-10">
        <h1 className="text-4xl font-semibold text-deep-navy md:text-5xl">{content.title}</h1>
        <p className="mt-6 text-lg leading-8 text-dark-text/76">{content.body}</p>
      </div>
    </section>
  );
}
