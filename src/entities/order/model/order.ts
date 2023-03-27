import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import { $bucket } from "@entities/bucket/model/store";
import {
  getDataFromLocaleStorage,
  setDataInLocaleStorage,
} from "@entities/persist";
import { createEffect, createEvent, createStore } from "effector";
import { fetchOrder } from "../api";
import { TContactDetails, TOrder, TOrderInStorage } from "../types";
import { createOrder } from "./order-form";

const PERSIST_ORDER_KEY = "order";
// 2 hours
const DEFAULT_EXPIRE_ORDER_TIME = 60 * 60 * 2;
export const setOrderWidget = createEvent<boolean>();
export const $orderWidget = createStore<boolean>(false).on(
  setOrderWidget,
  (_, payload) => payload
);

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

createOrder.watch((payload) => {
  const item = getDataFromLocaleStorage<TOrderInStorage>(
    PERSIST_ORDER_KEY,
    DEFAULT_EXPIRE_ORDER_TIME
  );
  if (item !== undefined) {
    const { count }: TOrderInStorage = item;
    if (count === 2) {
      createAlert({
        message:
          "Вы уже сделали 2 заказа за последние 2 часа, пожалуйста, дождитесь пока с Вами свяжутся.",
        timeout: DEFAULT_ALERT_TIMEOUT,
        type: "WARNING",
      });
      return;
    } else {
      createOrderFx(payload);
      setDataInLocaleStorage<TOrderInStorage>(PERSIST_ORDER_KEY, {
        count: count + 1,
      });
      return;
    }
  }
  createOrderFx(payload);
  setDataInLocaleStorage<TOrderInStorage>(PERSIST_ORDER_KEY, { count: 1 });
});

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
