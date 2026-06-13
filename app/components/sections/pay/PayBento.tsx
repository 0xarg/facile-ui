import type { ReactNode } from "react";
import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";
import { cn } from "@/app/lib/cn";
import { PayCardVisual } from "./PayCardVisual";

const GRADIENT =
  "linear-gradient(155deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)";

/* ── card shell (dark — matches Figma #161616 bento cards) ──────────── */

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
      <div className="flex h-full flex-col gap-2.5 overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#161616] p-7 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.12]">
        <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.15em] text-[#555]">
          {tag}
        </p>
        {children}
      </div>
    </StaggerItem>
  );
}

/* ── icons (stroked on dark) ─────────────────────────────────────────── */

function WifiIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e5e5e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12.55a11 11 0 0 1 14 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e5e5e5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e5e5e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e5e5e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e5e5e5" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

const BARS = [10, 18, 15, 26, 21, 33, 27, 39, 31, 44, 37, 52];

export function PayBento() {
  return (
    <section className="bg-[#080808] py-24 sm:py-28">
      <Container size="lg">
        {/* header */}
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[60px] md:leading-[1.05]">
                Pays the bill. Makes the
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: GRADIENT }}
                >
                  {" "}
                  introduction.
                </span>
              </h2>
              <p className="mt-2 text-lg text-[#555] sm:text-xl">
                Faster than cash. Sharper than a business card.
              </p>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#444]">
              Built for speed
            </span>
          </div>
        </Reveal>

        {/* bento grid */}
        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* THE PAYMENT CARD — big, spans 2 cols + 2 rows */}
          <BentoCard
            tag="The payment card"
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <h3 className="text-[26px] font-bold leading-tight tracking-tight text-white">
              Tap. Paid. Shared.
            </h3>
            <p className="max-w-[340px] text-sm leading-relaxed text-[#888]">
              Brushed metal, milled to 0.8mm. Hold it near any reader to pay —
              or near any phone to drop your full profile. One card, both jobs,
              in 0.3 seconds.
            </p>
            <div className="flex flex-1 items-center justify-center pt-2">
              <PayCardVisual width={300} glow={false} />
            </div>
            <div className="mt-2 flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5">
                <span className="size-3.5 rounded-[7px] border border-white/15 bg-[#1a1a1a]" />
                <span className="size-3.5 rounded-[7px] border border-white/15 bg-[#9ca3af]" />
                <span className="size-3.5 rounded-[7px] border border-white/15 bg-[#f3f4f6]" />
              </div>
              <span className="text-[13px] text-[#666]">From $29 →</span>
            </div>
          </BentoCard>

          {/* ZERO FRICTION */}
          <BentoCard tag="Zero friction">
            <div className="pt-1">
              <WifiIcon />
            </div>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
              No app. No phone.
            </h3>
            <p className="text-[13px] leading-relaxed text-[#888]">
              Your card is the payment. Fully standalone — no device pairing
              required.
            </p>
          </BentoCard>

          {/* SPEED */}
          <BentoCard tag="Speed">
            <p
              className="bg-clip-text text-5xl font-extrabold leading-none tracking-tight text-transparent"
              style={{ backgroundImage: GRADIENT }}
            >
              0.3s
            </p>
            <p className="text-[13px] leading-snug text-[#888]">
              Tap-to-pay confirmation.
            </p>
            <div className="mt-2">
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full w-[30%] rounded-full"
                  style={{ backgroundImage: GRADIENT }}
                />
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-[#444]">
                <span>0s</span>
                <span>0.3s</span>
                <span>1s</span>
              </div>
            </div>
          </BentoCard>

          {/* SECURITY — wide, spans 2 cols */}
          <BentoCard tag="Security" className="sm:col-span-2 lg:col-span-2">
            <div className="flex flex-1 items-start gap-5">
              <div className="flex-1">
                <h3 className="text-[22px] font-bold leading-snug tracking-tight text-white">
                  Bank-level encryption on every tap.
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#888]">
                  256-bit AES encryption. Your card data is never stored —
                  cryptographically signed and transmitted once, per tap.
                </p>
              </div>
              <div className="flex size-12 shrink-0 items-center justify-center rounded-[14px] border border-white/[0.07] bg-white/[0.04]">
                <LockIcon />
              </div>
            </div>
          </BentoCard>

          {/* GLOBAL */}
          <BentoCard tag="Global">
            <div className="pt-1">
              <GlobeIcon />
            </div>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-white">
              Works everywhere.
            </h3>
            <p className="text-xs leading-relaxed text-[#888]">
              ISO 14443 certified. Accepted at any NFC-enabled terminal
              worldwide.
            </p>
          </BentoCard>

          {/* REAL-TIME */}
          <BentoCard tag="Real-time">
            <div className="pt-1">
              <BoltIcon />
            </div>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-white">
              Instant confirmations.
            </h3>
            <p className="text-xs leading-relaxed text-[#888]">
              Payment receipt and identity confirmation delivered in
              milliseconds.
            </p>
          </BentoCard>

          {/* IDENTITY */}
          <BentoCard tag="Identity">
            <p className="pt-1 text-[28px] leading-none">🪪</p>
            <h3 className="mt-2 text-lg font-bold tracking-tight text-white">
              Pay and share, as one.
            </h3>
            <p className="text-xs leading-relaxed text-[#888]">
              The same tap that settles the bill can hand over your full Facile
              profile — links, socials, contact, all of it.
            </p>
          </BentoCard>

          {/* ANALYTICS — taller */}
          <BentoCard tag="Analytics" className="lg:row-span-2">
            <div className="pt-1">
              <ChartIcon />
            </div>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
              Track every tap.
            </h3>
            <p className="text-[13px] leading-relaxed text-[#888]">
              Real-time payment activity, merchant data, and spend trends. All
              in your dashboard.
            </p>
            <div className="mt-auto rounded-[10px] bg-[#0d0d0d] px-3 pb-1 pt-3">
              <p className="text-[10px] uppercase tracking-[0.09em] text-[#444]">
                Taps / 12 weeks
              </p>
              <div className="mt-2 flex h-[60px] items-end gap-1">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-[3px]"
                    style={{
                      height: `${h}px`,
                      backgroundImage:
                        i >= 9
                          ? "linear-gradient(to bottom, #6ee7b7, rgba(110,231,183,0.4))"
                          : undefined,
                      backgroundColor:
                        i >= 9 ? undefined : "rgba(255,255,255,0.07)",
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
