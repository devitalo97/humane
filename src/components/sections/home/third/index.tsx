


import { Inter } from 'next/font/google'
import * as S from './style'
import img from '@/svgs/background_third_section.svg'
import Image from 'next/image'

const inter = Inter({subsets: ['latin']})

export default function ThirdSection() {
  return (
    <S.Container>
      <S.Wrapper>
        <Image 
            alt="Imagem de uma menina ruiva" 
            src={img}
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover"
            }}
          />
      </S.Wrapper>
    </S.Container>
  )
}
