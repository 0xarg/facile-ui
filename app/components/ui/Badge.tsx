import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

/**
 * Small pill label (eyebrow / status). Inherits the surrounding surface's
 * foreground via currentColor so it works on both dark page and light panels.
 */
export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-current/15 px-3 py-1 text-xs font-medium tracking-wide",
        className
      )}
    >
      {children}
    </span>
  );
}
