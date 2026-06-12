"use client";

import { useEffect, useState } from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Reveal } from "@/app/components/motion/Reveal";
import { cn } from "@/app/lib/cn";
import { useCart } from "@/app/components/cart/CartContext";
import { CardThumb } from "./CardThumb";
import { OrderSummary } from "./OrderSummary";
import { formatPrice } from "./checkout-data";

/**
 * Cart / order review (Figma 131:2244). Seeds the cart from a `?product=<id>`
 * link, then reflects live qty + promo through the shared cart context.
 */
export function CartReview() {
  const { product, qty, setQty, setProduct, promo, applyPromo, totals } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [promoState, setPromoState] = useState<"idle" | "ok" | "bad">("idle");

  // Seed the cart from the `?product=&qty=` link (client-only, runs once).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("product");
    if (id) {
      const q = Number(params.get("qty"));
      setProduct(id, Number.isFinite(q) && q > 0 ? q : 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onApplyPromo = () => {
    if (!promoInput.trim()) return;
    const { ok } = applyPromo(promoInput);
    setPromoState(ok ? "ok" : "bad");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <Reveal className="flex min-w-0 flex-col gap-6">
        <h1 className="text-2xl font-semibold sm:text-3xl">Your Order</h1>

        <Card tone="card">
          <div className="flex items-center gap-4 p-5">
            <CardThumb className="h-12 w-12" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium sm:text-base">
                {product.name}
              </p>
              <p className="truncate text-xs text-muted-foreground sm:text-sm">
                {product.variant}
              </p>
            </div>

            <div className="flex items-center gap-1 rounded-full border border-border bg-foreground/5 p-1">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty(qty - 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                −
              </button>
              <span className="w-6 text-center text-sm tabular-nums">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty(qty + 1)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                +
              </button>
            </div>

            <span className="w-20 text-right text-sm font-medium sm:text-base">
              {formatPrice(product.price * qty)}
            </span>
          </div>
        </Card>

        <Card tone="card">
          <div className="flex flex-col gap-3 p-5">
            <label
              htmlFor="promo"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
            >
              Promo Code
            </label>
            <div className="flex gap-3">
              <input
                id="promo"
                value={promoInput}
                onChange={(e) => {
                  setPromoInput(e.target.value);
                  setPromoState("idle");
                }}
                placeholder="e.g. FACILE10"
                className="h-11 flex-1 rounded-xl border border-border bg-foreground/5 px-4 text-sm placeholder:text-muted/70 focus:border-border-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
              />
              <Button variant="outline" type="button" className="px-6" onClick={onApplyPromo}>
                Apply
              </Button>
            </div>
            {promoState === "ok" || promo ? (
              <p className="text-xs text-emerald-500">
                Code <span className="font-semibold">{promo}</span> applied — discount added below.
              </p>
            ) : promoState === "bad" ? (
              <p className="text-xs text-red-500">That code isn’t valid. Try FACILE10.</p>
            ) : null}
          </div>
        </Card>

        <Button href="/checkout/shipping" size="lg" className="w-full">
          Continue to Shipping
        </Button>
      </Reveal>

      <Reveal delay={0.08} className="min-w-0">
        <OrderSummary />
      </Reveal>
    </div>
  );
}
