import Disclosure from "@/components/ui/disclosure";
import * as S from "./style";
import { ColatinaCourseForm } from "@/components/ui/form/course/colatina";
import { BoaEsperancaCourseForm } from "@/components/ui/form/course/boa-esperanca";
const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];
export default function FirstSection() {
  return (
    <S.Container>
      <S.NavGhost />
      <S.Content>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-base font-semibold leading-7 text-blue-600">
              Treinamentos
            </h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Conheça nossos Treinamentos
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Abaixo segue uma lista de todos os nossos treinamentos disponíveis
            no momento. Leia com atenção e escolha aquele que melhor te atender.
            Preencha o formulário e entraremos em contato para efetivar sua
            inscrição.
          </p>
        </div>
        <Disclosure
          options={[
            {
              title:
                "Colatina - Capacitação em Vendas e Atendimento com base na Análise de Perfil.",
              content: (
                <>
                  <div className="bg-white py-8 sm:py-16" id="success-colatina">
                    <div className="mx-auto">
                      <div className="mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                          <div className="relative overflow-hidden rounded-3xl bg-white px-6 pb-9 pt-16 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <div className="border-b border-gray-900/10 pb-12">
                              <ColatinaCourseForm
                                project_name="Colatina - Capacitação em Vendas e Atendimento com base na Análise de Perfil."
                                htmlIdToScroll="success-colatina"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-blue-600">
                              Vendas e Atendimento
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                              Capacitação em Vendas e Atendimento
                            </h1>
                            <div className="max-w-xl">
                              <p className="mt-6">
                                Primeiro Módulo – Dia 22 de Julho, 18:30 às
                                22:00.
                              </p>
                              <p className="font-semibold">
                                Tema: Entender para Atender.
                              </p>
                              <p className="mt-8">
                                Neste primeiro encontro vamos trazer consciência
                                sobre o dia a dia do colaborador e como sua
                                atuação no atendimento ou vendas pode melhorar
                                através do entendimento do Perfil
                                Comportamental. Todos irão receber o seu
                                relatório individual completo com informações
                                sobre o seu Perfil Comportamental e entenderão
                                como as características naturais contribuirão
                                para o aumento de performance nas vendas e no
                                atendimento.
                              </p>

                              <p className="mt-6">
                                Segundo Módulo - Dia 24 de Julho, 18:30 às
                                22:00.
                              </p>
                              <p className="font-semibold">
                                Tema: Aplicação da Análise SWOT para Vendas e
                                Atendimento.
                              </p>
                              <p className="mt-8">
                                A análise SWOT aplicada aos perfis
                                comportamentais permite analisar: Forças:
                                Identificar pontos fortes individuais.
                                Fraquezas: Reconhecer deficiências baseadas em
                                comportamentos. Oportunidades: Explorar como as
                                características comportamentais podem ser
                                aproveitadas para buscar oportunidades de gerar
                                novos negócios. Ameaças: Avaliar como os perfis
                                comportamentais podem enfrentar desafios
                                externos, como a concorrência.
                              </p>

                              <p className="mt-6">
                                Terceiro Módulo Dia 25 de Julho, 18:30 às 22:00
                                22:00.
                              </p>
                              <p className="font-semibold">
                                Tema: O Poder da Autorresponsabilidade.
                              </p>
                              <p className="mt-8">
                                Nesta etapa vamos abordar as 6 Leis mencionadas
                                no Livro “ O Poder da Autorresponsabilidade” e
                                demonstrar de forma prática como aplica-las no
                                dia a dia, promovendo harmonia e produtividade.
                                As 6 Leis são: Se é para criticar os outros,
                                cale-se; Se é pra reclamar, dê sugestão; Se é
                                para buscar culpados, busque solução; Se é para
                                se fazer de vítima, faça-se de vencedor; Se é
                                para justificar seus erros, aprenda com eles; Se
                                é para julgar as pessoas, julgue suas atitudes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ),
            },

            {
              title:
                "Boa Esperança - Capacitação em Vendas e Atendimento com base na Análise de Perfil.",
              content: (
                <>
                  <div
                    className="bg-white py-8 sm:py-16"
                    id="success-boa-esperanca"
                  >
                    <div className="mx-auto">
                      <div className="mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                          <div className="relative overflow-hidden rounded-3xl bg-white px-6 pb-9 pt-16 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <div className="border-b border-gray-900/10 pb-12">
                              <BoaEsperancaCourseForm
                                project_name="Boa Esperança - Capacitação em Vendas e Atendimento com base na Análise de Perfil."
                                htmlIdToScroll="success-boa-esperanca"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-blue-600">
                              Vendas e Atendimento
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                              Capacitação em Vendas e Atendimento
                            </h1>
                            <div className="max-w-xl">
                              <p className="mt-6">
                                Primeiro Módulo – Dia 16 de Julho, 18:30 às
                                21:30.
                              </p>
                              <p className="font-semibold">
                                Tema: Entender para Atender.
                              </p>
                              <p className="mt-8">
                                Neste primeiro encontro vamos trazer consciência
                                sobre o dia a dia do colaborador e como sua
                                atuação no atendimento ou vendas pode melhorar
                                através da INTELIGÊNCIA EMOCIONAL.
                              </p>

                              <p className="mt-6">
                                Segundo Módulo – Dia 23 de Julho, 18:30 às
                                21:30.
                              </p>
                              <p className="font-semibold">
                                Tema: Descubra seu Perfil Comportamental.
                              </p>
                              <p className="mt-8">
                                Neste segundo encontro todos irão receber o seu
                                relatório individual completo com informações
                                sobre o seu Perfil Comportamental e entenderão
                                como as características naturais contribuirão
                                para o aumento de performance nas vendas e no
                                atendimento.
                              </p>

                              <p className="mt-6">
                                Terceiro Módulo - Dia 30 de Julho, 18:30 às
                                21:30.
                              </p>
                              <p className="font-semibold">
                                Tema: Aplicação da Análise SWOT para Vendas e
                                Atendimento.
                              </p>
                              <p className="mt-8">
                                A análise SWOT aplicada aos perfis
                                comportamentais permite analisar: Forças:
                                Identificar pontos fortes individuais.
                                Fraquezas: Reconhecer deficiências baseadas em
                                comportamentos. Oportunidades: Explorar como as
                                características comportamentais podem ser
                                aproveitadas para buscar oportunidades de gerar
                                novos negócios. Ameaças: Avaliar como os perfis
                                comportamentais podem enfrentar desafios
                                externos, como a concorrência.
                              </p>

                              <p className="mt-6">
                                Quarto Módulo: Dia 06 de Agosto, 18:30 às 21:30.
                              </p>
                              <p className="font-semibold">
                                Tema: O Poder da Autorresponsabilidade.
                              </p>
                              <p className="mt-8">
                                Nesta etapa vamos abordar as 6 Leis mencionadas
                                no Livro “ O Poder da Autorresponsabilidade” e
                                demonstrar de forma prática como aplica-las no
                                dia a dia, promovendo harmonia e produtividade.
                                As 6 Leis são: Se é para criticar os outros,
                                cale-se; Se é pra reclamar, dê sugestão; Se é
                                para buscar culpados, busque solução; Se é para
                                se fazer de vítima, faça-se de vencedor; Se é
                                para justificar seus erros, aprenda com eles; Se
                                é para julgar as pessoas, julgue suas atitudes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ),
            },
          ]}
        />
      </S.Content>
    </S.Container>
  );
}
