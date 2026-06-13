import { Container } from "@/app/components/ui/Container";
import { Reveal } from "@/app/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/app/components/motion/Stagger";

const GRADIENT =
  "linear-gradient(155deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)";

const stats: { value: string; label: string; gradient?: boolean }[] = [
  { value: "0.3s", label: "Tap-to-pay confirmation", gradient: true },
  { value: "150+", label: "Countries accepted" },
  { value: "0 apps", label: "Required to pay", gradient: true },
];

const testimonials: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "I walked into a meeting, paid for coffee with a tap of my business card. Everyone in the room asked what it was.",
    name: "David R.",
    role: "Partner, Kline Ventures",
  },
  {
    quote:
      "Traveling across 8 countries for work. Facile Pay worked at every single terminal. Never had to think about it.",
    name: "Priya S.",
    role: "Global BD, Notion",
  },
  {
    quote:
      "One tap pays. The next tap hands them my whole portfolio. I retired my wallet and my business cards in the same week.",
    name: "Marcus T.",
    role: "Creative Director",
  },
];

export function PayStats() {
  return (
    <section className="bg-[#080808] py-24 sm:py-28">
      <Container size="lg">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#444]">
              The receipts
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[56px] md:leading-[1.04]">
              Loved by people who hate friction.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
          {/* stats column */}
          <Reveal>
            <div className="flex flex-col">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={
                    "border-b border-white/[0.06] pb-7" +
                    (i > 0 ? " pt-7" : "")
                  }
                >
                  <p
                    className="text-5xl font-extrabold leading-none tracking-tight sm:text-[56px]"
                    style={
                      s.gradient
                        ? {
                            backgroundImage: GRADIENT,
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                          }
                        : { color: "#ffffff" }
                    }
                  >
                    {s.value}
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-[#444]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* testimonials */}
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {testimonials.map((t) => (
              <StaggerItem key={t.name} className="h-full">
                <div
                  className="h-full rounded-[20px] p-px"
                  style={{ backgroundImage: GRADIENT }}
                >
                  <div className="flex h-full flex-col gap-3 rounded-[19px] bg-[#161616] p-6">
                    <p className="text-[13px] text-[#fbbf24]">★★★★★</p>
                    <p className="text-[15px] italic leading-relaxed text-[#ccc]">
                      “{t.quote}”
                    </p>
                    <div className="mt-auto pt-2">
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-[#666]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
