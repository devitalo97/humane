import { StaticImageData } from "next/image"
import illustration_behavior from "@/assets/svgs/home/illustration_behavior.svg"
import illustration_behavior1 from "@/assets/svgs/home/illustration_behavior1.svg"
import illustration_behavior2 from "@/assets/svgs/home/illustration_behavior2.svg"
import illustration_behavior3 from "@/assets/svgs/home/illustration_behavior3.svg"

export type IsOpen = "Dominante" | 'Influente' | 'Estável' | 'Conforme'

export type Text = {
    text: IsOpen
    thumb: StaticImageData
}

export const texts: Text[] = [
    {
        text: 'Dominante',
        thumb: illustration_behavior
    },
    {
        text: 'Influente',
        thumb: illustration_behavior1
    },
    {
        text: 'Estável',
        thumb: illustration_behavior2
    },
    {
        text: 'Conforme',
        thumb: illustration_behavior3
    },
]

export const content = [
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

export const getContent = (type: IsOpen) => {
    switch (type) {
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