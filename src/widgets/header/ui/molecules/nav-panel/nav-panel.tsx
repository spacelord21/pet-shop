import { styled } from "@shared/ui";
import { navItems } from "../../../../nav-items";
import { Item } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 50px;
  top: 30px;
`;

export const NavPanel = () => {
  return (
    <Container>
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
    </Container>
  );
};
