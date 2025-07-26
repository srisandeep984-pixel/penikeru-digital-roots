import { Notices as NoticesSection } from "@/components/Notices";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Notices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <NoticesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Notices;