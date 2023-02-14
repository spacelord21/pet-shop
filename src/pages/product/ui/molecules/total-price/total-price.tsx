import { styled, Typography } from "@shared/ui";

const Text = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TTotalPriceProps = {
  size: number;
  price: number;
};

export const TotalPrice = ({ size, price }: TTotalPriceProps) => {
  return (
    <>
      {size ? (
        <>
          <Text variant="title">
            ₽{(size / 100) * price} за {size} грамм
          </Text>
        </>
      ) : null}
    </>
  );
};
