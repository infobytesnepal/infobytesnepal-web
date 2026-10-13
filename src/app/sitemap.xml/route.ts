import { getPosts } from "@/lib/blog";
import { getJobs } from "@/lib/careers";
import { getProducts } from "@/lib/data";
import { getLandingPageEditDates } from "@/lib/landing-pages";
import { getLandingProduct, seoLandingPageList } from "@/lib/seo-landing-pages";
import { team } from "@/lib/team";
import { getCanonicalSiteUrl } from "@/lib/utils";

/**
 * Built per request and cached at the CDN, not prerendered.
 *
 * This route used `export const revalidate = 86400`, and in production it
 * never revalidated once: on 2026-10-13 the live file still listed exactly the
 * posts that existed at the 2026-09-29 deploy, and was missing the eight posts
 * published through the CMS since. `llms.txt` uses the same `revalidate` value
 * and did refresh. The difference is the file path. Next classifies
 * `app/sitemap.xml/route.ts` as a metadata route (`isMetadataRoute()` returns
 * true for it, and false for `app/llms.txt/route.ts`), and metadata routes
 * "remain static by default" — on Vercel that meant frozen at build time, with
 * neither the timer nor `revalidatePath("/sitemap.xml")` reaching it.
 *
 * `force-dynamic` takes the route out of the static path entirely, and the
 * `s-maxage` below hands caching to Vercel's CDN, which honours it on function
 * responses. A crawler gets a cached copy at most fifteen minutes old, and a
 * post published through the CMS is listed within that window instead of
 * waiting for the next deploy. Generating it is a handful of small queries.
 */
export const dynamic = "force-dynamic";

/**
 * The date the site's written content was last reviewed end to end.
 *
 * Static routes use this instead of `new Date()`. Stamping every URL with
 * today's date on every request makes `lastmod` meaningless: Search Console
 * sees 50 pages that all claim to have changed an hour ago, concludes the
 * signal is unreliable, and starts ignoring it. Bump this by hand when page
 * copy actually changes.
 */
const CONTENT_LAST_UPDATED = "2026-08-04";

/**
 * Per-page override for pages whose copy changed after `CONTENT_LAST_UPDATED`.
 *
 * This exists because the alternative — bumping `CONTENT_LAST_UPDATED` itself —
 * re-dates all 59 static URLs at once, which is precisely the "Search Console
 * sees 50 pages that all claim to have changed an hour ago" failure the comment
 * above warns about. Changing five pages and telling crawlers that fifty-nine
 * changed destroys the signal you were trying to send.
 *
 * Add a line here when you change one page's copy. Bump `CONTENT_LAST_UPDATED`
 * and clear this map when the site genuinely gets reviewed end to end.
 *
 * Why this matters more than it looks: Search Console had eighteen URLs sitting
 * in "Discovered – currently not indexed" with no crawl date at all, including
 * /about, /services and /products. When most of the sitemap shares one stale
 * date, a crawler has no basis for choosing which URL to spend its next slot
 * on, and `lastmod` stops being a reason to come back.
 */
const PAGE_CONTENT_UPDATED: Record<string, string> = {
  // The Nidanyo cluster: two pages created and two rewritten on 2026-09-18.
  "/best-lab-software-in-nepal": "2026-09-18",
  "/lab-software-cost-in-nepal": "2026-09-18",
  "/lab-software-in-nepal": "2026-09-18",
  "/laboratory-information-management-system-nepal": "2026-09-18",
  /*
    Product pages normally take their date from `products.updated_at`, but this
    page's content changed in the repo (a capability list and eight FAQs that
    render from `content.ts`) while the database row stayed untouched — nobody
    edited the product. Dating it here rather than writing to production keeps
    `updated_at` meaning "an admin edited this record", which is the only thing
    it should mean, and `lastmodFor` takes whichever of the two is later.
  */
  "/products/nidanyo": "2026-09-18",
  /*
    The ClinicNP launch, 2026-09-29: a sixth product and a six-page cluster, all
    created on that date. New URLs need a line here rather than inheriting
    `CONTENT_LAST_UPDATED`, which would tell a crawler a page published today was
    last changed in August.
  */
  "/products/clinicnp": "2026-09-29",
  "/clinic-management-software-in-nepal": "2026-09-29",
  "/pharmacy-software-in-nepal": "2026-09-29",
  "/clinic-and-pharmacy-software-in-nepal": "2026-09-29",
  "/best-clinic-management-software-in-nepal": "2026-09-29",
  "/clinic-software-price-in-nepal": "2026-09-29",
  "/pharmacy-software-price-in-nepal": "2026-09-29",
  // Section headings rewritten on 2026-10-13 (the "X, not Y" formula).
  "/best-it-company-in-nepal": "2026-10-13",
  "/crm-software-in-nepal": "2026-10-13",
  "/ui-ux-design-company-in-nepal": "2026-10-13",
  "/digital-marketing-agency-in-kathmandu": "2026-10-13",
  "/services": "2026-10-13",
  // The privacy policy was rewritten and the terms page created on 2026-10-13.
  "/privacy-policy": "2026-10-13",
  "/terms": "2026-10-13",
  // ClinicNP by specialty, created 2026-10-13.
  "/clinic-software-in-nepal": "2026-10-13",
  "/dental-clinic-software-in-nepal": "2026-10-13",
  "/best-dental-clinic-software-in-nepal": "2026-10-13",
  "/derma-clinic-software-in-nepal": "2026-10-13",
  "/aesthetic-clinic-software-in-nepal": "2026-10-13",
  "/neuromodulation-clinic-software-in-nepal": "2026-10-13",
  "/physiotherapy-clinic-software-in-nepal": "2026-10-13",
  "/pediatric-clinic-software-in-nepal": "2026-10-13",

  // Three pages added to the Serviol cluster in the same change.
  "/service-management-software-in-nepal": "2026-09-29",
  "/best-service-crm-in-nepal": "2026-09-29",
  "/service-department-management-software-in-nepal": "2026-09-29",
  /*
    Pages whose copy actually changed on 2026-09-29, and only those. The
    temptation is to bump `CONTENT_LAST_UPDATED` instead, which re-dates every
    static URL at once and destroys the signal — see the comment above.
  */
  // Gained the FSM-system vocabulary, three FAQs, and links to the new siblings.
  "/field-service-management-software-in-nepal": "2026-09-29",
  // Gained the "best service CRM" answer and two cluster links.
  "/service-crm-in-nepal": "2026-09-29",
  // Gained the clinic and pharmacy group on 2026-09-29, and the specialty
  // clinic answer on 2026-10-13.
  "/faq": "2026-10-13",
  // Now introduces six products rather than five.
  "/products": "2026-09-29",
  // Stats and the "why us" heading rewritten on 2026-10-13.
  "/": "2026-10-13",
};

/*
  Every ClinicNP, Nidanyo, and Serviol landing page changed on 2026-10-13: the
  shared template began rendering product-specific headings and calls to action
  ("What ClinicNP does about it", "Book a ClinicNP demo") where it had shown
  service-page wording. That is a visible content change on each of those
  pages, so each is dated by it; pages outside those clusters did not change.
*/
for (const page of seoLandingPageList) {
  if (getLandingProduct(page.path) && (PAGE_CONTENT_UPDATED[page.path] ?? "") < "2026-10-13") {
    PAGE_CONTENT_UPDATED[page.path] = "2026-10-13";
  }
}

/**
 * The later of what the repo knows and what the database knows.
 *
 * A page can change two ways: someone edits the copy in the CMS, which stamps
 * the stored row, or someone changes it in the repo and deploys, which stamps
 * nothing. Taking the maximum covers both without either one silently winning —
 * a CMS edit from last week must not overwrite a repo edit from today, and a
 * repo date must not hide an edit an editor made afterwards.
 *
 * Both sides are normalised to `YYYY-MM-DD` first, which makes them safe to
 * compare as strings.
 */
function lastmodFor(
  path: string,
  editDates: Map<string, string>,
  /** Any further date this URL knows about, such as a product row's `updated_at`. */
  ...extra: Array<string | null | undefined>
): string {
  const candidates = [PAGE_CONTENT_UPDATED[path], editDates.get(path), ...extra]
    .filter((value): value is string => Boolean(value))
    .map((value) => toSitemapDate(value));

  if (candidates.length === 0) return CONTENT_LAST_UPDATED;
  return candidates.reduce((latest, value) => (value > latest ? value : latest));
}

/**
 * Normalise any stored timestamp into the W3C date format sitemaps require.
 *
 * The products table defaults `updated_at` to SQLite's CURRENT_TIMESTAMP, which
 * produces "2026-06-11 21:01:35": a space separator, not the "T" of an ISO
 * string. Splitting that on "T" returns the whole string unchanged, so the raw
 * value was being written into <lastmod> and Search Console rejected the
 * sitemap with "An invalid date was found". Anything unparseable now falls back
 * to a known good date rather than poisoning the file.
 */
function toSitemapDate(value?: string | null): string {
  if (!value) return CONTENT_LAST_UPDATED;

  // Fast path: a leading YYYY-MM-DD covers both the SQLite and ISO formats.
  const leadingDate = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (leadingDate) {
    const [iso, year, month, day] = leadingDate;
    // Guard against values like 2026-13-45 that match the shape but are not real dates.
    const parsed = new Date(`${iso}T00:00:00Z`);
    if (
      !Number.isNaN(parsed.getTime()) &&
      parsed.getUTCFullYear() === Number(year) &&
      parsed.getUTCMonth() + 1 === Number(month) &&
      parsed.getUTCDate() === Number(day)
    ) {
      return iso;
    }
  }

  // Anything else (a locale string, an epoch as text) gets one honest attempt.
  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return CONTENT_LAST_UPDATED;
}

/** Escapes the five characters that are not legal as raw text in XML. */
function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

type SitemapEntry = {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: string;
  /** Always set. Required so an entry can never render `<lastmod>undefined</lastmod>`. */
  lastmod: string;
};

export async function GET() {
  const siteUrl = getCanonicalSiteUrl();
  const [products, posts, jobs, editDates] = await Promise.all([
    getProducts(),
    getPosts(),
    getJobs(),
    getLandingPageEditDates(),
  ]);

  const entries: SitemapEntry[] = [
    { path: "/", changefreq: "weekly", priority: "1.0", lastmod: lastmodFor("/", editDates) },
    { path: "/products", changefreq: "weekly", priority: "0.9", lastmod: lastmodFor("/products", editDates) },
    { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: lastmodFor("/services", editDates) },
    ...seoLandingPageList.map((page) => ({
      path: page.path,
      changefreq: "monthly" as const,
      priority: "0.8",
      lastmod: lastmodFor(page.path, editDates),
    })),
    ...products.map((product) => ({
      path: `/products/${product.slug}`,
      changefreq: "monthly" as const,
      priority: "0.8",
      lastmod: lastmodFor(`/products/${product.slug}`, editDates, product.updatedAt),
    })),
    { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: posts[0]?.updatedAt ?? CONTENT_LAST_UPDATED },
    ...posts.map((post) => ({
      path: `/blog/${post.slug}`,
      changefreq: "monthly" as const,
      priority: "0.7",
      lastmod: toSitemapDate(post.updatedAt),
    })),
    // Only open roles are listed. A filled role stays reachable but is marked
    // noindex on the page itself, so advertising it here would contradict that.
    { path: "/careers", changefreq: "weekly", priority: "0.7", lastmod: jobs[0]?.postedAt ?? CONTENT_LAST_UPDATED },
    ...jobs.map((job) => ({
      path: `/careers/${job.slug}`,
      changefreq: "weekly" as const,
      priority: "0.6",
      lastmod: toSitemapDate(job.postedAt),
    })),
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: lastmodFor("/about", editDates) },
    ...team.map((member) => ({
      path: `/team/${member.slug}`,
      changefreq: "monthly" as const,
      priority: "0.6",
      lastmod: lastmodFor(`/team/${member.slug}`, editDates),
    })),
    { path: "/faq", changefreq: "weekly", priority: "0.8", lastmod: lastmodFor("/faq", editDates) },
    { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: lastmodFor("/contact", editDates) },
    { path: "/privacy-policy", changefreq: "yearly", priority: "0.3", lastmod: lastmodFor("/privacy-policy", editDates) },
    { path: "/terms", changefreq: "yearly", priority: "0.3", lastmod: lastmodFor("/terms", editDates) },
    // Listed so the API documentation is indexable in its own right: it is the
    // `service-doc` target in /.well-known/api-catalog, and the page people are
    // sent to when they ask whether this site can be queried programmatically.
    { path: "/docs/api", changefreq: "monthly", priority: "0.4", lastmod: lastmodFor("/docs/api", editDates) },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${escapeXml(`${siteUrl}${entry.path === "/" ? "" : entry.path}`)}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      // The browser may keep it an hour; the CDN serves a copy for 15 minutes and
      // then refreshes it in the background for up to a day.
      "cache-control": "public, max-age=3600, s-maxage=900, stale-while-revalidate=86400",
    },
  });
}
