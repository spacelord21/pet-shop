import { PrimaryButton, Separator, styled, Typography } from "@shared/ui";
import { TotalPrice } from "../../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-top: 200px;
`;

const ButtonText = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;

type TOrderSummaryProps = {
  totalPrice: number;
};

export const OrderSummary = ({ totalPrice }: TOrderSummaryProps) => {
  return (
    <Container>
      <TotalPrice totalPrice={totalPrice} />
      <Separator />
      <PrimaryButton onClick={() => {}}>
        <ButtonText variant="body16">Заказать</ButtonText>
      </PrimaryButton>
    </Container>
  );
};
