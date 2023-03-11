export type TFeedBack = {
  feedbackId?: number;
  productId: number;
  name?: string;
  dignities?: string;
  disadvantages?: string;
  comment?: string;
  imagesUrl?: string[];
  rating: number;
  createTime: string;
  userId: string;
};
