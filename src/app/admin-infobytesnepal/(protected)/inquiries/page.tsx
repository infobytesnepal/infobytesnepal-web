import ConfirmButton from "@/components/admin/confirm-button";
import { AdminCard, SaveButton } from "@/components/admin/ui";
import { deleteContactInquiry, markAllContactsRead, markContactRead } from "@/lib/actions/admin";
import { searchContactInquiries } from "@/lib/data";
import { requireAdmin } from "@/lib/auth";

type Props = { searchParams: Promise<{ filter?: string; q?: string }> };

export default async function InquiriesPage({ searchParams }: Props) {
  await requireAdmin();
  const params = await searchParams;
  const rows = await searchContactInquiries(params.filter, params.q);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Inquiries</h1>
      <AdminCard className="mt-6">
        <form className="grid gap-3 md:grid-cols-[160px_1fr_auto]">
          <select name="filter" defaultValue={params.filter || ""} className="rounded-2xl border border-primary-blue/15 px-4 py-3">
            <option value="">All</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
          <input name="q" defaultValue={params.q || ""} placeholder="Search name, organization, phone, email" className="rounded-2xl border border-primary-blue/15 px-4 py-3" />
          <SaveButton>Filter</SaveButton>
        </form>
        <form action={markAllContactsRead} className="mt-4">
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
                <p className="mt-1 text-sm text-dark-text/65">{item.contactNumber} {item.email ? `· ${item.email}` : ""}</p>
                {item.remarks && <p className="mt-4 leading-7 text-dark-text/75">{item.remarks}</p>}
              </div>
              <div className="flex flex-wrap gap-2">
                {!item.isRead && (
                  <form action={markContactRead}>
                    <input type="hidden" name="id" value={item.id} />
                    <button className="rounded-full bg-deep-navy px-4 py-2 text-sm font-semibold text-white">Mark as read</button>
                  </form>
                )}
                <form action={deleteContactInquiry}>
                  <input type="hidden" name="id" value={item.id} />
                  <ConfirmButton message="Delete this inquiry?" className="rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy">
                    Delete
                  </ConfirmButton>
                </form>
              </div>
            </div>
          </AdminCard>
        ))}
        {!rows.length && <AdminCard>No inquiries found.</AdminCard>}
      </div>
    </div>
  );
}
