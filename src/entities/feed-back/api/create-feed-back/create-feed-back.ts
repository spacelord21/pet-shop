import { TFeedBack } from "@entities/feed-back/types";
import { mainUrl } from "@shared/index";
import { paths } from "../paths";

export const storeFeedbackInDB = async (feedBack: TFeedBack) => {
  await fetch(`${mainUrl}${paths.createFeedBack.url}`, {
    method: paths.createFeedBack.method,
    body: JSON.stringify(feedBack),
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error: Error) => {
    throw new Error("Ошибка при создании отзыва!");
  });
};
