import { TFeedBack } from "@entities/feed-back/types";
import { mainUrl } from "@shared/index";
import { TFeedBackModel } from "../get-all-feed-backs-by-id/get-all-feed-backs-by-id";
import { paths } from "../paths";

export const getAllFeedbacks = async (): Promise<TFeedBackModel[]> => {
  return await fetch(`${mainUrl}${paths.getAll.url}`, {
    method: paths.getAll.method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch(() => {
      throw new Error(
        "Не получилось загрузить отзывы. Пожалуйста, попробуйте еще раз."
      );
    });
};
