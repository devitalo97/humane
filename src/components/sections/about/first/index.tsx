import * as S from "./style";
import Image from "next/image";
import { about } from "./data";

export default function FirstSection() {
  return (
    <S.Container>
      <S.NavGhost />
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Luiz Ricardo.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Luiz Ricardo Pereira de Souza é um profissional com 25 anos de
                  experiência no mercado de vendas e atendimento. Ao longo de
                  sua trajetória, atuou em empresas renomadas como a Rádio Nova
                  Onda FM, Rede Gazeta e Findes, onde atual ao lado de grandes
                  profissionais em todo o Espírito Santo.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Graduado em Administração de Empresas inscrito no CRA/ES
                  30449, Luiz Ricardo possui MBAs em Gestão Comercial e
                  Marketing, além de Gestão Empresarial pela FGV. Ele também se
                  aprofundou em liderança através de programa FDV em parceria
                  com a Fundação Dom Cabral e se especializou na área
                  comportamental, com formações em Gestão do Perfil
                  Comportamental, Hipnoterapia e Coaching Integral Sistêmico.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Atualmente, Luiz Ricardo capacita profissionais a explorarem
                  todo o potencial da sua comunicação natural por meio do
                  projeto Humaning focado no desenvolvimento humano. Desde 2022,
                  mais de 4.400 pessoas já foram impactadas pelo programa
                  &quot;Entender para Atender&quot;, que tem como base a Análise
                  de Perfil Comportamental.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Entre suas principais características estão o foco em
                  resultados, a objetividade, a comunicação clara e um olhar
                  sistêmico voltado para as pessoas.
                </p>
              </div>
              <img
                alt=""
                src="/ricardo.jpg"
                className="mt-10 aspect-auto w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <S.Content>
              {about.map((item, index) => (
                <S.Hero key={index} invert={item.invert}>
                  <S.HeroTextContent>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {item.title}
                    </h2>
                    <p className="mt-6 text-xl leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </S.HeroTextContent>
                  <S.HeroImageContent>
                    <Image src={item.thumb} alt="" />
                  </S.HeroImageContent>
                </S.Hero>
              ))}
            </S.Content>
          </div>
        </div>
      </main>
    </S.Container>
  );
}
