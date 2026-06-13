import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Media } from "@/app/components/ui/Media";
import { Tilt } from "@/app/components/motion/Float";
import { cn } from "@/app/lib/cn";
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

function FeatureItem({ feature }: { feature: string }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px] leading-snug text-panel-foreground/70">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="mt-px shrink-0 text-accent"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      {feature}
    </li>
  );
}

function PriceRow({ price, id }: { price: string; id: string }) {
  return (
    <div className="mt-auto flex items-center justify-between pt-5">
      <span className="font-display text-xl font-bold tracking-tight">
        {price}
      </span>
      <Button
        href={`/checkout?product=${id}`}
        size="sm"
        className="bg-black px-5 text-white hover:bg-black/90"
      >
        Shop Now
        <ArrowIcon />
      </Button>
    </div>
  );
}

/** Tiny pills shown over the product image (material / badge). */
function ImageChips({ product }: { product: Product }) {
  return (
    <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-2">
      <span className="rounded-full bg-black/55 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-white/90 backdrop-blur-md">
        {product.material}
      </span>
      {product.badge ? (
        <span className="rounded-full bg-accent px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-accent-foreground shadow-sm">
          {product.badge}
        </span>
      ) : null}
    </div>
  );
}

/**
 * Premium "panel" product card. Glass-panel surface, rounded-3xl, image zoom +
 * lift on hover. `darkShot` products (renders on pure black) get a dark inset
 * so they read intentionally rather than clashing with the light frame.
 * `featured` renders a wider, two-column tile for the hero of the grid.
 */
export function ProductCard({ product }: { product: Product }) {
  const featured = product.featured;

  const media = (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        featured ? "h-full min-h-[280px]" : "h-[224px]",
        product.darkShot
          ? "bg-gradient-to-b from-[#161616] to-[#0a0a0a]"
          : "bg-gradient-to-b from-black/[0.04] to-black/[0.01]"
      )}
    >
      <ImageChips product={product} />
      <Media
        src={product.image.src}
        alt={product.image.alt}
        fill
        sizes={
          featured
            ? "(min-width: 1280px) 640px, (min-width: 640px) 50vw, 90vw"
            : "(min-width: 1280px) 320px, (min-width: 640px) 45vw, 90vw"
        }
        className={cn(
          "object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-[1.06]",
          product.darkShot && "p-0"
        )}
      />
    </div>
  );

  if (featured) {
    return (
      <Tilt max={4} className="h-full">
        <Card
          tone="glass-panel"
          className="group flex h-full flex-col overflow-hidden rounded-3xl transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] lg:grid lg:grid-cols-2"
        >
          {media}
          <div className="flex flex-1 flex-col p-7 sm:p-8">
            <h3 className="font-display text-2xl font-bold tracking-tight">
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-panel-muted">{product.tagline}</p>
            <div className="my-5 h-px w-full bg-black/[0.07]" />
            <ul className="flex flex-col gap-3">
              {product.features.map((f) => (
                <FeatureItem key={f} feature={f} />
              ))}
            </ul>
            <PriceRow price={product.price} id={product.id} />
          </div>
        </Card>
      </Tilt>
    );
  }

  return (
    <Card
      tone="glass-panel"
      className="group flex h-full flex-col overflow-hidden rounded-3xl transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(0,0,0,0.1)]"
    >
      {media}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold tracking-tight">{product.name}</h3>
        <p className="mt-1.5 text-[13px] text-panel-muted">{product.tagline}</p>
        <div className="my-4 h-px w-full bg-black/[0.06]" />
        <ul className="flex flex-col gap-2.5">
          {product.features.map((f) => (
            <FeatureItem key={f} feature={f} />
          ))}
        </ul>
        <PriceRow price={product.price} id={product.id} />
      </div>
    </Card>
  );
}
