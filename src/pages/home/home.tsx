import {
  $products,
  fetchProducts,
  fetchProductsFx,
} from "@entities/products/model";
import { Loader, Separator, styled, Typography } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { Footer, Header } from "widgets";
import { BucketWidget } from "widgets/bucket";
import { BackgroundPicture, Products } from "./ui";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const Home = () => {
  const products = useStore($products);
  const loading = true;

  return (
    <Container>
      <Header />
      <BucketWidget />
      <BackgroundPicture />
      <Title variant="largeTitle">ПРОДУКТЫ</Title>

      <Products products={products} />

      <Separator />
      <Footer />
      <Separator />
    </Container>
  );
};
