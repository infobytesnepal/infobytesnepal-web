"use client";

import { useEffect, useRef, useState } from "react";

type TrailState = {
  path: string;
  width: number;
  height: number;
  length: number;
  progressLength: number;
  dot: {
    x: number;
    y: number;
  };
};

const initialTrail: TrailState = {
  path: "",
  width: 0,
  height: 0,
  length: 1,
  progressLength: 0,
  dot: { x: 0, y: 0 },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function buildCurve(points: Array<{ x: number; y: number }>) {
  if (points.length < 2) return "";

  const [first, ...rest] = points;
  let path = `M ${first.x.toFixed(1)} ${first.y.toFixed(1)}`;
  let previous = first;

  for (const point of rest) {
    const deltaX = point.x - previous.x;
    const deltaY = point.y - previous.y;
    const controlOne = {
      x: previous.x + deltaX * 0.18,
      y: previous.y + deltaY * 0.46,
    };
    const controlTwo = {
      x: point.x - deltaX * 0.18,
      y: point.y - deltaY * 0.46,
    };

    path += ` C ${controlOne.x.toFixed(1)} ${controlOne.y.toFixed(1)}, ${controlTwo.x.toFixed(1)} ${controlTwo.y.toFixed(1)}, ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    previous = point;
  }

  return path;
}

export default function ServiceScrollTrail({ containerId }: { containerId: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const frameRef = useRef<number | null>(null);
  const [trail, setTrail] = useState<TrailState>(initialTrail);
  const focusLength = Math.min(180, trail.length * 0.12);

  useEffect(() => {
    const container = document.getElementById(containerId);
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!container) return undefined;

    const updateProgress = () => {
      frameRef.current = null;

      const path = pathRef.current;
      if (!path || !desktopQuery.matches) return;

      const length = path.getTotalLength();
      const rect = container.getBoundingClientRect();
      const pageTop = window.scrollY + rect.top;
      const pageBottom = pageTop + rect.height;
      const start = pageTop;
      const end = pageBottom - window.innerHeight * 0.52;
      const progress = clamp((window.scrollY - start) / Math.max(end - start, 1), 0, 1);
      const progressLength = length * progress;
      const point = path.getPointAtLength(progressLength);

      setTrail((current) => ({
        ...current,
        length,
        progressLength,
        dot: { x: point.x, y: point.y },
      }));
    };

    const requestProgress = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateProgress);
    };

    const buildTrail = () => {
      if (!desktopQuery.matches) {
        setTrail(initialTrail);
        return;
      }

      const anchors = Array.from(container.querySelectorAll<HTMLElement>("[data-trail-anchor]"));
      const containerRect = container.getBoundingClientRect();
      const points = anchors.map((anchor) => {
        const rect = anchor.getBoundingClientRect();
        const anchorY = anchor.dataset.trailAnchor === "top-center" ? rect.top : rect.top + rect.height / 2;
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: anchorY - containerRect.top,
        };
      });

      setTrail((current) => ({
        ...current,
        path: buildCurve(points),
        width: container.scrollWidth,
        height: container.scrollHeight,
      }));

      window.requestAnimationFrame(requestProgress);
    };

    const resizeObserver = new ResizeObserver(buildTrail);
    resizeObserver.observe(container);
    Array.from(container.querySelectorAll<HTMLElement>("[data-trail-anchor]")).forEach((anchor) => {
      resizeObserver.observe(anchor);
    });

    buildTrail();

    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", buildTrail);
    desktopQuery.addEventListener("change", buildTrail);
    reducedMotionQuery.addEventListener("change", requestProgress);

    return () => {
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", buildTrail);
      desktopQuery.removeEventListener("change", buildTrail);
      reducedMotionQuery.removeEventListener("change", requestProgress);
    };
  }, [containerId]);

  if (!trail.path) return null;

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block" style={{ zIndex: 60 }} aria-hidden="true">
      <svg
        className="absolute left-0 top-0 overflow-visible"
        width={trail.width}
        height={trail.height}
        viewBox={`0 0 ${trail.width} ${trail.height}`}
        fill="none"
      >
        <defs>
          <filter id="service-trail-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0.78  0 0 0 0 0.42  0 0 0 0.95 0"
              result="greenGlow"
            />
            <feMerge>
              <feMergeNode in="greenGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="service-trail-dot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="42%" stopColor="#00C76A" />
            <stop offset="100%" stopColor="#00C76A" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path d={trail.path} stroke="#00C76A" strokeWidth="2" strokeLinecap="round" opacity="0.1" />
        <path
          ref={pathRef}
          d={trail.path}
          stroke="#00C76A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={trail.length}
          strokeDashoffset={trail.length - trail.progressLength}
          filter="url(#service-trail-glow)"
          opacity="0.34"
        />
        <path
          d={trail.path}
          stroke="#00C76A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${focusLength} ${trail.length}`}
          strokeDashoffset={-(trail.progressLength - focusLength / 2)}
          filter="url(#service-trail-glow)"
          opacity="0.78"
        />
        <circle cx={trail.dot.x} cy={trail.dot.y} r="17" fill="url(#service-trail-dot)" opacity="0.78" />
        <circle cx={trail.dot.x} cy={trail.dot.y} r="5" fill="#00C76A" filter="url(#service-trail-glow)" />
      </svg>
    </div>
  );
}
