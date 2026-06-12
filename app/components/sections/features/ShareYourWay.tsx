import type { ReactNode } from "react";
import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";

function Icon({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03]">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

const ITEMS: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <><path d="M9 15l6-6" /><path d="M11 7l1-1a4 4 0 0 1 6 6l-1 1" /><path d="M13 17l-1 1a4 4 0 0 1-6-6l1-1" /></>,
    title: "URL Share",
    body: "Share facile.me/yourname via email, text, or any messaging app.",
  },
  {
    icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    title: "Social Bio Link",
    body: "Drop your Facile URL in your Instagram, Twitter, or LinkedIn bio.",
  },
  {
    icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    title: "Embed Widget",
    body: "Embed your profile card on your website or portfolio.",
  },
  {
    icon: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
    title: "Apple / Google Wallet",
    body: "Add to your phone wallet for one-tap digital sharing.",
  },
];

export function ShareYourWay() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <Container size="lg">
        <Reveal className="text-center">
          <h2 className="font-display text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[52px]">
            Share your way.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <StaggerItem key={it.title}>
              <div className="flex h-full flex-col rounded-3xl border border-white/[0.06] bg-white/[0.025] p-7">
                <Icon>{it.icon}</Icon>
                <h3 className="mt-5 text-[15px] font-bold text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8a8a8a]">{it.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
