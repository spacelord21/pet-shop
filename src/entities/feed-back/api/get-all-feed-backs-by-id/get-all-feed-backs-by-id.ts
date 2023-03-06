import { TFeedBack } from "@entities/feed-back/types";
import { mainUrl } from "@shared/index";
import { paths } from "../paths";

export type TFeedBackModel = {
  productId: number;
  name: string | null;
  dignities: string | null;
  disadvantages: string | null;
  comment: string | null;
  imagesUrl: string[] | null;
  rating: number;
  createTime: string;
};

export const getAllFeedBacksById = async (
  productId: number
): Promise<TFeedBackModel[]> => {
  const response = await fetch(
    `${mainUrl}${paths.getAllById.url}${productId}`,
    {
      method: paths.getAllById.method,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Не удалось загрузить отзывы");
  }
  const result = response.json();
  return result;
};
