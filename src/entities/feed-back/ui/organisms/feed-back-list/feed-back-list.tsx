import { TFeedBack } from "@entities/feed-back/types";
import { Separator, styled } from "@shared/ui";
import { FeedBackItem } from "../../molecules";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`;

type TFeedBackListProps = {
  feedBacks: TFeedBack[];
};

export const FeedBackList = ({ feedBacks }: TFeedBackListProps) => {
  return (
    <Container>
      {feedBacks.map((feedback, index) => (
        <>
          <FeedBackItem feedBack={feedback} key={index} />
          <Separator />
        </>
      ))}
    </Container>
  );
};
