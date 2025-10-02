import { Card } from "@/components/ui/card";
import { Brain, Shield, Database, Lightbulb, Users, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["Deep Learning", "Neural Networks", "Pattern Recognition", "Predictive Analytics", "Computer Vision"],
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    skills: ["Ethical Hacking", "Network Security", "Threat Analysis", "Security Protocols", "Risk Assessment"],
    color: "text-accent"
  },
  {
    icon: Database,
    title: "Data Science",
    skills: ["Statistical Analysis", "Data Mining", "R Programming", "Data Visualization", "Big Data Analytics"],
    color: "text-primary"
  },
  {
    icon: Code,
    title: "Programming & Development",
    skills: ["Python", "R", "Machine Learning Libraries", "Web Technologies", "Database Management"],
    color: "text-accent"
  },
  {
    icon: Lightbulb,
    title: "Innovation Management",
    skills: ["IIC Leadership", "Startup Mentoring", "Hackathon Organization", "Innovation Ecosystem", "Policy Implementation"],
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Teaching & Mentorship",
    skills: ["Curriculum Development", "Student Mentoring", "Research Guidance", "FDP Coordination", "Academic Leadership"],
    color: "text-accent"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 lg:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 hover-elevate active-elevate-2 group relative overflow-hidden" data-testid={`skill-category-${index}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-muted to-muted/80 text-foreground hover-elevate transition-all duration-200 cursor-default"
                        data-testid={`skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
