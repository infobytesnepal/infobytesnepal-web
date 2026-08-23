import { z } from "zod";
import { authors, categories } from "./blog";
import { productInterests } from "./content";
import { serviceInquiryOptions } from "./services";

const optionalEmail = z
  .string()
  .trim()
  .max(254, "Email address is too long.")
  .optional()
  .transform((value) => value || "")
  .refine((value) => !value || z.string().email().safeParse(value).success, "Enter a valid email address.");

export const contactInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120, "Name is too long."),
  organizationName: z.string().trim().max(180, "Organization name is too long.").optional().default(""),
  contactNumber: z.string().trim().min(1, "Contact Number is required.").max(40, "Contact number is too long."),
  email: optionalEmail,
  remarks: z.string().trim().max(2000, "Remarks are too long.").optional().default(""),
});

export const getStartedSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120, "Name is too long."),
  organizationName: z.string().trim().max(180, "Organization name is too long.").optional().default(""),
  contactNumber: z.string().trim().min(1, "Contact Number is required.").max(40, "Contact number is too long."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email address is too long."),
  remarks: z.string().trim().max(2000, "Remarks are too long.").optional().default(""),
  productInterest: z.enum(productInterests, { message: "Choose what you would like to begin with." }),
  consentChecked: z.boolean().default(false),
});

export const serviceInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120, "Name is too long."),
  organizationName: z.string().trim().max(180, "Organization name is too long.").optional().default(""),
  contactNumber: z.string().trim().min(1, "Contact Number is required.").max(40, "Contact number is too long."),
  email: optionalEmail,
  serviceType: z.enum(serviceInquiryOptions, { message: "Choose the type of service." }),
  remarks: z.string().trim().max(2000, "Remarks are too long.").optional().default(""),
});

export const jobApplicationSchema = z.object({
  jobSlug: z.string().trim().min(1).max(120),
  name: z.string().trim().min(2, "Enter your full name.").max(120, "Name is too long."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email address is too long."),
  phone: z.string().trim().min(7, "Enter a phone number we can reach you on.").max(40, "Phone number is too long."),
  portfolioUrl: z
    .string()
    .trim()
    .max(300, "Link is too long.")
    .optional()
    .default("")
    .refine(
      (value) => !value || /^https?:\/\/.+\..+/.test(value),
      "Enter a full link starting with http:// or https://",
    ),
  message: z.string().trim().max(2000, "Message is too long.").optional().default(""),
  consentChecked: z
    .boolean()
    .refine((value) => value, "Please confirm we may store your application."),
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address.").max(254),
  password: z.string().min(1, "Password is required.").max(256),
});

export const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1).max(120),
  slug: z.string().trim().min(1).max(120).regex(/^[a-z0-9-]+$/),
  logoUrl: z.string().trim().min(1),
  shortDescription: z.string().trim().min(1).max(700),
  fullDescription: z.string().trim().min(1).max(5000),
  displayOrder: z.coerce.number().int().default(0),
  isPublished: z.boolean().default(false),
  seoTitle: z.string().trim().max(180).optional().default(""),
  seoDescription: z.string().trim().max(320).optional().default(""),
  ogImage: z.string().trim().optional().default(""),
});

const authorSlugs = authors.map((author) => author.slug) as [string, ...string[]];

/**
 * A blog post as the CMS form submits it.
 *
 * The limits on `metaTitle` and `metaDescription` are the points past which
 * Google stops showing the text rather than arbitrary column widths, and the
 * editor counts characters against the same numbers so the author sees the
 * problem before saving rather than in a search result three weeks later.
 */
export const postSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(1, "A title is required.").max(180, "Title is too long."),
  slug: z
    .string()
    .trim()
    .min(1, "A slug is required.")
    .max(140, "Slug is too long.")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers and hyphens only."),
  excerpt: z.string().trim().min(1, "A summary is required.").max(400, "Summary is too long."),
  coverImage: z.string().trim().max(2000).optional().default(""),
  coverAlt: z.string().trim().max(220, "Cover alt text is too long.").optional().default(""),
  category: z.enum(categories, { message: "Choose a category." }),
  tags: z.string().trim().max(300, "Too many tags.").optional().default(""),
  authorSlug: z.enum(authorSlugs, { message: "Choose an author." }),
  bodyMarkdown: z.string().min(1, "The post has no body.").max(200_000, "The post is too long."),
  metaTitle: z.string().trim().max(180, "Meta title is too long.").optional().default(""),
  metaDescription: z.string().trim().max(360, "Meta description is too long.").optional().default(""),
  readTime: z.coerce.number().int().min(0).max(180).optional().default(0),
  isPublished: z.boolean().default(false),
  publishedAt: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Use a date in YYYY-MM-DD form."),
});

/**
 * A landing page as the CMS form submits it.
 *
 * Lists are required to be non-empty because the page template renders a
 * heading above each one. An empty `problems` array does not hide the section,
 * it publishes a "Common challenges" heading with nothing underneath it.
 */
const nonEmptyLine = z.string().trim().min(1);

export const landingPageSchema = z.object({
  metaTitle: z.string().trim().min(1, "A meta title is required.").max(200, "Meta title is too long."),
  metaDescription: z
    .string()
    .trim()
    .min(1, "A meta description is required.")
    .max(400, "Meta description is too long."),
  ogTitle: z.string().trim().min(1, "An OG title is required.").max(200, "OG title is too long."),
  ogDescription: z
    .string()
    .trim()
    .min(1, "An OG description is required.")
    .max(400, "OG description is too long."),
  keyword: z.string().trim().min(1, "A keyword is required.").max(160, "Keyword is too long."),
  heroTitle: z.string().trim().min(1, "A hero title is required.").max(200, "Hero title is too long."),
  heroIntro: z.string().trim().min(1, "A hero intro is required.").max(2000, "Hero intro is too long."),
  overview: z.object({
    title: z.string().trim().min(1, "The overview needs a heading.").max(200, "Overview heading is too long."),
    paragraphs: z.array(nonEmptyLine.max(4000)).min(1, "The overview needs at least one paragraph."),
  }),
  problems: z.array(nonEmptyLine.max(1000)).min(1, "Add at least one problem."),
  solutions: z.array(nonEmptyLine.max(1000)).min(1, "Add at least one solution."),
  features: z.array(nonEmptyLine.max(300)).min(1, "Add at least one feature."),
  process: z
    .array(
      z.object({
        title: nonEmptyLine.max(160),
        text: nonEmptyLine.max(2000),
      }),
    )
    .min(1, "Add at least one process step."),
  reasons: z.array(nonEmptyLine.max(1000)).min(1, "Add at least one reason."),
  related: z
    .array(
      z.object({
        // Internal paths only. An editor pasting a competitor's URL into a
        // "related pages" block would hand them a site-wide followed link.
        href: z
          .string()
          .trim()
          .min(1)
          .max(300)
          .regex(/^\/[A-Za-z0-9\-/_#?=&.]*$/, "Related links must be paths on this site, starting with /."),
        label: nonEmptyLine.max(200),
        text: nonEmptyLine.max(600),
      }),
    )
    .min(1, "Add at least one related link."),
  faqs: z
    .array(
      z.object({
        question: nonEmptyLine.max(400),
        answer: nonEmptyLine.max(3000),
      }),
    )
    .min(1, "Add at least one FAQ."),
});

export const mediaSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1).max(160),
  url: z.string().trim().min(1),
  type: z.string().trim().min(1),
  altText: z.string().trim().max(180).optional().default(""),
});

