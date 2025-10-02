import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { BentoGrid } from "@/components/BentoGrid";
import { AboutSection } from "@/components/AboutSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { QualificationsSection } from "@/components/QualificationsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { TeachingSection } from "@/components/TeachingSection";
import { ProfessionalDevSection } from "@/components/ProfessionalDevSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EventsSection } from "@/components/EventsSection";
import { ResourcePersonSection } from "@/components/ResourcePersonSection";
import { MentoringSection } from "@/components/MentoringSection";
import { ConsultancySection } from "@/components/ConsultancySection";
import { DigitalPresenceSection } from "@/components/DigitalPresenceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Portfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <BentoGrid />
        <AboutSection />
        <LeadershipSection />
        <QualificationsSection />
        <ResearchSection />
        <TeachingSection />
        <ProfessionalDevSection />
        <SkillsSection />
        <EventsSection />
        <ResourcePersonSection />
        <MentoringSection />
        <ConsultancySection />
        <DigitalPresenceSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
