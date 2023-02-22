import { Typography, styled } from "@shared/ui";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TPriceForProductProps = {
  size: number;
  price: number;
};

export const PriceForProduct = ({ size, price }: TPriceForProductProps) => {
  return <Text variant="title">{(size * price) / 100}.00₽</Text>;
};
