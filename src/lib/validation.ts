import { z } from "zod";
import { productInterests } from "./content";

const optionalEmail = z
  .string()
  .trim()
  .optional()
  .transform((value) => value || "")
  .refine((value) => !value || z.string().email().safeParse(value).success, "Enter a valid email address.");

export const contactInquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  organizationName: z.string().trim().optional().default(""),
  contactNumber: z.string().trim().min(1, "Contact Number is required."),
  email: optionalEmail,
  remarks: z.string().trim().optional().default(""),
});

export const getStartedSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  organizationName: z.string().trim().optional().default(""),
  contactNumber: z.string().trim().min(1, "Contact Number is required."),
  email: z.string().trim().email("Enter a valid email address."),
  remarks: z.string().trim().optional().default(""),
  productInterest: z.enum(productInterests, { message: "Choose what you would like to begin with." }),
  consentChecked: z.boolean().default(false),
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

export const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1),
  slug: z.string().trim().min(1).regex(/^[a-z0-9-]+$/),
  logoUrl: z.string().trim().min(1),
  shortDescription: z.string().trim().min(1),
  fullDescription: z.string().trim().min(1),
  displayOrder: z.coerce.number().int().default(0),
  isPublished: z.boolean().default(false),
  seoTitle: z.string().trim().optional().default(""),
  seoDescription: z.string().trim().optional().default(""),
  ogImage: z.string().trim().optional().default(""),
});

export const mediaSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1),
  url: z.string().trim().min(1),
  type: z.string().trim().min(1),
  altText: z.string().trim().optional().default(""),
});

export const seoSchema = z.object({
  id: z.string().optional(),
  route: z.string().trim().min(1),
  title: z.string().trim().optional().default(""),
  description: z.string().trim().optional().default(""),
  canonical: z.string().trim().optional().default(""),
  robots: z.string().trim().optional().default(""),
  ogTitle: z.string().trim().optional().default(""),
  ogDescription: z.string().trim().optional().default(""),
  ogImage: z.string().trim().optional().default(""),
  schemaJson: z.string().trim().optional().default(""),
});
