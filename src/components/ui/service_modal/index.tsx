import Image from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";
import { Carousel } from "../carousel";
import { RiCloseLine } from "react-icons/ri";

interface Props {
  service: {
    title: string
    description: string
  }
  onClose: Function
}

const inter = Inter({ subsets: ['latin'] })

export default function ServiceModal({
  service,
  onClose
}: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <RiCloseLine color="var(--dark-color)" onClick={() => onClose()}/>
        </S.Header>
          <S.CardContainer>
            <S.CardContent>
              <S.Text>{service?.title}</S.Text>
            </S.CardContent>
            <S.CardFooter>
              <S.Text>{service?.description}</S.Text>
            </S.CardFooter>
          </S.CardContainer>
      </S.Wrapper>
    </S.Container>
  )
}