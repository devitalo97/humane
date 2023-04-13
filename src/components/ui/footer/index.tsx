import Link from "next/link";
import * as S from "./style";
import { Inter } from "next/font/google";
import logotipo from '@/assets/svgs/logotipo_humane.svg'
import Image from "next/image";
import linkedin from '@/assets/svgs/linkedin.svg'
import instagram from '@/assets/svgs/instagram.svg'
import facebook from '@/assets/svgs/facebook.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Line
            display="flex"        
            justifyContent="space-between"        
          >
          <Link href={"/"}>
            <Image src={logotipo} alt="Logo tipo humane"/>
          </Link>
          <S.Nav>
            <Link href={"/blog"}>
              <Image src={linkedin} alt="linkedin" />
            </Link>
            <Link href={"/gallery"}>
              <Image src={instagram} alt="instagram" />
            </Link>
            <Link href={"/blog"}>
              <Image src={facebook} alt="facebook" />
            </Link>
          </S.Nav>
        </S.Line>
        <S.Line
          display="flex"        
          justifyContent="flex-end"        
        >
          <S.Line 
            display="flex" 
            flexDirection="column" 
            alignItems="flex-end" 
          >
            <S.Text style={inter.style}>
              Português
            </S.Text>
            <S.Text style={inter.style}>
              Termos e Políticas de privacidade
            </S.Text>
            <S.Text style={inter.style}>
              Humane 2023 - Todos os direitos reservados
            </S.Text>
          </S.Line>
        </S.Line>
      </S.Wrapper>
    </S.Container>
  )
}