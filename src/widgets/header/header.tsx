import { size, styled, Typography } from "@shared/ui";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../nav-items";
import { Icon, Item } from "./ui/atoms";
import { Icon as Iconify } from "@iconify/react";
import { useTheme } from "styled-components";
import { useStore } from "effector-react";
import { $bucket } from "@entities/bucket/model/store";
import { useWindowDimensions } from "@shared/hooks";
import { useMemo, useState } from "react";
import { PopUpNavigation } from "widgets/pop-up-navigate";

const Wrapper = styled.div<{ width: number }>`
  display: block;
  position: fixed;
  top: 0;
  width: ${({ width }) => width}px;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.primary};
  height: 107px;
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
  top: 30px;
  left: 13px;
`;

const IconWrapper = styled.div<{ isEmpty: boolean }>`
  margin-top: ${({ theme, isEmpty }) => (isEmpty ? theme.spacing(-0.7) : 5)}px;
  position: fixed;
  right: 16px;
  top: 30px;
  cursor: pointer;
`;

const BarsWrapper = styled.div`
  position: fixed;
  right: 60px;
  z-index: 5000;
  top: 35px;
  cursor: pointer;
`;

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const products = useStore($bucket);
  const { width, isMobile, isTablet } = useWindowDimensions();
  const [widgetActive, setWidgetActive] = useState(false);

  return (
    <Wrapper width={width} className="header">
      <Container>
        <Icon />
        {isMobile || isTablet ? (
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

        <IconWrapper
          onClick={() => navigate("/bucket")}
          isEmpty={!!products.length}
        >
          {products.length ? (
            <Amount variant="body14">{products.length}</Amount>
          ) : null}

          <Iconify
            icon={"ic:baseline-shopping-bag"}
            color={theme.palette.accent.primary}
            width={35}
            height={35}
          />
        </IconWrapper>
      </Container>
    </Wrapper>
  );
};
