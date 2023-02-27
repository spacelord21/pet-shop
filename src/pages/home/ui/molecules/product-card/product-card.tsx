import { TProduct } from "@entities/products/types";
import { OutlineButton, PrimaryButton, styled, Typography } from "@shared/ui";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 0 0 32%;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const Title = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
`;

const ButtonContent = styled(Typography)`
  /* color: ${({ theme }) => theme.palette.text.secondary}; */
  font-weight: 400;
`;

const ContentBody = styled.div`
  width: 230px;
  height: 72px;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const ClickableWrapper = styled.div`
  cursor: pointer;
`;

type TProductCardProps = Pick<TProduct, "imageUrl" | "title" | "price" | "id">;

export const ProductCard = ({
  imageUrl,
  price,
  title,
  id,
}: TProductCardProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <ClickableWrapper onClick={() => navigate(`/product-${id}`)}>
        <img src={imageUrl} alt={title} width={230} height={306} />
        <ContentBody>
          <Title variant="body16">{title}</Title>
          <Title variant="body16">100 грамм - {price}₽</Title>
        </ContentBody>
      </ClickableWrapper>

      <PrimaryButton
        onClick={() => {}}
        children={<ButtonContent variant="body16">ДОБАВИТЬ</ButtonContent>}
      />
    </Container>
  );
};
