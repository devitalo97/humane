import Image from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";

interface Props {
  name: string
  src: string
  onClick: React.MouseEventHandler<HTMLDivElement>
}
const inter = Inter({subsets: ['latin'], weight: "500"})

export default function ServiceCard({
  src,
  name,
  onClick
}: Props) {
  return (
    <S.Container onClick={onClick}>
      <S.Wrapper>
        <Image src={src} alt="icon"/>
        <S.TextSM style={inter.style}>{name}</S.TextSM>
      </S.Wrapper>
    </S.Container>
  )
}