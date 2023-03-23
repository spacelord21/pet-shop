import { TComment } from "@entities/feed-back/types";
import { createEffect, createEvent, forward } from "effector";
import { saveComment } from "../api";

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
