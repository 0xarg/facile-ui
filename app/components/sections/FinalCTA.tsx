"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] bg-[#080808]">
      {/* radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 size-[600px] -translate-x-1/2 rounded-full bg-emerald-300/[0.06] blur-[100px]"
      />
      <div className="relative mx-auto flex w-full max-w-[760px] flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.94 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/cards/hero-card.png"
              alt="Facile matte black NFC smart card"
              width={360}
              height={360}
              sizes="(min-width: 640px) 300px, 70vw"
              className="h-auto w-[260px] max-w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)] sm:w-[300px]"
            />
          </motion.div>
        </motion.div>

        <h2 className="font-display mt-12 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your last business card.
        </h2>
        <p className="mt-5 max-w-md text-pretty text-base text-white/55">
          Order today, tap by the weekend. Free profile included, no
          subscription, 30-day returns.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          {/* gradient-bordered dark pill */}
          <span className="facile-gradient rounded-full p-px">
            <Link
              href="/products"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-black px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Shop Cards
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </span>
          {/* gradient-bordered light pill */}
          <span className="facile-gradient rounded-full p-px">
            <Link
              href="/pay"
              className="inline-flex h-11 items-center rounded-full bg-white px-7 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Create Free Profile
            </Link>
          </span>
        </div>

        <p className="mt-7 text-xs text-white/30">
          No subscription. 30-day returns. Free shipping over $50.
        </p>
      </div>
    </section>
  );
}
