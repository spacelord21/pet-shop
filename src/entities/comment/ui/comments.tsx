import { TComment } from "@entities/feed-back/types";
import { styled } from "@shared/ui";
import { CommentsList } from "./molecules";
import { CommentForm } from "./molecules/comment-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type TCommentsProps = {
  feedbackId: number;
  comments: TComment[];
};

export const Comments = ({ comments, feedbackId }: TCommentsProps) => {
  return (
    <Container>
      <CommentsList comments={comments} isFullView={true} />
      <CommentForm feedbackId={feedbackId} />
    </Container>
  );
};
