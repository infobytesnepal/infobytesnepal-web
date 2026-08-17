import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import PostEditor from "@/components/admin/post-editor";
import { requireBlogAccess } from "@/lib/auth";
import { authors, categories, getPostRowById } from "@/lib/blog";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string; saved?: string }>;
};

/**
 * One route for both writing and editing: `/blog/new` creates, `/blog/<id>`
 * edits. The editor is identical either way, and a single route means the
 * "save failed, here is why" redirect has somewhere to land in both cases.
 */
export default async function PostEditorPage({ params, searchParams }: Props) {
  await requireBlogAccess();
  const { id } = await params;
  const { error, saved } = await searchParams;

  const isNew = id === "new";
  const post = isNew ? null : await getPostRowById(id);
  if (!isNew && !post) notFound();

  return (
    <div>
      <Link
        href="/admin-infobytesnepal/blog"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue hover:underline"
      >
        <ArrowLeft size={15} />
        All posts
      </Link>
      <h1 className="mt-3 text-3xl font-semibold text-deep-navy">
        {isNew ? "Write a new post" : "Edit post"}
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-dark-text/65">
        Everything you write below is published as real HTML — headings become genuine heading tags and links become
        genuine link tags — which is what Google and other search engines read when they crawl the page.
      </p>

      <div className="mt-6">
        <PostEditor
          post={post}
          categories={categories}
          authors={authors}
          error={error}
          saved={saved === "1"}
        />
      </div>
    </div>
  );
}
