import { createEffect, createEvent, createStore, sample } from "effector";
import { useStore } from "effector-react";
import { persist } from "effector-storage/local";
import { getAllFeedBacksById, storeFeedbackInDB, uploadImages } from "../api";
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
  createDate: "",
};

// при вызове ивента createFeedBack запускается эффект createFeedbackFx
// при doneData отзыв записывается в userfb и сохраняется в localstorage

export const setName = createEvent<string>();
export const setDignities = createEvent<string>();
export const setDisadvantages = createEvent<string>();
export const setComment = createEvent<string>();
export const setRating = createEvent<number>();
export const setProductId = createEvent<number>();
export const $name = createStore("").reset(setName);
export const $dignities = createStore("").reset(setDignities);
export const $disadvantages = createStore("").reset(setDisadvantages);
export const $comment = createStore("").reset(setComment);
export const $productId = createStore(0).reset(setProductId);
export const $rating = createStore(0).reset(setRating);

export const createFeedback = createEvent<TFeedBack>();
export const deleteFeedBack = createEvent();
export const $userFeedBack = createStore<TFeedBack>(emptyState);
export const uploadImagesToCloudinary = createEvent<File[]>();

uploadImagesToCloudinary.watch((payload) => uploadImagesFx(payload));

export const uploadImagesFx = createEffect<File[], string[], Error>(
  async (files) => {
    return await uploadImages(files);
  }
);

const createFeedbackFx = createEffect<TFeedBack, void, Error>(
  async (feedBack) => {
    return await storeFeedbackInDB(feedBack);
  }
);

uploadImagesFx.doneData.watch((payload) =>
  createFeedback({
    name: $name.getState(),
    productId: $productId.getState(),
    createDate: new Date().toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    rating: $rating.getState(),
    comment: $comment.getState(),
    dignities: $dignities.getState(),
    disadvantages: $disadvantages.getState(),
    imagesUrl: payload,
  })
);

createFeedback.watch((feedback) => createFeedbackFx(feedback));

$userFeedBack.on(createFeedback, (_, payload) => payload);
$userFeedBack.on(createFeedbackFx.fail, (state, _) => emptyState);

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

export const selectors = () => {
  return {
    name: useStore($name),
    comment: useStore($comment),
    dignities: useStore($dignities),
    disadvantages: useStore($disadvantages),
    rating: useStore($rating),
  };
};
