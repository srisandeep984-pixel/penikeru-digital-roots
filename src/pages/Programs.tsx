import { Programs as ProgramsSection } from "@/components/Programs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;