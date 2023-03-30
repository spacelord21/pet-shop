import { styled } from "@shared/ui";
import { ReactNode } from "react";

type TModalWindowProps = {
  isActive: boolean;
  children: ReactNode;
};

const Container = styled.div<Pick<TModalWindowProps, "isActive">>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  z-index: 1000;
  overflow-y: auto;
`;

export const ModalWindow = ({ isActive, children }: TModalWindowProps) => {
  return (
    <Container isActive={isActive} className={isActive ? "active" : "inactive"}>
      {children}
    </Container>
  );
};
