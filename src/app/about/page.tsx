// app/about/page.tsx
import FadeUp from "@/components/motion/FadeUp";
import StudioImpact from "@/components/sections/StudioImpact";
import StudioProcess from "@/components/sections/StudioProcess";

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              About Studio
            </span>
            <h1
              className="mt-6 max-w-5xl text-6xl leading-tight md:text-8xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We design with purpose, craft and vision.
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-12 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Studio is an architecture and interior design practice
              dedicated to creating spaces that inspire, endure and
              connect people to their environment in meaningful ways.
            </p>
          </FadeUp>
        </div>
      </section>

      <StudioImpact />
      <StudioProcess />
    </>
  );
}