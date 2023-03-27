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
export const $name = createStore("");
export const $dignities = createStore("");
export const $disadvantages = createStore("");
export const $comment = createStore("");
export const $productId = createStore(0);
export const $rating = createStore(0);
export const $formModal = createStore(false);

$dignities.on(setDignities, (state, payload) => payload);
$disadvantages.on(setDisadvantages, (state, payload) => payload);
$name.on(setName, (state, payload) => payload);
$comment.on(setComment, (state, payload) => payload);
$rating.on(setRating, (state, payload) => payload);
$productId.on(setProductId, (state, payload) => payload);
$formModal.on(setActiveForm, (_, payload) => payload);

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
