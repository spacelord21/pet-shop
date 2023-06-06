import { TProductInBucket } from "@entities/bucket/types";
import { useWindowDimensions } from "@shared/hooks";
import { Separator, styled, Typography } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { BucketItem } from "../../molecules";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type TContainerProps = {
  isCartEmpty: boolean;
  isNotDesktop: boolean;
  width: number;
};

const duration = 500;

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
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  transition: all ${duration}ms ease;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  &.item-transition-exit {
    transform: translateX(0);
  }
  &.item-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateX(-100%);
  }
  border: 0.5px solid ${({ theme }) => theme.palette.accent.secondary};
  margin: ${({ theme }) => theme.spacing(1)}px 0
    ${({ theme }) => theme.spacing(1)}px 0;
  border-radius: 6px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(49, 48, 82, 0.08);
  -moz-box-shadow: 0px 5px 10px 2px rgba(49, 48, 82, 0.08);
  box-shadow: 0px 5px 10px 2px rgba(49, 48, 82, 0.08);
`;

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
      {/* <Separator /> */}
      {products.length ? (
        <TransitionGroup>
          {products.map((product, index) => (
            <CSSTransition
              timeout={duration}
              classNames={"item-transition"}
              key={product.id}
            >
              <Wrapper>
                <BucketItem {...product} />
                {/* {index !== products.length - 1 ? (
                  <Separator key={product.id + 100} />
                ) : null} */}
              </Wrapper>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <>
          <EmptyCartContainer isNotDesktop={isNotDesktop} deviceWidth={width}>
            <Title variant="title" key={"empty cart"}>
              Корзина пуста
            </Title>
            <Text variant="body16" onClick={() => navigate("/products")}>
              Перейти к продуктам
            </Text>
          </EmptyCartContainer>
          <Separator />
        </>
      )}
    </Container>
  );
};
