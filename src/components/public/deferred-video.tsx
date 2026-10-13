"use client";

import { useEffect, useRef } from "react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * A decorative background video that never costs the page its first paint.
 *
 * The home and contact heroes used `<video autoPlay preload="none">` hidden
 * below `md` with CSS. `autoPlay` overrides `preload="none"`, and a
 * `display: none` video is still fetched, so every phone downloaded the full
 * 967 KB clip: Lighthouse's mobile run showed it as the largest request on the
 * home page, ahead of all the JavaScript put together, on the connections where
 * it hurts most.
 *
 * Here the element renders with its poster and no source at all. The source is
 * attached only when all of these hold:
 *   - the screen is at least `minWidth` wide (the video is hidden below it);
 *   - the visitor has not asked for reduced motion;
 *   - the browser is not in Save-Data mode and not on a 2G connection;
 *   - the page has finished loading, so the clip never competes with the
 *     page's own resources.
 * Until then — and for good, on a phone — the poster image is what shows.
 */
export default function DeferredVideo({
  src,
  poster,
  className,
  minWidth = 768,
}: {
  src: string;
  poster?: string;
  className?: string;
  minWidth?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !src) return;
    if (!window.matchMedia(`(min-width: ${minWidth}px)`).matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? "")) return;

    let cancelled = false;
    const attach = () => {
      if (cancelled) return;
      video.src = src;
      // Muted autoplay is allowed everywhere; a rejected play() just leaves
      // the poster showing, which is the right fallback.
      video.play().catch(() => {});
    };
    const whenIdle = () => {
      if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(attach, { timeout: 2000 });
      else setTimeout(attach, 200);
    };

    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", whenIdle);
    };
  }, [src, minWidth]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      className={className}
    />
  );
}
