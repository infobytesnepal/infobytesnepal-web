"use client";

import { ArrowRight } from "lucide-react";
import { useGetStarted } from "./get-started-context";
import { cn } from "@/lib/utils";

export default function GetStartedButton({
  interest,
  className,
  label = "Get Started",
}: {
  interest?: string;
  className?: string;
  label?: string;
}) {
  const { open } = useGetStarted();
  return (
    <button
      type="button"
      onClick={() => open(interest)}
      className={cn(
        "focus-ring site-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-[0_18px_42px_rgba(4,18,63,0.18)]",
        className,
      )}
    >
      {label}
      <ArrowRight aria-hidden="true" size={16} />
    </button>
  );
}
