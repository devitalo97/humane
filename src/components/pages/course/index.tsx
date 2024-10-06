import Disclosure from "@/components/ui/disclosure";
import * as S from "./style";
import { ColatinaCourseForm } from "@/components/ui/form/course/colatina";
import { BoaEsperancaCourseForm } from "@/components/ui/form/course/boa-esperanca";
import { VilaValerioCourseForm } from "@/components/ui/form/course/vila-valerio";
import { NovaVeneciaCourseForm } from "@/components/ui/form/course/nova-venecia";
import { ColatinaHumaningBButtonCourseForm } from "@/components/ui/form/course/colatina_humaning_bbutton";
import humaningIcon from "@/assets/svgs/logo_humaning_color.svg";
import bbuttonIcon from "@/assets/jpeg/logo_bbutton.jpeg";
import Image from "next/image";

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
              title: (
                <div className="relative w-full rounded">
                  Colatina - Projeto Entender para Atender.
                </div>
              ),
              content: (
                <>
                  <div
                    className="bg-white py-8 sm:py-16"
                    id="success-colatina-parceria-bbutton"
                  >
                    <div className="mx-auto">
                      <div className="mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                          <div className="relative overflow-hidden rounded-3xl bg-white px-6 pb-9 pt-16 shadow-2xl sm:px-12 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                            <div className="border-b border-gray-900/10 pb-12">
                              <ColatinaHumaningBButtonCourseForm
                                project_name="Colatina (Parceria BButton)- Projeto Entender para Atender."
                                htmlIdToScroll="success-colatina-parceria-bbutton"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <h1 className="mt-2 text-sm font-bold tracking-tight text-gray-900">
                              Uma parceira Humaning e BButton.
                            </h1>
                            <div className="flex gap-4 justify-start py-4">
                              <img
                                alt="Logo Humaning"
                                src={"./logo_humaning_color.svg"}
                                className="h-16 object-contain"
                              />
                              <img
                                alt="Logo Bbutton"
                                src={"./logo_bbutton.jpeg"}
                                className="h-16 object-contain"
                              />
                            </div>
                          </div>
                          <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-blue-600">
                              Vendas e Atendimento
                            </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                              Projeto Entender para Atender.
                            </h1>
                            <div className="max-w-xl">
                              <p className="mt-6">
                                Primeiro Módulo – Dia 04 de Novembro, 18:30 às
                                21:30
                              </p>
                              <p className="font-semibold">
                                Tema: Transforme seu Atendimento e Vendas com
                                Autoconhecimento.
                              </p>
                              <p className="mt-8">
                                Neste primeiro encontro, vamos trazer
                                consciência sobre como o entendimento do seu
                                Perfil Comportamental pode impulsionar sua
                                performance em vendas e atendimento. Cada um de
                                vocês receberá um relatório individual
                                detalhado, que revelará suas características
                                naturais e como elas podem ser utilizadas
                                estrategicamente para melhorar suas abordagens.
                                Ao conhecer melhor suas forças e áreas de
                                melhoria, você estará mais preparado para criar
                                conexões significativas com os clientes,
                                resultando em um atendimento mais eficaz e em um
                                aumento nas vendas. Este é o primeiro passo para
                                alinhar suas habilidades naturais com suas metas
                                profissionais, criando um caminho claro para o
                                sucesso.
                              </p>

                              <p className="mt-6">
                                Segundo Módulo - Dia 05 de Novembro, 18:30 às
                                21:30
                              </p>
                              <p className="font-semibold">
                                Tema: Aplicando a Análise SWOT para
                                Potencializar Vendas e Atendimento.
                              </p>
                              <div className="mt-8">
                                <p>
                                  Neste encontro, exploraremos como a Análise
                                  SWOT, aplicada aos perfis comportamentais,
                                  pode transformar sua abordagem em vendas e
                                  atendimento.
                                </p>
                                <ul className="list-disc pl-5 mt-4">
                                  <li>
                                    <strong>Forças:</strong> Identifique seus
                                    pontos fortes e como eles podem ser
                                    utilizados para maximizar resultados.
                                  </li>
                                  <li>
                                    <strong>Fraquezas:</strong> Reconheça áreas
                                    a serem desenvolvidas com base no seu
                                    comportamento.
                                  </li>
                                  <li>
                                    <strong>Oportunidades:</strong> Descubra
                                    como aproveitar suas características para
                                    gerar novos negócios.
                                  </li>
                                  <li>
                                    <strong>Ameaças:</strong> Avalie como
                                    enfrentar desafios externos, como a
                                    concorrência, a partir do seu perfil
                                    comportamental.
                                  </li>
                                </ul>
                                <p className="mt-4">
                                  Essa análise estratégica permitirá que você
                                  alinhe suas capacidades individuais com as
                                  exigências do mercado, criando um caminho
                                  sólido para o sucesso.
                                </p>
                              </div>

                              <p className="mt-6">
                                Terceiro Módulo - Dia 06 de Novembro, 18:30 às
                                22:00 21:30
                              </p>
                              <p className="font-semibold">
                                Tema: O Poder da Autorresponsabilidade:
                                Aplicando na Prática.
                              </p>
                              <p className="mt-8">
                                Neste encontro, vamos explorar as 6 Leis
                                mencionadas no livro &quot;O Poder da
                                Autorresponsabilidade&quot; e como aplicá-las no
                                dia a dia para aumentar harmonia e
                                produtividade. As 6 Leis são: Se é para criticar
                                os outros, cale-se; Se é pra reclamar, dê
                                sugestão; Se é para buscar culpados, busque
                                solução; Se é para se fazer de vítima, faça-se
                                de vencedor; Se é para justificar seus erros,
                                aprenda com eles; Se é para julgar as pessoas,
                                julgue suas atitudes. Ao incorporar essas leis,
                                você promoverá um ambiente mais colaborativo e
                                orientado para resultados, tornando-se um líder
                                mais eficaz e responsável.
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
              title: (
                <div className="relative w-full rounded">
                  <div className="absolute top-0 left-0 w-20 h-4 bg-red-500 text-white text-xs flex items-center justify-center transform rotate-[315deg] -translate-y-1/2 -translate-x-1/2 p-3 rounded-md">
                    Esgotado
                  </div>
                  Nova Venécia - Projeto Entender para Atender.
                </div>
              ),
              // content: (
              //   <>
              //     <div
              //       className="bg-white py-8 sm:py-16"
              //       id="success-nova-venecia"
              //     >
              //       <div className="mx-auto">
              //         <div className="mx-auto grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              //           <div className="lg:pr-4">
              //             <div className="relative overflow-hidden rounded-3xl bg-white px-6 pb-9 pt-16 shadow-2xl sm:px-12 lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              //               <div className="border-b border-gray-900/10 pb-12">
              //                 <NovaVeneciaCourseForm
              //                   project_name="Nova Venécia - Projeto Entender para Atender."
              //                   htmlIdToScroll="success-nova-venecia"
              //                 />
              //               </div>
              //             </div>
              //           </div>
              //           <div>
              //             <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              //               <p className="text-base font-semibold leading-7 text-blue-600">
              //                 Vendas e Atendimento
              //               </p>
              //               <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              //                 Projeto Entender para Atender.
              //               </h1>
              //               <div className="max-w-xl">
              //                 <p className="mt-6">
              //                   Primeiro Módulo – Dia 08 de Outubro, 18:30 às
              //                   21:30
              //                 </p>
              //                 <p className="font-semibold">
              //                   Tema: Transforme seu Atendimento e Vendas com
              //                   Autoconhecimento.
              //                 </p>
              //                 <p className="mt-8">
              //                   Neste primeiro encontro, vamos trazer
              //                   consciência sobre como o entendimento do seu
              //                   Perfil Comportamental pode impulsionar sua
              //                   performance em vendas e atendimento. Cada um de
              //                   vocês receberá um relatório individual
              //                   detalhado, que revelará suas características
              //                   naturais e como elas podem ser utilizadas
              //                   estrategicamente para melhorar suas abordagens.
              //                   Ao conhecer melhor suas forças e áreas de
              //                   melhoria, você estará mais preparado para criar
              //                   conexões significativas com os clientes,
              //                   resultando em um atendimento mais eficaz e em um
              //                   aumento nas vendas. Este é o primeiro passo para
              //                   alinhar suas habilidades naturais com suas metas
              //                   profissionais, criando um caminho claro para o
              //                   sucesso.
              //                 </p>

              //                 <p className="mt-6">
              //                   Segundo Módulo - Dia 09 de Outubro, 18:30 às
              //                   21:30
              //                 </p>
              //                 <p className="font-semibold">
              //                   Tema: Aplicando a Análise SWOT para
              //                   Potencializar Vendas e Atendimento.
              //                 </p>
              //                 <div className="mt-8">
              //                   <p>
              //                     Neste encontro, exploraremos como a Análise
              //                     SWOT, aplicada aos perfis comportamentais,
              //                     pode transformar sua abordagem em vendas e
              //                     atendimento.
              //                   </p>
              //                   <ul className="list-disc pl-5 mt-4">
              //                     <li>
              //                       <strong>Forças:</strong> Identifique seus
              //                       pontos fortes e como eles podem ser
              //                       utilizados para maximizar resultados.
              //                     </li>
              //                     <li>
              //                       <strong>Fraquezas:</strong> Reconheça áreas
              //                       a serem desenvolvidas com base no seu
              //                       comportamento.
              //                     </li>
              //                     <li>
              //                       <strong>Oportunidades:</strong> Descubra
              //                       como aproveitar suas características para
              //                       gerar novos negócios.
              //                     </li>
              //                     <li>
              //                       <strong>Ameaças:</strong> Avalie como
              //                       enfrentar desafios externos, como a
              //                       concorrência, a partir do seu perfil
              //                       comportamental.
              //                     </li>
              //                   </ul>
              //                   <p className="mt-4">
              //                     Essa análise estratégica permitirá que você
              //                     alinhe suas capacidades individuais com as
              //                     exigências do mercado, criando um caminho
              //                     sólido para o sucesso.
              //                   </p>
              //                 </div>

              //                 <p className="mt-6">
              //                   Terceiro Módulo Dia 10 de Outubro, 18:30 às
              //                   22:00 21:30
              //                 </p>
              //                 <p className="font-semibold">
              //                   Tema: O Poder da Autorresponsabilidade:
              //                   Aplicando na Prática.
              //                 </p>
              //                 <p className="mt-8">
              //                   Neste encontro, vamos explorar as 6 Leis
              //                   mencionadas no livro &quot;O Poder da
              //                   Autorresponsabilidade&quot; e como aplicá-las no
              //                   dia a dia para aumentar harmonia e
              //                   produtividade. As 6 Leis são: Se é para criticar
              //                   os outros, cale-se; Se é pra reclamar, dê
              //                   sugestão; Se é para buscar culpados, busque
              //                   solução; Se é para se fazer de vítima, faça-se
              //                   de vencedor; Se é para justificar seus erros,
              //                   aprenda com eles; Se é para julgar as pessoas,
              //                   julgue suas atitudes. Ao incorporar essas leis,
              //                   você promoverá um ambiente mais colaborativo e
              //                   orientado para resultados, tornando-se um líder
              //                   mais eficaz e responsável.
              //                 </p>
              //               </div>
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   </>
              // ),
            },
            {
              title: (
                <div className="relative w-full rounded">
                  <div className="absolute top-0 left-0 w-20 h-4 bg-red-500 text-white text-xs flex items-center justify-center transform rotate-[315deg] -translate-y-1/2 -translate-x-1/2 p-3 rounded-md">
                    Esgotado
                  </div>
                  Vila Valério - Projeto Entender para Atender.
                </div>
              ),
            },
            {
              title: (
                <div className="relative w-full rounded">
                  <div className="absolute top-0 left-0 w-20 h-4 bg-red-500 text-white text-xs flex items-center justify-center transform rotate-[315deg] -translate-y-1/2 -translate-x-1/2 p-3 rounded-md">
                    Esgotado
                  </div>
                  Colatina - Capacitação em Vendas e Atendimento com base na
                  Análise de Perfil.
                </div>
              ),
            },
            {
              title: (
                <div className="relative w-full rounded">
                  <div className="absolute top-0 left-0 w-20 h-4 bg-red-500 text-white text-xs flex items-center justify-center transform rotate-[315deg] -translate-y-1/2 -translate-x-1/2 p-3 rounded-md">
                    Esgotado
                  </div>
                  Boa Esperança - Capacitação em Vendas e Atendimento com base
                  na Análise de Perfil.,
                </div>
              ),
            },
          ]}
        />
      </S.Content>
    </S.Container>
  );
}
