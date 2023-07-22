import FifthSection from '@/components/sections/home/fifth'
import FirstSection from '@/components/sections/home/first'
import FourthSection from '@/components/sections/home/fourth'
import SecondSection from '@/components/sections/home/second'
import SixthSection from '@/components/sections/home/sixth'
import ThirdSection from '@/components/sections/home/third'
import Header from '@/components/ui/head'

export default function Home() {
  return (
    <>
      <Header title="Humane" />
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FifthSection />
        <FourthSection />
        <SixthSection />
      </main>
    </>

  )
}
