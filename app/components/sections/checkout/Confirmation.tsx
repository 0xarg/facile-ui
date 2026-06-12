"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/app/components/ui/Button";
import { useCart } from "@/app/components/cart/CartContext";
import { ORDER_NUMBER, formatPrice } from "./checkout-data";

type Snapshot = {
  name: string;
  productName: string;
  qty: number;
  total: number;
};

/**
 * Order confirmed panel (Figma 131:2713). Snapshots the ordered cart once it has
 * hydrated, then clears the cart so a refresh / new visit starts clean.
 */
export function Confirmation() {
  const reduce = useReducedMotion();
  const { hydrated, product, qty, totals, shipping, reset } = useCart();
  const [snap, setSnap] = useState<Snapshot | null>(null);

  useEffect(() => {
    if (hydrated && !snap) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSnap({
        name: shipping.firstName || "there",
        productName: product.name,
        qty,
        total: totals.total,
      });
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  const order = snap ?? {
    name: "there",
    productName: product.name,
    qty,
    total: totals.total,
  };

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
      <motion.div
        initial={reduce ? false : { scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-20 w-20 items-center justify-center rounded-full border border-border-strong"
      >
        <motion.svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
          <motion.path
            d="M8 17.5L14 23.5L26 11"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          />
        </motion.svg>
      </motion.div>

      <h1 className="mt-7 text-3xl font-semibold sm:text-4xl">Order Confirmed!</h1>
      <p className="mt-3 max-w-sm text-pretty text-muted-foreground">
        Thanks {order.name}! Your {order.productName}
        {order.qty > 1 ? ` ×${order.qty}` : ""} is on its way. Check your email for
        setup instructions.
      </p>
      <p className="mt-2 text-sm text-muted">
        Order {ORDER_NUMBER} · {formatPrice(order.total)}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button href="/pay" size="lg">
          Set Up My Profile →
        </Button>
        <Button href="/products" variant="outline" size="lg">
          Continue Shopping
        </Button>
      </div>

      <div className="mt-10 h-px w-full max-w-xs bg-border" />

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="14.2" cy="5.8" r="1" fill="currentColor" />
        </svg>
        Share your new card on Instagram 📸
      </a>
    </div>
  );
}
