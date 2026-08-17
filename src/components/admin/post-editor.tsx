"use client";

import { useMemo, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  Bold,
  Code,
  Heading2,
  Heading3,
  ImagePlus,
  Link2,
  List,
  ListOrdered,
  Quote,
  Table,
} from "lucide-react";
import PostBody from "@/components/public/post-body";
import { upsertPost, uploadBlogImage } from "@/lib/actions/blog";
import { countWords, estimateReadTime, parsePostMarkdown } from "@/lib/blog-markdown";
import type { Author, Category } from "@/lib/blog";
import type { PostRow } from "@/lib/db/schema";

/**
 * The blog editor.
 *
 * The body is one markdown textarea with a toolbar rather than a rich text
 * surface. The toolbar writes markdown at the cursor, and the panel beside it
 * renders that markdown through the very same `PostBody` component the public
 * page uses — so the preview is not an approximation of the published post, it
 * is the published post's renderer running on unsaved text. What the author
 * sees is what a reader gets, and what a crawler gets, down to the tag.
 */

type Props = {
  post: PostRow | null;
  categories: readonly Category[];
  authors: Author[];
  /** Server-side validation message carried back through the redirect. */
  error?: string;
  saved?: boolean;
};

/** Google truncates around here. Not hard limits, which is why they are hints. */
const metaTitleTarget = 60;
const metaDescriptionTarget = 155;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 140);
}

function CharacterCount({ value, target }: { value: string; target: number }) {
  const length = value.length;
  const state = length === 0 ? "empty" : length > target ? "over" : "ok";
  return (
    <span
      className={
        state === "over"
          ? "text-xs font-semibold text-red-600"
          : state === "ok"
            ? "text-xs font-semibold text-emerald-700"
            : "text-xs text-dark-text/45"
      }
    >
      {length} / {target}
      {state === "over" && " — will be cut short in search results"}
    </span>
  );
}

export default function PostEditor({ post, categories, authors, error, saved }: Props) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(Boolean(post));
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [metaTitle, setMetaTitle] = useState(post?.metaTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(post?.metaDescription ?? "");
  const [body, setBody] = useState(post?.bodyMarkdown ?? "");

  const [imagePanelOpen, setImagePanelOpen] = useState(false);
  const [imageAlt, setImageAlt] = useState("");
  const [imageCaption, setImageCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const imageFileRef = useRef<HTMLInputElement>(null);

  const blocks = useMemo(() => parsePostMarkdown(body), [body]);
  const words = useMemo(() => countWords(body), [body]);

  /**
   * Warnings, not errors. Every one of these is something an author is allowed
   * to publish; they are the things that quietly cost search traffic, surfaced
   * while it is still cheap to fix rather than discovered in Search Console.
   */
  const warnings = useMemo(() => {
    const list: string[] = [];
    if (blocks.some((block) => block.type === "h1")) {
      list.push(
        "This body contains an H1. The page already has one — the post title above — so section headings should be H2 and H3. Two H1s on a page dilutes the signal.",
      );
    }
    if (!blocks.some((block) => block.type === "h2")) {
      list.push("No H2 headings yet. They become the on-page contents list and are what Google uses to pull out sections.");
    }
    const untitledImages = blocks.filter((block) => block.type === "figure" && !block.alt.trim()).length;
    if (untitledImages > 0) {
      list.push(`${untitledImages} image${untitledImages === 1 ? " has" : "s have"} no alt text. Add a description of what is in the picture.`);
    }
    if (!metaDescription.trim() && !excerpt.trim()) {
      list.push("There is no meta description and no summary, so Google will invent one from the page text.");
    }
    return list;
  }, [blocks, metaDescription, excerpt]);

  /** Replaces the current selection and restores a sensible cursor afterwards. */
  function applyToSelection(
    build: (selected: string) => { text: string; selectFrom?: number; selectTo?: number },
  ) {
    const textarea = bodyRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = body.slice(start, end);
    const { text, selectFrom, selectTo } = build(selected);
    const next = body.slice(0, start) + text + body.slice(end);
    setBody(next);
    // The state update repaints the textarea, so the caret has to be put back
    // afterwards or it jumps to the end and the author loses their place.
    requestAnimationFrame(() => {
      textarea.focus();
      const from = start + (selectFrom ?? text.length);
      const to = start + (selectTo ?? selectFrom ?? text.length);
      textarea.setSelectionRange(from, to);
    });
  }

  function wrap(marker: string, placeholder: string) {
    applyToSelection((selected) => {
      const inner = selected || placeholder;
      return {
        text: `${marker}${inner}${marker}`,
        selectFrom: marker.length,
        selectTo: marker.length + inner.length,
      };
    });
  }

  /** Puts `prefix` on every selected line, on its own block. */
  function prefixLines(prefix: string | ((index: number) => string), placeholder: string) {
    applyToSelection((selected) => {
      const lines = (selected || placeholder).split("\n");
      const prefixed = lines
        .map((line, index) => `${typeof prefix === "function" ? prefix(index) : prefix}${line.replace(/^([#>-]|\d+\.)\s*/, "")}`)
        .join("\n");
      // A heading or list has to start its own block, so make sure there is a
      // blank line above it when it is being dropped mid-paragraph.
      const textarea = bodyRef.current;
      const start = textarea?.selectionStart ?? 0;
      const before = body.slice(0, start);
      const needsBreak = before.length > 0 && !before.endsWith("\n\n");
      const lead = needsBreak ? (before.endsWith("\n") ? "\n" : "\n\n") : "";
      return { text: `${lead}${prefixed}`, selectFrom: lead.length, selectTo: lead.length + prefixed.length };
    });
  }

  function insertLink() {
    applyToSelection((selected) => {
      const label = selected || "link text";
      const text = `[${label}](https://)`;
      // Leave the caret sitting after "https://" so the next keystroke types
      // the URL, which is the only part that always has to be filled in.
      return { text, selectFrom: text.length - 1, selectTo: text.length - 1 };
    });
  }

  function insertTable() {
    applyToSelection(() => {
      const text = "\n| Heading | Heading |\n| --- | --- |\n| Cell | Cell |\n| Cell | Cell |\n";
      return { text, selectFrom: text.length, selectTo: text.length };
    });
  }

  async function handleImageUpload() {
    const file = imageFileRef.current?.files?.[0];
    if (!file) {
      setUploadError("Choose an image file first.");
      return;
    }
    setUploading(true);
    setUploadError("");
    const formData = new FormData();
    formData.set("file", file);
    formData.set("name", `${title || "Blog"} — ${file.name}`);
    formData.set("altText", imageAlt);

    const result = await uploadBlogImage(formData);
    setUploading(false);

    if (!result.ok) {
      setUploadError(result.error);
      return;
    }
    const caption = imageCaption.trim();
    const markdown = `\n\n![${imageAlt.trim()}](${result.url}${caption ? ` "${caption}"` : ""})\n\n`;
    setBody((current) => current + markdown);
    setImagePanelOpen(false);
    setImageAlt("");
    setImageCaption("");
    setUploadError("");
    if (imageFileRef.current) imageFileRef.current.value = "";
  }

  const effectiveMetaTitle = metaTitle.trim() || `${title || "Post title"} | Infobytes Nepal`;
  const effectiveMetaDescription = metaDescription.trim() || excerpt.trim() || "No description set.";
  const previewSlug = slug || slugify(title) || "post-url";

  const toolbarButton =
    "focus-ring inline-flex items-center gap-1.5 rounded-xl border border-primary-blue/15 bg-white px-3 py-2 text-xs font-semibold text-deep-navy transition hover:border-primary-blue/40 hover:bg-soft-blue";

  return (
    <form action={upsertPost}>
      <input type="hidden" name="id" value={post?.id ?? ""} />

      {error && (
        <p className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
      {saved && !error && (
        <p className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          Saved. {post?.isPublished ? "It is live — give the page a few seconds, then refresh it." : "It is still a draft, so nothing has changed on the website yet."}
        </p>
      )}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_26rem]">
        <div className="grid gap-5">
          <section className="rounded-[20px] border border-primary-blue/10 bg-white p-5 shadow-[0_18px_55px_rgba(4,18,63,0.06)]">
            <label className="grid gap-2 text-sm font-medium text-deep-navy">
              Post title
              <input
                name="title"
                value={title}
                required
                maxLength={180}
                onChange={(event) => {
                  setTitle(event.target.value);
                  if (!slugTouched) setSlug(slugify(event.target.value));
                }}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-lg text-dark-text focus:outline-primary-blue"
                placeholder="What a website actually costs in Nepal"
              />
              <span className="text-xs leading-5 text-dark-text/55">
                This is the page&rsquo;s <strong>H1</strong> — the single most important heading on the post. Use
                <strong> H2</strong> and <strong>H3</strong> for the sections inside the body.
              </span>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              Page address
              <div className="flex items-center gap-2 rounded-2xl border border-primary-blue/15 px-4 py-3">
                <span className="shrink-0 text-sm text-dark-text/45">/blog/</span>
                <input
                  name="slug"
                  value={slug}
                  onChange={(event) => {
                    setSlugTouched(true);
                    setSlug(event.target.value);
                  }}
                  className="w-full text-dark-text focus:outline-none"
                  placeholder="how-much-does-a-website-cost-in-nepal"
                />
              </div>
              <span className="text-xs leading-5 text-dark-text/55">
                Lowercase words joined by hyphens. Once a post is published and being linked to, changing this breaks
                those links, so get it right before you publish.
              </span>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              Summary
              <textarea
                name="excerpt"
                value={excerpt}
                required
                rows={3}
                maxLength={400}
                onChange={(event) => setExcerpt(event.target.value)}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
                placeholder="One or two sentences. Shown on the blog index and used as the meta description if you leave that blank."
              />
            </label>
          </section>

          <section className="rounded-[20px] border border-primary-blue/10 bg-white p-5 shadow-[0_18px_55px_rgba(4,18,63,0.06)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-deep-navy">Body</h2>
              <p className="text-xs text-dark-text/55">
                {words} word{words === 1 ? "" : "s"} · about {estimateReadTime(body)} min read
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" className={toolbarButton} onClick={() => wrap("**", "bold text")} title="Bold">
                <Bold size={14} /> Bold
              </button>
              <button type="button" className={toolbarButton} onClick={insertLink} title="Insert a link">
                <Link2 size={14} /> Link
              </button>
              <button type="button" className={toolbarButton} onClick={() => prefixLines("## ", "Section heading")} title="Heading 2">
                <Heading2 size={14} /> H2
              </button>
              <button type="button" className={toolbarButton} onClick={() => prefixLines("### ", "Sub heading")} title="Heading 3">
                <Heading3 size={14} /> H3
              </button>
              <button type="button" className={toolbarButton} onClick={() => prefixLines("- ", "First point\nSecond point")} title="Bullet list">
                <List size={14} /> Bullets
              </button>
              <button
                type="button"
                className={toolbarButton}
                onClick={() => prefixLines((index) => `${index + 1}. `, "First step\nSecond step")}
                title="Numbered list"
              >
                <ListOrdered size={14} /> Numbered
              </button>
              <button type="button" className={toolbarButton} onClick={() => prefixLines("> ", "Something worth pulling out")} title="Quote">
                <Quote size={14} /> Quote
              </button>
              <button type="button" className={toolbarButton} onClick={() => wrap("`", "code")} title="Inline code">
                <Code size={14} /> Code
              </button>
              <button type="button" className={toolbarButton} onClick={insertTable} title="Table">
                <Table size={14} /> Table
              </button>
              <button
                type="button"
                className={`${toolbarButton} border-primary-green/40 bg-soft-green/40`}
                onClick={() => setImagePanelOpen((open) => !open)}
                title="Insert an image"
              >
                <ImagePlus size={14} /> Image
              </button>
            </div>

            {imagePanelOpen && (
              <div className="mt-4 grid gap-3 rounded-2xl border border-primary-green/30 bg-soft-green/25 p-4">
                <p className="text-sm font-semibold text-deep-navy">Add an image between paragraphs</p>
                <input
                  ref={imageFileRef}
                  type="file"
                  accept="image/*"
                  className="rounded-2xl border border-primary-blue/15 bg-white px-4 py-3 text-sm text-dark-text file:mr-4 file:rounded-full file:border-0 file:bg-soft-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-blue"
                />
                <label className="grid gap-1.5 text-sm font-medium text-deep-navy">
                  Alt text (what the picture shows)
                  <input
                    value={imageAlt}
                    onChange={(event) => setImageAlt(event.target.value)}
                    maxLength={220}
                    placeholder="A developer at Infobytes Nepal reviewing a client quotation"
                    className="rounded-2xl border border-primary-blue/15 bg-white px-4 py-2.5 text-dark-text focus:outline-primary-blue"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-deep-navy">
                  Caption (optional, shown under the image)
                  <input
                    value={imageCaption}
                    onChange={(event) => setImageCaption(event.target.value)}
                    maxLength={220}
                    className="rounded-2xl border border-primary-blue/15 bg-white px-4 py-2.5 text-dark-text focus:outline-primary-blue"
                  />
                </label>
                {uploadError && <p className="text-sm font-medium text-red-700">{uploadError}</p>}
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    disabled={uploading}
                    onClick={handleImageUpload}
                    className="rounded-full bg-deep-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-blue disabled:opacity-60"
                  >
                    {uploading ? "Uploading…" : "Upload and add to the post"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setImagePanelOpen(false)}
                    className="rounded-full border border-primary-blue/20 px-5 py-2.5 text-sm font-semibold text-deep-navy"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-xs leading-5 text-dark-text/60">
                  The image is added at the end of the body. Cut and paste the `![...]` line to move it between the
                  paragraphs you want. Maximum 3MB.
                </p>
              </div>
            )}

            <textarea
              ref={bodyRef}
              name="bodyMarkdown"
              value={body}
              required
              rows={26}
              onChange={(event) => setBody(event.target.value)}
              className="mt-4 w-full rounded-2xl border border-primary-blue/15 px-4 py-3 font-mono text-sm leading-7 text-dark-text focus:outline-primary-blue"
              placeholder={"Write the opening paragraph here.\n\n## A section heading\n\nMore text, with **something bold** and a [link to another page](/services).\n\n- A point\n- Another point"}
            />

            <details className="mt-3 rounded-2xl border border-primary-blue/12 bg-soft-blue/40 px-4 py-3">
              <summary className="cursor-pointer text-sm font-semibold text-deep-navy">
                What the formatting marks do
              </summary>
              <ul className="mt-3 grid gap-1.5 font-mono text-xs leading-6 text-dark-text/75">
                <li>## Heading — a section heading (H2)</li>
                <li>### Heading — a sub heading (H3)</li>
                <li>**important** — bold</li>
                <li>[the words you see](https://example.com) — a link</li>
                <li>[our services](/services) — a link to another page on this site</li>
                <li>- point — a bullet list, one line per point</li>
                <li>1. step — a numbered list</li>
                <li>&gt; quoted line — a pull quote</li>
                <li>![description](/api/media/…) — an image, added by the Image button</li>
              </ul>
              <p className="mt-3 text-xs leading-6 text-dark-text/70">
                Leave a blank line between paragraphs. Everything you write here is published as real HTML — an H2 is a
                genuine &lt;h2&gt; tag and a link is a genuine &lt;a href&gt; — which is what search engines read.
              </p>
            </details>
          </section>

          <section className="rounded-[20px] border border-primary-blue/10 bg-white p-5 shadow-[0_18px_55px_rgba(4,18,63,0.06)]">
            <h2 className="text-lg font-semibold text-deep-navy">Search engine listing</h2>
            <p className="mt-1 text-sm text-dark-text/60">
              What Google shows. Leave either field blank and the post title or the summary is used instead.
            </p>

            <div className="mt-5 rounded-2xl border border-primary-blue/12 bg-soft-blue/30 p-4">
              <p className="text-xs text-emerald-800">www.infobytesnepal.com › blog › {previewSlug}</p>
              <p className="mt-1 line-clamp-2 text-lg leading-6 text-[#1a0dab]">{effectiveMetaTitle}</p>
              <p className="mt-1 line-clamp-2 text-sm leading-6 text-dark-text/75">{effectiveMetaDescription}</p>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-medium text-deep-navy">
              <span className="flex items-center justify-between gap-3">
                Meta title
                <CharacterCount value={metaTitle} target={metaTitleTarget} />
              </span>
              <input
                name="metaTitle"
                value={metaTitle}
                maxLength={180}
                onChange={(event) => setMetaTitle(event.target.value)}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
                placeholder={`${title || "Post title"} | Infobytes Nepal`}
              />
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              <span className="flex items-center justify-between gap-3">
                Meta description
                <CharacterCount value={metaDescription} target={metaDescriptionTarget} />
              </span>
              <textarea
                name="metaDescription"
                value={metaDescription}
                rows={3}
                maxLength={360}
                onChange={(event) => setMetaDescription(event.target.value)}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
                placeholder="Falls back to the summary above."
              />
            </label>
          </section>
        </div>

        <aside className="grid gap-5 self-start xl:sticky xl:top-6">
          <section className="rounded-[20px] border border-primary-blue/10 bg-white p-5 shadow-[0_18px_55px_rgba(4,18,63,0.06)]">
            <h2 className="text-lg font-semibold text-deep-navy">Publishing</h2>

            <label className="mt-4 flex items-start gap-3 rounded-2xl border border-primary-blue/12 bg-soft-blue/30 p-4 text-sm font-medium text-deep-navy">
              <input
                name="isPublished"
                type="checkbox"
                defaultChecked={post?.isPublished ?? false}
                className="mt-0.5 h-4 w-4 accent-primary-blue"
              />
              <span>
                Publish to the website
                <span className="mt-1 block text-xs font-normal leading-5 text-dark-text/60">
                  Unticked, it stays a draft that only you can see. Ticked and saved, it goes live at /blog/{previewSlug}
                  {" "}and is added to the sitemap.
                </span>
              </span>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              Publish date
              <input
                name="publishedAt"
                type="date"
                defaultValue={post?.publishedAt ?? new Date().toISOString().slice(0, 10)}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
              />
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              Category
              <select
                name="category"
                defaultValue={post?.category ?? categories[0]}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              Author
              <select
                name="authorSlug"
                defaultValue={post?.authorSlug ?? authors[0]?.slug}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
              >
                {authors.map((author) => (
                  <option key={author.slug} value={author.slug}>
                    {author.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              Tags
              <input
                name="tags"
                defaultValue={post?.tags ?? ""}
                maxLength={300}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
                placeholder="pricing, websites, budgeting"
              />
              <span className="text-xs text-dark-text/55">Separated by commas.</span>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              Read time in minutes
              <input
                name="readTime"
                type="number"
                min={0}
                max={180}
                defaultValue={post?.readTime || 0}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
              />
              <span className="text-xs text-dark-text/55">
                Leave at 0 and it is worked out from the length ({estimateReadTime(body)} min right now).
              </span>
            </label>
          </section>

          <section className="rounded-[20px] border border-primary-blue/10 bg-white p-5 shadow-[0_18px_55px_rgba(4,18,63,0.06)]">
            <h2 className="text-lg font-semibold text-deep-navy">Cover image</h2>
            <p className="mt-1 text-sm text-dark-text/60">
              Shown at the top of the post, on the blog index, and when the post is shared on Facebook or LinkedIn.
            </p>
            <input type="hidden" name="coverImage" value={post?.coverImage ?? ""} />
            {post?.coverImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.coverImage}
                alt={post.coverAlt || "Current cover image"}
                className="mt-4 aspect-[16/9] w-full rounded-2xl border border-primary-blue/12 object-cover"
              />
            )}
            <input
              type="file"
              name="coverImageFile"
              accept="image/*"
              className="mt-4 w-full rounded-2xl border border-primary-blue/15 px-4 py-3 text-sm text-dark-text file:mr-4 file:rounded-full file:border-0 file:bg-soft-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-blue"
            />
            <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
              Cover alt text
              <input
                name="coverAlt"
                defaultValue={post?.coverAlt ?? ""}
                maxLength={220}
                className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
                placeholder="Describe the photograph"
              />
            </label>
            <p className="mt-3 text-xs leading-5 text-dark-text/55">
              Leave the file empty to keep the current image. Maximum 3MB.
            </p>
          </section>

          {warnings.length > 0 && (
            <section className="rounded-[20px] border border-amber-300 bg-amber-50 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-amber-900">Worth checking</h2>
              <ul className="mt-3 grid gap-2.5 text-sm leading-6 text-amber-900">
                {warnings.map((warning) => (
                  <li key={warning}>{warning}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>

      <section className="mt-6 rounded-[20px] border border-primary-blue/10 bg-white p-5 shadow-[0_18px_55px_rgba(4,18,63,0.06)]">
        <h2 className="text-lg font-semibold text-deep-navy">Preview</h2>
        <p className="mt-1 text-sm text-dark-text/60">
          Exactly how the body will look on the website. Rendered by the same code the live page uses.
        </p>
        <div className="mt-5 rounded-2xl border border-primary-blue/10 bg-white px-5 py-2">
          <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-deep-navy">
            {title || "Post title"}
          </h1>
          <div className="max-w-[68ch]">
            {blocks.length ? (
              <PostBody blocks={blocks} />
            ) : (
              <p className="py-10 text-sm text-dark-text/50">Start writing and the preview appears here.</p>
            )}
          </div>
          <div className="h-6" />
        </div>
      </section>

      {/*
        The save bar sticks to the bottom of the viewport. The form is long
        enough that a button at the end of it is several screens away from the
        field an author is editing, which is how work gets lost.
      */}
      <div className="sticky bottom-0 z-10 -mx-4 mt-6 flex flex-wrap items-center gap-3 border-t border-primary-blue/12 bg-white/95 px-4 py-4 backdrop-blur lg:-mx-8 lg:px-8">
        <SaveBar published={post?.isPublished ?? false} isNew={!post} />
      </div>
    </form>
  );
}

/** Split out so `useFormStatus` reads the state of the form it sits inside. */
function SaveBar({ published, isNew }: { published: boolean; isNew: boolean }) {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-deep-navy px-6 py-3 text-sm font-semibold text-white hover:bg-primary-blue disabled:opacity-60"
      >
        {pending ? "Saving…" : isNew ? "Create post" : "Save changes"}
      </button>
      <p className="text-sm text-dark-text/60">
        {published
          ? "This post is live. Saving updates the published page."
          : "Tick “Publish to the website” above to make it live."}
      </p>
    </>
  );
}
