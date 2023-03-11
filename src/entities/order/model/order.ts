import { createEvent, createStore } from "effector";

export const $orderWidget = createStore<boolean>(false);
export const setOrderWidget = createEvent<boolean>();

$orderWidget.on(setOrderWidget, (_, payload) => payload);
