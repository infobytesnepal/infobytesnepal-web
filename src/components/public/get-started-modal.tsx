"use client";

import { Building2, List, Mail, MessageCircle, Phone, Send, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useActionState, useEffect, useId, useRef } from "react";
import { productInterests } from "@/lib/content";
import { submitGetStarted, type FormState } from "@/lib/actions/public";

const initialState: FormState = { ok: false, message: "" };
const fieldShellClass =
  "focus-within:ring-2 focus-within:ring-primary-blue/25 flex h-12 w-full items-center gap-3 rounded-full border border-white/70 bg-white/88 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(4,18,63,0.06)]";
const fieldInputClass =
  "min-w-0 flex-1 border-0 bg-transparent p-0 text-sm font-medium text-dark-text outline-none placeholder:text-dark-text/45";
const textareaShellClass =
  "focus-within:ring-2 focus-within:ring-primary-blue/25 flex min-h-24 w-full items-start gap-3 rounded-2xl border border-white/70 bg-white/88 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(4,18,63,0.06)]";
const textareaInputClass =
  "min-h-16 flex-1 resize-y border-0 bg-transparent p-0 text-sm font-medium text-dark-text outline-none placeholder:text-dark-text/45";
const iconClass = "shrink-0 text-primary-blue";

export default function GetStartedModal({
  isOpen,
  initialInterest,
  onClose,
}: {
  isOpen: boolean;
  initialInterest?: string;
  onClose: () => void;
}) {
  const [state, action, pending] = useActionState(submitGetStarted, initialState);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (state.ok) {
      const timer = window.setTimeout(onClose, 2400);
      return () => window.clearTimeout(timer);
    }
  }, [state.ok, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-deep-navy/28 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="max-h-[86dvh] w-full max-w-[34rem] overflow-y-auto rounded-[24px] border border-white/55 bg-white/64 p-4 shadow-[0_28px_90px_rgba(4,18,63,0.26)] backdrop-blur-2xl md:p-5"
            style={{ width: "min(34rem, calc(100vw - 2rem))" }}
            initial={{ y: 44, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 28, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <h2 id={titleId} className="sr-only">
              Begin with Infobytes Nepal
            </h2>
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="focus-ring rounded-full border border-white/70 bg-white/90 p-2 text-deep-navy shadow-[0_12px_28px_rgba(4,18,63,0.12)] transition hover:border-primary-blue/35"
                aria-label="Close"
              >
                <X size={17} />
              </button>
            </div>

            <form action={action} className="grid gap-3">
              <div className="grid gap-3 md:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                  Name *
                  <span className={fieldShellClass}>
                    <User size={17} className={iconClass} />
                    <input name="name" required placeholder="Your full name" className={fieldInputClass} />
                  </span>
                </label>
                <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                  Name of Organization
                  <span className={fieldShellClass}>
                    <Building2 size={17} className={iconClass} />
                    <input name="organizationName" placeholder="Organization name" className={fieldInputClass} />
                  </span>
                </label>
                <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                  Contact Number *
                  <span className={fieldShellClass}>
                    <Phone size={17} className={iconClass} />
                    <input name="contactNumber" required placeholder="Your contact number" className={fieldInputClass} />
                  </span>
                </label>
                <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                  Email Address *
                  <span className={fieldShellClass}>
                    <Mail size={17} className={iconClass} />
                    <input name="email" type="email" required placeholder="Your email address" className={fieldInputClass} />
                  </span>
                </label>
              </div>
              <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
                <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                  What would you like to begin with?
                  <span className={fieldShellClass}>
                    <List size={17} className={iconClass} />
                    <select
                      name="productInterest"
                      required
                      defaultValue={initialInterest || ""}
                      className={`${fieldInputClass} appearance-none`}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {productInterests.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </span>
                </label>
                <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                  Remarks
                  <span className={textareaShellClass}>
                    <MessageCircle size={17} className={`${iconClass} mt-0.5`} />
                    <textarea
                      name="remarks"
                      rows={3}
                      placeholder="Write your message here..."
                      className={textareaInputClass}
                    />
                  </span>
                </label>
              </div>
              <label className="flex gap-2.5 text-xs leading-5 text-dark-text/72">
                <input name="consentChecked" type="checkbox" className="mt-1 h-4 w-4 accent-primary-blue" />
                <span>
                  I agree to be contacted by Infobytes Nepal about my inquiry.
                </span>
              </label>
              {state.message && (
                <p className={state.ok ? "text-xs font-medium text-primary-green" : "text-xs font-medium text-primary-blue"}>
                  {state.message}
                </p>
              )}
              <button
                type="submit"
                disabled={pending}
                className="focus-ring site-button-gradient inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)] disabled:cursor-wait disabled:opacity-70"
              >
                <Send size={16} />
                {pending ? "Sending..." : "Begin with Infobytes Nepal"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
