import Image from "next/image";

type CmsImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** The page's largest image: loaded eagerly and at high fetch priority. */
  priority?: boolean;
  /** Visible on load but not the page's main image, e.g. the navbar logo. */
  eager?: boolean;
};

/*
  `priority` on next/image is deprecated in Next 16 (it became `preload`, which
  injects a <link rel="preload">). The docs recommend `loading="eager"` plus
  `fetchPriority="high"` for an LCP image instead, and that is also what
  Lighthouse's LCP-discovery check looks for on the <img> itself; the old prop
  left it unset. The prop name is kept here so callers did not have to change.
*/
export default function CmsImage({ src, alt, width, height, className, priority, eager }: CmsImageProps) {
  if (src.startsWith("data:")) {
    // Admin uploads are stored as data URIs, which the image optimizer cannot
    // process, so they bypass next/image. The loading and decoding hints have
    // to be set by hand here since next/image is not applying its defaults.
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority || eager ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority || eager ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
