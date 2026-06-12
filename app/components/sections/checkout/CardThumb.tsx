import { cn } from "@/app/lib/cn";

/**
 * Small square product placeholder shown in cart rows and order summaries —
 * a subtle dotted grid mark matching the Figma frames (no real product image
 * since this is mock UI).
 */
export function CardThumb({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground/40",
        className
      )}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        {[3, 8.5, 14].map((y) =>
          [3, 8.5, 14].map((x) => (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="3"
              height="3"
              rx="0.75"
              fill="currentColor"
            />
          ))
        )}
      </svg>
    </span>
  );
}
