import { TProduct } from "@entities/products/types";

export type TProductInBucket = Omit<TProduct, "description" | "shelfLife"> & {
  size: number;
};
