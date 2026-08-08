import CmsImage from "@/components/public/cms-image";

/**
 * A product logo in a fixed-height frame that preserves its aspect ratio.
 *
 * The first four products ship square 120x120 icon tiles, so `/products` and
 * `/products/[slug]` both sized their logo with a square utility pair
 * (`h-16 w-16`, `h-20 w-20`) and got away with it. Nidanyo's logo is a 1000x388
 * wordmark. Forced into a square box it came out squeezed and cramped against
 * the heading below it.
 *
 * The frame is a 3:1 box with `object-contain`, which is correct for both
 * shapes and for whatever aspect ratio the next logo uploaded from the admin
 * happens to have: a wordmark fills the width, a square tile sits at its own
 * size against the left edge. Because the box is a fixed size either way, the
 * space is reserved before the image lands and nothing shifts.
 */
export default function ProductLogo({
  src,
  name,
  size = "listing",
  priority,
}: {
  src: string;
  name: string;
  /** `listing` for the /products grid, `detail` for the product page hero. */
  size?: "listing" | "detail";
  priority?: boolean;
}) {
  const frame = size === "detail" ? "h-16 w-48 md:h-20 md:w-60" : "h-16 w-48";

  return (
    <div className={`flex shrink-0 items-center ${frame}`}>
      <CmsImage
        src={src}
        alt={`${name} logo`}
        // Twice the rendered width so the optimizer has something to work with
        // on a high density screen.
        width={480}
        height={160}
        className="h-full w-full object-contain object-left"
        priority={priority}
      />
    </div>
  );
}
