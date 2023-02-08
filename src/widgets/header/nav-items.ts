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
    title: "главная",
    iconName: "material-symbols:home-outline",
    link: "/",
  },
  {
    id: 2,
    title: "продукты",
    iconName: "tabler:bone",
    link: "/products",
  },
  {
    id: 3,
    title: "отзывы",
    iconName: "mdi:comment-quote-outline",
    link: "/feed-back",
  },
  {
    id: 4,
    title: "контакты",
    iconName: "material-symbols:person-outline",
    link: "/contacts",
  },
  { id: 5, title: "", iconName: "simple-line-icons:basket", link: "/bucket" },
];
