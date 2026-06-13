import type { ReactNode } from "react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Media } from "@/app/components/ui/Media";
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
    title: "Tap to pay",
    body: "Hold the card to any contactless terminal. No unlocking, no app, no PIN — the encrypted NFC chip does the rest.",
  },
  {
    icon: <ShieldCheckIcon />,
    step: "STEP 02",
    title: "Tap to share",
    body: "Hold the same card to a phone and your full Facile profile lands instantly — links, socials, contact, portfolio.",
  },
  {
    icon: <CheckCircleIcon />,
    step: "STEP 03",
    title: "See it all",
    body: "Every payment and every profile tap streams to your dashboard in real time. One card, one source of truth.",
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
                One card. One tap.
              </h2>
              <p className="mt-3 text-base text-[#777]">
                The simplest way to pay and to be remembered.
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

        <Reveal delay={0.08}>
          <div className="mt-14 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] border border-[#e8e8e4] bg-[#0a0a0a] md:grid-cols-2">
            <div className="order-2 px-8 py-10 sm:px-12 md:order-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6ee7b7]">
                The same card
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Lives in your pocket, works against any phone.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#999]">
                No second device, no battery, no setup. The brushed-metal chip
                reads on the back of an iPhone or Android the same way it reads
                at a checkout — your money and your identity in one piece of
                metal.
              </p>
            </div>
            <div className="relative order-1 aspect-square w-full md:order-2 md:aspect-auto md:h-full md:min-h-[360px]">
              <Media
                src="/images/phone-card.png"
                alt="Facile Pay card held against the back of a phone, ready to tap"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
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
