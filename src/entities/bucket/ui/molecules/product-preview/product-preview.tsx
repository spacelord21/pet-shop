import { styled } from "@shared/ui";
import { Image, ProductDescription } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

type TProductPreviewProps = {
  imageUrl: string;
  price: number;
  title: string;
};

export const ProductPreview = ({
  imageUrl,
  price,
  title,
}: TProductPreviewProps) => {
  return (
    <Container>
      <Image imageUrl={imageUrl} />
      <ProductDescription price={price} title={title} />
    </Container>
  );
};
