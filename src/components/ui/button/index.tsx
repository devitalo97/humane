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
      <Link href={href}>
        <S.Wrapper 
          primary={primary} 
          secondary={secondary}
          width={width}
          onClick={onClick}
          onTouchMove={() => console.log(111111)}
        >
          <p style={inter.style}>{text}</p>
        </S.Wrapper>
      </Link>
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