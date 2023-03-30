import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import {
  $orderWidget,
  createOrderFx,
  setOrderWidget,
} from "@entities/order/model";
import { createOrder, selectors } from "@entities/order/model/order-form";
import { TContactDetails } from "@entities/order/types";
import { useWindowDimensions } from "@shared/hooks";
import { Loader, PrimaryButton, styled, Typography } from "@shared/ui";
import { Header } from "@shared/ui/core/molecules";
import { useStore } from "effector-react";
import { OrderForm } from "../../molecules";

const Container = styled.div<{ isActive: boolean; isNotDesktop: boolean }>`
  z-index: ${({ isActive }) => (isActive ? 1000 : -1)};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ isNotDesktop }) => (isNotDesktop ? "column" : "row")};
  overflow-y: scroll;
`;

const Window = styled.div<{ isNotDesktop: boolean; width: number }>`
  width: ${({ isNotDesktop, width }) => (isNotDesktop ? width - 40 : 678)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

const DescriptionWindow = styled.div<{ isNotDesktop: boolean; width: number }>`
  width: ${({ isNotDesktop, width }) => (isNotDesktop ? width - 40 : 200)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme, isNotDesktop }) =>
    isNotDesktop ? 0 : theme.spacing(1)}px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const OrderWindow = () => {
  const orderActive = useStore($orderWidget);
  const { communicationPlace, name, phoneNumber } = selectors();
  const { isNotDesktop, width } = useWindowDimensions();
  const loading = useStore(createOrderFx.pending);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (phoneNumber.length !== 12) {
      createAlert({
        message:
          "Неверно указан номер, форма - 89111111111. Пожалуйста, повторите.",
        timeout: DEFAULT_ALERT_TIMEOUT,
        type: "WARNING",
      });
      return;
    }
    const result: TContactDetails = {
      communicationPlace: communicationPlace,
      name: name,
      phone: phoneNumber,
    };
    createOrder(result);
  };

  return (
    <Container
      isActive={orderActive}
      isNotDesktop={isNotDesktop}
      className="order-window"
    >
      <Window isNotDesktop={isNotDesktop} width={width} className="order-form">
        <Header setIsActive={setOrderWidget} title={"Оформление заказа!"} />
        <OrderForm />
        <PrimaryButton
          onClick={onClickHandler}
          disabled={
            communicationPlace.length === 0 ||
            name.length <= 1 ||
            phoneNumber.length <= 3 ||
            loading
          }
        >
          {loading ? <Loader /> : "Оформить"}
        </PrimaryButton>
      </Window>
      <DescriptionWindow isNotDesktop={isNotDesktop} width={width}>
        <Text variant="body14">
          Пожалуйста, укажите данные, предложенные в форме. С Вами свяжутся в
          ближайщее время для уточнения деталей доставки!
        </Text>
      </DescriptionWindow>
    </Container>
  );
};
