import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, PenLine } from "lucide-react";
import Breadcrumbs, { breadcrumbSchema } from "@/components/public/breadcrumbs";
import CtaBand from "@/components/public/cta-band";
import PostCard from "@/components/public/post-card";
import Reveal from "@/components/public/reveal";
import { categories, getCategoryCounts, getPosts, type Category } from "@/lib/blog";
import { basicPageMetadata } from "@/lib/seo";
import { getCanonicalSiteUrl } from "@/lib/utils";

const PER_PAGE = 6;

export function generateMetadata(): Metadata {
  return basicPageMetadata({
    route: "/blog",
    title: "Blog | Practical IT Advice for Nepal | Infobytes Nepal",
    description:
      "Straight answers on website cost, custom software, SEO, and automation in Nepal, written by the team that builds them. No jargon, real numbers.",
    ogTitle: "The Infobytes Nepal Blog",
    ogDescription:
      "Practical writing on websites, custom software, SEO, and business automation for companies in Nepal.",
  });
}

type SearchParams = Promise<{ category?: string; page?: string }>;

function isCategory(value: string | undefined): value is Category {
  return !!value && (categories as readonly string[]).includes(value);
}

/** Keeps the category when paging and drops empty params so URLs stay clean. */
function buildHref(category: Category | null, page: number) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export default async function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  const { category: rawCategory, page: rawPage } = await searchParams;
  const activeCategory = isCategory(rawCategory) ? rawCategory : null;

  const [allPosts, counts] = await Promise.all([getPosts(), getCategoryCounts()]);
  const filtered = activeCategory ? allPosts.filter((post) => post.category === activeCategory) : allPosts;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const parsedPage = Number.parseInt(rawPage ?? "1", 10);
  const currentPage = Number.isFinite(parsedPage) ? Math.min(Math.max(parsedPage, 1), totalPages) : 1;

  // The newest post is only given the feature treatment on the unfiltered first
  // page. Anywhere else it would be an arbitrary post promoted for no reason.
  const showFeature = !activeCategory && currentPage === 1;
  const feature = showFeature ? filtered[0] : undefined;
  const pool = showFeature ? filtered.slice(1) : filtered;
  const start = showFeature ? 0 : (currentPage - 1) * PER_PAGE;
  const visible = pool.slice(start, start + PER_PAGE);
  const wideRow = showFeature ? visible.slice(0, 2) : [];
  const restRow = showFeature ? visible.slice(2) : visible;

  const siteUrl = getCanonicalSiteUrl();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  const schema = [
    breadcrumbSchema(crumbs),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${siteUrl}/blog#blog`,
      url: `${siteUrl}/blog`,
      name: "The Infobytes Nepal Blog",
      description:
        "Practical writing on websites, custom software, SEO, and business automation for companies in Nepal.",
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      blogPost: allPosts.slice(0, 10).map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${siteUrl}/blog/${post.slug}`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-x bg-soft-blue/40 pb-14 pt-32 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs crumbs={crumbs} />
          <span className="eyebrow">
            <PenLine size={14} /> Writing
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-deep-navy md:text-6xl">
            Notes from the people building it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-dark-text/74">
            What things cost, how long they take, and what usually goes wrong. Written for business owners in Nepal who
            want a straight answer before they spend money.
          </p>
        </div>
      </section>

      {/* Category filter. Plain links rather than client state, so every filtered
          view is a real URL that can be shared, crawled, and used without JS. */}
      <section className="page-x border-b border-primary-blue/10 bg-white py-5">
        <nav aria-label="Filter posts by category" className="mx-auto max-w-7xl">
          <ul className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href={buildHref(null, 1)}
                aria-current={activeCategory === null ? "page" : undefined}
                className={
                  activeCategory === null
                    ? "focus-ring inline-flex items-center gap-1.5 rounded-full border border-primary-blue/25 bg-soft-blue px-4 py-2 text-sm font-semibold text-primary-blue"
                    : "focus-ring inline-flex items-center gap-1.5 rounded-full border border-primary-blue/12 bg-white px-4 py-2 text-sm font-semibold text-dark-text/70 transition hover:border-primary-green/40 hover:text-primary-blue"
                }
              >
                All posts
                <span className="text-xs font-normal opacity-70">{allPosts.length}</span>
              </Link>
            </li>
            {counts.map((entry) => {
              const active = activeCategory === entry.name;
              return (
                <li key={entry.name}>
                  <Link
                    href={buildHref(entry.name, 1)}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "focus-ring inline-flex items-center gap-1.5 rounded-full border border-primary-blue/25 bg-soft-blue px-4 py-2 text-sm font-semibold text-primary-blue"
                        : "focus-ring inline-flex items-center gap-1.5 rounded-full border border-primary-blue/12 bg-white px-4 py-2 text-sm font-semibold text-dark-text/70 transition hover:border-primary-green/40 hover:text-primary-blue"
                    }
                  >
                    {entry.name}
                    <span className="text-xs font-normal opacity-70">{entry.count}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>

      <section className="page-x bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-[28px] border border-primary-blue/12 bg-soft-blue/30 px-6 py-14 text-center">
              <h2 className="text-xl font-semibold text-deep-navy">Nothing here yet</h2>
              <p className="mt-3 leading-7 text-dark-text/72">
                We have not published anything in this category so far. The rest of the writing is still worth a look.
              </p>
              <Link href="/blog" className="focus-ring site-button mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold">
                See all posts
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <>
              {feature && (
                <Reveal>
                  <PostCard post={feature} variant="feature" headingLevel="h2" />
                </Reveal>
              )}

              {visible.length > 0 && (
                <>
                  {feature && (
                    <h2 className="mt-16 text-2xl font-semibold text-deep-navy md:text-3xl">More from the team</h2>
                  )}
                  {/*
                    On the opening view the first two cards run in a two column
                    row before the grid drops to three, so the page has a
                    hierarchy instead of a wall of identical tiles.
                  */}
                  {wideRow.length > 0 && (
                    <div className={`grid gap-5 ${feature ? "mt-8" : ""} md:grid-cols-2`}>
                      {wideRow.map((post) => (
                        <Reveal key={post.slug}>
                          <PostCard post={post} variant="wide" />
                        </Reveal>
                      ))}
                    </div>
                  )}
                  {restRow.length > 0 && (
                    <div className={`grid gap-5 ${feature || wideRow.length ? "mt-5" : ""} sm:grid-cols-2 lg:grid-cols-3`}>
                      {restRow.map((post) => (
                        <Reveal key={post.slug}>
                          <PostCard post={post} variant="compact" />
                        </Reveal>
                      ))}
                    </div>
                  )}
                </>
              )}

              {totalPages > 1 && (
                <nav aria-label="Blog pagination" className="mt-14 flex items-center justify-center gap-2">
                  <Link
                    href={buildHref(activeCategory, currentPage - 1)}
                    aria-disabled={currentPage === 1}
                    tabIndex={currentPage === 1 ? -1 : undefined}
                    className={
                      currentPage === 1
                        ? "pointer-events-none inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-blue/10 text-dark-text/30"
                        : "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-blue/15 text-deep-navy transition hover:border-primary-green/40 hover:text-primary-blue"
                    }
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    <span className="sr-only">Previous page</span>
                  </Link>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <Link
                      key={page}
                      href={buildHref(activeCategory, page)}
                      aria-current={page === currentPage ? "page" : undefined}
                      aria-label={`Page ${page}`}
                      className={
                        page === currentPage
                          ? "inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-blue/25 bg-soft-blue text-sm font-semibold text-primary-blue"
                          : "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-blue/15 text-sm font-semibold text-deep-navy transition hover:border-primary-green/40 hover:text-primary-blue"
                      }
                    >
                      {page}
                    </Link>
                  ))}
                  <Link
                    href={buildHref(activeCategory, currentPage + 1)}
                    aria-disabled={currentPage === totalPages}
                    tabIndex={currentPage === totalPages ? -1 : undefined}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-blue/10 text-dark-text/30"
                        : "focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-blue/15 text-deep-navy transition hover:border-primary-green/40 hover:text-primary-blue"
                    }
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                    <span className="sr-only">Next page</span>
                  </Link>
                </nav>
              )}
            </>
          )}
        </div>
      </section>

      <CtaBand
        eyebrow="Free consultation, no obligation"
        title="Ready to simplify how your business runs?"
        text="Reading is a good start. If you want the numbers for your own project, send us the requirement and we will come back with a scope, a price, and a timeline."
      />
    </>
  );
}
