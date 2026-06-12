import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  image: { src: string; alt: string };
};

const plans: Plan[] = [
  {
    name: "Standard Card",
    tagline: "Matte PVC. NFC and QR.",
    price: "From $29",
    features: ["Embedded NFC chip", "Laser QR backup", "Free digital profile"],
    image: { src: "/pricing/standard-card.png", alt: "Standard matte PVC card on a stand" },
  },
  {
    name: "Metal Card",
    tagline: "Brushed metal. Heavy. Lasting.",
    price: "From $49",
    features: ["Brushed aluminum finish", "Laser-engraved QR", "Unlimited profile pages"],
    image: { src: "/pricing/metal-card.png", alt: "Brushed metal card" },
  },
  {
    name: "Premium Bundle",
    tagline: "Two cards. Every finish.",
    price: "From $79",
    features: ["Two cards included", "All finishes available", "Priority support"],
    image: { src: "/pricing/premium-bundle.png", alt: "Premium bundle of two metal cards" },
  },
];

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-panel text-panel-foreground py-20 sm:py-24 lg:py-28"
    >
      <Container size="lg">
        <Reveal>
          <SectionHeading
            align="left"
            title={<span className="font-display">Choose your card.</span>}
            description="Standard or Metal. Every card ships with a free digital profile."
          />
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <Card
                tone="panel"
                className="group flex h-full flex-col p-6 transition-transform duration-300 ease-out hover:-translate-y-1.5 sm:p-8"
              >
                <div className="mb-6 h-[200px] w-full overflow-hidden rounded-xl">
                  <Image
                    src={plan.image.src}
                    alt={plan.image.alt}
                    width={600}
                    height={400}
                    className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <h3 className="text-lg font-semibold tracking-tight">
                  {plan.name}
                </h3>
                <p className="mt-1.5 text-[13px] text-panel-muted">
                  {plan.tagline}
                </p>

                <ul className="mt-4 flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[13px] text-panel-foreground/70"
                    >
                      <span
                        aria-hidden
                        className="size-1 shrink-0 rounded-[2px] bg-panel-muted"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-panel-border pt-5">
                  <span className="text-xl font-bold tracking-tight">
                    {plan.price}
                  </span>
                  <Button
                    href="/products"
                    size="sm"
                    className="bg-black px-6 text-white hover:bg-black/90"
                  >
                    Shop Now
                    <ArrowIcon />
                  </Button>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[13px] text-panel-muted">
            Need cards for your whole team?{" "}
            <a
              href="/products"
              className="text-panel-foreground underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              See bulk pricing →
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
