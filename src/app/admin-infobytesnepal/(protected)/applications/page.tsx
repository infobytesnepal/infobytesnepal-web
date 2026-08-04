import ConfirmButton from "@/components/admin/confirm-button";
import { AdminCard, SaveButton } from "@/components/admin/ui";
import { deleteJobApplication, markJobApplicationRead } from "@/lib/actions/admin";
import { getJobSlugs } from "@/lib/careers";
import { searchJobApplications } from "@/lib/data";

type Props = { searchParams: Promise<{ filter?: string; job?: string }> };

function formatSize(bytes: number | null) {
  if (!bytes) return "";
  const mb = bytes / (1024 * 1024);
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
}

export default async function JobApplicationsPage({ searchParams }: Props) {
  const params = await searchParams;
  const [rows, slugs] = await Promise.all([searchJobApplications(params.filter, params.job), getJobSlugs()]);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Job Applications</h1>

      <AdminCard className="mt-6">
        <form className="grid gap-3 md:grid-cols-[150px_240px_auto]">
          <select name="filter" defaultValue={params.filter || ""} className="rounded-2xl border border-primary-blue/15 px-4 py-3">
            <option value="">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
          <select name="job" defaultValue={params.job || ""} className="rounded-2xl border border-primary-blue/15 px-4 py-3">
            <option value="">All roles</option>
            {slugs.map((slug) => (
              <option key={slug} value={slug}>
                {slug}
              </option>
            ))}
          </select>
          <SaveButton>Filter</SaveButton>
        </form>
      </AdminCard>

      {rows.length === 0 ? (
        <AdminCard className="mt-5">
          <p className="text-dark-text/70">No applications yet.</p>
        </AdminCard>
      ) : (
        <div className="mt-5 grid gap-4">
          {rows.map((item) => (
            <AdminCard key={item.id}>
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-xl font-semibold text-deep-navy">{item.name}</h2>
                    {!item.isRead && (
                      <span className="rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white">Unread</span>
                    )}
                  </div>
                  <p className="mt-2 w-fit rounded-full bg-soft-green px-4 py-2 text-sm font-semibold text-deep-navy">
                    {item.jobTitle}
                  </p>
                  <p className="mt-3 text-sm text-dark-text/65">
                    <a href={`mailto:${item.email}`} className="font-semibold text-primary-blue">
                      {item.email}
                    </a>{" "}
                    · {item.phone}
                  </p>
                  {item.portfolioUrl && (
                    <p className="mt-1 truncate text-sm">
                      <a href={item.portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-primary-blue underline">
                        {item.portfolioUrl}
                      </a>
                    </p>
                  )}
                  {item.message && <p className="mt-4 max-w-2xl leading-7 text-dark-text/75">{item.message}</p>}
                  <p className="mt-3 text-xs text-dark-text/55">Received {item.createdAt}</p>
                </div>

                <div className="flex flex-wrap gap-2 lg:shrink-0">
                  {item.cvData && (
                    // The CV is stored as a data URI, so the download attribute
                    // is what turns it back into a named file on disk.
                    <a
                      href={item.cvData}
                      download={item.cvName || "cv"}
                      className="rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-primary-blue"
                    >
                      Download CV {formatSize(item.cvSize)}
                    </a>
                  )}
                  {!item.isRead && (
                    <form action={markJobApplicationRead}>
                      <input type="hidden" name="id" value={item.id} />
                      <button className="rounded-full bg-deep-navy px-4 py-2 text-sm font-semibold text-white">Mark as read</button>
                    </form>
                  )}
                  <form action={deleteJobApplication}>
                    <input type="hidden" name="id" value={item.id} />
                    <ConfirmButton message="Delete this application permanently?">Delete</ConfirmButton>
                  </form>
                </div>
              </div>
            </AdminCard>
          ))}
        </div>
      )}
    </div>
  );
}
