import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "./db/client";
import { adminUsers } from "./db/schema";

const cookieName = "ibn_admin_session";

/**
 * `admin` reaches the whole CMS. `editor` reaches the blog section and nothing
 * else — no inquiries, no job applications, no products, no site settings. The
 * distinction exists so writing can be delegated without also handing over
 * every customer phone number the contact form has ever collected.
 */
export type AdminRole = "admin" | "editor";

export const blogHome = "/admin-infobytesnepal/blog";
const loginPath = "/admin-infobytesnepal/login";

export type AdminSession = {
  userId: string;
  email: string;
  role: AdminRole;
};

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET is required for admin authentication.");
  }
  return new TextEncoder().encode(secret);
}

/** Anything that is not exactly "editor" is an admin, so an unset or unknown
 * value in the column can only ever grant less than it should, never more. */
function normaliseRole(value: string | null | undefined): AdminRole {
  return value === "editor" ? "editor" : "admin";
}

export async function createSession(userId: string, email: string) {
  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getAuthSecret());

  const store = await cookies();
  store.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin-infobytesnepal",
    maxAge: 60 * 60 * 8,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(cookieName);
}

/** The signed cookie only. Says who is logged in, not what they may do. */
async function getTokenClaims() {
  try {
    const store = await cookies();
    const token = store.get(cookieName)?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, getAuthSecret());
    if (!payload.sub || typeof payload.email !== "string") return null;
    return { userId: payload.sub, email: payload.email };
  } catch {
    return null;
  }
}

/**
 * The logged-in user with their current role.
 *
 * The role is read from the database on every check rather than being baked
 * into the token. A token is valid for eight hours, so a role carried inside it
 * would keep granting the old level of access for the rest of that window after
 * an account was demoted — which is precisely the moment the change matters.
 * The cost is one indexed lookup per admin request, on pages that are already
 * `no-store` and never seen by the public.
 */
export async function getSession(): Promise<AdminSession | null> {
  const claims = await getTokenClaims();
  if (!claims) return null;
  try {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.id, claims.userId)).limit(1);
    // The account was deleted while the token was still in date.
    if (!user) return null;
    return { userId: user.id, email: user.email, role: normaliseRole(user.role) };
  } catch {
    return null;
  }
}

/** Any logged-in CMS user. The caller is responsible for checking the role. */
export async function requireSession(): Promise<AdminSession> {
  const session = await getSession();
  if (!session) redirect(loginPath);
  return session;
}

/**
 * Full CMS access.
 *
 * Every pre-existing caller of this function — the inquiry actions, products,
 * media, site settings — kept its call unchanged when editors were introduced,
 * and each one became closed to editors at the same moment. That is the point
 * of tightening this function rather than adding a separate admin-only one:
 * a feature added later is locked down by default instead of being open until
 * somebody remembers to guard it.
 */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await requireSession();
  if (session.role !== "admin") redirect(blogHome);
  return session;
}

/** The blog section: admins and editors. */
export async function requireBlogAccess(): Promise<AdminSession> {
  const session = await requireSession();
  if (session.role !== "admin" && session.role !== "editor") redirect(loginPath);
  return session;
}

export async function verifyAdmin(email: string, password: string) {
  const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  return ok ? user : null;
}
