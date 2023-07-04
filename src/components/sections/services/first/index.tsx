import { Inter } from 'next/font/google'
import * as S from './style'
import { Carousel } from '@/components/ui/carousel'
import ServiceCard from '@/components/ui/service_card'
import orientacaoCarreiraIcon from "@/assets/svgs/services/orientacao_carreira.svg"
import desenvolvimentoLiderIcon from "@/assets/svgs/services/desenvolvimento_lider.svg"
import gerenciamentoPessoasIcon from "@/assets/svgs/services/gerenciamento_pessoas.svg"
import remanejamentoColaboradoresIcon from "@/assets/svgs/services/remanejamento_colaboradores.svg"
import identificacaoTalentosIcon from "@/assets/svgs/services/identificacao_talentos.svg"
import analiseEquipesIcon from "@/assets/svgs/services/analise_equipes.svg"
import recrutamentoIcon from "@/assets/svgs/services/recrutamento_selecao.svg"


const inter = Inter({subsets: ['latin']})

export default function FirstSection() {
    const cards = [
    {
      name: 'Orientação de carreiras',
      src: orientacaoCarreiraIcon
    },
    {
      name: 'Desenvolvimento de líderes',
      src: desenvolvimentoLiderIcon
    },
    {
      name: 'Gerenciamento de pessoas',
      src: gerenciamentoPessoasIcon
    },
    {
      name: 'Remanejamento de Colaboradores',
      src: remanejamentoColaboradoresIcon
    },
    {
      name: 'Identificações de talentos',
      src: identificacaoTalentosIcon
    },
    {
      name: 'Análise de equipes',
      src: analiseEquipesIcon
    },
    {
      name: 'Recrutamento e Seleção',
      src: recrutamentoIcon
    }
  ]
  
  return (
    <S.Container>
      <S.NavGhost/>
      <S.Content>
        <S.Header>
            <S.TextLG dark style={inter.style}>
                Serviços
            </S.TextLG>
            <S.TextGroup gap='1em'>
                <S.Line>
                  <S.TextInfo 
                    dark 
                    style={inter.style}
                  >
                    Acreditamos que o autoconhecimento é a chave para o desenvolvimento pessoal e profissional, e é por isso que nossa empresa se dedica a ajudar as pessoas a se conhecerem melhor.
                  </S.TextInfo>
                </S.Line>
                <S.Line>
                    <S.TextM dark style={inter.style}>
                        Oferecemos uma variedade de serviços:
                    </S.TextM>
                </S.Line>
            </S.TextGroup>
        </S.Header>
        <Carousel>
          {[...cards, ...cards].map((card, index) => <ServiceCard 
              key={index}
              name={card.name}
              src={card.src}
            />)}
        </Carousel>
      </S.Content>
      <S.FooterGhost/>
    </S.Container>
  )
}