import { Inter } from "next/font/google";
import * as S from "./style";

interface IButton {
  text: string
  primary?: boolean
  secondary?: boolean
  width?: string
  onClick?: () => void
}

const inter = Inter({ subsets: ['latin'] })

export default function Button({
  text,
  primary,
  secondary,
  width,
  onClick
}: IButton) {
  return (
    <S.Wrapper 
      primary={primary} 
      secondary={secondary}
      width={width}
      onClick={onClick}
    >
      <p style={inter.style}>{text}</p>
    </S.Wrapper>
  )
}