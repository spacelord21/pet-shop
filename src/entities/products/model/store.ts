import { createEffect, createEvent, createStore } from "effector";
import { getAllProducts } from "../api";
import { TProduct } from "../types";

export const $products = createStore<TProduct[]>([]);
export const fetchProducts = createEvent();
const fetchProductsFx = createEffect<void, TProduct[], Error>(async () => {
  return await getAllProducts();
});

fetchProducts.watch(() => fetchProductsFx());

$products.on(fetchProductsFx.doneData, (_, payload) => payload);
