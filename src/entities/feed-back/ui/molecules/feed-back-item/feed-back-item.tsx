import { TFeedBack } from "@entities/feed-back/types";
import { styled } from "@shared/ui";
import { FeedBackItemField } from "../../atoms";

const Container = styled.div``;

type TFeedBackItemProps = {
  feedBack: TFeedBack;
};

export const FeedBackItem = ({ feedBack }: TFeedBackItemProps) => {
  const { dignities, comment, disadvantages } = feedBack;
  return (
    <Container>
      <FeedBackItemField title={"Достоинства"} content={dignities ?? "Пусто"} />
      <FeedBackItemField
        title={"Недостатки"}
        content={disadvantages ?? "Пусто"}
      />
      <FeedBackItemField title={"Комментарий"} content={comment ?? "Пусто"} />
    </Container>
  );
};
