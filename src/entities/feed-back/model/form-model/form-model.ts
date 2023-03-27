import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import { storeFeedbackInDB, uploadImages } from "@entities/feed-back/api";
import { TFeedBack } from "@entities/feed-back/types";
import { createEffect, createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import { $userId } from "../local-storage-model";

export const setName = createEvent<string>();
export const setDignities = createEvent<string>();
export const setDisadvantages = createEvent<string>();
export const setComment = createEvent<string>();
export const setRating = createEvent<number>();
export const setProductId = createEvent<number>();
export const setActiveForm = createEvent<boolean>();
export const $name = createStore("").on(setName, (state, payload) => payload);
export const $dignities = createStore("").on(
  setDignities,
  (state, payload) => payload
);
export const $disadvantages = createStore("").on(
  setDisadvantages,
  (state, payload) => payload
);
export const $comment = createStore("").on(
  setComment,
  (state, payload) => payload
);
export const $productId = createStore(0).on(
  setProductId,
  (state, payload) => payload
);
export const $rating = createStore(0).on(
  setRating,
  (state, payload) => payload
);
export const $formModal = createStore(false).on(
  setActiveForm,
  (_, payload) => payload
);

export const createFeedback = createEvent<TFeedBack>();
export const uploadImagesToCloudinary = createEvent<File[]>();

uploadImagesToCloudinary.watch((payload) => {
  uploadImagesFx(payload);
});

export const uploadImagesFx = createEffect<File[], string[], Error>(
  async (files) => {
    return await uploadImages(files);
  }
);

export const createFeedbackFx = createEffect<TFeedBack, void, Error>(
  async (feedBack) => {
    return await storeFeedbackInDB(feedBack);
  }
);

createFeedback.watch((feedback) => createFeedbackFx(feedback));

uploadImagesFx.doneData.watch((payload) => {
  if (
    $comment.getState().length > 3000 ||
    $dignities.getState().length > 3000 ||
    $disadvantages.getState().length > 3000 ||
    $name.getState().length > 255
  ) {
    createAlert({
      message:
        "Максимальная длина поля отзыва равна 3000 символов. Пожалуйста, уменьшите текст.",
      timeout: DEFAULT_ALERT_TIMEOUT,
      type: "WARNING",
    });
    return;
  }
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
    userId: $userId.getState(),
    comments: [],
  });
});

createFeedbackFx.done.watch((payload) => setActiveForm(false));

export const selectors = () => {
  return {
    name: useStore($name),
    comment: useStore($comment),
    dignities: useStore($dignities),
    disadvantages: useStore($disadvantages),
    rating: useStore($rating),
  };
};
