import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Lightbulb, TrendingUp, Zap } from "lucide-react";

const highlights = [
  {
    title: "4-Star IIC Recognition",
    description: "Led institution to consecutive 4-star rankings",
    icon: Award,
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    span: "col-span-2"
  },
  {
    title: "8+ Publications",
    description: "Research in AI, ML & Cybersecurity",
    icon: BookOpen,
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    span: "col-span-1"
  },
  {
    title: "Startup Mentor",
    description: "Guiding innovative ventures",
    icon: Lightbulb,
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    span: "col-span-1"
  },
  {
    title: "Innovation Ecosystem",
    description: "Building bridges between academia & industry",
    icon: TrendingUp,
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    span: "col-span-2"
  },
  {
    title: "10+ Expert Sessions",
    description: "Resource person for hackathons & workshops",
    icon: Users,
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    span: "col-span-1"
  },
  {
    title: "2 Patents",
    description: "Published innovations in 2024",
    icon: Zap,
    color: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    span: "col-span-2"
  }
];

export function BentoGrid() {
  return (
    <section className="py-16 lg:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Highlights & Impact
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className={`${item.span} p-6 hover-elevate active-elevate-2 group relative overflow-hidden border-none`}
                data-testid={`highlight-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 space-y-3">
                  <div className={`inline-flex p-3 rounded-xl ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
