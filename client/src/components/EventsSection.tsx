import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

const events = [
  {
    title: "Digital Driving - IT Conclave",
    date: "05.02.2025",
    role: "Organizing Secretary",
    organizer: "Department of Commerce (IT), KPR College of Arts Science and Research"
  },
  {
    title: "fixit@KPRCAS - 24 Hours Intra-Collegiate Hackathon",
    date: "22.02.2025 to 23.02.2025",
    role: "Organizer",
    organizer: "KPR College of Arts Science and Research"
  },
  {
    title: "UDYAMOTSAV 2025 - Intra Collegiate Startup Challenge",
    date: "30.12.2024",
    role: "Organizer",
    organizer: "KPR College of Arts Science and Research"
  },
  {
    title: "CommIT Fest'24 - International Symposium",
    date: "27.09.2024",
    role: "Organizing Secretary",
    organizer: "Department of Commerce (IT), KPR College of Arts Science and Research"
  },
  {
    title: "Internal Hackathon for Smart India Hackathon 2024",
    date: "04.09.2024",
    role: "Organizer",
    organizer: "KPR College of Arts Science and Research"
  },
  {
    title: "Socio Tech Hackathon 2024 - 24 Hours Inter Collegiate Hackathon",
    date: "29.01.2024 to 30.01.2024",
    role: "Organizer",
    organizer: "KPR College of Arts Science and Research in collaboration with StartupTN and Cognizant"
  },
  {
    title: "Launch Pad: Igniting Entrepreneurial Success - 4-days FDP",
    date: "2024",
    role: "Organizer",
    organizer: "KPRCAS and Karunya University, Coimbatore"
  },
  {
    title: "International Conference on Role of Modern and Innovative Banking Technologies",
    date: "2024",
    role: "Co-Organizing Secretary",
    organizer: "School of Commerce, KPR College of Arts Science and Research"
  }
];

export function EventsSection() {
  return (
    <section id="events" className="py-16 lg:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Events Organized
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            Leading and organizing innovation-driven events, hackathons, and conferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`event-${index}`}>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {event.title}
                  </h3>
                  <Badge variant="outline" className="flex-shrink-0">{event.role}</Badge>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{event.date}</span>
                </div>

                <div className="flex items-start gap-2 text-muted-foreground">
                  <Users className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{event.organizer}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
