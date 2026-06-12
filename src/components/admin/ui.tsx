export function AdminCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-[20px] border border-primary-blue/10 bg-white p-5 shadow-[0_18px_55px_rgba(4,18,63,0.06)] ${className}`}>{children}</section>;
}

export function AdminInput(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="grid gap-2 text-sm font-medium text-deep-navy">
      {label}
      <input {...rest} className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue" />
    </label>
  );
}

export function AdminTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="grid gap-2 text-sm font-medium text-deep-navy">
      {label}
      <textarea {...rest} className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue" />
    </label>
  );
}

export function AdminFileInput(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string; help?: string }) {
  const { label, help, ...rest } = props;
  return (
    <label className="grid gap-2 text-sm font-medium text-deep-navy">
      {label}
      <input
        {...rest}
        type="file"
        className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text file:mr-4 file:rounded-full file:border-0 file:bg-soft-blue file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-blue focus:outline-primary-blue"
      />
      {help && <span className="text-xs leading-5 text-dark-text/58">{help}</span>}
    </label>
  );
}

export function AdminSelect(props: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; children: React.ReactNode }) {
  const { label, children, ...rest } = props;
  return (
    <label className="grid gap-2 text-sm font-medium text-deep-navy">
      {label}
      <select {...rest} className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue">
        {children}
      </select>
    </label>
  );
}

export function SaveButton({ children = "Save" }: { children?: React.ReactNode }) {
  return <button className="rounded-full bg-deep-navy px-5 py-3 text-sm font-semibold text-white hover:bg-primary-blue">{children}</button>;
}
