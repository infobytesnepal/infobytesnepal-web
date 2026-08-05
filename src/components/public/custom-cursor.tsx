"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Gate for the custom cursor.
 *
 * This component sits in the public layout, so whatever it imports is
 * downloaded on every page by every visitor. It used to import `framer-motion`
 * directly, which meant a phone fetched the animation library to run a media
 * query and then render nothing — the cursor is desktop-and-fine-pointer only,
 * and it also stands down for `prefers-reduced-motion`.
 *
 * The check now happens here, in a component that imports nothing but React,
 * and the motion code is fetched only once the check passes. `ssr: false` is
 * both allowed and correct: this is a client component, and there is nothing to
 * render on the server for a cursor that does not exist until a pointer moves.
 */
const CustomCursorLayer = dynamic(() => import("./custom-cursor-layer"), { ssr: false });

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 768px)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    // Deferred by a frame, as before, so the first paint is never held up by
    // this. It also gives the lazy chunk a head start before it is needed.
    const frame = window.requestAnimationFrame(() => setEnabled(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!enabled) return null;
  return <CustomCursorLayer />;
}
