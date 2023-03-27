import { $userId, deleteFeedback } from "@entities/feed-back/model";
import { TFeedBack } from "@entities/feed-back/types";
import { Separator, styled, Typography } from "@shared/ui";
import { CreateTime, FeedBackItemField, FeedbackOwner } from "../../atoms";
import { StarRatingWithConteiner } from "../../organisms/feed-back-form/feed-back-form";
import { ImagesList } from "../images-list";
import { useStore } from "effector-react";
import { Comments } from "@entities/comment";
import { useState } from "react";

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(1)}px;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonText = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.palette.text.tertiary};
  cursor: pointer;
  display: flex;
  justify-self: right;
  padding: 16px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: ; */
`;

type TFeedBackItemProps = {
  feedBack: TFeedBack;
  hasOwner?: boolean;
};

export const FeedBackItem = ({ feedBack, hasOwner }: TFeedBackItemProps) => {
  const {
    dignities,
    comment,
    disadvantages,
    name,
    createTime,
    rating,
    imagesUrl,
    productId,
  } = feedBack;

  const [isFullView, setIsFullView] = useState(false);
  const userId = useStore($userId);

  const deleteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    deleteFeedback({ userId: userId, productId: productId });
  };

  return (
    <Container>
      <HeaderWrapper>
        <FeedbackOwner name={name?.length ? name : "Гость"} />
        <CreateTime createTime={createTime} />
      </HeaderWrapper>
      <StarRatingWithConteiner
        height={30}
        maxValue={5}
        readOnly={true}
        width={25}
        realRating={rating}
      />
      <FeedBackItemField
        key={1}
        title={"Достоинства"}
        content={dignities?.length ? dignities : ""}
      />
      <FeedBackItemField
        key={2}
        title={"Недостатки"}
        content={disadvantages?.length ? disadvantages : ""}
      />
      <FeedBackItemField
        key={3}
        title={"Комментарий"}
        content={comment?.length ? comment : ""}
      />
      {imagesUrl?.length! > 0 ? <ImagesList images={imagesUrl!} /> : null}
      <ButtonsContainer>
        {hasOwner ? (
          <ButtonText variant="body14" onClick={deleteHandler}>
            Удалить
          </ButtonText>
        ) : null}
        <ButtonText
          variant="body14"
          onClick={() => setIsFullView((prev) => !prev)}
        >
          {isFullView
            ? "Скрыть комментарии"
            : feedBack.comments.length > 1
            ? `Комментарии (${feedBack.comments.length - 1})`
            : "Добавить комментарий"}
        </ButtonText>
      </ButtonsContainer>
      <Comments
        comments={feedBack.comments}
        feedbackId={feedBack.feedbackId!}
        isFullView={isFullView}
        productId={productId!}
      />
      <Separator />
    </Container>
  );
};
