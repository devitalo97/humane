import { Inter } from "next/font/google";
import * as S from "./style";
import Link from "next/link";

interface IButton {
  text: string
  primary?: boolean
  secondary?: boolean
  width?: string
  onClick?: () => void
  href?: string
}

const inter = Inter({ subsets: ['latin'] })

export default function Button({
  text,
  primary,
  secondary,
  width,
  onClick,
  href
}: IButton) {
  return (<>
    {href ?
      <S.Wrapper
        primary={primary}
        secondary={secondary}
        width={width}
        onClick={onClick}
      >
        <Link href={href}>
          <p style={inter.style}>{text}</p>
        </Link>
      </S.Wrapper>
      :
      <S.Wrapper
        primary={primary}
        secondary={secondary}
        width={width}
        onClick={onClick}
      >
        <p style={inter.style}>{text}</p>
      </S.Wrapper>
    }
  </>
  )
}