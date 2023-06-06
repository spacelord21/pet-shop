import { deleteCommentFx, saveCommentFx } from "@entities/comment/model/store";
import { useWindowDimensions } from "@shared/hooks";
import { PrimaryButton, styled, Typography } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect } from "react";
import {
  $feedBacks,
  $formModal,
  $userId,
  createUserId,
  fetchFeedBacks,
  setActiveForm,
} from "../model";
import { ModalWindow } from "./molecules";
import { FeedBackForm } from "./organisms";
import { FeedBackList } from "./organisms/feed-back-list";

const Container = styled.div<{ isNotDesktop: boolean; width: number }>`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  width: ${({ isNotDesktop, width }) => (isNotDesktop ? width - 16 : 724)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

type TFeedBackProps = {
  productId: number;
};

export const FeedBack = ({ productId }: TFeedBackProps) => {
  const modalActive = useStore($formModal);
  const feedbacks = useStore($feedBacks);
  const userId = useStore($userId);
  const { isMobile, isTablet, width } = useWindowDimensions();
  const commentIsPending = useStore(saveCommentFx.pending);
  const deleteCommentPending = useStore(deleteCommentFx.pending);

  const createFeedbackHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (!userId) {
      createUserId();
    }
    setActiveForm(true);
  };

  useEffect(() => {
    fetchFeedBacks(productId);
  }, []);

  useEffect(() => {
    if (!commentIsPending) {
      fetchFeedBacks(productId);
    }
    if (!deleteCommentPending) {
      fetchFeedBacks(productId);
    }
  }, [commentIsPending, deleteCommentPending]);

  return (
    <Container
      isNotDesktop={isMobile || isTablet}
      width={width}
      className="feedbacks"
    >
      <Title variant="title">Ваши отзывы</Title>
      {userId && feedbacks.find((feedback) => feedback.userId === userId) ? (
        <Title variant="body16">У вас уже есть отзыв по этому продукту!</Title>
      ) : (
        <PrimaryButton onClick={createFeedbackHandler}>Добавить</PrimaryButton>
      )}

      <ModalWindow isActive={modalActive}>
        <FeedBackForm productId={productId} />
      </ModalWindow>

      <FeedBackList feedBacks={feedbacks} />
    </Container>
  );
};
