import { TFeedBack } from "@entities/feed-back/types";
import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";
import { createFeedback, createFeedbackFx } from "../form-model";
import { v4 as uuid } from "uuid";

export const $userId = createStore<string>("");
export const createUserId = createEvent<void>();

$userId.on(createUserId, (_, payload) => uuid());

persist({
  store: $userId,
  key: "user-id",
});
