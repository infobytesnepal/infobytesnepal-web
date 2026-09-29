"use client";

import { useState } from "react";

/** Copies a value — here, an image's /api/media path — so it can be pasted into a post or a field. */
export default function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          window.prompt("Copy this:", value);
        }
      }}
      className="rounded-full border border-primary-blue/20 px-3 py-1 text-xs font-semibold text-deep-navy hover:bg-soft-blue"
    >
      {copied ? "Copied" : label}
    </button>
  );
}
