import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";

/** Dark hero for /shops — "Everything You Need. All In One Place." */
export function ShopHero() {
  return (
    <section className="bg-background pt-28 pb-16 text-foreground sm:pt-32">
      <Container size="lg">
        <Reveal className="flex flex-col items-center text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            The Facile Shop
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-[72px]">
            Everything You Need.
            <br />
            All In One Place.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
            Browse our full collection — powered by Shopify. Fast checkout, free
            shipping, and your profile live the moment it arrives.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="https://shop.facile.me" size="lg">
              Shop Now
            </Button>
            <Button href="#catalog" variant="outline" size="lg">
              View Bundles
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
