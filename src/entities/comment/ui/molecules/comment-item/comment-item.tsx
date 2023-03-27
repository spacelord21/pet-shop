import { adminAvatar, avatars } from "@entities/comment/avatars";
import { $userId } from "@entities/feed-back/model";
import { TComment } from "@entities/feed-back/types";
import { styled, Typography } from "@shared/ui";
import { Avatar, Content, CreateTime, Name } from "../../atoms";
import { useStore } from "effector-react";
import { deleteCommentEv } from "@entities/comment/model/store";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  width: 100%;
`;

const AvatarAndName = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  position: relative;
  width: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 16px;
`;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

type TCommentItemProps = {
  comment: TComment;
};

export const CommentItem = ({ comment }: TCommentItemProps) => {
  const userId = useStore($userId);
  return (
    <Container className="comment-item">
      <AvatarAndName className="guest-preview">
        <Avatar
          url={comment.isAdmin ? adminAvatar : avatars[comment.avatarId]}
        />
        <Name
          name={
            comment.name.length > 0
              ? comment.name
              : comment.isAdmin
              ? "ПРОСТО | ВКУСНО"
              : "Гость"
          }
        />
        {comment.userId === userId ? (
          <ButtonContainer>
            <Text variant="body14" onClick={() => deleteCommentEv(comment.id)}>
              Удалить
            </Text>
          </ButtonContainer>
        ) : null}
      </AvatarAndName>
      <CreateTime createTime={comment.createTime} />
      <Content content={comment.comment} />
    </Container>
  );
};
