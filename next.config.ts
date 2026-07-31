import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF first, WebP as the fallback. The source PNGs on this site are large
    // (several are over 1 MB), so the format conversion is where most of the
    // mobile payload saving comes from.
    formats: ["image/avif", "image/webp"],
    // Optimized images are content-addressed by URL and the source files only
    // change on deploy, so a long TTL avoids re-encoding the same assets.
    minimumCacheTTL: 2678400,
    qualities: [70, 75, 85],
  },
  // Only the icons actually used are pulled into the client bundle instead of
  // the whole lucide-react barrel file.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/admin-infobytesnepal/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
