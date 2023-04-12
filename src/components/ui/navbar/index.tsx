import Link from "next/link";
import Logo from "../logo";
import * as S from "./style";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <S.Container>
      <S.Wrapper>
        <Link href={"/home"}><S.Text><Logo /></S.Text></Link>
        <S.Nav>
          <Link href={"/gallery"}><S.Text style={inter.style}>Galeria</S.Text></Link>
          <Link href={"/blog"}><S.Text style={inter.style}>Blog</S.Text></Link>
          <Link href={"/gallery"}><S.Text style={inter.style}>Linkedin</S.Text></Link>
          <Link href={"/blog"}><S.Text style={inter.style}>Instagram</S.Text></Link>
        </S.Nav>
      </S.Wrapper>
    </S.Container>
  )
}