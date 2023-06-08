import { TProductInBucket } from "@entities/bucket/types";
import { Separator, styled } from "@shared/ui";
import { createRef, useMemo, useState } from "react";
import { ProductItem, TotalPrice } from "../../molecules";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const duration = 500;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)}px;
  width: 100%;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &.item-transition-exit {
    transform: translateX(0);
  }
  &.item-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateX(100%);
  }
`;

type TBucketListProps = {
  products: TProductInBucket[];
};

export const BucketList = ({ products }: TBucketListProps) => {
  const totalPrice = useMemo(() => {
    let price = 0;
    products.forEach((product) => {
      price += (product.size * product.price) / 100;
    });
    return price;
  }, [products]);

  return (
    <Container>
      <ProductsWrapper>
        <TransitionGroup>
          {products.map((product, index) => (
            <CSSTransition
              timeout={duration}
              classNames={"item-transition"}
              key={product.id}
            >
              <ItemWrapper>
                <ProductItem {...product} key={product.id} />
                <Separator width={100} />
              </ItemWrapper>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ProductsWrapper>
      <TotalPrice totalPrice={totalPrice} />
    </Container>
  );
};
