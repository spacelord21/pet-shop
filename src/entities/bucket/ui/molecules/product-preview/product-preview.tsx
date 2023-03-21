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
};

export const ProductPreview = ({
  imageUrl,
  price,
  title,
  isNotDesktop,
}: TProductPreviewProps) => {
  return (
    <Container>
      <Image imageUrl={imageUrl} isNotDesktop={isNotDesktop} />
      <ProductDescription price={price} title={title} />
    </Container>
  );
};
