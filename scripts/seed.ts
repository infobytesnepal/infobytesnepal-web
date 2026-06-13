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

const productSeoDefaults: Record<string, { title: string; description: string }> = {
  pravyo: {
    title: "Pravyo Student Talent Platform | InfoBytes Nepal",
    description:
      "Pravyo by InfoBytes Nepal helps organize, discover, and present student talent for education, training, and consultancy-focused workflows in Nepal.",
  },
  serviol: {
    title: "Serviol Service Management Software Nepal | InfoBytes Nepal",
    description:
      "Serviol is service management software by InfoBytes Nepal for field service teams, tickets, planners, attendance, and operational workflows.",
  },
  purseol: {
    title: "Purseol Sales Management Software Nepal | InfoBytes Nepal",
    description:
      "Purseol is sales management software by InfoBytes Nepal for client visits, product pitches, field sales tracking, and lead outcomes.",
  },
  leadrack: {
    title: "LeadRack CRM & Lead Management Software Nepal | InfoBytes Nepal",
    description:
      "LeadRack by InfoBytes Nepal helps teams manage leads through traceable boards, sales stages, follow-ups, and CRM-style workflows.",
  },
};

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
      title: `${product.name} | InfoBytes Nepal`,
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
      "Software Development Company in Nepal | InfoBytes Nepal",
      "InfoBytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, and business automation solutions.",
    ],
    [
      "/products",
      "Products | InfoBytes Nepal",
      "Explore InfoBytes Nepal software products for business automation, CRM, sales management, service management, lead tracking, and student talent workflows.",
    ],
    [
      "/services",
      "Services | InfoBytes Nepal",
      "Explore software development, web development, SEO, digital marketing, training, graphics design, and business automation services by InfoBytes Nepal.",
    ],
    [
      "/contact",
      "Contact | InfoBytes Nepal",
      "Contact InfoBytes Nepal for custom software development, web development, SEO, digital marketing, and business automation services in Nepal.",
    ],
    [
      "/about",
      "About | InfoBytes Nepal",
      "Learn about InfoBytes Nepal, a trusted IT company in Nepal building custom software, business automation, service management, sales management, and student talent platforms.",
    ],
    [
      "/privacy-policy",
      "Privacy Policy | InfoBytes Nepal",
      "Read the InfoBytes Nepal privacy policy for website inquiries, service inquiries, contact details, and communication with our team in Nepal.",
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
