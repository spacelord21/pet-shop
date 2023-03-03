import { TFeedBack } from "@entities/feed-back/types";
import { mainUrl } from "@shared/index";
import { paths } from "../paths";

export const storeFeedbackInDB = async (feedBack: TFeedBack) => {
  const response = await fetch(`${mainUrl}${paths.createFeedBack.url}`, {
    method: paths.createFeedBack.method,
    body: JSON.stringify(feedBack),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка при создании отзыва!");
  }
};
