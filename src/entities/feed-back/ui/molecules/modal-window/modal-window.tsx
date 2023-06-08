import { styled } from "@shared/ui";
import { ReactNode, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

type TModalWindowProps = {
  isActive: boolean;
  children: ReactNode;
};

const duration = 200;

const Container = styled.div<Pick<TModalWindowProps, "isActive">>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.tertiary};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: -10;
  overflow: hidden;
  ${({ isActive }) =>
    isActive &&
    `
    backdrop-filter: blur(6px);
    opacity: 1;
    z-index: 1000;
    &.product-page {
      position: fixed;
      overflow: hidden;
    }
  `}
`;

export const ModalWindow = ({ isActive, children }: TModalWindowProps) => {
  return (
    <Container isActive={isActive} className={isActive ? "active" : "inactive"}>
      <CSSTransition
        in={isActive}
        timeout={duration}
        unmountOnExit
        classNames={"modal"}
      >
        {children}
      </CSSTransition>
    </Container>
  );
};
