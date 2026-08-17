import Link from "next/link";
import { ExternalLink, PenLine, Plus } from "lucide-react";
import ConfirmButton from "@/components/admin/confirm-button";
import { AdminCard } from "@/components/admin/ui";
import { deletePost, togglePostPublished } from "@/lib/actions/blog";
import { requireBlogAccess } from "@/lib/auth";
import { getAdminPosts, getAuthor, formatPostDate } from "@/lib/blog";

export default async function BlogAdminPage() {
  await requireBlogAccess();
  const posts = await getAdminPosts();
  const published = posts.filter((post) => post.isPublished).length;

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-deep-navy">Blog</h1>
          <p className="mt-2 text-sm text-dark-text/60">
            {posts.length} post{posts.length === 1 ? "" : "s"} · {published} live ·{" "}
            {posts.length - published} draft{posts.length - published === 1 ? "" : "s"}
          </p>
        </div>
        <Link
          href="/admin-infobytesnepal/blog/new"
          className="inline-flex items-center gap-2 rounded-full bg-deep-navy px-5 py-3 text-sm font-semibold text-white hover:bg-primary-blue"
        >
          <Plus size={16} />
          Write a new post
        </Link>
      </div>

      {posts.length === 0 && (
        <AdminCard className="mt-6">
          <h2 className="text-lg font-semibold text-deep-navy">No posts in the CMS yet</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-dark-text/70">
            The blog is currently serving the posts that were written into the site&rsquo;s code. Once the first post is
            saved here, this list takes over. Write one, or ask a developer to run{" "}
            <code className="rounded bg-soft-blue px-1.5 py-0.5 font-mono text-xs">npm run db:seed:blog</code> to copy
            the existing six in so they can be edited here too.
          </p>
        </AdminCard>
      )}

      <div className="mt-6 grid gap-4">
        {posts.map((post) => {
          const author = getAuthor(post.authorSlug);
          return (
            <AdminCard key={post.id}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={
                        post.isPublished
                          ? "rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800"
                          : "rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800"
                      }
                    >
                      {post.isPublished ? "Live" : "Draft"}
                    </span>
                    <span className="text-xs text-dark-text/55">{post.category}</span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-deep-navy">{post.title}</h2>
                  <p className="mt-1 text-sm text-dark-text/60">
                    /blog/{post.slug} · {formatPostDate(post.publishedAt)}
                    {author ? ` · ${author.name}` : ""}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/admin-infobytesnepal/blog/${post.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy hover:bg-soft-blue"
                  >
                    <PenLine size={15} />
                    Edit
                  </Link>
                  {post.isPublished && (
                    <a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy hover:bg-soft-blue"
                    >
                      <ExternalLink size={15} />
                      View
                    </a>
                  )}
                  <form action={togglePostPublished}>
                    <input type="hidden" name="id" value={post.id} />
                    <button className="rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy hover:bg-soft-blue">
                      {post.isPublished ? "Unpublish" : "Publish"}
                    </button>
                  </form>
                  <form action={deletePost}>
                    <input type="hidden" name="id" value={post.id} />
                    <ConfirmButton
                      message={`Delete "${post.title}"? This cannot be undone.`}
                      className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
                    >
                      Delete
                    </ConfirmButton>
                  </form>
                </div>
              </div>
            </AdminCard>
          );
        })}
      </div>
    </div>
  );
}
