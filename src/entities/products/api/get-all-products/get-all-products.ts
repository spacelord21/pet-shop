import { TProduct } from "@entities/products/types";
import { mainUrl } from "@shared/index";

export const getAllProducts = async (): Promise<TProduct[]> => {
  const response = await fetch(`${mainUrl}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Не получается получить продукты!");
  }
  return response.json();
};
