import { TContactDetails } from "@entities/order/types";
import { createStore, createEvent } from "effector";
import { useStore } from "effector-react";

export const $name = createStore<string>("");
export const $phoneNumber = createStore<string>("");
export const $communicationPlace = createStore<string[]>(["Telegram"]);

export const setName = createEvent<string>();
export const setPhoneNumber = createEvent<string>();
export const setCommunicationPlace = createEvent<string>();

export const $formError = createStore(false);
export const setFormError = createEvent<boolean>();

export const createOrder = createEvent<TContactDetails>();

// createOrder.watch((payload) => {
//   if (
//     payload.communicationPlace.length === 0 ||
//     payload.name.length === 0 ||
//     payload.phone.length === 0
//   ) {
//     setFormError(true);
//     return;
//   }
// });

$formError.on(setFormError, (_, payload) => payload);

$name.on(setName, (_, payload) => payload);
$phoneNumber.on(setPhoneNumber, (_, payload) => payload);
$communicationPlace.on(setCommunicationPlace, (state, payload) => {
  if (!!state.find((item) => item === payload)) {
    return state.filter((item) => item !== payload);
  }
  return [...state, payload];
});

export const selectors = () => {
  return {
    name: useStore($name),
    phoneNumber: useStore($phoneNumber),
    communicationPlace: useStore($communicationPlace),
    formError: useStore($formError),
  };
};
