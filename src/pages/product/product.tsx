import { TProduct } from "@entities/products/types";
import { Separator, styled } from "@shared/ui";
import { Footer, Header } from "widgets";
import { ProductDetails, ProductTemplate } from "./ui";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex-direction: column;
  align-items: center;
`;

const Block = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(12)}px;
  opacity: 0;
`;

type TProductProps = TProduct;

export const Product = (product: TProductProps) => {
  return (
    <>
      <Header />
      <Container>
        <Block />
        <ProductTemplate {...product} />
        <Block />
        <Block />
        <Separator />
      </Container>
      <Footer />
      <Separator />
    </>
  );
};
