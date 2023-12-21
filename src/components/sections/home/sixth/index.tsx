import { Inter } from "next/font/google";
import * as S from "./style";
import Button from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function SixthSection() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextGroup>
          <S.Line>
            <S.TextLG style={inter.style}>
              Quando você se conhece profundamente,
            </S.TextLG>
          </S.Line>
          <S.Line padding="0 0 1em 0">
            <S.TextLG style={inter.style}>
              não há limites para o que pode realizar.
            </S.TextLG>
          </S.Line>
        </S.TextGroup>
        <Button text="Conheça nossos serviços" href="/gallery" />
      </S.Wrapper>
    </S.Container>
  );
}
