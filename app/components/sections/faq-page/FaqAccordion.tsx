"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/lib/cn";
import { FAQ_CATEGORIES, type FaqItem } from "./faq-data";

/** Plus/minus toggle in a circular badge that morphs plus -> minus when open. */
function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
        isOpen
          ? "bg-panel-foreground text-panel"
          : "bg-panel-foreground/[0.05] text-panel-foreground/70 group-hover:bg-panel-foreground/[0.09]"
      )}
    >
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4">
        {/* horizontal bar (always shown) */}
        <path
          d="M3 8H13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* vertical bar rotates/fades out to morph plus -> minus */}
        <path
          d="M8 3V13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className={cn(
            "origin-center transition-all duration-300",
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          )}
        />
      </svg>
    </span>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  const panelBody = (
    <div className="px-6 pb-6 sm:px-7">
      <p className="max-w-2xl text-pretty text-[15px] leading-relaxed text-panel-muted">
        {item.answer}
      </p>
    </div>
  );

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-colors duration-300",
        isOpen
          ? "border-panel-foreground/15 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.07)]"
          : "border-panel-border bg-white/60 hover:border-panel-foreground/12 hover:bg-white"
      )}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={cn(
            "group flex min-h-16 w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-panel-foreground/30 focus-visible:ring-inset rounded-2xl"
          )}
        >
          <span
            className={cn(
              "text-[15px] font-semibold tracking-tight transition-colors sm:text-base",
              isOpen ? "text-panel-foreground" : "text-panel-foreground/85"
            )}
          >
            {item.question}
          </span>
          <ToggleIcon isOpen={isOpen} />
        </button>
      </h3>

      {reduceMotion ? (
        isOpen ? (
          <div id={panelId} role="region" aria-labelledby={buttonId}>
            {panelBody}
          </div>
        ) : null
      ) : (
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              {panelBody}
            </motion.div>
          ) : null}
        </AnimatePresence>
      )}
    </div>
  );
}

export function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState(0);
  // Single-open accordion; index is scoped to the active category.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const category = FAQ_CATEGORIES[activeCategory];

  return (
    <section className="bg-panel text-panel-foreground py-20 sm:py-28">
      <Container size="full">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          {/* Left intro + category nav (sticky on desktop) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-panel-muted">
              Browse by topic
            </span>
            <h2 className="font-display mt-4 text-balance text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl">
              Find your answer fast.
            </h2>
            <p className="mt-4 max-w-sm text-pretty text-[15px] leading-relaxed text-panel-muted">
              Pick a topic to jump straight to the questions that matter. Still
              stuck? Our team is one message away below.
            </p>

            {/* Category nav: pills on mobile, vertical list on desktop */}
            <div
              role="tablist"
              aria-label="FAQ categories"
              className="mt-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-9 lg:flex-col lg:gap-1 lg:overflow-visible"
            >
              {FAQ_CATEGORIES.map((cat, index) => {
                const isActive = index === activeCategory;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveCategory(index);
                      setOpenIndex(0);
                    }}
                    className={cn(
                      "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-panel-foreground/30",
                      "lg:w-full lg:rounded-lg lg:text-left lg:px-3.5 lg:py-2.5",
                      isActive
                        ? "bg-panel-foreground text-panel"
                        : "bg-panel-foreground/[0.04] text-panel-muted hover:bg-panel-foreground/[0.07] hover:text-panel-foreground lg:bg-transparent lg:hover:bg-panel-foreground/[0.05]"
                    )}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accordion list */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3"
              >
                {category.items.map((item, index) => (
                  <AccordionRow
                    key={`${category.id}-${item.question}`}
                    item={item}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex((prev) => (prev === index ? null : index))
                    }
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
