export type OrderDetails = {
  fullPrice: number;
};

export type Order = {
  name: string;
  products: string[];
  fullPrice: number;
  phone: string;
  communitationPlace: CommunicationPlace;
};

export type CommunicationPlace = {
  whatsapp: "WhatsApp";
  telegram: "Telegram";
  viber: "Viber";
  phoneCall: "Напрямую по телефону";
};
