import Navbar from '@/components/ui/navbar'
import * as S from './style'
import Footer from '../ui/footer'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
    <S.Wrapper>
      <Navbar />
      <S.Main>{props.children}</S.Main>
      {/* <Footer /> */}
    </S.Wrapper>
    </>
  )
}