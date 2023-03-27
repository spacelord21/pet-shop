import { $hasPermission } from "@entities/admin";
import { createAlert, DEFAULT_ALERT_TIMEOUT } from "@entities/alert";
import { saveCommentEv, saveCommentFx } from "@entities/comment/model/store";
import { $userId, fetchFeedBacks } from "@entities/feed-back/model";
import { TextArea } from "@entities/feed-back/ui/atoms";
import { Loader, PrimaryButton, styled } from "@shared/ui";
import { useStore } from "effector-react";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 95%;
  margin-left: 16px;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

const Margin = styled.div`
  margin-top: ${({ theme }) => theme.spacing(0.5)}px;
`;

type TCommentFormProps = {
  feedbackId: number;
  productId: number;
};

export const CommentForm = ({ feedbackId, productId }: TCommentFormProps) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const isAdmin = useStore($hasPermission);
  const userId = useStore($userId);
  const loading = useStore(saveCommentFx.pending);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (comment.length === 0) {
      createAlert({
        message: "Ваш комментарий пустой",
        timeout: DEFAULT_ALERT_TIMEOUT,
        type: "ERROR",
      });
      return;
    }
    saveCommentEv({
      comment: comment,
      feedbackId: feedbackId,
      isAdmin: isAdmin,
      name: name,
      userId: userId,
      createTime: new Date().toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      avatarId: Math.floor(Math.random() * (15 - 0) + 0),
    });
    fetchFeedBacks(productId);
    setComment("");
    setName("");
  };

  return (
    <Container className="comment-form">
      <TextArea
        isName={true}
        isActive={true}
        name={"name"}
        setText={setName}
        text={name}
        title={"Введите ваше имя"}
        key={1}
      />
      <Margin />
      <TextArea
        isName={false}
        isActive={true}
        name={"comment"}
        setText={setComment}
        text={comment}
        title={"Напишите комментарий"}
        key={2}
      />
      <Margin />
      <PrimaryButton
        onClick={handleClick}
        disabled={comment.length === 0 || loading}
      >
        {loading ? <Loader /> : "Добавить"}
      </PrimaryButton>
      <Margin />
    </Container>
  );
};
