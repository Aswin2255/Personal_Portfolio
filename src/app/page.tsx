import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-white">
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
