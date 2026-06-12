"use client";

import { Card } from "@/app/components/ui/Card";
import { CardThumb } from "./CardThumb";
import { useCart } from "@/app/components/cart/CartContext";
import { formatPrice } from "./checkout-data";

type Trust = { icon: "lock" | "ship" | "return" | "shield"; label: string };

const TrustIcon = ({ icon }: { icon: Trust["icon"] }) => {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": true as const,
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (icon) {
    case "lock":
      return (
        <svg {...common}>
          <rect x="3.5" y="7" width="9" height="6" rx="1.2" />
          <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
        </svg>
      );
    case "ship":
      return (
        <svg {...common}>
          <path d="M1.5 5h8v6h-8z" />
          <path d="M9.5 7h3l2 2v2h-5z" />
          <circle cx="4.5" cy="12.5" r="1.2" />
          <circle cx="11.5" cy="12.5" r="1.2" />
        </svg>
      );
    case "return":
      return (
        <svg {...common}>
          <path d="M3 6a5 5 0 1 1-1 3" />
          <path d="M3 3v3h3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M8 1.5 13 3.5v4c0 3-2.2 5.2-5 6.5-2.8-1.3-5-3.5-5-6.5v-4z" />
          <path d="M6 7.8 7.4 9.2 10 6" />
        </svg>
      );
  }
};

/**
 * Item list + price breakdown + trust badges, driven by the cart context so the
 * totals stay in sync with qty / promo / shipping selections across steps.
 */
export function OrderSummary({
  trust = [
    { icon: "lock", label: "SSL Secure" },
    { icon: "ship", label: "Free Shipping" },
    { icon: "return", label: "30-Day Returns" },
  ],
  className,
}: {
  trust?: Trust[];
  className?: string;
}) {
  const { product, qty, promo, totals } = useCart();

  return (
    <Card tone="card" className={className}>
      <div className="flex flex-col gap-5 p-6">
        <h2 className="text-lg font-semibold">Order Summary</h2>

        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-3">
            <CardThumb className="h-10 w-10" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{product.name}</p>
              <p className="truncate text-xs text-muted-foreground">
                {product.variant}
                {qty > 1 ? ` · Qty ${qty}` : ""}
              </p>
            </div>
            <span className="text-sm font-medium">
              {formatPrice(product.price * qty)}
            </span>
          </li>
        </ul>

        <div className="h-px bg-border" />

        <dl className="flex flex-col gap-2 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Subtotal</dt>
            <dd>{formatPrice(totals.subtotal)}</dd>
          </div>
          {totals.discount > 0 ? (
            <div className="flex items-center justify-between text-emerald-500">
              <dt>Discount{promo ? ` (${promo})` : ""}</dt>
              <dd>−{formatPrice(totals.discount)}</dd>
            </div>
          ) : null}
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Shipping</dt>
            <dd>{formatPrice(totals.shipping)}</dd>
          </div>
        </dl>

        <div className="h-px bg-border" />

        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">Total</span>
          <span className="text-xl font-semibold">
            {formatPrice(totals.total)}
          </span>
        </div>

        <ul className="flex flex-col gap-1.5 pt-1 text-xs text-muted">
          {trust.map((t) => (
            <li key={t.label} className="flex items-center gap-2">
              <TrustIcon icon={t.icon} />
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
