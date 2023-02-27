import { createEffect, createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";
import { getAllFeedBacksById } from "../api";
import { TFeedBack } from "../types";
import { mappedFeedBacks } from "./mappers";

const emptyState: TFeedBack = {
  productId: 0,
  comment: "",
  dignities: "",
  disadvantages: "",
  name: "",
  imagesUrl: [],
  rating: 5,
};

export const addFeedBack = createEvent<TFeedBack>();
export const deleteFeedBack = createEvent();
export const $userFeedBack = createStore<TFeedBack>(emptyState);

persist({
  store: $userFeedBack,
  key: "user-feedback",
});

export const $feedBacks = createStore<TFeedBack[]>([]);
export const fetchFeedBacksFx = createEffect<number, TFeedBack[], Error>(
  async (productId: number) => {
    return mappedFeedBacks(await getAllFeedBacksById(productId));
  }
);

export const fetchFeedBacks = createEvent<number>();

fetchFeedBacks.watch((productId) => fetchFeedBacksFx(productId));

// $feedBacks.on(fetchFeedBacksFx.doneData, (state, payload) => [
//   ...state,
//   payload,
// ]);

sample({
  clock: fetchFeedBacksFx,
  source: fetchFeedBacksFx.doneData,
  target: $feedBacks,
});
