// components/layout/Footer.tsx
"use client";

import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="
            select-none
            text-[120px] font-light tracking-[0.25em] text-white/[0.03]
            md:text-[220px] xl:text-[320px]
          "
        >
          STUDIO
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        {/* Main grid */}
        <div className="grid gap-20 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-6">
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              Architecture & Interior Design
            </p>

            <h2
              className="mt-8 text-5xl leading-tight md:text-7xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Designing spaces that inspire.
            </h2>
          </div>

          {/* Right */}
          <div className="grid gap-12 md:grid-cols-2 lg:col-span-6">
            <div>
              <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
                Navigation
              </h3>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-sm uppercase tracking-[0.3em] text-neutral-500">
                Connect
              </h3>
              <div className="flex flex-col space-y-4 text-white/80">
                <a
                  href="mailto:hello@studio.com"
                  className="transition-colors hover:text-white"
                >
                  hello@studio.com
                </a>
                <p>Mumbai, India</p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 border-t border-white/10 pt-10 flex flex-col gap-2 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Studio. All Rights Reserved.</p>
          <p>
            Created by{" "}
            <span className="text-white">Niraj Kathe</span>
          </p>
        </div>
      </div>
    </footer>
  );
}