import { TComment, TFeedBack } from "@entities/feed-back/types";
import { mainUrl } from "@shared/index";
import { paths } from "../paths";

export type TFeedBackModel = {
  feedbackId: number;
  productId: number;
  name: string | null;
  dignities: string | null;
  disadvantages: string | null;
  comment: string | null;
  imagesUrl: string[] | null;
  rating: number;
  createTime: string;
  userId: string;
  comments: TComment[];
};

export const getAllFeedBacksById = async (
  productId: number
): Promise<TFeedBackModel[]> => {
  return fetch(`${mainUrl}${paths.getAllById.url}${productId}`, {
    method: paths.getAllById.method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch(() => {
      throw new Error("Не удалось загрузить отзывы");
    });
};
