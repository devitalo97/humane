import Image, { StaticImageData } from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";

interface Props {
  title: string
  description: string
  thumb: StaticImageData
  onClick: React.MouseEventHandler<HTMLDivElement>
}
const inter = Inter({ subsets: ['latin'] })

export default function GalleryCard({
  title,
  description,
  thumb,
  onClick
}: Props) {
  return (
    <S.Container onClick={onClick}>
      <S.Wrapper>
        <div style={{ position: 'relative' }}>
          <Image src={thumb} alt="icon" fill style={{ borderRadius: '1em', border: 'none' }} />
        </div>
        <S.TextContent>
          <S.TextLG style={inter.style}>{title}</S.TextLG>
          <S.TextSM style={inter.style}>22/07/2023</S.TextSM>
        </S.TextContent>
      </S.Wrapper>
    </S.Container>
  )
}