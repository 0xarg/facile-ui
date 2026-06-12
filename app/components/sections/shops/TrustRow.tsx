import { Container } from "@/app/components/ui/Container";

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1" />
      <path d="M14 9h4l3 3v5a1 1 0 0 1-1 1h-1" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}

const ITEMS = [
  { icon: <ShieldIcon />, label: "Secured by Shopify" },
  { icon: <TruckIcon />, label: "Free shipping over $50" },
  { icon: <BoltIcon />, label: "Profile live instantly" },
];

export function TrustRow() {
  return (
    <section className="border-y border-border bg-background py-4 text-muted-foreground">
      <Container size="lg">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-[13px]">
          {ITEMS.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span className="text-accent">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
