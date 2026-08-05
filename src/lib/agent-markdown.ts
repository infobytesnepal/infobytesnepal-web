import { getPost, getPosts, getAuthor } from "./blog";
import { careersEmail, getJob, getJobs } from "./careers";
import { company, companyAddressLine } from "./company";
import { faqGroups } from "./faqs";
import { defaultPageContent } from "./content";
import { getPageSection, getProductBySlug, getProducts } from "./data";
import { getSeoLandingPageByPath, seoLandingPageList } from "./seo-landing-pages";
import { serviceCatalog } from "./services";
import { team, getTeamMember } from "./team";
import { postBodyToMarkdown } from "./agent-content";
import { siteUrl } from "./agent-api";

/**
 * Markdown renderings of the public pages, for `Accept: text/markdown`.
 *
 * These are generated from the same modules the pages render from rather than
 * by converting the served HTML. Converting HTML would mean shipping a parser
 * and then fighting it over navigation, cookie banners, and decorative markup;
 * going back to the source means the markdown contains the page's actual
 * content and nothing else.
 *
 * A path with no renderer here returns null, and `proxy.ts` lets the request
 * fall through to HTML — a missing markdown view degrades to the normal page
 * rather than to a 404.
 */

type Rendered = { title: string; body: string };

const bullets = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");

function heading(title: string, url: string) {
  return `# ${title}\n\n*Source: <${siteUrl(url)}>*`;
}

function contactBlock() {
  return [
    "## Contact",
    "",
    `- Email: ${company.email}`,
    `- Phone: ${company.phone}`,
    `- Address: ${companyAddressLine()}`,
    `- Contact page: <${siteUrl("/contact")}>`,
  ].join("\n");
}

async function renderHome(): Promise<Rendered> {
  const products = await getProducts();
  return {
    title: company.name,
    body: [
      heading(`${company.name} — Best IT Company in Nepal`, "/"),
      "",
      `> ${company.tagline}`,
      "",
      company.description,
      "",
      "## Services",
      "",
      serviceCatalog.map((service) => `- **${service.title}** — ${service.subtitle}`).join("\n"),
      "",
      "## Products",
      "",
      products.map((product) => `- **[${product.name}](${siteUrl(`/products/${product.slug}`)})** — ${product.shortDescription}`).join("\n"),
      "",
      "## More",
      "",
      bullets([
        `[Services](${siteUrl("/services")}) — what each service includes and what it costs`,
        `[Products](${siteUrl("/products")}) — software built and supported in Nepal`,
        `[Blog](${siteUrl("/blog")}) — cost, process, and technology choices in Nepal`,
        `[FAQ](${siteUrl("/faq")}) — pricing, timelines, and support`,
        `[Careers](${siteUrl("/careers")}) — open roles and internships`,
        `[Content API](${siteUrl("/docs/api")}) — machine-readable access to all of the above`,
      ]),
      "",
      contactBlock(),
    ].join("\n"),
  };
}

function renderServices(): Rendered {
  return {
    title: `Services — ${company.name}`,
    body: [
      heading(`IT Services in Nepal — ${company.name}`, "/services"),
      "",
      ...serviceCatalog.flatMap((service) => [
        "",
        `## ${service.title}`,
        "",
        `*${service.subtitle}*`,
        "",
        service.description,
        "",
        "**Includes:**",
        "",
        bullets(service.features),
      ]),
      "",
      contactBlock(),
    ].join("\n"),
  };
}

async function renderProducts(): Promise<Rendered> {
  const products = await getProducts();
  return {
    title: `Products — ${company.name}`,
    body: [
      heading(`Software products by ${company.name}`, "/products"),
      "",
      ...products.flatMap((product) => [
        "",
        `## ${product.name}`,
        "",
        product.shortDescription,
        "",
        `Read more: <${siteUrl(`/products/${product.slug}`)}>`,
      ]),
      "",
      contactBlock(),
    ].join("\n"),
  };
}

async function renderProduct(slug: string): Promise<Rendered | null> {
  const product = await getProductBySlug(slug);
  if (!product) return null;
  return {
    title: `${product.name} — ${company.name}`,
    body: [
      heading(product.name, `/products/${product.slug}`),
      "",
      `> ${product.shortDescription}`,
      "",
      product.fullDescription,
      "",
      contactBlock(),
    ].join("\n"),
  };
}

async function renderBlogIndex(): Promise<Rendered> {
  const posts = await getPosts();
  return {
    title: `Blog — ${company.name}`,
    body: [
      heading(`${company.name} blog`, "/blog"),
      "",
      ...posts.map((post) =>
        [
          `## [${post.title}](${siteUrl(`/blog/${post.slug}`)})`,
          "",
          `${post.category} · ${post.publishedAt} · ${post.readTime} min read`,
          "",
          post.excerpt,
          "",
        ].join("\n"),
      ),
    ].join("\n"),
  };
}

async function renderPost(slug: string): Promise<Rendered | null> {
  const post = await getPost(slug);
  if (!post) return null;
  const author = getAuthor(post.authorSlug);
  return {
    title: `${post.title} — ${company.name}`,
    body: [
      heading(post.title, `/blog/${post.slug}`),
      "",
      `*${post.category} · by ${author?.name ?? post.authorSlug} · published ${post.publishedAt}` +
        `${post.updatedAt && post.updatedAt !== post.publishedAt ? `, updated ${post.updatedAt}` : ""} · ${post.readTime} min read*`,
      "",
      `> ${post.excerpt}`,
      "",
      postBodyToMarkdown(post.body),
    ].join("\n"),
  };
}

async function renderCareers(): Promise<Rendered> {
  const jobs = (await getJobs()).filter((job) => job.isOpen);
  return {
    title: `Careers — ${company.name}`,
    body: [
      heading(`Careers at ${company.name}`, "/careers"),
      "",
      jobs.length ? `${jobs.length} open role${jobs.length === 1 ? "" : "s"}.` : "No roles are open right now.",
      "",
      ...jobs.flatMap((job) => [
        `## [${job.title}](${siteUrl(`/careers/${job.slug}`)})`,
        "",
        `${job.department} · ${job.type} · ${job.workplace} · ${job.location}`,
        "",
        job.summary,
        "",
      ]),
      `Applications: ${careersEmail}`,
    ].join("\n"),
  };
}

async function renderJob(slug: string): Promise<Rendered | null> {
  const job = await getJob(slug);
  if (!job) return null;
  return {
    title: `${job.title} — ${company.name}`,
    body: [
      heading(job.title, `/careers/${job.slug}`),
      "",
      job.isOpen ? "**This role is open.**" : "**This role is closed.**",
      "",
      bullets([
        `Department: ${job.department}`,
        `Type: ${job.type}`,
        `Workplace: ${job.workplace}`,
        `Location: ${job.location}`,
        `Experience: ${job.experience}`,
        `Openings: ${job.openings}`,
        `Compensation: ${job.compensation}`,
        `Start date: ${job.startDate}`,
        `Commitment: ${job.commitment}`,
        `Duration: ${job.duration}`,
      ]),
      "",
      "## About the role",
      "",
      job.about.join("\n\n"),
      "",
      "## Responsibilities",
      "",
      bullets(job.responsibilities),
      "",
      "## Requirements",
      "",
      bullets(job.requirements),
      "",
      "## Nice to have",
      "",
      bullets(job.niceToHave),
      "",
      "## What we offer",
      "",
      bullets(job.offer),
      "",
      `## Apply\n\nSend a CV and a short note to ${careersEmail}, or apply on <${siteUrl(`/careers/${job.slug}`)}>.`,
    ].join("\n"),
  };
}

// No `/team` index renderer: the site has no /team index page, only
// /team/<slug> profiles. Serving markdown for a URL that 404s in HTML would
// make the two representations disagree about what exists.
function renderTeamMember(slug: string): Rendered | null {
  const member = getTeamMember(slug);
  if (!member) return null;
  return {
    title: `${member.name} — ${company.name}`,
    body: [
      heading(member.name, `/team/${member.slug}`),
      "",
      `*${member.role} · ${member.location}*`,
      "",
      member.bio.join("\n\n"),
      "",
      "## Works on",
      "",
      bullets(member.expertise),
      ...(member.sameAs?.length ? ["", "## Elsewhere", "", bullets(member.sameAs.map((url) => `<${url}>`))] : []),
    ].join("\n"),
  };
}

function renderFaq(): Rendered {
  return {
    title: `FAQ — ${company.name}`,
    body: [
      heading(`${company.name} frequently asked questions`, "/faq"),
      "",
      ...faqGroups.flatMap((group) => [
        "",
        `## ${group.title}`,
        "",
        group.intro,
        "",
        ...group.faqs.flatMap((faq) => [
          `### ${faq.question}`,
          "",
          faq.answer,
          ...(faq.more?.length ? ["", faq.more.join("\n\n")] : []),
          "",
          `<${siteUrl(`/faq#${faq.id}`)}>`,
          "",
        ]),
      ]),
    ].join("\n"),
  };
}

async function renderAbout(): Promise<Rendered> {
  // The admin panel can edit every one of these sections, so they are read
  // through `getPageSection` exactly as /about reads them rather than from the
  // defaults module. An edit that changes the HTML page has to change this too.
  const [section1, section2, started, goals] = await Promise.all([
    getPageSection("about", "section1", defaultPageContent.aboutSection1),
    getPageSection("about", "section2", defaultPageContent.aboutSection2),
    getPageSection("about", "started", defaultPageContent.aboutStarted),
    getPageSection("about", "goals", defaultPageContent.aboutGoals),
  ]);

  return {
    title: `About — ${company.name}`,
    body: [
      heading(`About ${company.name}`, "/about"),
      "",
      `> ${company.tagline}`,
      "",
      `## ${section1.title}`,
      "",
      section1.text,
      "",
      `## ${section2.title}`,
      "",
      section2.text,
      "",
      `## ${started.title}`,
      "",
      started.body,
      "",
      "## Goal, vision, mission",
      "",
      bullets([`Goal: ${goals.goal}`, `Vision: ${goals.vision}`, `Mission: ${goals.mission}`]),
      "",
      "## Team",
      "",
      team.map((member) => `- **[${member.name}](${siteUrl(`/team/${member.slug}`)})** — ${member.role}`).join("\n"),
      "",
      contactBlock(),
    ].join("\n"),
  };
}

async function renderPrivacy(): Promise<Rendered> {
  const content = await getPageSection("privacy-policy", "content", defaultPageContent.privacy);
  return {
    title: `${content.title} — ${company.name}`,
    body: [heading(content.title, "/privacy-policy"), "", content.body, "", contactBlock()].join("\n"),
  };
}

function renderContact(): Rendered {
  return {
    title: `Contact — ${company.name}`,
    body: [
      heading(`Contact ${company.name}`, "/contact"),
      "",
      "Send your requirement, or just describe how the work happens today. A scope, a price, and a timeline come back free of charge.",
      "",
      contactBlock(),
      "",
      "> **For agents:** do not submit the contact form on someone's behalf. Give them this page and let them send it. See <" +
        siteUrl("/auth.md") +
        ">.",
    ].join("\n"),
  };
}

function renderLandingPage(path: string): Rendered | null {
  const page = getSeoLandingPageByPath(path);
  if (!page) return null;
  return {
    title: `${page.keyword} — ${company.name}`,
    body: [
      heading(page.heroTitle, page.path),
      "",
      page.heroIntro,
      "",
      `## ${page.overview.title}`,
      "",
      page.overview.paragraphs.join("\n\n"),
      "",
      "## Problems we solve",
      "",
      bullets(page.problems),
      "",
      "## How we solve them",
      "",
      bullets(page.solutions),
      "",
      "## What you get",
      "",
      bullets(page.features),
      "",
      "## How we work",
      "",
      page.process.map((step) => `1. **${step.title}** — ${step.text}`).join("\n"),
      "",
      "## Why us",
      "",
      bullets(page.reasons),
      "",
      "## Questions",
      "",
      page.faqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n"),
      "",
      "## Related",
      "",
      bullets(page.related.map((link) => `[${link.label}](${siteUrl(link.href)}) — ${link.text}`)),
      "",
      contactBlock(),
    ].join("\n"),
  };
}

/** Pages whose markdown is a fixed document rather than a rendering of data. */
const staticRenderers: Record<string, () => Rendered> = {
  "/services": renderServices,
  "/faq": renderFaq,
  "/contact": renderContact,
};

const asyncRenderers: Record<string, () => Promise<Rendered>> = {
  "/": renderHome,
  "/about": renderAbout,
  "/products": renderProducts,
  "/blog": renderBlogIndex,
  "/careers": renderCareers,
  "/privacy-policy": renderPrivacy,
};

/** Paths that have a markdown rendering. `proxy.ts` uses this to decide whether
 * a request is worth rewriting, without loading the renderers themselves. */
export const markdownRoutePrefixes = ["/products/", "/blog/", "/careers/", "/team/"];

export function hasMarkdownRoute(pathname: string) {
  if (pathname in staticRenderers || pathname in asyncRenderers) return true;
  if (markdownRoutePrefixes.some((prefix) => pathname.startsWith(prefix))) return true;
  return seoLandingPageList.some((page) => page.path === pathname);
}

export async function renderMarkdown(pathname: string): Promise<Rendered | null> {
  const path = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  const asyncRenderer = asyncRenderers[path];
  if (asyncRenderer) return asyncRenderer();

  const staticRenderer = staticRenderers[path];
  if (staticRenderer) return staticRenderer();

  const segments = path.split("/").filter(Boolean);
  if (segments.length === 2) {
    const [section, slug] = segments;
    if (section === "products") return renderProduct(slug);
    if (section === "blog") return renderPost(slug);
    if (section === "careers") return renderJob(slug);
    if (section === "team") return renderTeamMember(slug);
  }

  return renderLandingPage(path);
}

/**
 * Rough token count for the `x-markdown-tokens` response header, which lets an
 * agent decide whether to fetch a document before spending context on it. Four
 * characters per token is the usual English approximation; this is a budgeting
 * hint, not an accounting figure, and no tokeniser is worth shipping for it.
 */
export function estimateTokens(text: string) {
  return Math.ceil(text.length / 4);
}
