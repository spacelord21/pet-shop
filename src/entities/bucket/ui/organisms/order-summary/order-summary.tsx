import { setOrderWidget } from "@entities/order/model";
import { useWindowDimensions } from "@shared/hooks";
import { PrimaryButton, Separator, styled, Typography } from "@shared/ui";
import React from "react";
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

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

type TOrderSummaryProps = {
  totalPrice: number;
};

export const OrderSummary = ({ totalPrice }: TOrderSummaryProps) => {
  const { isNotDesktop } = useWindowDimensions();

  return (
    <Container isNotDesktop={isNotDesktop}>
      <TotalPrice totalPrice={totalPrice} />
      <Separator />
      <PrimaryButton onClick={() => setOrderWidget(true)}>
        <ButtonText variant="body16">Заказать</ButtonText>
      </PrimaryButton>
    </Container>
  );
};
