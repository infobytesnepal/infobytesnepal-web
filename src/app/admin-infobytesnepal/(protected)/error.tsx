"use client";

import Link from "next/link";

/**
 * What the CMS shows when something throws.
 *
 * There was no error boundary anywhere in the app, so any exception inside an
 * admin page or action — an oversized upload, a duplicate slug hitting the
 * unique index — replaced the whole screen with Next's generic "Application
 * error: a server-side exception has occurred", with no way back except the
 * browser's back button. The forms now report expected failures themselves;
 * this is for the ones nobody expected, and it keeps the sidebar and a way to
 * retry.
 *
 * In production Next hides the real message from the browser and passes only a
 * digest, which matches an entry in the Vercel function logs. It is shown so
 * whoever reports the problem can quote it.
 */
export default function AdminError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="max-w-2xl rounded-[20px] border border-red-200 bg-red-50 p-6">
      <h1 className="text-xl font-semibold text-red-800">This screen hit an error</h1>
      <p className="mt-2 text-sm leading-6 text-red-800/85">
        Nothing has been published by this failure. Try again, and if it keeps happening, send the reference below to
        whoever maintains the site.
      </p>
      {process.env.NODE_ENV !== "production" && error.message && (
        <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-white/70 p-3 text-xs text-red-900">{error.message}</pre>
      )}
      {error.digest && (
        <p className="mt-3 font-mono text-xs text-red-900/70">Reference: {error.digest}</p>
      )}
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-deep-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-blue"
        >
          Try again
        </button>
        <Link
          href="/admin-infobytesnepal"
          className="rounded-full border border-primary-blue/20 px-5 py-2.5 text-sm font-semibold text-deep-navy hover:bg-white"
        >
          Back to the dashboard
        </Link>
      </div>
    </div>
  );
}
