"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { cn } from "@/app/lib/cn";
import { useCart, type ShippingDetails } from "@/app/components/cart/CartContext";
import { Field, SelectField } from "./Field";
import { SHIPPING_METHODS, formatPrice } from "./checkout-data";

type Errors = Partial<Record<keyof ShippingDetails, string>>;

const REQUIRED: (keyof ShippingDetails)[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "address1",
  "city",
  "state",
  "zip",
];

/**
 * Shipping information form (Figma 131:2402). Fields are bound to the cart
 * context so entries persist across Back/Continue; required fields are
 * validated before advancing to payment.
 */
export function ShippingForm() {
  const router = useRouter();
  const { shipping, updateShipping, shippingMethod, setShippingMethod } = useCart();
  const [errors, setErrors] = useState<Errors>({});

  const validate = (): boolean => {
    const next: Errors = {};
    for (const key of REQUIRED) {
      if (!shipping[key]?.trim()) next[key] = "Required";
    }
    if (shipping.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shipping.email)) {
      next.email = "Enter a valid email";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) router.push("/checkout/payment");
  };

  const bind = (key: keyof ShippingDetails) => ({
    value: shipping[key],
    error: errors[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      updateShipping({ [key]: e.target.value });
      if (errors[key]) setErrors((x) => ({ ...x, [key]: undefined }));
    },
  });

  return (
    <Reveal className="mx-auto flex max-w-2xl flex-col gap-7">
      <h1 className="text-2xl font-semibold sm:text-3xl">Shipping Information</h1>

      <form className="flex flex-col gap-5" onSubmit={onSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="first-name" label="First Name" placeholder="Alex" autoComplete="given-name" {...bind("firstName")} />
          <Field id="last-name" label="Last Name" placeholder="Morgan" autoComplete="family-name" {...bind("lastName")} />
        </div>

        <Field id="email" label="Email Address" type="email" placeholder="alex@example.com" autoComplete="email" {...bind("email")} />
        <Field id="phone" label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" autoComplete="tel" {...bind("phone")} />
        <Field id="address1" label="Address Line 1" placeholder="123 Main Street" autoComplete="address-line1" {...bind("address1")} />
        <Field id="address2" label="Address Line 2 (Optional)" placeholder="Apt, Suite, Unit…" autoComplete="address-line2" {...bind("address2")} />

        <div className="grid gap-5 sm:grid-cols-[1fr_120px_140px]">
          <Field id="city" label="City" placeholder="New York" autoComplete="address-level2" {...bind("city")} />
          <Field id="state" label="State" placeholder="NY" autoComplete="address-level1" {...bind("state")} />
          <Field id="zip" label="ZIP" placeholder="10001" autoComplete="postal-code" {...bind("zip")} />
        </div>

        <SelectField
          id="country"
          label="Country"
          value={shipping.country}
          onChange={(e) => updateShipping({ country: e.target.value })}
        >
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="GB">United Kingdom</option>
          <option value="AU">Australia</option>
        </SelectField>

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Shipping Method
          </legend>
          {SHIPPING_METHODS.map((m) => {
            const selected = shippingMethod === m.id;
            return (
              <label
                key={m.id}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors",
                  selected
                    ? "border-border-strong bg-foreground/5"
                    : "border-border hover:bg-foreground/[0.03]"
                )}
              >
                <input
                  type="radio"
                  name="shipping-method"
                  value={m.id}
                  checked={selected}
                  onChange={() => setShippingMethod(m.id)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
                    selected ? "border-foreground" : "border-border-strong"
                  )}
                  aria-hidden="true"
                >
                  {selected ? <span className="h-2 w-2 rounded-full bg-foreground" /> : null}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium">{m.title}</span>
                  <span className="block text-xs text-muted-foreground">{m.detail}</span>
                </span>
                <span className="text-sm font-medium">{formatPrice(m.price)}</span>
              </label>
            );
          })}
        </fieldset>

        <Button type="submit" size="lg" className="mt-2 w-full">
          Continue to Payment
        </Button>
      </form>

      <Button href="/checkout" variant="ghost" size="sm" className="mx-auto">
        ‹ Back to Cart
      </Button>
    </Reveal>
  );
}
