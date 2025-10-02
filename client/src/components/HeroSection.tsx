import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Users } from "lucide-react";
import profileImage from "@assets/IMG-20250404-WA0021_1759429582440.jpg";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Mr. A. Srinivasan"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="space-y-6 order-2 lg:order-2 text-center lg:text-left">
            <div className="space-y-3">
              <Badge variant="outline" className="text-sm font-medium" data-testid="badge-role">
                Assistant Professor & Innovation Leader
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground" data-testid="text-name">
                Mr. A. Srinivasan
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                AI/ML Researcher · Ph.D. Candidate · IIC Convener
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Academician and innovation enthusiast with 8+ years of teaching and research experience in Computer Science, 
              specializing in Artificial Intelligence, Machine Learning, and Cybersecurity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground" data-testid="text-experience">8+</span>
                </div>
                <span className="text-sm text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-2xl font-bold text-foreground" data-testid="text-rating">4-Star</span>
                </div>
                <span className="text-sm text-muted-foreground">IIC Ranking</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-foreground" data-testid="text-publications">6+</span>
                </div>
                <span className="text-sm text-muted-foreground">Publications</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('research')}
                data-testid="button-view-research"
              >
                View Research
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
