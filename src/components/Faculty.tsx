import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Book, Users } from "lucide-react";
import principalImage from "@/assets/principal.jpg";
import teacherMathImage from "@/assets/teacher-math.jpg";
import teacherScienceImage from "@/assets/teacher-science.jpg";
import teacherEnglishImage from "@/assets/teacher-english.jpg";

export const Faculty = () => {
  const principal = {
    name: "Dr. Rajesh Kumar",
    position: "Principal",
    image: principalImage,
    qualifications: ["M.Ed", "Ph.D in Education", "B.Ed"],
    experience: "25+ Years",
    specialization: "Educational Leadership & Administration",
    achievements: [
      "Best Principal Award 2022",
      "Education Excellence Recognition",
      "Community Service Award"
    ]
  };

  const facultyMembers = [
    {
      name: "Mrs. Priya Sharma",
      subject: "Mathematics",
      image: teacherMathImage,
      qualifications: ["M.Sc Mathematics", "B.Ed"],
      experience: "12 Years",
      specialization: "Advanced Mathematics & Problem Solving",
      classes: ["Class 8", "Class 9", "Class 10"]
    },
    {
      name: "Mr. Suresh Reddy",
      subject: "Science",
      image: teacherScienceImage,
      qualifications: ["M.Sc Physics", "B.Ed"],
      experience: "15 Years",
      specialization: "Physics & Laboratory Experiments",
      classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"]
    },
    {
      name: "Mrs. Lakshmi Devi",
      subject: "English",
      image: teacherEnglishImage,
      qualifications: ["M.A English", "B.Ed"],
      experience: "10 Years",
      specialization: "Literature & Communication Skills",
      classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"]
    },
    {
      name: "Mr. Venkat Rao",
      subject: "Social Studies",
      image: teacherScienceImage,
      qualifications: ["M.A History", "B.Ed"],
      experience: "8 Years",
      specialization: "History & Geography",
      classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"]
    },
    {
      name: "Mrs. Sarita Kumari",
      subject: "Telugu",
      image: teacherEnglishImage,
      qualifications: ["M.A Telugu", "B.Ed"],
      experience: "14 Years",
      specialization: "Telugu Literature & Grammar",
      classes: ["All Classes"]
    },
    {
      name: "Mr. Krishna Murthy",
      subject: "Physical Education",
      image: teacherMathImage,
      qualifications: ["B.P.Ed", "M.P.Ed"],
      experience: "6 Years",
      specialization: "Sports & Fitness Training",
      classes: ["All Classes"]
    }
  ];

  const stats = [
    { icon: Users, label: "Total Faculty", value: "18" },
    { icon: GraduationCap, label: "Qualified Teachers", value: "100%" },
    { icon: Award, label: "Awards Won", value: "15+" },
    { icon: Book, label: "Avg Experience", value: "12 Years" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Dedicated Faculty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our experienced and passionate educators who are committed to nurturing 
            young minds and shaping the future of our students at MPUP School Penikeru.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center shadow-card bg-gradient-card">
                <CardContent className="p-6">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Principal Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Principal's Message</h3>
          <Card className="max-w-4xl mx-auto shadow-elegant border-0 bg-gradient-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={principal.image} 
                      alt={principal.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">{principal.name}</h4>
                  <p className="text-muted-foreground">{principal.position}</p>
                  <Badge variant="secondary" className="mt-2">{principal.experience}</Badge>
                </div>
                
                <div className="md:col-span-2">
                  <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    "Education is the most powerful weapon which you can use to change the world. 
                    At MPUP School Penikeru, we are committed to providing quality education that 
                    empowers our students to become responsible citizens and future leaders."
                  </blockquote>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-primary">Qualifications:</h5>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {principal.qualifications.map((qual, idx) => (
                          <Badge key={idx} variant="outline">{qual}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-primary">Specialization:</h5>
                      <p className="text-muted-foreground">{principal.specialization}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-primary">Recent Achievements:</h5>
                      <ul className="text-muted-foreground text-sm space-y-1 mt-1">
                        {principal.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center">
                            <Award className="w-4 h-4 text-secondary mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Faculty Grid */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Teaching Faculty</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((teacher, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-card group">
                <CardHeader className="text-center pb-4">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-primary">{teacher.name}</h4>
                  <p className="text-secondary font-medium">{teacher.subject} Teacher</p>
                  <Badge variant="secondary">{teacher.experience}</Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-primary text-sm mb-2">Qualifications:</h5>
                    <div className="flex flex-wrap gap-1">
                      {teacher.qualifications.map((qual, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{qual}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-primary text-sm mb-2">Specialization:</h5>
                    <p className="text-muted-foreground text-sm">{teacher.specialization}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-primary text-sm mb-2">Teaching Classes:</h5>
                    <div className="flex flex-wrap gap-1">
                      {teacher.classes.map((cls, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{cls}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-card bg-gradient-card">
            <CardContent className="p-8">
              <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-4">Join Our Teaching Family</h3>
              <p className="text-muted-foreground mb-6">
                We are always looking for passionate educators who want to make a difference 
                in rural education. Join us in our mission to empower young minds.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="px-4 py-2">Competitive Salary</Badge>
                <Badge variant="secondary" className="px-4 py-2">Professional Development</Badge>
                <Badge variant="secondary" className="px-4 py-2">Supportive Environment</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};