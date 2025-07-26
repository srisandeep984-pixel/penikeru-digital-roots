import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Gallery } from "@/components/Gallery";
import { Notices } from "@/components/Notices";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <Notices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
