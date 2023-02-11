import { Separator, styled, Typography } from "@shared/ui";
import { Footer, Header } from "widgets";
import { BackgroundPicture, Products } from "./ui";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const Home = () => {
  return (
    <Container>
      <Header />
      <BackgroundPicture />
      <Products />
      <Separator />
      <Footer />
      <Separator />
    </Container>
  );
};
