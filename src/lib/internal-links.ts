/**
 * Site-wide internal linking map.
 *
 * The site is organised as five topical clusters. Each cluster has one pillar
 * page that owns the broad head term, and a set of member pages that own the
 * long-tail terms underneath it. Every page in a cluster links up to its
 * pillar, sideways to its siblings, and across to a small number of pages in
 * other clusters. That shape is what makes a site read as an authority on a
 * topic rather than as a pile of unrelated landing pages.
 *
 * Three pages carry the commercial weight and are deliberately linked from
 * everywhere else on the site (see `priorityPaths`).
 *
 * Anchor text is varied per source page rather than repeated verbatim, because
 * the same exact-match anchor on 40 pages reads as manipulation, not structure.
 */

export type ClusterId = "company" | "software" | "web" | "marketing" | "products";

export type LinkNode = {
  /** Route, always root-relative and without a trailing slash. */
  href: string;
  /** Short human label used in navigation lists and footers. */
  label: string;
  /** Anchor text options. The first is the primary keyword phrase. */
  anchors: string[];
  /** One line explaining what is on the page, shown under the link. */
  blurb: string;
  cluster: ClusterId;
};

export type Cluster = {
  id: ClusterId;
  /** Heading used when this cluster is rendered as a link block. */
  title: string;
  intro: string;
  pillar: LinkNode;
  members: LinkNode[];
  /** Paths in other clusters that this cluster's pages should bridge to. */
  bridges: string[];
};

const node = (
  href: string,
  label: string,
  anchors: string[],
  blurb: string,
  cluster: ClusterId,
): LinkNode => ({ href, label, anchors, blurb, cluster });

export const clusters: Cluster[] = [
  {
    id: "company",
    title: "Infobytes Nepal as your IT partner",
    intro:
      "Who we are, where we work, and how we compare when you are choosing an IT company in Nepal.",
    pillar: node(
      "/it-company-in-nepal",
      "IT Company in Nepal",
      ["IT company in Nepal", "IT services company in Nepal", "an IT company based in Nepal"],
      "What an IT company in Nepal should actually do for your business.",
      "company",
    ),
    members: [
      node(
        "/best-it-company-in-nepal",
        "Best IT Company in Nepal",
        [
          "best IT company in Nepal",
          "how to pick the best IT company in Nepal",
          "what makes an IT company in Nepal worth hiring",
        ],
        "The questions worth asking before you sign with any IT company here.",
        "company",
      ),
      node(
        "/trusted-it-company-in-nepal",
        "Trusted IT Company in Nepal",
        [
          "trusted IT company in Nepal",
          "a trusted IT partner in Nepal",
          "how trust is earned by an IT company in Nepal",
        ],
        "What trust looks like in practice: scope, ownership, and support after launch.",
        "company",
      ),
      node(
        "/top-it-companies-in-nepal",
        "Top IT Companies in Nepal",
        ["top IT companies in Nepal", "comparing IT companies in Nepal", "the IT company landscape in Nepal"],
        "How the market is structured and where different kinds of firms fit.",
        "company",
      ),
      node(
        "/it-company-in-kathmandu",
        "IT Company in Kathmandu",
        ["IT company in Kathmandu", "IT services in Kathmandu"],
        "Working with businesses across the Kathmandu valley.",
        "company",
      ),
      node(
        "/it-company-in-lalitpur",
        "IT Company in Lalitpur",
        ["IT company in Lalitpur", "IT services in Lalitpur and Patan"],
        "Software and web work for Lalitpur and Patan businesses.",
        "company",
      ),
      node(
        "/it-company-in-bhaktapur",
        "IT Company in Bhaktapur",
        ["IT company in Bhaktapur", "our home base in Bhaktapur"],
        "Our office is in Kaushaltar, Bhaktapur.",
        "company",
      ),
      node(
        "/it-company-in-pokhara",
        "IT Company in Pokhara",
        ["IT company in Pokhara", "IT services for Pokhara businesses"],
        "Hospitality, education, and trading businesses around Pokhara.",
        "company",
      ),
      node(
        "/it-company-in-butwal",
        "IT Company in Butwal",
        ["IT company in Butwal", "IT services in Butwal and Rupandehi"],
        "Trading, distribution, and service businesses in Butwal.",
        "company",
      ),
      node(
        "/it-company-in-chitwan",
        "IT Company in Chitwan",
        ["IT company in Chitwan", "IT services in Bharatpur and Chitwan"],
        "Hotels, hospitals, and colleges across Chitwan.",
        "company",
      ),
      node(
        "/it-company-in-biratnagar",
        "IT Company in Biratnagar",
        ["IT company in Biratnagar", "IT services in Biratnagar and Morang"],
        "Manufacturers, distributors, and traders in Biratnagar.",
        "company",
      ),
      node(
        "/it-training-institute-in-nepal",
        "IT Training in Nepal",
        ["IT training in Nepal", "practical IT training in Nepal", "web development training in Nepal"],
        "Project-based training in web development, front-end, marketing, and SEO.",
        "company",
      ),
    ],
    bridges: [
      "/software-development-company-in-nepal",
      "/web-development-company-in-nepal",
      "/digital-marketing-company-in-nepal",
      "/products",
    ],
  },
  {
    id: "software",
    title: "Software and systems we build",
    intro:
      "Custom software, industry systems, and automation built around how a Nepali business actually runs.",
    pillar: node(
      "/software-development-company-in-nepal",
      "Software Development Company in Nepal",
      [
        "software development company in Nepal",
        "custom software development in Nepal",
        "software development in Nepal",
      ],
      "Custom systems built around real workflows instead of a generic template.",
      "software",
    ),
    members: [
      node(
        "/business-automation-software-nepal",
        "Business Automation",
        ["business automation in Nepal", "business automation software in Nepal", "automating manual work"],
        "Removing the repeated manual steps between departments.",
        "software",
      ),
      node(
        "/crm-software-in-nepal",
        "CRM Software",
        ["CRM software in Nepal", "customer relationship management in Nepal"],
        "Leads, follow-up, and customer history in one place.",
        "software",
      ),
      node(
        "/erp-software-in-nepal",
        "ERP Software",
        ["ERP software in Nepal", "ERP systems for Nepali businesses"],
        "Connected modules for businesses that have outgrown separate tools.",
        "software",
      ),
      node(
        "/pos-software-in-nepal",
        "POS Software",
        ["POS software in Nepal", "point of sale software in Nepal"],
        "Counter billing, stock, and daily reconciliation for retail.",
        "software",
      ),
      node(
        "/inventory-management-software-in-nepal",
        "Inventory Management Software",
        ["inventory management software in Nepal", "stock management software in Nepal"],
        "Multi-warehouse stock, movement, and reorder control.",
        "software",
      ),
      node(
        "/school-management-software-in-nepal",
        "School Management Software",
        ["school management software in Nepal", "school and college systems in Nepal"],
        "Admissions, attendance, fees, and results in one system.",
        "software",
      ),
      node(
        "/hospital-management-software-in-nepal",
        "Hospital Management Software",
        ["hospital management software in Nepal", "hospital information systems in Nepal"],
        "Registration, OPD and IPD, pharmacy, lab, and billing together.",
        "software",
      ),
      node(
        "/lab-software-in-nepal",
        "Lab Software",
        [
          "lab software in Nepal",
          "lab management software in Nepal",
          "laboratory software for medical labs in Nepal",
        ],
        "Nidanyo: registration to verified report, billing, and reagent stock.",
        "software",
      ),
      node(
        "/laboratory-information-management-system-nepal",
        "Laboratory Information Management System",
        [
          "medical laboratory management system in Nepal",
          "laboratory information management system in Nepal",
          "LIMS for medical laboratories in Nepal",
        ],
        "Sample lifecycle, verification, audit trails, and turnaround reporting.",
        "software",
      ),
      node(
        "/ai-development-company-in-nepal",
        "AI Development",
        ["AI development company in Nepal", "AI and automation work in Nepal"],
        "Where AI genuinely helps, and where it is being oversold.",
        "software",
      ),
      node(
        "/mobile-app-development-company-in-nepal",
        "Mobile App Development",
        ["mobile app development company in Nepal", "app development in Nepal"],
        "Android, iOS, and progressive web apps planned around real users.",
        "software",
      ),
      node(
        "/mobile-app-development-cost-in-nepal",
        "Mobile App Development Cost",
        ["mobile app development cost in Nepal", "what an app costs to build in Nepal"],
        "Honest ranges and what actually moves the number.",
        "software",
      ),
    ],
    bridges: [
      "/products",
      "/web-development-company-in-nepal",
      "/best-it-company-in-nepal",
      "/business-automation-software-nepal",
    ],
  },
  {
    id: "web",
    title: "Websites, stores, and interfaces",
    intro: "Everything that lives on the public web: design, build, e-commerce, and keeping it healthy.",
    pillar: node(
      "/web-development-company-in-nepal",
      "Web Development Company in Nepal",
      ["web development company in Nepal", "website development in Nepal", "web development in Nepal"],
      "Fast, mobile-first websites built to be found and to convert.",
      "web",
    ),
    members: [
      node(
        "/web-design-company-in-nepal",
        "Web Design Company",
        ["web design company in Nepal", "website design in Nepal"],
        "Design that carries credibility and still loads quickly.",
        "web",
      ),
      node(
        "/web-design-company-in-kathmandu",
        "Web Design in Kathmandu",
        ["web design company in Kathmandu", "website design in Kathmandu"],
        "Working with Kathmandu businesses on design and build.",
        "web",
      ),
      node(
        "/ecommerce-website-development-nepal",
        "E-commerce Development",
        ["e-commerce website development in Nepal", "online store development in Nepal"],
        "Stores with local payments, delivery, and stock that reconciles.",
        "web",
      ),
      node(
        "/wordpress-development-company-in-nepal",
        "WordPress Development",
        ["WordPress development in Nepal", "WordPress developers in Nepal"],
        "When WordPress is right, and when it quietly becomes a liability.",
        "web",
      ),
      node(
        "/ui-ux-design-company-in-nepal",
        "UI/UX Design",
        ["UI/UX design company in Nepal", "product and interface design in Nepal"],
        "Interface work for products people use every day, not just brochures.",
        "web",
      ),
      node(
        "/website-cost-in-nepal",
        "Website Cost in Nepal",
        ["website cost in Nepal", "what a website costs in Nepal", "website pricing in Nepal"],
        "Real price ranges and the five things that move them.",
        "web",
      ),
      node(
        "/website-maintenance-services-in-nepal",
        "Website Maintenance",
        ["website maintenance services in Nepal", "website support and maintenance in Nepal"],
        "Backups, patching, monitoring, speed, and content updates.",
        "web",
      ),
    ],
    bridges: [
      "/seo-company-in-nepal",
      "/software-development-company-in-nepal",
      "/digital-marketing-company-in-nepal",
      "/trusted-it-company-in-nepal",
    ],
  },
  {
    id: "marketing",
    title: "Getting found and getting inquiries",
    intro: "Search, social, and creative work judged on inquiries rather than impressions.",
    pillar: node(
      "/digital-marketing-company-in-nepal",
      "Digital Marketing Company in Nepal",
      ["digital marketing company in Nepal", "digital marketing agency in Nepal", "digital marketing in Nepal"],
      "Campaigns, content, and channels connected to real follow-up.",
      "marketing",
    ),
    members: [
      node(
        "/seo-company-in-nepal",
        "SEO Company",
        ["SEO company in Nepal", "SEO services in Nepal", "search engine optimisation in Nepal"],
        "Technical SEO, content structure, and local visibility that compounds.",
        "marketing",
      ),
      node(
        "/digital-marketing-agency-in-kathmandu",
        "Digital Marketing in Kathmandu",
        ["digital marketing agency in Kathmandu", "marketing for Kathmandu businesses"],
        "Local campaigns for businesses selling inside the valley.",
        "marketing",
      ),
      node(
        "/social-media-marketing-agency-in-nepal",
        "Social Media Marketing",
        ["social media marketing agency in Nepal", "Facebook and TikTok marketing in Nepal"],
        "Content and paid social measured by cost per inquiry.",
        "marketing",
      ),
      node(
        "/graphic-design-company-in-nepal",
        "Graphic Design",
        ["graphic design company in Nepal", "brand and design work in Nepal"],
        "Brand assets, print, and creative that stays consistent.",
        "marketing",
      ),
    ],
    bridges: [
      "/web-development-company-in-nepal",
      "/products/leadrack",
      "/best-it-company-in-nepal",
      "/website-cost-in-nepal",
    ],
  },
  {
    id: "products",
    title: "Our own products",
    intro: "Systems we built, run, and support ourselves, ready to adopt rather than commission from scratch.",
    pillar: node(
      "/products",
      "Products",
      ["Infobytes Nepal products", "our software products", "ready-made systems from Infobytes Nepal"],
      "Five systems covering labs, field service, field sales, leads, and student talent.",
      "products",
    ),
    members: [
      node(
        "/products/nidanyo",
        "Nidanyo",
        ["Nidanyo lab management system", "Nidanyo, our lab software", "Nidanyo for medical laboratories"],
        "Laboratory operations and information management for medical labs.",
        "products",
      ),
      node(
        "/products/serviol",
        "Serviol",
        ["Serviol field service management", "Serviol, our service management platform"],
        "Tickets, planners, attendance, and field service operations.",
        "products",
      ),
      node(
        "/products/purseol",
        "Purseol",
        ["Purseol field sales management", "Purseol, our sales management platform"],
        "Client visits, pitches, and lead outcomes logged from the field.",
        "products",
      ),
      node(
        "/products/leadrack",
        "LeadRack",
        ["LeadRack lead tracking", "LeadRack, our lead management system"],
        "Boards and stages so no lead goes unmissed.",
        "products",
      ),
      node(
        "/products/pravyo",
        "Pravyo",
        ["Pravyo student talent bench", "Pravyo, our student talent platform"],
        "Making student potential easier to discover and present.",
        "products",
      ),
    ],
    bridges: [
      "/software-development-company-in-nepal",
      "/business-automation-software-nepal",
      "/crm-software-in-nepal",
      "/lab-software-in-nepal",
    ],
  },
];

/**
 * The three commercial pages that every other page should reinforce. Keep this
 * list short. If everything is a priority, nothing is.
 */
export const priorityPaths = [
  "/best-it-company-in-nepal",
  "/trusted-it-company-in-nepal",
  "/software-development-company-in-nepal",
];

const allNodes: LinkNode[] = clusters.flatMap((cluster) => [cluster.pillar, ...cluster.members]);

const nodesByPath = new Map(allNodes.map((item) => [item.href, item]));

export function getLinkNode(href: string) {
  return nodesByPath.get(href);
}

export function getCluster(href: string) {
  return clusters.find((cluster) => cluster.pillar.href === href || cluster.members.some((m) => m.href === href));
}

/** Stable, non-random index so the same page always renders the same anchor. */
function anchorIndexFor(sourcePath: string, target: LinkNode) {
  let hash = 0;
  const seed = `${sourcePath}>${target.href}`;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 100000;
  }
  return hash % target.anchors.length;
}

export function anchorFor(sourcePath: string, target: LinkNode) {
  return target.anchors[anchorIndexFor(sourcePath, target)];
}

/** Deterministic rotation so sibling blocks are not identical on every page. */
function rotate<T>(items: T[], sourcePath: string) {
  if (items.length < 2) return items;
  let hash = 0;
  for (let i = 0; i < sourcePath.length; i += 1) {
    hash = (hash * 33 + sourcePath.charCodeAt(i)) % 100000;
  }
  const offset = hash % items.length;
  return [...items.slice(offset), ...items.slice(0, offset)];
}

export type LinkBlock = {
  title: string;
  intro: string;
  links: Array<LinkNode & { anchor: string }>;
};

/**
 * The link blocks a given page should render: up to its pillar and siblings,
 * across to related clusters, and out to the pages that carry commercial weight.
 */
export function getLinkBlocks(sourcePath: string, options?: { siblingLimit?: number }): LinkBlock[] {
  const siblingLimit = options?.siblingLimit ?? 6;
  const cluster = getCluster(sourcePath);
  const withAnchor = (item: LinkNode) => ({ ...item, anchor: anchorFor(sourcePath, item) });
  const blocks: LinkBlock[] = [];

  if (cluster) {
    const siblings = rotate(
      cluster.members.filter((item) => item.href !== sourcePath),
      sourcePath,
    ).slice(0, siblingLimit);

    const withPillar =
      cluster.pillar.href === sourcePath ? siblings : [cluster.pillar, ...siblings].slice(0, siblingLimit + 1);

    blocks.push({
      title: cluster.title,
      intro: cluster.intro,
      links: withPillar.map(withAnchor),
    });

    const bridgeLinks = cluster.bridges
      .filter((href) => href !== sourcePath)
      .map((href) => nodesByPath.get(href))
      .filter((item): item is LinkNode => Boolean(item))
      .map(withAnchor);

    if (bridgeLinks.length) {
      blocks.push({
        title: "Related work at Infobytes Nepal",
        intro: "Projects rarely stay inside one box. These are the areas that most often come up alongside.",
        links: bridgeLinks,
      });
    }
  }

  const priorityLinks = priorityPaths
    .filter((href) => href !== sourcePath)
    .filter((href) => !cluster || !cluster.members.some((m) => m.href === href))
    .filter((href) => !cluster || cluster.pillar.href !== href)
    .map((href) => nodesByPath.get(href))
    .filter((item): item is LinkNode => Boolean(item))
    .map(withAnchor);

  if (priorityLinks.length) {
    blocks.push({
      title: "Choosing who to work with",
      intro: "If you are still comparing options, start here.",
      links: priorityLinks,
    });
  }

  return blocks;
}

/** Flat list of every cluster page, used by the footer and the HTML sitemap. */
export function getAllLinkNodes() {
  return allNodes;
}

export type Crumb = { name: string; href: string };

export function getBreadcrumbs(sourcePath: string, currentName: string): Crumb[] {
  const cluster = getCluster(sourcePath);
  const crumbs: Crumb[] = [{ name: "Home", href: "/" }];

  if (cluster && cluster.pillar.href !== sourcePath) {
    crumbs.push({ name: cluster.pillar.label, href: cluster.pillar.href });
  }

  crumbs.push({ name: currentName, href: sourcePath });
  return crumbs;
}
