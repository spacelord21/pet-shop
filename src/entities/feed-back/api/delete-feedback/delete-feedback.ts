import { mainUrl } from "@shared/index";
import { paths } from "../paths";

export const deleteFeedbackFromDB = async (
  userId: string,
  productId: number
): Promise<void> => {
  const url =
    `${mainUrl}${paths.deleteFeedback.url}` +
    new URLSearchParams({
      userId: userId,
      productId: String(productId),
    }).toString();
  const response = await fetch(url, {
    method: paths.deleteFeedback.method,
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Не получилось удалить отзыв!");
  }
  return;
};
