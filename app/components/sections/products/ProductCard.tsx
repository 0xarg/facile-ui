import Image from "next/image";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import type { Product } from "./products-data";

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Light "panel" product card: image on top, content below with feature list,
 * price, and a dark Shop Now pill. Used across the products grid.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      tone="panel"
      className="group flex h-full flex-col overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1.5"
    >
      <div className="h-[200px] w-full overflow-hidden bg-black/[0.03]">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={600}
          height={400}
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold tracking-tight">{product.name}</h3>
        <p className="mt-1.5 text-[13px] text-panel-muted">{product.tagline}</p>

        <div className="my-4 h-px w-full bg-black/[0.06]" />

        <ul className="flex flex-col gap-2">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-[13px] text-panel-foreground/70"
            >
              <span
                aria-hidden
                className="size-1.5 shrink-0 rounded-full bg-black/25"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-xl font-bold tracking-tight">
            {product.price}
          </span>
          <Button
            href="/products"
            size="sm"
            className="bg-black px-5 text-white hover:bg-black/90"
          >
            Shop Now
            <ArrowIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
}
