import type { ReactNode } from "react";
import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";
import { StepIndicator } from "./StepIndicator";
import type { Step } from "./checkout-data";

/**
 * Shared frame for every checkout route: top padding (clears the fixed navbar),
 * the step rail, then the route's own content. Keeps vertical rhythm consistent
 * across cart / shipping / payment.
 */
export function CheckoutShell({
  current,
  children,
  size = "lg",
}: {
  current: Step;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <section className="min-h-[70vh] py-28 sm:py-32">
      <Container size={size}>
        <Reveal y={16} className="mb-12">
          <StepIndicator current={current} />
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
