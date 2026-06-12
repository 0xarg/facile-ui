"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/app/lib/cn";
import { ThemeToggle } from "./ThemeToggle";
import { Wordmark } from "./Wordmark";

const links = [
  { label: "Features", href: "/features" },
  { label: "Devices", href: "/devices" },
  { label: "Shops", href: "/shops" },
  { label: "Pay", href: "/pay" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Facile home">
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full hover:bg-foreground/10 md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-border transition-[max-height] duration-300 md:hidden",
          open ? "max-h-72 border-t" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-foreground/5"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
