import Image from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";
import { Carousel } from "../carousel";
import { RiCloseLine } from "react-icons/ri";
import { Album } from "@/components/sections/gallery/first/data";
import { useState } from "react";

interface Props {
  album: Album
  onClose: Function
}

const inter = Inter({ subsets: ['latin'] })

export default function GalleryModal({
  album,
  onClose
}: Props) {
  const [currentPhoto, setCurrentPhoto] = useState<number>(0)
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>{album?.title}</S.Title><RiCloseLine color="white" onClick={() => onClose()} />
        </S.Header>
        {album?.photos?.slice(currentPhoto, currentPhoto + 1).map((card, index) => <S.CardContainer key={index}>
          <S.CardContent>
            <Image src={card.src} fill alt="a" />
          </S.CardContent>
          <S.CardFooter>
            <S.Text>{card.description}</S.Text>
          </S.CardFooter>
        </S.CardContainer>
        )}
      </S.Wrapper>
    </S.Container>
  )
}