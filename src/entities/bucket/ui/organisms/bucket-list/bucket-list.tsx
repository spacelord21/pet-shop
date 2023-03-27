import { TProductInBucket } from "@entities/bucket/types";
import { useWindowDimensions } from "@shared/hooks";
import { Separator, styled, Typography } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { BucketItem } from "../../molecules";

type TContainerProps = {
  isCartEmpty: boolean;
  isNotDesktop: boolean;
  width: number;
};

const Container = styled.div<TContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ isCartEmpty, isNotDesktop, width }) =>
    isCartEmpty
      ? isNotDesktop
        ? width - 16
        : 550
      : isNotDesktop
      ? width - 16
      : 765}px;
  margin-top: 200px;
  height: auto;
  margin-bottom: ${({ theme, isNotDesktop }) =>
    isNotDesktop ? 16 : theme.spacing(5)}px;
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

const EmptyCartContainer = styled.div<{
  isNotDesktop: boolean;
  deviceWidth: number;
}>`
  height: 300px;
  width: ${({ isNotDesktop, deviceWidth }) =>
    isNotDesktop ? deviceWidth - 16 : 765}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div``;

type TBucketListProps = {
  products: TProductInBucket[];
};

export const BucketList = ({ products }: TBucketListProps) => {
  const navigate = useNavigate();
  const { width, isNotDesktop } = useWindowDimensions();

  return (
    <Container
      isCartEmpty={!!products.length}
      isNotDesktop={isNotDesktop}
      width={width}
      className="bucket-list"
    >
      <Title variant="title" key={"my cart"} className="title">
        Моя корзина
      </Title>
      <Separator />
      {products.length ? (
        products.map((product, index) => (
          <Wrapper key={product.id}>
            <BucketItem {...product} key={product.id} />
            {index !== products.length - 1 ? (
              <Separator key={product.id + 100} />
            ) : null}
          </Wrapper>
        ))
      ) : (
        <>
          <EmptyCartContainer isNotDesktop={isNotDesktop} deviceWidth={width}>
            <Title variant="title" key={"empty cart"}>
              Корзина пуста
            </Title>
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
