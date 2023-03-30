import { TProduct } from "@entities/products/types";
import { Separator, styled } from "@shared/ui";
import { Footer, Header, PopUpImage } from "widgets";
import { ProductTemplate } from "./ui";
import { FeedBack } from "@entities/feed-back";
import { BucketWidget } from "widgets/bucket";
import { useStore } from "effector-react";
import { $orderWidget } from "@entities/order/model";
import { $formModal } from "@entities/feed-back/model";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div<{ modalActive: boolean }>`
  background-color: ${({ theme }) => theme.palette.background.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: ${({ modalActive }) => (modalActive ? "fixed" : "")};
`;

const Block = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing(12)}px;
  opacity: 0;
`;

type TProductProps = TProduct;

export const Product = (product: TProductProps) => {
  const orderModal = useStore($orderWidget);
  const feedbackModal = useStore($formModal);
  return (
    <Wrapper className="product-page" modalActive={orderModal || feedbackModal}>
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
