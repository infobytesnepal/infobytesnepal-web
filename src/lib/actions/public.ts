"use server";

import { revalidatePath } from "next/cache";
import { contactInquiries, getStartedRequests, serviceInquiries } from "@/lib/db/schema";
import { db } from "@/lib/db/client";
import { contactInquirySchema, getStartedSchema, serviceInquirySchema } from "@/lib/validation";
import { formString, newId } from "@/lib/utils";
import { isRateLimited } from "@/lib/rate-limit";

export type FormState = {
  ok: boolean;
  message: string;
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
