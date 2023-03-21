import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import { $bucket } from "@entities/bucket/model/store";
import { createEffect, createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import { fetchOrder } from "../api";
import { TContactDetails, TOrder } from "../types";
import { createOrder } from "./order-form";

export const $orderWidget = createStore<boolean>(false);
export const setOrderWidget = createEvent<boolean>();

$orderWidget.on(setOrderWidget, (_, payload) => payload);

export const $order = createStore<TOrder | null>(null);

export const createOrderFx = createEffect<TContactDetails, void, Error>(
  async (payload) => {
    const products = $bucket.getState();
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += (product.size * product.price) / 100;
    });
    return await fetchOrder({
      contacts: payload,
      fullPrice: totalPrice,
      products: products,
    });
  }
);

createOrder.watch((payload) => createOrderFx(payload));

createOrderFx.failData.watch((payload) => {
  createAlert({
    message: payload.message,
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "ERROR",
  });
});

createOrderFx.done.watch(() => {
  createAlert({
    message: "Ваш заказ успешно оформлен, пожалуйста, ожидайте!",
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "SUCCESS",
  });
  setOrderWidget(false);
});
