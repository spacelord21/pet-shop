import { TProductInBucket } from "../types";

export const contain = (array: TProductInBucket[], item: TProductInBucket) => {
  array.forEach((product) => {
    if (product.id === item.id) {
      return true;
    }
  });
  return false;
};
