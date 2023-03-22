import { mainUrl } from "@shared/index";
import { paths } from "../paths";

export const adminDeleteFeedback = async (productId: number): Promise<void> => {
  const url =
    `${mainUrl}${paths.adminDelete.url}` +
    new URLSearchParams({
      productId: String(productId),
    }).toString();
  await fetch(url, {
    method: paths.adminDelete.method,
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err: Error) => {
    throw new Error("Не получилось удалить отзыв!");
  });
};
