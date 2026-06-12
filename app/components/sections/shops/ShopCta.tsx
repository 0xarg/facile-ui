import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/** Dark closing CTA for /shops — redirect to the official Shopify store. */
export function ShopCta() {
  return (
    <section className="border-t border-border bg-background py-16 text-foreground">
      <Container size="lg">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight">
              Ready to get your card?
            </h2>
            <p className="mt-3 text-balance leading-relaxed text-muted-foreground">
              You&apos;re being redirected to our official Shopify store for
              secure checkout, fast shipping, and order tracking.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-end">
            <Button href="https://shop.facile.me" size="lg">
              Go to Shopify Store
              <ArrowIcon />
            </Button>
            <span className="text-[13px] text-muted-foreground">
              shop.facile.me
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
