import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import { deleteFeedbackFromDB } from "@entities/feed-back/api";
import { getAllFeedbacks } from "@entities/feed-back/api/get-all-feed-backs";
import {
  getAllFeedBacksById,
  TFeedBackModel,
} from "@entities/feed-back/api/get-all-feed-backs-by-id/get-all-feed-backs-by-id";
import { TFeedBack, TSortType } from "@entities/feed-back/types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { createFeedbackFx } from "../form-model";
import { $userId } from "../local-storage-model";
import { mappedFeedBacks } from "../mappers";

export const $sortType = createStore<TSortType>("RATING");
export const $feedBacks = createStore<TFeedBack[]>([]);
export const $allFeedbacks = createStore<TFeedBack[]>([]);
export const setSortType = createEvent<TSortType>();
export const deleteFeedback =
  createEvent<Pick<TFeedBack, "productId" | "userId">>();
export const fetchFeedBacksFx = createEffect<number, TFeedBackModel[], Error>(
  async (productId: number) => {
    return await getAllFeedBacksById(productId);
  }
);

export const fetchAllFeedbacksFx = createEffect<void, TFeedBackModel[], Error>(
  async () => {
    return await getAllFeedbacks();
  }
);

const deleteFeedbackFx = createEffect<
  Pick<TFeedBack, "productId" | "userId">,
  void,
  Error
>(async (payload) => {
  return await deleteFeedbackFromDB(payload.userId, payload.productId!);
});

export const fetchFeedBacks = createEvent<number>();

fetchFeedBacks.watch((productId) => fetchFeedBacksFx(productId));
deleteFeedback.watch((payload) => deleteFeedbackFx(payload));
deleteFeedbackFx.done.watch((payload) =>
  fetchFeedBacksFx(payload.params.productId!)
);

fetchFeedBacksFx.failData.watch((payload) => {
  createAlert({
    message: payload.message,
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "ERROR",
  });
});

deleteFeedbackFx.failData.watch((payload) => {
  createAlert({
    message: payload.message,
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "ERROR",
  });
});

deleteFeedbackFx.done.watch(() => {
  createAlert({
    message: "Отзыв успешно удален!",
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "SUCCESS",
  });
});

createFeedbackFx.done.watch(() => {
  createAlert({
    message: "Отзыв успешно добавлен!",
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "SUCCESS",
  });
});

sample({
  source: fetchFeedBacksFx.doneData,
  fn: (source) => {
    const feedbacks: TFeedBack[] = mappedFeedBacks(source);
    feedbacks.sort(compareFunction);
    return feedbacks;
  },
  target: $feedBacks,
});

sample({
  source: fetchAllFeedbacksFx.doneData,
  fn: (source) => {
    return sorting(mappedFeedBacks(source), $sortType.getState());
  },
  target: $allFeedbacks,
});

fetchAllFeedbacksFx.failData.watch((payload) => {
  createAlert({
    message: payload.message,
    timeout: DEFAULT_ALERT_TIMEOUT,
    type: "ERROR",
  });
});

createFeedbackFx.done.watch((payload) =>
  fetchFeedBacksFx(payload.params.productId!)
);

sample({
  clock: setSortType,
  source: $allFeedbacks,
  fn: (feedbacks, sortType) => {
    return sorting(feedbacks, sortType);
  },
  target: $allFeedbacks,
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

const sorting = (array: TFeedBack[], sortType: TSortType): TFeedBack[] => {
  switch (sortType) {
    case "RATING":
      array.sort((a, b) => (a.rating > b.rating ? -1 : 1));
      return array;
    case "DATE":
      array.sort((a, b) => {
        return (
          new Date(b.createTime).valueOf() - new Date(a.createTime).valueOf()
        );
      });
      return array;
    default:
      return array;
  }
};
