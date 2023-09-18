import FirstSection from '@/components/sections/about/first'
import Header from '@/components/ui/head'

export default function Abbout() {
  return (
    <>
      <Header
        title="Sobre"
        content="Saiba mais sobre nossa empresa e nossa paixão por fornecer análises de perfil comportamental de alta qualidade."
      />
      <main>
        <FirstSection />
      </main>
    </>
  )
}
