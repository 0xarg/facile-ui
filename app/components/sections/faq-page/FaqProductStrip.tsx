"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/lib/cn";

/**
 * Product category strip from the FAQ frame (213:5610) — a dark band of
 * thumbnail buttons sitting between the hero and the accordion. It is a
 * presentational product filter (the FAQ content itself is not product-scoped),
 * so selecting a tab simply highlights it. Thumbnails reuse the shared product
 * tab images.
 */
const STRIP_ITEMS = [
  { id: "all", label: "All Products", thumb: "/products/tab-all.png" },
  { id: "nfc", label: "NFC Cards", thumb: "/products/tab-nfc.png" },
  { id: "metal", label: "Metal Cards", thumb: "/products/tab-metal.png" },
  { id: "bands", label: "Smart Bands", thumb: "/products/tab-bands.png" },
  { id: "bundles", label: "Bundles", thumb: "/products/tab-all.png" },
] as const;

export function FaqProductStrip() {
  const [active, setActive] = useState<(typeof STRIP_ITEMS)[number]["id"]>("all");

  return (
    <section className="border-b border-border bg-background text-foreground">
      <Container size="lg" className="py-6">
        <div
          role="tablist"
          aria-label="Browse products"
          className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:justify-center sm:overflow-visible"
        >
          {STRIP_ITEMS.map((item) => {
            const isActive = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(item.id)}
                className={cn(
                  "flex h-20 min-w-40 shrink-0 items-center gap-3 rounded-lg border-2 px-4 text-left transition-colors duration-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40",
                  isActive
                    ? "border-foreground/70 bg-foreground/[0.06] shadow-[0_2px_12px_rgba(255,255,255,0.04)]"
                    : "border-border bg-foreground/[0.03] hover:border-border-strong"
                )}
              >
                <span className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-foreground/[0.04]">
                  <Image
                    src={item.thumb}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
                <span
                  className={cn(
                    "text-xs font-medium tracking-tight transition-colors",
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
