export type About = {
  title: string;
  description: string;
  thumb: string;
  invert: boolean;
};

export const about: About[] = [
  {
    title: "A Humaning",
    description:
      "É uma empresa especializada em análise de perfil comportamental, cujo objetivo é ajudar as pessoas a descobrir seus pontos fortes e áreas de melhoria para alcançar seu potencial máximo. Com uma equipe de profissionais experientes e qualificados, a Humaning oferece uma abordagem personalizada e única para cada indivíduo, com base em suas características comportamentais.",
    thumb: "assets/about_illustration_0.svg",
    invert: false,
  },
  {
    title: "“Entender para Respeitar”",
    description:
      "Essa é uma frase muito importante no ambiente de trabalho, especialmente quando se trata de trabalhar em equipe. Quando entendemos as diferenças entre os membros da equipe, como suas personalidades, habilidades e perspectivas, podemos respeitar suas opiniões e trabalhar juntos de forma mais eficaz.",
    thumb: "assets/about_illustration_1.svg",
    invert: true,
  },
  {
    title: "Dados do mercado",
    description:
      "As empresas geralmente contratam por currículo e demitem por comportamento: 87% das organizações demitem profissionais em razão de suas atitudes, temperamento, falta de garra ou por problemas de relacionamento interpessoal. (Revista Você SA) Apenas 20% das pessoas acreditam que seus empregos as dão oportunidade de executar o que fazem de melhor na sua rotina diária. (Instituto Gallup)",
    thumb: "assets/about_illustration_2.svg",
    invert: false,
  },
  {
    title: "Ferramenta utilizada",
    description:
      "A Humaning utiliza o CIS Assessment, um software de inteligência comportamental rápido, intuitivo e fácil de usar, que economiza tempo e dinheiro na seleção dos candidatos. Fornece grande quantidade de informações do Perfi  Comportamental, como: melhor área de atuação, estilo de liderança, tomada de decisão, adequação atual a função exercida e muito mais. Foi desenvolvido pelo pesquisador e psicanalista Deibson Silva, com o apoio e direcionamento intelectual do PhD em Coaching, Paulo Vieira. O sistema possui laudo de confiabilidade baseado nos estudos do coeficiente alpha de cronbach e é validado pelo Departamento de Estatística da Universidade Federal do Ceará, apresentando um índice de 99% de precisão.",
    thumb: "assets/about_illustration_3.svg",
    invert: true,
  },
];
