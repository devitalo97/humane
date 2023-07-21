import { Inter } from 'next/font/google'
import * as S from './style'
import BlogCard from '@/components/ui/blog_card'
import { RiSearchLine } from 'react-icons/ri'
import { posts } from './data'


const inter = Inter({ subsets: ['latin'] })

export default function SearchSection() {

  return (
    <S.Container>
      <S.NavGhost />
      <S.ContentContainer>
        <S.Content>
          <S.SearchBox>
            <S.SeachBoxContent>
              <RiSearchLine />
              <input
                type='search'
                placeholder='Pesquise pelo tema de interesse'
                maxLength={2048}
              />
            </S.SeachBoxContent>
          </S.SearchBox>
          <S.CardGroup>
            {posts.map((card, index) => <BlogCard
              key={index}
              title={card.title}
              date={card.date}
              readTime={card.readTime}
              author={card.author}
              content={card.content}
              category={card.category}
              src={card.src}
            />)}
          </S.CardGroup>
        </S.Content>
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
    </S.Container>
  )
}