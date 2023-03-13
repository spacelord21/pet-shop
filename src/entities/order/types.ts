import { TProductInBucket } from "@entities/bucket/types";

export type TOrderDetails = {
  fullPrice: number;
};

export type TContactDetails = {
  name: string;
  phone: string;
  communicationPlace: string[];
};

export type TOrder = {
  products: Pick<TProductInBucket, "size" | "price" | "title">[];
  fullPrice: number;
  contacts: TContactDetails;
};

export type TCommunicationPlace =
  | "WhatsApp"
  | "Telegram"
  | "Viber"
  | "Напрямую по телефону";
