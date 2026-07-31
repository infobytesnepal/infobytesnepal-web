import Link from "next/link";
import type { Metadata } from "next";
import CmsImage from "@/components/public/cms-image";
import GetStartedButton from "@/components/public/get-started-button";
import TeamSection from "@/components/public/team-section";
import { defaultPageContent } from "@/lib/content";
import { getPageSection } from "@/lib/data";
import { getCanonicalSiteUrl } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = getCanonicalSiteUrl();
  const title = "About | Infobytes Nepal";
  const description =
    "Learn about Infobytes Nepal, a trusted IT company in Nepal building custom software, business automation, service management, sales management, and student talent platforms.";

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/about` },
    robots: "index,follow",
    keywords: [
      "Shiwam Paudel",
      "Rajesh Pandey",
      "Shiwam Paudel Infobytes Nepal",
      "Rajesh Pandey Infobytes Nepal",
      "Founder Infobytes Nepal",
      "Co-Founder CEO Infobytes Nepal",
      "Infobytes Nepal founders",
      "Infobytes Nepal Bhaktapur",
    ],
    openGraph: {
      title,
      description,
      url: `${siteUrl}/about`,
      siteName: "Infobytes Nepal",
      type: "profile",
      images: [
        { url: "/assets/about/shiwam-paudel.png", alt: "Shiwam Paudel, Co-Founder and CEO of Infobytes Nepal" },
        { url: "/assets/about/rajesh-pandey.png", alt: "Rajesh Pandey, Founder of Infobytes Nepal" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/about/shiwam-paudel.png"],
    },
  };
}

export default async function AboutPage() {
  const [section1, section2, started, goals] = await Promise.all([
    getPageSection("about", "section1", defaultPageContent.aboutSection1),
    getPageSection("about", "section2", defaultPageContent.aboutSection2),
    getPageSection("about", "started", defaultPageContent.aboutStarted),
    getPageSection("about", "goals", defaultPageContent.aboutGoals),
  ]);
  const siteUrl = getCanonicalSiteUrl();
  const techLogos = [
    section2.techLogo1,
    section2.techLogo2,
    section2.techLogo3,
    section2.techLogo4,
    section2.techLogo5,
    section2.techLogo6,
    section2.techLogo7,
    section2.techLogo8,
    section2.techLogo9,
    section2.techLogo10,
    section2.techLogo11,
    section2.techLogo12,
    section2.techLogo13,
    section2.techLogo14,
    section2.techLogo15,
  ].filter(Boolean);
  const founderSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/about#shiwam-paudel`,
      name: "Shiwam Paudel",
      givenName: "Shiwam",
      familyName: "Paudel",
      jobTitle: "Co-Founder and CEO",
      image: `${siteUrl}/assets/about/shiwam-paudel.png`,
      url: `${siteUrl}/about#shiwam-paudel`,
      worksFor: {
        "@type": "Organization",
        name: "Infobytes Nepal",
        url: siteUrl,
      },
      founderOf: {
        "@type": "Organization",
        name: "Infobytes Nepal",
        url: siteUrl,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kaushaltar, Bhaktapur",
        addressCountry: "NP",
      },
      knowsAbout: ["digital products", "workflow software", "field service management", "lead tracking", "student talent platforms"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/about#rajesh-pandey`,
      name: "Rajesh Pandey",
      givenName: "Rajesh",
      familyName: "Pandey",
      jobTitle: "Founder",
      image: `${siteUrl}/assets/about/rajesh-pandey.png`,
      url: `${siteUrl}/about#rajesh-pandey`,
      worksFor: {
        "@type": "Organization",
        name: "Infobytes Nepal",
        url: siteUrl,
      },
      founderOf: {
        "@type": "Organization",
        name: "Infobytes Nepal",
        url: siteUrl,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kaushaltar, Bhaktapur",
        addressCountry: "NP",
      },
      knowsAbout: ["technology", "software products", "business workflow systems", "Pravyo", "Infobytes Nepal"],
    },
  ];
  return (
    <div className="page-x bg-white pb-20 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }} />
      <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase text-primary-blue">About</p>
          <h1 className="mt-4 text-4xl font-semibold text-deep-navy md:text-6xl">{section1.title}</h1>
          <p className="mt-6 text-lg leading-8 text-dark-text/76">{section1.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={section1.buttonUrl} className="focus-ring site-button rounded-full px-6 py-3 font-semibold">
              {section1.buttonLabel}
            </Link>
            <GetStartedButton />
          </div>
        </div>
        <CmsImage src={section1.imageUrl} alt={section1.title} width={900} height={620} className="rounded-[32px] border border-primary-blue/12 object-cover shadow-[0_24px_70px_rgba(4,18,63,0.1)]" />
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="order-2 grid grid-cols-3 gap-3 rounded-[32px] border border-primary-blue/12 bg-soft-blue/45 p-4 shadow-[0_24px_70px_rgba(4,18,63,0.08)] sm:grid-cols-5 md:gap-4 md:p-6 lg:order-1">
          {techLogos.map((logo, index) => (
            <div key={`${logo}-${index}`} className="flex aspect-square items-center justify-center rounded-2xl border border-primary-blue/10 bg-white/88 p-4 shadow-[0_10px_28px_rgba(4,18,63,0.05)]">
              <CmsImage
                src={logo}
                alt={`Infobytes Nepal technology logo ${index + 1}`}
                width={64}
                height={64}
                className="h-10 w-10 object-contain md:h-12 md:w-12"
              />
            </div>
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-semibold text-deep-navy md:text-5xl">{section2.title}</h2>
          <p className="mt-6 text-lg leading-8 text-dark-text/76">{section2.text}</p>
          <div className="mt-8">
            {section2.buttonUrl === "#get-started" ? (
              <GetStartedButton label={section2.buttonLabel} />
            ) : (
              <Link href={section2.buttonUrl} className="focus-ring site-button rounded-full px-6 py-3 font-semibold">
                {section2.buttonLabel}
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-8 md:mt-28 md:gap-16">
        <article id="rajesh-pandey" className="relative overflow-hidden rounded-[24px] border-2 border-primary-green bg-gradient-to-r from-[#dfeaff] via-white to-soft-green px-6 py-6 text-primary-blue md:ml-4 md:min-h-[300px] md:overflow-visible md:px-12 md:py-9 lg:ml-10 lg:pl-[45%]">
          <CmsImage
            src="/assets/about/rajesh-pandey.png"
            alt="Rajesh Pandey"
            width={520}
            height={520}
            className="relative left-1/2 h-64 w-auto max-w-[92%] -translate-x-1/2 object-contain md:absolute md:bottom-0 md:left-8 md:h-[390px] md:translate-x-0 lg:left-5"
            priority
          />
          <div className="relative z-10 mt-2 md:mt-0">
            <h2 className="text-2xl font-semibold md:text-4xl">Where it began</h2>
            <p className="mt-4 max-w-xl leading-7">
              Every great idea starts with a thought. From a simple tea-time talks but with a vision to solve real-world problems with few lines of code, Pravyo is a beginning, we could do a lot more with Technology.
            </p>
            <p className="mt-7 font-semibold italic">Rajesh Pandey</p>
            <p className="italic">Founder, Infobytes Nepal</p>
          </div>
        </article>


{/*  
        <article id="shiwam-paudel" className="relative overflow-hidden rounded-[24px] border-2 border-primary-green bg-gradient-to-r from-[#dfeaff] via-white to-soft-green px-6 py-6 text-primary-blue md:mr-4 md:min-h-[300px] md:overflow-visible md:px-12 md:py-9 lg:mr-10 lg:pr-[45%]">
          <CmsImage
            src="/assets/about/shiwam-paudel.png"
            alt="Shiwam Paudel"
            width={520}
            height={520}
            className="relative left-1/2 h-64 w-auto max-w-[92%] -translate-x-1/2 object-contain md:absolute md:bottom-0 md:left-auto md:right-8 md:h-[390px] md:translate-x-0 lg:right-5"
          />
          <div className="relative z-10 mt-2 md:mt-0">
            <h2 className="text-2xl font-semibold md:text-4xl">{started.title}</h2>
            <p className="mt-4 max-w-xl leading-7">{started.body}</p>
            <p className="mt-7 font-semibold italic">Shiwam Paudel</p>
            <p className="italic">Co-Founder & CEO, Infobytes Nepal</p>
          </div>
        </article>
 */}

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

      <TeamSection />
    </div>
  );
}
