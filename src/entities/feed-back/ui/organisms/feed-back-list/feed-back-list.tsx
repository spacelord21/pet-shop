import { $userId } from "@entities/feed-back/model";
import { TFeedBack } from "@entities/feed-back/types";
import { styled } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { ShowMoreButton } from "../../atoms";
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

const DEFAULT_FEEDBACK_VIEW = 5;

export const FeedBackList = ({ feedBacks }: TFeedBackListProps) => {
  const userId = useStore($userId);
  const feedbacksLength = feedBacks.length;
  const [viewLength, setLength] = useState<number>(0);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (viewLength === feedbacksLength) {
      setLength(1);
    } else if (viewLength + DEFAULT_FEEDBACK_VIEW > feedbacksLength) {
      setLength(viewLength + (feedbacksLength - viewLength));
    } else {
      setLength((prev) => prev + DEFAULT_FEEDBACK_VIEW);
    }
  };

  useEffect(() => {
    if (feedbacksLength !== 0) {
      setLength(1);
    }
  }, [feedbacksLength]);

  return (
    <Container>
      {feedBacks.slice(0, viewLength).map((feedback, index) => (
        <FeedBackItem
          feedBack={feedback}
          key={index}
          hasOwner={feedback.userId === userId}
        />
      ))}
      <ShowMoreButton
        feedbacksLength={feedBacks.length}
        handleClick={handleClick}
        quantity={
          feedbacksLength - viewLength > DEFAULT_FEEDBACK_VIEW
            ? DEFAULT_FEEDBACK_VIEW
            : feedbacksLength - viewLength
        }
      />
    </Container>
  );
};
