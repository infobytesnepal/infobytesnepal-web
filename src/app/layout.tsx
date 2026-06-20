import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteUrl } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const defaultTitle = "Software Development Company in Nepal | InfoBytes Nepal";
const defaultDescription =
  "InfoBytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, and business automation solutions.";
const defaultOgImage = "/assets/hero/infobytes-hero-fallback.webp";
const faviconPng = "/favicon.png";
const faviconIco = "/favicon.ico";
const appleIcon = "/apple-icon.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "InfoBytes Nepal",
    images: [{ url: defaultOgImage, alt: "InfoBytes Nepal" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: [
      {
        url: faviconIco,
        sizes: "any",
      },
      {
        url: faviconPng,
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    shortcut: faviconIco,
    apple: [
      {
        url: appleIcon,
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0342c5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-dark-text">{children}</body>
    </html>
  );
}
