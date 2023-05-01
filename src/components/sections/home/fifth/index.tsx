import { Inter } from 'next/font/google'
import * as S from './style'
import Button from '@/components/ui/button'
import { useState } from 'react'
import Modal from '@/components/ui/modal'
import BehavioralProfileCards from '@/components/ui/behavioral_profile_card'

const inter = Inter({subsets: ['latin']})

type IsOpen = "Dominante" | 'Influente' | 'Estável' | 'Conforme'

export default function FifthSection() {
  const [isOpen, setIsOpen] = useState<IsOpen | null>()

  const texts: IsOpen[] = [
    'Dominante',
    'Influente',
    'Estável',
    'Conforme',
  ]

  const content = [
    {
      type: 'Dominante',
      strong: [
        'Assertividade',
        'Determinação',
        'Autoconfiança',
        'Habilidades de liderança', 
        'Capacidade de tomar decisões rapidamente.'
      ],
      weak: [
        'Impaciência',
        'Tendência a ser autoritário',
        'Falta de flexibilidade',
        'Dificuldade em ouvir os outros'
      ]
    },
    {
      type: 'Influente',
      strong: [
        'Habilidades de comunicação', 
        'Carisma',
        'Entusiasmo',
        'Capacidade de persuasão  Habilidades social'
      ],
      weak: [
        'Falta de organização',
        'Tendência a ser superficial',
        'Dificuldade em manter o foco',
        'Falta de atenção aos detalhes'
      ]
    },
    {
      type: 'Estável',
      strong: [
        'Lealdade',
        'Empatia', 
        'Bom relacionamento Interpessoal',
        'Estabilidade emocional  Habilidades de escuta ativa'
      ],
      weak: [
        'Dificuldade em lidar com mudanças',
        'Falta de iniciativa',
        'Falta de assertividade',
        'Dificuldade em impor limites' 
      ]
    },
    {
      type: 'Conforme',
      strong: [
        'Habilidades de organização', 
        'Pontualidade',
        'Diligência',
        'Comprometimento', 
        'Precisão'
      ],
      weak: [
        'Dificuldade em lidar com mudanças',
        'Falta de iniciativa',
        'Falta de assertividade',
        'Dificuldade em impor limites' 
      ]
    }
  ]

  const getContent = (type: IsOpen) => {
    switch(type){
      case 'Conforme': 
        const [conform] = content.filter(el => el.type === type)
        return conform
      case 'Influente': 
        const [influente] = content.filter(el => el.type === type)
        return influente
      case 'Dominante': 
        const [dominante] = content.filter(el => el.type === type)
        return dominante
      case 'Estável': 
        const [estavel] = content.filter(el => el.type === type)
        return estavel
    }
  }

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.TextWrapper>
            <S.HeaderGroup>
              <S.Line>
                <S.TextLG style={inter.style}>
                Pontos Fortes e Pontos Fracos 
                de cada perfil     
                </S.TextLG>
              </S.Line>
            </S.HeaderGroup>
            <S.TextGroup height='100%'>
              {texts.map((text: IsOpen, index: number) => {
                return (<>
                  <Button 
                    onClick={() => setIsOpen(text)}
                    width="100%" 
                    text={text} 
                    secondary
                  />
                </>)
              })}
            </S.TextGroup>
          </S.TextWrapper>
        </S.Wrapper>
      </S.Container>

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
      
    </>

  )
}
