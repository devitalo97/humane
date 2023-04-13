import * as S from "./style";
import { Inter, Prata } from "next/font/google";
import { AiOutlineClose } from 'react-icons/ai'
const inter = Inter({ subsets: ['latin'] })
const prata = Prata({ subsets: ['latin'], weight: "400"})

interface Props {
  title: string
  points: {
    weak: string[], 
    strong: string[]
  }
  onClose: () => void
}

export default function BehavioralProfileCard({
  title,
  points,
  onClose
}: Props) {

  return (
    <S.Wrapper>
      <S.Line 
        display="flex" 
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <S.Title dark style={inter.style} textTransform="capitalize">{title}</S.Title>
        <AiOutlineClose 
          color="var(--dark-color)"
          onClick={onClose}
        />
      </S.Line>
      <S.TextWrapper>
      {
        Object.keys(points).map((key) => <>
          <S.TextGroup gap="1em">
            <S.TextM highlight style={inter.style}>
              Pontos
              {key === 'weak' ? ' Fracos' : ' Fortes'}
            </S.TextM>
            <S.TextGroup gap=".5em">
              {points[key as 'weak' | 'strong'].map((point: string,index) => <S.Line key={index}><S.TextSM dark style={inter.style}>{point}</S.TextSM></S.Line>)}
            </S.TextGroup>
          </S.TextGroup>
        </>)
      }
      </S.TextWrapper>
      <S.Line>
        <S.TextESM dark style={inter.style}>*É importante lembrar que os pontos fortes e fracos não são bons ou ruins, mas sim características que podem ser desenvolvidas e aprimoradas.</S.TextESM>
      </S.Line>
    </S.Wrapper>
  )
}