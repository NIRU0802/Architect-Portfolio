"use client";

import FadeUp from "@/components/motion/FadeUp";

const stats = [
  {
    value: "150+",
    label: "Projects Completed",
  },
  {
    value: "12",
    label: "Cities Served",
  },
  {
    value: "8",
    label: "Years Experience",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function StudioImpact() {
  return (
    <section className="bg-neutral-950 py-40 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Studio Impact
          </span>

          <h2
            className="mt-6 max-w-5xl text-5xl leading-tight md:text-7xl"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Creating meaningful spaces
            across residential,
            commercial and interior projects.
          </h2>
        </FadeUp>

        <div className="mt-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeUp
              key={stat.label}
              delay={index * 0.15}
            >
              <div>
                <h3 className="text-7xl md:text-8xl">
                  {stat.value}
                </h3>

                <p className="mt-4 text-neutral-400">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}