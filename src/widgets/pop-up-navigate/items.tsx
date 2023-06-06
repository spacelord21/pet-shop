import { useLocation } from "react-router-dom";
import { Item } from "widgets/header/ui";
import { navItems } from "widgets/nav-items";

type TItemsProps = {
  isActive: boolean;
  setActive: (value: boolean) => void;
};

export const Items = ({ isActive, setActive }: TItemsProps) => {
  const location = useLocation();

  return (
    <>
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
    </>
  );
};
