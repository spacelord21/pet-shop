import { TProduct } from "@entities/products/types";
import { Separator, styled } from "@shared/ui";
import { Footer, Header } from "widgets";
import { ProductDetails, ProductTemplate } from "./ui";
import { FeedBack } from "@entities/feed-back";
import { useStore } from "effector-react";
import { $bucketWidgetActive } from "@entities/bucket/model/store";
import { BucketWidget } from "widgets/bucket";

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
  const isBucketWidgetActive = useStore($bucketWidgetActive);
  return (
    <>
      <BucketWidget />
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
