import AdminShell from "@/components/admin/admin-shell";
import { requireSession } from "@/lib/auth";

/**
 * The layout only proves somebody is logged in. Which sections they may open is
 * decided by each page: an admin-only page calls `requireAdmin()`, the blog
 * pages call `requireBlogAccess()`. Doing it per page rather than here means a
 * page added later has to state what it needs, instead of inheriting whatever
 * this layout happened to allow.
 */
export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireSession();
  return (
    <AdminShell role={session.role} email={session.email}>
      {children}
    </AdminShell>
  );
}
