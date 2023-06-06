import { TProduct } from "@entities/products/types";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";

type TProductImageProps = Pick<TProduct, "imageUrl">;

const Container = styled.div<{ isNotDesktop: boolean }>`
  border: 0.5px solid ${({ theme }) => theme.palette.accent.primary};
  width: ${({ isNotDesktop }) => (isNotDesktop ? 360 : 500)}px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(49, 48, 82, 0.08);
  -moz-box-shadow: 0px 5px 10px 2px rgba(49, 48, 82, 0.08);
  box-shadow: 0px 5px 10px 2px rgba(49, 48, 82, 0.08);
`;

export const ProductImage = ({ imageUrl }: TProductImageProps) => {
  const { width, isMobile, isTablet } = useWindowDimensions();
  return (
    <Container isNotDesktop={isMobile || isTablet} className="product-image">
      <img
        src={imageUrl}
        width={isMobile || isTablet ? width - 5 : 350}
        height={500}
      />
    </Container>
  );
};
