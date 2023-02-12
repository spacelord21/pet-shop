import { Separator, styled, Typography } from "@shared/ui";
import { Footer, Header } from "widgets";
import { BackgroundPicture, Products } from "./ui";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: 42%;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const Home = () => {
  return (
    <Container>
      <Header />
      <BackgroundPicture />
      <Title variant="largeTitle">ПРОДУКТЫ</Title>
      <Products />
      <Separator />
      <Footer />
      <Separator />
    </Container>
  );
};
