import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I am <span className="font-semibold">A. Srinivasan</span>, an academician and innovation enthusiast with over 8 years of teaching and research experience in Computer Science. I hold an M.Sc., M.Phil., SET, and NET in Computer Science & Applications and am currently pursuing my Ph.D. in Artificial Intelligence and Machine Learning.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              At <span className="font-semibold">KPR College of Arts, Science and Research</span>, I serve as the Convener of the Institution's Innovation Council (IIC), where I have led the institution to achieve a <span className="font-semibold text-accent">4-star recognition</span> for consecutive academic years. I also contribute as the NIRF Innovation Coordinator, NISP Coordinator, and SIH SPOC (2024).
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My academic interests span AI, Machine Learning, Cybersecurity, Data Science, and Emerging Technologies, with multiple research publications, patents, and book chapters to my credit. I have also acted as a resource person and mentor in hackathons, entrepreneurship programs, and innovation-driven events, empowering students to transform their ideas into impactful solutions.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Beyond teaching, I am passionate about entrepreneurship, innovation ecosystems, and skill development initiatives. I actively organize FDPs, hackathons, international conferences, and startup challenges, collaborating with industry and academic partners to bridge the gap between research and real-world applications.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-4 hover-elevate sticky top-24 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-location">Pudukkottai, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Current Role</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-current-role">Assistant Professor, KPR College</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:srinivasanar91@gmail.com" className="text-sm text-primary hover:underline" data-testid="link-email">
                    srinivasanar91@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a href="tel:+918124170479" className="text-sm text-primary hover:underline" data-testid="link-phone">
                    +91 81241 70479
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
