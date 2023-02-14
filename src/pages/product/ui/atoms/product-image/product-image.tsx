import { TProduct } from "@entities/products/types";
import { styled } from "@shared/ui";

type TProductImageProps = Pick<TProduct, "imageUrl">;

const Container = styled.div`
  border: 0.5px solid ${({ theme }) => theme.palette.accent.primary};
  /* background-size: contain; */
  /* background-position: center; */
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = ({ imageUrl }: TProductImageProps) => {
  return (
    <Container>
      <img src={imageUrl} width={350} height={500} />
    </Container>
  );
};
