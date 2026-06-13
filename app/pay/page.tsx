import { PayHero } from "@/app/components/sections/pay/PayHero";
import { PayMarquee } from "@/app/components/sections/pay/PayMarquee";
import { PayBento } from "@/app/components/sections/pay/PayBento";
import { PayHowItWorks } from "@/app/components/sections/pay/PayHowItWorks";
import { PayStats } from "@/app/components/sections/pay/PayStats";
import { PayComparison } from "@/app/components/sections/pay/PayComparison";
import { PayPricing } from "@/app/components/sections/pay/PayPricing";
import { PayFinalCTA } from "@/app/components/sections/pay/PayFinalCTA";

export const metadata = { title: "Facile Pay" };

export default function PayPage() {
  return (
    <>
      <PayHero />
      <PayMarquee />
      <PayBento />
      <PayHowItWorks />
      <PayStats />
      <PayComparison />
      <PayPricing />
      <PayFinalCTA />
    </>
  );
}
