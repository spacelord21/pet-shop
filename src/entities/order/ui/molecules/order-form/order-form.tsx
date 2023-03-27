import { styled, Typography } from "@shared/ui";
import { NameInput, PhoneNumber } from "../../atoms";
import { ComChoose } from "../communication-choose";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`;

const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const OrderForm = () => {
  return (
    <Container className="order-form">
      <NameInput />
      <PhoneNumber />
      <Description variant="body16">
        Выберите предпочитаемое средство связи(можно несколько)
      </Description>
      <ComChoose />
    </Container>
  );
};
