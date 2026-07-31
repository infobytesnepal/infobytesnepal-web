import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/internal-links";
import { getCanonicalSiteUrl } from "@/lib/utils";

export function breadcrumbSchema(crumbs: Crumb[]) {
  const siteUrl = getCanonicalSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };
}

/**
 * Visible breadcrumbs. Schema-only breadcrumbs are worth less than a trail a
 * reader can actually click, and the trail is what carries link equity up to
 * the pillar page.
 */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-dark-text/60">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight size={14} className="shrink-0 text-dark-text/35" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-deep-navy/80">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="focus-ring rounded transition hover:text-primary-blue">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
