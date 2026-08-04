import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import SectionImage from "@/components/public/section-image";
import { formatPostDate, getAuthor, type Post } from "@/lib/blog";

/**
 * Post card, built on the site's existing `.card-premium` treatment so it sits
 * beside the service and product cards without introducing a second card style.
 *
 * Three weights, because a grid where every cell is identical is the tell of a
 * generated layout. The existing pages already vary weight this way (the home
 * services grid against the stacking product cards).
 *  - `feature`  the latest post, image beside text on desktop
 *  - `wide`     first row on the listing, image above text, larger type
 *  - `compact`  the rest of the grid and the related posts row
 */
export default function PostCard({
  post,
  variant = "compact",
  headingLevel = "h3",
}: {
  post: Post;
  variant?: "feature" | "wide" | "compact";
  headingLevel?: "h2" | "h3";
}) {
  const author = getAuthor(post.authorSlug);
  const Heading = headingLevel;

  const meta = (
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-dark-text/58">
      {author && <span className="font-semibold text-deep-navy/75">{author.name}</span>}
      <span aria-hidden="true">·</span>
      <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-1">
        <Clock size={12} aria-hidden="true" />
        {post.readTime} min read
      </span>
    </div>
  );

  const pill = (
    <span className="chip !py-1 !text-[0.7rem] !text-primary-blue">{post.category}</span>
  );

  if (variant === "feature") {
    return (
      <article className="card-premium grid gap-0 overflow-hidden lg:grid-cols-[1.05fr_0.95fr]">
        <Link href={`/blog/${post.slug}`} className="focus-ring group block" tabIndex={-1} aria-hidden="true">
          <SectionImage
            src={post.coverImage}
            alt={post.coverAlt}
            className="aspect-[16/10] h-full rounded-none border-0 shadow-none lg:aspect-auto lg:min-h-[22rem]"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
        </Link>
        <div className="flex flex-col justify-center p-6 md:p-9">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-green">Latest</span>
            {pill}
          </div>
          <Heading className="mt-4 text-2xl font-semibold leading-tight text-deep-navy md:text-4xl">
            <Link href={`/blog/${post.slug}`} className="focus-ring rounded transition hover:text-primary-blue">
              {post.title}
            </Link>
          </Heading>
          <p className="mt-4 leading-7 text-dark-text/72">{post.excerpt}</p>
          {meta}
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-blue">
            Read the post
            <ArrowRight size={15} aria-hidden="true" />
          </span>
        </div>
      </article>
    );
  }

  const isWide = variant === "wide";

  return (
    <article className="card-premium group flex h-full flex-col overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="focus-ring block" tabIndex={-1} aria-hidden="true">
        <SectionImage
          src={post.coverImage}
          alt={post.coverAlt}
          className={`${isWide ? "aspect-[16/9]" : "aspect-[16/10]"} rounded-none border-0 shadow-none`}
          sizes={isWide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
        />
      </Link>
      <div className={`flex flex-1 flex-col ${isWide ? "p-6 md:p-7" : "p-6"}`}>
        {pill}
        <Heading className={`mt-4 font-semibold leading-snug text-deep-navy ${isWide ? "text-xl md:text-2xl" : "text-lg"}`}>
          <Link href={`/blog/${post.slug}`} className="focus-ring rounded transition hover:text-primary-blue">
            {post.title}
          </Link>
        </Heading>
        <p className={`mt-3 flex-1 leading-6 text-dark-text/70 ${isWide ? "text-base leading-7" : "text-sm"}`}>
          {post.excerpt}
        </p>
        {meta}
      </div>
    </article>
  );
}

/** Matches the card silhouette so a loading grid does not shift when content lands. */
export function PostCardSkeleton({ wide = false }: { wide?: boolean }) {
  return (
    <div className="card-premium flex h-full flex-col overflow-hidden" aria-hidden="true">
      <div className={`${wide ? "aspect-[16/9]" : "aspect-[16/10]"} animate-pulse bg-soft-blue`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="h-5 w-28 animate-pulse rounded-full bg-soft-blue" />
        <div className="mt-4 h-5 w-full animate-pulse rounded bg-soft-blue" />
        <div className="mt-2 h-5 w-4/5 animate-pulse rounded bg-soft-blue" />
        <div className="mt-4 h-4 w-full animate-pulse rounded bg-soft-blue/70" />
        <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-soft-blue/70" />
        <div className="mt-5 h-3 w-40 animate-pulse rounded bg-soft-blue/70" />
      </div>
    </div>
  );
}
