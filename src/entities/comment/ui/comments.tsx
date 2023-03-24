import { TComment } from "@entities/feed-back/types";
import { Separator, styled } from "@shared/ui";
import { useState } from "react";
import { CommentsList } from "./molecules";
import { CommentForm } from "./molecules/comment-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

type TCommentsProps = {
  feedbackId: number;
  comments: TComment[];
  isFullView: boolean;
  productId: number;
};

export const Comments = ({
  comments,
  feedbackId,
  isFullView,
  productId,
}: TCommentsProps) => {
  return (
    <Container>
      <CommentsList comments={comments} isFullView={isFullView} />
      {isFullView ? (
        <>
          <Separator />
          <CommentForm feedbackId={feedbackId} productId={productId} />
        </>
      ) : null}
    </Container>
  );
};
