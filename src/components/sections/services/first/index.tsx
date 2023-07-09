import { Inter } from 'next/font/google'
import * as S from './style'
import { Carousel } from '@/components/ui/carousel'
import ServiceCard from '@/components/ui/service_card'
import { useState } from 'react'
import ServiceModal from '@/components/ui/service_modal'
import { services, Service } from './data'

const inter = Inter({ subsets: ['latin'] })

export default function FirstSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [service, setService] = useState<Service>({} as Service)

  const handleOnClick = (service: Service) => {
    setIsOpen(true)
    setService(service)
  }

  const handleOnClose = () => {
    setIsOpen(false)
    setService({} as Service)
  }

  return (
    <S.Container>
      <S.NavGhost />
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
          {[...services, ...services].map((card, index) => <ServiceCard
            key={index}
            title={card.title}
            src={card.src}
            onClick={() => handleOnClick(card)}
          />)}
        </Carousel>
      </S.Content>
      <S.FooterGhost />
      {isOpen && <ServiceModal service={service} onClose={handleOnClose} />}
    </S.Container>
  )
}