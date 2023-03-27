import { $products } from "@entities/products/model";
import { Products } from "@pages/home/ui";
import { Separator, styled, Typography } from "@shared/ui";
import { useStore } from "effector-react";
import { Footer, Header } from "widgets";
import { BucketWidget } from "widgets/bucket";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  min-height: 100vh;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
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
    <Container className="products-page">
      <Header />
      <BucketWidget />
      <Block />
      <Title variant="title2">НАШИ ПРОДУКТЫ</Title>
      <Products products={products} />
      <Separator />
      <Footer />
      <Separator />
    </Container>
  );
};
