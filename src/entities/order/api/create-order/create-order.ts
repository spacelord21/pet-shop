import { TOrder } from "@entities/order/types";
import { mainUrl } from "@shared/index";

export const fetchOrder = async (order: TOrder) => {
  fetch(`${mainUrl}/order/new-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  }).catch((error: Error) => {
    throw new Error("Не получилось оформить заказ! Попробуйте еще раз.");
  });
};
