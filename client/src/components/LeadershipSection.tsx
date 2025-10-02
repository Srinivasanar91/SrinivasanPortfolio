import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, Lightbulb } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "IIC Convener",
    role: "Institution's Innovation Council",
    achievement: "4-Star Ranking",
    period: "Since 2022",
    description: "Led the institution to achieve 4-star recognition for consecutive academic years 2023-24 and 2024-25",
    highlight: true
  },
  {
    icon: Target,
    title: "NIRF Innovation Coordinator",
    role: "National Institutional Ranking Framework",
    achievement: "Innovation Excellence",
    period: "Current",
    description: "Coordinating innovation metrics and initiatives for institutional ranking framework"
  },
  {
    icon: Users,
    title: "NISP Coordinator",
    role: "National Innovation & Startup Policy",
    achievement: "Policy Implementation",
    period: "Current",
    description: "Implementing national innovation and startup policies at institutional level"
  },
  {
    icon: Lightbulb,
    title: "SIH SPOC",
    role: "Smart India Hackathon",
    achievement: "Student Innovation",
    period: "2024",
    description: "Single Point of Contact for Smart India Hackathon, mentoring student teams"
  }
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-16 lg:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Leadership & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className={`p-6 hover-elevate transition-all duration-300 ${item.highlight ? 'border-accent' : ''}`}
                data-testid={`card-achievement-${index}`}
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-lg ${item.highlight ? 'bg-accent/10' : 'bg-primary/10'}`}>
                    <Icon className={`h-6 w-6 ${item.highlight ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>

                  {item.highlight && (
                    <Badge className="bg-accent text-accent-foreground" data-testid="badge-highlight">
                      {item.achievement}
                    </Badge>
                  )}

                  <p className="text-sm text-foreground">{item.description}</p>
                  
                  <p className="text-xs text-muted-foreground font-medium">{item.period}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
