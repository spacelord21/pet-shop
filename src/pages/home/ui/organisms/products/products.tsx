import { productData } from "@entities/index";
import { styled, Typography } from "@shared/ui";
import { ProductCard } from "../../molecules";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 506px;
  margin-left: ${({ theme }) => theme.spacing(3)}px;
`;

export const Products = () => {
  return (
    <Container>
      {productData.map((product) => (
        <ProductCard
          imageUrl={product.imageUrl}
          price={product.price}
          title={product.title}
          key={product.id}
        />
      ))}
    </Container>
  );
};
