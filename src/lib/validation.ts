import { z } from "zod";
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

export const mediaSchema = z.object({
  id: z.string().optional(),
  name: z.string().trim().min(1).max(160),
  url: z.string().trim().min(1),
  type: z.string().trim().min(1),
  altText: z.string().trim().max(180).optional().default(""),
});

export const seoSchema = z.object({
  id: z.string().optional(),
  route: z.string().trim().min(1).max(180),
  title: z.string().trim().max(180).optional().default(""),
  description: z.string().trim().max(320).optional().default(""),
  canonical: z.string().trim().max(300).optional().default(""),
  robots: z.string().trim().max(80).optional().default(""),
  ogTitle: z.string().trim().max(180).optional().default(""),
  ogDescription: z.string().trim().max(320).optional().default(""),
  ogImage: z.string().trim().optional().default(""),
  schemaJson: z.string().trim().max(12000).optional().default(""),
});
