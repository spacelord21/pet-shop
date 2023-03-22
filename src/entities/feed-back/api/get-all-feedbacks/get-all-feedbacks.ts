import { mainUrl } from "@shared/index";
import { TFeedBackModel } from "../get-all-feed-backs-by-id/get-all-feed-backs-by-id";
import { paths } from "../paths";

export const getALlFeedbacks = (): Promise<TFeedBackModel[]> => {
  return fetch(`${mainUrl}${paths.getAll.url}`, {
    method: paths.getAll.method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch(() => {
      throw new Error("Ошибка загрузки отзывов");
    });
};
