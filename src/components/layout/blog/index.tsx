import { useWindowSize } from '@/hooks/useWindowSize'
import * as S from './style'

export default function BlogLayout(props: { children: React.ReactNode }) {
  const size = useWindowSize()

  if ((size?.width as number) < 480) {
    return <>
      {props.children}
    </>
  }
  return (
    <S.ContentContainer>
      {props.children}
      <S.SideBar>
        <S.SideBarWrapper>
          <S.RecommendationContainer>
            <S.RecommendationHeader><p>Veja Tambem</p></S.RecommendationHeader>
            <S.RecommendationContent>
              <S.RecommendationOption>
                <p>O poder da palavra</p>
                <p>Como o que falamos nos influencia</p>
              </S.RecommendationOption>
              <S.RecommendationOption>
                <p>Como agir sob pressão</p>
                <p>Técnicas de acordo com o seu perfil</p>
              </S.RecommendationOption>
            </S.RecommendationContent>
          </S.RecommendationContainer>
          <S.FilterContainer>
            <S.FilterHeader><p>filtre por</p></S.FilterHeader>
            <S.FilterContent>
              <S.FilterOption>
                <p>Dominante</p>
              </S.FilterOption>
              <S.FilterOption>
                <p>Estável</p>
              </S.FilterOption>
              <S.FilterOption>
                <p>Influente</p>
              </S.FilterOption>
              <S.FilterOption>
                <p>Conforme</p>
              </S.FilterOption>
            </S.FilterContent>
          </S.FilterContainer>
        </S.SideBarWrapper>
      </S.SideBar>
    </S.ContentContainer>
  )
}