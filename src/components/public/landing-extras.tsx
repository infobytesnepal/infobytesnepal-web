import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getLandingGuides } from "@/lib/landing-guides";
import { webDesignLocations, webServicesHubPath } from "@/lib/seo-landing-pages-web";

/**
 * Sections the landing template adds from code rather than from the page copy.
 *
 * Both render on pages whose copy was saved in the CMS, because they do not
 * come from the stored document. That is deliberate: a CMS save stores the
 * whole page, so anything that has to keep up with the rest of the site (new
 * posts, new city pages) cannot live in it.
 */

/** "Further reading": the blog posts listed for this page in `landing-guides.ts`. */
export async function LandingGuides({ path, exclude }: { path: string; exclude: readonly string[] }) {
  const posts = await getLandingGuides(path, exclude);
  if (!posts.length) return null;

  return (
    <section className="page-x bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-primary-blue">Further reading</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-deep-navy md:text-4xl">Guides from our blog</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="focus-ring group flex h-full flex-col rounded-2xl border border-primary-blue/10 bg-white p-5 transition hover:border-primary-green/40 hover:shadow-[0_14px_36px_rgba(4,18,63,0.07)]"
            >
              <span className="text-xs font-semibold uppercase text-dark-text/56">
                {post.category} · {post.readTime} min read
              </span>
              <span className="mt-3 font-semibold leading-6 text-deep-navy group-hover:text-primary-blue">{post.title}</span>
              <span className="mt-2 line-clamp-3 text-sm leading-6 text-dark-text/68">{post.excerpt}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary-blue">
                Read the guide
                <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * "Website design across Nepal": the nationwide service page and every city
 * page, on every page of the web cluster.
 *
 * The cluster's sibling block shows six rotating members out of fourteen, so
 * without this a city page could go unlinked from most of its own cluster.
 */
export function WebDesignAcrossNepal({ path }: { path: string }) {
  const locations = webDesignLocations.filter((location) => location.href !== path);

  return (
    <section className="page-x bg-soft-blue/35 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-primary-blue">Areas we serve</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-deep-navy md:text-4xl">Website design across Nepal</h2>
        <p className="mt-4 max-w-3xl leading-8 text-dark-text/72">
          Our office is in Kaushaltar, Bhaktapur, and we meet clients in person across the Kathmandu valley. Projects
          elsewhere in Nepal run over calls and a private review link, and on larger projects someone from the team
          travels to you for the kickoff or for staff training.
          {path !== webServicesHubPath && (
            <>
              {" "}
              <Link
                href={webServicesHubPath}
                className="focus-ring rounded font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4 transition hover:decoration-primary-blue"
              >
                How a website project works wherever you are
              </Link>
              .
            </>
          )}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <li key={location.href}>
              <Link
                href={location.href}
                className="focus-ring group flex h-full items-start gap-3 rounded-2xl border border-primary-blue/10 bg-white/86 p-4 transition hover:border-primary-green/40"
              >
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-green" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-primary-blue">Web design in {location.city}</span>
                  <span className="mt-1 block text-sm leading-6 text-dark-text/68">{location.note}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
