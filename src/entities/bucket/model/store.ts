import { createEffect, createEvent, createStore, restore } from "effector";
import { persist } from "effector-storage/local";
import { TProductInBucket } from "../types";
import { contain } from "./utils";

const BUCKET_KEY = "user-bucket";

const emptyState: TProductInBucket[] = [];
const fetchBucketFromStorageFx = createEffect<void, TProductInBucket[], Error>(
  () => {
    const productsFromStorage = localStorage.getItem(BUCKET_KEY);
    if (productsFromStorage) {
      return JSON.parse(productsFromStorage);
    } else {
      throw new Error("Корзина пуста");
    }
  }
);

export const fetchBucketFromStorage = createEvent();
export const addProductToBucket = createEvent<TProductInBucket>();
export const increaseSize = createEvent<{ id: number; size?: number }>();
export const reduceSize = createEvent<number>();
export const removeAllProductsFromBucketById = createEvent<number>();

fetchBucketFromStorage.watch(fetchBucketFromStorageFx);

export const $bucket = restore(fetchBucketFromStorageFx.doneData, emptyState);

$bucket.on(addProductToBucket, (state, payload) => {
  if (contain(state, payload)) {
    increaseSize({ id: payload.id, size: payload.size });
    return;
  }
  return [payload, ...state];
});
$bucket.on(removeAllProductsFromBucketById, (state, payload) =>
  state.filter((product) => product.id !== payload)
);

persist({
  store: $bucket,
  key: BUCKET_KEY,
});

$bucket.on(increaseSize, (state, payload) =>
  state.map((product) =>
    product.id === payload.id
      ? { ...product, size: product.size + (payload.size ?? 100) }
      : product
  )
);

$bucket.on(reduceSize, (state, payload) =>
  state.map((product) =>
    product.id === payload ? { ...product, size: product.size - 100 } : product
  )
);

export const $bucketWidgetActive = createStore(false);
export const setWidgetActive = createEvent<boolean>();

$bucketWidgetActive.on(setWidgetActive, (_, payload) => payload);
