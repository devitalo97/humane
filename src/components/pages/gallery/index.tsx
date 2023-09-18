import FirstSection from '@/components/sections/gallery/first'
import Header from '@/components/ui/head'

export default function Gallery() {
  return (
    <>
      <Header
        title="Galeria"
        content="Explore nossa incrível galeria de imagens e descubra momentos cativantes capturados em nossa jornada."
      />
      <main>
        <FirstSection />
      </main>
    </>
  )
}
