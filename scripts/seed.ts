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
import { defaultPageContent, productSeeds, productSeoDefaults, siteDefaults } from "../src/lib/content";

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
    const seo = productSeoDefaults[product.slug] || {
      title: `${product.name} | Infobytes Nepal`,
      description: product.shortDescription,
    };
    await db
      .insert(products)
      .values({
        id: id(),
        ...product,
        isPublished: true,
        seoTitle: seo.title,
        seoDescription: seo.description,
        ogImage: "/assets/hero/infobytes-hero-fallback.webp",
      })
      .onConflictDoUpdate({
        target: products.slug,
        set: {
          ...product,
          isPublished: true,
          seoTitle: seo.title,
          seoDescription: seo.description,
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
    [
      "/",
      "Software Development Company in Nepal | Infobytes Nepal",
      "Infobytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, and business automation solutions.",
    ],
    [
      "/products",
      "Products | Infobytes Nepal",
      "Explore Infobytes Nepal software products for business automation, CRM, sales management, service management, lead tracking, and student talent workflows.",
    ],
    [
      "/services",
      "Services | Infobytes Nepal",
      "Explore software development, web development, SEO, digital marketing, training, graphics design, and business automation services by Infobytes Nepal.",
    ],
    [
      "/contact",
      "Contact | Infobytes Nepal",
      "Contact Infobytes Nepal for custom software development, web development, SEO, digital marketing, and business automation services in Nepal.",
    ],
    [
      "/about",
      "About | Infobytes Nepal",
      "Learn about Infobytes Nepal, a trusted IT company in Nepal building custom software, business automation, service management, sales management, and student talent platforms.",
    ],
    [
      "/privacy-policy",
      "Privacy Policy | Infobytes Nepal",
      "Read the Infobytes Nepal privacy policy for website inquiries, service inquiries, contact details, and communication with our team in Nepal.",
    ],
  ] as const;
  for (const [route, title, description] of rows) {
    await db
      .insert(seoSettings)
      .values({ id: id(), route, title, description, robots: "index,follow" })
      .onConflictDoUpdate({
        target: seoSettings.route,
        set: { title, description, robots: "index,follow" },
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
