"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, List, Mail, MessageCircle, Phone, Send, User, X } from "lucide-react";
import { useActionState, useEffect, useId, useRef, useState } from "react";
import { submitServiceInquiry, type FormState } from "@/lib/actions/public";
import { serviceInquiryOptions } from "@/lib/services";

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

export default function ServiceInquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, action, pending] = useActionState(submitServiceInquiry, initialState);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!state.ok) return;
    const timer = window.setTimeout(() => setIsOpen(false), 2200);
    return () => window.clearTimeout(timer);
  }, [state.ok]);

  return (
    <>
      <section className="page-x relative bg-white pb-20">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-primary-blue/10 bg-gradient-to-br from-soft-blue/70 via-white to-soft-green/60 p-7 text-center shadow-[0_22px_70px_rgba(4,18,63,0.07)] md:p-9">
          <p className="text-sm font-semibold uppercase text-primary-blue">Ready to build?</p>
          <h2 className="mt-3 text-3xl font-semibold text-deep-navy md:text-4xl">Let us shape the right service plan.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-dark-text/70">
            Share the service you need and the Infobytes Nepal team will follow up with a focused next step.
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            data-trail-anchor="top-center"
            className="focus-ring site-button-gradient mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)]"
          >
            Inquire About Services
            <Send size={17} />
          </button>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-deep-navy/28 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
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
              initial={{ y: 22, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-primary-blue">Service inquiry</p>
                  <h2 id={titleId} className="mt-1 text-xl font-semibold text-deep-navy">
                    Tell us what you need
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="focus-ring rounded-full border border-white/70 bg-white/90 p-2 text-deep-navy shadow-[0_12px_28px_rgba(4,18,63,0.12)] transition hover:border-primary-blue/35"
                  aria-label="Close service inquiry form"
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
                      <input name="name" required placeholder="Your name" className={fieldInputClass} />
                    </span>
                  </label>
                  <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                    Name of Organization
                    <span className={fieldShellClass}>
                      <Building2 size={17} className={iconClass} />
                      <input name="organizationName" placeholder="Organization" className={fieldInputClass} />
                    </span>
                  </label>
                  <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                    Contact Number *
                    <span className={fieldShellClass}>
                      <Phone size={17} className={iconClass} />
                      <input name="contactNumber" required placeholder="Contact number" className={fieldInputClass} />
                    </span>
                  </label>
                  <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                    Email Address
                    <span className={fieldShellClass}>
                      <Mail size={17} className={iconClass} />
                      <input name="email" type="email" placeholder="Email address" className={fieldInputClass} />
                    </span>
                  </label>
                </div>
                <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
                  <label className="grid gap-1.5 text-xs font-semibold text-deep-navy">
                    Type of Service *
                    <span className={fieldShellClass}>
                      <List size={17} className={iconClass} />
                      <select name="serviceType" required defaultValue="" className={`${fieldInputClass} appearance-none`}>
                        <option value="" disabled>
                          Select service
                        </option>
                        {serviceInquiryOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
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
                        placeholder="Briefly tell us about your requirement..."
                        className={textareaInputClass}
                      />
                    </span>
                  </label>
                </div>
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
                  {pending ? "Sending..." : "Send"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
