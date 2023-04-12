


import { Inter } from 'next/font/google'
import * as S from './style'
import Button from '@/components/ui/button'

const inter = Inter({subsets: ['latin']})

export default function SecondSection() {
  return (
    <S.Container>
      <S.Wrapper>
        <div style={{width: "70%"}}>
          <video controls style={{width: "100%", height: '100%'}}>
            <source src="/humane_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <S.TextWrapper style={{width: "30%"}}>
          <S.TextGroup>
            <S.Line>
              <S.TextLG style={inter.style}>
              Relatório de          
              </S.TextLG>
            </S.Line>
            <S.Line padding='0 0 1em 0'>
              <S.TextM highlight style={inter.style}>
                Perfil Comportamental    
              </S.TextM>
            </S.Line>

            <S.Line>
              <S.TextSM bw style={inter.style}>
                Através do relatório, você vai compreender a sua personalidade, suas competências mais importantes, seus pontos fortes e as oportunidades de melhoria. Assim, é possível promover tanto o desenvolvimento pessoal quanto o profissional. Pesquisas na área do desenvolvimento humano mostram que os indivíduos mais eficazes são aqueles que se conhecem melhor. 
              </S.TextSM>
            </S.Line>
          </S.TextGroup>
          <Button text='Faça seu relatório aqui'/>
        </S.TextWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
