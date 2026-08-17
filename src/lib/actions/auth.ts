"use server";

import { redirect } from "next/navigation";
import { blogHome, createSession, destroySession, verifyAdmin } from "@/lib/auth";
import { isRateLimited } from "@/lib/rate-limit";
import { loginSchema } from "@/lib/validation";
import { formString } from "@/lib/utils";

export async function loginAction(formData: FormData) {
  if (await isRateLimited("admin-login", 5, 60_000)) {
    redirect("/admin-infobytesnepal/login?error=1");
  }

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
  // An editor has no dashboard to land on: it is a page of inquiry counts they
  // are not allowed to see. Send them straight to the only section they can use.
  redirect(user.role === "editor" ? blogHome : "/admin-infobytesnepal");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin-infobytesnepal/login");
}
