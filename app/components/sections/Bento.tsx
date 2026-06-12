import type { ReactNode } from "react";
import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";
import { cn } from "@/app/lib/cn";

/* ── shared card shell ───────────────────────────────────────────────── */

function BentoCard({
  tag,
  className,
  children,
}: {
  tag: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <StaggerItem className={cn("h-full", className)}>
      <div className="flex h-full flex-col gap-2.5 overflow-hidden rounded-[20px] border border-panel-border bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
        <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.15em] text-[#aaa]">
          {tag}
        </p>
        {children}
      </div>
    </StaggerItem>
  );
}

/* ── card product mockup (built from CSS, matches the Figma render) ──── */

function CardVisual() {
  return (
    <div className="flex flex-1 items-end justify-center pt-4">
      <div className="-rotate-6">
        <div className="relative aspect-[1.6/1] w-[240px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#262626] to-[#0a0a0a] shadow-[0_32px_64px_rgba(0,0,0,0.45)]">
          {/* contactless / nfc rows */}
          <div className="absolute left-[6%] top-[16%] flex flex-col gap-1.5">
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex gap-1">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className="size-[5px] rounded-full bg-white/30"
                  />
                ))}
              </div>
            ))}
          </div>
          {/* mini QR */}
          <div className="absolute right-[5%] top-[12%] grid size-7 grid-cols-3 gap-[2px] rounded-[3px] bg-white/10 p-[3px]">
            {[1, 0, 1, 0, 1, 1, 1, 0, 1].map((on, i) => (
              <span
                key={i}
                className={cn(
                  "rounded-[1px]",
                  on ? "bg-white/70" : "bg-transparent"
                )}
              />
            ))}
          </div>
          <span className="absolute bottom-[10%] left-[7%] text-[9px] font-bold text-white/55">
            facile
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── icons ───────────────────────────────────────────────────────────── */

function WifiIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0a0a0a"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12.55a11 11 0 0 1 14 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0a0a0a"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 2v6h-6" />
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M3 22v-6h6" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </svg>
  );
}

function QrIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0a0a0a"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3" />
      <path d="M21 14v7h-7v-3" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0a0a0a"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

/* ── section ─────────────────────────────────────────────────────────── */

const ANALYTICS_BARS = [
  23, 36, 31, 58, 44, 71, 52, 77, 63, 89, 66, 100,
];

export function Bento() {
  return (
    <section className="bg-panel py-24 text-panel-foreground sm:py-32">
      <Container size="lg">
        {/* header */}
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-panel-foreground sm:text-5xl md:text-[60px] md:leading-[1.05]">
                The card. The profile.
              </h2>
              <p className="mt-3 text-lg text-panel-muted sm:text-xl">
                Two products. One system.
              </p>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#aaa]">
              Everything in one
            </span>
          </div>
        </Reveal>

        {/* bento grid */}
        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* THE CARD — big card, spans 2 cols + 2 rows */}
          <BentoCard
            tag="The card"
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <h3 className="text-[26px] font-bold leading-tight tracking-tight text-[#0a0a0a]">
              Tap. They have everything.
            </h3>
            <p className="max-w-[320px] text-sm leading-relaxed text-[#777]">
              Embedded NFC chip. Laser-engraved QR fallback. Works on every
              iPhone and Android — opens in any browser, zero friction.
            </p>
            <CardVisual />
            <div className="mt-2 flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5">
                <span className="size-3.5 rounded-[7px] border border-black/10 bg-[#1a1a1a]" />
                <span className="size-3.5 rounded-[7px] border border-black/10 bg-[#9ca3af]" />
                <span className="size-3.5 rounded-[7px] border border-black/10 bg-[#f3f4f6]" />
              </div>
              <span className="text-[13px] text-[#888]">From $29 →</span>
            </div>
          </BentoCard>

          {/* ZERO FRICTION */}
          <BentoCard tag="Zero friction">
            <div className="pt-1">
              <WifiIcon />
            </div>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-[#0a0a0a]">
              No app. Ever.
            </h3>
            <p className="text-[13px] leading-relaxed text-[#777]">
              Opens in Safari or Chrome. No download. No signup.
            </p>
          </BentoCard>

          {/* SPEED */}
          <BentoCard tag="Speed">
            <p
              className="bg-clip-text text-5xl font-extrabold leading-none tracking-tight text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(155deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)",
              }}
            >
              0.8s
            </p>
            <p className="text-[13px] leading-snug text-[#777]">
              Profile opens in under a second.
            </p>
            <div className="mt-2">
              <div className="h-1 w-full overflow-hidden rounded-full bg-black/5">
                <div
                  className="h-full w-[27%] rounded-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(177deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)",
                  }}
                />
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-[#888]">
                <span>0s</span>
                <span>0.8s</span>
                <span>3s</span>
              </div>
            </div>
          </BentoCard>

          {/* THE PROFILE — wide card, spans 2 cols */}
          <BentoCard tag="The profile" className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-1 items-start gap-5">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold leading-snug tracking-tight text-[#0a0a0a]">
                  Your link in bio. Finally worth sharing.
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#777]">
                  Add links, social handles, portfolio, payment links —
                  anything. Update anytime from your dashboard.
                </p>
              </div>
              {/* phone mockup */}
              <div className="hidden h-[140px] w-20 shrink-0 rounded-[14px] border border-white/10 bg-[#0a0a0a] p-[7px] sm:flex sm:flex-col sm:gap-[3px]">
                <span className="h-2.5 w-full rounded bg-white/[0.07]" />
                <span className="h-[7px] w-3/4 rounded bg-white/5" />
                <span className="h-[7px] w-3/5 rounded bg-white/5" />
                <span className="h-[7px] w-2/3 rounded bg-white/5" />
                <span className="h-[7px] w-1/2 rounded bg-white/5" />
                <span className="mt-1 h-[22px] w-full rounded-md bg-[#6ee7b7]/[0.12]" />
                <span className="h-[22px] w-full rounded-md bg-[#7dd3fc]/[0.07]" />
              </div>
            </div>
          </BentoCard>

          {/* ALWAYS CURRENT */}
          <BentoCard tag="Always current">
            <div className="pt-1">
              <RefreshIcon />
            </div>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-[#0a0a0a]">
              Update once. Everywhere.
            </h3>
            <p className="text-xs leading-relaxed text-[#777]">
              Change your profile any time. Your physical card always shows the
              latest.
            </p>
          </BentoCard>

          {/* BACKUP */}
          <BentoCard tag="Backup">
            <div className="pt-1">
              <QrIcon />
            </div>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-[#0a0a0a]">
              No NFC? QR.
            </h3>
            <p className="text-xs leading-relaxed text-[#777]">
              Every card ships with a laser-engraved QR. Works on any camera
              app.
            </p>
          </BentoCard>

          {/* COMPATIBILITY */}
          <BentoCard tag="Compatibility">
            <p className="pt-1 text-[28px] leading-none">📱</p>
            <h3 className="mt-2 text-lg font-bold tracking-tight text-[#0a0a0a]">
              Every phone.
            </h3>
            <p className="text-xs leading-relaxed text-[#777]">
              iPhone, Android, or anything with a camera. No exceptions.
            </p>
          </BentoCard>

          {/* ANALYTICS — taller card */}
          <BentoCard tag="Analytics" className="lg:row-span-2">
            <div className="pt-1">
              <ChartIcon />
            </div>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-[#0a0a0a]">
              Know who&apos;s connecting.
            </h3>
            <p className="text-[13px] leading-relaxed text-[#777]">
              Real-time tap tracking, link clicks, and locations. Clean, private
              dashboard.
            </p>
            <div className="mt-auto rounded-[10px] bg-[#f5f4f0] px-3 pb-1 pt-3">
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#aaa]">
                Taps / 12 weeks
              </p>
              <div className="mt-2 flex h-[60px] items-end gap-1">
                {ANALYTICS_BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[3px]"
                    style={{
                      height: `${h}%`,
                      backgroundImage:
                        i >= 9
                          ? "linear-gradient(to bottom, #6ee7b7, rgba(110,231,183,0.4))"
                          : undefined,
                      backgroundColor: i >= 9 ? undefined : "rgba(0,0,0,0.07)",
                    }}
                  />
                ))}
              </div>
            </div>
          </BentoCard>
        </Stagger>
      </Container>
    </section>
  );
}
