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
  tone?: "card" | "panel" | "plain" | "glass" | "glass-panel";
}) {
  const tones = {
    card: "bg-card text-card-foreground border border-border",
    panel: "bg-white text-panel-foreground border border-panel-border",
    plain: "border border-current/10",
    // Glassmorphism — `glass` for dark surfaces, `glass-panel` for light ones.
    glass: "glass text-card-foreground",
    "glass-panel": "glass-panel text-panel-foreground",
  } as const;

  return (
    <div className={cn("rounded-2xl", tones[tone], className)}>{children}</div>
  );
}
