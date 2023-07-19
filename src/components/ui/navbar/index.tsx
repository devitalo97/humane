import Link from "next/link";
import Logo from "../logo";
import * as S from "./style";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { titleByPathname } from "./data";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  const { pathname } = useRouter()
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 5 * 16);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Container inHome={pathname === '/'} isScrolled={isScrolled}>
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