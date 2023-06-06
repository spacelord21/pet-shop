import { styled, Typography } from "@shared/ui";
import { Icon as ShopIcon, NavBars, NavPanel } from "./ui";
import { useStore } from "effector-react";
import { $bucket } from "@entities/bucket/model/store";
import { useWindowDimensions } from "@shared/hooks";
import { PopUpNavigation } from "widgets/pop-up-navigate";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

const timeout = 200;

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

export const Header = () => {
  const products = useStore($bucket);
  const { width, isNotDesktop } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const showCartIcon = products.length && !isNotDesktop;

  const view = isNotDesktop ? (
    <>
      {!open && <NavBars setWidgetActive={setOpen} />}
      <CSSTransition
        in={open}
        timeout={timeout}
        classNames={"modal-transition"}
        unmountOnExit
      >
        <PopUpNavigation isActive={open} setActive={setOpen} />
      </CSSTransition>
    </>
  ) : (
    <NavPanel />
  );

  return (
    <Wrapper width={width} className="header">
      <Container className="header-body" isNotDesktop={isNotDesktop}>
        <ShopIcon />
        {view}
        {showCartIcon ? (
          <IconWrapper>
            <Amount variant="body12">{products.length}</Amount>
          </IconWrapper>
        ) : null}
      </Container>
    </Wrapper>
  );
};
