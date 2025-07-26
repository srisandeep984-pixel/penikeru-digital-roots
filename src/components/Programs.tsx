import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calculator, Beaker, Globe, Palette, Music } from "lucide-react";

export const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "English Literature",
      description: "Comprehensive language skills development with focus on communication and literature appreciation.",
      subjects: ["Grammar", "Composition", "Literature", "Speaking"],
      level: "All Classes"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Strong foundation in mathematical concepts from basic arithmetic to advanced algebra.",
      subjects: ["Arithmetic", "Algebra", "Geometry", "Statistics"],
      level: "All Classes"
    },
    {
      icon: Beaker,
      title: "Science",
      description: "Hands-on learning experience in Physics, Chemistry, and Biology with practical applications.",
      subjects: ["Physics", "Chemistry", "Biology", "Lab Work"],
      level: "Classes 6-10"
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Understanding history, geography, and civic responsibilities for well-rounded citizenship.",
      subjects: ["History", "Geography", "Civics", "Economics"],
      level: "All Classes"
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative expression through various art forms and craft activities to nurture imagination.",
      subjects: ["Drawing", "Painting", "Crafts", "Design"],
      level: "All Classes"
    },
    {
      icon: Music,
      title: "Cultural Activities",
      description: "Music, dance, and cultural programs to preserve traditions and develop artistic talents.",
      subjects: ["Music", "Dance", "Drama", "Events"],
      level: "All Classes"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Academic Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive curriculum designed to provide holistic education and prepare 
            students for future challenges with strong foundational knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">{program.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {program.level}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {program.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};