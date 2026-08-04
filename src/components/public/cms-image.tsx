import Image from "next/image";

type CmsImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function CmsImage({ src, alt, width, height, className, priority }: CmsImageProps) {
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
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    );
  }

  return <Image src={src} alt={alt} width={width} height={height} className={className} priority={priority} />;
}
