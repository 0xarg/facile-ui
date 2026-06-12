import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

/**
 * Surface card. `tone` picks whether it sits on the dark page ("card") or
 * inside a light panel ("panel"). Border + bg come from semantic tokens so
 * both themes and both surfaces stay consistent.
 */
export function Card({
  children,
  className,
  tone = "card",
}: {
  children: ReactNode;
  className?: string;
  tone?: "card" | "panel" | "plain";
}) {
  const tones = {
    card: "bg-card text-card-foreground border border-border",
    panel: "bg-white text-panel-foreground border border-panel-border",
    plain: "border border-current/10",
  } as const;

  return (
    <div className={cn("rounded-2xl", tones[tone], className)}>{children}</div>
  );
}
