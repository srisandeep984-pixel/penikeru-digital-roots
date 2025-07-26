import { Card } from "@/components/ui/card";
import studentsImage from "@/assets/students-learning.jpg";
import scienceLabImage from "@/assets/science-lab.jpg";
import libraryImage from "@/assets/library.jpg";
import schoolHeroImage from "@/assets/school-hero.jpg";

export const Gallery = () => {
  const images = [
    {
      src: schoolHeroImage,
      title: "School Campus",
      description: "Our beautiful school building with modern facilities"
    },
    {
      src: studentsImage,
      title: "Students Learning",
      description: "Engaged students in active learning environment"
    },
    {
      src: scienceLabImage,
      title: "Science Laboratory",
      description: "Well-equipped science lab for hands-on experiments"
    },
    {
      src: libraryImage,
      title: "Library",
      description: "Peaceful library space for reading and research"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            School Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our vibrant school life, modern facilities, and 
            the joyful learning environment we provide for our students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of our school life and activities?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="px-6 py-3 shadow-card">
              <p className="text-sm font-medium text-primary">Annual Day Celebrations</p>
            </Card>
            <Card className="px-6 py-3 shadow-card">
              <p className="text-sm font-medium text-primary">Sports Day Events</p>
            </Card>
            <Card className="px-6 py-3 shadow-card">
              <p className="text-sm font-medium text-primary">Science Fair Projects</p>
            </Card>
            <Card className="px-6 py-3 shadow-card">
              <p className="text-sm font-medium text-primary">Cultural Programs</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};