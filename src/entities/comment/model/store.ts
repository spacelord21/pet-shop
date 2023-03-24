import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import { TComment } from "@entities/feed-back/types";
import { createEffect, createEvent, createStore, forward } from "effector";
import { useStore } from "effector-react";
import { deleteComment, saveComment } from "../api";

export const saveCommentEv = createEvent<
  Omit<TComment, "id"> & { feedbackId: number }
>();
export const saveCommentFx = createEffect<
  Omit<TComment, "id"> & { feedbackId: number },
  void,
  Error
>(async (payload) => {
  return saveComment(payload.feedbackId, payload);
});

forward({
  from: saveCommentEv,
  to: saveCommentFx,
});

export const deleteCommentEv = createEvent<number>();
export const deleteCommentFx = createEffect<number, void, Error>(
  async (payload) => {
    return await deleteComment(payload);
  }
);

forward({
  from: deleteCommentEv,
  to: deleteCommentFx,
});

deleteCommentFx.failData.watch((payload) => {
  createAlert({
    message: payload.message,
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "ERROR",
  });
});
