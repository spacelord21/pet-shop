import { setOrderWidget } from "@entities/order/model";
import { useWindowDimensions } from "@shared/hooks";
import { PrimaryButton, Separator, styled, Typography } from "@shared/ui";
import { TotalPrice } from "../../atoms";

const Container = styled.div<{ isNotDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  margin-left: ${({ theme, isNotDesktop }) =>
    isNotDesktop ? 0 : theme.spacing(2)}px;
  margin-top: ${({ isNotDesktop }) => (isNotDesktop ? 0 : 200)}px;
`;

const OrderInfo = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  width: 90%;
  line-height: 20px;
`;

type TOrderSummaryProps = {
  totalPrice: number;
};

export const OrderSummary = ({ totalPrice }: TOrderSummaryProps) => {
  const { isNotDesktop } = useWindowDimensions();

  return (
    <Container isNotDesktop={isNotDesktop} className="order-sum">
      <TotalPrice totalPrice={totalPrice} />
      <Separator />
      <PrimaryButton onClick={() => setOrderWidget(true)}>
        Заказать
      </PrimaryButton>
      <OrderInfo variant="body14">
        Доставка по городу Красноярск 200₽(по будням). Если Вы покупаете
        продукции на 1500₽, доставка осуществляется бесплатно. Доставка в другие
        регионы и города обговаривается индивидуально.
      </OrderInfo>
    </Container>
  );
};
