import { deleteFeedbackFromDB } from "@entities/feed-back/api";
import {
  getAllFeedBacksById,
  TFeedBackModel,
} from "@entities/feed-back/api/get-all-feed-backs-by-id/get-all-feed-backs-by-id";
import { TFeedBack } from "@entities/feed-back/types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { $userId } from "../local-storage-model";
import { mappedFeedBacks } from "../mappers";

export const $feedBacks = createStore<TFeedBack[]>([]);
export const deleteFeedback =
  createEvent<Pick<TFeedBack, "productId" | "userId">>();
export const fetchFeedBacksFx = createEffect<number, TFeedBackModel[], Error>(
  async (productId: number) => {
    return await getAllFeedBacksById(productId);
  }
);

const deleteFeedbackFx = createEffect<
  Pick<TFeedBack, "productId" | "userId">,
  void,
  Error
>(async (payload) => {
  return await deleteFeedbackFromDB(payload.userId, payload.productId);
});

export const fetchFeedBacks = createEvent<number>();

fetchFeedBacks.watch((productId) => fetchFeedBacksFx(productId));
deleteFeedback.watch((payload) => deleteFeedbackFx(payload));
deleteFeedbackFx.watch((payload) => fetchFeedBacksFx(payload.productId));

sample({
  source: fetchFeedBacksFx.doneData,
  fn: (source) => {
    const feedbacks: TFeedBack[] = mappedFeedBacks(source);
    feedbacks.sort(compareFunction);
    return feedbacks;
  },
  target: $feedBacks,
});

const compareFunction = (item1: TFeedBack, item2: TFeedBack) => {
  if (item1.userId === $userId.getState()) {
    return -1;
  }
  if (item2.userId === $userId.getState()) {
    return 0;
  }
  return 0;
};
