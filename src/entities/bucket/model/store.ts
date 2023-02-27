import { TProduct } from "@entities/products/types";
import { createEffect, createEvent, restore } from "effector";
import { persist } from "effector-storage/local";

const BUCKET_KEY = "user-bucket";

const emptyState: TProduct[] = [];
const fetchBucketFromStorageFx = createEffect<void, TProduct[], Error>(() => {
  const productsFromStorage = localStorage.getItem(BUCKET_KEY);
  if (productsFromStorage) {
    return JSON.parse(productsFromStorage);
  } else {
    throw new Error("Корзина пуста");
  }
});

export const fetchBucketFromStorage = createEvent();
export const addProductToBucket = createEvent<TProduct>();
export const removeAllProductsFromBucket = createEvent();

fetchBucketFromStorage.watch(fetchBucketFromStorageFx);

export const $bucket = restore(
  fetchBucketFromStorageFx.doneData,
  emptyState
).reset(removeAllProductsFromBucket);

$bucket.on(addProductToBucket, (state, payload) => [...state, payload]);

persist({
  store: $bucket,
  key: BUCKET_KEY,
});
