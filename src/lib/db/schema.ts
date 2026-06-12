import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

const timestamps = {
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
};

export const adminUsers = sqliteTable("admin_users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").notNull().default("admin"),
  ...timestamps,
});

export const products = sqliteTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  logoUrl: text("logo_url").notNull(),
  shortDescription: text("short_description").notNull(),
  fullDescription: text("full_description").notNull(),
  displayOrder: integer("display_order").notNull().default(0),
  isPublished: integer("is_published", { mode: "boolean" }).notNull().default(true),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  ogImage: text("og_image"),
  ...timestamps,
});

export const contactInquiries = sqliteTable("contact_inquiries", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  organizationName: text("organization_name"),
  contactNumber: text("contact_number").notNull(),
  email: text("email"),
  remarks: text("remarks"),
  isRead: integer("is_read", { mode: "boolean" }).notNull().default(false),
  ...timestamps,
});

export const getStartedRequests = sqliteTable("get_started_requests", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  organizationName: text("organization_name"),
  contactNumber: text("contact_number").notNull(),
  email: text("email").notNull(),
  remarks: text("remarks"),
  productInterest: text("product_interest").notNull(),
  consentChecked: integer("consent_checked", { mode: "boolean" }).notNull().default(false),
  isRead: integer("is_read", { mode: "boolean" }).notNull().default(false),
  ...timestamps,
});

export const serviceInquiries = sqliteTable("service_inquiries", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  organizationName: text("organization_name"),
  contactNumber: text("contact_number").notNull(),
  email: text("email"),
  serviceType: text("service_type").notNull(),
  remarks: text("remarks"),
  isRead: integer("is_read", { mode: "boolean" }).notNull().default(false),
  ...timestamps,
});

export const pageContent = sqliteTable(
  "page_content",
  {
    id: text("id").primaryKey(),
    pageKey: text("page_key").notNull(),
    sectionKey: text("section_key").notNull(),
    contentJson: text("content_json").notNull(),
    ...timestamps,
  },
  (table) => ({
    pageSectionIdx: uniqueIndex("page_content_page_section_idx").on(table.pageKey, table.sectionKey),
  }),
);

export const siteSettings = sqliteTable("site_settings", {
  id: text("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: text("value").notNull(),
  ...timestamps,
});

export const seoSettings = sqliteTable("seo_settings", {
  id: text("id").primaryKey(),
  route: text("route").notNull().unique(),
  title: text("title"),
  description: text("description"),
  canonical: text("canonical"),
  robots: text("robots"),
  ogTitle: text("og_title"),
  ogDescription: text("og_description"),
  ogImage: text("og_image"),
  schemaJson: text("schema_json"),
  ...timestamps,
});

export const mediaAssets = sqliteTable("media_assets", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  url: text("url").notNull(),
  type: text("type").notNull(),
  altText: text("alt_text"),
  ...timestamps,
});

export type Product = typeof products.$inferSelect;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type GetStartedRequest = typeof getStartedRequests.$inferSelect;
export type ServiceInquiry = typeof serviceInquiries.$inferSelect;
export type PageContent = typeof pageContent.$inferSelect;
export type SiteSetting = typeof siteSettings.$inferSelect;
export type SeoSetting = typeof seoSettings.$inferSelect;
export type MediaAsset = typeof mediaAssets.$inferSelect;
