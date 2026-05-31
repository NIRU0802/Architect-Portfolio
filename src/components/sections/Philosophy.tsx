// components/sections/Philosophy.tsx  — added Reveal
"use client";

import Reveal from "@/components/motion/Reveal";

export default function Philosophy() {
  return (
    <section className="py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="uppercase tracking-[0.4em] text-neutral-500">
            Philosophy
          </span>

          <h2
            className="mt-8 text-5xl leading-tight md:text-7xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            We design experiences,
            <br />
            not just buildings.
          </h2>

          <p className="mt-10 max-w-2xl text-lg text-neutral-600">
            Every line, texture and material contributes to a story
            that shapes how people live, work and connect.
          </p>
        </Reveal>
      </div>
    </section>
  );
}