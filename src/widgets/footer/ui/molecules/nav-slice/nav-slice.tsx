import { styled } from "@shared/ui";
import { useLocation } from "react-router-dom";
import { navItems } from "widgets/nav-items";
import { Icon, NavItem } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(4)}px;
  }
  width: 32%;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const NavSlice = () => {
  const location = useLocation();
  return (
    <Container className="nav-slice">
      {navItems.map((item) =>
        item.link !== "/contacts" ? (
          <NavItem
            title={item.title}
            url={item.link}
            isActive={location.pathname === item.link}
            key={item.id}
          />
        ) : null
      )}
    </Container>
  );
};
