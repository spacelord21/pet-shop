import { styled, Typography } from "@shared/ui";
import { useState } from "react";
import { ModalWindow } from "../../molecules";
import { FeedBackForm } from "../../organisms";

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const FeedBack = () => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <Container>
      <Title variant="title">ВАШИ ОТЗЫВЫ</Title>
      <button onClick={() => setModalActive(true)}>добавить</button>
      <ModalWindow isActive={modalActive} setIsActive={setModalActive}>
        <FeedBackForm setIsActive={setModalActive} />
      </ModalWindow>
    </Container>
  );
};
