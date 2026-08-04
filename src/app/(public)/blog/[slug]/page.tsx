import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { SVGProps } from "react";
import { Clock, Link2, Tag } from "lucide-react";
import Breadcrumbs, { breadcrumbSchema } from "@/components/public/breadcrumbs";
import CmsImage from "@/components/public/cms-image";
import CtaBand from "@/components/public/cta-band";
import PostBody from "@/components/public/post-body";
import PostCard from "@/components/public/post-card";
import Reveal from "@/components/public/reveal";
import SectionImage from "@/components/public/section-image";
import { formatPostDate, getAuthor, getPost, getPostSlugs, getRelatedPosts } from "@/lib/blog";
import { getCanonicalSiteUrl } from "@/lib/utils";

/**
 * lucide dropped its brand glyphs in v1, so the share icons are inline SVGs.
 * The footer already does the same thing for its social links.
 */
function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.25 8.94h3.5V21h-3.5V8.94Zm5.69 0h3.35v1.65h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.18 2.2 4.18 5.07V21h-3.5v-5.38c0-1.28-.02-2.93-1.86-2.93-1.86 0-2.14 1.4-2.14 2.84V21h-3.5V8.94Z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.45 23.69v-7.98h3.25l.67-3.67h-3.92v-1.3c0-1.94.76-2.68 2.73-2.68.61 0 1.1.01 1.39.04V4.78c-.54-.15-1.85-.3-2.61-.3-4.01 0-5.86 1.9-5.86 5.98v1.58H6.63v3.67H9.1v7.98h4.35Z" />
    </svg>
  );
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const siteUrl = getCanonicalSiteUrl();
  const url = `${siteUrl}/blog/${post.slug}`;
  const title = post.metaTitle || `${post.title} | Infobytes Nepal`;
  const description = post.metaDescription || post.excerpt;
  const author = getAuthor(post.authorSlug);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: "index,follow",
    authors: author ? [{ name: author.name }] : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: "Infobytes Nepal",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: author ? [author.name] : undefined,
      tags: post.tags,
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.authorSlug);
  const related = await getRelatedPosts(post.slug, 3);
  const siteUrl = getCanonicalSiteUrl();
  const url = `${siteUrl}/blog/${post.slug}`;

  // Only h2s go in the contents list. Including h3s as well turns a nine item
  // list into a twenty item one and stops it being scannable.
  const toc = post.body.filter((block) => block.type === "h2") as Array<{ type: "h2"; text: string; id: string }>;

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  const shareText = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(url);

  const schema = [
    breadcrumbSchema(crumbs),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: post.title,
      description: post.metaDescription || post.excerpt,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      inLanguage: "en",
      keywords: post.tags.join(", "),
      articleSection: post.category,
      wordCount: post.body.reduce((total, block) => {
        if (block.type === "p" || block.type === "quote") return total + block.text.split(/\s+/).length;
        if (block.type === "ul" || block.type === "ol") return total + block.items.join(" ").split(/\s+/).length;
        return total;
      }, 0),
      image: [`${siteUrl}${post.coverImage}`],
      author: author
        ? {
            "@type": "Person",
            name: author.name,
            jobTitle: author.role,
            url: `${siteUrl}/team/${author.slug}`,
          }
        : { "@type": "Organization", "@id": `${siteUrl}/#organization` },
      publisher: { "@id": `${siteUrl}/#organization` },
      isPartOf: { "@id": `${siteUrl}/blog#blog` },
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <article>
        <header className="page-x bg-soft-blue/40 pb-12 pt-32">
          <div className="mx-auto max-w-4xl">
            <Breadcrumbs crumbs={crumbs} />
            <span className="chip !py-1 !text-[0.72rem] !text-primary-blue">{post.category}</span>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-deep-navy md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-dark-text/74">{post.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-dark-text/62">
              {author && (
                <span className="inline-flex items-center gap-2">
                  {author.image && (
                    <CmsImage
                      src={author.image}
                      alt={`${author.name}, ${author.role} at Infobytes Nepal`}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full border border-primary-blue/12 bg-soft-blue object-cover object-top"
                    />
                  )}
                  <span className="font-semibold text-deep-navy">{author.name}</span>
                </span>
              )}
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" />
                {post.readTime} min read
              </span>
              {post.updatedAt !== post.publishedAt && (
                <span className="text-dark-text/50">Updated {formatPostDate(post.updatedAt)}</span>
              )}
            </div>
          </div>
        </header>

        <div className="page-x bg-white pb-8 pt-10">
          <div className="mx-auto max-w-5xl">
            <SectionImage
              src={post.coverImage}
              alt={post.coverAlt}
              className="aspect-[16/9]"
              sizes="(min-width: 1024px) 64rem, 100vw"
              priority
            />
          </div>
        </div>

        <div className="page-x bg-white pb-16 md:pb-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-14">
            {/*
              Contents rail. Desktop only: on a phone a sticky list would eat
              the viewport, and the post is short enough to scroll.
            */}
            {toc.length > 1 && (
              <aside className="hidden lg:block">
                <nav aria-labelledby="toc-heading" className="sticky top-28">
                  <h2 id="toc-heading" className="text-xs font-semibold uppercase tracking-wider text-primary-blue">
                    On this page
                  </h2>
                  <ul className="mt-4 grid gap-2.5 border-l border-primary-blue/12 pl-4">
                    {toc.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="focus-ring block rounded text-sm leading-6 text-dark-text/68 transition hover:text-primary-blue"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            )}

            {/* max-w-[68ch] holds the measure at roughly 68 to 72 characters. */}
            <div className="min-w-0 max-w-[68ch]">
              <PostBody blocks={post.body} />

              {post.tags.length > 0 && (
                <div className="mt-12 flex flex-wrap items-center gap-2">
                  <Tag size={15} className="text-dark-text/45" aria-hidden="true" />
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-primary-blue/12 bg-white px-3 py-1 text-xs font-medium text-dark-text/65">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-primary-blue/10 pt-8">
                <span className="text-sm font-semibold text-deep-navy">Share this</span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share ${post.title} on LinkedIn`}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-blue/15 text-deep-navy transition hover:border-primary-green/40 hover:text-primary-blue"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share ${post.title} on Facebook`}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-blue/15 text-deep-navy transition hover:border-primary-green/40 hover:text-primary-blue"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:?subject=${shareText}&body=${shareUrl}`}
                  aria-label={`Share ${post.title} by email`}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-blue/15 text-deep-navy transition hover:border-primary-green/40 hover:text-primary-blue"
                >
                  <Link2 size={16} aria-hidden="true" />
                </a>
              </div>

              {author && (
                <div className="card-premium mt-10 flex flex-col gap-5 p-6 sm:flex-row sm:items-start">
                  {author.image && (
                    <CmsImage
                      src={author.image}
                      alt={`${author.name}, ${author.role} at Infobytes Nepal`}
                      width={72}
                      height={72}
                      className="h-18 w-18 shrink-0 rounded-full border border-primary-blue/12 bg-soft-blue object-cover object-top"
                    />
                  )}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-blue">Written by</p>
                    <p className="mt-2 text-lg font-semibold text-deep-navy">{author.name}</p>
                    <p className="text-sm text-dark-text/60">{author.role}</p>
                    <p className="mt-3 text-sm leading-6 text-dark-text/72">{author.bio}</p>
                    <Link
                      href={`/team/${author.slug}`}
                      className="focus-ring mt-3 inline-block rounded text-sm font-semibold text-primary-blue underline decoration-primary-blue/30 underline-offset-4"
                    >
                      More about {author.name.split(" ")[0]}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="page-x border-t border-primary-blue/10 bg-soft-blue/25 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <span className="eyebrow">Keep reading</span>
            <h2 className="mt-3 text-2xl font-semibold text-deep-navy md:text-4xl">Related posts</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Reveal key={item.slug}>
                  <PostCard post={item} variant="compact" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        eyebrow="Free consultation, no obligation"
        title="Ready to simplify how your business runs?"
        text="If something here matched what you are dealing with, tell us about it. We will come back with a scope, a price, and a timeline, at no charge."
      />
    </>
  );
}
