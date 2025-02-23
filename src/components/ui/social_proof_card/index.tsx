import Image from "next/image";
import * as S from "./style";
import { Inter, Prata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const prata = Prata({ subsets: ["latin"], weight: "400" });

interface Props {
  name: string;
  occupation: string;
  comment: string;
  src: string;
}

export default function SocialProofCard({
  name,
  occupation,
  comment,
  src,
}: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Quote />
        <S.ImageWrapper style={prata.style}>
          <img
            src={src}
            alt="profile"
            style={{
              border: "4px solid var(--highlight-color)",
              borderRadius: "50%",
              background: "white",
            }}
          />
        </S.ImageWrapper>
        <S.TextGroup>
          <S.Line>
            <S.TextSM bw dark style={inter.style}>
              {comment}
            </S.TextSM>
          </S.Line>
          <S.Footer>
            <S.Line>
              <S.TextLG highlight style={inter.style}>
                {name}
              </S.TextLG>
            </S.Line>
            <S.Line>
              <S.TextM dark style={inter.style}>
                {occupation}
              </S.TextM>
            </S.Line>
          </S.Footer>
        </S.TextGroup>
      </S.Wrapper>
    </S.Container>
  );
}
