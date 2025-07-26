import React, { useState } from "react";
import { PreloadSection } from "../components/PreloadSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <PreloadSection onFinish={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Background Effects */}
          <StarBackground />

          {/* Navigation Bar */}
          <Navbar />

          {/* Main Content */}
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};
