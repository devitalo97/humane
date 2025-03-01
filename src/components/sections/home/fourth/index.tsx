import { Inter } from "next/font/google";
import * as S from "./style";
import SocialProofCard from "@/components/ui/social_proof_card";
import { Carousel } from "@/components/ui/carousel";

const inter = Inter({ subsets: ["latin"] });

export default function FourthSection() {
  const cards = [
    {
      src: "/assets/person_andre.svg",
      comment:
        "Você não sabe o tamanho do auxílio que você me proporcionou. Consegui me entender e buscar aperfeiçoamento em áreas importantes.",
      name: "André Cavalcante",
      occupation: "Engenheiro",
    },
    {
      src: "/assets/person_neres.svg",
      comment:
        "Forneceu uma visão clara das minhas forças e fraquezas, além de me ajudar a identificar áreas que eu poderia melhorar. Ajustei meu comportamento e abordagem para me comunicar melhor com colegas de trabalho e clientes.",
      name: "Neres José",
      occupation: "Radialista",
    },
    {
      src: "/assets/person_italo.svg",
      comment:
        "A devolutiva e o relatório foram precisos e me ajudaram a entender melhor minhas forças e áreas de desenvolvimento.",
      name: "Ítalo de Souza",
      occupation: "Desenvolvedor",
    },
    {
      src: "/assets/person_bruna.svg",
      comment:
        "Descobrir meu perfil comportamental foi uma experiência muito valiosa. Me ajudou a entender melhor quem sou, como posso me comunicar de maneira mais eficaz. Eu super recomendo!!!",
      name: "Bruna Almeida",
      occupation: "Designer de Produto",
    },
    {
      src: "/assets/person_matheus.svg",
      comment:
        "A análise comportamental foi crucial para alinhar as lacunas que faltavam pra entender meu comportamento diante do trabalho, família, relacionamento e ambiente social.",
      name: "Matheus Porto",
      occupation: "Publicitário",
    },
    {
      src: "/assets/person_peterson.svg",
      comment:
        "A análise de perfil comportamental é um verdadeiro norte na busca pelo auto conhecimento, o que garante um bem estar em todos os campos de nossas vidas.",
      name: "Peterson Barcelos",
      occupation: "Psicólogo",
    },
  ];
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header style={inter.style}>O que os clientes dizem</S.Header>
        <Carousel>
          {[...cards, ...cards].map((card, index) => (
            <SocialProofCard
              key={index}
              name={card.name}
              occupation={card.occupation}
              comment={card.comment}
              src={card.src}
            />
          ))}
        </Carousel>

        {/* <S.CardWrapper>
          {cards.map((card, index) => <SocialProofCard 
            key={index}
            name={card.name}
            occupation={card.occupation}
            comment={card.comment}
            src={card.src}
          />)}
        </S.CardWrapper> */}
      </S.Wrapper>
    </S.Container>
  );
}
