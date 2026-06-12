"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { cn } from "@/app/lib/cn";
import { useCart, type PaymentMethodId, type PaymentDetails } from "@/app/components/cart/CartContext";
import { Field } from "./Field";
import { OrderSummary } from "./OrderSummary";
import { formatPrice } from "./checkout-data";

const tabs: { id: PaymentMethodId; label: string }[] = [
  { id: "card", label: "Credit Card" },
  { id: "apple", label: "Apple Pay" },
  { id: "paypal", label: "PayPal" },
];

type Errors = Partial<Record<"cardholder" | "cardNumber" | "expiry" | "cvv", string>>;

function Check({
  label,
  defaultChecked,
  hint,
}: {
  label: string;
  defaultChecked?: boolean;
  hint?: string;
}) {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm">
      <button
        type="button"
        role="checkbox"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={cn(
          "flex h-[18px] w-[18px] items-center justify-center rounded border transition-colors",
          on ? "border-foreground bg-foreground text-background" : "border-border-strong"
        )}
      >
        {on ? (
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M2.5 6.5L4.75 8.75L9.5 3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : null}
      </button>
      <span>
        {label}
        {hint ? <span className="ml-2 text-muted">{hint}</span> : null}
      </span>
    </label>
  );
}

/**
 * Payment details (Figma 131:2547). Method tabs + card fields are bound to the
 * cart context; card fields are validated (basic, non-empty) before placing the
 * order. No card data is processed or persisted — this is a designed UI mock.
 */
export function PaymentForm() {
  const router = useRouter();
  const { payment, updatePayment, shipping, totals } = useCart();
  const [errors, setErrors] = useState<Errors>({});

  const setMethod = (method: PaymentMethodId) => {
    updatePayment({ method });
    setErrors({});
  };

  const validate = (): boolean => {
    if (payment.method !== "card") return true;
    const next: Errors = {};
    if (!payment.cardholder.trim()) next.cardholder = "Required";
    if (payment.cardNumber.replace(/\s/g, "").length < 12) next.cardNumber = "Enter a valid card number";
    if (!/^\d{2}\/?\d{2}$/.test(payment.expiry.trim())) next.expiry = "MM/YY";
    if (payment.cvv.trim().length < 3) next.cvv = "3–4 digits";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const placeOrder = () => {
    if (validate()) router.push("/checkout/confirmation");
  };

  const bind = (key: keyof PaymentDetails & ("cardholder" | "cardNumber" | "expiry" | "cvv")) => ({
    value: payment[key],
    error: errors[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      updatePayment({ [key]: e.target.value });
      if (errors[key]) setErrors((x) => ({ ...x, [key]: undefined }));
    },
  });

  const sameAddress = [shipping.address1, shipping.city, shipping.state]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <Reveal className="flex min-w-0 flex-col gap-6">
        <h1 className="text-2xl font-semibold sm:text-3xl">Payment Details</h1>

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setMethod(t.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                payment.method === t.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border-strong text-foreground hover:bg-foreground/5"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {payment.method === "card" ? (
          <div className="flex flex-col gap-5">
            <Field id="cardholder" label="Cardholder Name" placeholder="Alex Morgan" autoComplete="cc-name" {...bind("cardholder")} />
            <Field id="card-number" label="Card Number" placeholder="1234 5678 9012 3456" inputMode="numeric" autoComplete="cc-number" {...bind("cardNumber")} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="expiry" label="Expiry Date" placeholder="MM/YY" autoComplete="cc-exp" {...bind("expiry")} />
              <Field id="cvv" label="CVV" placeholder="•••" inputMode="numeric" autoComplete="cc-csc" {...bind("cvv")} />
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-foreground/[0.03] p-8 text-center text-sm text-muted-foreground">
            You&apos;ll be redirected to {tabs.find((t) => t.id === payment.method)?.label} to
            complete your purchase.
          </div>
        )}

        <div className="flex flex-col gap-3 pt-1">
          <Check label="Save card for future use" />
          <Check
            label="Same as shipping address"
            defaultChecked
            hint={sameAddress || undefined}
          />
        </div>

        <Button type="button" size="lg" className="mt-2 w-full" onClick={placeOrder}>
          Place Order — {formatPrice(totals.total)}
        </Button>

        <p className="flex items-center justify-center gap-2 text-center text-xs text-muted">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="3.5" y="7" width="9" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          Your payment is encrypted and secure. We never store card details.
        </p>

        <Button href="/checkout/shipping" variant="ghost" size="sm" className="mx-auto">
          ‹ Back to Shipping
        </Button>
      </Reveal>

      <Reveal delay={0.08} className="min-w-0">
        <OrderSummary
          trust={[
            { icon: "shield", label: "Norton Secured" },
            { icon: "lock", label: "SSL Encrypted" },
            { icon: "return", label: "30-Day Returns" },
          ]}
        />
      </Reveal>
    </div>
  );
}
