import { TProduct } from "@entities/products/types";
import { Separator, styled } from "@shared/ui";
import { Footer, Header, PopUpImage } from "widgets";
import { ProductTemplate } from "./ui";
import { FeedBack } from "@entities/feed-back";
import { BucketWidget } from "widgets/bucket";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
      <BucketWidget />
      <PopUpImage />
      <Header />
      <Container>
        <Block />
        <ProductTemplate {...product} />
        <FeedBack productId={product.id} />
        <Separator />
      </Container>
      <Footer />
      <Separator />
    </>
  );
};
