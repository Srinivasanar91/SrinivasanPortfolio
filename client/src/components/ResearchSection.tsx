import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, BookOpen } from "lucide-react";

const publications = [
  {
    title: "A Study on Cyber Attack Preventions and Need of Cyber Insurance",
    journal: "IJCET",
    details: "ISSN: 0976–6375, Volume 10, Issue 05",
    type: "UGC",
    category: "journal"
  },
  {
    title: "Predict and Impute Missing Values in Diabetes Dataset Using OSICM and SVM",
    journal: "Jijnasa",
    details: "ISSN: 0337-743X, Volume: 38, No. 6(I), 2021, 84-89",
    date: "August 2021",
    type: "UGC",
    category: "journal"
  },
  {
    title: "Asynchronous Web Application for Food Ordering",
    journal: "IJCS",
    details: "Volume 10, Issue 2, 2995-3001",
    date: "No 5, 2022",
    type: "Peer Reviewed",
    category: "journal"
  },
  {
    title: "Criminal Face Detection System",
    journal: "IJCS",
    details: "Volume 10, Issue 2, 3009-3014",
    date: "No 6, 2022",
    type: "Peer Reviewed",
    category: "journal"
  },
  {
    title: "Iris Moment Detection to Operate the Computer using Bayesian Learning",
    journal: "IJCS",
    details: "Volume 10, Issue 2, 2828-2832",
    date: "No 1, 2022",
    type: "Peer Reviewed",
    category: "journal"
  },
  {
    title: "Digital Technologies/MIS for Monitoring Water Quality Management",
    journal: "IJCS",
    details: "Volume 10, Issue 2, 2857-2861",
    date: "No 2, 2022",
    type: "Peer Reviewed",
    category: "journal"
  }
];

export function ResearchSection() {
  const [selectedTab, setSelectedTab] = useState("journals");

  return (
    <section id="research" className="py-16 lg:py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
            Research & Publications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Contributions to AI, Machine Learning, Cybersecurity, and Data Science research
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="journals" data-testid="tab-journals">
              <FileText className="h-4 w-4 mr-2" />
              Journal Papers
            </TabsTrigger>
            <TabsTrigger value="books" data-testid="tab-books">
              <BookOpen className="h-4 w-4 mr-2" />
              Book Chapters
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journals" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
                <Card key={index} className="p-6 hover-elevate" data-testid={`publication-${index}`}>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {pub.title}
                      </h3>
                      <Badge className="bg-primary text-primary-foreground flex-shrink-0">
                        {pub.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{pub.journal}</p>
                      <p className="text-sm text-muted-foreground">{pub.details}</p>
                      {pub.date && (
                        <p className="text-xs text-muted-foreground">{pub.date}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="books" className="space-y-6">
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Book chapters and publications coming soon</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
