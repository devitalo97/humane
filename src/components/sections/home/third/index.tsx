import { Inter } from 'next/font/google'
import * as S from './style'
import { animations } from './data'
import { AnimatePresence, useAnimation } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function ThirdSection() {
  const animation = useAnimation()
  const texts = [
    ["Vai te ajudar a entender seus medos e o que te", "motiva no seu dia a dia."],
    ["Vai conseguir se relacionar de forma mais", "harmonica com todos."],
    ["Vai conseguir entender pessoas com", "personalidades diferente da sua."],
    ["Vai melhorar seu desempenho na área profissional."],
    ["Vai se comunicar de uma forma que todos te entendam."],
    ["Vai evitar ruídos na sua comunicação."]
  ]
  return (
    <S.Container>
      <S.Wrapper>
        <S.HeaderGroup {...animations(animation).header}>
          <S.TextLG style={inter.style}>
            Como a análise de perfil comportamental pode te ajudar?
          </S.TextLG>
        </S.HeaderGroup>
        <S.TextGroup {...animations(animation).list}>
          {texts.map((text: string[], index: number) => {
            return (<>
              <S.Row {...animations(animation).item} key={index} flex={'calc(40% - 1em)'} gap="1em">
                <S.Box style={inter.style}>
                  {index + 1}
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
      </S.Wrapper>
    </S.Container>
  )
}
