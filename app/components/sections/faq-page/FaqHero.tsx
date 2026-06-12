import { Container } from "@/app/components/ui/Container";

/**
 * Dark FAQ hero — eyebrow, big display heading and supporting copy, matching the
 * Figma frame (213:5424). The search field is presentational only (the page is a
 * static FAQ), so it is rendered as a real input with no submit behaviour.
 */
export function FaqHero() {
  return (
    <section className="bg-background text-foreground">
      <Container size="lg" className="flex flex-col items-center py-20 text-center sm:py-28">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          FAQ
        </span>
        <h1 className="font-display mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Got Questions?
          <br />
          We&apos;ve Got Answers.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          Everything you need to know about Facile NFC cards.
        </p>

        <div className="mt-9 flex w-full max-w-md items-center gap-3 rounded-full border border-border-strong bg-foreground/[0.04] px-5 py-3 text-left focus-within:ring-2 focus-within:ring-foreground/30">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="shrink-0 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            placeholder="Search questions..."
            aria-label="Search questions"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </Container>
    </section>
  );
}
