import { TProductInBucket } from "@entities/bucket/types";
import { styled } from "@shared/ui";
import { BucketItem } from "../../molecules";

const Container = styled.div``;

type TBucketListProps = {
  products: TProductInBucket[];
};

export const BucketList = ({ products }: TBucketListProps) => {
  return (
    <Container>
      {products.map((product) => (
        <BucketItem {...product} key={product.id} />
      ))}
    </Container>
  );
};
