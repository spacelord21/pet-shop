import { Products } from "@pages/home/ui";
import { Separator, styled, Typography } from "@shared/ui";
import { Footer, Header } from "widgets";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const ProductsPage = () => {
  return (
    <Container>
      <Header />
      <Title variant="largeTitle">НАШИ ПРОДУКТЫ</Title>
      <Products />
      <Separator />
      <Footer />
      <Separator />
    </Container>
  );
};
