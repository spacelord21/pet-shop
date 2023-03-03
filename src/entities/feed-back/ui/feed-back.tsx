import { PrimaryButton, styled, Typography } from "@shared/ui";
import { useState } from "react";
import { ModalWindow } from "./molecules";
import { FeedBackForm } from "./organisms";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
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
    </Container>
  );
};
