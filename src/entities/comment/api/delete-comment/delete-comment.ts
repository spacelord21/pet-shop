import { mainUrl } from "@shared/index";

export const deleteComment = async (commentId: number): Promise<void> => {
  return await fetch(`${mainUrl}/feedbacks/delete-comment=${commentId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {})
    .catch(() => {
      throw new Error("Не получилось удалить комментарий. Попробуйте еще раз.");
    });
};
