import { styled } from "@shared/ui";
import { useLocation } from "react-router-dom";
import { navItems } from "widgets/nav-items";
import { NavItem } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const NavSlice = () => {
  const location = useLocation();
  return (
    <Container>
      {navItems.map((item) => (
        <NavItem
          title={item.title}
          url={item.link}
          isActive={location.pathname === item.link}
          key={item.id}
        />
      ))}
    </Container>
  );
};
