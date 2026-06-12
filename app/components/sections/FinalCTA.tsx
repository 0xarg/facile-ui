"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

/** Recreated Facile card front (CSS) — dot rows, NFC chip, wordmark, tap arc. */
function CardVisual() {
  return (
    <div className="relative aspect-[1.6/1] w-[300px] max-w-full rotate-3 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#070707] p-5 shadow-[0_32px_64px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
      <div className="flex flex-col gap-1.5">
        {[0, 1, 2].map((r) => (
          <div key={r} className="flex gap-1.5">
            {[0, 1, 2].map((c) => (
              <span key={c} className="size-1 rounded-full bg-white/30" />
            ))}
          </div>
        ))}
      </div>
      <div className="absolute right-5 top-5 size-7 rounded-md bg-white/10 ring-1 ring-white/10" />
      <span className="absolute bottom-4 left-5 text-sm font-bold tracking-tight text-white/55">
        facile
      </span>
      <svg
        className="absolute bottom-4 right-5 text-white/30"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M6 8a8 8 0 0 1 0 8M10 5a13 13 0 0 1 0 14M14 9a4 4 0 0 1 0 6" />
      </svg>
    </div>
  );
}

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
          initial={reduce ? false : { opacity: 0, y: 24, rotate: 0 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <CardVisual />
          </motion.div>
        </motion.div>

        <h2 className="font-display mt-12 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Make your first impression count.
        </h2>
        <p className="mt-5 max-w-md text-pretty text-base text-white/55">
          Order your card today. Free profile included. Ships in 3 to 5 days.
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
