import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

const timestamps = {
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
};

/**
 * `role` decides how much of the CMS a login can reach.
 *
 * - `admin`  — everything, which is what every pre-existing account has.
 * - `editor` — the blog section and nothing else. Enforced in `lib/auth.ts`,
 *   not here; the column is only the record of it.
 *
 * The column already defaulted to "admin" before editors existed, so an account
 * created without thinking about roles stays an admin rather than silently
 * losing access.
 */
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

/**
 * Blog posts written in the CMS.
 *
 * The body is stored as the markdown the author actually typed rather than as
 * parsed blocks, so what is saved is exactly what the editor reopens. Parsing to
 * the `PostBlock[]` the site renders happens on read, in `lib/blog.ts`.
 *
 * `tags` is a comma separated string rather than a join table. The blog is a few
 * dozen posts with a handful of free text tags each, nothing queries by tag, and
 * the rest of this schema stores small lists the same way.
 */
export const posts = sqliteTable("posts", {
  id: text("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  coverImage: text("cover_image").notNull().default(""),
  coverAlt: text("cover_alt").notNull().default(""),
  category: text("category").notNull(),
  tags: text("tags").notNull().default(""),
  authorSlug: text("author_slug").notNull(),
  bodyMarkdown: text("body_markdown").notNull().default(""),
  /** Overrides the `<title>`. Falls back to the post title when empty. */
  metaTitle: text("meta_title"),
  /** Overrides the meta description. Falls back to the excerpt when empty. */
  metaDescription: text("meta_description"),
  /** Minutes. 0 means "work it out from the body length on read". */
  readTime: integer("read_time").notNull().default(0),
  isPublished: integer("is_published", { mode: "boolean" }).notNull().default(false),
  publishedAt: text("published_at").notNull(),
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

export const jobApplications = sqliteTable("job_applications", {
  id: text("id").primaryKey(),
  jobSlug: text("job_slug").notNull(),
  jobTitle: text("job_title").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  portfolioUrl: text("portfolio_url"),
  message: text("message"),
  /**
   * The CV as a data URI. There is no object storage configured on this
   * project and the media table already stores uploads this way, so the CV
   * follows the same route. `cvName` and `cvSize` are kept separately so the
   * admin list can show the file without loading the blob.
   */
  cvData: text("cv_data"),
  cvName: text("cv_name"),
  cvSize: integer("cv_size"),
  consentChecked: integer("consent_checked", { mode: "boolean" }).notNull().default(false),
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

export type AdminUser = typeof adminUsers.$inferSelect;
export type PostRow = typeof posts.$inferSelect;
export type JobApplication = typeof jobApplications.$inferSelect;
export type Product = typeof products.$inferSelect;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type GetStartedRequest = typeof getStartedRequests.$inferSelect;
export type ServiceInquiry = typeof serviceInquiries.$inferSelect;
export type PageContent = typeof pageContent.$inferSelect;
export type SiteSetting = typeof siteSettings.$inferSelect;
export type SeoSetting = typeof seoSettings.$inferSelect;
export type MediaAsset = typeof mediaAssets.$inferSelect;
