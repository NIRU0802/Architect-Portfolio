// app/projects/page.tsx
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/motion/FadeUp";

export default function ProjectsPage() {
  return (
    <section className="pt-40 pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <span className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            All Works
          </span>
          <h1
            className="mt-6 text-6xl md:text-8xl"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Projects
          </h1>
        </FadeUp>

        <div className="mt-24 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeUp key={project.slug} delay={i * 0.1} inView>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {project.category}
                  </p>
                  <h2
                    className="mt-2 text-3xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {project.title}
                  </h2>
                  <p className="mt-1 text-neutral-500">{project.location}</p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}