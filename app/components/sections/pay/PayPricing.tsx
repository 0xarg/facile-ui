import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";
import { cn } from "@/app/lib/cn";

const GRADIENT =
  "linear-gradient(155deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)";

type Plan = {
  eyebrow: string;
  note: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    eyebrow: "Facile Pay Basic",
    note: "with card purchase",
    price: "Free",
    features: [
      "Tap-to-pay enabled",
      "1 identity profile",
      "Standard card design",
      "Payment dashboard",
    ],
    cta: "Get Started",
    href: "/products",
  },
  {
    eyebrow: "Facile Pay Pro",
    note: "Most popular",
    price: "$9",
    priceSuffix: "/month",
    features: [
      "Everything in Basic",
      "Custom card design",
      "Unlimited profiles",
      "Priority support",
      "Advanced analytics",
    ],
    cta: "Go Pro",
    href: "/products",
    featured: true,
  },
  {
    eyebrow: "Facile Pay Business",
    note: "For teams",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Team card management",
      "API access",
      "Branded card design",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    href: "/products",
  },
];

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const inner = (
    <div className="flex h-full flex-col rounded-[19px] bg-[#161616] p-9">
      <p
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.16em]",
          plan.featured ? "text-[#c4b5fd]" : "text-[#444]"
        )}
      >
        {plan.eyebrow}
      </p>
      <p className="mt-1.5 text-xs text-[#555]">{plan.note}</p>
      <p className="mt-5 text-[52px] font-extrabold leading-none tracking-tight text-white">
        {plan.price}
        {plan.priceSuffix && (
          <span className="text-base font-normal tracking-normal text-[#555]">
            {plan.priceSuffix}
          </span>
        )}
      </p>

      <ul className="mt-8 flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[#888]">
            <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[9px] bg-white/[0.06]">
              <CheckIcon />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        className="mt-8 flex h-11 items-center justify-center gap-1.5 rounded-full bg-white/[0.06] text-sm font-medium text-white transition-colors hover:bg-white/[0.1]"
      >
        {plan.cta}
        <ArrowIcon />
      </a>
    </div>
  );

  return (
    <StaggerItem className="h-full">
      {plan.featured ? (
        <div
          className="h-full rounded-[20px] p-px"
          style={{ backgroundImage: GRADIENT }}
        >
          {inner}
        </div>
      ) : (
        <div className="h-full rounded-[20px] border border-white/[0.06]">
          {inner}
        </div>
      )}
    </StaggerItem>
  );
}

export function PayPricing() {
  return (
    <section id="pricing" className="bg-[#080808] py-24 sm:py-28">
      <Container size="lg">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#444]">
              Pricing
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[60px] md:leading-[1.02]">
              One card. Unlimited potential.
            </h2>
            <p className="mt-3 text-base text-[#555]">
              No subscriptions required. Pay once, tap forever.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.eyebrow} plan={plan} />
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[13px] text-[#444]">
            All plans include free shipping on your card. 30-day returns. No
            hidden fees.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
