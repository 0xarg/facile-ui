import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";

const BRAND_GRADIENT =
  "linear-gradient(150deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CardMock() {
  return (
    <div
      className="relative aspect-[1.586/1] w-[280px] -rotate-6 rounded-2xl bg-gradient-to-br from-[#222] to-[#0c0c0c] p-6 ring-1 ring-white/10"
      style={{ boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8)" }}
    >
      <div className="flex flex-col gap-1.5">
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-1 rounded-full bg-[#555]" />
          ))}
        </span>
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-1 rounded-full bg-[#555]" />
          ))}
        </span>
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-1 rounded-full bg-[#555]" />
          ))}
        </span>
      </div>
      <span className="absolute right-6 top-6 h-8 w-10 rounded-md bg-white/[0.06] ring-1 ring-white/10" />
      <span className="font-display absolute bottom-5 left-6 text-sm font-bold text-white/70">
        facile
      </span>
    </div>
  );
}

export function FeaturesCta() {
  return (
    <section className="relative overflow-hidden bg-[#060606] py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 -z-0 size-[560px] -translate-x-1/2 rounded-full opacity-[0.12] blur-[150px]"
        style={{ backgroundImage: BRAND_GRADIENT }}
      />
      <Container size="md" className="relative flex flex-col items-center text-center">
        <Reveal>
          <div className="mb-12 flex justify-center">
            <CardMock />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-[68px]">
            Make your first
            <br />
            impression count.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#9a9a9a]">
            Order your card today. Free profile included. Ships in 3 to 5 days.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="/products"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0a0a0a] px-7 text-sm font-medium text-white ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
              style={{ boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08)" }}
            >
              Shop Cards <ArrowIcon />
            </a>
            <a
              href="/signup"
              className="inline-flex h-11 items-center rounded-full bg-white px-7 text-sm font-medium text-[#0a0a0a] transition-transform hover:-translate-y-0.5"
            >
              Create Free Profile
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-7 text-xs text-[#666]">
            No subscription. 30-day returns. Free shipping over $50.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
