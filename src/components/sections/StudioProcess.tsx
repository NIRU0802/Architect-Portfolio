"use client";

import FadeUp from "@/components/motion/FadeUp";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding the client, site conditions, goals and aspirations to establish a strong project foundation.",
  },
  {
    number: "02",
    title: "Concept Design",
    description:
      "Exploring spatial experiences, forms, materials and visual language through conceptual development.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Refining layouts, details, finishes and technical requirements to transform ideas into buildable solutions.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Coordinating every stage of implementation to ensure quality, precision and design integrity.",
  },
];

export default function StudioProcess() {
  return (
    <section className="py-40 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Process
          </span>

          <h2
            className="mt-6 max-w-4xl text-5xl leading-tight md:text-7xl"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Every project follows
            a thoughtful journey
            from vision to reality.
          </h2>
        </FadeUp>

        <div className="mt-24 space-y-24">
          {steps.map((step, index) => (
            <FadeUp key={step.number} delay={index * 0.15}>
              <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-12">
                <div className="md:col-span-2">
                  <span className="text-6xl text-neutral-700">
                    {step.number}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3
                    className="text-3xl md:text-4xl"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                <div className="md:col-span-6">
                  <p className="max-w-xl leading-relaxed text-neutral-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}