import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";

type Step = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    image: "/how-it-works/order-your-card.png",
    alt: "Facile NFC smart card on a phone case",
    title: "Order Your Card",
    description:
      "Choose your design and add your profile information through our simple setup process.",
  },
  {
    image: "/how-it-works/customize-profile.png",
    alt: "Facile NFC card stand on a desk",
    title: "Customize Profile",
    description:
      "Add your contact details, social media links, portfolio, and any information you want to share.",
  },
  {
    image: "/how-it-works/tap-share.png",
    alt: "Facile NFC wristband",
    title: "Tap & Share",
    description:
      "Simply tap your card on any smartphone to instantly share your digital profile.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24 sm:py-32">
      <Container size="lg">
        <Reveal>
          <SectionHeading
            title="How It Works"
            description="Get started in three simple steps"
            align="center"
            className="text-foreground [&_p]:opacity-80 [&_p]:text-foreground"
          />
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 sm:mt-20 md:grid-cols-3">
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <div className="group flex flex-col">
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#f3f4f6] transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-[30px] sm:leading-[1.2]">
                  {step.title}
                </h3>
                <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/80">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
