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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent to-primary opacity-30 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-spin-slow"></div>
              <img
                src={profileImage}
                alt="Mr. A. Srinivasan"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl ring-2 ring-primary/20 ring-offset-4 ring-offset-background transform group-hover:scale-105 transition-transform duration-500"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="space-y-6 order-2 lg:order-2 text-center lg:text-left animate-fade-in">
            <div className="space-y-3">
              <Badge variant="outline" className="text-sm font-medium backdrop-blur-sm bg-background/50 border-primary/30 animate-slide-up" data-testid="badge-role">
                Assistant Professor & Innovation Leader
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-slide-up" style={{animationDelay: '0.1s'}} data-testid="text-name">
                Mr. A. Srinivasan
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium animate-slide-up" style={{animationDelay: '0.2s'}}>
                AI/ML Researcher · Ph.D. Candidate · IIC Convener
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl animate-slide-up" style={{animationDelay: '0.3s'}}>
              Academician and innovation enthusiast with 8+ years of teaching and research experience in Computer Science, 
              specializing in Artificial Intelligence, Machine Learning, and Cybersecurity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent hover-elevate">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-experience">8+</span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">Years Experience</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-gradient-to-br from-accent/5 to-transparent hover-elevate">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent" data-testid="text-rating">4-Star</span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">IIC Ranking</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent hover-elevate">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-publications">6+</span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">Publications</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.5s'}}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('research')}
                data-testid="button-view-research"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                View Research
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact"
                className="border-2 hover:bg-primary/5 backdrop-blur-sm"
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
