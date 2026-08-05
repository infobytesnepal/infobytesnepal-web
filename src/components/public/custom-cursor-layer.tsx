"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * The animated cursor itself.
 *
 * Split out of `custom-cursor.tsx` so that the `framer-motion` spring imports
 * live behind a lazy boundary. This file is only fetched once the parent has
 * confirmed a fine pointer, which means phones and tablets — the devices where
 * the cursor could never appear — no longer download it.
 *
 * The parent guarantees it only mounts this on a device that should have a
 * cursor, so there is no pointer check here.
 */
export default function CustomCursorLayer() {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.35 });

  useEffect(() => {
    // The class is set here rather than in the parent so the native cursor is
    // only hidden once this layer is actually on screen. Hiding it at the point
    // of the media query, while the chunk was still downloading, left a short
    // window with no cursor of any kind.
    document.documentElement.classList.add("custom-cursor-enabled");

    const move = (event: PointerEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest("a,button,input,textarea,select,label")));
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-9 w-9 rounded-full border border-primary-blue/70 md:block"
      style={{ x: smoothX, y: smoothY }}
      animate={{ scale: hovering ? 1.55 : 1 }}
      transition={{ duration: 0.14 }}
    >
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-green" />
    </motion.div>
  );
}
