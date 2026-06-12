import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GetStartedButton from "@/components/public/get-started-button";
import { defaultPageContent } from "@/lib/content";
import { getPageSection } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("/about", {
    title: "About | InfoBytes Nepal",
    description: "Learn about InfoBytes Nepal and its focus on simplifying practical workflows.",
  });
}

export default async function AboutPage() {
  const [section1, section2, started, goals] = await Promise.all([
    getPageSection("about", "section1", defaultPageContent.aboutSection1),
    getPageSection("about", "section2", defaultPageContent.aboutSection2),
    getPageSection("about", "started", defaultPageContent.aboutStarted),
    getPageSection("about", "goals", defaultPageContent.aboutGoals),
  ]);
  return (
    <div className="bg-white px-5 pb-20 pt-32">
      <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase text-primary-blue">About</p>
          <h1 className="mt-4 text-4xl font-semibold text-deep-navy md:text-6xl">{section1.title}</h1>
          <p className="mt-6 text-lg leading-8 text-dark-text/76">{section1.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={section1.buttonUrl} className="focus-ring rounded-full bg-deep-navy px-6 py-3 font-semibold text-white">
              {section1.buttonLabel}
            </Link>
            <GetStartedButton />
          </div>
        </div>
        <Image src={section1.imageUrl} alt={section1.title} width={900} height={620} className="rounded-[32px] border border-primary-blue/12 object-cover shadow-[0_24px_70px_rgba(4,18,63,0.1)]" />
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <Image src={section2.imageUrl} alt={section2.title} width={900} height={620} className="order-2 rounded-[32px] border border-primary-blue/12 object-cover shadow-[0_24px_70px_rgba(4,18,63,0.1)] lg:order-1" />
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-semibold text-deep-navy md:text-5xl">{section2.title}</h2>
          <p className="mt-6 text-lg leading-8 text-dark-text/76">{section2.text}</p>
          <div className="mt-8">
            {section2.buttonUrl === "#get-started" ? (
              <GetStartedButton label={section2.buttonLabel} />
            ) : (
              <Link href={section2.buttonUrl} className="focus-ring rounded-full bg-deep-navy px-6 py-3 font-semibold text-white">
                {section2.buttonLabel}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="brand-radial mx-auto mt-20 max-w-5xl rounded-[32px] border border-primary-blue/12 bg-soft-blue p-7 md:p-10">
        <h2 className="text-3xl font-semibold text-deep-navy">{started.title}</h2>
        <p className="mt-5 text-lg leading-8 text-dark-text/76">{started.body}</p>
      </section>

      <section className="mx-auto mt-20 max-w-7xl">
        <h2 className="text-3xl font-semibold text-deep-navy md:text-5xl">Our Goals, Vision and Mission</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Goal", goals.goal],
            ["Vision", goals.vision],
            ["Mission", goals.mission],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[24px] border border-primary-blue/12 bg-white p-6 shadow-[0_18px_55px_rgba(4,18,63,0.07)]">
              <h3 className="text-xl font-semibold text-primary-blue">{title}</h3>
              <p className="mt-4 leading-7 text-dark-text/72">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
