import { styled, Typography } from "@shared/ui";

const Container = styled.div``;

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TTotalPriceProps = {
  totalPrice: number;
};

export const TotalPrice = ({ totalPrice }: TTotalPriceProps) => {
  return (
    <Container>
      <Text variant="title2">Итог</Text>
      <Text variant="title2">{totalPrice}.00₽</Text>
    </Container>
  );
};
