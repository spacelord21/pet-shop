import { styled } from "@shared/ui";
import { ReactNode } from "react";

type TModalWindowProps = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  children: ReactNode;
};

const Container = styled.div<Pick<TModalWindowProps, "isActive">>`
  width: 100vh;
  height: 100vh;
  background-color: rgba(5, 5, 16, 0.16);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: 0.5s;
`;

export const ModalWindow = ({
  isActive,
  setIsActive,
  children,
}: TModalWindowProps) => {
  return <Container isActive={isActive}>{children}</Container>;
};
