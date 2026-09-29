/**
 * What a CMS save returns to the form that called it.
 *
 * The CMS forms used to `redirect()` on every outcome. A redirect carries no
 * message unless someone remembers to add a query string and render it — the
 * products page did the first and not the second, so a failed save landed on a
 * page that looked exactly like the one it left, with everything the author had
 * typed wiped. Returning the outcome instead keeps the author on the form, with
 * their input intact, and puts the actual reason in front of them.
 */
export type ActionResult = { ok: true; message: string } | { ok: false; error: string };

export const ok = (message: string): ActionResult => ({ ok: true, message });
export const failed = (error: string): ActionResult => ({ ok: false, error });

/** The first zod issue, phrased for a person: "Slug: Use lowercase letters…". */
export function firstIssue(
  issues: ReadonlyArray<{ path: PropertyKey[]; message: string }>,
  labels: Record<string, string> = {},
) {
  const issue = issues[0];
  if (!issue) return "Some fields need attention.";
  const key = String(issue.path[0] ?? "");
  const label = labels[key] ?? key;
  return label ? `${label}: ${issue.message}` : issue.message;
}
