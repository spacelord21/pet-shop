import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";
import { createPortal } from "react-dom";
import { useTheme } from "styled-components";
import { Items } from "./items";
const duration = 200;

const ModalPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  right: 0;
  width: 65%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.palette.accent.primary};
  &.modal-transition-enter {
    transform: translateX(100%);
  }
  &.modal-transition-enter-active {
    transition: transform ${duration}ms;
    transform: translateX(0);
  }
  &.modal-transition-exit {
    transform: translateX(0);
  }
  &.modal-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateX(100%);
  }
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

type TPopUpNavigationProps = {
  isActive: boolean;
  setActive: (value: boolean) => void;
};

export const PopUpNavigation = ({
  isActive,
  setActive,
}: TPopUpNavigationProps) => {
  const modal = (
    <ModalPanel>
      <NavList className="nav-list">
        <Items isActive={isActive} setActive={setActive} />
      </NavList>
    </ModalPanel>
  );

  return modal;
};
