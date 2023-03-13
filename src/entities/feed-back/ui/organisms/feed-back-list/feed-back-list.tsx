import { $userId } from "@entities/feed-back/model";
import { TFeedBack } from "@entities/feed-back/types";
import { Separator, styled } from "@shared/ui";
import { useStore } from "effector-react";
import { FeedBackItem } from "../../molecules";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  width: 100%;
`;

type TFeedBackListProps = {
  feedBacks: TFeedBack[];
  productId: number;
};

export const FeedBackList = ({ feedBacks, productId }: TFeedBackListProps) => {
  const userId = useStore($userId);
  return (
    <Container>
      {feedBacks.map((feedback, index) => (
        <>
          <FeedBackItem
            feedBack={feedback}
            key={index}
            hasOwner={feedback.userId === userId}
          />
          <Separator key={index} />
        </>
      ))}
    </Container>
  );
};
