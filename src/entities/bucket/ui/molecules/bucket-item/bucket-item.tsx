import { TProductInBucket } from "@entities/bucket/types";
import { styled } from "@shared/ui";
import { PriceForProduct, RemoveAllButton } from "../../atoms";
import { ProductPreview } from "../product-preview";
import { SizeControl } from "../size-control";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 550px;
  height: 200px;
`;

type TBucketItemProps = TProductInBucket;

export const BucketItem = ({
  id,
  imageUrl,
  price,
  size,
  title,
}: TBucketItemProps) => {
  return (
    <Container>
      <ProductPreview imageUrl={imageUrl} price={price} title={title} />
      <SizeControl id={id} size={size} />
      <PriceForProduct price={price} size={size} />
      <RemoveAllButton id={id} />
    </Container>
  );
};
