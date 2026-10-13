import type { LegalSection } from "@/lib/legal";

/** Plain, readable layout for the privacy policy and the website terms. */
export default function LegalDocument({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro?: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="page-x bg-white pb-20 pt-32">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-4xl text-deep-navy md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-dark-text/60">Last updated {updated}</p>
        {intro && <p className="mt-6 text-lg leading-8 text-dark-text/80">{intro}</p>}
        {sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl text-deep-navy">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-8 text-dark-text/80">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-dark-text/80">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>
    </section>
  );
}
