import { Inter } from 'next/font/google'
import * as S from './style'
import img from '@/assets/svgs/background_fifth_section.svg'
import Image from 'next/image'
import Button from '@/components/ui/button'

const inter = Inter({subsets: ['latin']})

export default function FifthSection() {
  const texts = [
    'Dominante',
    'Influente',
    'Estável',
    'Conforme',
  ]
  return (
    <S.Container>
      <S.Wrapper>
        <S.Glue>
        <S.ImageWrapper>
          <Image 
            alt="Imagem de uma menina ruiva" 
            src={img}
            style={{
              borderRadius: '3em',
              boxShadow: '12px 10px 28px -3px rgba(0,0,0,0.1)',
              maxWidth: "100%",
              height: 'auto'
            }}
          />
        </S.ImageWrapper>
        <S.TextWrapper style={{
          width: "fit-content", 
          zIndex: 3, 
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          }}>
          <S.TextGroup>
            <S.Line>
              <S.TextLG style={inter.style}>
              Pontos Fortes e Pontos Fracos 
              </S.TextLG>
            </S.Line>
            <S.Line>
              <S.TextLG style={inter.style}>
                de cada perfil     
              </S.TextLG>
            </S.Line>
          </S.TextGroup>
          <S.TextGroup gap='2em'>
            {texts.map((text: string, index: number) => {
              return (<>
                  <Button width="100%" text={text} secondary/>
              </>)
            })}
          </S.TextGroup>
        </S.TextWrapper>
        </S.Glue>
      </S.Wrapper>
    </S.Container>
  )
}
