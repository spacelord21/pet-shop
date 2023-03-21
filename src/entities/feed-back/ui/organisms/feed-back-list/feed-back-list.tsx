import { $userId } from "@entities/feed-back/model";
import { TFeedBack } from "@entities/feed-back/types";
import { styled } from "@shared/ui";
import { useStore } from "effector-react";
import { FeedBackItem } from "../../molecules";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

type TFeedBackListProps = {
  feedBacks: TFeedBack[];
};

export const FeedBackList = ({ feedBacks }: TFeedBackListProps) => {
  const userId = useStore($userId);

  return (
    <Container>
      {feedBacks.map((feedback, index) => (
        <FeedBackItem
          feedBack={feedback}
          key={index}
          hasOwner={feedback.userId === userId}
        />
      ))}
    </Container>
  );
};
