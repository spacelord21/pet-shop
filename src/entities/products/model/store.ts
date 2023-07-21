import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import {
  getDataFromLocaleStorage,
  setDataInLocaleStorage,
} from "@entities/persist";
import { createEffect, createEvent, createStore } from "effector";
import { getAllProducts } from "../api";
import { TProduct } from "../types";

const PERSIST_KEY = "PRODUCTS";
// 10 min
const DEFAULT_EXPIRE_TIME = 60 * 10;
// 10 sec
const DEFAULT_REFETCH_TIME = 10 * 1000;

export const $products = createStore<TProduct[]>([]);

export const fillProducts = createEvent<TProduct[]>();
export const fetchProducts = createEvent();
export const fetchProductsFx = createEffect<void, TProduct[], Error>(
  async () => {
    return await getAllProducts();
  }
);

fetchProducts.watch(() => {
  const data = getDataFromLocaleStorage<TProduct[]>(
    PERSIST_KEY,
    DEFAULT_EXPIRE_TIME
  );
  if (data !== undefined) {
    fillProducts(data);
  } else {
    fetchProductsFx();
  }
});

const FILTER_ID = 9; // нет в наличии

$products.on(fetchProductsFx.doneData, (_, payload) =>
  payload.filter((item) => item.id != FILTER_ID)
);
$products.on(fillProducts, (_, payload) =>
  payload.filter((item) => item.id != FILTER_ID)
);

fetchProductsFx.failData.watch((payload) => {
  createAlert({
    message: payload.message,
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "ERROR",
  });
});

fetchProductsFx.doneData.watch((payload) => {
  setDataInLocaleStorage<TProduct[]>(PERSIST_KEY, payload);
});

let refetchTimeout: ReturnType<typeof setTimeout>;

fetchProductsFx.fail.watch(() => {
  clearTimeout(refetchTimeout);
  if ($products.getState().length === 0) {
    refetchTimeout = setTimeout(() => {
      fetchProductsFx();
    }, DEFAULT_REFETCH_TIME);
  }
});
