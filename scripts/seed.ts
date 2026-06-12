import bcrypt from "bcryptjs";
import { loadEnvConfig } from "@next/env";
import { eq } from "drizzle-orm";
import {
  adminUsers,
  pageContent,
  products,
  seoSettings,
  siteSettings,
} from "../src/lib/db/schema";
import { defaultPageContent, productSeeds, siteDefaults } from "../src/lib/content";

loadEnvConfig(process.cwd());
let db: (typeof import("../src/lib/db/client"))["db"];

function id() {
  return crypto.randomUUID();
}

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) {
    console.log("Skipping admin user seed because ADMIN_EMAIL or ADMIN_PASSWORD is missing.");
    return;
  }
  const hash = await bcrypt.hash(password, 12);
  await db
    .insert(adminUsers)
    .values({ id: id(), email, passwordHash: hash, role: "admin" })
    .onConflictDoUpdate({
      target: adminUsers.email,
      set: { passwordHash: hash, updatedAt: new Date().toISOString() },
    });
}

async function seedProducts() {
  for (const product of productSeeds) {
    await db
      .insert(products)
      .values({
        id: id(),
        ...product,
        isPublished: true,
        seoTitle: `${product.name} | InfoBytes Nepal`,
        seoDescription: product.shortDescription,
        ogImage: "/assets/hero/infobytes-hero-fallback.webp",
      })
      .onConflictDoUpdate({
        target: products.slug,
        set: {
          ...product,
          isPublished: true,
          seoTitle: `${product.name} | InfoBytes Nepal`,
          seoDescription: product.shortDescription,
          ogImage: "/assets/hero/infobytes-hero-fallback.webp",
          updatedAt: new Date().toISOString(),
        },
      });
  }
}

async function seedSettings() {
  for (const [key, value] of Object.entries(siteDefaults)) {
    await db
      .insert(siteSettings)
      .values({ id: id(), key, value })
      .onConflictDoUpdate({ target: siteSettings.key, set: { value, updatedAt: new Date().toISOString() } });
  }
}

async function seedPages() {
  const sections = [
    ["home", "hero", defaultPageContent.homeHero],
    ["about", "section1", defaultPageContent.aboutSection1],
    ["about", "section2", defaultPageContent.aboutSection2],
    ["about", "started", defaultPageContent.aboutStarted],
    ["about", "goals", defaultPageContent.aboutGoals],
    ["contact", "hero", defaultPageContent.contactHero],
    ["privacy-policy", "content", defaultPageContent.privacy],
    ["footer", "content", defaultPageContent.footer],
  ] as const;

  for (const [pageKey, sectionKey, content] of sections) {
    await db
      .insert(pageContent)
      .values({ id: id(), pageKey, sectionKey, contentJson: JSON.stringify(content) })
      .onConflictDoUpdate({
        target: [pageContent.pageKey, pageContent.sectionKey],
        set: { contentJson: JSON.stringify(content), updatedAt: new Date().toISOString() },
      });
  }
}

async function seedSeo() {
  const rows = [
    ["/", "InfoBytes Nepal | Complexities, now simplified.", "Focused digital products that simplify field service, sales, lead tracking, and student talent workflows."],
    ["/products", "Products | InfoBytes Nepal", "Explore InfoBytes Nepal products for student talent, field service, field sales, and lead tracking workflows."],
    ["/services", "Services | InfoBytes Nepal", "Services content for InfoBytes Nepal will be available later."],
    ["/contact", "Contact | InfoBytes Nepal", "Contact InfoBytes Nepal about focused digital products for growing teams."],
    ["/about", "About | InfoBytes Nepal", "Learn about InfoBytes Nepal and its focus on simplifying practical workflows."],
    ["/privacy-policy", "Privacy Policy | InfoBytes Nepal", "A concise privacy policy for InfoBytes Nepal inquiries."],
  ] as const;
  for (const [route, title, description] of rows) {
    await db
      .insert(seoSettings)
      .values({ id: id(), route, title, description, robots: route === "/services" ? "noindex,follow" : "index,follow" })
      .onConflictDoUpdate({
        target: seoSettings.route,
        set: { title, description, robots: route === "/services" ? "noindex,follow" : "index,follow" },
      });
  }
}

async function main() {
  ({ db } = await import("../src/lib/db/client"));
  await seedAdmin();
  await seedProducts();
  await seedSettings();
  await seedPages();
  await seedSeo();
  const productCount = await db.select().from(products);
  const users = await db.select().from(adminUsers).where(eq(adminUsers.role, "admin"));
  console.log(`Seeded ${productCount.length} products and ${users.length} admin user(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
