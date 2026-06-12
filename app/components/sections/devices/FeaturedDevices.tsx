import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";

type Featured = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: { src: string; alt: string; width: number; height: number };
};

const FEATURED: Featured[] = [
  {
    id: "metal",
    name: "Metal Cards",
    subtitle: "Your Premium Identity",
    price: "$49",
    image: {
      src: "/devices/metal-cards.png",
      alt: "Brushed metal Facile NFC card on the back of a phone",
      width: 1080,
      height: 720,
    },
  },
  {
    id: "business",
    name: "Business Cards",
    subtitle: "Your Business Identity",
    price: "$49",
    image: {
      src: "/devices/business-cards.png",
      alt: "Facile business NFC card on a desk",
      width: 1080,
      height: 720,
    },
  },
];

/**
 * Hero-style product showcases (Metal Cards, Business Cards) — centered heading,
 * order CTA, and a large full-bleed product photo. Mirrors Figma ProductShowcaseNew 82:121.
 */
export function FeaturedDevices() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container size="lg">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-base text-foreground/60 sm:text-lg">
            Sleek, minimalist designs that make a lasting impression
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24 sm:gap-32">
          {FEATURED.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center">
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[44px]">
                  {item.name}
                </h2>
                <p className="mt-3 text-lg text-foreground/60 sm:text-xl">
                  {item.subtitle}
                </p>
                <Button
                  href={`/checkout?product=${item.id}`}
                  className="mt-6 bg-white px-6 text-black hover:bg-white/90"
                >
                  Order Now &mdash; {item.price}
                </Button>

                <div className="mt-12 w-full overflow-hidden rounded-3xl border border-border bg-white">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
