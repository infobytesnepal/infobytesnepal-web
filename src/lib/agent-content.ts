import { getPost, getPosts, getAuthor, type Post, type PostBlock } from "./blog";
import { careersEmail, getJob, getJobs } from "./careers";
import { company } from "./company";
import { getProductBySlug, getProducts } from "./data";
import { allFaqs, faqGroups } from "./faqs";
import { seoLandingPageList } from "./seo-landing-pages";
import { serviceCatalog } from "./services";
import { team } from "./team";
import { siteUrl } from "./agent-api";

/**
 * One projection layer for every machine-readable view of the site.
 *
 * The REST endpoints under /api/v1, the MCP tools, and the WebMCP tools all
 * answer the same questions, and an agent that reaches the same content through
 * two different transports must not get two different answers. So none of them
 * touch `lib/blog.ts` or `lib/data.ts` directly: they all call the functions
 * here, which own the shape of the public representation.
 *
 * Editorial fields are exposed; internal ones (database ids, timestamps,
 * publication flags, layout hints) are deliberately projected away. Adding a
 * column to a table should never silently widen the public API.
 */

export type SearchResult = {
  type: "product" | "service" | "post" | "job" | "page" | "faq" | "person";
  title: string;
  summary: string;
  url: string;
};

export function companyProfile() {
  return {
    name: company.name,
    legalName: company.legalName,
    tagline: company.tagline,
    description: company.description,
    founded: company.founded,
    url: siteUrl(),
    contact: {
      email: company.email,
      careersEmail,
      phone: company.phone,
      contactPage: siteUrl("/contact"),
    },
    address: {
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      addressCountry: company.address.country,
    },
    areaServed: [...company.areaServed],
    languages: [...company.languages],
    resources: {
      llmsTxt: siteUrl("/llms.txt"),
      sitemap: siteUrl("/sitemap.xml"),
      openapi: siteUrl("/api/openapi.json"),
      apiCatalog: siteUrl("/.well-known/api-catalog"),
      mcp: siteUrl("/api/mcp"),
      agentSkills: siteUrl("/.well-known/agent-skills/index.json"),
    },
  };
}

export async function listProducts() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
    name: product.name,
    shortDescription: product.shortDescription,
    url: siteUrl(`/products/${product.slug}`),
  }));
}

export async function getProductDetail(slug: string) {
  const product = await getProductBySlug(slug);
  if (!product) return null;
  return {
    slug: product.slug,
    name: product.name,
    shortDescription: product.shortDescription,
    fullDescription: product.fullDescription,
    logo: product.logoUrl ? siteUrl(product.logoUrl) : null,
    url: siteUrl(`/products/${product.slug}`),
  };
}

export function listServices() {
  return serviceCatalog.map((service) => ({
    slug: service.slug,
    name: service.title,
    summary: service.subtitle,
    description: service.description,
    features: [...service.features],
    url: siteUrl("/services"),
    relatedPages: service.links.map((link) => ({ label: link.label, url: siteUrl(link.href) })),
  }));
}

/**
 * The post body is stored as typed blocks so the site can style each element
 * with its own tokens. Agents want prose, so the blocks are flattened back to
 * CommonMark here rather than shipping the block union across the wire and
 * making every caller learn it.
 */
export function postBodyToMarkdown(body: PostBlock[]): string {
  return body
    .map((block) => {
      switch (block.type) {
        case "p":
          return block.text;
        case "h1":
          // Only reachable if an author wrote one in the body. Kept so the
          // agent-facing copy of a post never silently drops a whole heading.
          return `# ${block.text}`;
        case "h2":
          return `## ${block.text}`;
        case "h3":
          return `### ${block.text}`;
        case "ul":
          return block.items.map((item) => `- ${item}`).join("\n");
        case "ol":
          return block.items.map((item, index) => `${index + 1}. ${item}`).join("\n");
        case "quote":
          return `> ${block.text}${block.cite ? `\n>\n> — ${block.cite}` : ""}`;
        case "code":
          return `\`\`\`${block.language}\n${block.code}\n\`\`\``;
        case "figure":
          return `![${block.alt}](${siteUrl(block.src)})\n\n*${block.caption}*`;
        case "table": {
          const head = `| ${block.head.join(" | ")} |`;
          const rule = `| ${block.head.map(() => "---").join(" | ")} |`;
          const rows = block.rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
          return [block.caption ? `*${block.caption}*` : "", head, rule, rows].filter(Boolean).join("\n");
        }
        default:
          return "";
      }
    })
    .filter(Boolean)
    .join("\n\n");
}

function postSummary(post: Post) {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: [...post.tags],
    author: getAuthor(post.authorSlug)?.name ?? post.authorSlug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readTimeMinutes: post.readTime,
    url: siteUrl(`/blog/${post.slug}`),
  };
}

export async function listPosts(options: { limit?: number; category?: string } = {}) {
  const posts = await getPosts();
  const filtered = options.category
    ? posts.filter((post) => post.category.toLowerCase() === options.category!.toLowerCase())
    : posts;
  const limited = options.limit ? filtered.slice(0, options.limit) : filtered;
  return limited.map(postSummary);
}

export async function getPostDetail(slug: string) {
  const post = await getPost(slug);
  if (!post) return null;
  const author = getAuthor(post.authorSlug);
  return {
    ...postSummary(post),
    authorRole: author?.role ?? null,
    coverImage: siteUrl(post.coverImage),
    coverAlt: post.coverAlt,
    contentMarkdown: postBodyToMarkdown(post.body),
  };
}

export async function listJobs(options: { openOnly?: boolean } = {}) {
  const jobs = await getJobs();
  const filtered = options.openOnly === false ? jobs : jobs.filter((job) => job.isOpen);
  return filtered.map((job) => ({
    slug: job.slug,
    title: job.title,
    department: job.department,
    employmentType: job.type,
    workplace: job.workplace,
    location: job.location,
    openings: job.openings,
    compensation: job.compensation,
    experience: job.experience,
    postedAt: job.postedAt,
    isOpen: job.isOpen,
    summary: job.summary,
    url: siteUrl(`/careers/${job.slug}`),
  }));
}

export async function getJobDetail(slug: string) {
  const job = await getJob(slug);
  if (!job) return null;
  const [summary] = (await listJobs({ openOnly: false })).filter((item) => item.slug === slug);
  return {
    ...summary,
    duration: job.duration,
    commitment: job.commitment,
    startDate: job.startDate,
    about: [...job.about],
    responsibilities: [...job.responsibilities],
    requirements: [...job.requirements],
    niceToHave: [...job.niceToHave],
    offer: [...job.offer],
    applyBy: careersEmail,
  };
}

export function listTeam() {
  return team.map((member) => ({
    slug: member.slug,
    name: member.name,
    role: member.role,
    summary: member.summary,
    location: member.location,
    expertise: [...member.expertise],
    url: siteUrl(`/team/${member.slug}`),
  }));
}

export function listFaqs(options: { topic?: string; limit?: number } = {}) {
  const groups = options.topic
    ? faqGroups.filter(
        (group) =>
          group.id.toLowerCase() === options.topic!.toLowerCase() ||
          group.title.toLowerCase().includes(options.topic!.toLowerCase()),
      )
    : faqGroups;
  const items = groups.flatMap((group) =>
    group.faqs.map((faq) => ({
      id: faq.id,
      topic: group.id,
      topicTitle: group.title,
      question: faq.question,
      answer: faq.answer,
      details: faq.more ? [...faq.more] : [],
      url: siteUrl(`/faq#${faq.id}`),
    })),
  );
  return options.limit ? items.slice(0, options.limit) : items;
}

export function listLandingPages() {
  return seoLandingPageList.map((page) => ({
    slug: page.slug,
    keyword: page.keyword,
    title: page.heroTitle,
    summary: page.metaDescription,
    url: siteUrl(page.path),
  }));
}

/**
 * One text search across every content type.
 *
 * This is substring matching over titles and summaries, not a ranked index: the
 * corpus is a few hundred short records held in memory, so an index would be
 * more machinery than the problem needs. Results are ordered by content type
 * rather than by score, so an agent asking about a product does not have to
 * read past ten FAQ entries to find it.
 */
export async function searchSite(query: string, limit = 10): Promise<SearchResult[]> {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];

  const matches = (...fields: Array<string | undefined>) =>
    fields.some((field) => field?.toLowerCase().includes(needle));

  const [products, posts, jobs] = await Promise.all([listProducts(), listPosts(), listJobs()]);

  const results: SearchResult[] = [
    ...products
      .filter((item) => matches(item.name, item.shortDescription))
      .map((item) => ({ type: "product" as const, title: item.name, summary: item.shortDescription, url: item.url })),
    ...listServices()
      .filter((item) => matches(item.name, item.summary, item.description))
      .map((item) => ({ type: "service" as const, title: item.name, summary: item.summary, url: item.url })),
    ...posts
      .filter((item) => matches(item.title, item.excerpt, item.tags.join(" ")))
      .map((item) => ({ type: "post" as const, title: item.title, summary: item.excerpt, url: item.url })),
    ...listLandingPages()
      .filter((item) => matches(item.keyword, item.title, item.summary))
      .map((item) => ({ type: "page" as const, title: item.title, summary: item.summary, url: item.url })),
    ...allFaqs
      .filter((item) => matches(item.question, item.answer))
      .map((item) => ({
        type: "faq" as const,
        title: item.question,
        summary: item.answer,
        url: siteUrl(`/faq#${item.id}`),
      })),
    ...jobs
      .filter((item) => matches(item.title, item.summary, item.department))
      .map((item) => ({ type: "job" as const, title: item.title, summary: item.summary, url: item.url })),
    ...listTeam()
      .filter((item) => matches(item.name, item.role, item.expertise.join(" ")))
      .map((item) => ({ type: "person" as const, title: item.name, summary: item.summary, url: item.url })),
  ];

  return results.slice(0, limit);
}
