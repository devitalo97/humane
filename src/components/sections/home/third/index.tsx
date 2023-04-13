import { Inter } from 'next/font/google'
import * as S from './style'
import img from '@/assets/svgs/background_third_section.svg'
import Image from 'next/image'

const inter = Inter({subsets: ['latin']})

export default function ThirdSection() {
  const texts = [
    ["Vai te ajudar a entender seus medos e o que te", "motiva a fazer o que você faz no seu dia a dia."],
    ["Vai conseguir se relacionar de forma mais", "harmoniosa com todos que o cerca."],
    ["Vai conseguir se relacionar com pessoas de", "personalidade diferente da sua."],
    ["Vai melhorar seu desempenho na área profissional."],
    ["Vai se comunicar de uma forma que todos te", "entendam e ao mesmo tempo evitar conflitos", "por ruidos na sua comunicação"]
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
              maxHeight: "100%",
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
                Como a análise de perfil         
              </S.TextLG>
            </S.Line>
            <S.Line>
              <S.TextLG style={inter.style}>
                comportamental pode te ajudar?    
              </S.TextLG>
            </S.Line>
          </S.TextGroup>
          <S.TextGroup gap='2em'>
            {texts.map((text: string[], index: number) => {
              return (<>
                <S.Row key={index} gap="1em">
                  <S.Box style={inter.style}>
                    {index+1}         
                  </S.Box>
                  <S.Row column>
                    {
                      text.map((t, index) => <S.Line key={index}><S.TextSM style={inter.style}>{t}</S.TextSM></S.Line>)
                    }
                  </S.Row>
                </S.Row>
              </>)
            })}
          </S.TextGroup>
        </S.TextWrapper>
        </S.Glue>
      </S.Wrapper>
    </S.Container>
  )
}
