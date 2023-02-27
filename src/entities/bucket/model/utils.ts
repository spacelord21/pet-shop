import { Product } from "@pages/product";
import { TProductInBucket } from "../types";

export const contain = (array: TProductInBucket[], item: TProductInBucket) => {
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === item.id) {
      flag = true;
      break;
    }
  }
  return flag;
};
