import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";
import { v4 as uuid } from "uuid";

export const $userId = createStore<string>("");
export const createUserId = createEvent<void>();

$userId.on(createUserId, (state, _) => {
  if (state === "") {
    return uuid();
  }
  return state;
});

persist({
  store: $userId,
  key: "user-id",
});
