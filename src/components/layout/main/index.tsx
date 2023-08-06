import Navbar from '@/components/ui/navbar'
import * as S from './style'
import Footer from '../../ui/footer'

export default function MainLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div id="__modal" />
      <S.Wrapper>
        <Navbar />
        <S.Main>{props.children}</S.Main>
        <Footer />
      </S.Wrapper>
    </>
  )
}