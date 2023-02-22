import { TFeedBack } from "@entities/feed-back/types";
import { styled } from "@shared/ui";
import { FeedBackItem } from "../../molecules";

const Container = styled.div``;

type TFeedBackListProps = {
  feedBacks: TFeedBack[];
};

export const FeedBackList = ({ feedBacks }: TFeedBackListProps) => {
  return (
    <Container>
      {feedBacks.map((feedback, index) => (
        <FeedBackItem feedBack={feedback} key={index} />
      ))}
    </Container>
  );
};
