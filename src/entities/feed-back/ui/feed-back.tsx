import { PrimaryButton, styled, Typography } from "@shared/ui";
import { useStore } from "effector-react";
import { useState } from "react";
import { $feedBack } from "../model";
import { TFeedBack } from "../types";
import { FeedBackItem, ModalWindow } from "./molecules";
import { FeedBackForm } from "./organisms";
import { FeedBackList } from "./organisms/feed-back-list";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const FeedBack = () => {
  const [modalActive, setModalActive] = useState(false);
  const feedBack = useStore($feedBack);

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
        <FeedBackForm setIsActive={setModalActive} />
      </ModalWindow>
      <FeedBackItem feedBack={feedBack} />
    </Container>
  );
};
