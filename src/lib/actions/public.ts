"use server";

import { revalidatePath } from "next/cache";
import { contactInquiries, getStartedRequests, jobApplications, serviceInquiries } from "@/lib/db/schema";
import { db } from "@/lib/db/client";
import { getJob } from "@/lib/careers";
import {
  contactInquirySchema,
  getStartedSchema,
  jobApplicationSchema,
  serviceInquirySchema,
} from "@/lib/validation";
import { formString, newId } from "@/lib/utils";
import { isRateLimited } from "@/lib/rate-limit";

export type FormState = {
  ok: boolean;
  message: string;
  /**
   * Field level errors keyed by input name. Optional so the existing forms,
   * which only render `message`, keep working unchanged.
   */
  errors?: Record<string, string>;
};

export async function submitContactInquiry(_: FormState, formData: FormData): Promise<FormState> {
  if (await isRateLimited("contact")) {
    return { ok: false, message: "Please wait a moment before sending another inquiry." };
  }

  const parsed = contactInquirySchema.safeParse({
    name: formString(formData, "name"),
    organizationName: formString(formData, "organizationName"),
    contactNumber: formString(formData, "contactNumber"),
    email: formString(formData, "email"),
    remarks: formString(formData, "remarks"),
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message || "Please check the form and try again." };
  }

  try {
    await db.insert(contactInquiries).values({
      id: newId(),
      name: parsed.data.name,
      organizationName: parsed.data.organizationName,
      contactNumber: parsed.data.contactNumber,
      email: parsed.data.email,
      remarks: parsed.data.remarks,
      isRead: false,
    });
    revalidatePath("/admin-infobytesnepal");
    return { ok: true, message: "Thanks, your inquiry has been received. Our team will contact you shortly." };
  } catch {
    return { ok: false, message: "We could not receive your inquiry right now. Please try again shortly." };
  }
}

export async function submitGetStarted(_: FormState, formData: FormData): Promise<FormState> {
  if (await isRateLimited("get-started")) {
    return { ok: false, message: "Please wait a moment before sending another request." };
  }

  const parsed = getStartedSchema.safeParse({
    name: formString(formData, "name"),
    organizationName: formString(formData, "organizationName"),
    contactNumber: formString(formData, "contactNumber"),
    email: formString(formData, "email"),
    remarks: formString(formData, "remarks"),
    productInterest: formString(formData, "productInterest"),
    consentChecked: formData.get("consentChecked") === "on",
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message || "Please check the form and try again." };
  }

  try {
    await db.insert(getStartedRequests).values({
      id: newId(),
      name: parsed.data.name,
      organizationName: parsed.data.organizationName,
      contactNumber: parsed.data.contactNumber,
      email: parsed.data.email,
      remarks: parsed.data.remarks,
      productInterest: parsed.data.productInterest,
      consentChecked: parsed.data.consentChecked,
      isRead: false,
    });
    revalidatePath("/admin-infobytesnepal");
    return { ok: true, message: "Thank you, your request has been received. Infobytes Nepal will get back to you soon." };
  } catch {
    return { ok: false, message: "We could not receive your request right now. Please try again shortly." };
  }
}

export async function submitServiceInquiry(_: FormState, formData: FormData): Promise<FormState> {
  if (await isRateLimited("service-inquiry")) {
    return { ok: false, message: "Please wait a moment before sending another service inquiry." };
  }

  const parsed = serviceInquirySchema.safeParse({
    name: formString(formData, "name"),
    organizationName: formString(formData, "organizationName"),
    contactNumber: formString(formData, "contactNumber"),
    email: formString(formData, "email"),
    serviceType: formString(formData, "serviceType"),
    remarks: formString(formData, "remarks"),
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message || "Please check the form and try again." };
  }

  try {
    await db.insert(serviceInquiries).values({
      id: newId(),
      name: parsed.data.name,
      organizationName: parsed.data.organizationName,
      contactNumber: parsed.data.contactNumber,
      email: parsed.data.email,
      serviceType: parsed.data.serviceType,
      remarks: parsed.data.remarks,
      isRead: false,
    });
    revalidatePath("/admin-infobytesnepal");
    revalidatePath("/admin-infobytesnepal/service-inquiries");
    return { ok: true, message: "Thank you - your service inquiry has been received. We will get back to you soon." };
  } catch {
    return { ok: false, message: "We could not receive your service inquiry right now. Please try again shortly." };
  }
}

/** Accepted CV formats and the ceiling the form advertises. */
const cvMaxBytes = 5 * 1024 * 1024;
const cvAllowedTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function submitJobApplication(_: FormState, formData: FormData): Promise<FormState> {
  // Honeypot. A field hidden from people but visible to a naive bot; anything
  // that fills it gets a success message and is silently dropped, because
  // telling a bot it failed only teaches it to try again.
  if (formString(formData, "company")) {
    return { ok: true, message: "Thank you, your application has been received." };
  }

  if (await isRateLimited("job-application", 4, 10 * 60_000)) {
    return { ok: false, message: "You have sent several applications recently. Please try again in a few minutes." };
  }

  const parsed = jobApplicationSchema.safeParse({
    jobSlug: formString(formData, "jobSlug"),
    name: formString(formData, "name"),
    email: formString(formData, "email"),
    phone: formString(formData, "phone"),
    portfolioUrl: formString(formData, "portfolioUrl"),
    message: formString(formData, "message"),
    consentChecked: formData.get("consentChecked") === "on",
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, message: "Please check the highlighted fields and try again.", errors };
  }

  const job = await getJob(parsed.data.jobSlug);
  if (!job) {
    return { ok: false, message: "That role could not be found. Please reload the page and try again." };
  }
  if (!job.isOpen) {
    return { ok: false, message: "Applications for this role are now closed. Email inquiry@infobytesnepal.com to register interest." };
  }

  // CV is optional in the schema but validated strictly when present, so an
  // oversized or wrong-typed file fails with a field message rather than a
  // generic error.
  let cvData: string | null = null;
  let cvName: string | null = null;
  let cvSize: number | null = null;

  const file = formData.get("cv");
  if (file && typeof file !== "string" && "arrayBuffer" in file && file.size > 0) {
    if (!cvAllowedTypes.includes(file.type)) {
      return { ok: false, message: "Please check the highlighted fields and try again.", errors: { cv: "Upload a PDF or Word document." } };
    }
    if (file.size > cvMaxBytes) {
      return { ok: false, message: "Please check the highlighted fields and try again.", errors: { cv: "That file is over 5MB. Please upload a smaller one." } };
    }
    const bytes = Buffer.from(await file.arrayBuffer());
    cvData = `data:${file.type};base64,${bytes.toString("base64")}`;
    cvName = file.name.slice(0, 160);
    cvSize = file.size;
  }

  try {
    await db.insert(jobApplications).values({
      id: newId(),
      jobSlug: job.slug,
      jobTitle: job.title,
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      portfolioUrl: parsed.data.portfolioUrl,
      message: parsed.data.message,
      cvData,
      cvName,
      cvSize,
      consentChecked: parsed.data.consentChecked,
      isRead: false,
    });
    revalidatePath("/admin-infobytesnepal");
    return {
      ok: true,
      message: `Thank you. Your application for ${job.title} has been received. We reply to every applicant, usually within a week.`,
    };
  } catch {
    return { ok: false, message: "We could not receive your application right now. Please try again shortly, or email inquiry@infobytesnepal.com." };
  }
}
