import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";

/**
 * Dark page hero for the Products listing. Eyebrow + display heading + copy,
 * centered, with a soft accent glow behind the title.
 */
export function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 size-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/[0.06] blur-[160px]"
      />
      <Container size="lg" className="relative py-20 sm:py-24 lg:pb-16 lg:pt-28">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Products
          </span>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[56px] md:leading-[1.05]">
            Crafted for first impressions.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base text-muted-foreground">
            Every Facile product ships with a free digital profile.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
