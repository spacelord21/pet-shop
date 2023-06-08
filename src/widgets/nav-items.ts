import { TNavLinks } from "@shared/consts/consts";

export type TItemType = {
  id: number;
  title: string;
  iconName: string;
  link: TNavLinks;
};

export const navItems: TItemType[] = [
  {
    id: 1,
    title: "Главная",
    iconName: "material-symbols:home-outline",
    link: "/",
  },
  {
    id: 2,
    title: "Продукты",
    iconName: "tabler:bone",
    link: "/products",
  },
  {
    id: 3,
    title: "Контакты",
    iconName: "material-symbols:person-outline",
    link: "/contacts",
  },
  {
    id: 4,
    title: "Корзина",
    iconName: "teenyicons:bag-outline",
    link: "/bucket",
  },
];
