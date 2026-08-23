import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import LandingPageEditor from "@/components/admin/landing-page-editor";
import { requireContentAccess } from "@/lib/auth";
import { getLandingPage, getLandingPageRow, isLandingPageKey } from "@/lib/landing-pages";

type Props = {
  params: Promise<{ key: string }>;
  searchParams: Promise<{ error?: string; saved?: string; reset?: string }>;
};

export default async function LandingPageEditorPage({ params, searchParams }: Props) {
  await requireContentAccess();
  const { key } = await params;
  const { error, saved, reset } = await searchParams;

  if (!isLandingPageKey(key)) notFound();

  // The editor is seeded with the merged page, not the raw row: an unedited
  // page opens showing exactly what is live rather than an empty form.
  const [page, row] = await Promise.all([getLandingPage(key), getLandingPageRow(key)]);

  return (
    <div>
      <Link
        href="/admin-infobytesnepal/landing-pages"
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue hover:underline"
      >
        <ArrowLeft size={15} />
        All pages
      </Link>
      <h1 className="mt-3 text-3xl font-semibold text-deep-navy">{page.heroTitle}</h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-dark-text/65">
        Rewrite any part of this page. Saving publishes it straight away — there is no draft state here, because these
        pages are already live and indexed.
      </p>

      <div className="mt-6">
        <LandingPageEditor
          pageKey={key}
          page={page}
          isCustomised={Boolean(row)}
          updatedAt={row?.updatedAt}
          updatedBy={row?.updatedBy}
          error={error}
          saved={saved === "1"}
          reset={reset === "1"}
        />
      </div>
    </div>
  );
}
