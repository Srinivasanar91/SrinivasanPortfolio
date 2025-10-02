import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Lightbulb } from "lucide-react";

const mentoring = [
  {
    type: "Startup",
    title: "Virafly Coaching Academy",
    description: "Mentor for the Startup",
    url: "https://virafly.com/",
    icon: Lightbulb,
    badge: "Active"
  },
  {
    type: "Competition",
    title: "Eureka! Business Plan Pitch Competition",
    description: "Mentors for the Winners 'Stray Dog Challenge' and Runners 'Smart Exam Cell'",
    date: "29.08.2025",
    icon: Award,
    badge: "Winner"
  },
  {
    type: "Hackathon",
    title: "Team Tech Pass - fixit@KPRCAS",
    description: "Mentor for the Problem Statement 'Hostel Out pass System' at 24 Hours Intra Collegiate Hackathon",
    icon: Users,
    badge: "Hackathon"
  },
  {
    type: "Hackathon",
    title: "Team Code Blue - fixit@KPRCAS",
    description: "Mentor for the Problem Statement 'Chatbot for the College Website' at 24 Hours Intra Collegiate Hackathon",
    icon: Users,
    badge: "Hackathon"
  }
];

export function MentoringSection() {
  return (
    <section id="mentoring" className="py-16 lg:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Mentoring & Guidance
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            Guiding startups, student teams, and innovation projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mentoring.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 hover-elevate" data-testid={`mentoring-${index}`}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{item.type}</p>
                      </div>
                    </div>
                    <Badge className="bg-accent text-accent-foreground flex-shrink-0">
                      {item.badge}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-foreground">{item.description}</p>
                  
                  {item.date && (
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  )}
                  
                  {item.url && (
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                      data-testid={`link-${index}`}
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
