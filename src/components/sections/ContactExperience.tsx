"use client";

import FadeUp from "@/components/motion/FadeUp";

export default function ContactExperience() {
  return (
    <section className="py-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Contact
          </span>

          <h2
            className="mt-6 max-w-5xl text-5xl leading-tight md:text-7xl xl:text-8xl"
            style={{
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Let’s create
            something timeless
            together.
          </h2>
        </FadeUp>

        <div className="mt-24 grid gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <FadeUp delay={0.15}>
            <div>
              <p className="max-w-md text-lg leading-relaxed text-neutral-600">
                Whether you're planning a private residence,
                commercial development or interior transformation,
                we'd love to hear about your vision.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Email
                  </p>
                  <p className="mt-2 text-xl">
                    hello@studio.com
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Location
                  </p>
                  <p className="mt-2 text-xl">
                    Mumbai, India
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Instagram
                  </p>
                  <p className="mt-2 text-xl">
                    @studio.design
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* RIGHT */}

          <FadeUp delay={0.3}>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-8"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border-b border-neutral-300 bg-transparent pb-4 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border-b border-neutral-300 bg-transparent pb-4 outline-none"
              />

              <input
                type="text"
                name="project"
                placeholder="Project Type"
                className="w-full border-b border-neutral-300 bg-transparent pb-4 outline-none"
              />

              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows={5}
                required
                className="w-full border-b border-neutral-300 bg-transparent pb-4 outline-none"
              />

              <button
                type="submit"
                className="
                  rounded-full
                  border
                  border-black
                  px-8
                  py-4
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                Send Inquiry
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}