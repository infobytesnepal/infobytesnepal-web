"use client";

import { useActionState } from "react";
import { submitContactInquiry, type FormState } from "@/lib/actions/public";

const initialState: FormState = { ok: false, message: "" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContactInquiry, initialState);
  return (
    <form action={action} className="rounded-[28px] border border-primary-blue/12 bg-white p-5 shadow-[0_24px_70px_rgba(4,18,63,0.08)] md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-deep-navy">
          Name *
          <input name="name" required className="focus-ring rounded-2xl border border-primary-blue/15 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-deep-navy">
          Name of Organization
          <input name="organizationName" className="focus-ring rounded-2xl border border-primary-blue/15 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-deep-navy">
          Contact Number *
          <input name="contactNumber" required className="focus-ring rounded-2xl border border-primary-blue/15 px-4 py-3" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-deep-navy">
          Email Address
          <input name="email" type="email" className="focus-ring rounded-2xl border border-primary-blue/15 px-4 py-3" />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-deep-navy">
        Remarks
        <textarea name="remarks" rows={5} className="focus-ring rounded-2xl border border-primary-blue/15 px-4 py-3" />
      </label>
      {state.message && <p className={state.ok ? "mt-4 text-sm font-medium text-primary-green" : "mt-4 text-sm font-medium text-primary-blue"}>{state.message}</p>}
      <button
        type="submit"
        disabled={pending}
        className="focus-ring site-button-gradient mt-6 min-w-52 rounded-full px-12 py-3 font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)] disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending..." : "Contact Me"}
      </button>
    </form>
  );
}
