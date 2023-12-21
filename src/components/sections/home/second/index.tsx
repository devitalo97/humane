import { Inter } from "next/font/google";
import * as S from "./style";
import Button from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { animations } from "./data";

const inter = Inter({ subsets: ["latin"] });

export default function SecondSection() {
  const animation = useAnimation();
  return (
    <S.Container>
      <S.Wrapper {...animations(animation).container}>
        <S.VideoWrapper {...animations(animation).video}>
          <video controls style={{ width: "100%", height: "100%" }}>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/car-wash-acdb0.appspot.com/o/humane%2Fhumane_video.mp4?alt=media&token=2f5705d1-e85a-410e-8a04-a8c5a5d5357a"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </S.VideoWrapper>
        <S.TextWrapper {...animations(animation).text}>
          <S.TextGroup gap="2em">
            <S.TextGroup {...animations(animation).textChild}>
              <S.Line>
                <S.TextLG style={inter.style}>Análise de</S.TextLG>
              </S.Line>
              <S.Line>
                <S.TextM highlight style={inter.style}>
                  Perfil Comportamental
                </S.TextM>
              </S.Line>
            </S.TextGroup>

            <S.Line {...animations(animation).textChild}>
              <S.TextSM bw style={inter.style}>
                Quantas vezes você já foi chamado de mandão? Talvez rotulado
                como chato ou distraído, quem sabe até indeciso. Essas palavras
                podem ter ecoado em sua vida, causando confusão e dor. Mas há
                uma luz que pode iluminar seu caminho: a importância de se
                conhecer através da Análise de Perfil Comportamental.
              </S.TextSM>
            </S.Line>
          </S.TextGroup>
          <Button text="Conheça nossos serviços" href="/gallery" />
        </S.TextWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
