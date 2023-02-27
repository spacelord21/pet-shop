import { removeAllProductsFromBucketById } from "@entities/bucket/model/store";
import { Icon } from "@iconify/react";
import { styled } from "@shared/ui";

const IconWrapper = styled.div`
  margin-left: 70px;
`;

type TRemoveButtonProps = {
  id: number;
};

export const RemoveButton = ({ id }: TRemoveButtonProps) => {
  return (
    <IconWrapper onClick={() => removeAllProductsFromBucketById(id)}>
      <Icon icon="material-symbols:close-sharp" width={25} height={25} />
    </IconWrapper>
  );
};
