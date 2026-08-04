import Image from "next/image";

type SectionImageProps = {
  src: string;
  /** Descriptive, keyword bearing alt text. Never leave this empty on content images. */
  alt: string;
  /**
   * Aspect ratio utility for the wrapper, e.g. "aspect-[16/9]".
   * Written at the call site so Tailwind can see the literal class.
   */
  className?: string;
  sizes?: string;
  /** Only for an image that is actually above the fold. Everything else stays lazy. */
  priority?: boolean;
  /** `contain` suits flat illustrations, `cover` suits photography. */
  fit?: "cover" | "contain";
};

/**
 * Content image used to break up long text sections.
 *
 * The wrapper reserves the full box before the file arrives, so the image
 * contributes nothing to Cumulative Layout Shift, and it carries a soft brand
 * gradient. That gradient is deliberate: several of these slots point at assets
 * that are still being produced, and an empty slot degrades to a clean coloured
 * panel rather than a broken image icon on a live page.
 *
 * next/image lazy loads by default, so anything without `priority` is deferred
 * until it approaches the viewport.
 */
export default function SectionImage({
  src,
  alt,
  className = "aspect-[16/10]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  fit = "cover",
}: SectionImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-primary-blue/10 bg-[linear-gradient(135deg,#e8f0ff_0%,#f4f9ff_45%,#e9fff4_100%)] shadow-[0_24px_70px_rgba(4,18,63,0.08)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={75}
        className={fit === "cover" ? "object-cover" : "object-contain p-6"}
      />
    </div>
  );
}
