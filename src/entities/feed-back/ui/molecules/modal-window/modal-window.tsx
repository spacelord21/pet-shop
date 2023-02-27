import { styled } from "@shared/ui";
import { ReactNode } from "react";

type TModalWindowProps = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  children: ReactNode;
};

const Container = styled.div<Pick<TModalWindowProps, "isActive">>`
  width: ${({ isActive }) => (isActive ? 100 : 0)}%;
  height: ${({ isActive }) => (isActive ? 100 : 0)}vh;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  z-index: 1000;
  /* transition: 0.5s; */
`;

export const ModalWindow = ({
  isActive,
  setIsActive,
  children,
}: TModalWindowProps) => {
  return (
    <Container isActive={isActive} className={isActive ? "active" : "inactive"}>
      {children}
    </Container>
  );
};
