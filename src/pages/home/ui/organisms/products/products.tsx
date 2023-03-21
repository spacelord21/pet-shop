import { TProduct } from "@entities/products/types";
import { styled, Typography } from "@shared/ui";
import { ProductCard } from "../../molecules";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.primary};
`;

type TProductsProps = {
  products: TProduct[];
};

export const Products = ({ products }: TProductsProps) => {
  return (
    <Wrapper>
      <Container>
        {products.map((product) => (
          <ProductCard
            rating={product.rating}
            imageUrl={product.imageUrl}
            price={product.price}
            title={product.title}
            id={product.id}
            key={product.id}
          />
        ))}
      </Container>
    </Wrapper>
  );
};
