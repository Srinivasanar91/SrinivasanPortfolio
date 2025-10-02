import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    position: "Assistant Professor",
    institution: "KPR College of Arts Science and Research",
    duration: "September 2022 - Present",
    period: "3 Years",
    current: true
  },
  {
    position: "Assistant Professor",
    institution: "Rathinam College of Arts and Science (Autonomous)",
    duration: "September 2020 - May 2022",
    period: "1 Year 8 Months",
    responsibilities: "IQAC Coordinator for the Department"
  },
  {
    position: "Assistant Professor",
    institution: "J.J College of Arts and Science (Autonomous), Sivapuram",
    duration: "June 2019 - March 2020",
    period: "9 Months"
  },
  {
    position: "Assistant Professor",
    institution: "Sudharsan College of Arts and Science, Perumanadu",
    duration: "December 2016 - May 2019",
    period: "2 Years 5 Months"
  }
];

export function TeachingSection() {
  return (
    <section id="teaching" className="py-16 lg:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Teaching Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold text-primary">8 Years 10 Months</span>
            <span className="text-muted-foreground">Total Experience</span>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                data-testid={`experience-${index}`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                  <Card className="p-6 hover-elevate">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                          <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                          <p className="text-base text-muted-foreground mt-1">{exp.institution}</p>
                        </div>
                        {exp.current && (
                          <Badge className="bg-accent text-accent-foreground">Current</Badge>
                        )}
                      </div>
                      
                      <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{exp.duration}</span>
                      </div>
                      
                      <Badge variant="outline">{exp.period}</Badge>
                      
                      {exp.responsibilities && (
                        <p className="text-sm text-foreground mt-3">{exp.responsibilities}</p>
                      )}
                    </div>
                  </Card>
                </div>

                <div className="hidden lg:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
