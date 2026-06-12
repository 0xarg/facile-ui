import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { cn } from "@/app/lib/cn";

type Plan = {
  id: string;
  name: string;
  price: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  { id: "metal", name: "Personal Metal Card", price: "$39" },
  { id: "business", name: "Classic Business Card", price: "$49", featured: true },
  { id: "band", name: "Premium Bands", price: "$199" },
];

type Row = {
  label: string;
  values: [string | boolean, string | boolean, string | boolean];
};

const ROWS: Row[] = [
  { label: "Card Type", values: ["Single Card", "Single Card", "5-Card Pack"] },
  { label: "NFC Chip Upgrade", values: [false, true, true] },
  { label: "Custom Design", values: [false, true, true] },
  { label: "Analytics", values: ["Basic", "Advanced", "Team Dashboard"] },
  { label: "Profile Updates", values: ["Unlimited", "Unlimited", "Unlimited"] },
  {
    label: "Dimensions",
    values: [
      "85mm × 54mm × 0.8mm",
      "85mm × 54mm × 0.8mm",
      "85mm × 54mm × 0.8mm",
    ],
  },
  { label: "Lifespan", values: ["Lifetime", "Lifetime", "Lifetime"] },
  { label: "Branding", values: ["Standard", "Custom", "Full Custom"] },
  { label: "Support", values: ["Email", "Priority", "Dedicated"] },
];

function CheckMark() {
  return (
    <span className="mx-auto flex size-6 items-center justify-center rounded-full bg-panel-foreground text-white">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3"
        aria-hidden
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

function CrossMark() {
  return (
    <span className="mx-auto flex size-6 items-center justify-center rounded-full border border-panel-border text-panel-muted/50">
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
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </span>
  );
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <CheckMark />;
  if (value === false) return <CrossMark />;
  return <span className="text-sm text-panel-foreground/80">{value}</span>;
}

export function ComparePlans() {
  return (
    <section
      id="compare"
      className="bg-panel text-panel-foreground py-24 sm:py-32"
    >
      <Container size="lg">
        <Reveal className="flex justify-center">
          <SectionHeading
            align="center"
            className="font-display"
            title="Compare Plans"
            description="Find the card that fits your networking needs"
          />
        </Reveal>

        <Reveal className="mt-14 sm:mt-16">
          {/* Mobile hint to scroll */}
          <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[640px] border-collapse text-center">
              <thead>
                <tr>
                  <th className="w-[26%]" />
                  {PLANS.map((plan) => (
                    <th key={plan.id} className="px-4 pb-8 align-bottom">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-panel-foreground">
                          {plan.name}
                        </span>
                        <span className="mt-1 text-3xl font-bold tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={row.label}
                    className={cn(i % 2 === 1 && "bg-black/[0.03]")}
                  >
                    <td className="py-4 pl-4 text-left text-sm text-panel-muted">
                      {row.label}
                    </td>
                    {row.values.map((value, j) => (
                      <td key={j} className="px-4 py-4">
                        <Cell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td />
                  {PLANS.map((plan) => (
                    <td key={plan.id} className="px-4 pt-8">
                      <Button
                        href={`/checkout?product=${plan.id}`}
                        variant={plan.featured ? "primary" : "outline"}
                        className={cn(
                          "w-full",
                          plan.featured
                            ? "bg-black text-white hover:bg-black/90"
                            : "border-panel-foreground/20 text-panel-foreground hover:bg-black/5"
                        )}
                      >
                        Get Started
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          <p className="mt-8 text-center text-sm text-panel-muted">
            All plans include free shipping and a 30-day money-back guarantee
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
