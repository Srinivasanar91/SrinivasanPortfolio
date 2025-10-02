import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Filter } from "lucide-react";

const programs = [
  { title: "Generative AI: Techniques, Tools & Applications", organizer: "NIT Delhi", date: "Feb 2025", category: "AI/ML" },
  { title: "Cybersecurity", organizer: "ICT Academy", date: "Aug 2025", category: "Cybersecurity" },
  { title: "NBFC Products and Services", organizer: "Naan Muthalvan FDP", date: "Jan 2025", category: "General" },
  { title: "Business Process", organizer: "Naan Muthalvan Programme", date: "Jun-Jul 2024", category: "General" },
  { title: "Data Science using R", organizer: "NITTTR, Chandigarh", date: "Jul 2023", category: "Data Science" },
  { title: "Open Source Technologies", organizer: "NITTTR, Chandigarh", date: "Apr 2023", category: "General" },
  { title: "Data Sciences", organizer: "Sri Sai Ram Institute of Technology", date: "Feb 2021", category: "Data Science" },
  { title: "Internet of Things (IoT)", organizer: "LBS College of Engineering", date: "Jan 2021", category: "AI/ML" },
  { title: "Blockchain and Crypto Currency", organizer: "Sri Sai Ram Institute of Technology", date: "Aug 2021", category: "General" },
  { title: "AI & ML in Biological Data Analysis", organizer: "PSGR Krishnammal College", date: "Mar 2021", category: "AI/ML" },
  { title: "DST-PURSE Webinar on Advanced Computing", organizer: "Bharathiar University", date: "Nov 2020", category: "General" }
];

const categories = ["All", "AI/ML", "Data Science", "Cybersecurity", "General"];

export function ProfessionalDevSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrograms = selectedCategory === "All" 
    ? programs 
    : programs.filter(p => p.category === selectedCategory);

  return (
    <section id="development" className="py-16 lg:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Professional Development
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            Continuous learning through FDPs, workshops, and specialized training programs
          </p>
        </div>

        <div className="mb-8 flex items-center justify-center gap-3 flex-wrap">
          <Filter className="h-5 w-5 text-muted-foreground" />
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              data-testid={`filter-${cat.toLowerCase().replace(/\//g, '-')}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`program-${index}`}>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-base font-semibold text-foreground leading-tight">
                    {program.title}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground">{program.organizer}</p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{program.date}</Badge>
                  <Badge className="bg-primary/10 text-primary">{program.category}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
