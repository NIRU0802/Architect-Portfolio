// app/page.tsx  (Home)
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import StudioProcess from "@/components/sections/StudioProcess";
import StudioImpact from "@/components/sections/StudioImpact";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <FeaturedProjects />
      <StudioProcess />
      <StudioImpact />
      <Testimonials />
    </>
  );
}