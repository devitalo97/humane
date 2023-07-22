import Image from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";

interface Props {
  title: string
  author: string
  content: string
  date: string
  readTime: string
  src: string
  category: string
}

const inter = Inter({ subsets: ['latin'] })

export default function BlogCard({
  src,
  author,
  title,
  content,
  date,
  readTime,
  category
}: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextWrapper>
          {/* <S.Author style={inter.style}>{author}</S.Author> */}
          <S.Title style={inter.style}>{title}</S.Title>
          <S.Content style={inter.style}>{content}</S.Content>
          <div className="footer">
            <S.Text style={inter.style}>{date}</S.Text>
            <S.Point>.</S.Point>
            <S.Text style={inter.style}>{readTime}</S.Text>
            <S.Point>.</S.Point>
            <S.Category style={inter.style}>{category}</S.Category>
          </div>
        </S.TextWrapper>
        <span/>
        <S.ImageWrapper><Image src={src} alt="icon" /></S.ImageWrapper>
      </S.Wrapper>
    </S.Container>
  )
}