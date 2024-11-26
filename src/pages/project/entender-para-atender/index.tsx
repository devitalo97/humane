"use client";
import {
  ArrowPathIcon,
  FingerPrintIcon,
  PresentationChartLineIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import Header from "@/components/ui/head";
import Image from "next/image";
import { EntenderParaAtenderForm } from "@/components/ui/form/project/entender-para-atender";

const features = [
  {
    name: "Melhora na Comunicação Interna",
    description:
      "Compreender o perfil comportamental de cada colaborador cria um ambiente onde a comunicação é mais clara, objetiva e empática.",
    icon: ArrowPathIcon, // Escolha o ícone apropriado ou substitua conforme necessidade.
  },
  {
    name: "Aumento da Produtividade",
    description:
      "Times que se conhecem melhor são mais colaborativos e ágeis na resolução de problemas, otimizando processos e entregas.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Liderança Personalizada",
    description:
      "Líderes aprendem a adaptar seu estilo de gestão, extraindo o melhor de cada membro da equipe, respeitando as individualidades.",
    icon: QueueListIcon,
  },
  {
    name: "Ambiente Mais Saudável",
    description:
      "Reduzir conflitos e aumentar o respeito mútuo são resultados naturais dessa experiência, que preza pela integridade e ética no ambiente de trabalho.",
    icon: FingerPrintIcon,
  },
];

const tiers = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "$19",
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$49",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: false,
  },
];
const faqs = [
  {
    id: 1,
    question: "Como essa palestra pode beneficiar a minha empresa ou equipe?",
    answer:
      "Ela melhora a comunicação e o trabalho em equipe, promovendo um ambiente mais produtivo e ético, com colaboradores mais engajados.",
  },
  {
    id: 2,
    question:
      "A palestra pode ser personalizada para as necessidades específicas da minha organização?",
    answer:
      "Sim! Podemos ajustar o conteúdo para se alinhar à cultura e aos desafios da sua equipe.",
  },
  {
    id: 3,
    question: "Qual é a duração da palestra e como ela é organizada?",
    answer:
      "A palestra é dinâmica e pode durar entre 01:30 e 02:00, sendo dividida em três partes: perfis comportamentais, ferramentas de gestão práticas e reflexões sobre ética e autorresponsabilidade no ambiente de trabalho.",
  },
  {
    id: 4,
    question:
      "Qual o diferencial dessa palestra em comparação com outras abordagens de desenvolvimento?",
    answer:
      "A união de perfis comportamentais com ferramentas práticas e temas motivadores, gerando mudanças reais e duradouras.",
  },
  {
    id: 5,
    question:
      "Quais resultados práticos posso esperar para a minha equipe após a palestra?",
    answer:
      "Melhoria na comunicação, redução de conflitos, aumento da produtividade e um ambiente mais ético e colaborativo.",
  },
];

export default function Example() {
  return (
    <>
      <Header
        title="Entender para Atender"
        content="Saiba mais sobre nosso projeto Entender para Atender."
      />
      <div className="bg-white">
        <main className="isolate">
          {/* Hero section */}
          <div className="relative pt-14">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <div className="py-24 sm:py-32 lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto text-center flex flex-col items-center">
                  <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Transforme sua equipe com o programa Entender para Atender
                  </h1>
                  <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg/8 text-gray-600">
                    Transformar pessoas é o caminho para transformar
                    organizações de qualquer segmento, sejam empresas privadas
                    ou secretarias governamentais de toda a hierarquia de uma
                    prefeitura. O Entender para Atender evoluiu para um programa
                    completo, com palestra e workshop, oferecendo ferramentas
                    para desenvolver pessoas e alcançar resultados sustentáveis.
                    Confira abaixo os vídeos que apresentam um pouco mais sobre
                    o Programa.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#contact-form-section"
                      className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Quero Contratar
                    </a>
                    {/* <a
                      href="#"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Saiba mais <span aria-hidden="true">→</span>
                    </a> */}
                  </div>
                </div>
                <div className="mt-16 flow-root sm:mt-24">
                  <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                    <Image
                      alt="App screenshot"
                      src="/entender_para_atender.jpg"
                      width={2432}
                      height={1442}
                      className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>

          {/* Logo cloud */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 flex justify-center">
              <p className="relative rounded-full px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
                <a href="#" className="font-semibold text-blue-600">
                  <span aria-hidden="true" className="absolute inset-0" />{" "}
                  Confiança e Excelência
                </a>{" "}
                <span className="hidden md:inline">
                  Confira algumas das organizações que confiaram nos nossos
                  serviços
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center">
              {[
                { src: "/partners/1.svg", alt: "1.svg" },
                { src: "/partners/2.svg", alt: "2.svg" },
                { src: "/partners/3.svg", alt: "3.svg" },
                { src: "/partners/4.svg", alt: "4.svg" },
                { src: "/partners/5.svg", alt: "5.svg" },
                { src: "/partners/6.svg", alt: "6.svg" },
                { src: "/partners/7.svg", alt: "7.svg" },
                { src: "/partners/8.svg", alt: "8.svg" },
                { src: "/partners/9.svg", alt: "9.svg" },
                { src: "/partners/10.svg", alt: "10.svg" },
                { src: "/partners/11.svg", alt: "11.svg" },
                { src: "/partners/12.svg", alt: "12.svg" },
                { src: "/partners/13.svg", alt: "13.svg" },
                { src: "/partners/14.svg", alt: "14.svg" },
                { src: "/partners/15.svg", alt: "15.svg" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 mix-blend-multiply relative w-full h-28 bg-white flex justify-center items-center"
                >
                  <Image
                    alt={image.alt}
                    src={image.src}
                    width={150}
                    height={150}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Video section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base/7 font-semibold text-blue-600">
                  Assita e Inspire-se
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Um novo olhar para o Futuro
                </p>
                <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                  Descubra como nossas iniciativas podem transformar sua equipe
                  e criar conexões reais e duradouras.
                </p>
              </div>
              <div className="mt-16 mx-auto w-full max-w-4xl">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                    src="https://www.youtube.com/embed/nedzTjTjUK4"
                    title="Vídeo de apresentação"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="mt-16 mx-auto max-w-4xl lg:text-start">
                <h2 className="text-base/7 font-semibold text-blue-600">
                  Aprenda e Pratique
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Palestra
                </p>
              </div>
              <div className="mt-8 mx-auto max-w-4xl space-y-8 text-gray-600 text-start">
                <p>
                  A palestra <strong>Entender para Atender</strong> vai além da
                  motivação convencional: ela é uma jornada de consciência e
                  transformação pessoal e profissional. Mais do que inspirar, o
                  conteúdo oferece uma base sólida para que cada participante
                  compreenda o porquê de suas ações, comportamentos e resultados
                  no ambiente de trabalho e na vida.
                </p>
                <p className="font-semibold">Principais diferenciais:</p>
                <ul className="list-disc list-inside space-y-4">
                  <li>
                    <strong>1. Consciência do Ser:</strong> O ponto central da
                    palestra é trazer clareza sobre como cada perfil
                    comportamental molda a forma de se comunicar, atender e
                    liderar. Essa compreensão vai além da teoria e desperta uma
                    consciência profunda sobre a importância de melhorar
                    continuamente.
                  </li>
                  <li>
                    <strong>2. De Motivação à Automotivação:</strong> Ao
                    entender o porquê de mudar, a motivação deixa de ser externa
                    e passa a ser interna, gerando automotivação. É essa
                    transformação que leva os participantes a agir com propósito
                    e constância.
                  </li>
                  <li>
                    <strong>3. Resultados Sustentáveis:</strong> A palestra não
                    é sobre discursos temporários, mas sobre gerar mudanças
                    reais e sustentáveis por meio do autoconhecimento e da
                    aplicação prática dos aprendizados.
                  </li>
                </ul>
                <p className="font-semibold">O Impacto:</p>
                <p>
                  Quando entendemos nossos comportamentos, alinhamos forças e
                  identificamos oportunidades de crescimento, conseguimos não
                  apenas nos conectar melhor com os outros, mas também criar um
                  ambiente mais colaborativo, produtivo e humanizado. Isso se
                  traduz em{" "}
                  <strong>
                    {" "}
                    atendimentos mais eficazes, lideranças mais conscientes e
                    equipes mais engajadas.
                  </strong>
                </p>
                <p>
                  <strong>Entender para Atender</strong> é, antes de tudo, um
                  convite à evolução — uma palestra que transforma o olhar sobre
                  nós mesmos e sobre os desafios, gerando uma mudança de dentro
                  para fora, com resultados que permanecem.
                </p>
              </div>

              <div className="mt-16 mx-auto max-w-4xl lg:text-start">
                <h2 className="text-base/7 font-semibold text-blue-600">
                  Aprenda e Pratique
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Workshop
                </p>
                <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                  Aprenda a aplicar práticas de autoconhecimento e empatia para
                  otimizar a performance de sua equipe e alcançar resultados
                  estratégicos através do nosso Workshop.
                </p>
              </div>
              <div className="mt-16 mx-auto w-full max-w-4xl">
                <div
                  className="relative w-full"
                  style={{ paddingTop: "56.25%" }}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                    src="https://firebasestorage.googleapis.com/v0/b/car-wash-acdb0.appspot.com/o/humane%2FVideo%20Workshop.mp4?alt=media&token=97c650a8-19ea-439f-903e-b793db56f9d0"
                    title="Vídeo de apresentação"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="mt-16 mx-auto max-w-4xl space-y-8 text-gray-600 text-start">
                <p>
                  O workshop do programa <strong>Entender para Atender</strong>{" "}
                  oferece uma experiência transformadora com duração de 10
                  horas, podendo ser realizado em uma imersão única ou dividido
                  em 2 ou 3 módulos consecutivos, garantindo flexibilidade para
                  atender às necessidades da sua organização.
                </p>
                <p>
                  Todos os participantes receberão um relatório completo e
                  individual sobre seu perfil comportamental, fornecendo
                  insights poderosos para melhorar sua performance. Além disso,
                  cada participante ganhará um exemplar do livro{" "}
                  <em>O Poder da Autorresponsabilidade</em>, que será trabalhado
                  como parte do conteúdo do workshop.
                </p>
                <p className="font-semibold">
                  O conteúdo programático está dividido em três módulos
                  estratégicos:
                </p>
                <ul className="list-disc list-inside space-y-4">
                  <li>
                    <strong>Módulo 1:</strong> Descubra como o autoconhecimento
                    e o entendimento do seu perfil comportamental podem
                    transformar sua abordagem em vendas, atendimento, liderança
                    e comunicação.
                  </li>
                  <li>
                    <strong>Módulo 2:</strong> Aplique a análise SWOT de forma
                    prática e estratégica para potencializar seu desempenho,
                    fortalecendo relações humanas e alinhando comportamentos às
                    demandas do mercado.
                  </li>
                  <li>
                    <strong>Módulo 3:</strong> Desenvolva o poder da
                    autorresponsabilidade e incorpore as 6 leis práticas que
                    promovem ambientes mais colaborativos, produtivos e
                    humanizados.
                  </li>
                </ul>
                <p>
                  No contexto atual, onde inovação e humanização são essenciais,
                  o <strong>Entender para Atender</strong> oferece a chave para
                  se comunicar de forma eficaz, promovendo uma verdadeira
                  transformação nas equipes. Ao entender e aplicar os perfis
                  comportamentais, sua organização será capaz de construir
                  relações mais humanas, melhorar o atendimento e liderar com
                  empatia.
                </p>
              </div>
              <div className="mt-16 flex items-center justify-center gap-x-6">
                <a
                  href="#contact-form-section"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Quero Contratar
                </a>
              </div>
            </div>
          </div>

          {/* Feature section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-blue-600">
                Experiência Transformadora
              </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                Conectando Equipes de Forma Autêntica
              </p>
              <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                Descubra como a compreensão dos perfis comportamentais pode
                transformar a comunicação e o engajamento no ambiente de
                trabalho, promovendo uma cultura colaborativa e produtiva.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                        <feature.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-white"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Testimonial section */}
          <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
              <Image
                alt=""
                src="/entender_para_atender.jpg"
                className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
                fill={true}
              />
              <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
              <div
                aria-hidden="true"
                className="absolute -left-80 -top-56 transform-gpu blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                />
              </div>
              <div
                aria-hidden="true"
                className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                />
              </div>
              <div className="relative mx-auto max-w-2xl lg:mx-0">
                {/* <Image
                  alt=""
                  src="/logo/logo_entender_para_atender.svg"
                  className="h-12 w-auto"
                /> */}
                <figure>
                  <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                    <p>
                      “Maravilhoso!!! Quantos paradigmas que pode ser quebrado
                      em um treinamento, curso deste nível. (Ex: tanto que estou
                      dando meu depoimento) [...] Assim vai abrindo um leque de
                      possibilidades para melhorar em todas as áreas da vida
                      principalmente no quesito que sou capaz de avançar mais e
                      mais pois dito isto vamos montado o quebra cabeça da
                      vida.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 text-base text-white">
                    <div className="font-semibold">Valdeir Galvão da Silva</div>
                    {/* <div className="mt-1">CEO of Tuple</div> */}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* Pricing section */}
          {/* <div className="py-24 sm:pt-48">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base/7 font-semibold text-blue-600">
                  Pricing
                </h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                  Pricing that grows with you
                </p>
                <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                  Quis tellus eget adipiscing convallis sit sit eget aliquet
                  quis. Suspendisse eget egestas a elementum pulvinar et feugiat
                  blandit at. In mi viverra elit nunc.
                </p>
              </div>
              <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {tiers.map((tier, tierIdx) => (
                  <div
                    key={tier.id}
                    className={cn(
                      tier.mostPopular
                        ? "lg:z-10 lg:rounded-b-none"
                        : "lg:mt-8",
                      tierIdx === 0 ? "lg:rounded-r-none" : "",
                      tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                      "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-x-4">
                        <h3
                          id={tier.id}
                          className={cn(
                            tier.mostPopular
                              ? "text-blue-600"
                              : "text-gray-900",
                            "text-lg/8 font-semibold"
                          )}
                        >
                          {tier.name}
                        </h3>
                        {tier.mostPopular ? (
                          <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs/5 font-semibold text-blue-600">
                            Most popular
                          </p>
                        ) : null}
                      </div>
                      <p className="mt-4 text-sm/6 text-gray-600">
                        {tier.description}
                      </p>
                      <p className="mt-6 flex items-baseline gap-x-1">
                        <span className="text-4xl font-semibold tracking-tight text-gray-900">
                          {tier.priceMonthly}
                        </span>
                        <span className="text-sm/6 font-semibold text-gray-600">
                          /month
                        </span>
                      </p>
                      <ul
                        role="list"
                        className="mt-8 space-y-3 text-sm/6 text-gray-600"
                      >
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-blue-600"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className={cn(
                        tier.mostPopular
                          ? "bg-blue-600 text-white shadow-sm hover:bg-blue-500"
                          : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300",
                        "mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      )}
                    >
                      Buy plan
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* FAQs */}
          <div className="py-24 sm:pt-48 mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pb-32">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Perguntas Frequentes
            </h2>
            <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
                >
                  <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-4 lg:col-span-7 lg:mt-0">
                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* CTA section */}
          <div className="relative -z-10 mt-32 px-6 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
            >
              <div
                style={{
                  clipPath:
                    "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
                }}
                className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
              />
            </div>
            <div className="mx-auto max-w-2xl text-center pb-32">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Transforme sua equipe com Entender para Atender
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">
                Proporcione um ambiente mais alinhado, eficiente e humano,
                fortalecendo a comunicação e o engajamento no trabalho.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact-form-section"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Quero Contratar
                </a>
                {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                  Saiba mais <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="py-24 sm:py-32">
            <div id="contact-form-section" />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <EntenderParaAtenderForm />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
