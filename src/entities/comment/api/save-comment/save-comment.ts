import { TComment } from "@entities/feed-back/types";
import { mainUrl } from "@shared/index";

export const saveComment = async (
  feedbackId: number,
  comment: Omit<TComment, "id">
): Promise<void> => {
  return await fetch(`${mainUrl}/feedbacks/save-comment=${feedbackId}`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {})
    .catch(() => {
      throw new Error("Не удалось отправить комментарий. Попробуйте еще раз.");
    });
};
