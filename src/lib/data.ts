import { cache } from "react";
import { and, asc, desc, eq, like, or } from "drizzle-orm";
import { db } from "./db/client";
import {
  contactInquiries,
  getStartedRequests,
  mediaAssets,
  pageContent,
  products,
  seoSettings,
  siteSettings,
  type ContactInquiry,
  type GetStartedRequest,
  type MediaAsset,
  type Product,
  type SeoSetting,
} from "./db/schema";
import { productSeeds, siteDefaults } from "./content";
import { jsonParse } from "./utils";

export const getProducts = cache(async (includeUnpublished = false): Promise<Product[]> => {
  try {
    const rows = await db
      .select()
      .from(products)
      .where(includeUnpublished ? undefined : eq(products.isPublished, true))
      .orderBy(asc(products.displayOrder), asc(products.name));
    return rows.length ? rows : productSeeds.map((item, index) => ({
      ...item,
      id: item.slug,
      isPublished: true,
      seoTitle: item.name,
      seoDescription: item.shortDescription,
      ogImage: "",
      createdAt: "",
      updatedAt: "",
      displayOrder: index + 1,
    }));
  } catch {
    return productSeeds.map((item, index) => ({
      ...item,
      id: item.slug,
      isPublished: true,
      seoTitle: item.name,
      seoDescription: item.shortDescription,
      ogImage: "",
      createdAt: "",
      updatedAt: "",
      displayOrder: index + 1,
    }));
  }
});

export const getProductBySlug = cache(async (slug: string, includeUnpublished = false) => {
  try {
    const where = includeUnpublished
      ? eq(products.slug, slug)
      : and(eq(products.slug, slug), eq(products.isPublished, true));
    const [product] = await db.select().from(products).where(where).limit(1);
    return product || null;
  } catch {
    const fallback = productSeeds.find((product) => product.slug === slug);
    return fallback
      ? {
          ...fallback,
          id: fallback.slug,
          isPublished: true,
          seoTitle: fallback.name,
          seoDescription: fallback.shortDescription,
          ogImage: "",
          createdAt: "",
          updatedAt: "",
        }
      : null;
  }
});

export async function getSettings() {
  try {
    const rows = await db.select().from(siteSettings);
    return rows.reduce(
      (settings, row) => ({ ...settings, [row.key]: row.value }),
      siteDefaults,
    );
  } catch {
    return siteDefaults;
  }
}

export async function getPageSection<T>(pageKey: string, sectionKey: string, fallback: T): Promise<T> {
  try {
    const [row] = await db
      .select()
      .from(pageContent)
      .where(and(eq(pageContent.pageKey, pageKey), eq(pageContent.sectionKey, sectionKey)))
      .limit(1);
    const parsed = jsonParse(row?.contentJson, fallback);
    if (
      fallback &&
      parsed &&
      typeof fallback === "object" &&
      typeof parsed === "object" &&
      !Array.isArray(fallback) &&
      !Array.isArray(parsed)
    ) {
      return { ...fallback, ...parsed };
    }
    return parsed;
  } catch {
    return fallback;
  }
}

export async function getSeo(route: string): Promise<SeoSetting | null> {
  try {
    const [row] = await db.select().from(seoSettings).where(eq(seoSettings.route, route)).limit(1);
    return row || null;
  } catch {
    return null;
  }
}

export async function getAllSeo() {
  try {
    return await db.select().from(seoSettings).orderBy(asc(seoSettings.route));
  } catch {
    return [];
  }
}

export async function getMediaAssets(): Promise<MediaAsset[]> {
  try {
    return await db.select().from(mediaAssets).orderBy(desc(mediaAssets.createdAt));
  } catch {
    return [];
  }
}

export async function getInquiryStats() {
  try {
    const inquiries = await db.select().from(contactInquiries).orderBy(desc(contactInquiries.createdAt));
    const requests = await db.select().from(getStartedRequests).orderBy(desc(getStartedRequests.createdAt));
    return {
      inquiries,
      requests,
      unreadInquiries: inquiries.filter((item) => !item.isRead).length,
      unreadRequests: requests.filter((item) => !item.isRead).length,
    };
  } catch {
    return { inquiries: [], requests: [], unreadInquiries: 0, unreadRequests: 0 };
  }
}

export async function searchContactInquiries(filter?: string, query?: string): Promise<ContactInquiry[]> {
  try {
    const conditions = [];
    if (filter === "read") conditions.push(eq(contactInquiries.isRead, true));
    if (filter === "unread") conditions.push(eq(contactInquiries.isRead, false));
    if (query) {
      const q = `%${query}%`;
      conditions.push(
        or(
          like(contactInquiries.name, q),
          like(contactInquiries.organizationName, q),
          like(contactInquiries.contactNumber, q),
          like(contactInquiries.email, q),
        ),
      );
    }
    return await db
      .select()
      .from(contactInquiries)
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(desc(contactInquiries.createdAt));
  } catch {
    return [];
  }
}

export async function searchGetStartedRequests(
  filter?: string,
  product?: string,
  query?: string,
): Promise<GetStartedRequest[]> {
  try {
    const conditions = [];
    if (filter === "read") conditions.push(eq(getStartedRequests.isRead, true));
    if (filter === "unread") conditions.push(eq(getStartedRequests.isRead, false));
    if (product) conditions.push(eq(getStartedRequests.productInterest, product));
    if (query) {
      const q = `%${query}%`;
      conditions.push(
        or(
          like(getStartedRequests.name, q),
          like(getStartedRequests.organizationName, q),
          like(getStartedRequests.contactNumber, q),
          like(getStartedRequests.email, q),
        ),
      );
    }
    return await db
      .select()
      .from(getStartedRequests)
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(desc(getStartedRequests.createdAt));
  } catch {
    return [];
  }
}
