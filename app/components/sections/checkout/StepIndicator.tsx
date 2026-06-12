import { cn } from "@/app/lib/cn";
import { steps, type Step } from "./checkout-data";

/**
 * Cart → Shipping → Payment progress rail. Completed steps show a check, the
 * active step is filled, upcoming steps are dimmed. Server component (no state).
 */
export function StepIndicator({ current }: { current: Step }) {
  const activeIndex = steps.findIndex((s) => s.id === current);

  return (
    <nav
      aria-label="Checkout progress"
      className="flex items-center justify-center"
    >
      <ol className="flex items-center gap-2 sm:gap-3">
        {steps.map((step, i) => {
          const done = i < activeIndex;
          const active = i === activeIndex;
          return (
            <li key={step.id} className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold transition-colors",
                    done || active
                      ? "bg-primary text-primary-foreground"
                      : "border border-border-strong text-muted"
                  )}
                  aria-current={active ? "step" : undefined}
                >
                  {done ? (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6.5L4.75 8.75L9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </span>
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : done
                        ? "text-foreground/80"
                        : "text-muted"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-px w-8 sm:w-12",
                    done ? "bg-border-strong" : "bg-border"
                  )}
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
