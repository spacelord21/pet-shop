import { TComment } from "@entities/feed-back/types";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { CommentItem } from "../../molecules";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

type TCommentsListProps = {
  comments: TComment[];
  isFullView: boolean;
};

export const CommentsList = ({ comments, isFullView }: TCommentsListProps) => {
  const commentsSort = (comments: TComment[]): TComment[] => {
    const array = comments;
    array.sort((a, b) => (a.isAdmin ? -1 : 1));
    return array;
  };

  const {} = useWindowDimensions();

  return (
    <Container className="comments-list">
      {comments.length > 0 ? (
        isFullView ? (
          commentsSort(comments).map((comment) => (
            <CommentItem comment={comment} key={comment.id} />
          ))
        ) : (
          <CommentItem comment={commentsSort(comments)[0]} />
        )
      ) : null}
    </Container>
  );
};
