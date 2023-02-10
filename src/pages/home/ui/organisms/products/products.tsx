import { productData } from "@entities/index";
import { styled, Typography } from "@shared/ui";
import { ProductCard } from "../../molecules";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

export const Products = () => {
  return (
    <Wrapper>
      <Title variant="title2">ПРОДУКТЫ</Title>
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
    </Wrapper>
  );
};
