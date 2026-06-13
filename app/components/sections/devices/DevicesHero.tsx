"use client";

import { motion, useReducedMotion } from "motion/react";
import { Media } from "@/app/components/ui/Media";
import { Button } from "@/app/components/ui/Button";

/**
 * Dark hero for the Devices page — the floating NFC card visual on the left,
 * lineup copy on the right. Apple-style product-lineup intro with an accent
 * word, ambient brand glow, and a gentle continuous float.
 */
export function DevicesHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background pt-16 sm:pt-20">
      {/* Ambient brand glow + a soft grid-free spotlight behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[22%] top-1/3 -z-0 size-[640px] -translate-x-1/2 rounded-full bg-accent/15 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-0 -z-0 size-[520px] rounded-full bg-[#ff7a85]/10 blur-[160px]"
      />

      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9, rotate: -5 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 mx-auto flex w-full max-w-[520px] justify-center lg:order-1"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -16, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full"
          >
            <Media
              src="/devices/hero-card.png"
              alt="Facile NFC smart cards stacked, brushed metal and matte black"
              width={560}
              height={560}
              priority
              sizes="(min-width: 1024px) 520px, 90vw"
              className="h-auto w-full drop-shadow-[0_50px_90px_rgba(0,0,0,0.65)]"
            />
          </motion.div>
        </motion.div>

        <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/70"
          >
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            NFC + laser-engraved QR fallback
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-5xl font-medium leading-[1.0] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            One tap.
            <br />
            <span className="text-gradient">Every</span> impression.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-foreground/70"
          >
            A lineup of NFC cards, plates, and bands — engineered in matte and
            brushed metal. Tap any phone and your full Facile profile opens
            instantly. No app. No reprints. Ever.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href="/checkout?product=metal" variant="gradient" size="lg" className="group">
              Shop the lineup
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See how it works
            </Button>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/55 lg:justify-start"
          >
            <span>From $29</span>
            <span aria-hidden className="size-1 rounded-full bg-foreground/30" />
            <span>Free worldwide shipping</span>
            <span aria-hidden className="size-1 rounded-full bg-foreground/30" />
            <span>Works with every phone</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
