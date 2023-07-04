import { Inter } from 'next/font/google'
import * as S from './style'
import blogThumb from "@/assets/svgs/blog_thumb.svg"
import BlogCard from '@/components/ui/blog_card'
import { RiSearch2Fill, RiSearchLine } from 'react-icons/ri'


const inter = Inter({ subsets: ['latin'] })

export default function SearchSection() {
  const cards = [
    {
      author: 'Luiz Ricardo',
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
      content: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that history was…",
      date: 'Abril 27',
      readTime: '18 min',
      category: 'Saúde',
      src: blogThumb
    },
    {
      author: 'Luiz Ricardo',
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
      content: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that history was…",
      date: 'Abril 27',
      readTime: '18 min',
      category: 'Bem estar',
      src: blogThumb
    },
    {
      author: 'Luiz Ricardo',
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
      content: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that history was…",
      date: 'Abril 27',
      readTime: '18 min',
      category: 'Comportamento',
      src: blogThumb
    },
    {
      author: 'Luiz Ricardo',
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an",
      content: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that history was…",
      date: 'Abril 27',
      readTime: '18 min',
      category: 'Ciência',
      src: blogThumb
    },
  ]
  return (
    <S.Container>
      <S.NavGhost />
      <S.Content>
        <S.SearchBox>
          <S.SeachBoxHeader>
            <h1 style={inter.style}>Faça sua busca</h1>
          </S.SeachBoxHeader>
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
          {cards.map((card, index) => <BlogCard
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