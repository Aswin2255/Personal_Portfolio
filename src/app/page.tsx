import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black absolute inset-0 bg-black/40 text-foreground min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <HeroScrollAnimation />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
