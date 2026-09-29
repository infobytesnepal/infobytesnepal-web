"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { and, eq, inArray, ne } from "drizzle-orm";
import { db } from "@/lib/db/client";
import {
  contactInquiries,
  getStartedRequests,
  jobApplications,
  mediaAssets,
  pageContent,
  products,
  serviceInquiries,
  siteSettings,
} from "@/lib/db/schema";
import { requireAdmin } from "@/lib/auth";
import { failed, firstIssue, ok, type ActionResult } from "@/lib/action-result";
import { formFile, getMediaUsage, imageProblem, replaceAsset, storeUploadedImage } from "@/lib/media";
import { formString, newId } from "@/lib/utils";
import { productSchema } from "@/lib/validation";

/**
 * Invalidate every public page.
 *
 * The footer is rendered by the public layout, and it reads site settings, the
 * product list, and its own CMS section. That means a settings edit or a
 * product change is visible on all ~50 public pages, not just the one the
 * editor was thinking about. `revalidatePath("/")` only invalidates the home
 * page, so on its own it left the rest of the site serving the old footer until
 * the layout's timer expired.
 *
 * The `"layout"` type invalidates the segment and everything beneath it, which
 * is what makes the timers a safety net rather than the propagation mechanism.
 * The route handlers are listed separately because they sit outside the public
 * layout but still read the product list or the CMS sections: the sitemap,
 * llms.txt, the content API endpoints under /api/v1, and the markdown renderings
 * agents get from `Accept: text/markdown`. An agent reading a stale product list
 * is the same bug as a visitor seeing a stale footer.
 */
function revalidatePublicSite() {
  revalidatePath("/", "layout");
  revalidatePath("/sitemap.xml");
  revalidatePath("/llms.txt");
  revalidatePath("/api/v1/company");
  revalidatePath("/api/v1/products");
  revalidatePath("/api/v1/products/[slug]", "page");
  revalidatePath("/api/markdown/[[...path]]", "page");
}

/**
 * Which public paths actually render a given CMS page key.
 *
 * `revalidatePublicSite()` above is the right hammer for a product or settings
 * change, because the footer puts that data on every page. It is the wrong one
 * for a page section: editing the home hero was rebuilding all ~60 public pages
 * to change one of them, and every rebuilt page is an ISR write.
 *
 * Two entries are less obvious than they look:
 *
 * - `about` lists `/` as well, because the home page renders
 *   `getPageSection("about", "section2")` alongside its own sections.
 * - the `/api/markdown/...` paths are only listed where that page's markdown
 *   rendering actually reads CMS content. `renderHome` reads the product list
 *   rather than the home sections, so `home` does not need one.
 *
 * An unmapped key — `footer`, or anything added later — falls through to the
 * full invalidation. That default is deliberate: forgetting to add a key here
 * makes a save slower than it needs to be, never staler than it should be.
 */
const pageKeyPaths: Record<string, string[]> = {
  home: ["/"],
  about: ["/", "/about", "/api/markdown/about"],
  contact: ["/contact"],
  "privacy-policy": ["/privacy-policy", "/api/markdown/privacy-policy"],
};

function revalidatePageSection(pageKey: string) {
  const paths = pageKeyPaths[pageKey];
  if (!paths) {
    revalidatePublicSite();
    return;
  }
  for (const path of paths) revalidatePath(path);
}

export async function markContactRead(formData: FormData) {
  await requireAdmin();
  const id = formString(formData, "id");
  await db.update(contactInquiries).set({ isRead: true }).where(eq(contactInquiries.id, id));
  revalidatePath("/admin-infobytesnepal/inquiries");
}

export async function markAllContactsRead() {
  await requireAdmin();
  await db.update(contactInquiries).set({ isRead: true });
  revalidatePath("/admin-infobytesnepal/inquiries");
}

export async function deleteContactInquiry(formData: FormData) {
  await requireAdmin();
  await db.delete(contactInquiries).where(eq(contactInquiries.id, formString(formData, "id")));
  revalidatePath("/admin-infobytesnepal/inquiries");
}

export async function markRequestRead(formData: FormData) {
  await requireAdmin();
  await db.update(getStartedRequests).set({ isRead: true }).where(eq(getStartedRequests.id, formString(formData, "id")));
  revalidatePath("/admin-infobytesnepal/requests");
}

export async function markAllRequestsRead() {
  await requireAdmin();
  await db.update(getStartedRequests).set({ isRead: true });
  revalidatePath("/admin-infobytesnepal/requests");
}

export async function markServiceInquiryRead(formData: FormData) {
  await requireAdmin();
  await db.update(serviceInquiries).set({ isRead: true }).where(eq(serviceInquiries.id, formString(formData, "id")));
  revalidatePath("/admin-infobytesnepal/service-inquiries");
}

export async function markAllServiceInquiriesRead() {
  await requireAdmin();
  await db.update(serviceInquiries).set({ isRead: true });
  revalidatePath("/admin-infobytesnepal/service-inquiries");
}

export async function deleteServiceInquiry(formData: FormData) {
  await requireAdmin();
  await db.delete(serviceInquiries).where(eq(serviceInquiries.id, formString(formData, "id")));
  revalidatePath("/admin-infobytesnepal/service-inquiries");
}

/** "ClinicNP" or "Clinic NP" -> "clinicnp" / "clinic-np". */
function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

const productLabels: Record<string, string> = {
  name: "Product name",
  slug: "Slug",
  logoUrl: "Product logo",
  shortDescription: "Short description",
  fullDescription: "Full description",
  displayOrder: "Display order",
  seoTitle: "SEO title",
  seoDescription: "SEO description",
};

/**
 * Creates or updates a product.
 *
 * Rebuilt after a ClinicNP create failed in production with no visible reason.
 * What happened, in order: the logo was stored, then validation rejected the
 * form, then the action redirected to `?error=1`, which the page never read. The
 * author saw the page reload with their typing gone, and the database kept the
 * logo as an orphan (it is still there, dated 2026-09-28 10:18). The two inputs
 * that reject most easily were the slug — anything with a capital letter, so
 * "ClinicNP" — and a full description over what was then a 5,000 character cap.
 *
 * Now: the slug is derived and normalised rather than rejected, the cap fits a
 * real product write-up, every field is checked before any image is stored, a
 * duplicate slug is a message instead of a constraint violation, and the outcome
 * is returned to the form so it can say what happened.
 */
export async function upsertProduct(formData: FormData): Promise<ActionResult> {
  await requireAdmin();
  const id = formString(formData, "id");
  const name = formString(formData, "name");
  const slug = slugify(formString(formData, "slug") || name);
  const logoFile = formFile(formData, "logoFile");
  const ogFile = formFile(formData, "ogImageFile");
  const currentLogo = formString(formData, "logoUrl");

  const fileProblem = imageProblem(logoFile) ?? imageProblem(ogFile);
  if (fileProblem) return failed(fileProblem);

  const parsed = productSchema.safeParse({
    id,
    name,
    slug,
    // A chosen file is as good as a stored URL for validation. Nothing is
    // written until every field has passed.
    logoUrl: logoFile ? "pending-upload" : currentLogo,
    shortDescription: formString(formData, "shortDescription"),
    fullDescription: formString(formData, "fullDescription"),
    displayOrder: formString(formData, "displayOrder") || 0,
    isPublished: formData.get("isPublished") === "on",
    seoTitle: formString(formData, "seoTitle"),
    seoDescription: formString(formData, "seoDescription"),
    ogImage: formString(formData, "ogImage"),
  });
  if (!parsed.success) return failed(firstIssue(parsed.error.issues, productLabels));
  const data = parsed.data;

  const [clash] = await db
    .select({ id: products.id, name: products.name })
    .from(products)
    .where(data.id ? and(eq(products.slug, data.slug), ne(products.id, data.id)) : eq(products.slug, data.slug))
    .limit(1);
  if (clash) return failed(`Slug: "${data.slug}" is already used by ${clash.name}. Choose a different one.`);

  let logoUrl = currentLogo;
  let ogImage = data.ogImage;
  try {
    logoUrl = await storeUploadedImage(logoFile, currentLogo, `${data.name} logo`, `${data.name} logo`);
    ogImage = await storeUploadedImage(ogFile, data.ogImage, `${data.name} share image`, data.name);
  } catch (error) {
    return failed(error instanceof Error ? error.message : "The image could not be stored.");
  }

  const payload = {
    name: data.name,
    slug: data.slug,
    logoUrl,
    shortDescription: data.shortDescription,
    fullDescription: data.fullDescription,
    displayOrder: data.displayOrder,
    isPublished: data.isPublished,
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    ogImage,
    updatedAt: new Date().toISOString(),
  };

  if (data.id) {
    await db.update(products).set(payload).where(eq(products.id, data.id));
  } else {
    await db.insert(products).values({ id: newId(), ...payload });
  }
  revalidatePublicSite();
  return ok(
    data.id
      ? `Saved. /products/${data.slug} is updated.`
      : `${data.name} created at /products/${data.slug}${data.isPublished ? "" : " (unpublished)"}.`,
  );
}

export async function deleteProduct(formData: FormData) {
  await requireAdmin();
  await db.delete(products).where(eq(products.id, formString(formData, "id")));
  revalidatePublicSite();
  redirect("/admin-infobytesnepal/products");
}

export async function updatePageSection(formData: FormData): Promise<ActionResult> {
  await requireAdmin();
  const pageKey = formString(formData, "pageKey");
  const sectionKey = formString(formData, "sectionKey");
  const id = formString(formData, "id") || newId();

  const files: Array<{ key: string; file: File }> = [];
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (["pageKey", "sectionKey", "id"].includes(key)) continue;
    if (key.endsWith("File")) {
      const file = formFile(formData, key);
      if (file) files.push({ key, file });
    } else if (typeof value === "string") {
      data[key] = value.trim();
    }
  }

  // Check every file before storing any of them, so a bad fifth logo does not
  // leave the first four stored and unreferenced.
  for (const { file } of files) {
    const problem = imageProblem(file);
    if (problem) return failed(problem);
  }
  try {
    for (const { key, file } of files) {
      const targetKey = key.slice(0, -"File".length);
      data[targetKey] = await storeUploadedImage(file, data[targetKey] || "", `${pageKey} ${sectionKey} ${targetKey}`, data.title || targetKey);
    }
  } catch (error) {
    return failed(error instanceof Error ? error.message : "The image could not be stored.");
  }

  const contentJson = JSON.stringify(data);
  await db
    .insert(pageContent)
    .values({ id, pageKey, sectionKey, contentJson })
    .onConflictDoUpdate({
      target: [pageContent.pageKey, pageContent.sectionKey],
      set: { contentJson, updatedAt: new Date().toISOString() },
    });
  revalidatePageSection(pageKey);
  return ok("Section saved.");
}

/**
 * Adds an image to the library, or replaces one.
 *
 * Replacing stores the new image under a new id and repoints everything that
 * used the old one (see `replaceAsset`), because overwriting the bytes behind
 * an unchanged URL left every cache serving the old image for up to a month.
 * The old action also skipped the type and size checks on replace entirely.
 */
export async function upsertMediaAsset(formData: FormData): Promise<ActionResult> {
  await requireAdmin();
  const id = formString(formData, "id");
  const name = formString(formData, "name");
  const altText = formString(formData, "altText");
  const file = formFile(formData, "file");

  if (!name) return failed("Asset name: required.");
  if (!id && !file) return failed("Choose an image to upload.");
  const problem = imageProblem(file);
  if (problem) return failed(problem);

  if (!id) {
    await storeUploadedImage(file, "", name, altText);
    revalidatePath("/admin-infobytesnepal/media");
    return ok(`"${name}" added to the library.`);
  }

  const [existing] = await db.select({ id: mediaAssets.id }).from(mediaAssets).where(eq(mediaAssets.id, id)).limit(1);
  if (!existing) return failed("That asset no longer exists. Refresh the page.");

  if (!file) {
    await db.update(mediaAssets).set({ name, altText, updatedAt: new Date().toISOString() }).where(eq(mediaAssets.id, id));
    revalidatePath("/admin-infobytesnepal/media");
    return ok("Name and alt text saved.");
  }

  const replaced = await replaceAsset(id, file, name, altText);
  if (replaced.touched.length) {
    revalidatePublicSite();
    revalidatePath("/blog/[slug]", "page");
    revalidatePath("/api/v1/blog/[slug]", "page");
  }
  revalidatePath("/admin-infobytesnepal/media");
  return ok(
    replaced.touched.length
      ? `Image replaced, and every page using it now points at the new one (${replaced.touched.join(", ")}).`
      : "Image replaced. It is not used on any page yet.",
  );
}

/**
 * Deletes an asset — but only one nothing uses.
 *
 * The old version deleted whatever it was given, so removing an image a live
 * page pointed at left a broken image on the website with nothing to say why.
 */
export async function deleteMediaAsset(formData: FormData): Promise<ActionResult> {
  await requireAdmin();
  const id = formString(formData, "id").toLowerCase();
  const usedBy = (await getMediaUsage()).get(id);
  if (usedBy?.length) {
    return failed(`Still in use by ${usedBy.join("; ")}. Replace or remove it there first.`);
  }
  await db.delete(mediaAssets).where(eq(mediaAssets.id, id));
  revalidatePath("/admin-infobytesnepal/media");
  return ok("Deleted.");
}

/**
 * Deletes every asset nothing references.
 *
 * These are almost all the leftovers of saves that stored an image and then
 * failed — 41 of the 80 rows when this was written, most of them 1.5–2.5 MB
 * blog covers uploaded two or three times over.
 */
export async function deleteUnusedMedia(): Promise<ActionResult> {
  await requireAdmin();
  const usage = await getMediaUsage();
  const rows = await db.select({ id: mediaAssets.id }).from(mediaAssets);
  const unused = rows.filter((row) => !usage.has(row.id.toLowerCase())).map((row) => row.id);
  if (!unused.length) return ok("Nothing to clean up — every image is in use.");
  await db.delete(mediaAssets).where(inArray(mediaAssets.id, unused));
  revalidatePath("/admin-infobytesnepal/media");
  return ok(`Deleted ${unused.length} unused image${unused.length === 1 ? "" : "s"}.`);
}

export async function updateSiteSettings(formData: FormData): Promise<ActionResult> {
  await requireAdmin();
  const logoFile = formFile(formData, "logoUrlFile");
  const ogFile = formFile(formData, "defaultOgImageFile");
  const problem = imageProblem(logoFile) ?? imageProblem(ogFile);
  if (problem) return failed(problem);

  const contactEmail = formString(formData, "contactEmail");
  if (contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) return failed("Contact email: enter a valid address.");

  let values: Record<string, string>;
  try {
    values = {
      companyName: formString(formData, "companyName"),
      tagline: formString(formData, "tagline"),
      whatsappNumber: formString(formData, "whatsappNumber"),
      contactEmail,
      logoUrl: await storeUploadedImage(logoFile, formString(formData, "logoUrl"), "Site logo", "Infobytes Nepal logo"),
      defaultOgImage: await storeUploadedImage(ogFile, formString(formData, "defaultOgImage"), "Default OG image", "Infobytes Nepal"),
    };
  } catch (error) {
    return failed(error instanceof Error ? error.message : "The image could not be stored.");
  }
  for (const [key, value] of Object.entries(values)) {
    await db
      .insert(siteSettings)
      .values({ id: newId(), key, value })
      .onConflictDoUpdate({ target: siteSettings.key, set: { value, updatedAt: new Date().toISOString() } });
  }
  revalidatePublicSite();
  return ok("Settings saved. Every page picks up the change on its next request.");
}

export async function markJobApplicationRead(formData: FormData) {
  await requireAdmin();
  const id = formString(formData, "id");
  if (!id) return;
  await db.update(jobApplications).set({ isRead: true, updatedAt: new Date().toISOString() }).where(eq(jobApplications.id, id));
  revalidatePath("/admin-infobytesnepal/applications");
  revalidatePath("/admin-infobytesnepal");
}

export async function deleteJobApplication(formData: FormData) {
  await requireAdmin();
  const id = formString(formData, "id");
  if (!id) return;
  await db.delete(jobApplications).where(eq(jobApplications.id, id));
  revalidatePath("/admin-infobytesnepal/applications");
  revalidatePath("/admin-infobytesnepal");
}
