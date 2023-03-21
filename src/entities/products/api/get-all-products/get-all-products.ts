import { TProduct } from "@entities/products/types";
import { mainUrl } from "@shared/index";

export const getAllProducts = async (): Promise<TProduct[]> => {
  return fetch(`${mainUrl}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error: Error) => {
      throw new Error("Не получается получить продукты! Попробуйте еще раз.");
    });
};
