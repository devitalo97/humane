


import { Inter } from 'next/font/google'
import * as S from './style'
import ricardo from '@/assets/svgs/background_seventh_section.svg'
import Image from 'next/image'

const inter = Inter({subsets: ['latin']})

export default function SeventhSection() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextGroup>
          <S.Line>
            <S.TextLG dark style={inter.style}>
              Luiz Ricardo Pereira        
            </S.TextLG>
          </S.Line>
          <S.Line>
            <S.TextSM dark style={inter.style}>
              Olá, sou Luiz Ricardo, capixaba e apaixonado por pessoas. Há 29 anos iniciei minha carreira na área de vendas, onde me especializei em relacionamento com clientes. Desde então, venho buscando me 
              atualizar e me aprimorar profissionalmente.
              Minha base acadêmica é em Administração de Empresas, com especializações em Gestão Empresarial e Gestão Comercial em Marketing pela FGV (Fundação Getúlio Vargas) e Gestão da Liderança pela FDC (Fundação Dom Cabral). Acredito que é essencial investir em conhecimento para se destacar no mercado.
              Com o objetivo de melhorar minhas habilidades de liderança, busquei na Formação em Coaching Integral Sistêmico, Analista de Perfil Comportamental e Hipnoterapia Omni ferramentas valiosas para trabalhar com equipes comerciais, gestores e coordenadores. 
              Estou sempre aberto a novas oportunidades e desafios, 
              por isso, se você está buscando melhorar sua equipe comercial ou suas habilidades de liderança, vamos conversar! Estou à disposição para compartilhar minhas experiências e conhecimentos.            
            </S.TextSM>
          </S.Line>
        </S.TextGroup>
      </S.Wrapper>
      <S.ImageWrapper>
        <Image 
          src={ricardo} 
          alt="Foto do ricardo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </S.ImageWrapper>
    </S.Container>
  )
}
