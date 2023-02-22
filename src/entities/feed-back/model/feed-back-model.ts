import { createEvent, createStore, restore } from "effector";
import { persist } from "effector-storage/local";
import { TFeedBack } from "../types";

const emptyState: TFeedBack = {
  comment: "",
  dignities: "",
  disadvantages: "",
  name: "",
  imagesUrl: [],
  rating: 5,
};

export const addFeedBack = createEvent<TFeedBack>();
export const deleteFeedBack = createEvent();
export const $feedBack = restore(addFeedBack, emptyState).reset(deleteFeedBack);

persist({
  store: $feedBack,
  key: "user-feedback",
});
