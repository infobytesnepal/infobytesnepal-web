import { allSeoLandingPages } from "../src/lib/seo-landing-pages";
import { landingPageSchema } from "../src/lib/validation";
import { mergeLandingPage } from "../src/lib/landing-pages";

/**
 * Every landing page in the repo must satisfy the schema the CMS form validates
 * against, and must survive a save/read round trip unchanged.
 *
 * Both directions matter. If a page's own default data fails the schema, then
 * opening it in the CMS and pressing Save without changing anything is rejected
 * — the editor would hit an error on a page they had not even edited yet. And
 * if the merge drops a field the form submitted, an edit would appear to save
 * and then not show up.
 *
 *   npm run check:pages
 */
let failures = 0;
const keys = Object.keys(allSeoLandingPages) as Array<keyof typeof allSeoLandingPages>;

for (const key of keys) {
  const page = allSeoLandingPages[key];

  const parsed = landingPageSchema.safeParse({
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    ogTitle: page.ogTitle,
    ogDescription: page.ogDescription,
    keyword: page.keyword,
    heroTitle: page.heroTitle,
    heroIntro: page.heroIntro,
    overview: page.overview,
    problems: page.problems,
    solutions: page.solutions,
    features: page.features,
    process: page.process,
    reasons: page.reasons,
    related: page.related,
    faqs: page.faqs,
  });

  if (!parsed.success) {
    failures += 1;
    console.error(`\n${key} (${page.path}) does not satisfy the CMS schema:`);
    for (const issue of parsed.error.issues) {
      console.error(`  ${issue.path.join(".")}: ${issue.message}`);
    }
    continue;
  }

  // Saving that parsed document and reading it back must reproduce the page.
  const merged = mergeLandingPage(page, JSON.parse(JSON.stringify(parsed.data)));
  const before = JSON.stringify(page);
  const after = JSON.stringify(merged);
  if (before !== after) {
    failures += 1;
    console.error(`\n${key} (${page.path}) changed on a save/read round trip:`);
    console.error(`  before: ${before.slice(0, 240)}`);
    console.error(`  after:  ${after.slice(0, 240)}`);
  }
}

if (failures) {
  console.error(`\n${failures} landing page(s) have a problem.\n`);
  process.exit(1);
}
console.log(`\n${keys.length} landing pages validate and round trip unchanged.\n`);
