import {
  addProductToBucket,
  setWidgetActive,
} from "@entities/bucket/model/store";
import { TProduct } from "@entities/products/types";
import { AddToCartButton, PrimaryButton, styled, Typography } from "@shared/ui";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 0 0 25%;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(1)}px;
  -webkit-box-shadow: 0px 2px 6px 2px rgba(49, 48, 82, 0.08);
  -moz-box-shadow: 0px 2px 6px 2px rgba(49, 48, 82, 0.08);
  box-shadow: 0px 2px 6px 2px rgba(49, 48, 82, 0.08);
  padding: ${({ theme }) => theme.spacing(1)}px;
  transition: all 0.2 ease;
  &:hover {
    -webkit-box-shadow: 0px 8px 15px 2px rgba(49, 48, 82, 0.08);
    -moz-box-shadow: 0px 8px 15px 2px rgba(49, 48, 82, 0.08);
    box-shadow: 0px 8px 15px 2px rgba(49, 48, 82, 0.08);
    transform: scale(1.08);
  }
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
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

type TProductCardProps = Pick<
  TProduct,
  "imageUrl" | "title" | "price" | "id" | "rating"
>;

export const ProductCard = ({
  imageUrl,
  price,
  title,
  id,
  rating,
}: TProductCardProps) => {
  const navigate = useNavigate();
  return (
    <Container className="product-card">
      <ClickableWrapper
        onClick={() => navigate(`/product-${id}`)}
        className="product-card-content"
      >
        <img src={imageUrl} alt={title} width={230} height={306} />
        <ContentBody>
          <Title variant="body16">{title}</Title>
          <Title variant="body16">100 грамм - {price}₽</Title>
        </ContentBody>
      </ClickableWrapper>

      <AddToCartButton
        onClick={() => {
          setWidgetActive(true);
          addProductToBucket({
            id: id,
            imageUrl: imageUrl,
            price: price,
            size: 100,
            title: title,
            rating: rating,
          });
        }}
      />
    </Container>
  );
};
