"use client";

import { useActionState, useId, useRef, useState } from "react";
import { CheckCircle2, Paperclip } from "lucide-react";
import { submitJobApplication, type FormState } from "@/lib/actions/public";

const initialState: FormState = { ok: false, message: "" };

const inputClass =
  "focus-ring w-full rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text placeholder:text-dark-text/35";
const inputErrorClass =
  "focus-ring w-full rounded-2xl border border-red-500/60 bg-red-50/40 px-4 py-3 text-dark-text placeholder:text-dark-text/35";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ACCEPTED = ".pdf,.doc,.docx";

/**
 * Job application form.
 *
 * Validation runs twice on purpose: the browser's own required and type rules
 * give instant feedback, and `submitJobApplication` revalidates everything with
 * zod because anything arriving at a server action is untrusted. The only check
 * that is client-only is the file size, which is there to save someone a 5MB
 * upload that the server would reject anyway.
 */
export default function JobApplicationForm({ jobSlug, jobTitle }: { jobSlug: string; jobTitle: string }) {
  const [state, action, pending] = useActionState(submitJobApplication, initialState);
  const [fileError, setFileError] = useState("");
  const [fileName, setFileName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const baseId = useId();

  const fieldError = (name: string) => state.errors?.[name];

  const describedBy = (name: string) => (fieldError(name) ? `${baseId}-${name}-error` : undefined);

  if (state.ok) {
    return (
      <div
        className="rounded-[28px] border border-primary-green/35 bg-soft-green/40 p-7 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-green text-white">
          <CheckCircle2 size={24} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-deep-navy">Application received</h3>
        <p className="mt-3 leading-7 text-dark-text/74">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={action}
      noValidate={false}
      className="rounded-[28px] border border-primary-blue/12 bg-white p-5 shadow-[0_24px_70px_rgba(4,18,63,0.08)] md:p-7"
    >
      <h3 className="text-xl font-semibold text-deep-navy">Apply for this role</h3>
      <p className="mt-2 text-sm leading-6 text-dark-text/64">
        Fields marked with an asterisk are required. We reply to every applicant.
      </p>

      <input type="hidden" name="jobSlug" value={jobSlug} />
      <input type="hidden" name="jobTitle" value={jobTitle} />

      {/*
        Honeypot. Hidden from sight and from assistive technology, and taken out
        of the tab order, so no real applicant can fill it in by accident.
      */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor={`${baseId}-company`}>Company</label>
        <input id={`${baseId}-company`} type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor={`${baseId}-name`} className="text-sm font-medium text-deep-navy">
            Full name *
          </label>
          <input
            id={`${baseId}-name`}
            name="name"
            required
            autoComplete="name"
            aria-invalid={fieldError("name") ? true : undefined}
            aria-describedby={describedBy("name")}
            className={fieldError("name") ? inputErrorClass : inputClass}
          />
          {fieldError("name") && (
            <p id={`${baseId}-name-error`} className="text-sm font-medium text-red-600">
              {fieldError("name")}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${baseId}-email`} className="text-sm font-medium text-deep-navy">
            Email *
          </label>
          <input
            id={`${baseId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={fieldError("email") ? true : undefined}
            aria-describedby={describedBy("email")}
            className={fieldError("email") ? inputErrorClass : inputClass}
          />
          {fieldError("email") && (
            <p id={`${baseId}-email-error`} className="text-sm font-medium text-red-600">
              {fieldError("email")}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${baseId}-phone`} className="text-sm font-medium text-deep-navy">
            Phone *
          </label>
          <input
            id={`${baseId}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="98XXXXXXXX"
            aria-invalid={fieldError("phone") ? true : undefined}
            aria-describedby={describedBy("phone")}
            className={fieldError("phone") ? inputErrorClass : inputClass}
          />
          {fieldError("phone") && (
            <p id={`${baseId}-phone-error`} className="text-sm font-medium text-red-600">
              {fieldError("phone")}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${baseId}-portfolio`} className="text-sm font-medium text-deep-navy">
            Portfolio or LinkedIn
          </label>
          <input
            id={`${baseId}-portfolio`}
            name="portfolioUrl"
            type="url"
            inputMode="url"
            placeholder="https://"
            aria-invalid={fieldError("portfolioUrl") ? true : undefined}
            aria-describedby={describedBy("portfolioUrl")}
            className={fieldError("portfolioUrl") ? inputErrorClass : inputClass}
          />
          {fieldError("portfolioUrl") && (
            <p id={`${baseId}-portfolioUrl-error`} className="text-sm font-medium text-red-600">
              {fieldError("portfolioUrl")}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        <label htmlFor={`${baseId}-cv`} className="text-sm font-medium text-deep-navy">
          CV or résumé
        </label>
        <input
          id={`${baseId}-cv`}
          name="cv"
          type="file"
          accept={ACCEPTED}
          aria-invalid={fieldError("cv") || fileError ? true : undefined}
          aria-describedby={fieldError("cv") || fileError ? `${baseId}-cv-error` : `${baseId}-cv-help`}
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) {
              setFileError("");
              setFileName("");
              return;
            }
            if (file.size > MAX_CV_BYTES) {
              setFileError("That file is over 5MB. Please upload a smaller one.");
              setFileName("");
              event.target.value = "";
              return;
            }
            setFileError("");
            setFileName(file.name);
          }}
          className={`${fieldError("cv") || fileError ? inputErrorClass : inputClass} file:mr-4 file:rounded-full file:border-0 file:bg-soft-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-blue`}
        />
        {fieldError("cv") || fileError ? (
          <p id={`${baseId}-cv-error`} className="text-sm font-medium text-red-600">
            {fileError || fieldError("cv")}
          </p>
        ) : (
          <p id={`${baseId}-cv-help`} className="text-xs leading-5 text-dark-text/58">
            PDF or Word, up to 5MB. {fileName && <span className="font-semibold text-primary-green">{fileName} attached</span>}
          </p>
        )}
      </div>

      <div className="mt-4 grid gap-2">
        <label htmlFor={`${baseId}-message`} className="text-sm font-medium text-deep-navy">
          Anything you want us to know
        </label>
        <textarea
          id={`${baseId}-message`}
          name="message"
          rows={4}
          placeholder="A few lines about why this role, or a project you are proud of."
          aria-invalid={fieldError("message") ? true : undefined}
          aria-describedby={describedBy("message")}
          className={fieldError("message") ? inputErrorClass : inputClass}
        />
        {fieldError("message") && (
          <p id={`${baseId}-message-error`} className="text-sm font-medium text-red-600">
            {fieldError("message")}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm leading-6 text-dark-text/74">
          <input
            type="checkbox"
            name="consentChecked"
            required
            aria-invalid={fieldError("consentChecked") ? true : undefined}
            aria-describedby={describedBy("consentChecked")}
            className="focus-ring mt-1 h-4 w-4 shrink-0 rounded border-primary-blue/30 accent-primary-blue"
          />
          <span>
            I agree that Infobytes Nepal may store these details to consider my application. *
          </span>
        </label>
        {fieldError("consentChecked") && (
          <p id={`${baseId}-consentChecked-error`} className="mt-2 text-sm font-medium text-red-600">
            {fieldError("consentChecked")}
          </p>
        )}
      </div>

      {state.message && !state.ok && (
        <p role="alert" aria-live="assertive" className="mt-5 rounded-2xl border border-red-500/30 bg-red-50/60 px-4 py-3 text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="focus-ring site-button-gradient mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold shadow-[0_18px_42px_rgba(3,66,197,0.18)] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        <Paperclip size={16} aria-hidden="true" />
        {pending ? "Sending your application..." : "Submit application"}
      </button>
    </form>
  );
}
