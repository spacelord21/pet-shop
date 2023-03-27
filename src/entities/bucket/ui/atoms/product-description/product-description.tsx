import { styled, Typography } from "@shared/ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  margin-left: ${({ theme }) => theme.spacing(1)}px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Price = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

type TProductDescProps = {
  title: string;
  price: number;
};

export const ProductDescription = ({ title, price }: TProductDescProps) => {
  return (
    <Container className="product-desc">
      <Title variant="body16" className="product-name">
        {title}
      </Title>
      <Price variant="body16" className="price">
        {price}.00₽
      </Price>
    </Container>
  );
};
