import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Youtube, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "srinivasanar91@gmail.com",
    href: "mailto:srinivasanar91@gmail.com"
  },
  {
    icon: Mail,
    label: "Institutional Email",
    value: "srinivasan.a@kprcas.ac.in",
    href: "mailto:srinivasan.a@kprcas.ac.in"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 81241 70479",
    href: "tel:+918124170479"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Pudukkottai District - 614624, Tamil Nadu",
    href: null
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/srinivasan-arulanantham-b8b6051b7/",
    color: "hover:text-blue-600"
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://www.youtube.com/@SrinivasanA91",
    color: "hover:text-red-600"
  },
  {
    icon: Globe,
    label: "Blog",
    href: "https://cbsenetpreparation.blogspot.com/",
    color: "hover:text-orange-600"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            Feel free to reach out for collaborations, research opportunities, or academic discussions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card via-card to-card/50 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4" data-testid={`contact-info-${index}`}>
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-foreground hover:text-primary transition-colors"
                            data-testid={`link-${info.label.toLowerCase().replace(' ', '-')}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect Online</h3>
                
                <div className="space-y-3">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Button 
                        key={index}
                        variant="outline" 
                        className="w-full justify-start hover-elevate"
                        asChild
                        data-testid={`button-${link.label.toLowerCase()}`}
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <Icon className={`h-5 w-5 mr-3 ${link.color}`} />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>

                <div className="pt-6 border-t">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Current Affiliation</h4>
                  <p className="text-foreground font-medium">KPR College of Arts Science and Research</p>
                  <p className="text-sm text-muted-foreground mt-1">Assistant Professor</p>
                  <p className="text-sm text-muted-foreground">IIC Convener | NIRF Innovation Coordinator</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
