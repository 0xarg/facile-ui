import { cn } from "@/app/lib/cn";

/**
 * CSS-built Facile Pay card mockup (matte black with NFC dot-grid, mini QR and
 * wordmark) — recreated from the Figma render so no raster asset is needed.
 * `width` scales the whole card; aspect ratio is fixed at the Figma 1.59:1.
 */
export function PayCardVisual({
  width = 240,
  className,
}: {
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[1.59/1] overflow-hidden rounded-2xl bg-gradient-to-br from-[#262626] to-[#0a0a0a] shadow-[0_32px_64px_rgba(0,0,0,0.7)]",
        className
      )}
      style={{ width }}
    >
      {/* faint sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />
      {/* contactless / nfc dot grid */}
      <div className="absolute left-[6%] top-[16%] flex flex-col gap-[5px]">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex gap-[5px]">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className="rounded-full bg-white/30"
                style={{ width: width * 0.022, height: width * 0.022 }}
              />
            ))}
          </div>
        ))}
      </div>
      {/* mini QR */}
      <div
        className="absolute right-[5%] top-[11%] grid grid-cols-3 gap-[2px] rounded-[3px] bg-white/10 p-[3px]"
        style={{ width: width * 0.12, height: width * 0.12 }}
      >
        {[1, 0, 1, 0, 1, 1, 1, 0, 1].map((on, i) => (
          <span
            key={i}
            className={cn("rounded-[1px]", on ? "bg-white/70" : "bg-transparent")}
          />
        ))}
      </div>
      <span
        className="absolute bottom-[9%] left-[6.5%] font-bold text-white/55"
        style={{ fontSize: width * 0.042 }}
      >
        facile
      </span>
    </div>
  );
}
