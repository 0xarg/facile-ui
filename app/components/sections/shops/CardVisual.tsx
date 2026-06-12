import { cn } from "@/app/lib/cn";

type Tone = "dark" | "steel" | "white";

const tones: Record<Tone, string> = {
  dark: "bg-gradient-to-br from-[#262626] to-[#0a0a0a]",
  steel: "bg-gradient-to-br from-[#5b5e66] via-[#3a3d44] to-[#1c1d21]",
  white: "bg-gradient-to-br from-white to-[#e7e7e4]",
};

/**
 * CSS-built Facile card mockup used across product tiles — mirrors the
 * Figma "FacileCardVisual" without shipping raster assets.
 */
export function CardVisual({
  tone = "dark",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const light = tone === "white";
  const ink = light ? "rgba(0,0,0,0.45)" : "rgba(255,255,255,0.6)";
  const dot = light ? "bg-black/15" : "bg-white/30";

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "relative aspect-[1.585/1] w-[64%] max-w-[220px] overflow-hidden rounded-[14px] shadow-[0_22px_48px_rgba(0,0,0,0.35)]",
          tones[tone],
          light && "border border-black/10"
        )}
      >
        {/* nfc dots */}
        <div className="absolute left-[7%] top-[16%] flex flex-col gap-1.5">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex gap-1">
              {[0, 1, 2].map((d) => (
                <span key={d} className={cn("size-[5px] rounded-full", dot)} />
              ))}
            </div>
          ))}
        </div>
        {/* mini QR */}
        <div
          className={cn(
            "absolute right-[6%] top-[13%] grid size-7 grid-cols-3 gap-[2px] rounded-[3px] p-[3px]",
            light ? "bg-black/10" : "bg-white/10"
          )}
        >
          {[1, 0, 1, 0, 1, 1, 1, 0, 1].map((on, i) => (
            <span
              key={i}
              className={cn(
                "rounded-[1px]",
                on ? (light ? "bg-black/50" : "bg-white/70") : "bg-transparent"
              )}
            />
          ))}
        </div>
        <span
          className="absolute bottom-[11%] left-[8%] text-[9px] font-bold"
          style={{ color: ink }}
        >
          facile
        </span>
      </div>
    </div>
  );
}
