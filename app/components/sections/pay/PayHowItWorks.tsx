import type { ReactNode } from "react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";

function TapIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12.55a11 11 0 0 1 14 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const steps: { icon: ReactNode; step: string; title: string; body: string }[] = [
  {
    icon: <TapIcon />,
    step: "STEP 01",
    title: "Tap your card",
    body: "Hold your Facile Pay card near any NFC-enabled terminal. No unlocking, no searching for an app — just a single tap.",
  },
  {
    icon: <ShieldCheckIcon />,
    step: "STEP 02",
    title: "Identity verified",
    body: "Your encrypted NFC signal confirms your identity in milliseconds. Bank-grade security with zero effort on your end.",
  },
  {
    icon: <CheckCircleIcon />,
    step: "STEP 03",
    title: "Payment complete",
    body: "Transaction confirmed in 0.3 seconds. Receipt lands in your dashboard. You're done before you've even looked up.",
  },
];

export function PayHowItWorks() {
  return (
    <section id="how-it-works" className="bg-panel py-24 text-panel-foreground sm:py-28">
      <Container size="lg">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#999]">
                How it works
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-panel-foreground sm:text-5xl md:text-[60px] md:leading-[1.02]">
                Three taps to everything.
              </h2>
              <p className="mt-3 text-base text-[#777]">
                The simplest payment experience ever built.
              </p>
            </div>
            <Button
              href="/products"
              variant="outline"
              size="md"
              className="border-black/15 text-panel-foreground hover:bg-black/5"
            >
              Order Now
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <StaggerItem key={s.step} className="h-full">
              <div className="flex h-full flex-col rounded-[20px] border border-[#e8e8e4] bg-white p-8">
                <div className="mb-6 flex size-14 items-center justify-center rounded-[14px] bg-[#f5f4f0]">
                  {s.icon}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ccc]">
                  {s.step}
                </p>
                <h3 className="mt-2.5 text-[22px] font-bold tracking-tight text-panel-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#777]">
                  {s.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
