import {
  addProductToBucket,
  setWidgetActive,
} from "@entities/bucket/model/store";
import { setOrderWidget } from "@entities/order/model";
import { OrderWindow } from "@entities/order/ui/organisms";
import { TProduct } from "@entities/products/types";
import { useWindowDimensions } from "@shared/hooks";
import {
  OutlineButton,
  PrimaryButton,
  StarRating,
  styled,
  Typography,
} from "@shared/ui";
import { useState } from "react";
import { DescriptionSlice, OrderForm, TotalPrice } from "../../molecules";

const Container = styled.div<{ isNotDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ isNotDesktop }) => (isNotDesktop ? "center" : "")};
  margin-left: ${({ theme, isNotDesktop }) =>
    isNotDesktop ? 0 : theme.spacing(2)}px;
  width: ${({ isNotDesktop }) => (isNotDesktop ? 100 : 30)}%;
`;

const ProductName = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

const ProductPrice = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

const ProductPriceDescription = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const Block = styled.div`
  display: flex;
  height: ${({ theme }) => theme.spacing(1)}px;
`;

type TProductDetailsProps = TProduct;

export const ProductDetails = (product: TProductDetailsProps) => {
  const [size, setSize] = useState(100);
  const { description, price, shelfLife, title } = product;
  const { isMobile, isTablet } = useWindowDimensions();

  const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addProductToBucket({ ...product, size: size });
    setWidgetActive(true);
  };

  const addToCardAndOpenOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addProductToBucket({ ...product, size: size });
    setOrderWidget(true);
  };

  return (
    <Container isNotDesktop={isMobile || isTablet}>
      <OrderWindow />
      <ProductName variant="title">{title}</ProductName>
      {/* убрал звезды по заказу */}
      <ProductPrice variant="title">₽{price}.00</ProductPrice>
      <ProductPriceDescription variant="body12">
        *указанная цена за 100 грамм
      </ProductPriceDescription>
      <OrderForm setSize={setSize} />
      <TotalPrice size={size} price={price} />
      <Block />
      <PrimaryButton onClick={addToCartHandler}>
        Добавить в корзину
      </PrimaryButton>
      <Block />
      <OutlineButton onClick={addToCardAndOpenOrder}>Заказать</OutlineButton>
      <Block />
      <DescriptionSlice content={description} title={"Описание продукта"} />
      <DescriptionSlice content={shelfLife} title={"Срок годности"} />
    </Container>
  );
};
