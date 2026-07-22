import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Infobytes Nepal",
    short_name: "Infobytes",
    description:
      "Infobytes Nepal is a Nepal-based IT company offering custom software development, web development, SEO, digital marketing, and business automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0342c5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
