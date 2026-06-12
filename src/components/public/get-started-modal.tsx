"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, List, Mail, MessageCircle, Phone, Send, User, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useActionState, useEffect, useId, useRef } from "react";
import { productInterests } from "@/lib/content";
import { submitGetStarted, type FormState } from "@/lib/actions/public";

const initialState: FormState = { ok: false, message: "" };
const inputClass =
  "focus-ring h-11 w-full rounded-2xl border border-white/70 bg-white/88 py-2.5 pl-11 pr-3.5 text-sm text-dark-text shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(4,18,63,0.06)] placeholder:text-dark-text/45";
const iconClass = "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-primary-blue";

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
          className="fixed inset-0 z-[80] flex items-end justify-center bg-deep-navy/28 p-0 backdrop-blur-xl md:items-center md:p-6"
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
            className="max-h-[94dvh] w-full overflow-y-auto rounded-t-[30px] border border-white/55 bg-white/64 p-5 shadow-[0_32px_110px_rgba(4,18,63,0.28)] backdrop-blur-2xl md:max-w-3xl md:overflow-visible md:rounded-[30px] md:p-6"
            initial={{ y: 44, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 28, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="sr-only">
                  Begin with InfoBytes Nepal
                </h2>
                <Image
                  src="/assets/brand/infobytes-nepal-logo.png"
                  alt="InfoBytes Nepal logo"
                  width={132}
                  height={42}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </div>
              <button
                type="button"
                onClick={onClose}
                className="focus-ring rounded-full border border-white/70 bg-white/90 p-3 text-deep-navy shadow-[0_12px_28px_rgba(4,18,63,0.12)] transition hover:border-primary-blue/35"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <form action={action} className="grid gap-3.5">
              <div className="grid gap-3.5 md:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-semibold text-deep-navy">
                  Name *
                  <span className="relative">
                    <User size={18} className={iconClass} />
                    <input name="name" required placeholder="Your full name" className={inputClass} />
                  </span>
                </label>
                <label className="grid gap-1.5 text-sm font-semibold text-deep-navy">
                  Name of Organization
                  <span className="relative">
                    <Building2 size={18} className={iconClass} />
                    <input name="organizationName" placeholder="Organization name" className={inputClass} />
                  </span>
                </label>
                <label className="grid gap-1.5 text-sm font-semibold text-deep-navy">
                  Contact Number *
                  <span className="relative">
                    <Phone size={18} className={iconClass} />
                    <input name="contactNumber" required placeholder="Your contact number" className={inputClass} />
                  </span>
                </label>
                <label className="grid gap-1.5 text-sm font-semibold text-deep-navy">
                  Email Address *
                  <span className="relative">
                    <Mail size={18} className={iconClass} />
                    <input name="email" type="email" required placeholder="Your email address" className={inputClass} />
                  </span>
                </label>
              </div>
              <label className="grid gap-1.5 text-sm font-semibold text-deep-navy">
                What would you like to begin with?
                <span className="relative">
                  <List size={19} className={iconClass} />
                  <select
                    name="productInterest"
                    required
                    defaultValue={initialInterest || ""}
                    className={inputClass}
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
              <label className="grid gap-1.5 text-sm font-semibold text-deep-navy">
                Remarks
                <span className="relative">
                  <MessageCircle size={18} className="pointer-events-none absolute left-3.5 top-3.5 text-primary-blue" />
                  <textarea
                    name="remarks"
                    rows={2}
                    placeholder="Write your message here..."
                    className="focus-ring min-h-20 w-full resize-y rounded-2xl border border-white/70 bg-white/88 py-3 pl-11 pr-3.5 text-sm text-dark-text shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_10px_24px_rgba(4,18,63,0.06)] placeholder:text-dark-text/45"
                  />
                </span>
              </label>
              <label className="flex gap-3 text-sm leading-5 text-dark-text/72">
                <input name="consentChecked" type="checkbox" className="mt-1 h-4 w-4 accent-primary-blue" />
                <span>
                  I agree to be contacted by InfoBytes Nepal about my inquiry and accept the{" "}
                  <Link href="/privacy-policy" className="font-semibold text-primary-blue">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {state.message && (
                <p className={state.ok ? "text-sm font-medium text-primary-green" : "text-sm font-medium text-primary-blue"}>
                  {state.message}
                </p>
              )}
              <button
                type="submit"
                disabled={pending}
                className="focus-ring site-button-gradient inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)] disabled:cursor-wait disabled:opacity-70"
              >
                <Send size={18} />
                {pending ? "Sending..." : "Begin with InfoBytes Nepal"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
