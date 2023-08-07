import { Inter } from 'next/font/google'
import * as S from './style'
import blogThumb from "@/assets/svgs/blog_thumb.svg"
import postThumb from "@/assets/webp/post_thumb.webp"
import { RiArrowDownCircleLine } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'
import { useScroll, motion } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

export default function SearchSection() {
  const { scrollYProgress } = useScroll();
  const posts = [
    {
      author: 'Luiz Ricardo',
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an",
      content: "I love science-fiction series like “The Man in the High Castle” because they force us to question our ingrained assumption that history was…",
      date: 'Abril 27',
      readTime: '18 min',
      category: 'Saúde',
      src: blogThumb
    },
  ]
  return (
    <>
      <S.Progress style={{ scaleX: scrollYProgress }} />
      <S.Container>
        <S.NavGhost />
        <S.Content>
          <S.SearchBox>
            <Link href={'/blog'}>
              <S.SeachBoxContent>
                <RiArrowDownCircleLine />
              </S.SeachBoxContent>
            </Link>
          </S.SearchBox>
          <S.PostContainer>
            <S.PostHeader>
              <p>Lorem Ipsum is simply dummy</p>
              <p>Standard dummy text ever since the 1500s</p>
            </S.PostHeader>
            <S.PostThumb>
              <Image src={postThumb} fill alt="O lindo logotipo do MDN." />
            </S.PostThumb>
            <S.PostContent>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when anLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
              </p>
            </S.PostContent>
          </S.PostContainer>
        </S.Content>
      </S.Container>
    </>
  )
}