import Link from "next/link";
import { AdminCard } from "@/components/admin/ui";
import { getInquiryStats } from "@/lib/data";

export default async function DashboardPage() {
  const stats = await getInquiryStats();
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        <AdminCard>
          <p className="text-sm text-dark-text/60">Total contact inquiries</p>
          <p className="mt-2 text-3xl font-semibold text-deep-navy">{stats.inquiries.length}</p>
        </AdminCard>
        <AdminCard>
          <p className="text-sm text-dark-text/60">Unread contact inquiries</p>
          <p className="mt-2 flex items-center gap-2 text-3xl font-semibold text-deep-navy">
            {stats.unreadInquiries}
            {stats.unreadInquiries > 0 && <span className="h-3 w-3 rounded-full bg-red-600" />}
          </p>
        </AdminCard>
        <AdminCard>
          <p className="text-sm text-dark-text/60">Total get started requests</p>
          <p className="mt-2 text-3xl font-semibold text-deep-navy">{stats.requests.length}</p>
        </AdminCard>
        <AdminCard>
          <p className="text-sm text-dark-text/60">Unread get started requests</p>
          <p className="mt-2 flex items-center gap-2 text-3xl font-semibold text-deep-navy">
            {stats.unreadRequests}
            {stats.unreadRequests > 0 && <span className="h-3 w-3 rounded-full bg-red-600" />}
          </p>
        </AdminCard>
        <AdminCard>
          <p className="text-sm text-dark-text/60">Total service inquiries</p>
          <p className="mt-2 text-3xl font-semibold text-deep-navy">{stats.serviceRequests.length}</p>
        </AdminCard>
        <AdminCard>
          <p className="text-sm text-dark-text/60">Unread service inquiries</p>
          <p className="mt-2 flex items-center gap-2 text-3xl font-semibold text-deep-navy">
            {stats.unreadServiceRequests}
            {stats.unreadServiceRequests > 0 && <span className="h-3 w-3 rounded-full bg-red-600" />}
          </p>
        </AdminCard>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <AdminCard>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-deep-navy">Latest contact inquiries</h2>
            <Link href="/admin-infobytesnepal/inquiries" className="text-sm font-semibold text-primary-blue">View all</Link>
          </div>
          <div className="mt-4 grid gap-3">
            {stats.inquiries.slice(0, 5).map((item) => (
              <div key={item.id} className="rounded-2xl bg-soft-blue p-4">
                <p className="font-semibold text-deep-navy">{item.name}</p>
                <p className="text-sm text-dark-text/65">{item.contactNumber}</p>
              </div>
            ))}
            {!stats.inquiries.length && <p className="text-sm text-dark-text/60">No inquiries yet.</p>}
          </div>
        </AdminCard>
        <AdminCard>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-deep-navy">Latest get started requests</h2>
            <Link href="/admin-infobytesnepal/requests" className="text-sm font-semibold text-primary-blue">View all</Link>
          </div>
          <div className="mt-4 grid gap-3">
            {stats.requests.slice(0, 5).map((item) => (
              <div key={item.id} className="rounded-2xl bg-soft-green p-4">
                <p className="font-semibold text-deep-navy">{item.name}</p>
                <p className="text-sm text-dark-text/65">{item.productInterest}</p>
              </div>
            ))}
            {!stats.requests.length && <p className="text-sm text-dark-text/60">No requests yet.</p>}
          </div>
        </AdminCard>
        <AdminCard>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-deep-navy">Latest service inquiries</h2>
            <Link href="/admin-infobytesnepal/service-inquiries" className="text-sm font-semibold text-primary-blue">View all</Link>
          </div>
          <div className="mt-4 grid gap-3">
            {stats.serviceRequests.slice(0, 5).map((item) => (
              <div key={item.id} className="rounded-2xl bg-soft-blue p-4">
                <p className="font-semibold text-deep-navy">{item.name}</p>
                <p className="text-sm text-dark-text/65">{item.serviceType}</p>
              </div>
            ))}
            {!stats.serviceRequests.length && <p className="text-sm text-dark-text/60">No service inquiries yet.</p>}
          </div>
        </AdminCard>
      </div>
    </div>
  );
}
