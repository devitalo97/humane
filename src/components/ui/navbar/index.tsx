import Link from "next/link";
import Logo from "../logo";
import * as S from "./style";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { titleByPathname } from "./data";

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  const { pathname } = useRouter()
  return (
    <S.Container>
      <S.Wrapper>
        <span>
          <Logo />
          <S.Title style={inter.style}>{titleByPathname[pathname]}</S.Title>
        </span>
        <S.Nav>
          <Link href={"/services"}><S.Text style={inter.style}>Serviços</S.Text></Link>
          <Link href={"/gallery"}><S.Text style={inter.style}>Galeria</S.Text></Link>
          <Link href={"/blog"}><S.Text style={inter.style}>Blog</S.Text></Link>
        </S.Nav>
      </S.Wrapper>
    </S.Container>
  )
}