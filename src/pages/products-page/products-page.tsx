import { $products, fetchProducts } from "@entities/products/model";
import { Products } from "@pages/home/ui";
import { Separator, styled, Typography } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { Footer, Header } from "widgets";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-left: 37%;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

const Block = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(12)}px;
  opacity: 0;
`;

export const ProductsPage = () => {
  const products = useStore($products);

  return (
    <Container>
      <Header />
      <Block />
      <Title variant="largeTitle">НАШИ ПРОДУКТЫ</Title>
      <Products products={products} />
      <Separator />
      <Footer />
      <Separator />
    </Container>
  );
};
