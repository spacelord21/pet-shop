import { fetchProductsFx } from "@entities/products/model";
import { TProduct } from "@entities/products/types";
import { Loader, styled, Typography } from "@shared/ui";
import { useStore } from "effector-react";
import { useTheme } from "styled-components";
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
  const loading = useStore(fetchProductsFx.pending);
  const theme = useTheme();

  return (
    <Wrapper>
      <Container>
        {loading ? (
          <Loader color={theme.palette.accent.primary} height={40} width={40} />
        ) : (
          products.map((product) => (
            <ProductCard
              rating={product.rating}
              imageUrl={product.imageUrl}
              price={product.price}
              title={product.title}
              id={product.id}
              key={product.id}
            />
          ))
        )}
      </Container>
    </Wrapper>
  );
};
