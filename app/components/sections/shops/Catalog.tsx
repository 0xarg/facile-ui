"use client";

import { useMemo, useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/cn";
import { CardVisual } from "./CardVisual";

type Category = "all" | "plates" | "metal" | "bands" | "bundles";
type Tone = "dark" | "steel" | "white";

type Product = {
  id: string;
  name: string;
  tag: string;
  desc: string;
  price: string;
  tone: Tone;
  categories: Category[];
};

const PRODUCTS: Product[] = [
  { id: "standard", name: "Facile Standard", tag: "NFC Card", desc: "Matte PVC. NFC + QR.", price: "From $29", tone: "dark", categories: ["plates"] },
  { id: "metal", name: "Facile Metal", tag: "Metal Card", desc: "Brushed steel. Weighted.", price: "$49", tone: "steel", categories: ["metal"] },
  { id: "white", name: "Facile White", tag: "NFC Card", desc: "Clean matte white finish.", price: "$29", tone: "white", categories: ["plates"] },
  { id: "premium-band", name: "Premium Band", tag: "Smart Band", desc: "NFC wearable. Always on.", price: "$79", tone: "dark", categories: ["bands"] },
  { id: "sticker", name: "NFC Sticker (5-pack)", tag: "NFC Sticker", desc: "Stick anywhere. Tap instantly.", price: "$14", tone: "dark", categories: ["plates"] },
  { id: "standard-bundle", name: "Standard Bundle", tag: "Bundle", desc: "Card + profile + accessories.", price: "$69", tone: "dark", categories: ["bundles"] },
  { id: "metal-bundle", name: "Metal Bundle", tag: "Bundle", desc: "Premium everything, bundled.", price: "$89", tone: "steel", categories: ["metal", "bundles"] },
  { id: "gift", name: "Gift Card", tag: "Gift", desc: "Let them choose.", price: "From $29", tone: "white", categories: ["bundles"] },
];

const TABS: { id: Category; label: string; icon: string }[] = [
  { id: "all", label: "All Products", icon: "▦" },
  { id: "plates", label: "Plates", icon: "▭" },
  { id: "metal", label: "Metal Cards", icon: "◳" },
  { id: "bands", label: "Smart Bands", icon: "◌" },
  { id: "bundles", label: "Bundles", icon: "◧" },
];

function ProductCard({ product }: { product: Product }) {
  const visualBg =
    product.tone === "white" ? "bg-[#f2f1ed]" : "bg-[#0d0d0f]";
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-panel-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
      <div className={cn("flex items-center justify-center p-8", visualBg)}>
        <CardVisual tone={product.tone} className="w-full" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#aaa]">
          {product.tag}
        </span>
        <h3 className="mt-1.5 text-[17px] font-bold tracking-tight text-[#0a0a0a]">
          {product.name}
        </h3>
        <p className="mt-1 text-[13px] leading-relaxed text-[#777]">
          {product.desc}
        </p>
        <div className="mt-5 flex items-center justify-between pt-1">
          <span className="text-[15px] font-bold text-[#0a0a0a]">
            {product.price}
          </span>
          <Button
            href={`/checkout?product=${product.id}`}
            size="sm"
            className="bg-black text-white hover:bg-black/90"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Catalog() {
  const [active, setActive] = useState<Category>("all");

  const products = useMemo(
    () =>
      active === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.categories.includes(active)),
    [active]
  );

  const activeLabel = TABS.find((t) => t.id === active)?.label ?? "All Products";

  return (
    <section id="catalog" className="bg-panel py-20 text-panel-foreground sm:py-24">
      <Container size="lg">
        {/* category tabs */}
        <div className="-mx-5 mb-12 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-3 sm:min-w-0 sm:flex-wrap">
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "flex w-[120px] shrink-0 flex-col items-center gap-2.5 rounded-2xl border px-4 py-4 transition duration-200",
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-panel-border bg-white text-[#555] hover:border-black/30 hover:text-black"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-xl text-lg",
                      isActive ? "bg-white/10" : "bg-[#f2f1ed]"
                    )}
                  >
                    {tab.icon}
                  </span>
                  <span className="text-[13px] font-semibold leading-tight">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* info bar */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-panel-border pb-6">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-panel-foreground sm:text-4xl">
              {activeLabel}
            </h2>
            <p className="mt-2 text-[15px] text-panel-muted">
              The full Facile lineup — cards, accessories, and bundles.
            </p>
          </div>
          <span className="text-[13px] font-medium text-[#999]">
            ≡ {products.length} {products.length === 1 ? "product" : "products"}
          </span>
        </div>

        {/* product grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
