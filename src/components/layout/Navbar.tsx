// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4">
      <div
        className="
          mx-auto mt-4 flex max-w-7xl items-center justify-between
          rounded-full border border-black/10 bg-white/40
          px-8 py-5 backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.3em]"
        >
          STUDIO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`
                text-sm uppercase tracking-wider
                transition-all duration-300
                ${
                  pathname === link.href
                    ? "text-[#B89B72]"
                    : "hover:text-[#B89B72]"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            hidden md:inline-block
            rounded-full bg-black px-6 py-3
            text-sm font-medium text-white
            transition-all duration-300 hover:scale-105
          "
        >
          Start Project
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-black transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-black transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            mx-auto mt-2 max-w-7xl
            rounded-2xl border border-black/10
            bg-white/90 backdrop-blur-xl
            px-8 py-6 shadow-xl
            flex flex-col gap-4 md:hidden
          "
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                text-sm uppercase tracking-wider
                transition-all duration-300
                ${pathname === link.href ? "text-[#B89B72]" : ""}
              `}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-2 rounded-full bg-black px-6 py-3
              text-center text-sm font-medium text-white
            "
          >
            Start Project
          </Link>
        </div>
      )}
    </header>
  );
}