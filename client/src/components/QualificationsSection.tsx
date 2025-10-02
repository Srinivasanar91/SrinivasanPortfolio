import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award as AwardIcon } from "lucide-react";

const academicQualifications = [
  { degree: "Ph.D.", field: "Artificial Intelligence and Machine Learning", status: "Pursuing", year: "Current", type: "academic" },
  { degree: "NET", field: "Computer Science & Applications", status: "Qualified", year: "2018, 2020, 2021", type: "academic" },
  { degree: "SET", field: "Computer Science & Applications", status: "Qualified", year: "2016", type: "academic" },
  { degree: "M.Phil.", field: "Computer Science", status: "First Class", year: "2015", type: "academic" },
  { degree: "M.Sc.", field: "Computer Science", status: "First Class", year: "2014", type: "academic" },
  { degree: "B.Sc.", field: "Computer Science", status: "First Class", year: "2012", type: "academic" }
];

const certifications = [
  { title: "Machine Learning", institution: "Internshala", year: "2025", type: "certification" },
  { title: "Data Science", institution: "Internshala", year: "2024", type: "certification" },
  { title: "Ethical Hacking", institution: "Internshala", year: "2024", type: "certification" },
  { title: "Generative AI: Techniques, Tools & Applications", institution: "NIT Delhi", year: "2025", type: "certification" },
  { title: "Cybersecurity", institution: "ICT Academy", year: "2025", type: "certification" }
];

export function QualificationsSection() {
  return (
    <section id="qualifications" className="py-16 lg:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Academic Qualifications & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Academic Qualifications</h3>
            </div>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-6">
                {academicQualifications.map((qual, index) => (
                  <div key={index} className="relative pl-12" data-testid={`qualification-${index}`}>
                    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary-foreground"></div>
                    </div>
                    
                    <Card className="p-4 hover-elevate">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground">{qual.degree}</h4>
                          <p className="text-sm text-muted-foreground">{qual.field}</p>
                          {qual.status !== "Pursuing" && (
                            <Badge variant="outline" className="mt-2">{qual.status}</Badge>
                          )}
                        </div>
                        <span className="text-sm font-medium text-primary">{qual.year}</span>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <AwardIcon className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-semibold text-foreground">Professional Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-4 hover-elevate" data-testid={`certification-${index}`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{cert.institution}</p>
                    </div>
                    <Badge className="bg-accent text-accent-foreground">{cert.year}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
