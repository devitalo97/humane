import { Inter } from "next/font/google";
import * as S from "./style";

interface IButton {
  text: string
}

const inter = Inter({ subsets: ['latin'] })

export default function Button(props: IButton) {
  return (
    <S.Wrapper>
        <p style={inter.style}>{props.text}</p>
    </S.Wrapper>
  )
}