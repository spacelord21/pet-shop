import { createStore, createEvent } from "effector";

type TPopStore = {
  index: number;
  images: string[];
};

export const $popUpImages = createStore<TPopStore>({ index: 0, images: [] });
export const setPopUpImages = createEvent<TPopStore>();

$popUpImages.on(setPopUpImages, (_, payload) => payload);
