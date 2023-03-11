import { TProduct } from "@entities/products/types";
import { styled } from "@shared/ui";
import { ProductImage } from "../../atoms";
import { ProductDetails } from "../../organisms";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${({ theme }) => theme.spacing(8)}px;
`;

type TProductTemplateProps = TProduct;

export const ProductTemplate = (product: TProductTemplateProps) => {
  return (
    <Container>
      <ProductImage imageUrl={product.imageUrl} />
      <ProductDetails {...product} />
    </Container>
  );
};
