"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { ExternalLink, RotateCcw } from "lucide-react";
import Repeatable from "@/components/admin/repeatable";
import { resetLandingPage, saveLandingPage } from "@/lib/actions/landing-pages";
import type { SeoLandingPage } from "@/lib/seo-landing-pages";

/**
 * Editor for one SEO landing page.
 *
 * The form is deliberately shaped like the page rather than like the database
 * row: sections appear in the order a reader meets them, so somebody rewriting
 * a page for search can work top to bottom instead of mapping field names onto
 * a layout they have to hold in their head.
 *
 * Nothing here is a rich text surface. Every field is plain text that the page
 * template renders into its own markup, which is what stops a rewrite from
 * being able to break the page's heading structure — usually the very thing the
 * rewrite is trying to improve.
 */

type Props = {
  pageKey: string;
  /** The merged page: repo defaults with any saved edits already applied. */
  page: SeoLandingPage;
  /** True when a row exists, i.e. this page has been edited before. */
  isCustomised: boolean;
  updatedAt?: string | null;
  updatedBy?: string | null;
  error?: string;
  saved?: boolean;
  reset?: boolean;
};

const metaTitleTarget = 60;
const metaDescriptionTarget = 155;

const inputClass =
  "w-full rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue";
const labelClass = "grid gap-2 text-sm font-medium text-deep-navy";

function Counter({ value, target }: { value: string; target: number }) {
  const over = value.length > target;
  return (
    <span className={over ? "text-xs font-semibold text-red-600" : "text-xs text-dark-text/50"}>
      {value.length} / {target}
      {over && " — will be cut short in search results"}
    </span>
  );
}

function Card({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[20px] border border-primary-blue/10 bg-white p-5 shadow-[0_18px_55px_rgba(4,18,63,0.06)]">
      <h2 className="text-lg font-semibold text-deep-navy">{title}</h2>
      {description && <p className="mt-1 text-sm leading-6 text-dark-text/62">{description}</p>}
      <div className="mt-5 grid gap-4">{children}</div>
    </section>
  );
}

/** A list where one line is one bullet. Used for the four simple list sections. */
function LineList({ label, name, items, hint }: { label: string; name: string; items: readonly string[]; hint: string }) {
  const [value, setValue] = useState(items.join("\n"));
  const count = value.split("\n").filter((line) => line.trim()).length;
  return (
    <label className={labelClass}>
      <span className="flex flex-wrap items-center justify-between gap-2">
        {label}
        <span className="text-xs text-dark-text/50">
          {count} item{count === 1 ? "" : "s"}
        </span>
      </span>
      <textarea
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={Math.min(14, Math.max(4, count + 1))}
        className={`${inputClass} leading-7`}
      />
      <span className="text-xs leading-5 text-dark-text/55">{hint}</span>
    </label>
  );
}

export default function LandingPageEditor({
  pageKey,
  page,
  isCustomised,
  updatedAt,
  updatedBy,
  error,
  saved,
  reset,
}: Props) {
  const [metaTitle, setMetaTitle] = useState(page.metaTitle);
  const [metaDescription, setMetaDescription] = useState(page.metaDescription);

  return (
    <form action={saveLandingPage} className="grid gap-5">
      <input type="hidden" name="pageKey" value={pageKey} />

      {error && (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>
      )}
      {saved && !error && (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          Saved and live. Open the page and refresh to see it.
        </p>
      )}
      {reset && (
        <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
          Reverted to the original version of this page.
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary-blue/12 bg-soft-blue/30 px-4 py-3">
        <div className="text-sm text-dark-text/70">
          <span className="font-semibold text-deep-navy">{page.path}</span>
          {isCustomised ? (
            <span className="ml-2 text-xs">
              edited{updatedBy ? ` by ${updatedBy}` : ""}
              {updatedAt ? ` on ${updatedAt.slice(0, 10)}` : ""}
            </span>
          ) : (
            <span className="ml-2 text-xs">showing the original version</span>
          )}
        </div>
        <a
          href={page.path}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 bg-white px-4 py-2 text-sm font-semibold text-deep-navy hover:bg-soft-blue"
        >
          <ExternalLink size={14} />
          View live page
        </a>
      </div>

      <Card
        title="Search engine listing"
        description="What Google shows in the results. Usually the highest-leverage thing on the page."
      >
        <div className="rounded-2xl border border-primary-blue/12 bg-soft-blue/30 p-4">
          <p className="text-xs text-emerald-800">www.infobytesnepal.com{page.path}</p>
          <p className="mt-1 line-clamp-2 text-lg leading-6 text-[#1a0dab]">{metaTitle || "No meta title set"}</p>
          <p className="mt-1 line-clamp-2 text-sm leading-6 text-dark-text/75">
            {metaDescription || "No meta description set"}
          </p>
        </div>

        <label className={labelClass}>
          <span className="flex items-center justify-between gap-3">
            Meta title
            <Counter value={metaTitle} target={metaTitleTarget} />
          </span>
          <input
            name="metaTitle"
            value={metaTitle}
            onChange={(event) => setMetaTitle(event.target.value)}
            required
            maxLength={200}
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          <span className="flex items-center justify-between gap-3">
            Meta description
            <Counter value={metaDescription} target={metaDescriptionTarget} />
          </span>
          <textarea
            name="metaDescription"
            value={metaDescription}
            onChange={(event) => setMetaDescription(event.target.value)}
            required
            rows={3}
            maxLength={400}
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          Target keyword
          <input name="keyword" defaultValue={page.keyword} required maxLength={160} className={inputClass} />
          <span className="text-xs leading-5 text-dark-text/55">
            The phrase this page is meant to rank for. Also used as the page&rsquo;s label in the site index that AI
            crawlers read.
          </span>
        </label>
      </Card>

      <Card
        title="Social sharing"
        description="Used when the page is shared on Facebook, LinkedIn or WhatsApp. Often worth being punchier than the search title."
      >
        <label className={labelClass}>
          Share title
          <input name="ogTitle" defaultValue={page.ogTitle} required maxLength={200} className={inputClass} />
        </label>
        <label className={labelClass}>
          Share description
          <textarea
            name="ogDescription"
            defaultValue={page.ogDescription}
            required
            rows={3}
            maxLength={400}
            className={inputClass}
          />
        </label>
      </Card>

      <Card title="Hero" description="The first thing on the page. The hero title becomes the page's H1.">
        <label className={labelClass}>
          Hero title (H1)
          <input name="heroTitle" defaultValue={page.heroTitle} required maxLength={200} className={inputClass} />
        </label>
        <label className={labelClass}>
          Intro paragraph
          <textarea
            name="heroIntro"
            defaultValue={page.heroIntro}
            required
            rows={4}
            maxLength={2000}
            className={inputClass}
          />
        </label>
      </Card>

      <Card title="Overview" description="The main body section under the hero.">
        <label className={labelClass}>
          Section heading (H2)
          <input
            name="overviewTitle"
            defaultValue={page.overview.title}
            required
            maxLength={200}
            className={inputClass}
          />
        </label>
        <Repeatable
          legend="Paragraphs"
          hint="One box per paragraph. This is the longest prose on the page, and the part most worth rewriting for search."
          addLabel="Add a paragraph"
          initial={page.overview.paragraphs.length}
        >
          {(index) => (
            <textarea
              name="overviewParagraph"
              defaultValue={page.overview.paragraphs[index] ?? ""}
              rows={5}
              maxLength={4000}
              placeholder="Write a paragraph…"
              className={`${inputClass} border-primary-blue/12`}
            />
          )}
        </Repeatable>
      </Card>

      <Card title="Problems and solutions" description="The two bullet lists that face each other on the page.">
        <LineList
          label="Problems this page speaks to"
          name="problems"
          items={page.problems}
          hint="One problem per line. Press Enter for a new bullet."
        />
        <LineList label="How we solve them" name="solutions" items={page.solutions} hint="One solution per line." />
      </Card>

      <Card title="What is included" description="The short capability chips shown as a grid.">
        <LineList
          label="Features"
          name="features"
          items={page.features}
          hint="One short phrase per line — these are chips, not sentences."
        />
      </Card>

      <Card title="How we work" description="The numbered steps.">
        <Repeatable legend="Process steps" addLabel="Add a step" initial={page.process.length}>
          {(index) => (
            <div className="grid gap-2">
              <input
                name="processTitle"
                defaultValue={page.process[index]?.title ?? ""}
                maxLength={160}
                placeholder="Step name"
                className={`${inputClass} font-semibold`}
              />
              <textarea
                name="processText"
                defaultValue={page.process[index]?.text ?? ""}
                rows={3}
                maxLength={2000}
                placeholder="What happens in this step"
                className={inputClass}
              />
            </div>
          )}
        </Repeatable>
      </Card>

      <Card title="Why choose us" description="The reasons list near the bottom of the page.">
        <LineList label="Reasons" name="reasons" items={page.reasons} hint="One reason per line." />
      </Card>

      <Card
        title="Related pages"
        description="Internal links out of this page. They spread ranking strength around the site, so they matter more than they look."
      >
        <Repeatable
          legend="Links"
          hint="Paths on this site only, starting with a slash — for example /services or /contact."
          addLabel="Add a related link"
          initial={page.related.length}
        >
          {(index) => (
            <div className="grid gap-2 md:grid-cols-[14rem_1fr]">
              <input
                name="relatedHref"
                defaultValue={page.related[index]?.href ?? ""}
                maxLength={300}
                placeholder="/services"
                className={`${inputClass} font-mono text-sm`}
              />
              <input
                name="relatedLabel"
                defaultValue={page.related[index]?.label ?? ""}
                maxLength={200}
                placeholder="Link text"
                className={inputClass}
              />
              <textarea
                name="relatedText"
                defaultValue={page.related[index]?.text ?? ""}
                rows={2}
                maxLength={600}
                placeholder="One line describing where the link goes"
                className={`${inputClass} md:col-span-2`}
              />
            </div>
          )}
        </Repeatable>
      </Card>

      <Card
        title="FAQs"
        description="Published as FAQ structured data as well as on the page, so these can appear directly in Google's results."
      >
        <Repeatable legend="Questions" addLabel="Add a question" initial={page.faqs.length}>
          {(index) => (
            <div className="grid gap-2">
              <input
                name="faqQuestion"
                defaultValue={page.faqs[index]?.question ?? ""}
                maxLength={400}
                placeholder="A question someone actually types"
                className={`${inputClass} font-semibold`}
              />
              <textarea
                name="faqAnswer"
                defaultValue={page.faqs[index]?.answer ?? ""}
                rows={4}
                maxLength={3000}
                placeholder="A direct answer, ideally in the first sentence"
                className={inputClass}
              />
            </div>
          )}
        </Repeatable>
      </Card>

      <SaveBar isCustomised={isCustomised} />
    </form>
  );
}

/** Split out so `useFormStatus` can read the enclosing form's pending state. */
function SaveBar({ isCustomised }: { isCustomised: boolean }) {
  const { pending } = useFormStatus();
  return (
    <div className="sticky bottom-0 z-10 -mx-4 flex flex-wrap items-center gap-3 border-t border-primary-blue/12 bg-white/95 px-4 py-4 backdrop-blur lg:-mx-8 lg:px-8">
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-deep-navy px-6 py-3 text-sm font-semibold text-white hover:bg-primary-blue disabled:opacity-60"
      >
        {pending ? "Saving…" : "Save and publish"}
      </button>
      <p className="text-sm text-dark-text/60">Changes go live on this page as soon as you save.</p>
      {isCustomised && (
        <button
          type="submit"
          /*
            Posts the same form to a different action, so the revert control does
            not need a nested form — which HTML does not allow. `formNoValidate`
            because reverting must work even while a required field is empty.
          */
          formAction={resetLandingPage}
          formNoValidate
          onClick={(event) => {
            if (!window.confirm("Discard the CMS version and go back to this page's original wording?")) {
              event.preventDefault();
            }
          }}
          className="ml-auto inline-flex items-center gap-2 rounded-full border border-primary-blue/20 px-4 py-2.5 text-sm font-semibold text-deep-navy hover:bg-soft-blue"
        >
          <RotateCcw size={14} />
          Revert to original
        </button>
      )}
    </div>
  );
}
