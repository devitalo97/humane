import Gallery from "@/components/pages/gallery";
import Header from "@/components/ui/head";

export default function GalleryPage() {
  return (
    <>
      <Header
        title="Galeria"
        content="Explore nossa incrível galeria de imagens e descubra momentos cativantes capturados em nossa jornada."
      />
      <Gallery />
    </>
  );
}
