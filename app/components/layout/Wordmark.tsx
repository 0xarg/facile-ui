import { cn } from "@/app/lib/cn";

/**
 * Facile brand lockup: a colorful ring mark + "facile" wordmark in the current
 * surface's foreground color, so it reads on both dark and light themes.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="facile-gradient inline-block size-5 rounded-full [mask:radial-gradient(circle,transparent_34%,#000_36%)]" />
      <span className="text-lg font-bold tracking-[-0.04em] text-foreground">
        facile
      </span>
    </span>
  );
}
