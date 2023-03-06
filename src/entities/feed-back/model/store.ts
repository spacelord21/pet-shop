import {
  createEffect,
  createEvent,
  createStore,
  sample,
  restore,
} from "effector";
import { useStore } from "effector-react";
import { persist } from "effector-storage/local";
import { getAllFeedBacksById, storeFeedbackInDB, uploadImages } from "../api";
import { TFeedBackModel } from "../api/get-all-feed-backs-by-id/get-all-feed-backs-by-id";
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
  createTime: "",
};

// при вызове ивента createFeedBack запускается эффект createFeedbackFx
// при doneData отзыв записывается в userfb и сохраняется в localstorage

export const setName = createEvent<string>();
export const setDignities = createEvent<string>();
export const setDisadvantages = createEvent<string>();
export const setComment = createEvent<string>();
export const setRating = createEvent<number>();
export const setProductId = createEvent<number>();
export const $name = createStore("");
export const $dignities = createStore("");
export const $disadvantages = createStore("");
export const $comment = createStore("");
export const $productId = createStore(0);
export const $rating = createStore(0);

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

$dignities.on(setDignities, (state, payload) => payload);
$disadvantages.on(setDisadvantages, (state, payload) => payload);
$name.on(setName, (state, payload) => payload);
$comment.on(setComment, (state, payload) => payload);
$rating.on(setRating, (state, payload) => payload);
$productId.on(setProductId, (state, payload) => payload);

uploadImagesFx.doneData.watch((payload) => {
  createFeedback({
    name: $name.getState(),
    productId: $productId.getState(),
    createTime: new Date().toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    rating: $rating.getState(),
    comment: $comment.getState(),
    dignities: $dignities.getState(),
    disadvantages: $disadvantages.getState(),
    imagesUrl: payload,
  });
});

createFeedback.watch((feedback) => createFeedbackFx(feedback));

$userFeedBack.on(createFeedback, (_, payload) => payload);
$userFeedBack.on(createFeedbackFx.fail, (state, _) => emptyState);

persist({
  store: $userFeedBack,
  key: "user-feedback",
});

export const $feedBacks = createStore<TFeedBack[]>([]);
export const fetchFeedBacksFx = createEffect<number, TFeedBackModel[], Error>(
  async (productId: number) => {
    return await getAllFeedBacksById(productId);
  }
);

export const fetchFeedBacks = createEvent<number>();

fetchFeedBacks.watch((productId) => fetchFeedBacksFx(productId));

sample({
  source: fetchFeedBacksFx.doneData,
  fn: (source) => {
    return mappedFeedBacks(source);
  },
  target: $feedBacks,
});

type TPopStore = {
  index: number;
  images: string[];
};

export const $popUpImages = createStore<TPopStore>({ index: 0, images: [] });
export const setPopUpImages = createEvent<TPopStore>();

$popUpImages.on(setPopUpImages, (_, payload) => payload);

export const selectors = () => {
  return {
    name: useStore($name),
    comment: useStore($comment),
    dignities: useStore($dignities),
    disadvantages: useStore($disadvantages),
    rating: useStore($rating),
  };
};
