import Disclosure from "@/components/ui/disclosure";
import * as S from "./style";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Radio from "@/components/ui/radio";
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
              Cursos e Treinamentos
            </h1>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Conheça nossos Treinamentos
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            Abaixo segue uma lista de todos os nossos cursos e treinamentos
            disponíveis no momento. Leia com atenção e escolha aquele que melhor
            te atender. Preencha o formulário e entraremos em contato para
            efetivar sua inscrição.
          </p>
        </div>
        <Disclosure
          options={[
            {
              title: "Programa de Desenvolvimento em Vendas e Atendimento.",
              content: (
                <>
                  <div className="bg-white py-8 sm:py-16">
                    <div className="mx-auto">
                      <div className="mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                          <div className="relative overflow-hidden rounded-3xl bg-white px-6 pb-9 pt-16 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <div className="border-b border-gray-900/10 pb-12">
                              <h2 className="text-base font-semibold leading-7 text-gray-900">
                                Informações pessoais
                              </h2>
                              <p className="mt-1 text-sm leading-6 text-gray-600">
                                Preencha o formulário abaixo com o seus dados.
                                Entraremos em contato.
                              </p>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Nome
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      autoComplete="given-name"
                                      placeholder="João"
                                      className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-3">
                                  <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Celular
                                  </label>
                                  <div className="relative mt-2 rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                      <label
                                        htmlFor="country"
                                        className="sr-only"
                                      >
                                        Country
                                      </label>
                                      <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        className="h-full rounded-md border-0 bg-transparent py-0 pl-3  text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                                      >
                                        <option selected={true}>BR</option>
                                      </select>
                                    </div>
                                    <input
                                      type="text"
                                      name="phone-number"
                                      id="phone-number"
                                      className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                      placeholder="(27) 99458 9874"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-4">
                                  <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Email
                                  </label>
                                  <div className="relative mt-2 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                      <EnvelopeIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                      placeholder="you@example.com"
                                    />
                                  </div>
                                </div>

                                <div className="col-span-full">
                                  <label
                                    htmlFor="enterprise-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                  >
                                    Nome da empresa
                                  </label>
                                  <div className="mt-2">
                                    <input
                                      type="text"
                                      name="enterprise-name"
                                      id="enterprise-name"
                                      autoComplete="enterprise-name"
                                      placeholder="Empresa XPTO"
                                      className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                    />
                                  </div>
                                </div>

                                <div className="sm:col-span-5">
                                  <Radio
                                    name="payment_method"
                                    label="Método de pagamento"
                                    options={[
                                      {
                                        label:
                                          "Integrante de empresa associada à CDL de Nova Venécia. R$ 250,00.",
                                      },
                                      {
                                        label: "Não associados. R$ 450,00.",
                                      },
                                    ]}
                                  />
                                </div>

                                <div className="sm:col-span-6">
                                  <Radio
                                    name="payment_type"
                                    label="Forma de pagamento"
                                    options={[
                                      {
                                        label:
                                          "Pessoa Física: Catão de Crédito ( 30 dias) ou à vista pelo Pix ou Link.",
                                      },
                                      {
                                        label:
                                          "Pessoa Jurídica: Cartão de Crédito, Boleto ( 30 dias ) ou à vista pelo Pix ou Link.",
                                      },
                                    ]}
                                  />
                                </div>

                                <div className="sm:col-span-7">
                                  <button
                                    type="submit"
                                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                  >
                                    Solicitar Inscrição
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-blue-600">
                              Vendas e Atendimento
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                              Venda com qualidade
                            </h1>
                            <div className="max-w-xl">
                              <p className="mt-6">
                                Primeiro Módulo – Dia 07 de Maio, 19:30 às
                                22:00.
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
                                Segundo Módulo – Dia 14 de Maio, 19:30 às 22:00.
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
                                Terceiro Módulo - Dia 21 de Maio, 19:30 às
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
                                Quarto Módulo: Dia 28 de Maio, 19:30.
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
