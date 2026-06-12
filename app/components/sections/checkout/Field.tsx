import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/lib/cn";

const labelCls =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground";

const inputCls =
  "h-11 w-full rounded-xl border bg-foreground/5 px-4 text-sm text-foreground placeholder:text-muted/70 transition-colors focus:bg-foreground/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30";

/** Labelled text input matching the checkout form frames. */
export function Field({
  label,
  id,
  className,
  error,
  ...props
}: {
  label: string;
  className?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        className={cn(
          inputCls,
          error
            ? "border-red-500/70 focus:border-red-500"
            : "border-border focus:border-border-strong"
        )}
        {...props}
      />
      {error ? (
        <span className="text-xs text-red-500">{error}</span>
      ) : null}
    </div>
  );
}

/** Labelled select for fields like Country. */
export function SelectField({
  label,
  id,
  className,
  children,
  value,
  defaultValue,
  onChange,
}: {
  label: string;
  id: string;
  className?: string;
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={cn(inputCls, "border-border focus:border-border-strong appearance-none bg-no-repeat")}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2.5 4.5L6 8L9.5 4.5' stroke='%238a8a8a' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
          backgroundPosition: "right 1rem center",
        }}
      >
        {children}
      </select>
    </div>
  );
}
