import { Typography, styled } from "@shared/ui";

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;

type TPriceForProductProps = {
  size: number;
  price: number;
};

export const PriceForProduct = ({ size, price }: TPriceForProductProps) => {
  return <Text variant="title">{(size * price) / 100}.00₽</Text>;
};
