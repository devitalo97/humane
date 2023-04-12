import Navbar from '@/components/ui/navbar'
import * as S from './style'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <S.Wrapper>
      <Navbar />
      <S.Main>{props.children}</S.Main>
    </S.Wrapper>
  )
}