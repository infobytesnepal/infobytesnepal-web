"use client";

import { useEffect, useRef } from "react";

/**
 * Fade-and-rise as an element scrolls into view.
 *
 * This used `framer-motion`'s `whileInView`, which meant a 130KB animation
 * library sat in the critical path of the home page, the blog, the product list
 * and the careers page purely to interpolate opacity and a 24px translate —
 * work the compositor does natively. It is now an IntersectionObserver and a
 * CSS transition.
 *
 * The classes are applied through the ref rather than through state. There is
 * nothing to re-render — the markup never changes, only two class names do — so
 * routing it through React would mean a render pass per element per page for no
 * benefit, on pages that place dozens of these.
 *
 * Content is visible by default and only hidden once the effect has run and
 * confirmed it will animate it back in. If the bundle fails or is blocked, the
 * page reads normally instead of being blank, which is the failure mode of
 * every scroll-reveal that starts at `opacity: 0` in the HTML.
 */
export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect the OS setting: never hide it, never observe it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.classList.add("reveal");

    const show = () => {
      element.classList.add("reveal-shown");
    };

    // Already on screen at mount (above the fold): show it on the next frame
    // rather than waiting for the observer, which reads as a flicker.
    if (element.getBoundingClientRect().top < window.innerHeight - 80) {
      const frame = window.requestAnimationFrame(show);
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            // Once shown it never hides again, so the observer has no further
            // work. Leaving them attached costs more the longer the page is.
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
