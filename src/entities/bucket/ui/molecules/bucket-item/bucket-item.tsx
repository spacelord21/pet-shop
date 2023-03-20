import { TProductInBucket } from "@entities/bucket/types";
import { useWindowDimensions } from "@shared/hooks";
import { styled } from "@shared/ui";
import { PriceForProduct, RemoveAllButton } from "../../atoms";
import { ProductPreview } from "../product-preview";
import { SizeControl } from "../size-control";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 200px;
`;

const FlexWrapper = styled.div<{ isNotDesktop: boolean }>`
  display: flex;
  flex-direction: ${({ isNotDesktop }) => (isNotDesktop ? "column" : "row")};
`;

type TBucketItemProps = TProductInBucket;

export const BucketItem = ({
  id,
  imageUrl,
  price,
  size,
  title,
}: TBucketItemProps) => {
  const { isMobile, isTablet } = useWindowDimensions();
  return (
    <Container>
      <ProductPreview
        imageUrl={imageUrl}
        price={price}
        title={title}
        isNotDesktop={isMobile || isTablet}
        productId={id}
      />
      <FlexWrapper isNotDesktop={isMobile || isTablet}>
        <SizeControl id={id} size={size} />
        <PriceForProduct price={price} size={size} />
      </FlexWrapper>
      <RemoveAllButton id={id} />
    </Container>
  );
};
