import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";

type Step = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

const STEPS: Step[] = [
  {
    title: "Order Your Card",
    description:
      "Choose your design and add your profile information through our simple setup process.",
    image: { src: "/devices/how-order.png", alt: "Facile NFC card on a phone" },
  },
  {
    title: "Customize Profile",
    description:
      "Add your contact details, social media links, portfolio, and any information you want to share.",
    image: {
      src: "/devices/how-customize.png",
      alt: "Facile card standing upright",
    },
  },
  {
    title: "Tap & Share",
    description:
      "Simply tap your card on any smartphone to instantly share your digital profile.",
    image: { src: "/devices/how-tap.png", alt: "Facile NFC smart band" },
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-background py-24 text-foreground sm:py-32"
    >
      <Container size="lg">
        <Reveal className="flex justify-center">
          <SectionHeading
            align="center"
            className="font-display"
            title="How It Works"
            description="Get started in three simple steps"
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-8 sm:mt-16 md:grid-cols-3">
          {STEPS.map((step) => (
            <StaggerItem key={step.title} className="flex flex-col">
              <div className="aspect-square overflow-hidden rounded-3xl border border-border bg-white">
                <Image
                  src={step.image.src}
                  alt={step.image.alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-foreground/60">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
