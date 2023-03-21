import { TProductInBucket } from "@entities/bucket/types";
import { styled } from "@shared/ui";
import { Image, RemoveButton } from "../../atoms";
import { ProductBody } from "../product-body";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

type TProductItemProps = TProductInBucket;

export const ProductItem = ({
  id,
  imageUrl,
  price,
  size,
  title,
}: TProductItemProps) => {
  return (
    <Container>
      <Image imageUrl={imageUrl} />
      <ProductBody id={id} price={price} size={size} title={title} />
      <RemoveButton id={id} />
    </Container>
  );
};
