import { PostCardSkeleton } from "@/components/public/post-card";

/**
 * Matches the real listing's spacing and card silhouettes so the swap to real
 * content does not move anything on screen.
 */
export default function BlogLoading() {
  return (
    <>
      <section className="page-x bg-soft-blue/40 pb-14 pt-32 md:pb-16">
        <div className="mx-auto max-w-7xl" aria-hidden="true">
          <div className="h-4 w-40 animate-pulse rounded bg-white/70" />
          <div className="mt-6 h-12 w-full max-w-2xl animate-pulse rounded bg-white/70" />
          <div className="mt-4 h-12 w-2/3 max-w-xl animate-pulse rounded bg-white/70" />
          <div className="mt-7 h-5 w-full max-w-xl animate-pulse rounded bg-white/60" />
        </div>
      </section>

      <section className="page-x border-b border-primary-blue/10 bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-10 w-32 animate-pulse rounded-full bg-soft-blue" />
          ))}
        </div>
      </section>

      <section className="page-x bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="sr-only" role="status">
            Loading posts
          </p>
          <div className="card-premium grid gap-0 overflow-hidden lg:grid-cols-[1.05fr_0.95fr]" aria-hidden="true">
            <div className="aspect-[16/10] animate-pulse bg-soft-blue lg:aspect-auto lg:min-h-[22rem]" />
            <div className="p-6 md:p-9">
              <div className="h-5 w-24 animate-pulse rounded-full bg-soft-blue" />
              <div className="mt-5 h-8 w-full animate-pulse rounded bg-soft-blue" />
              <div className="mt-3 h-8 w-3/4 animate-pulse rounded bg-soft-blue" />
              <div className="mt-5 h-4 w-full animate-pulse rounded bg-soft-blue/70" />
              <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-soft-blue/70" />
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <PostCardSkeleton wide />
            <PostCardSkeleton wide />
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
