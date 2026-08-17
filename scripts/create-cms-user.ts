import bcrypt from "bcryptjs";
import { loadEnvConfig } from "@next/env";
import { eq } from "drizzle-orm";
import { adminUsers } from "../src/lib/db/schema";

/**
 * Creates a CMS login, or resets the password and role of an existing one.
 *
 * Separate from `npm run db:seed` on purpose: that script is a full reset that
 * refuses to run against a populated database, which is exactly the situation
 * in which you need to add a person.
 *
 *   npm run db:user -- --email someone@infobytesnepal.com --password 'secret' --role editor
 *
 * Roles:
 *   admin  — the whole CMS (the default, and what every existing login is)
 *   editor — the Blog section only
 *
 * Quote the password if it contains characters your shell treats specially.
 */
loadEnvConfig(process.cwd());

function arg(name: string) {
  const index = process.argv.indexOf(`--${name}`);
  if (index === -1) return "";
  return (process.argv[index + 1] || "").trim();
}

async function main() {
  const { db } = await import("../src/lib/db/client");

  const email = arg("email").toLowerCase();
  const password = arg("password");
  const role = arg("role") || "admin";

  if (!email || !password) {
    console.error(
      "\nUsage: npm run db:user -- --email <email> --password <password> [--role admin|editor]\n",
    );
    process.exit(1);
  }
  if (role !== "admin" && role !== "editor") {
    console.error(`\nUnknown role "${role}". Use "admin" or "editor".\n`);
    process.exit(1);
  }
  if (password.length < 8) {
    console.error("\nUse a password of at least 8 characters.\n");
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const [existing] = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);

  if (existing) {
    await db
      .update(adminUsers)
      .set({ passwordHash, role, updatedAt: new Date().toISOString() })
      .where(eq(adminUsers.id, existing.id));
    console.log(`\nUpdated ${email}. Role: ${role}. Password reset.\n`);
  } else {
    await db.insert(adminUsers).values({ id: crypto.randomUUID(), email, passwordHash, role });
    console.log(`\nCreated ${email}. Role: ${role}.\n`);
  }

  const users = await db.select({ email: adminUsers.email, role: adminUsers.role }).from(adminUsers);
  console.log("CMS logins:");
  for (const user of users) console.log(`  ${user.role.padEnd(6)}  ${user.email}`);
  console.log("");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
