import { $userId, deleteFeedback } from "@entities/feed-back/model";
import { TFeedBack } from "@entities/feed-back/types";
import { StarRating, styled, Typography } from "@shared/ui";
import { CreateTime, FeedBackItemField, FeedbackOwner } from "../../atoms";
import { StarRatingWithConteiner } from "../../organisms/feed-back-form/feed-back-form";
import { ImagesList } from "../images-list";
import { useStore } from "effector-react";

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

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const DeleteText = styled(Typography)`
  width: 55px;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.palette.text.tertiary};
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.text.tertiary};
  cursor: pointer;
  display: flex;
  justify-self: right;
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
        content={dignities?.length ? dignities : "Пусто"}
      />
      <FeedBackItemField
        key={2}
        title={"Недостатки"}
        content={disadvantages?.length ? disadvantages : "Пусто"}
      />
      <FeedBackItemField
        key={3}
        title={"Комментарий"}
        content={comment?.length ? comment : "Пусто"}
      />
      <Title variant="body16">Фотографии</Title>
      <ImagesList images={imagesUrl ?? []} />
      {hasOwner ? (
        <DeleteText variant="body14" onClick={deleteHandler}>
          Удалить
        </DeleteText>
      ) : null}
    </Container>
  );
};
