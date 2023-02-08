import { styled, Typography } from "@shared/ui";
import { Header } from "widgets";
import { BackgroundPicture, Products } from "./ui";

const Container = styled.div``;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const Home = () => {
  return (
    <Container>
      <Header />
      <BackgroundPicture />
      <Title variant="title2">ПРОДУКТЫ</Title>
      <Products />
    </Container>
  );
};
