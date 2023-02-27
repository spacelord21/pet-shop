import {
  addProductToBucket,
  setWidgetActive,
} from "@entities/bucket/model/store";
import { TProduct } from "@entities/products/types";
import {
  OutlineButton,
  PrimaryButton,
  StarRating,
  styled,
  Typography,
} from "@shared/ui";
import { useState } from "react";
import { DescriptionSlice, OrderForm, TotalPrice } from "../../molecules";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  width: 30%;
`;

const ProductName = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
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

  const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addProductToBucket({ ...product, size: size });
    setWidgetActive(true);
  };

  return (
    <Container>
      <ProductName variant="title">{title}</ProductName>
      <ProductPrice variant="title">₽{price}.00</ProductPrice>
      <StarRating
        height={35}
        width={35}
        realRating={product.rating}
        maxValue={5}
        readOnly={true}
      />
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
      <OutlineButton onClick={() => {}}>Заказать</OutlineButton>
      <Block />
      <DescriptionSlice content={description} title={"Описание продукта"} />
      <DescriptionSlice content={shelfLife} title={"Срок годности"} />
    </Container>
  );
};
