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
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} width={width} height={height} className={className} />;
  }

  return <Image src={src} alt={alt} width={width} height={height} className={className} priority={priority} />;
}
