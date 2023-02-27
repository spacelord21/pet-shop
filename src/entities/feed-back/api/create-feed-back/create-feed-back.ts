import { TFeedBack } from "@entities/feed-back/types";
import { mainUrl } from "@shared/index";
import { paths } from "../paths";

export const createFeedBack = async (feedBack: TFeedBack) => {
  const response = await fetch(`${mainUrl}${paths.createFeedBack}`, {
    method: paths.createFeedBack.method,
    body: JSON.stringify(feedBack),
  });
  if (!response.ok) {
    throw new Error("Ошибка при создании отзыва!");
  }
  return;
};
