"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db/client";
import {
  contactInquiries,
  getStartedRequests,
  mediaAssets,
  pageContent,
  products,
  seoSettings,
  siteSettings,
} from "@/lib/db/schema";
import { requireAdmin } from "@/lib/auth";
import { formString, newId } from "@/lib/utils";
import { mediaSchema, productSchema, seoSchema } from "@/lib/validation";

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

export async function upsertProduct(formData: FormData) {
  await requireAdmin();
  const parsed = productSchema.safeParse({
    id: formString(formData, "id"),
    name: formString(formData, "name"),
    slug: formString(formData, "slug"),
    logoUrl: formString(formData, "logoUrl"),
    shortDescription: formString(formData, "shortDescription"),
    fullDescription: formString(formData, "fullDescription"),
    displayOrder: formString(formData, "displayOrder"),
    isPublished: formData.get("isPublished") === "on",
    seoTitle: formString(formData, "seoTitle"),
    seoDescription: formString(formData, "seoDescription"),
    ogImage: formString(formData, "ogImage"),
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
  revalidatePath("/products");
  redirect("/admin-infobytesnepal/products");
}

export async function deleteProduct(formData: FormData) {
  await requireAdmin();
  await db.delete(products).where(eq(products.id, formString(formData, "id")));
  revalidatePath("/products");
  redirect("/admin-infobytesnepal/products");
}

export async function updatePageSection(formData: FormData) {
  await requireAdmin();
  const pageKey = formString(formData, "pageKey");
  const sectionKey = formString(formData, "sectionKey");
  const id = formString(formData, "id") || newId();
  const data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (!["pageKey", "sectionKey", "id"].includes(key) && typeof value === "string") data[key] = value.trim();
  }
  const contentJson = JSON.stringify(data);
  await db
    .insert(pageContent)
    .values({ id, pageKey, sectionKey, contentJson })
    .onConflictDoUpdate({
      target: [pageContent.pageKey, pageContent.sectionKey],
      set: { contentJson, updatedAt: new Date().toISOString() },
    });
  revalidatePath("/");
  revalidatePath(`/${pageKey}`);
  redirect("/admin-infobytesnepal/pages");
}

export async function upsertMediaAsset(formData: FormData) {
  await requireAdmin();
  const parsed = mediaSchema.safeParse({
    id: formString(formData, "id"),
    name: formString(formData, "name"),
    url: formString(formData, "url"),
    type: formString(formData, "type"),
    altText: formString(formData, "altText"),
  });
  if (!parsed.success) redirect("/admin-infobytesnepal/media?error=1");
  const data = parsed.data;
  if (data.id) {
    await db.update(mediaAssets).set({ ...data, updatedAt: new Date().toISOString() }).where(eq(mediaAssets.id, data.id));
  } else {
    await db.insert(mediaAssets).values({ id: newId(), ...data });
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
  const keys = ["companyName", "tagline", "whatsappNumber", "contactEmail", "logoUrl", "defaultOgImage"];
  for (const key of keys) {
    const value = formString(formData, key);
    await db
      .insert(siteSettings)
      .values({ id: newId(), key, value })
      .onConflictDoUpdate({ target: siteSettings.key, set: { value, updatedAt: new Date().toISOString() } });
  }
  revalidatePath("/");
  redirect("/admin-infobytesnepal/settings");
}

export async function upsertSeoSetting(formData: FormData) {
  await requireAdmin();
  const parsed = seoSchema.safeParse({
    id: formString(formData, "id"),
    route: formString(formData, "route"),
    title: formString(formData, "title"),
    description: formString(formData, "description"),
    canonical: formString(formData, "canonical"),
    robots: formString(formData, "robots"),
    ogTitle: formString(formData, "ogTitle"),
    ogDescription: formString(formData, "ogDescription"),
    ogImage: formString(formData, "ogImage"),
    schemaJson: formString(formData, "schemaJson"),
  });
  if (!parsed.success) redirect("/admin-infobytesnepal/seo?error=1");
  const data = parsed.data;
  const payload = { ...data, updatedAt: new Date().toISOString() };
  if (data.id) {
    await db.update(seoSettings).set(payload).where(eq(seoSettings.id, data.id));
  } else {
    await db.insert(seoSettings).values({ id: newId(), ...payload });
  }
  revalidatePath("/");
  redirect("/admin-infobytesnepal/seo");
}

export async function deleteSeoSetting(formData: FormData) {
  await requireAdmin();
  await db.delete(seoSettings).where(eq(seoSettings.id, formString(formData, "id")));
  revalidatePath("/");
}
