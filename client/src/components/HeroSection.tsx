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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,120,60,0.1),transparent_50%)]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative group perspective-1000">
              {/* Animated Ring */}
              <div className="absolute -inset-8 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 rounded-full blur-2xl animate-spin-slow"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent to-primary opacity-30 rounded-full blur-3xl group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Profile Image with 3D Effect */}
              <div className="relative transform-gpu transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-xl"></div>
                <img
                  src={profileImage}
                  alt="Mr. A. Srinivasan"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl ring-2 ring-primary/30 ring-offset-4 ring-offset-background"
                  data-testid="img-profile"
                />
                
                {/* Corner Accents */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float">
                  <Award className="w-8 h-8 text-background" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 order-2 lg:order-2 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-slide-up">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Available for Collaborations</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-slide-up" style={{animationDelay: '0.1s'}} data-testid="text-name">
                <span className="block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Mr. A. Srinivasan
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Innovation Leader
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-base md:text-lg text-muted-foreground animate-slide-up" style={{animationDelay: '0.2s'}}>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  AI/ML Researcher
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  Ph.D. Candidate
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  IIC Convener
                </span>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl animate-slide-up" style={{animationDelay: '0.3s'}}>
              Driving innovation and academic excellence with <span className="text-primary font-semibold">8+ years</span> of teaching experience in Computer Science, 
              specializing in <span className="text-accent font-semibold">AI, Machine Learning, and Cybersecurity</span>.
            </p>

            {/* Bento Grid Stats */}
            <div className="grid grid-cols-3 gap-3 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="col-span-1 p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 hover-elevate group">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent" data-testid="text-experience">8+</div>
                  <div className="text-xs text-muted-foreground font-medium">Years</div>
                </div>
              </div>
              
              <div className="col-span-1 p-4 rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/10 hover-elevate group">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-accent/10 w-fit group-hover:scale-110 transition-transform">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-br from-accent to-accent/60 bg-clip-text text-transparent" data-testid="text-rating">4★</div>
                  <div className="text-xs text-muted-foreground font-medium">IIC Rank</div>
                </div>
              </div>
              
              <div className="col-span-1 p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/10 hover-elevate group">
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit group-hover:scale-110 transition-transform">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent" data-testid="text-publications">6+</div>
                  <div className="text-xs text-muted-foreground font-medium">Papers</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.5s'}}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('research')}
                data-testid="button-view-research"
                className="group bg-gradient-to-r from-primary via-primary to-accent hover:from-primary hover:via-accent hover:to-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-500 animate-gradient"
              >
                <span className="flex items-center gap-2">
                  View Research
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                data-testid="button-contact"
                className="border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 backdrop-blur-sm transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
