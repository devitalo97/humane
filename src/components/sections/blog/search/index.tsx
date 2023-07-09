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
      <S.Content>
        <S.SearchBox>
          {/* <S.SeachBoxHeader>
            <h1 style={inter.style}>Faça sua busca</h1>
          </S.SeachBoxHeader> */}
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
    </S.Container>
  )
}