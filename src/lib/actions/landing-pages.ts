"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { landingPageContent } from "@/lib/db/schema";
import { requireContentAccess } from "@/lib/auth";
import { getLandingPageDefault, isLandingPageKey, type LandingPageKey } from "@/lib/landing-pages";
import { formString, newId } from "@/lib/utils";
import { landingPageSchema } from "@/lib/validation";

const adminLanding = "/admin-infobytesnepal/landing-pages";

/**
 * Everything that carries a landing page's copy.
 *
 * The page itself is the obvious one. The other three are the machine-readable
 * copies of it, all of which are statically generated and would otherwise keep
 * serving the previous wording for up to a day: `llms.txt` lists every page by
 * its keyword, `/api/v1/pages` lists titles and meta descriptions, and the
 * `Accept: text/markdown` rendering is the whole page body again in another
 * format. Editing copy for search and leaving the agent-facing copies stale
 * would defeat the point of the edit.
 */
function revalidateLandingPage(path: string) {
  revalidatePath(path);
  revalidatePath("/llms.txt");
  revalidatePath("/api/v1/pages");
  revalidatePath("/api/markdown/[[...path]]", "page");
}

/** Splits a textarea into one trimmed item per line, dropping blank lines. */
function lines(formData: FormData, field: string) {
  return String(formData.get(field) ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Zips parallel `getAll` results into rows.
 *
 * Repeatable groups submit as several same-named fields — `processTitle` and
 * `processText` — which arrive in DOM order, so index `n` of one lines up with
 * index `n` of the other. That avoids numbering the field names, which would
 * mean renumbering every later row in the browser each time one is deleted.
 * A row with every column blank is dropped rather than rejected: it is what an
 * "Add row" click that was thought better of leaves behind.
 */
function rows<K extends string>(formData: FormData, fields: Record<K, string>): Array<Record<K, string>> {
  const keys = Object.keys(fields) as K[];
  const columns = keys.map((key) => formData.getAll(fields[key]).map((value) => String(value).trim()));
  const length = Math.max(0, ...columns.map((column) => column.length));

  const result: Array<Record<K, string>> = [];
  for (let index = 0; index < length; index += 1) {
    const row = {} as Record<K, string>;
    keys.forEach((key, column) => {
      row[key] = columns[column][index] ?? "";
    });
    if (keys.some((key) => row[key])) result.push(row);
  }
  return result;
}

function fail(key: string, message: string): never {
  redirect(`${adminLanding}/${key}?error=${encodeURIComponent(message)}`);
}

export async function saveLandingPage(formData: FormData) {
  const session = await requireContentAccess();

  const key = formString(formData, "pageKey");
  if (!isLandingPageKey(key)) redirect(adminLanding);

  const parsed = landingPageSchema.safeParse({
    metaTitle: formString(formData, "metaTitle"),
    metaDescription: formString(formData, "metaDescription"),
    ogTitle: formString(formData, "ogTitle"),
    ogDescription: formString(formData, "ogDescription"),
    keyword: formString(formData, "keyword"),
    heroTitle: formString(formData, "heroTitle"),
    heroIntro: formString(formData, "heroIntro"),
    overview: {
      title: formString(formData, "overviewTitle"),
      paragraphs: formData
        .getAll("overviewParagraph")
        .map((value) => String(value).trim())
        .filter(Boolean),
    },
    problems: lines(formData, "problems"),
    solutions: lines(formData, "solutions"),
    features: lines(formData, "features"),
    reasons: lines(formData, "reasons"),
    process: rows(formData, { title: "processTitle", text: "processText" }),
    related: rows(formData, { href: "relatedHref", label: "relatedLabel", text: "relatedText" }),
    faqs: rows(formData, { question: "faqQuestion", answer: "faqAnswer" }),
  });

  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    const where = issue?.path?.length ? `${issue.path.join(" → ")}: ` : "";
    fail(key, `${where}${issue?.message ?? "Some fields need attention."}`);
  }

  const now = new Date().toISOString();
  const contentJson = JSON.stringify(parsed.data);

  await db
    .insert(landingPageContent)
    .values({ id: newId(), pageKey: key, contentJson, updatedBy: session.email, createdAt: now, updatedAt: now })
    .onConflictDoUpdate({
      target: landingPageContent.pageKey,
      set: { contentJson, updatedBy: session.email, updatedAt: now },
    });

  revalidateLandingPage(getLandingPageDefault(key as LandingPageKey).path);
  redirect(`${adminLanding}/${key}?saved=1`);
}

/**
 * Discards the CMS version and goes back to the copy in the repo.
 *
 * Deleting the row rather than writing the defaults into it: the page then has
 * no override at all, so it keeps tracking the repo version if a developer
 * changes it later, instead of being frozen at whatever the defaults said on
 * the day someone clicked this.
 */
export async function resetLandingPage(formData: FormData) {
  await requireContentAccess();
  const key = formString(formData, "pageKey");
  if (!isLandingPageKey(key)) redirect(adminLanding);

  await db.delete(landingPageContent).where(eq(landingPageContent.pageKey, key));
  revalidateLandingPage(getLandingPageDefault(key as LandingPageKey).path);
  redirect(`${adminLanding}/${key}?reset=1`);
}
