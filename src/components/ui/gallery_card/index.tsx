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
          <Image src={thumb} alt="icon" fill style={{ borderRadius: '1em 1em 0 0', border: 'none' }} />
        </div>
        <S.TextContent>
          <S.TextLG style={inter.style}>{title}</S.TextLG>
          <div>
            <S.TextSM style={inter.style}>{description}</S.TextSM>
          </div>
        </S.TextContent>
      </S.Wrapper>
    </S.Container>
  )
}