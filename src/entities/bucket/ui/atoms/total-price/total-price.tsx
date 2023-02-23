import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TTotalPriceProps = {
  totalPrice: number;
};

export const TotalPrice = ({ totalPrice }: TTotalPriceProps) => {
  return (
    <Container>
      <Title variant="title">Итог</Title>
      <Title variant="title">{totalPrice}.00₽</Title>
    </Container>
  );
};
