"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

/**
 * A list of rows an editor can add to and remove from.
 *
 * Rows submit as repeated same-named fields rather than indexed ones
 * (`processTitle` three times, not `process.0.title`). The server zips the
 * parallel `getAll` results back together, which means deleting the middle row
 * needs no renumbering here and no gap handling there.
 *
 * State is a list of ids, not of values: the inputs stay uncontrolled and keep
 * their own text, so typing in a long FAQ answer does not re-render the whole
 * form on every keystroke. Removing a row drops its id, and React unmounts that
 * row's inputs along with it.
 */
export type RepeatableProps = {
  legend: string;
  hint?: string;
  addLabel: string;
  /** One initial row per entry. */
  initial: number;
  /** Renders the inputs for a row. `index` is only for placeholder text. */
  children: (index: number) => React.ReactNode;
};

let nextId = 0;

export default function Repeatable({ legend, hint, addLabel, initial, children }: RepeatableProps) {
  const [ids, setIds] = useState<number[]>(() => Array.from({ length: Math.max(initial, 1) }, () => nextId++));

  return (
    <fieldset className="rounded-2xl border border-primary-blue/12 bg-soft-blue/20 p-4">
      <legend className="px-2 text-sm font-semibold text-deep-navy">{legend}</legend>
      {hint && <p className="mb-3 text-xs leading-5 text-dark-text/60">{hint}</p>}

      <div className="grid gap-3">
        {ids.map((id, index) => (
          <div key={id} className="relative rounded-2xl border border-primary-blue/12 bg-white p-3 pr-12">
            {children(index)}
            <button
              type="button"
              aria-label={`Remove item ${index + 1}`}
              onClick={() => setIds((current) => (current.length > 1 ? current.filter((item) => item !== id) : current))}
              disabled={ids.length === 1}
              className="absolute right-2 top-2 rounded-full border border-primary-blue/15 p-2 text-dark-text/55 transition hover:border-red-300 hover:text-red-600 disabled:opacity-30"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIds((current) => [...current, nextId++])}
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy hover:bg-white"
      >
        <Plus size={14} />
        {addLabel}
      </button>
    </fieldset>
  );
}
