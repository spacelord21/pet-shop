import { styled } from "@shared/ui";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../nav-items";
import { Icon, Item } from "./ui/atoms";

const Wrapper = styled.div`
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

export const Header = () => {
  const location = useLocation();
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
        </NavPanel>
      </Container>
    </Wrapper>
  );
};
