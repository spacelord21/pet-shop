import { TProductInBucket } from "@entities/bucket/types";
import { Separator, styled, Typography } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { BucketItem } from "../../molecules";

const Container = styled.div<{ isCartEmpty: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ isCartEmpty }) => (isCartEmpty ? 550 : 765)}px;
  margin-top: 200px;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.text.tertiary};
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  cursor: pointer;
`;

const EmptyCartContainer = styled.div`
  height: 300px;
  width: 765px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

type TBucketListProps = {
  products: TProductInBucket[];
};

export const BucketList = ({ products }: TBucketListProps) => {
  const navigate = useNavigate();
  return (
    <Container isCartEmpty={!!products.length}>
      <Title variant="title">Моя корзина</Title>
      <Separator />
      {products.length ? (
        products.map((product, index) => (
          <>
            <BucketItem {...product} key={product.id} />
            {index !== products.length - 1 ? <Separator /> : null}
          </>
        ))
      ) : (
        <>
          <EmptyCartContainer>
            <Title variant="title">Корзина пуста</Title>
            <Text variant="body14" onClick={() => navigate("/products")}>
              Перейти к продуктам
            </Text>
          </EmptyCartContainer>
          <Separator />
        </>
      )}
    </Container>
  );
};
