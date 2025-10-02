import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, ExternalLink, FileText } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

const platforms = [
  {
    icon: Youtube,
    name: "YouTube Channel",
    description: "Educational content for Computer Science students and NET/SET aspirants",
    handle: "@SrinivasanA91",
    url: "https://www.youtube.com/@SrinivasanA91",
    color: "text-red-600"
  },
  {
    icon: FileText,
    name: "Educational Blog",
    description: "Study materials and preparation resources for UGC NET/SET examinations",
    handle: "CBSE NET Preparation",
    url: "https://cbsenetpreparation.blogspot.com/",
    color: "text-orange-600"
  },
  {
    icon: SiLinkedin,
    name: "LinkedIn Profile",
    description: "Professional network and academic collaborations",
    handle: "Srinivasan Arulanantham",
    url: "https://www.linkedin.com/in/srinivasan-arulanantham-b8b6051b7/",
    color: "text-blue-600"
  }
];

export function DigitalPresenceSection() {
  return (
    <section id="digital-presence" className="py-16 lg:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Digital Presence
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            Sharing knowledge and fostering lifelong learning through digital platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card key={index} className="p-6 hover-elevate active-elevate-2 group relative overflow-hidden" data-testid={`platform-${index}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-background shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-8 w-8 ${platform.color}`} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                    <p className="text-sm font-medium text-foreground">{platform.handle}</p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    asChild
                    data-testid={`button-visit-${index}`}
                  >
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Visit
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
