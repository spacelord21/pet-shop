import { fetchProducts, fetchProductsFx } from "@entities/products/model";
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
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.primary};
  z-index: 20;
`;

const RefetchText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const EmptyContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
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
        {!loading && products.length === 0 ? (
          <EmptyContainer className="empty-container">
            <RefetchText variant="body16" onClick={() => fetchProducts()}>
              Не удалось загрузить продукты... Попробовать снова.
            </RefetchText>
          </EmptyContainer>
        ) : null}
        {loading ? (
          <EmptyContainer className="empty-container">
            <Loader
              color={theme.palette.accent.primary}
              height={40}
              width={40}
            />
          </EmptyContainer>
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
