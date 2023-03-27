import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import {
  $orderWidget,
  createOrderFx,
  setOrderWidget,
} from "@entities/order/model";
import { createOrder, selectors } from "@entities/order/model/order-form";
import { TContactDetails } from "@entities/order/types";
import { useWindowDimensions } from "@shared/hooks";
import {
  Loader,
  OutlineButton,
  PrimaryButton,
  styled,
  Typography,
} from "@shared/ui";
import { Header } from "@shared/ui/core/molecules";
import { useStore } from "effector-react";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { OrderForm } from "../../molecules";

const Container = styled.div<{ isActive: boolean; isNotDesktop: boolean }>`
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
  flex-direction: ${({ isNotDesktop }) => (isNotDesktop ? "column" : "row")};
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

const DescriptionWindow = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
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
  const { isMobile, isTablet, width } = useWindowDimensions();
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

  const isNotDesktop = useMemo(() => {
    return isMobile || isTablet;
  }, [isMobile, isTablet]);

  return (
    <Container
      isActive={orderActive}
      isNotDesktop={isNotDesktop}
      className="order-form"
    >
      <Window isNotDesktop={isNotDesktop} width={width}>
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
          {loading ? (
            <Loader />
          ) : (
            <ButtonText variant="body14">Оформить</ButtonText>
          )}
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
