import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Price = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

type TProductDescProps = {
  title: string;
  price: number;
};

export const ProductDescription = ({ title, price }: TProductDescProps) => {
  return (
    <Container>
      <Title variant="title">{title}</Title>
      <Price variant="body16">{price}</Price>
    </Container>
  );
};
