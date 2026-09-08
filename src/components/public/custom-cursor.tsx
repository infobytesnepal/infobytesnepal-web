"use client";

import { useEffect, useState, type ComponentType } from "react";

/**
 * Gate for the custom cursor.
 *
 * This component sits in the public layout, so whatever it references is paid
 * for on every page by every visitor. The cursor itself is desktop-and-fine-
 * pointer only and stands down for `prefers-reduced-motion`, so a phone should
 * never fetch the animation library it needs.
 *
 * It previously used `next/dynamic` for that, and the deferral did not hold:
 * `dynamic()` at module scope keeps the chunk in the route's static graph, and
 * Next emitted a `<script async>` preload for it on every page. Measured, that
 * was 131 KB of animation library fetched by every visitor — including the
 * phones the check exists to protect — to render nothing.
 *
 * A bare `import()` inside the effect has no such reference. The chunk is still
 * code-split, but nothing points at it until the media query has actually
 * passed, which is what "load it only when it is needed" was supposed to mean.
 */
export default function CustomCursor() {
  const [Layer, setLayer] = useState<ComponentType | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 768px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let cancelled = false;
    // Deferred by a frame, as before, so the first paint is never held up.
    const frame = window.requestAnimationFrame(() => {
      import("./custom-cursor-layer")
        .then((module) => {
          // `setState(fn)` treats a function argument as an updater, so the
          // component has to be wrapped to be stored rather than called.
          if (!cancelled) setLayer(() => module.default);
        })
        .catch(() => {
          // A decorative cursor is not worth reporting or retrying.
        });
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return Layer ? <Layer /> : null;
}
