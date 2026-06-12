import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { cn } from "@/app/lib/cn";

type Showcase = {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  image: { src: string; alt: string };
};

const SHOWCASES: Showcase[] = [
  {
    id: "band",
    name: "Premium Bands",
    description:
      "Our flagship design featuring a matte black finish with subtle branding. Perfect for professionals who want to make a statement.",
    price: "$49",
    features: [
      "Premium matte finish",
      "Embedded NFC chip",
      "Custom engraving available",
      "Lifetime warranty",
      "Free profile updates",
    ],
    image: {
      src: "/devices/premium-bands.png",
      alt: "Matte black Facile NFC smart band",
    },
  },
  {
    id: "phone",
    name: "Phone Cards",
    description:
      "Clean and modern with a pure white finish. Stand out with minimalist elegance that speaks volumes.",
    price: "$39",
    features: [
      "Glossy white finish",
      "Advanced NFC technology",
      "Water-resistant coating",
      "2-year warranty",
      "Unlimited profile edits",
    ],
    image: {
      src: "/devices/phone-cards.png",
      alt: "White Facile NFC phone card on the back of a smartphone",
    },
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ProductShowcase() {
  return (
    <section className="bg-panel text-panel-foreground py-24 sm:py-32">
      <Container size="lg">
        <Reveal className="flex justify-center">
          <SectionHeading
            align="center"
            className="font-display"
            title="Our Latest"
            description="Sleek, minimalist designs that make a lasting impression"
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-28">
          {SHOWCASES.map((item, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <Reveal key={item.id}>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  {/* Image */}
                  <div
                    className={cn(
                      "overflow-hidden rounded-3xl border border-panel-border bg-white",
                      imageFirst ? "lg:order-1" : "lg:order-2"
                    )}
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={584}
                      height={438}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Copy */}
                  <div
                    className={cn(
                      "flex flex-col items-start",
                      imageFirst ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-[36px]">
                      {item.name}
                    </h3>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-panel-muted">
                      {item.description}
                    </p>

                    <ul className="mt-7 flex flex-col gap-3">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-panel-foreground text-white">
                            <CheckIcon />
                          </span>
                          <span className="text-[17px] text-panel-foreground/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href={`/checkout?product=${item.id}`}
                      className="mt-8 bg-black px-6 text-white hover:bg-black/90"
                    >
                      Order Now &mdash; {item.price}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
