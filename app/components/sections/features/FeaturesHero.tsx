import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";

const BRAND_GRADIENT =
  "linear-gradient(150deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-background pb-20 pt-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 size-[640px] -translate-x-1/2 rounded-full opacity-[0.18] blur-[150px]"
        style={{ backgroundImage: BRAND_GRADIENT }}
      />
      <Container size="md" className="relative flex flex-col items-center text-center">
        <Reveal>
          <span
            className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            style={{ backgroundColor: "#161616" }}
          >
            All Features
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-display mt-6 text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-[80px] md:leading-[1.0]">
            Everything built in.
            <br />
            Nothing left out.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Every feature of the Facile card and digital profile system,
            explained in full.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="/products"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0a0a0a] px-7 text-sm font-medium text-white ring-1 ring-white/10 transition-transform hover:-translate-y-0.5"
              style={{
                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.08)",
              }}
            >
              Shop Cards <ArrowIcon />
            </a>
            <a
              href="/pricing"
              className="inline-flex h-11 items-center rounded-full bg-white px-7 text-sm font-medium text-[#0a0a0a] transition-transform hover:-translate-y-0.5"
            >
              View Pricing
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
