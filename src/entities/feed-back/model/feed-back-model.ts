import { createEvent, createStore } from "effector";
import { TFeedBack } from "../types";

const emptyState: TFeedBack = {
  comment: "",
  dignities: "",
  disadvantages: "",
  name: "",
  imagesUrl: [],
  rating: 5,
};

export const $feedBack = createStore<TFeedBack>(emptyState);

export const addFeedBack = createEvent<TFeedBack>();

$feedBack.on(addFeedBack, (_, payload) => payload);
