import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const EntenderParaAtenderEmail = (props: {
  name: string;
  phone: string;
  amount: number;
  message: string;
}) => (
  <Html>
    <Head />
    <Preview>Humaning</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              <Img
                style={sectionLogo}
                src={`https://firebasestorage.googleapis.com/v0/b/car-wash-acdb0.appspot.com/o/humane%2Fcapa-humane-2.png?alt=media&token=0c823475-5d39-4e2f-8c1a-c17aa9056af3`}
                alt="Humaning"
              />
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>NOVA SOLICITAÇÃO DO PROGRAMA</Text>
          <Text style={heading}>ENTENDER PARA ATENDER</Text>

          <Text style={paragraph}>Eae Ricardin,</Text>
          <Text style={paragraph}>Segue abaixo as informações do lead.</Text>

          <Text style={item}>Programa: Entender Para Atender</Text>
          <Text style={item}>Participantes: {props.amount}</Text>
          <Text style={item}>Nome: {props.name}</Text>
          <Text style={item}>Celular: {props.phone}</Text>
          <Text style={item}>Mensage: {props.message}</Text>
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Obrigado,</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>Time Beinus</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EntenderParaAtenderEmail;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: "0 40px",
};

const headerBlue = {
  marginTop: "-1px",
};

const container = {
  margin: "30px auto",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const item = {
  fontSize: "14px",
  lineHeight: "16px",
  color: "#3c4043",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

const footer = {
  maxWidth: "100%",
};
