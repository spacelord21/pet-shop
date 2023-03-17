import { useWindowDimensions } from "@shared/hooks";
import { PrimaryButton, styled, Typography } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import {
  $feedBacks,
  $formModal,
  $userId,
  createFeedbackFx,
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

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

type TFeedBackProps = {
  productId: number;
};

export const FeedBack = ({ productId }: TFeedBackProps) => {
  const modalActive = useStore($formModal);
  const feedbacks = useStore($feedBacks);
  const userId = useStore($userId);
  const { isMobile, isTablet, width } = useWindowDimensions();

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
  return (
    <Container isNotDesktop={isMobile || isTablet} width={width}>
      <Title variant="title">ВАШИ ОТЗЫВЫ</Title>
      {userId && feedbacks.find((feedback) => feedback.userId === userId) ? (
        <Title variant="body16">У вас уже есть отзыв по этому продукту!</Title>
      ) : (
        <PrimaryButton onClick={createFeedbackHandler}>
          <ButtonText variant="title">Добавить</ButtonText>
        </PrimaryButton>
      )}

      <ModalWindow isActive={modalActive}>
        <FeedBackForm productId={productId} />
      </ModalWindow>
      <FeedBackList feedBacks={feedbacks} productId={productId} />
    </Container>
  );
};
