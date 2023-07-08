


import { Inter } from 'next/font/google'
import * as S from './style'
import Button from '@/components/ui/button'

const inter = Inter({subsets: ['latin']})

export default function SecondSection() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.VideoWrapper>
          <video controls style={{width: "100%", height: '100%'}}>
            <source src="/humane_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </S.VideoWrapper>
        <S.TextWrapper>
          <S.TextGroup 
            gap="2em"
          >
            <S.TextGroup>
              <S.Line>
                <S.TextLG style={inter.style}>
                Análise de          
                </S.TextLG>
              </S.Line>
              <S.Line>
                <S.TextM highlight style={inter.style}>
                  Perfil Comportamental    
                </S.TextM>
              </S.Line>
            </S.TextGroup>

            <S.Line>
              <S.TextSM bw style={inter.style}>
              Quantas vezes você já foi chamado de mandão? Talvez rotulado como chato ou distraído, quem sabe até indeciso. Essas palavras podem ter ecoado em sua vida, causando confusão e dor. Mas há uma luz que pode iluminar seu caminho: a importância de se conhecer através da Análise de Perfil Comportamental.
              </S.TextSM>
            </S.Line>
          </S.TextGroup>
          <Button text='Conheça nossos serviços' href='/services'/>
        </S.TextWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
