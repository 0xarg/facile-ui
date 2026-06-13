"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/lib/cn";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";
import { ProductCard } from "./ProductCard";
import {
  categoryInfo,
  categoryTabs,
  products,
  type CategoryTab,
} from "./products-data";

/**
 * Interactive products browser: a dark category filter strip + info bar, then a
 * light-panel grid of premium product tiles. The featured product opens the
 * grid as a wide tile. Filtering animates the count and re-staggers the grid.
 */
export function ProductGrid() {
  const [active, setActive] = useState<CategoryTab["id"]>("all");
  const reduce = useReducedMotion();

  const visible = useMemo(() => {
    const list =
      active === "all"
        ? products
        : products.filter((p) => p.category === active);
    // Featured tile always opens the grid.
    return [...list].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    );
  }, [active]);

  const info = categoryInfo[active];

  return (
    <>
      {/* Category filter strip — dark */}
      <section
        id="collection"
        className="scroll-mt-20 border-y border-white/[0.07] bg-[#0d0d0d] text-foreground"
      >
        <Container size="xl">
          <div
            role="tablist"
            aria-label="Product categories"
            className="flex gap-2.5 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                    "group/tab relative flex h-[68px] min-w-[168px] shrink-0 items-center gap-3 rounded-2xl border px-3.5 transition-all duration-200",
                    isActive
                      ? "border-white/80 bg-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.5),0_8px_24px_rgba(0,0,0,0.4)]"
                      : "border-white/[0.08] bg-white/[0.025] hover:border-white/25 hover:bg-white/[0.05]"
                  )}
                >
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-white/[0.05]">
                    <Image
                      src={tab.thumb}
                      alt=""
                      fill
                      sizes="48px"
                      className={cn(
                        "object-cover transition-transform duration-300 group-hover/tab:scale-105",
                        tab.id === "bands" && "object-contain"
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      "text-left text-[13px] font-semibold leading-tight transition-colors",
                      isActive ? "text-white" : "text-muted-foreground"
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
        <Container size="xl">
          <div className="flex items-end justify-between gap-4 py-6">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduce ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-[26px]">
                    {info.title}
                  </h2>
                  <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="hidden shrink-0 pb-1 text-[13px] tabular-nums text-muted-foreground/70 sm:block">
              {visible.length} {visible.length === 1 ? "product" : "products"}
            </p>
          </div>
        </Container>
      </section>

      {/* Product grid — light panel */}
      <section className="bg-panel text-panel-foreground">
        <Container size="xl" className="py-12 sm:py-16 lg:py-20">
          <Stagger
            key={active}
            className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visible.map((product) => (
              <StaggerItem
                key={product.id}
                className={cn(
                  "h-full",
                  product.featured &&
                    "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                )}
              >
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>
    </>
  );
}
