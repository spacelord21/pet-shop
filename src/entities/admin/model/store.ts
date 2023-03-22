import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import { getALlFeedbacks } from "@entities/feed-back/api";
import { TFeedBackModel } from "@entities/feed-back/api/get-all-feed-backs-by-id/get-all-feed-backs-by-id";
import { mappedFeedBacks } from "@entities/feed-back/model/mappers";
import { TFeedBack } from "@entities/feed-back/types";
import {
  createEffect,
  createEvent,
  createStore,
  forward,
  sample,
} from "effector";
import { persist } from "effector-storage/local";
import { getPermission } from "../api";
import { TAdmin } from "../types";

const ADMIN_KEY = "admin";
export const $hasPermission = createStore<boolean>(false);
export const sendAdminInfo = createEvent<TAdmin>();
export const getPermissionFx = createEffect<TAdmin, boolean, Error>(
  async (adminInfo) => {
    return await getPermission(adminInfo);
  }
);

const fetchAllFeedbacksFx = createEffect<void, TFeedBackModel[], Error>(
  async () => {
    return await getALlFeedbacks();
  }
);

export const $allFeedbacks = createStore<TFeedBack[]>([]);

sample({
  clock: fetchAllFeedbacksFx.doneData,
  fn: (payload) => {
    return mappedFeedBacks(payload);
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

forward({
  from: sendAdminInfo,
  to: getPermissionFx,
});

$hasPermission.on(getPermissionFx.doneData, (_, payload) => payload);

persist({
  store: $hasPermission,
  key: ADMIN_KEY,
});
