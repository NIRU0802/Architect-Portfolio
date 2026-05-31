"use client";

import FadeUp from "@/components/motion/FadeUp";

const testimonials = [
  {
    quote:
      "Their ability to blend functionality and beauty resulted in a home that exceeded every expectation.",
    client: "Private Residence Client",
    location: "Mumbai",
  },
  {
    quote:
      "The attention to detail and commitment to quality made the entire process seamless and inspiring.",
    client: "Commercial Office Client",
    location: "Pune",
  },
  {
    quote:
      "Every space feels intentional, elegant and deeply connected to how we live and work.",
    client: "Interior Design Client",
    location: "Bangalore",
  },
];

export default function Testimonials() {
  return (
    <section className="py-40">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Testimonials
          </span>

          <h2
            className="mt-6 text-5xl md:text-7xl"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            What our clients say.
          </h2>
        </FadeUp>

        <div className="mt-24 space-y-24">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={index * 0.15}>
              <article className="border-t border-neutral-200 pt-10">
                <blockquote
                  className="max-w-4xl text-3xl leading-relaxed md:text-5xl"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                  }}
                >
                  “{item.quote}”
                </blockquote>

                <div className="mt-8">
                  <p className="font-medium">
                    {item.client}
                  </p>

                  <p className="text-neutral-500">
                    {item.location}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}