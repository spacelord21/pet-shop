import { TProduct } from "@entities/products/types";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { ProductImage } from "../../atoms";
import { ProductDetails } from "../../organisms";

const Container = styled.div<{ isNotDesktop: boolean }>`
  display: flex;
  flex-direction: ${({ isNotDesktop }) => (isNotDesktop ? "column" : "row")};
  width: 100%;
  justify-content: center;
  align-items: ${({ isNotDesktop }) =>
    isNotDesktop ? "center" : "flex-start"};
`;

type TProductTemplateProps = TProduct;

export const ProductTemplate = (product: TProductTemplateProps) => {
  const { isNotDesktop } = useWindowDimensions();
  return (
    <Container isNotDesktop={isNotDesktop}>
      <ProductImage imageUrl={product.imageUrl} />
      <ProductDetails {...product} />
    </Container>
  );
};
