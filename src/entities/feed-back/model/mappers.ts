import { TFeedBackModel } from "../api/get-all-feed-backs-by-id/get-all-feed-backs-by-id";
import { TFeedBack } from "../types";

export const mappedFeedBacks = (feedBacks: TFeedBackModel[]): TFeedBack[] => {
  return feedBacks.map((feedBack) => ({
    productId: Number(feedBack.productId),
    rating: Number(feedBack.rating),
    comment: feedBack.comment ?? "",
    dignities: feedBack.dignities ?? "",
    disadvantages: feedBack.disadvantages ?? "",
    imagesUrl: feedBack.imagesUrl ?? [],
    name: feedBack.name ?? "",
    createTime: feedBack.createTime,
    feedbackId: Number(feedBack.feedbackId),
    userId: feedBack.userId,
  }));
};
