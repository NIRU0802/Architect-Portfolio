import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Image */}
      <section className="relative h-screen w-full">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text on top of image */}
        <div className="absolute inset-0 flex items-end p-10 md:p-20">
          <div className="text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60 mb-4">
              {project.category}
            </p>
            <h1
              className="text-5xl md:text-7xl font-light"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {project.title}
            </h1>
            <p className="text-white/60 mt-4 text-lg">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-32 space-y-24 px-6">
        <div>
          <h2
            className="text-3xl mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Overview
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            {project.description}
          </p>
        </div>

        <div>
          <h2
            className="text-3xl mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Challenge
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            {project.challenge}
          </p>
        </div>

        <div>
          <h2
            className="text-3xl mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Concept
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            {project.concept}
          </p>
        </div>

        <div>
          <h2
            className="text-3xl mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Result
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            {project.result}
          </p>
        </div>
      </section>
    </div>
  );
}