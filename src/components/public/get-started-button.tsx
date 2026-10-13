"use client";

import { ArrowRight } from "lucide-react";
import { useGetStarted } from "./get-started-context";
import { cn } from "@/lib/utils";

export default function GetStartedButton({
  interest,
  className,
  label = "Get Started",
  variant = "primary",
}: {
  interest?: string;
  className?: string;
  label?: string;
  /** "light" for use on a dark background, where the navy primary would vanish. */
  variant?: "primary" | "light";
}) {
  const { open } = useGetStarted();
  return (
    <button
      type="button"
      onClick={() => open(interest)}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold",
        variant === "light" ? "site-button-light" : "site-button shadow-[0_18px_42px_rgba(4,18,63,0.18)]",
        className,
      )}
    >
      {label}
      <ArrowRight aria-hidden="true" size={16} />
    </button>
  );
}
