import { TProductInBucket } from "@entities/bucket/types";
import { Separator, styled } from "@shared/ui";
import { useMemo } from "react";
import { ProductItem, TotalPrice } from "../../molecules";

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
        {products.map((product, index) => (
          <ItemWrapper key={index}>
            <ProductItem {...product} key={product.id} />
            <Separator width={100} key={index} />
          </ItemWrapper>
        ))}
      </ProductsWrapper>
      <TotalPrice totalPrice={totalPrice} />
    </Container>
  );
};
