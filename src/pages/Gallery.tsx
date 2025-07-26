import { Gallery as GallerySection } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;