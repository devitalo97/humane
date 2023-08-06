import { Inter } from 'next/font/google'
import * as S from './style'
import { useState } from 'react'
import Modal from '@/components/ui/modal'
import BehavioralProfileCards from '@/components/ui/behavioral_profile_card'
import { IsOpen, Text, getContent, texts } from './data'
import Image from 'next/image'
import { AnimatePresence } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function FifthSection() {
  const [isOpen, setIsOpen] = useState<IsOpen | null>()

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Header>
            <S.TextLG style={inter.style}>
              Conheça algumas características de cada perfil
            </S.TextLG>
          </S.Header>
          <S.CardGroup>
            {texts.map(({ text, thumb }: Text, index: number) => {
              return (<>
                <S.CardContainter
                  key={index}
                  onClick={() => { setIsOpen(text) }}
                >
                  <S.CardWrapper>
                    <S.CardContent>
                      <Image src={thumb} alt="" />
                    </S.CardContent>
                    <S.CardFooter>
                      <p>{text}</p>
                    </S.CardFooter>
                  </S.CardWrapper>
                </S.CardContainter>
              </>)
            })}
          </S.CardGroup>
        </S.Wrapper>
      </S.Container>

      <AnimatePresence>
        {isOpen === 'Conforme' ? <Modal>
          <BehavioralProfileCards
            title={getContent('Conforme').type}
            points={{
              strong: getContent('Conforme').strong,
              weak: getContent('Conforme').weak,
            }}
            onClose={() => setIsOpen(null)}
          />
        </Modal> : null}

        {isOpen === 'Estável' ? <Modal>
          <BehavioralProfileCards
            title={getContent('Estável').type}
            points={{
              strong: getContent('Estável').strong,
              weak: getContent('Estável').weak,
            }}
            onClose={() => setIsOpen(null)}
          />
        </Modal> : null}

        {isOpen === 'Dominante' ? <Modal>
          <BehavioralProfileCards
            title={getContent('Dominante').type}
            points={{
              strong: getContent('Dominante').strong,
              weak: getContent('Dominante').weak,
            }}
            onClose={() => setIsOpen(null)}
          />
        </Modal> : null}

        {isOpen === 'Influente' ? <Modal>
          <BehavioralProfileCards
            title={getContent('Influente').type}
            points={{
              strong: getContent('Influente').strong,
              weak: getContent('Influente').weak,
            }}
            onClose={() => setIsOpen(null)}
          />
        </Modal> : null}
      </AnimatePresence>

    </>

  )
}
