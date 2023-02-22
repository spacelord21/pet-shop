import { removeAllProductsFromBucketById } from "@entities/bucket/model/store";
import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TRemoveAllButtonProps = {
  id: number;
};

export const RemoveAllButton = ({ id }: TRemoveAllButtonProps) => {
  return (
    <IconWrapper onClick={() => removeAllProductsFromBucketById(id)}>
      <Icon icon="material-symbols:close-sharp" width={25} height={25} />
    </IconWrapper>
  );
};
