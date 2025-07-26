import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, BookOpen, Heart } from "lucide-react";
import studentsImage from "@/assets/students-learning.jpg";

export const About = () => {
  const stats = [
    { icon: Users, label: "Students", value: "500+" },
    { icon: BookOpen, label: "Programs", value: "15+" },
    { icon: Award, label: "Awards", value: "25+" },
    { icon: Heart, label: "Years", value: "30+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Our School
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              MPUP School Penikeru has been a beacon of educational excellence in Mandapeta, 
              nurturing generations of students with strong values, quality education, and 
              holistic development. Our commitment to rural education has made us a trusted 
              name in the community.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <p className="text-foreground">
                  <strong>Quality Education:</strong> Experienced faculty delivering excellence in academics
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <p className="text-foreground">
                  <strong>Value-Based Learning:</strong> Building character alongside academic knowledge
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                <p className="text-foreground">
                  <strong>Community Focus:</strong> Serving rural students with modern educational facilities
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center shadow-card">
                    <CardContent className="p-4">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={studentsImage} 
                alt="Students learning at MPUP School" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-card"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};