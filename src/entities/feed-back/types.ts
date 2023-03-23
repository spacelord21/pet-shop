export type TFeedBack = {
  feedbackId?: number;
  productId?: number;
  name?: string;
  dignities?: string;
  disadvantages?: string;
  comment?: string;
  imagesUrl?: string[];
  rating: number;
  createTime: string;
  userId: string;
  comments: TComment[];
};

export type TSortType = "DATE" | "RATING";

export type TComment = {
  id: number;
  name: string;
  comment: string;
  isAdmin: boolean;
  userId: string;
};
