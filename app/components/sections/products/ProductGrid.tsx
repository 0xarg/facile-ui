"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/lib/cn";
import { ProductCard } from "./ProductCard";
import {
  categoryInfo,
  categoryTabs,
  products,
  type CategoryTab,
} from "./products-data";

/**
 * Interactive products browser: a dark category tab strip + info bar, and a
 * light panel grid of product cards that filters by the active category.
 */
export function ProductGrid() {
  const [active, setActive] = useState<CategoryTab["id"]>("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  );

  const info = categoryInfo[active];

  return (
    <>
      {/* Category tab strip — dark */}
      <section className="border-b border-white/[0.07] bg-[#111] text-foreground">
        <Container size="lg" className="px-5 sm:px-8">
          <div
            role="tablist"
            aria-label="Product categories"
            className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categoryTabs.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    "flex h-20 min-w-[160px] shrink-0 items-center gap-3 rounded-lg border-2 px-4 transition-colors duration-200",
                    isActive
                      ? "border-white/70 bg-white/[0.06] shadow-[0_2px_12px_rgba(255,255,255,0.04)]"
                      : "border-white/[0.08] bg-white/[0.03] hover:border-white/20"
                  )}
                >
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-white/[0.04]">
                    <Image
                      src={tab.thumb}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                  <span
                    className={cn(
                      "text-xs font-semibold transition-colors",
                      isActive ? "text-[#ccc]" : "text-muted-foreground"
                    )}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Info bar — dark */}
      <section className="border-b border-white/[0.05] bg-background text-foreground">
        <Container size="lg" className="px-5 sm:px-8">
          <div className="flex items-center justify-between py-5">
            <div>
              <h2 className="text-[22px] font-bold tracking-tight text-white">
                {info.title}
              </h2>
              <p className="mt-1 text-[13px] text-muted-foreground/80">
                {info.description}
              </p>
            </div>
            <p className="hidden shrink-0 text-[13px] text-muted-foreground/60 sm:block">
              ≡ {visible.length} {visible.length === 1 ? "product" : "products"}
            </p>
          </div>
        </Container>
      </section>

      {/* Product grid — light panel */}
      <section className="bg-panel text-panel-foreground">
        <Container size="lg" className="py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
