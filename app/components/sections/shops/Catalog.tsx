"use client";

import { useMemo, useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/lib/cn";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";
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
  /** Optional override photo (otherwise the tone's default card render). */
  image?: { src: string; alt: string };
  /** True for photos shot on a black backdrop (needs a dark tile). */
  darkTile?: boolean;
  categories: Category[];
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: "standard",
    name: "Facile Standard",
    tag: "NFC Card",
    desc: "Matte PVC with NFC + QR. The everyday tap.",
    price: "From $29",
    tone: "dark",
    categories: ["plates"],
    featured: true,
  },
  {
    id: "metal",
    name: "Facile Metal",
    tag: "Metal Card",
    desc: "Brushed steel, real heft. Lands with a thud.",
    price: "$49",
    tone: "steel",
    categories: ["metal"],
  },
  {
    id: "white",
    name: "Facile White",
    tag: "NFC Card",
    desc: "Clean matte white. Disappears in any wallet.",
    price: "$29",
    tone: "white",
    categories: ["plates"],
  },
  {
    id: "premium-band",
    name: "Premium Band",
    tag: "Smart Band",
    desc: "Wear it. Your profile is always one wrist away.",
    price: "$79",
    tone: "dark",
    image: { src: "/products/band.png", alt: "Facile NFC smart band, matte black" },
    darkTile: true,
    categories: ["bands"],
  },
  {
    id: "phone-card",
    name: "Phone Card",
    tag: "Stick-on NFC",
    desc: "Peels onto your phone. Tap straight from your case.",
    price: "$19",
    tone: "dark",
    image: { src: "/images/phone-card.png", alt: "Facile NFC card stuck to the back of a phone" },
    categories: ["plates"],
  },
  {
    id: "standard-bundle",
    name: "Standard Bundle",
    tag: "Bundle",
    desc: "Card, stand, and a custom profile — everything to launch.",
    price: "$69",
    tone: "white",
    image: { src: "/images/business-plate.png", alt: "Facile NFC card and display stand bundle" },
    categories: ["bundles"],
  },
  {
    id: "metal-bundle",
    name: "Metal Bundle",
    tag: "Bundle",
    desc: "Metal card, band, and stand. The full premium kit.",
    price: "$89",
    tone: "steel",
    categories: ["metal", "bundles"],
  },
  {
    id: "gift",
    name: "Gift Card",
    tag: "Gift",
    desc: "Let them pick their finish. Delivered instantly.",
    price: "From $29",
    tone: "white",
    categories: ["bundles"],
  },
];

const TABS: { id: Category; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "plates", label: "Cards" },
  { id: "metal", label: "Metal" },
  { id: "bands", label: "Bands" },
  { id: "bundles", label: "Bundles" },
];

function ProductCard({ product }: { product: Product }) {
  const tileBg = product.darkTile
    ? "bg-[#0b0b0c]"
    : product.tone === "white"
      ? "bg-[#edece8]"
      : "bg-gradient-to-b from-[#f3f2ee] to-[#e7e6e1]";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-panel-border bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(0,0,0,0.1)]">
      <div className={cn("relative flex aspect-[5/4] items-center justify-center p-7", tileBg)}>
        {product.featured && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-black px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
            Best seller
          </span>
        )}
        <CardVisual
          tone={product.tone}
          src={product.image?.src}
          alt={product.image?.alt}
          className="max-w-[78%]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-panel-muted">
          {product.tag}
        </span>
        <h3 className="mt-1.5 text-[17px] font-bold tracking-tight text-panel-foreground">
          {product.name}
        </h3>
        <p className="mt-1 flex-1 text-[13px] leading-relaxed text-panel-muted">
          {product.desc}
        </p>
        <div className="mt-5 flex items-center justify-between pt-1">
          <span className="text-[15px] font-bold text-panel-foreground">
            {product.price}
          </span>
          <Button
            href={`/checkout?product=${product.id}`}
            size="sm"
            className="bg-black text-white hover:bg-black/85"
          >
            Add to cart
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
    <section
      id="catalog"
      className="scroll-mt-24 bg-panel py-20 text-panel-foreground sm:py-28"
    >
      <Container size="xl">
        <Reveal className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-panel-muted">
            The lineup
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-panel-foreground sm:text-5xl">
            Find the one that&apos;s you.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-panel-muted">
            Every finish runs the same Facile profile underneath — pick the feel,
            the price, and the form factor that fits how you show up.
          </p>
        </Reveal>

        {/* category pills */}
        <div className="-mx-5 mt-10 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex min-w-max items-center gap-2.5 sm:min-w-0 sm:flex-wrap">
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "h-10 shrink-0 rounded-full border px-5 text-[14px] font-semibold transition duration-200",
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-panel-border bg-white text-panel-muted hover:border-black/30 hover:text-panel-foreground"
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* info bar */}
        <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-b border-panel-border pb-5">
          <h3 className="font-display text-2xl font-bold tracking-tight text-panel-foreground sm:text-3xl">
            {activeLabel}
          </h3>
          <span className="text-[13px] font-medium text-panel-muted">
            {products.length} {products.length === 1 ? "product" : "products"}
          </span>
        </div>

        {/* product grid */}
        <Stagger
          key={active}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((p) => (
            <StaggerItem key={p.id} className="h-full">
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
