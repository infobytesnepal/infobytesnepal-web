import { cache } from "react";
import { and, asc, desc, eq, like, or } from "drizzle-orm";
import { db } from "./db/client";
import {
  contactInquiries,
  getStartedRequests,
  jobApplications,
  mediaAssets,
  pageContent,
  products,
  seoSettings,
  serviceInquiries,
  siteSettings,
  type ContactInquiry,
  type GetStartedRequest,
  type JobApplication,
  type MediaAsset,
  type Product,
  type SeoSetting,
  type ServiceInquiry,
} from "./db/schema";
import { productSeeds, productSeoDefaults, siteDefaults } from "./content";
import { jsonParse } from "./utils";

function seededProduct(slug: string) {
  const fallback = productSeeds.find((product) => product.slug === slug);
  if (!fallback) return null;
  const seo = productSeoDefaults[fallback.slug];
  return {
    ...fallback,
    id: fallback.slug,
    isPublished: true,
    seoTitle: seo?.title || `${fallback.name} | Infobytes Nepal`,
    seoDescription: seo?.description || fallback.shortDescription,
    ogImage: "",
    createdAt: "",
    updatedAt: "",
  };
}

function seededProductList(): Product[] {
  return productSeeds.map((item, index) => ({
    ...seededProduct(item.slug)!,
    displayOrder: index + 1,
  }));
}

export const getProducts = cache(async (includeUnpublished = false): Promise<Product[]> => {
  try {
    const rows = await db
      .select()
      .from(products)
      .where(includeUnpublished ? undefined : eq(products.isPublished, true))
      .orderBy(asc(products.displayOrder), asc(products.name));
    return rows.length ? rows : seededProductList();
  } catch {
    return seededProductList();
  }
});

export const getProductBySlug = cache(async (slug: string, includeUnpublished = false) => {
  try {
    const where = includeUnpublished
      ? eq(products.slug, slug)
      : and(eq(products.slug, slug), eq(products.isPublished, true));
    const [product] = await db.select().from(products).where(where).limit(1);
    // Fall back to the seed when the row is missing, not only when the query
    // throws. Otherwise an unseeded table lists products on /products while
    // every detail page 404s, which is how a newly added product disappears.
    return product || seededProduct(slug);
  } catch {
    return seededProduct(slug);
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
    const serviceRequests = await db.select().from(serviceInquiries).orderBy(desc(serviceInquiries.createdAt));
    return {
      inquiries,
      requests,
      serviceRequests,
      unreadInquiries: inquiries.filter((item) => !item.isRead).length,
      unreadRequests: requests.filter((item) => !item.isRead).length,
      unreadServiceRequests: serviceRequests.filter((item) => !item.isRead).length,
    };
  } catch {
    return { inquiries: [], requests: [], serviceRequests: [], unreadInquiries: 0, unreadRequests: 0, unreadServiceRequests: 0 };
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

export async function searchServiceInquiries(
  filter?: string,
  service?: string,
  query?: string,
): Promise<ServiceInquiry[]> {
  try {
    const conditions = [];
    if (filter === "read") conditions.push(eq(serviceInquiries.isRead, true));
    if (filter === "unread") conditions.push(eq(serviceInquiries.isRead, false));
    if (service) conditions.push(eq(serviceInquiries.serviceType, service));
    if (query) {
      const q = `%${query}%`;
      conditions.push(
        or(
          like(serviceInquiries.name, q),
          like(serviceInquiries.organizationName, q),
          like(serviceInquiries.contactNumber, q),
          like(serviceInquiries.email, q),
          like(serviceInquiries.serviceType, q),
        ),
      );
    }
    return await db
      .select()
      .from(serviceInquiries)
      .where(conditions.length ? and(...conditions) : undefined)
      .orderBy(desc(serviceInquiries.createdAt));
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

/** Job applications, newest first, with an optional read/unread filter. */
export async function searchJobApplications(filter?: string, jobSlug?: string): Promise<JobApplication[]> {
  try {
    const conditions = [];
    if (filter === "unread") conditions.push(eq(jobApplications.isRead, false));
    if (filter === "read") conditions.push(eq(jobApplications.isRead, true));
    if (jobSlug) conditions.push(eq(jobApplications.jobSlug, jobSlug));

    const query = db.select().from(jobApplications);
    const rows = conditions.length
      ? await query.where(and(...conditions)).orderBy(desc(jobApplications.createdAt))
      : await query.orderBy(desc(jobApplications.createdAt));
    return rows;
  } catch {
    return [];
  }
}
