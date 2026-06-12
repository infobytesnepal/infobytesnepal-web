import Link from "next/link";
import { BarChart3, BriefcaseBusiness, FileText, ImageIcon, Inbox, LayoutDashboard, LogOut, Package, Search, SlidersHorizontal } from "lucide-react";
import { logoutAction } from "@/lib/actions/auth";
import { getInquiryStats } from "@/lib/data";

const nav = [
  { href: "/admin-infobytesnepal", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin-infobytesnepal/inquiries", label: "Inquiries", icon: Inbox, dot: "inquiries" },
  { href: "/admin-infobytesnepal/requests", label: "Get Started Requests", icon: FileText, dot: "requests" },
  { href: "/admin-infobytesnepal/service-inquiries", label: "Service Inquiries", icon: BriefcaseBusiness, dot: "serviceRequests" },
  { href: "/admin-infobytesnepal/products", label: "Products", icon: Package },
  { href: "/admin-infobytesnepal/pages", label: "Pages", icon: BarChart3 },
  { href: "/admin-infobytesnepal/media", label: "Media / Assets", icon: ImageIcon },
  { href: "/admin-infobytesnepal/seo", label: "SEO Settings", icon: Search },
  { href: "/admin-infobytesnepal/settings", label: "Site Settings", icon: SlidersHorizontal },
];

export default async function AdminShell({ children }: { children: React.ReactNode }) {
  const stats = await getInquiryStats();
  return (
    <div className="min-h-screen bg-soft-blue text-dark-text lg:flex">
      <aside className="border-b border-primary-blue/10 bg-white p-4 lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:border-b-0 lg:border-r">
        <div className="mb-7">
          <p className="text-lg font-semibold text-deep-navy">InfoBytes Nepal</p>
          <p className="text-sm text-dark-text/60">CMS</p>
        </div>
        <nav className="grid gap-1">
          {nav.map((item) => {
            const Icon = item.icon;
            const dot =
              item.dot === "inquiries"
                ? stats.unreadInquiries > 0
                : item.dot === "requests"
                  ? stats.unreadRequests > 0
                  : item.dot === "serviceRequests"
                    ? stats.unreadServiceRequests > 0
                    : false;
            return (
              <Link key={item.href} href={item.href} className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm font-medium text-deep-navy hover:bg-soft-blue">
                <span className="flex items-center gap-3">
                  <Icon size={17} />
                  {item.label}
                </span>
                {dot && <span className="h-2.5 w-2.5 rounded-full bg-red-600" aria-label="Unread items" />}
              </Link>
            );
          })}
          <form action={logoutAction}>
            <button className="mt-2 flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium text-deep-navy hover:bg-soft-blue">
              <LogOut size={17} />
              Logout
            </button>
          </form>
        </nav>
      </aside>
      <main className="w-full p-4 lg:ml-72 lg:p-8">{children}</main>
    </div>
  );
}
