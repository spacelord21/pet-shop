import { $orderWidget, setOrderWidget } from "@entities/order/model";
import { styled } from "@shared/ui";
import { Header } from "@shared/ui/core/molecules";
import { useStore } from "effector-react";

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

export const OrderWindow = () => {
  const orderActive = useStore($orderWidget);

  return (
    <Container isActive={orderActive}>
      <Window>
        <Header setIsActive={setOrderWidget} title={"Оформление заказа!"} />
      </Window>
    </Container>
  );
};
