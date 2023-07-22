import Image from "next/image";
import * as S from "./style";
import { Inter } from "next/font/google";
import { Carousel } from "../carousel";
import { RiCloseLine } from "react-icons/ri";
import Button from "../button";

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
    <S.Container windowWidth={window.innerWidth}>
      <S.Wrapper>
        <S.Header>
          <S.Title>{service?.title}</S.Title>
          <RiCloseLine color="var(--dark-color)" onClick={() => onClose()} />
        </S.Header>
        <S.CardContainer>
          <S.CardContent>
            <S.Text>{service?.description}</S.Text>
          </S.CardContent>
          <S.Form>
            <S.InputContainer>
              <S.Label htmlFor="name">Seu nome:</S.Label>
              <S.Input id="name" name="name" type="text" autoComplete="off" />
            </S.InputContainer>

            <S.InputContainer>
              <S.Label htmlFor="email">Seu Email:</S.Label>
              <S.Input id="email" name="email" type="email" autoComplete="off" />
            </S.InputContainer>

            <S.InputContainer>
              <S.Label htmlFor="tel">Seu Telefone:</S.Label>
              <S.Input id="tel" name="tel" type="tel" autoComplete="off" />
            </S.InputContainer>

            <S.TextAreaContainer>
              <S.Label htmlFor="message">Sua Mensagem:</S.Label>
              <S.TextArea id="message" name="message" maxLength={2048} rows={8} autoComplete="off" />
            </S.TextAreaContainer>

            <Button text="Faça Contanto" width="100%"/>
          </S.Form>
        </S.CardContainer>
      </S.Wrapper>
    </S.Container>
  )
}