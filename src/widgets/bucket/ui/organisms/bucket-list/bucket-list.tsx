import { TProductInBucket } from "@entities/bucket/types";
import { Separator, styled } from "@shared/ui";
import { useMemo } from "react";
import { ProductItem, TotalPrice } from "../../molecules";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)}px;
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
          <>
            <ProductItem {...product} key={product.id} />
            {products.length - 1 !== index ? <Separator /> : null}
          </>
        ))}
      </ProductsWrapper>
      <TotalPrice totalPrice={totalPrice} />
    </Container>
  );
};
