import { Manjari } from "next/font/google";
import * as S from "./style";
import Button from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { animations, variants } from "./data";
const manjari = Manjari({ subsets: ["latin"], weight: "400" });

export default function FirstSection() {
  const animation = useAnimation();
  return (
    <S.Container>
      <S.Wrapper {...animations(animation).container}>
        <S.EllipseGroup {...animations(animation).ellipse}>
          <S.SmallEllipse />
          <S.MediumEllipse />
          <S.BigSCircle />
        </S.EllipseGroup>
        <S.TextWrapper {...animations(animation).text}>
          <S.TextGroup>
            <S.Line>
              <S.TextM style={manjari.style}>
                Quanto mais você se conhece,
              </S.TextM>
            </S.Line>

            <S.Line>
              <S.TextM style={manjari.style}>mais voce</S.TextM>
              <S.TextLG highlight style={manjari.style}>
                cresce
              </S.TextLG>
            </S.Line>

            <S.Line>
              <S.TextM style={manjari.style}>e tem melhores</S.TextM>
            </S.Line>

            <S.Line>
              <S.TextM style={manjari.style}>condições de ajudar</S.TextM>
            </S.Line>

            <S.Line>
              <S.TextM style={manjari.style}>as pessoas a sua volta</S.TextM>
            </S.Line>

            <S.Line>
              <S.TextM style={manjari.style}>a</S.TextM>
              <S.TextLG highlight style={manjari.style}>
                crescer
              </S.TextLG>
            </S.Line>
          </S.TextGroup>
          <Button text="Conheça nossos serviços" href="/gallery" />
        </S.TextWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
