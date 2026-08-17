import { AdminCard, SaveButton } from "@/components/admin/ui";
import { markAllRequestsRead, markRequestRead } from "@/lib/actions/admin";
import { productInterests } from "@/lib/content";
import { searchGetStartedRequests } from "@/lib/data";
import { requireAdmin } from "@/lib/auth";

type Props = { searchParams: Promise<{ filter?: string; product?: string; q?: string }> };

export default async function RequestsPage({ searchParams }: Props) {
  await requireAdmin();
  const params = await searchParams;
  const rows = await searchGetStartedRequests(params.filter, params.product, params.q);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Get Started Requests</h1>
      <AdminCard className="mt-6">
        <form className="grid gap-3 md:grid-cols-[150px_190px_1fr_auto]">
          <select name="filter" defaultValue={params.filter || ""} className="rounded-2xl border border-primary-blue/15 px-4 py-3">
            <option value="">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
          <select name="product" defaultValue={params.product || ""} className="rounded-2xl border border-primary-blue/15 px-4 py-3">
            <option value="">All interests</option>
            {productInterests.map((interest) => <option key={interest} value={interest}>{interest}</option>)}
          </select>
          <input name="q" defaultValue={params.q || ""} placeholder="Search name, organization, phone, email" className="rounded-2xl border border-primary-blue/15 px-4 py-3" />
          <SaveButton>Filter</SaveButton>
        </form>
        <form action={markAllRequestsRead} className="mt-4">
          <button className="rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy">Mark all as read</button>
        </form>
      </AdminCard>
      <div className="mt-5 grid gap-4">
        {rows.map((item) => (
          <AdminCard key={item.id}>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-deep-navy">{item.name}</h2>
                  {!item.isRead && <span className="rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white">Unread</span>}
                </div>
                <p className="mt-2 text-sm text-dark-text/65">{item.organizationName || "No organization name"}</p>
                <p className="mt-1 text-sm text-dark-text/65">{item.contactNumber} · {item.email}</p>
                <p className="mt-3 rounded-full bg-soft-green px-4 py-2 text-sm font-semibold text-deep-navy w-fit">{item.productInterest}</p>
                {item.remarks && <p className="mt-4 leading-7 text-dark-text/75">{item.remarks}</p>}
                <p className="mt-3 text-xs text-dark-text/55">Consent checked: {item.consentChecked ? "Yes" : "No"}</p>
              </div>
              {!item.isRead && (
                <form action={markRequestRead}>
                  <input type="hidden" name="id" value={item.id} />
                  <button className="rounded-full bg-deep-navy px-4 py-2 text-sm font-semibold text-white">Mark as read</button>
                </form>
              )}
            </div>
          </AdminCard>
        ))}
        {!rows.length && <AdminCard>No requests found.</AdminCard>}
      </div>
    </div>
  );
}
