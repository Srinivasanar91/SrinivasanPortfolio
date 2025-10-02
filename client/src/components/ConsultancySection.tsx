import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, DollarSign, Calendar } from "lucide-react";

const consultancy = [
  {
    title: "UGC NET/SET Coaching Classes",
    role: "Instructor",
    department: "Department of Commerce (IT)",
    duration: "01.12.2024 to 31.12.2024",
    participants: "17 Aspirants",
    revenue: "₹27,000",
    description: "Consultancy Services for UGC NET/SET preparation"
  }
];

export function ConsultancySection() {
  return (
    <section id="consultancy" className="py-16 lg:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Consultancy Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            Professional consultancy and training services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {consultancy.map((service, index) => (
            <Card key={index} className="p-8 hover-elevate" data-testid={`consultancy-${index}`}>
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                  <Badge className="bg-primary text-primary-foreground">{service.role}</Badge>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Duration</p>
                      <p className="text-sm text-foreground">{service.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Enrollment</p>
                      <p className="text-sm text-foreground">{service.participants}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Revenue Generated</p>
                      <p className="text-sm text-foreground font-semibold">{service.revenue}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">{service.department}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
