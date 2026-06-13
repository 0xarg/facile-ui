import { Container } from "@/app/components/ui/Container";
import { Media } from "@/app/components/ui/Media";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { Float } from "@/app/components/motion/Float";

const stats = [
  { value: "1 tap", label: "to share everything" },
  { value: "No app", label: "works on every phone" },
  { value: "QR backup", label: "laser-engraved on" },
];

/**
 * Dark products hero. Left: eyebrow, display headline with a gradient accent
 * word, human subcopy, CTAs, and trust stats. Right: a floating hero card
 * render with a soft accent bloom behind it.
 */
export function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 size-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[170px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 -z-0 size-[520px] translate-x-1/3 rounded-full bg-[#5fffa6]/[0.04] blur-[150px]"
      />

      <Container size="xl" className="relative py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <Reveal className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-accent" />
              The Facile collection
            </span>

            <h1 className="mt-6 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-[64px]">
              Carry one card.
              <br />
              Share <span className="text-gradient">everything</span>.
            </h1>

            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Matte, metal, or worn on your wrist — every Facile product taps to
              your full profile in a second, and ships with a laser-engraved QR
              fallback for the phones that don&apos;t.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#collection" variant="gradient" size="lg">
                Browse the collection
              </Button>
              <Button href="/how-it-works" variant="outline" size="lg">
                How it works
              </Button>
            </div>

            <dl className="mt-12 grid w-full max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {stats.map((s) => (
                <div key={s.value} className="bg-background px-4 py-4">
                  <dt className="font-display text-xl font-bold tracking-tight text-white">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-[12px] leading-snug text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Hero visual */}
          <Reveal delay={0.12} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div
                aria-hidden
                className="absolute inset-6 rounded-[2rem] bg-gradient-to-b from-white/[0.06] to-transparent blur-2xl"
              />
              <Float amount={14} duration={7} className="relative size-full">
                <Media
                  src="/images/phone-card.png"
                  alt="Facile NFC card on the back of an iPhone"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
                />
              </Float>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
