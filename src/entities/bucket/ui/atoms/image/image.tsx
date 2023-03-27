import { styled } from "@shared/ui";
import { useNavigate } from "react-router-dom";

const Img = styled.img<{ isNotDesktop: boolean }>`
  width: ${({ isNotDesktop }) => (isNotDesktop ? 100 : 150)}px;
  height: ${({ isNotDesktop }) => (isNotDesktop ? 150 : 200)}px;
`;

type TImageProps = {
  imageUrl: string;
  isNotDesktop: boolean;
  productId: number;
};

export const Image = ({ imageUrl, isNotDesktop, productId }: TImageProps) => {
  const navigate = useNavigate();
  return (
    <Img
      className="product-image"
      src={imageUrl}
      isNotDesktop={isNotDesktop}
      onClick={() => navigate(`/product-${productId}`)}
    />
  );
};
