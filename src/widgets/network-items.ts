export type TNetworkItem = {
  id: number;
  iconName: string;
  url: string;
};

export const networkItems: TNetworkItem[] = [
  {
    id: 1,
    iconName: "uil:telegram-alt",
    url: "https://t.me/Anastasiya_Vladimirovna",
  },
  {
    id: 2,
    iconName: "ic:baseline-whatsapp",
    url: "https://wa.me/79504345555",
  },
  {
    id: 3,
    iconName: "basil:viber-outline",
    url: "viber://contact?number=%2B79504345555",
  },
];
