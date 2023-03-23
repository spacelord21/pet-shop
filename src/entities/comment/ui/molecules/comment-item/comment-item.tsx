import { adminAvatar, avatars } from "@entities/comment/avatars";
import { TComment } from "@entities/feed-back/types";
import { styled } from "@shared/ui";
import { Avatar, Content, Name } from "../../atoms";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AvatarAndName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

type TCommentItemProps = {
  comment: TComment;
};

export const CommentItem = ({ comment }: TCommentItemProps) => {
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };

  return (
    <Container>
      <AvatarAndName>
        <Avatar
          url={
            comment.isAdmin
              ? adminAvatar
              : avatars[getRandomInt(0, avatars.length - 1)]
          }
        />
        <Name name={comment.name} />
      </AvatarAndName>
      <Content content={comment.comment} />
    </Container>
  );
};
