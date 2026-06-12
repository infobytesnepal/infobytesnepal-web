import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  robots: "noindex,follow",
};

export default function ServicesPage() {
  return <div className="min-h-screen bg-white pt-24" aria-label="Services" />;
}
