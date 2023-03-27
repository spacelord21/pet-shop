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

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    <Wrapper className="product-page">
      <BucketWidget />
      <PopUpImage />
      <Header />
      <Container className="product">
        <Block />
        <ProductTemplate {...product} />
        <FeedBack productId={product.id} />
        <Separator />
      </Container>
      <Footer />
      <Separator />
    </Wrapper>
  );
};
