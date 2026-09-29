"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { ActionResult } from "@/lib/action-result";
import { formatFileSize, prepareImage } from "@/lib/image-prep";

/**
 * A CMS form that saves without losing anything.
 *
 * Three problems with a plain `<form action={serverAction}>`, all of which
 * the CMS had:
 *
 * 1. React 19 resets a form's uncontrolled fields when its action finishes, and
 *    the old actions redirected on failure, so a rejected save came back to an
 *    empty form. Here the action is called from `onSubmit` instead, which React
 *    does not reset, and it returns an outcome rather than redirecting.
 * 2. The outcome was never shown. This renders the server's own message.
 * 3. Images were sent at full size, straight into Vercel's 4.5 MB request cap.
 *    Every `<input type="file">` in the form is shrunk in the browser first
 *    (`prepareImage`), and anything still too large is stopped here, before an
 *    upload that the platform would reject without explanation.
 */

/** Stays under Vercel's 4.5 MB request body limit with room for the other fields. */
const maxRequestBytes = 4_000_000;

type Props = {
  action: (formData: FormData) => Promise<ActionResult>;
  children: React.ReactNode;
  className?: string;
  submitLabel: string;
  pendingLabel?: string;
  /** Clears file inputs after a successful save so the next save does not re-upload. */
  resetFilesOnSuccess?: boolean;
  /** Clears every field after a successful save. For "create" forms. */
  resetOnSuccess?: boolean;
  /** Asks before submitting. For destructive actions. */
  confirmMessage?: string;
  /** Styling for the submit button, e.g. a red outline for deletes. */
  buttonClassName?: string;
  /** Disables the submit button, e.g. when there is nothing to act on. */
  disabled?: boolean;
};

export default function CmsForm({
  action,
  children,
  className = "grid gap-4",
  submitLabel,
  pendingLabel = "Saving…",
  resetFilesOnSuccess = true,
  resetOnSuccess = false,
  confirmMessage,
  buttonClassName = "rounded-full bg-deep-navy px-5 py-3 text-sm font-semibold text-white hover:bg-primary-blue disabled:opacity-60",
  disabled = false,
}: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [preparing, setPreparing] = useState(false);
  const [result, setResult] = useState<ActionResult | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (confirmMessage && !window.confirm(confirmMessage)) return;
    setResult(null);

    const formData = new FormData(form);
    let total = 0;

    setPreparing(true);
    try {
      for (const input of Array.from(form.querySelectorAll<HTMLInputElement>('input[type="file"][name]'))) {
        const file = input.files?.[0];
        if (!file) {
          formData.delete(input.name);
          continue;
        }
        const prepared = await prepareImage(file);
        formData.set(input.name, prepared.file, prepared.file.name);
        total += prepared.file.size;
      }
    } finally {
      setPreparing(false);
    }

    if (total > maxRequestBytes) {
      setResult({
        ok: false,
        error: `The images in this form add up to ${formatFileSize(total)} even after compression. Upload them one save at a time, or use smaller files.`,
      });
      return;
    }

    startTransition(async () => {
      let outcome: ActionResult;
      try {
        outcome = await action(formData);
      } catch {
        outcome = {
          ok: false,
          error: "The save did not reach the server or the server failed. Nothing you typed has been lost — try again.",
        };
      }
      setResult(outcome);
      if (outcome.ok) {
        if (resetOnSuccess) form.reset();
        if (resetFilesOnSuccess || resetOnSuccess) {
          for (const input of Array.from(form.querySelectorAll<HTMLInputElement>('input[type="file"]'))) {
            input.value = "";
            input.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
        router.refresh();
      }
    });
  }

  const busy = pending || preparing;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={className}>
      {children}
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={busy || disabled} className={buttonClassName}>
          {preparing ? "Preparing images…" : pending ? pendingLabel : submitLabel}
        </button>
        {result && (
          <p
            role={result.ok ? "status" : "alert"}
            className={
              result.ok
                ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800"
                : "rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700"
            }
          >
            {result.ok ? result.message : result.error}
          </p>
        )}
      </div>
    </form>
  );
}
