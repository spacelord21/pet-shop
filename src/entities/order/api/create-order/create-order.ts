import { TOrder } from "@entities/order/types";
import { mainUrl } from "@shared/index";

export const fetchOrder = async (order: TOrder) => {
  const response = await fetch(`${mainUrl}/order/new-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error("Не получилось оформить заказ! Попробуйте еще раз.");
  }
  console.log(response);
};
