import { styled, Typography } from "@shared/ui";
import { Header } from "widgets";
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
    </Container>
  );
};
