"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession, verifyAdmin } from "@/lib/auth";
import { loginSchema } from "@/lib/validation";
import { formString } from "@/lib/utils";

export async function loginAction(formData: FormData) {
  const parsed = loginSchema.safeParse({
    email: formString(formData, "email"),
    password: formString(formData, "password"),
  });

  if (!parsed.success) {
    redirect("/admin-infobytesnepal/login?error=1");
  }

  const user = await verifyAdmin(parsed.data.email, parsed.data.password);
  if (!user) {
    redirect("/admin-infobytesnepal/login?error=1");
  }

  await createSession(user.id, user.email);
  redirect("/admin-infobytesnepal");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin-infobytesnepal/login");
}
