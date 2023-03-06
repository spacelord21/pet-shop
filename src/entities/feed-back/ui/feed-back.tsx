import { PrimaryButton, styled, Typography } from "@shared/ui";
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { $feedBacks, fetchFeedBacks } from "../model";
import { ModalWindow } from "./molecules";
import { FeedBackForm } from "./organisms";
import { FeedBackList } from "./organisms/feed-back-list";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  width: 724px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

type TFeedBackProps = {
  productId: number;
};

export const FeedBack = ({ productId }: TFeedBackProps) => {
  const [modalActive, setModalActive] = useState(false);
  const feedbacks = useStore($feedBacks);

  useEffect(() => {
    fetchFeedBacks(productId);
  }, []);
  return (
    <Container>
      <Title variant="title">ВАШИ ОТЗЫВЫ</Title>
      <PrimaryButton
        onClick={() => {
          setModalActive(true);
        }}
      >
        <ButtonText variant="title">Добавить</ButtonText>
      </PrimaryButton>
      <ModalWindow isActive={modalActive} setIsActive={setModalActive}>
        <FeedBackForm setIsActive={setModalActive} productId={productId} />
      </ModalWindow>
      <FeedBackList feedBacks={feedbacks} />
    </Container>
  );
};
