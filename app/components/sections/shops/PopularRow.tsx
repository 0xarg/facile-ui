import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";
import { CardVisual } from "./CardVisual";

type Tone = "dark" | "steel" | "white";

const POPULAR: { id: string; name: string; tag: string; price: string; tone: Tone }[] = [
  { id: "standard", name: "Facile Standard", tag: "NFC Card", price: "$29", tone: "dark" },
  { id: "metal", name: "Facile Metal", tag: "Metal Card", price: "$49", tone: "steel" },
  { id: "premium-band", name: "Premium Band", tag: "Smart Band", price: "$79", tone: "dark" },
];

/** Dark "Popular right now" rail for /shops. */
export function PopularRow() {
  return (
    <section className="bg-background py-20 text-foreground sm:py-24">
      <Container size="lg">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Popular right now
            </h2>
            <a
              href="/products"
              className="text-[13px] font-medium text-muted-foreground transition hover:text-foreground"
            >
              View all &rarr;
            </a>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POPULAR.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div className="group flex h-full items-center gap-5 overflow-hidden rounded-[18px] border border-border bg-card p-5 transition duration-300 hover:-translate-y-0.5 hover:border-border-strong">
                <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-[#0d0d0f]">
                  <CardVisual tone={p.tone} className="w-full" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {p.tag}
                  </span>
                  <h3 className="mt-1 text-[17px] font-bold tracking-tight text-card-foreground">
                    {p.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[15px] font-bold text-card-foreground">
                      {p.price}
                    </span>
                    <Button href={`/checkout?product=${p.id}`} size="sm">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
