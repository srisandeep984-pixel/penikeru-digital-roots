import { Faculty as FacultySection } from "@/components/Faculty";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Faculty = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <FacultySection />
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;