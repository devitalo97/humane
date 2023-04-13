import { Inter } from 'next/font/google'
import * as S from './style'
import img from '@/assets/svgs/background_fifth_section.svg'
import Image from 'next/image'
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

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Glue>
          <S.ImageWrapper>
            <Image 
              alt="Imagem de uma menina ruiva" 
              src={img}
              style={{
                borderRadius: '3em',
                boxShadow: '12px 10px 28px -3px rgba(0,0,0,0.1)',
                maxWidth: "100%",
                height: 'auto'
              }}
            />
          </S.ImageWrapper>
          <S.TextWrapper style={{
            width: "fit-content", 
            zIndex: 3, 
            position: 'absolute',
            right: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            }}>
            <S.TextGroup>
              <S.Line>
                <S.TextLG style={inter.style}>
                Pontos Fortes e Pontos Fracos 
                </S.TextLG>
              </S.Line>
              <S.Line>
                <S.TextLG style={inter.style}>
                  de cada perfil     
                </S.TextLG>
              </S.Line>
            </S.TextGroup>
            <S.TextGroup gap='2em'>
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
          </S.Glue>
        </S.Wrapper>
      </S.Container>

      {content.filter(el => el.type === isOpen).map((item, index) => <Modal key={index}>
        <BehavioralProfileCards 
          title={item.type}
          points={{
            strong: item.strong,
            weak: item.weak,
          }}
          onClose={() => setIsOpen(null)}
        />
      </Modal>)}
      
    </>

  )
}
