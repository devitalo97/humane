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

export const CourseEmail = (props: {
  users: { name: string; phone: string; email: string }[];
  enterprise_name?: string;
  enterprise_document?: string;
  payment_method: string;
  payment_type: string;
  project_name: string;
}) => (
  <Html>
    <Head />
    <Preview>Humane</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column>
              <Img
                style={sectionLogo}
                src={`https://firebasestorage.googleapis.com/v0/b/car-wash-acdb0.appspot.com/o/humane%2Fcapa-humane-2.png?alt=media&token=0c823475-5d39-4e2f-8c1a-c17aa9056af3`}
                alt="Humane"
              />
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>NOVA SOLICITAÇÃO DE INSCRIÇÃO</Text>
          <Text style={paragraph}>Eae Ricardin,</Text>
          <Text style={paragraph}>Segue abaixo as informações do lead.</Text>

          <Text style={item}>Projeto: {props.project_name}</Text>
          {props.users.map((u, uindex) => (
            <Section key={uindex}>
              <Text style={item}>Participante: {uindex + 1}</Text>
              <Text style={item}>Nome: {u.name}</Text>
              <Text style={item}>Email: {u.email}</Text>
              <Text style={item}>Celular: {u.phone}</Text>
            </Section>
          ))}
          {props.enterprise_name && (
            <Text style={item}>Nome da Empresa: {props.enterprise_name}</Text>
          )}
          {props.enterprise_document && (
            <Text style={item}>
              Nome da Empresa: {props.enterprise_document}
            </Text>
          )}
          <Text style={item}>Método de Pagamento: {props.payment_method}</Text>
          <Text style={item}>Tipo do pagamento: {props.payment_type}</Text>
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Obrigado,</Text>
          <Text style={{ ...paragraph, fontSize: "20px" }}>Time Beinus</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CourseEmail;

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
