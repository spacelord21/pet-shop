import { styled } from "@shared/ui";
import { useLocation } from "react-router-dom";
import { navItems } from "widgets/nav-items";
import { NavItem } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(1)}px;
  }
  width: 32%;
  justify-content: center;
  align-items: center;
`;

export const NavSlice = () => {
  const location = useLocation();
  return (
    <Container className="nav-slice">
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
