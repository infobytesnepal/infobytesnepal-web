import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infobytes Nepal CMS",
  robots: "noindex,nofollow",
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
