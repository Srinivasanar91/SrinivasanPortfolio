import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Presentation, Calendar } from "lucide-react";

const sessions = [
  {
    title: "Innovation Odyssey - Intra College 24 Hours Hackathon",
    role: "Evaluator",
    date: "18.09.2025 to 19.08.2025",
    organizer: "School of Computing Science, KPR College of Arts Science and Research"
  },
  {
    title: "Rac-A-Thon - 24 Hours Hackathon",
    role: "Evaluator",
    date: "13.09.2025 to 14.09.2025",
    organizer: "Rotaract Club at KPR College of Arts Science and Research"
  },
  {
    title: "Achieving Value Proposition Fit and Business Fit",
    role: "Resource Person",
    date: "30.08.2025",
    organizer: "Department of Commerce (IT), KPR College of Arts Science and Research"
  },
  {
    title: "Lean Start-up and Minimum Viable Product/Business",
    role: "Resource Person",
    date: "29.08.2025",
    organizer: "Department of Commerce (Banking & Insurance), KPR College of Arts Science and Research"
  },
  {
    title: "Kickstart to Creativity: Hackathon and IPR Orientation",
    role: "Resource Person",
    date: "20.08.2025",
    organizer: "Department of Computer Science, KPR College of Arts Science and Research"
  },
  {
    title: "Programming Fundamentals with Python and SQL",
    role: "Instructor",
    date: "31.07.2025 to 06.08.2025",
    organizer: "Department of Commerce (IT), KPR College of Arts Science and Research"
  },
  {
    title: "Think Solve Build: Kick-starting your Hackathon Journey",
    role: "Resource Person",
    date: "28.07.2025",
    organizer: "Department of Computer Science, KPR College of Arts Science and Research"
  },
  {
    title: "Future Focus: Empowering Change through Innovation",
    role: "Resource Person",
    date: "18.10.2024",
    organizer: "Department of Computer Science, KPR College of Arts Science and Research"
  },
  {
    title: "Code, Create, Innovate: Hackathon Challenges - An Expert Insight",
    role: "Resource Person",
    date: "07.10.2024",
    organizer: "Department of Commerce (Computer Applications), KPR College of Arts Science and Research"
  },
  {
    title: "Web Designing and Hosting - Two Days Workshop",
    role: "Resource Person",
    date: "22.01.2024 and 23.01.2024",
    organizer: "Department of Computer Science, Karpagam Academy of Higher Education, Coimbatore"
  }
];

export function ResourcePersonSection() {
  return (
    <section id="resource-person" className="py-16 lg:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Resource Person & Expert Sessions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            Conducting expert sessions, workshops, and evaluations for innovation programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`session-${index}`}>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Presentation className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="text-base font-semibold text-foreground leading-tight">
                    {session.title}
                  </h3>
                </div>
                
                <Badge className={session.role === "Evaluator" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}>
                  {session.role}
                </Badge>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs">{session.date}</span>
                </div>

                <p className="text-xs text-muted-foreground">{session.organizer}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
