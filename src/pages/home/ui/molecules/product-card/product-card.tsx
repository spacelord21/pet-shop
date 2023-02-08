import { TProduct } from "@entities/products/types";
import { PrimaryButton, styled, Typography } from "@shared/ui";

const Container = styled.div`
  width: 230px;
  height: 306px;
  border: 1px solid black;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
`;

const ButtonContent = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 400;
`;

type TProductCardProps = Pick<TProduct, "imageUrl" | "title" | "price">;

export const ProductCard = ({ imageUrl, price, title }: TProductCardProps) => {
  return (
    <Container>
      <img src={imageUrl} alt={title} width={230} height={306} />
      <Title variant="title">{title}</Title>
      <Title variant="title">100 грамм - {price}₽</Title>
      <PrimaryButton
        onClick={() => {}}
        children={<ButtonContent variant="title">Добавить</ButtonContent>}
      />
    </Container>
  );
};
