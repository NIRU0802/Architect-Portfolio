// components/sections/FeaturedProjects.tsx — inView FadeUp for below-fold content
"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <FadeUp inView>
          <div className="mb-24">
            <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              Selected Works
            </span>
            <h2
              className="mt-6 max-w-5xl text-5xl leading-tight md:text-7xl xl:text-8xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Architecture shaped by vision,
              detail and timeless design.
            </h2>
          </div>
        </FadeUp>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <FadeUp key={project.slug} delay={0.1} inView>
              <article>
                <div
                  className={`grid items-center gap-12 lg:grid-cols-12 ${
                    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Text */}
                  <div className="lg:col-span-4">
                    <p className="text-[100px] leading-none text-neutral-200 md:text-[160px]">
                      {project.number}
                    </p>
                    <div className="mt-8">
                      <p className="text-xs uppercase tracking-[0.4em] text-neutral-500">
                        {project.category}
                      </p>
                      <h3
                        className="mt-6 text-4xl md:text-5xl"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-4 text-neutral-500">{project.location}</p>
                      <p className="mt-8 max-w-md leading-relaxed text-neutral-600">
                        Thoughtfully designed spaces that blend aesthetics,
                        functionality and craftsmanship into a timeless
                        architectural experience.
                      </p>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-10 inline-block border-b border-black pb-2 text-sm uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-60"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <Link href={`/projects/${project.slug}`} className="lg:col-span-8">
                    <div className="group relative h-[500px] overflow-hidden md:h-[700px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width:1024px) 100vw, 70vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/0" />
                    </div>
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}