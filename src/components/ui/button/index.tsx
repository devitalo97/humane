import { Inter } from "next/font/google";
import * as S from "./style";

interface IButton {
  text: string
  primary?: boolean
  secondary?: boolean
  width?: string
}

const inter = Inter({ subsets: ['latin'] })

export default function Button({
  text,
  primary,
  secondary,
  width
}: IButton) {
  return (
    <S.Wrapper 
      primary={primary} 
      secondary={secondary}
      width={width}
    >
      <p style={inter.style}>{text}</p>
    </S.Wrapper>
  )
}