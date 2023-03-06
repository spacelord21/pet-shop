import { TFeedBack } from "@entities/feed-back/types";
import { StarRating, styled, Typography } from "@shared/ui";
import { CreateTime, FeedBackItemField, FeedbackOwner } from "../../atoms";
import { StarRatingWithConteiner } from "../../organisms/feed-back-form/feed-back-form";
import { ImagesList } from "../images-list";

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

type TFeedBackItemProps = {
  feedBack: TFeedBack;
};

export const FeedBackItem = ({ feedBack }: TFeedBackItemProps) => {
  const {
    dignities,
    comment,
    disadvantages,
    name,
    createTime,
    rating,
    imagesUrl,
  } = feedBack;
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
        title={"Достоинства"}
        content={dignities?.length ? dignities : "Пусто"}
      />
      <FeedBackItemField
        title={"Недостатки"}
        content={disadvantages?.length ? disadvantages : "Пусто"}
      />
      <FeedBackItemField
        title={"Комментарий"}
        content={comment?.length ? comment : "Пусто"}
      />
      <Title variant="body16">Фотографии</Title>
      <ImagesList images={imagesUrl ?? []} />
    </Container>
  );
};
