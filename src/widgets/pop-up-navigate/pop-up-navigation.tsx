import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { Item } from "widgets/header/ui/atoms";
import { navItems } from "widgets/nav-items";

const Container = styled.div``;

const ModalPanel = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.palette.background.primary};
  animation: ${({ isActive }) => (isActive ? "show-modal" : "hide-modal")} 1s
    forwards;
  @keyframes show-modal {
    0% {
      opacity: 0;
      transform: translateX(500px);
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes hide-modal {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0;
      transform: translateX(400px);
    }
  }
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type TPopUpNavigationProps = {
  isActive: boolean;
  setActive: (value: boolean) => void;
};

export const PopUpNavigation = ({
  isActive,
  setActive,
}: TPopUpNavigationProps) => {
  const location = useLocation();
  const theme = useTheme();
  return (
    <ModalPanel isActive={isActive} className="modal-panel">
      <NavList className="nav list">
        <Icon
          icon={"material-symbols:close-rounded"}
          color={theme.palette.accent.primary}
          onClick={() => setActive(false)}
          width={23}
        />
        {navItems.map((item, index) => (
          <Item
            widgetActive={isActive}
            setActive={setActive}
            key={index}
            iconName={item.iconName}
            id={item.id}
            link={item.link}
            title={item.title}
            isActive={item.link === location.pathname}
          />
        ))}
      </NavList>
    </ModalPanel>
  );
};
