import {
  $orderWidget,
  createOrderFx,
  setOrderWidget,
} from "@entities/order/model";
import { createOrder, selectors } from "@entities/order/model/order-form";
import { TContactDetails } from "@entities/order/types";
import { OutlineButton, PrimaryButton, styled, Typography } from "@shared/ui";
import { Header } from "@shared/ui/core/molecules";
import { useStore } from "effector-react";
import { useTheme } from "styled-components";
import { OrderForm } from "../../molecules";

const Container = styled.div<{ isActive: boolean }>`
  z-index: ${({ isActive }) => (isActive ? 1000 : -1000)};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  transition: all 0.5s ease;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Window = styled.div`
  width: 678px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(1)}px;
`;

const DescriptionWindow = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const OrderWindow = () => {
  const orderActive = useStore($orderWidget);
  const { communicationPlace, name, phoneNumber } = selectors();

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result: TContactDetails = {
      communicationPlace: communicationPlace,
      name: name,
      phone: phoneNumber,
    };
    console.log("easd");
    createOrderFx(result);
  };

  return (
    <Container isActive={orderActive}>
      <Window>
        <Header setIsActive={setOrderWidget} title={"Оформление заказа!"} />
        <OrderForm />
        <PrimaryButton onClick={onClickHandler}>
          <ButtonText variant="body14">Оформить</ButtonText>
        </PrimaryButton>
      </Window>
      <DescriptionWindow>
        <Text variant="body14">
          Пожалуйста, укажите данные, предложенные в форме. С Вами свяжутся в
          ближайщее время для уточнения деталей доставки!
        </Text>
      </DescriptionWindow>
    </Container>
  );
};
