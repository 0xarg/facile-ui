import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "PRODUCT",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Designs", href: "/products" },
      { label: "Custom Orders", href: "/products" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Help Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Licenses", href: "#" },
    ],
  },
];

const socials = ["/icons/social-1.svg", "/icons/social-2.svg", "/icons/social-3.svg"];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-white text-[#0a0a0a]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-[260px]">
            <div className="flex items-center gap-2.5">
              <Image src="/brand/mark.svg" alt="" width={28} height={28} />
              <span className="text-lg font-bold tracking-[-0.04em]">facile</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#888]">
              The future of professional networking.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((src) => (
                <a
                  key={src}
                  href="#"
                  className="inline-flex size-[34px] items-center justify-center rounded-full border border-black/[0.08] bg-black/[0.05] transition-colors hover:bg-black/[0.09]"
                  aria-label="Social link"
                >
                  <Image src={src} alt="" width={13} height={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-20">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-semibold tracking-[0.1em] text-[#999]">
                  {col.title}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-[#555] transition-colors hover:text-black"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-black/[0.07] pt-6">
          <p className="text-xs text-[#999]">© 2026 Facile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
