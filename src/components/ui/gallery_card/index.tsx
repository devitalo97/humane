import Image, { StaticImageData } from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";

interface Props {
  title: string
  description: string
  thumb: StaticImageData
}
const inter = Inter({ subsets: ['latin'] })

export default function GalleryCard({
  title,
  description,
  thumb,
}: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextContent>
          <S.TextLG style={inter.style}>{title}</S.TextLG>
          <div style={{padding: '0 2em'}}>
            <S.TextSM style={inter.style}>{description}</S.TextSM>
          </div>
        </S.TextContent>
        <div style={{ position: 'relative' }}>
          <Image src={thumb} alt="icon" fill style={{ borderRadius: '0 0 1em 1em', border: 'none' }} />
        </div>
      </S.Wrapper>
    </S.Container>
  )
}