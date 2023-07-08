import Image from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";
import { Carousel } from "../carousel";
import { RiCloseLine } from "react-icons/ri";

interface Props {
  photos: {
    src: string
    description: string
  }[]
  onClose: Function
}

const inter = Inter({ subsets: ['latin'] })

export default function GalleryCarousel({
  photos,
  onClose
}: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <RiCloseLine color="white" onClick={() => onClose()}/>
        </S.Header>
        <Carousel>
          {photos.map((card, index) => <S.CardContainer key={index}>
            <S.CardContent>
              <Image src={card.src} alt="a" />
            </S.CardContent>
            <S.CardFooter>
              <S.Text>{card.description}</S.Text>
            </S.CardFooter>
          </S.CardContainer>
          )}
        </Carousel>
      </S.Wrapper>
    </S.Container>
  )
}