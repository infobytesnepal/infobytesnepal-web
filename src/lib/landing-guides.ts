import { getPosts, type Post } from "./blog";
import { webServicesHubPath } from "./seo-landing-pages-web";

/**
 * Blog posts each landing page points to, under "Further reading".
 *
 * The posts are written through the CMS and the landing pages live in the repo,
 * so until this existed nothing connected the two: a post on choosing a web
 * development company sat three clicks from the web development page and was
 * linked from nowhere except the blog index and the sitemap. Search Console
 * showed the result in November 2026, with two dozen URLs "Discovered,
 * currently not indexed". Links from the commercial pages are the strongest
 * signal the site can give that a post matters, and the post in turn is the
 * longer answer a reader of the landing page was looking for.
 *
 * Slugs are listed most relevant first. Anything not currently published is
 * dropped when the page renders, so unpublishing or renaming a post in the CMS
 * removes the link instead of leaving a 404 on a commercial page. The blog's
 * publish action revalidates every path listed here for the same reason.
 *
 * This lives in code rather than in the landing page CMS form on purpose: the
 * form saves a whole page, so a page edited once in the CMS would freeze its
 * list here forever, and new posts would never reach it.
 */
const W = {
  chooseWebCompany: "how-to-choose-a-web-development-company-in-nepal-for-your-business",
  websiteCost: "how-much-does-a-website-cost-in-nepal",
  mobileResponsive: "why-your-business-needs-a-mobile-responsive-website",
  maintenanceChecklist: "website-maintenance-in-nepal-a-monthly-checklist-for-business-owners",
  visitorsToCustomers: "how-to-turn-website-visitors-into-customers-in-nepal-10-practical-improvements",
  slowOnMobileData: "why-your-site-is-slow-on-mobile-data",
  googleBusinessProfile: "google-business-profile-optimization-in-nepal-how-to-get-more-local-customers",
  localSeoChecklist: "local-seo-checklist-for-nepali-businesses",
  notRanking: "why-is-my-website-not-ranking-on-google-15-common-seo-problems",
  seoTimeline: "how-long-does-seo-take-in-nepal-a-practical-guide-for-businesses",
  seoForSmallBusiness: "seo-and-digital-marketing-for-small-businesses-in-nepal",
  marketingBudget: "digital-marketing-budget-in-nepal-how-much-should-small-businesses-spend",
  chooseItCompany: "choosing-an-it-company-in-nepal",
  customVsReadyMade: "custom-software-vs-ready-made-software-which-is-better-for-your-business-in-nepal",
  offSpreadsheets: "when-to-move-off-spreadsheets",
  crm: "crm-software-in-nepal-features-benefits-and-how-to-choose-the-right-system",
  leadManagement: "lead-management-software-in-nepal-how-to-stop-losing-sales-opportunities",
  erp: "erp-software-in-nepal-what-it-is-who-needs-it-and-how-to-choose-the-right-system",
  pos: "pos-software-in-nepal-features-benefits-and-how-to-choose-the-right-system",
  inventory: "inventory-management-software-in-nepal-how-to-reduce-stock-errors-and-improve-business-efficiency",
  processAutomation: "business-process-automation-in-nepal-what-can-you-automate",
  manualVsAutomated: "manual-vs-automated-business-processes-in-nepal-when-should-you-make-the-switch",
  workflow: "workflow-management-software-nepal-a-practical-guide-for-growing-businesses",
  automationMeaning: "what-business-automation-actually-means",
  complaints: "customer-complaint-management-in-nepal-how-businesses-can-respond-faster-and-build-trust",
  fieldService: "field-service-management-software-in-nepal-a-practical-guide-for-businesses",
  fieldSales: "field-sales-management-software-in-nepal-a-practical-guide-for-growing-businesses",
  barcodeSamples: "barcode-sample-tracking-software-nepal-a-practical-guide-for-laboratories",
} as const;

/** Local search basics, shared by every city page in the web cluster. */
const cityWebGuides = [W.googleBusinessProfile, W.localSeoChecklist, W.websiteCost, W.mobileResponsive];

export const landingGuides: Record<string, readonly string[]> = {
  // Web cluster
  "/web-development-company-in-nepal": [W.chooseWebCompany, W.websiteCost, W.visitorsToCustomers, W.slowOnMobileData],
  [webServicesHubPath]: [W.chooseWebCompany, W.websiteCost, W.mobileResponsive, W.maintenanceChecklist],
  "/web-design-company-in-nepal": [W.mobileResponsive, W.visitorsToCustomers, W.chooseWebCompany, W.slowOnMobileData],
  "/web-design-company-in-kathmandu": cityWebGuides,
  "/web-design-company-in-lalitpur": cityWebGuides,
  "/web-design-company-in-bhaktapur": cityWebGuides,
  "/web-design-company-in-pokhara": cityWebGuides,
  "/web-design-company-in-chitwan": cityWebGuides,
  "/web-design-company-in-butwal": cityWebGuides,
  "/web-design-company-in-biratnagar": cityWebGuides,
  "/website-cost-in-nepal": [W.websiteCost, W.chooseWebCompany, W.maintenanceChecklist],
  "/website-maintenance-services-in-nepal": [W.maintenanceChecklist, W.slowOnMobileData, W.notRanking],
  "/ecommerce-website-development-nepal": [W.visitorsToCustomers, W.slowOnMobileData, W.websiteCost],
  "/wordpress-development-company-in-nepal": [W.maintenanceChecklist, W.slowOnMobileData, W.chooseWebCompany],
  "/ui-ux-design-company-in-nepal": [W.visitorsToCustomers, W.mobileResponsive],

  // Marketing cluster
  "/seo-company-in-nepal": [W.notRanking, W.seoTimeline, W.localSeoChecklist, W.googleBusinessProfile],
  "/digital-marketing-company-in-nepal": [W.marketingBudget, W.seoForSmallBusiness, W.googleBusinessProfile],
  "/digital-marketing-agency-in-kathmandu": [W.marketingBudget, W.googleBusinessProfile, W.localSeoChecklist],
  "/social-media-marketing-agency-in-nepal": [W.marketingBudget, W.seoForSmallBusiness],

  // Company cluster
  "/it-company-in-nepal": [W.chooseItCompany, W.customVsReadyMade],
  "/best-it-company-in-nepal": [W.chooseItCompany, W.chooseWebCompany],
  "/trusted-it-company-in-nepal": [W.chooseItCompany],

  // Software cluster
  "/software-development-company-in-nepal": [W.customVsReadyMade, W.chooseItCompany, W.offSpreadsheets],
  "/business-automation-software-nepal": [W.processAutomation, W.manualVsAutomated, W.workflow, W.automationMeaning],
  "/crm-software-in-nepal": [W.crm, W.leadManagement],
  "/erp-software-in-nepal": [W.erp, W.customVsReadyMade, W.offSpreadsheets],
  "/pos-software-in-nepal": [W.pos, W.inventory],
  "/inventory-management-software-in-nepal": [W.inventory, W.pos],
  "/complaint-management-system-nepal": [W.complaints],
  "/service-crm-in-nepal": [W.complaints, W.fieldService],
  "/field-service-management-software-in-nepal": [W.fieldService],
  "/lab-software-in-nepal": [W.barcodeSamples],
  "/laboratory-information-management-system-nepal": [W.barcodeSamples],
};

/** Every page that lists posts, so a blog publish can revalidate them. */
export const guidedLandingPaths = Object.keys(landingGuides);

/**
 * The published posts a page should list, in the order given above.
 *
 * `exclude` is the page's own related links: a post the editor already linked
 * in "Related services and products" is not repeated a section later.
 */
export async function getLandingGuides(path: string, exclude: readonly string[] = []): Promise<Post[]> {
  const slugs = landingGuides[path];
  if (!slugs?.length) return [];
  const published = new Map((await getPosts()).map((post) => [post.slug, post]));
  const skip = new Set(exclude);
  return slugs
    .filter((slug) => !skip.has(`/blog/${slug}`))
    .map((slug) => published.get(slug))
    .filter((post): post is Post => Boolean(post));
}
