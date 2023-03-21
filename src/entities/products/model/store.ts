import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import { createEffect, createEvent, createStore } from "effector";
import { getAllProducts } from "../api";
import { TProduct } from "../types";

export const $products = createStore<TProduct[]>([]);
export const fetchProducts = createEvent();
export const fetchProductsFx = createEffect<void, TProduct[], Error>(
  async () => {
    return await getAllProducts();
  }
);

fetchProducts.watch(() => fetchProductsFx());

$products.on(fetchProductsFx.doneData, (_, payload) => payload);

fetchProductsFx.failData.watch((payload) => {
  createAlert({
    message: payload.message,
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "ERROR",
  });
});
