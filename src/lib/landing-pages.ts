import { cache } from "react";
import { eq } from "drizzle-orm";
import { db } from "./db/client";
import { landingPageContent, type LandingPageContentRow } from "./db/schema";
import { allSeoLandingPages, type SeoLandingPage } from "./seo-landing-pages";
import { jsonParse } from "./utils";

/**
 * Read adapter for the SEO landing pages.
 *
 * The copy for these ~38 pages was written as typed objects in
 * `seo-landing-pages.ts`, and that file is still the source of truth for a page
 * nobody has edited. What changed is that the CMS can now override any of it:
 * every read goes through this module, which merges the stored version over the
 * one in the repo.
 *
 * The merge direction matters. The repo version is the base and the database is
 * the overlay, never the reverse — so a field introduced in code later shows up
 * on pages that were edited months ago, and a database that is empty, partially
 * filled, or unreachable degrades to exactly the site that existed before this
 * table did.
 */

export type LandingPageKey = keyof typeof allSeoLandingPages;

export const landingPageKeys = Object.keys(allSeoLandingPages) as LandingPageKey[];

export function getLandingPageDefault(key: LandingPageKey): SeoLandingPage {
  return allSeoLandingPages[key];
}

/**
 * The editable half of a landing page.
 *
 * `slug` and `path` are deliberately absent: the path is the route the file
 * lives at, so letting an editor change it would produce a page that claims one
 * URL and is served from another. Renaming a URL stays a code change.
 */
export type LandingPageDraft = Omit<SeoLandingPage, "slug" | "path">;

/**
 * Genuinely non-empty: an empty array loses to the repo version rather than
 * winning and rendering a section heading with nothing under it.
 */
function isNonEmptyStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.length > 0 && value.every((item) => typeof item === "string");
}

/**
 * Reads an array of uniform string-keyed rows, or null if anything is off.
 *
 * All-or-nothing on purpose: half a `process` list is worse than the repo's
 * version of it, because a page that renders three of its five steps looks
 * finished and is not.
 */
function stringRows<K extends string>(value: unknown, keys: readonly K[]): Array<Record<K, string>> | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  const rows: Array<Record<K, string>> = [];
  for (const item of value) {
    if (!item || typeof item !== "object") return null;
    const record = item as Record<string, unknown>;
    const row = {} as Record<K, string>;
    for (const key of keys) {
      const cell = record[key];
      if (typeof cell !== "string") return null;
      row[key] = cell;
    }
    rows.push(row);
  }
  return rows;
}

/**
 * Applies a stored document over the repo version, field by field.
 *
 * Every field is shape-checked before it is allowed to win. The stored JSON is
 * written by our own form, but it is still the one input here that a bad
 * migration or a hand-edited row could make malformed, and a landing page that
 * throws while rendering is a page that returns a 500 to a crawler. Anything
 * unrecognised is dropped in favour of the repo value.
 */
export function mergeLandingPage(base: SeoLandingPage, stored: unknown): SeoLandingPage {
  if (!stored || typeof stored !== "object") return base;
  const patch = stored as Record<string, unknown>;
  const merged: SeoLandingPage = { ...base };

  for (const field of ["metaTitle", "metaDescription", "ogTitle", "ogDescription", "keyword", "heroTitle", "heroIntro"] as const) {
    const value = patch[field];
    if (typeof value === "string" && value.trim()) merged[field] = value;
  }

  const overview = patch.overview as Record<string, unknown> | undefined;
  if (overview && typeof overview === "object") {
    merged.overview = {
      title: typeof overview.title === "string" && overview.title.trim() ? overview.title : base.overview.title,
      paragraphs: isNonEmptyStringArray(overview.paragraphs) ? overview.paragraphs : base.overview.paragraphs,
    };
  }

  for (const field of ["problems", "solutions", "features", "reasons"] as const) {
    const value = patch[field];
    if (isNonEmptyStringArray(value)) merged[field] = value;
  }

  const process = stringRows(patch.process, ["title", "text"] as const);
  if (process) merged.process = process;

  const related = stringRows(patch.related, ["href", "label", "text"] as const);
  if (related) merged.related = related;

  const faqs = stringRows(patch.faqs, ["question", "answer"] as const);
  if (faqs) merged.faqs = faqs;

  return merged;
}

/**
 * Every stored override, keyed by page key.
 *
 * One query for the whole table, memoised per render pass. The table has at most
 * one small row per landing page, and a page that renders its own content also
 * needs the list for `llms.txt` and the agent endpoints — so fetching all of
 * them once is cheaper than a lookup per page and keeps every view consistent.
 */
const getOverrides = cache(async (): Promise<Map<string, LandingPageContentRow>> => {
  try {
    const rows = await db.select().from(landingPageContent);
    return new Map(rows.map((row) => [row.pageKey, row]));
  } catch {
    return new Map();
  }
});

/** One landing page, as it should be rendered right now. */
export async function getLandingPage(key: LandingPageKey): Promise<SeoLandingPage> {
  const base = allSeoLandingPages[key];
  const row = (await getOverrides()).get(key);
  if (!row) return base;
  return mergeLandingPage(base, jsonParse<unknown>(row.contentJson, null));
}

/** Every landing page, merged. Used by llms.txt and the agent endpoints. */
export async function getLandingPageList(): Promise<SeoLandingPage[]> {
  const overrides = await getOverrides();
  return landingPageKeys.map((key) => {
    const row = overrides.get(key);
    return row ? mergeLandingPage(allSeoLandingPages[key], jsonParse<unknown>(row.contentJson, null)) : allSeoLandingPages[key];
  });
}

export async function getLandingPageByPath(path: string): Promise<SeoLandingPage | null> {
  const key = landingPageKeys.find((candidate) => allSeoLandingPages[candidate].path === path);
  return key ? getLandingPage(key) : null;
}

export function isLandingPageKey(value: string): value is LandingPageKey {
  return (landingPageKeys as string[]).includes(value);
}

/** Admin list: the repo version plus who last edited it, if anyone. */
export async function getLandingPageIndex() {
  const overrides = await getOverrides();
  return landingPageKeys.map((key) => {
    const base = allSeoLandingPages[key];
    const row = overrides.get(key);
    return {
      key,
      path: base.path,
      keyword: base.keyword,
      title: row ? mergeLandingPage(base, jsonParse<unknown>(row.contentJson, null)).heroTitle : base.heroTitle,
      isCustomised: Boolean(row),
      updatedAt: row?.updatedAt ?? null,
      updatedBy: row?.updatedBy ?? null,
    };
  });
}

/** The row behind a page, for the editor. Null when it has never been edited. */
export async function getLandingPageRow(key: LandingPageKey): Promise<LandingPageContentRow | null> {
  try {
    const [row] = await db.select().from(landingPageContent).where(eq(landingPageContent.pageKey, key)).limit(1);
    return row ?? null;
  } catch {
    return null;
  }
}
