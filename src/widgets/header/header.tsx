import { styled, Typography } from "@shared/ui";
import { useLocation } from "react-router-dom";
import { navItems } from "../nav-items";
import { Icon, Item } from "./ui/atoms";
import { Icon as Iconify } from "@iconify/react";
import { useTheme } from "styled-components";
import { useStore } from "effector-react";
import { $bucket } from "@entities/bucket/model/store";
import { useWindowDimensions } from "@shared/hooks";
import { useState } from "react";
import { PopUpNavigation } from "widgets/pop-up-navigate";

const Wrapper = styled.div<{ width: number }>`
  display: block;
  position: fixed;
  top: 0;
  width: ${({ width }) => width}px;
  z-index: 100;
`;

const Container = styled.div<{ isNotDesktop: boolean }>`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.primary};
  height: ${({ isNotDesktop }) => (isNotDesktop ? 70 : 107)}px;
  flex-direction: row;
`;

const NavPanel = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 50px;
  top: 30px;
`;

const Amount = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  position: relative;
  left: 4.4px;
  top: 3px;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 60px;
  top: 40px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.accent.error};
  border-radius: 50%;
  width: 15px;
  height: 18px;
`;

const BarsWrapper = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.spacing(1)}px;
  z-index: 5000;
  top: 18px;
  cursor: pointer;
`;

export const Header = () => {
  const location = useLocation();
  const theme = useTheme();
  const products = useStore($bucket);
  const { width, isNotDesktop } = useWindowDimensions();
  const [widgetActive, setWidgetActive] = useState(false);

  return (
    <Wrapper width={width} className="header">
      <Container className="header-body" isNotDesktop={isNotDesktop}>
        <Icon />
        {isNotDesktop ? (
          widgetActive ? (
            <PopUpNavigation
              isActive={widgetActive}
              setActive={setWidgetActive}
            />
          ) : (
            <BarsWrapper
              onClick={() => setWidgetActive(true)}
              onTouchEnd={() => setWidgetActive(true)}
            >
              <Iconify
                icon={"uil:bars"}
                color={theme.palette.accent.primary}
                width={40}
              />
            </BarsWrapper>
          )
        ) : (
          <NavPanel>
            {navItems.map((item) => (
              <Item
                key={item.id}
                iconName={item.iconName}
                title={item.title}
                id={item.id}
                link={item.link}
                isActive={item.link === location.pathname}
              />
            ))}
          </NavPanel>
        )}
        {products.length && !isNotDesktop ? (
          <IconWrapper>
            <Amount variant="body12">{products.length}</Amount>
          </IconWrapper>
        ) : null}
      </Container>
    </Wrapper>
  );
};
