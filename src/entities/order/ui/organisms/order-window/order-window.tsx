import { $orderWidget, setOrderWidget } from "@entities/order/model";
import { useWindowDimensions } from "@shared/hooks";
import { Loader, PrimaryButton, styled, Typography } from "@shared/ui";
import { Header } from "@shared/ui/core/molecules";
import { useStore } from "effector-react";
import { OrderForm } from "../../molecules";
import { useMakeOrder } from "./hooks";
import { CSSTransition } from "react-transition-group";

const duration = 200;

const Container = styled.div<{ isActive: boolean; isNotDesktop: boolean }>`
  z-index: -1;
  opacity: 0;
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
  ${({ isActive }) =>
    isActive &&
    `
    opacity: 1;
    z-index: 1000;
    backdrop-filter: blur(6px);
  `}
  &.modal-enter {
    opacity: 0;
    transform: scale(0.8);
  }
  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all ${duration}ms ease;
  }
  &.modal-exit {
    opacity: 1;
  }
  &.modal-exit-active {
    opacity: 0;
    transform: scale(0);
    transition: all ${duration}ms ease;
  }
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
  const { isNotDesktop, width } = useWindowDimensions();
  const { loading, isButtonDisabled, onClickHandler } = useMakeOrder();

  return (
    <CSSTransition
      in={orderActive}
      timeout={duration}
      unmountOnExit
      classNames={"modal"}
    >
      <Container
        isActive={orderActive}
        isNotDesktop={isNotDesktop}
        className="order-window"
      >
        <Window
          isNotDesktop={isNotDesktop}
          width={width}
          className="order-form"
        >
          <Header setIsActive={setOrderWidget} title={"Оформление заказа!"} />
          <OrderForm />
          <PrimaryButton onClick={onClickHandler} disabled={isButtonDisabled}>
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
    </CSSTransition>
  );
};
