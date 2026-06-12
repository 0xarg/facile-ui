import { Container } from "@/app/components/ui/Container";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

type ContactCard = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: React.ReactNode;
};

const CARDS: ContactCard[] = [
  {
    title: "Live Chat",
    description: "Available Mon–Fri, 9am–6pm EST",
    cta: "Start Chat",
    href: "#chat",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-6">
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9 9 0 0 1-4-1L3 20l1-5.5a8.5 8.5 0 0 1 17 -3Z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    description: "support@facile.me",
    cta: "Send Email",
    href: "mailto:support@facile.me",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
];

/** Dark "Still have a question?" support section (Figma 213:5502). */
export function FaqContact() {
  return (
    <section className="bg-background text-foreground py-20 sm:py-24">
      <Container size="lg" className="flex flex-col items-center">
        <SectionHeading
          align="center"
          title="Still have a question?"
          description="Our team typically responds within a few hours."
          className="font-display"
        />

        <div className="mt-12 grid w-full max-w-3xl gap-5 sm:grid-cols-2">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-border bg-foreground/[0.03] p-8"
            >
              <span className="flex size-13 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground">
                {card.icon}
              </span>
              <h3 className="mt-7 text-xl font-semibold tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {card.description}
              </p>
              <a
                href={card.href}
                className="mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
              >
                {card.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
