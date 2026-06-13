import { Media } from "@/app/components/ui/Media";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { Tilt } from "@/app/components/motion/Float";
import { cn } from "@/app/lib/cn";

type Featured = {
  id: string;
  eyebrow: string;
  name: string;
  subtitle: string;
  price: string;
  image: { src: string; alt: string; width: number; height: number };
  span: string;
};

const FEATURED: Featured[] = [
  {
    id: "metal",
    eyebrow: "Flagship",
    name: "Metal Card",
    subtitle:
      "Aircraft-grade brushed steel with a laser-etched mark. It lands with weight — people remember the tap.",
    price: "$49",
    image: {
      src: "/devices/metal-cards.png",
      alt: "Brushed metal Facile NFC card tapped against the back of a phone",
      width: 1080,
      height: 720,
    },
    span: "lg:col-span-3",
  },
  {
    id: "business",
    eyebrow: "For teams",
    name: "Business Plate",
    subtitle:
      "Your logo, your finish, your whole team on one platform. Onboarding takes minutes.",
    price: "$49",
    image: {
      src: "/devices/business-cards.png",
      alt: "Facile branded business NFC plates arranged on a desk",
      width: 1080,
      height: 720,
    },
    span: "lg:col-span-2",
  },
];

/**
 * Featured lineup — the hero Metal Card beside the Business Plate, each on a
 * dark glass card with a hover-tilt photo. Asymmetric grid reads like an
 * Apple product feature row.
 */
export function FeaturedDevices() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container size="full">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/50">
            The lineup
          </span>
          <h2 className="mt-4 font-display text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Designed to be the most premium thing in your pocket
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-5">
          {FEATURED.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08} className={cn("flex", item.span)}>
              <Tilt className="group flex w-full flex-col overflow-hidden rounded-[2rem] glass" max={5}>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0c0e]">
                  <Media
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white/90 backdrop-blur">
                    {item.eyebrow}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {item.name}
                    </h3>
                    <span className="shrink-0 text-lg font-medium text-foreground/60">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-pretty text-[15px] leading-relaxed text-foreground/65">
                    {item.subtitle}
                  </p>
                  <Button
                    href={`/checkout?product=${item.id}`}
                    variant="primary"
                    className="mt-7 w-full sm:w-auto"
                  >
                    Order now
                  </Button>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
