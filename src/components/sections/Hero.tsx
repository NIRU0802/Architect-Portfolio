// components/sections/Hero.tsx  — fixed FadeUp usage (mount animation, not scroll)
"use client";

import { useRef } from "react";
import FadeUp from "@/components/motion/FadeUp";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import HeroImagePanel from "./HeroImagePanel";
import useReveal from "@/hooks/useReveal";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  useReveal(heroRef);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-[#B89B72]/10 blur-[150px] pointer-events-none" />

      <div
        ref={heroRef}
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 pb-20 pt-40 lg:grid-cols-2"
      >
        {/* Left */}
        <div>
          {/* inView=false → animates on mount (above fold) */}
          <FadeUp delay={0.2}>
            <span className="text-sm uppercase tracking-[0.45em] text-neutral-500">
              Architecture & Interior Design
            </span>
          </FadeUp>

          <FadeUp delay={0.4}>
            <h1
              className="mt-6 text-6xl leading-[0.95] md:text-8xl xl:text-9xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Designing
              <br />
              Spaces That
              <br />
              Inspire Life
            </h1>
          </FadeUp>

          <FadeUp delay={0.6}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
              We craft timeless architecture and interior environments
              that balance beauty, functionality and human experience
              through thoughtful design.
            </p>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-black px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1">
                View Projects
              </button>
              <button className="rounded-full border border-black px-8 py-4 transition-all duration-300 hover:bg-black hover:text-white">
                Our Process
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={1}>
            <div className="mt-16 grid max-w-lg grid-cols-3 gap-8">
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "12", label: "Cities Served" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-4xl font-semibold">{stat.value}</h3>
                  <p className="mt-2 text-sm text-neutral-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={1.2}>
            <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          </FadeUp>
        </div>

        {/* Right */}
        <HeroImagePanel />
      </div>

      <ScrollIndicator />
    </section>
  );
}