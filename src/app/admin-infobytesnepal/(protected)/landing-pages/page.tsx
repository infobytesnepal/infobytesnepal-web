import Link from "next/link";
import { ExternalLink, PenLine } from "lucide-react";
import { AdminCard } from "@/components/admin/ui";
import { requireContentAccess } from "@/lib/auth";
import { getLandingPageIndex } from "@/lib/landing-pages";

export default async function LandingPagesAdminPage() {
  await requireContentAccess();
  const pages = await getLandingPageIndex();
  const edited = pages.filter((page) => page.isCustomised).length;

  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Website Pages</h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-dark-text/65">
        The service and location pages that bring in search traffic. Every word on them — the heading, the body, the
        FAQs, and what Google shows in the results — can be rewritten here without a developer.
      </p>
      <p className="mt-3 text-sm text-dark-text/60">
        {pages.length} pages · {edited} edited here · {pages.length - edited} showing their original wording
      </p>

      <div className="mt-6 grid gap-3">
        {pages.map((page) => (
          <AdminCard key={page.key}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={
                      page.isCustomised
                        ? "rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800"
                        : "rounded-full bg-soft-blue px-2.5 py-1 text-xs font-semibold text-primary-blue"
                    }
                  >
                    {page.isCustomised ? "Edited" : "Original"}
                  </span>
                  <span className="text-xs text-dark-text/55">{page.keyword}</span>
                </div>
                <h2 className="mt-2 text-lg font-semibold text-deep-navy">{page.title}</h2>
                <p className="mt-1 font-mono text-xs text-dark-text/55">
                  {page.path}
                  {page.updatedBy ? ` · last edited by ${page.updatedBy}` : ""}
                  {page.updatedAt ? ` on ${page.updatedAt.slice(0, 10)}` : ""}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href={`/admin-infobytesnepal/landing-pages/${page.key}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy hover:bg-soft-blue"
                >
                  <PenLine size={15} />
                  Edit
                </Link>
                <a
                  href={page.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy hover:bg-soft-blue"
                >
                  <ExternalLink size={15} />
                  View
                </a>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}
