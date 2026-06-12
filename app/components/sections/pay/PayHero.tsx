"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/app/components/ui/Button";
import { PayCardVisual } from "./PayCardVisual";

const GRADIENT =
  "linear-gradient(155deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PayHero() {
  const reduce = useReducedMotion();

  return (
    <section className="dark relative overflow-hidden bg-[#080808] pt-24 sm:pt-28">
      {/* soft radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 size-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#c4b5fd]/[0.06] blur-[160px]"
      />

      <div className="mx-auto flex w-full max-w-[920px] flex-col items-center px-5 pb-20 text-center sm:px-8">
        {/* eyebrow pill */}
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-full p-px"
          style={{ backgroundImage: GRADIENT }}
        >
          <span className="block rounded-full bg-[#161616] px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
            Introducing Facile Pay
          </span>
        </motion.span>

        {/* heading */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-[88px] md:leading-[0.98]"
        >
          Pay with a tap.
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: GRADIENT }}
          >
            No wallet needed.
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-[540px] text-pretty text-lg leading-relaxed text-[#888]"
        >
          Facile Pay turns your NFC card into a universal tap-to-pay identity.
          Works everywhere contactless is accepted — no phone, no app, no PIN.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/products" size="md" className="group">
            Order Facile Pay
            <ArrowIcon />
          </Button>
          <Button href="#how-it-works" variant="ghost" size="md">
            See How It Works
          </Button>
        </motion.div>

        {/* trust row */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.26 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#555]"
        >
          <span>★★★★★ 4.9</span>
          <span className="text-[#333]">·</span>
          <span>10,000+ professionals</span>
          <span className="text-[#333]">·</span>
          <span>0.3s tap-to-pay</span>
        </motion.div>

        {/* card + floating chips */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 flex w-full max-w-[640px] items-center justify-center"
        >
          {/* glow under the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 bottom-4 -z-0 h-40 rounded-full bg-[#7dd3fc]/[0.08] blur-[60px]"
          />

          <motion.div
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="rotate-[8deg]" style={{ transformOrigin: "center" }}>
              <PayCardVisual width={460} className="max-w-full" />
            </div>
          </motion.div>

          {/* "Payment verified" chip — bottom-left */}
          <div
            className="absolute -bottom-3 left-0 rounded-full p-px sm:left-2"
            style={{ backgroundImage: GRADIENT }}
          >
            <div className="flex items-center gap-2 rounded-full bg-[#161616] px-4 py-2.5">
              <span className="size-[7px] rounded-[3.5px] bg-[#6ee7b7] shadow-[0_0_6px_rgba(110,231,183,0.8)]" />
              <span className="font-mono text-xs text-white">
                Payment verified
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-[#6ee7b7]">
                0.3s
              </span>
            </div>
          </div>

          {/* "Today's taps" mini card — top-right */}
          <div className="absolute -right-1 top-1/3 hidden w-[168px] flex-col gap-1.5 rounded-[14px] border border-white/[0.08] bg-[#161616] px-4 py-3 sm:flex">
            <p className="text-center text-[11px] tracking-[0.07em] text-[#555]">
              TODAY&apos;S TAPS
            </p>
            <p className="text-center text-base font-bold tracking-tight text-white">
              847 payments
            </p>
            <div className="flex h-[52px] items-end gap-1">
              {[10, 18, 15, 26, 21, 33, 27, 39, 31, 44, 37, 52].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-[3px]"
                  style={{
                    height: `${h}px`,
                    backgroundImage:
                      i >= 9
                        ? "linear-gradient(to bottom, #6ee7b7, rgba(110,231,183,0.4))"
                        : undefined,
                    backgroundColor: i >= 9 ? undefined : "rgba(255,255,255,0.07)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
