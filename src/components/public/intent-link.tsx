"use client";

import Link from "next/link";
import { useState, type ComponentProps } from "react";

/**
 * A `Link` that prefetches when someone shows intent, not when it is merely on
 * screen.
 *
 * Next prefetches every `<Link>` the moment it enters the viewport. The navbar
 * alone is nine of them, so measured on a landing page, a visitor's first half
 * second produced about forty background requests — the RSC payload of every
 * route in the menu, several segments each — and those pulled in other routes'
 * JavaScript, including the animation library, which Lighthouse then reported as
 * "unused JavaScript" on a page that never runs it. On a phone on mobile data
 * that traffic competes with the page's own first paint.
 *
 * This is the pattern Next documents for hover-triggered prefetch: prefetching
 * is off until the pointer arrives, the link is focused, or a finger lands on
 * it, and then it reverts to the default behaviour. On desktop a hover gives
 * the route a few hundred milliseconds of head start before the click; on touch
 * the `touchstart` gives it the gap between finger-down and the click event.
 *
 * Use it for chrome that is on every page — navbar, footer, link hubs. Links in
 * a page's own content can stay plain `Link`.
 */
export default function IntentLink(props: ComponentProps<typeof Link>) {
  const [active, setActive] = useState(false);
  const { onMouseEnter, onFocus, onTouchStart, ...rest } = props;
  return (
    <Link
      {...rest}
      prefetch={active ? null : false}
      onMouseEnter={(event) => {
        setActive(true);
        onMouseEnter?.(event);
      }}
      onFocus={(event) => {
        setActive(true);
        onFocus?.(event);
      }}
      onTouchStart={(event) => {
        setActive(true);
        onTouchStart?.(event);
      }}
    />
  );
}
