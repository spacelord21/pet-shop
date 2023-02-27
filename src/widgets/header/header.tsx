import { styled, Typography } from "@shared/ui";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../nav-items";
import { Icon, Item } from "./ui/atoms";
import { Icon as Iconify } from "@iconify/react";
import { useTheme } from "styled-components";
import { useStore } from "effector-react";
import { $bucket } from "@entities/bucket/model/store";

const Wrapper = styled.div`
  display: block;
  position: fixed;
  width: 100%;
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
  right: 16px;
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
  cursor: pointer;
`;

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const products = useStore($bucket);
  return (
    <Wrapper>
      <Container>
        <Icon />
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
        </NavPanel>
      </Container>
    </Wrapper>
  );
};
