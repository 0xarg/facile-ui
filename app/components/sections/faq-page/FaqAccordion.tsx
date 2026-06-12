"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/lib/cn";
import { FAQ_CATEGORIES, type FaqItem } from "./faq-data";

/** Plus/minus toggle in a circular badge, matching the Figma accordion (213:5462). */
function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-200",
        isOpen
          ? "bg-panel-foreground text-panel"
          : "bg-panel-foreground/[0.06] text-panel-foreground"
      )}
    >
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-3.5">
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
    <div className="border-t border-panel-border px-7 pb-6 pt-5">
      <p className="text-pretty text-[15px] leading-relaxed text-panel-muted">
        {item.answer}
      </p>
    </div>
  );

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-panel-border bg-panel",
        isOpen && "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
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
            "flex min-h-14 w-full items-center justify-between gap-4 px-7 py-5 text-left",
            "transition-colors hover:bg-panel-foreground/[0.02]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-panel-foreground/40 focus-visible:ring-inset rounded-xl"
          )}
        >
          <span className="text-base font-semibold tracking-tight text-panel-foreground">
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
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
    <section className="bg-panel text-panel-foreground py-16 sm:py-20">
      <Container size="lg">
        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="FAQ categories"
          className="flex flex-wrap gap-x-8 gap-y-2 border-b border-panel-border pb-px"
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
                  "relative -mb-px min-h-14 border-b-2 px-1 text-[15px] font-medium transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-panel-foreground/40 rounded-sm",
                  isActive
                    ? "border-panel-foreground text-panel-foreground"
                    : "border-transparent text-panel-muted hover:text-panel-foreground"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion list */}
        <div className="mt-9 flex flex-col gap-2.5">
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
        </div>
      </Container>
    </section>
  );
}
