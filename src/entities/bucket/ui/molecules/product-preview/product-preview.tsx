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
  isNotDesktop: boolean;
  productId: number;
};

export const ProductPreview = ({
  imageUrl,
  price,
  title,
  isNotDesktop,
  productId,
}: TProductPreviewProps) => {
  return (
    <Container>
      <Image
        imageUrl={imageUrl}
        isNotDesktop={isNotDesktop}
        productId={productId}
      />
      <ProductDescription price={price} title={title} />
    </Container>
  );
};
