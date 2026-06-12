"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/app/components/ui/Button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background pt-16 sm:pt-20">
      {/* soft radial glow behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/3 -z-0 size-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Card visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, rotate: -4 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 mx-auto flex max-w-[440px] justify-center lg:order-1"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/cards/hero-card.png"
              alt="Facile NFC smart card"
              width={500}
              height={500}
              priority
              className="h-auto w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        </motion.div>

        {/* Copy */}
        <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-5xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Your Profile,
            <br />
            One Tap Away
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-foreground/70"
          >
            Smart NFC cards that instantly share your contact information,
            portfolio, and social media. No apps required.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href="/products" size="lg" className="group">
              Order Your Card
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
            <Button href="/#how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
