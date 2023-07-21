import * as S from './style'
import Image from 'next/image'
import { about } from './data'

export default function FirstSection() {

  return (
    <S.Container>
      <S.NavGhost />
      <S.Content>
        {about.map((item, index) => (
          <S.Hero key={index} invert={item.invert}>
            <S.HeroTextContent>
              <S.HeroTitle>{item.title}</S.HeroTitle>
              <S.HeroDescription>{item.description}</S.HeroDescription>
            </S.HeroTextContent>
            <S.HeroImageContent>
              <Image src={item.thumb} alt='' />
            </S.HeroImageContent>
          </S.Hero>
        ))}
      </S.Content>
    </S.Container>
  )
}