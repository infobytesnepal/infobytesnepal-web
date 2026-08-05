"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
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
import { formString, newId } from "@/lib/utils";
import { productSchema } from "@/lib/validation";

const maxImageBytes = 1_500_000;

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

function formFile(formData: FormData, key: string) {
  const value = formData.get(key);
  if (!value || typeof value === "string" || !("arrayBuffer" in value)) return null;
  return value as File;
}

async function storeUploadedImage(file: File | null, fallbackUrl: string, name: string, altText = "") {
  if (!file || file.size === 0) return fallbackUrl;
  if (!file.type.startsWith("image/")) throw new Error("Only image uploads are supported.");
  if (file.size > maxImageBytes) throw new Error("Image uploads must be 1.5MB or smaller.");

  const id = newId();
  const bytes = Buffer.from(await file.arrayBuffer());
  const url = `data:${file.type};base64,${bytes.toString("base64")}`;
  const now = new Date().toISOString();

  await db.insert(mediaAssets).values({
    id,
    name: name || file.name || "Uploaded image",
    url,
    type: file.type,
    altText,
    createdAt: now,
    updatedAt: now,
  });

  return url;
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

export async function upsertProduct(formData: FormData) {
  await requireAdmin();
  const name = formString(formData, "name");
  const logoUrl = await storeUploadedImage(
    formFile(formData, "logoFile"),
    formString(formData, "logoUrl"),
    `${name || "Product"} logo`,
    `${name || "Product"} logo`,
  );
  const ogImage = await storeUploadedImage(
    formFile(formData, "ogImageFile"),
    formString(formData, "ogImage"),
    `${name || "Product"} OG image`,
    name,
  );
  const parsed = productSchema.safeParse({
    id: formString(formData, "id"),
    name,
    slug: formString(formData, "slug"),
    logoUrl,
    shortDescription: formString(formData, "shortDescription"),
    fullDescription: formString(formData, "fullDescription"),
    displayOrder: formString(formData, "displayOrder"),
    isPublished: formData.get("isPublished") === "on",
    seoTitle: formString(formData, "seoTitle"),
    seoDescription: formString(formData, "seoDescription"),
    ogImage,
  });
  if (!parsed.success) redirect("/admin-infobytesnepal/products?error=1");

  const data = parsed.data;
  const payload = {
    name: data.name,
    slug: data.slug,
    logoUrl: data.logoUrl,
    shortDescription: data.shortDescription,
    fullDescription: data.fullDescription,
    displayOrder: data.displayOrder,
    isPublished: data.isPublished,
    seoTitle: data.seoTitle,
    seoDescription: data.seoDescription,
    ogImage: data.ogImage,
    updatedAt: new Date().toISOString(),
  };

  if (data.id) {
    await db.update(products).set(payload).where(eq(products.id, data.id));
  } else {
    await db.insert(products).values({ id: newId(), ...payload });
  }
  revalidatePublicSite();
  redirect("/admin-infobytesnepal/products");
}

export async function deleteProduct(formData: FormData) {
  await requireAdmin();
  await db.delete(products).where(eq(products.id, formString(formData, "id")));
  revalidatePublicSite();
  redirect("/admin-infobytesnepal/products");
}

export async function updatePageSection(formData: FormData) {
  await requireAdmin();
  const pageKey = formString(formData, "pageKey");
  const sectionKey = formString(formData, "sectionKey");
  const id = formString(formData, "id") || newId();
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (!["pageKey", "sectionKey", "id"].includes(key) && typeof value === "string" && !key.endsWith("File")) data[key] = value.trim();
  }
  for (const [key] of formData.entries()) {
    if (!key.endsWith("File")) continue;
    const targetKey = key.slice(0, -"File".length);
    data[targetKey] = await storeUploadedImage(
      formFile(formData, key),
      data[targetKey] || "",
      `${pageKey} ${sectionKey} ${targetKey}`,
      data.title || targetKey,
    );
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
  redirect("/admin-infobytesnepal/pages");
}

export async function upsertMediaAsset(formData: FormData) {
  await requireAdmin();
  const id = formString(formData, "id");
  const name = formString(formData, "name");
  const altText = formString(formData, "altText");
  const file = formFile(formData, "file");
  if (!name || (!id && (!file || file.size === 0))) redirect("/admin-infobytesnepal/media?error=1");

  if (id) {
    const [existing] = await db.select().from(mediaAssets).where(eq(mediaAssets.id, id)).limit(1);
    if (!existing) redirect("/admin-infobytesnepal/media?error=1");
    const url = await storeUploadedImage(file, existing.url, name, altText);
    await db.update(mediaAssets).set({
      name,
      url,
      type: file && file.size > 0 ? file.type : existing.type,
      altText,
      updatedAt: new Date().toISOString(),
    }).where(eq(mediaAssets.id, id));
  } else {
    await storeUploadedImage(file, "", name, altText);
  }
  revalidatePath("/admin-infobytesnepal/media");
  redirect("/admin-infobytesnepal/media");
}

export async function deleteMediaAsset(formData: FormData) {
  await requireAdmin();
  await db.delete(mediaAssets).where(eq(mediaAssets.id, formString(formData, "id")));
  revalidatePath("/admin-infobytesnepal/media");
}

export async function updateSiteSettings(formData: FormData) {
  await requireAdmin();
  const values: Record<string, string> = {
    companyName: formString(formData, "companyName"),
    tagline: formString(formData, "tagline"),
    whatsappNumber: formString(formData, "whatsappNumber"),
    contactEmail: formString(formData, "contactEmail"),
    logoUrl: await storeUploadedImage(formFile(formData, "logoUrlFile"), formString(formData, "logoUrl"), "Site logo", "Infobytes Nepal logo"),
    defaultOgImage: await storeUploadedImage(formFile(formData, "defaultOgImageFile"), formString(formData, "defaultOgImage"), "Default OG image", "Infobytes Nepal"),
  };
  for (const [key, value] of Object.entries(values)) {
    await db
      .insert(siteSettings)
      .values({ id: newId(), key, value })
      .onConflictDoUpdate({ target: siteSettings.key, set: { value, updatedAt: new Date().toISOString() } });
  }
  revalidatePublicSite();
  redirect("/admin-infobytesnepal/settings");
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
